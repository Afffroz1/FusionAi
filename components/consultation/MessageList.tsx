 "use client";
 import TypingIndicator from "./TypingIndicator";
//  import { motion } from "framer-motion";
import type { RefObject } from "react";
import ChatMessage from "./ChatMessage";
 type Message = {
  id: number;
  role: "user" | "assistant";
  content: string;
};

type MessageListProps = {
  messages: Message[];
  isTyping: boolean;
  messagesEndRef: RefObject<HTMLDivElement | null>;
};
 export default function MessageList({
  messages,
  isTyping,
  messagesEndRef,
}: MessageListProps) {

 return (
  <>
    {messages.length > 0 && (
      <div
        className="
          mb-6
          max-h-[420px]
          overflow-y-auto
          rounded-3xl
          border
          border-white/10
          bg-black/20
          p-5
          backdrop-blur-xl
        "
      >
        {messages.map((message) => (
          <ChatMessage
            key={message.id}
            message={message}
          />
        ))}

        <div ref={messagesEndRef} />

        <TypingIndicator isTyping={isTyping} />
      </div>
    )}
  </>
);
}