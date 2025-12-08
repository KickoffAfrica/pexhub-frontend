"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import { Message, ChatState } from "../types";
import { sendChatMessage, ChatApiError } from "../services/chat-api";
import { useChatHistory } from "./use-chat-history";

interface ChatStateWithSession extends ChatState {
  sessionId: string;
}

export function useChat() {
  const {
    currentConversation,
    saveMessages,
    createNewConversation: createNewConv,
  } = useChatHistory();

  const currentUserMessageId = useRef<string | null>(null);
  const saveMessagesRef = useRef(saveMessages);
  const sessionIdRef = useRef<string>("");
  
  // Keep saveMessages ref updated
  useEffect(() => {
    saveMessagesRef.current = saveMessages;
  }, [saveMessages]);

  const [state, setState] = useState<ChatStateWithSession>({
    messages: [],
    isLoading: false,
    error: null,
    sessionId: "",
  });

  // Keep sessionIdRef in sync with state
  useEffect(() => {
    sessionIdRef.current = state.sessionId;
  }, [state.sessionId]);

  // Load messages from current conversation
  useEffect(() => {
    if (currentConversation) {
      setState((prev) => ({
        ...prev,
        messages: currentConversation.messages,
      }));
    }
  }, [currentConversation?.id]); // Only reload when conversation changes

  // Send a message
  const sendMessage = useCallback(
    async (content: string, image?: File) => {
      if (!content.trim() && !image) return;

      // Create user message
      const userMessage: Message = {
        id: `msg_${Date.now()}_user`,
        role: "user",
        content,
        imageUrl: image ? URL.createObjectURL(image) : undefined,
        timestamp: Date.now(),
        status: "sending",
      };

      currentUserMessageId.current = userMessage.id;

      // Add user message to state and set loading
      setState((prev) => ({
        ...prev,
        messages: [...prev.messages, { ...userMessage, status: "sent" }],
        isLoading: true,
        error: null,
      }));

      try {
        // Call API with current sessionId (empty string for first message)
        const result = await sendChatMessage(content, sessionIdRef.current);

        // Create assistant message
        const assistantMessage: Message = {
          id: `msg_${Date.now()}_assistant`,
          role: "assistant",
          content: result.response,
          timestamp: Date.now(),
        };

        // Add assistant message to state and update sessionId
        setState((prev) => {
          const updatedMessages = [...prev.messages, assistantMessage];
          // Save to localStorage
          saveMessagesRef.current(updatedMessages);
          return {
            ...prev,
            messages: updatedMessages,
            isLoading: false,
            // Store sessionId from response for subsequent messages
            sessionId: result.sessionId || prev.sessionId,
          };
        });
      } catch (error) {
        // Update user message status to error
        const errorMessage = error instanceof ChatApiError 
          ? error.message 
          : "Failed to send message. Please try again.";
          
        setState((prev) => ({
          ...prev,
          messages: prev.messages.map((msg) =>
            msg.id === currentUserMessageId.current
              ? { ...msg, status: "error" }
              : msg
          ),
          isLoading: false,
          error: errorMessage,
        }));
      }
    },
    [] // No dependencies - uses refs for stable reference
  );

  // Retry a failed message
  const retryMessage = useCallback(
    async (messageId: string) => {
      const message = state.messages.find((m) => m.id === messageId);
      if (!message) return;

      // Remove the failed message and any subsequent messages
      const messageIndex = state.messages.findIndex((m) => m.id === messageId);
      const filteredMessages = state.messages.slice(0, messageIndex);
      setState((prev) => ({
        ...prev,
        messages: filteredMessages,
      }));

      // Resend the message
      await sendMessage(message.content, undefined);
    },
    [state.messages, sendMessage]
  );

  // Start a new conversation
  const startNewConversation = useCallback(() => {
    createNewConv();
    // Reset state including sessionId for new conversation
    setState({
      messages: [],
      isLoading: false,
      error: null,
      sessionId: "", // Clear sessionId for new conversation
    });
  }, [createNewConv]);

  // Clear error
  const clearError = useCallback(() => {
    setState((prev) => ({ ...prev, error: null }));
  }, []);

  return {
    messages: state.messages,
    isLoading: state.isLoading,
    error: state.error,
    sendMessage,
    retryMessage,
    startNewConversation,
    clearError,
  };
}

