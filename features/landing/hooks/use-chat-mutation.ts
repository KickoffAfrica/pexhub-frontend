"use client";

import { useMutation } from "@tanstack/react-query";
import { sendChatMessage, ChatApiError } from "../services/chat-api";

interface ChatMutationVariables {
  message: string;
}

export function useChatMutation() {
  return useMutation<string, ChatApiError, ChatMutationVariables>({
    mutationFn: ({ message }) => sendChatMessage(message),
    retry: (failureCount, error) => {
      // Don't retry on client errors (4xx) or timeout
      if (error.statusCode && error.statusCode >= 400 && error.statusCode < 500) {
        return false;
      }
      // Retry up to 1 time for other errors
      return failureCount < 1;
    },
    retryDelay: 2000,
  });
}
