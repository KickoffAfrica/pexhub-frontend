import api from "@/lib/axios";
import { AxiosError } from "axios";
import {
  QuerySubmitRequest,
  QuerySubmitResponse,
  QueryResultResponse,
  ChatMessageResult,
} from "../types";

// Configuration
const POLL_INTERVAL = 2000; // 2 seconds
const POLL_TIMEOUT = 60000; // 60 seconds

/**
 * Remove the sources section from the response
 */
function stripSources(text: string): string {
  // Remove "**Sources:**" section and everything after it
  const sourcesPattern = /\n*\*?\*?Sources:\*?\*?\n[\s\S]*$/i;
  return text.replace(sourcesPattern, "").trim();
}

export class ChatApiError extends Error {
  constructor(
    message: string,
    public statusCode?: number,
    public details?: unknown
  ) {
    super(message);
    this.name = "ChatApiError";
  }
}

/**
 * Submit a new query to the backend
 * @param queryText - The user's question
 * @param sessionId - Session ID for continuing conversation (empty string for first message)
 */
export async function submitQuery(
  queryText: string,
  sessionId: string = ""
): Promise<QuerySubmitResponse> {
  try {
    const request: QuerySubmitRequest = {
      queryText,
      queryType: "TAX_INQUIRY",
      country: "Nigeria",
      sessionId,
    };

    const response = await api.post<QuerySubmitResponse>(
      "/api/queries",
      request
    );

    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      const statusCode = error.response?.status;
      const message =
        error.response?.data?.message ||
        error.message ||
        "Failed to submit query";

      throw new ChatApiError(message, statusCode, error.response?.data);
    }

    throw new ChatApiError(
      error instanceof Error ? error.message : "An unexpected error occurred"
    );
  }
}

/**
 * Get the result of a query by ID
 */
export async function getQueryResult(
  queryId: string
): Promise<QueryResultResponse> {
  try {
    const response = await api.get<QueryResultResponse>(
      `/api/queries/${queryId}`
    );

    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      const statusCode = error.response?.status;
      const message =
        error.response?.data?.message ||
        error.message ||
        "Failed to get query result";

      throw new ChatApiError(message, statusCode, error.response?.data);
    }

    throw new ChatApiError(
      error instanceof Error ? error.message : "An unexpected error occurred"
    );
  }
}

/**
 * Poll for query result until completed or timeout
 * Returns the response text
 */
export async function pollQueryResult(queryId: string): Promise<string> {
  const startTime = Date.now();

  while (true) {
    // Check for timeout
    if (Date.now() - startTime > POLL_TIMEOUT) {
      throw new ChatApiError(
        "Request timed out. Please try again.",
        408
      );
    }

    const result = await getQueryResult(queryId);
    const status = result.query.status;

    if (status === "COMPLETED") {
      // Return the formatted response with sources stripped
      const rawResponse =
        result.query.formattedResponse ||
        result.query.response?.answer ||
        "No response received";
      return stripSources(rawResponse);
    }

    if (status === "FAILED") {
      throw new ChatApiError(
        result.query.errorMessage || "Query failed. Please try again."
      );
    }

    // Still pending or processing, wait and poll again
    await new Promise((resolve) => setTimeout(resolve, POLL_INTERVAL));
  }
}

/**
 * Main function to send a chat message and get the response
 * Handles the full flow: submit -> poll -> return response with sessionId
 * @param queryText - The user's question
 * @param sessionId - Session ID for continuing conversation (empty string for first message)
 */
export async function sendChatMessage(
  queryText: string,
  sessionId: string = ""
): Promise<ChatMessageResult> {
  // Step 1: Submit the query with sessionId
  const submitResponse = await submitQuery(queryText, sessionId);
  const queryId = submitResponse.query.id;
  // Get sessionId from submit response (returned on first message)
  const newSessionId = submitResponse.sessionId;

  // Step 2: Poll for the result
  const response = await pollQueryResult(queryId);

  return {
    response,
    sessionId: newSessionId,
  };
}
