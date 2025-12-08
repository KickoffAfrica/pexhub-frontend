export type MessageRole = "user" | "assistant";

export type MessageStatus = "sending" | "sent" | "error";

export type QueryStatus = "PENDING" | "PROCESSING" | "COMPLETED" | "FAILED";

export interface Message {
  id: string;
  role: MessageRole;
  content: string;
  imageUrl?: string;
  timestamp: number;
  status?: MessageStatus;
  queryId?: string; // Backend query ID for reference
}

// Request to submit a new query
export interface QuerySubmitRequest {
  queryText: string;
  queryType: "TAX_INQUIRY";
  country: "Nigeria";
  sessionId?: string; // Empty string for first message, then use returned sessionId
}

// Response from submitting a query
export interface QuerySubmitResponse {
  message: string;
  query: {
    id: string;
    status: QueryStatus;
    createdAt: string;
  };
  sessionId?: string; // Session ID at root level, returned from first query
}

// Response from getting query result
export interface QueryResultResponse {
  query: {
    id: string;
    queryText: string;
    queryType: string;
    channel: string;
    country: string;
    status: QueryStatus;
    response?: {
      answer: string;
      sources: Array<{
        relevance: number;
        documentId: string;
        documentTitle: string;
      }>;
      confidence: number;
    };
    formattedResponse?: string;
    sources?: Array<{
      relevance: number;
      documentId: string;
      documentTitle: string;
    }>;
    errorMessage?: string | null;
    createdAt: string;
    processedAt?: string;
    user?: unknown;
  };
}

// Result from sending a chat message (includes sessionId)
export interface ChatMessageResult {
  response: string;
  sessionId?: string;
}

// Legacy types for backwards compatibility
export interface ChatApiRequest {
  message: string;
  image?: File;
  conversationId?: string;
}

export interface ChatApiResponse {
  response: string;
  conversationId?: string;
  error?: string;
}

export interface ChatState {
  messages: Message[];
  isLoading: boolean;
  error: string | null;
}

export interface ConversationHistory {
  id: string;
  messages: Message[];
  lastUpdated: number;
  title?: string;
}
