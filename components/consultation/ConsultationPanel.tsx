"use client";
// import { fragrance, type Fragrance } from "@/data/fragrance";
//import { ArrowRight } from "lucide-react";
// import ChatMessage from "./ChatMessage";
import { recommendPerfume } from "@/lib/recommendation/recommendPerfume";


import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

import PromptChips from "./PromptChips";
import ChatInput from "./ChatInput";

import MessageList from "./MessageList";

// Chat message type
type Message = {
  id: number;
  role: "user" | "assistant";
  content: string;
};

export default function ConsultationPanel() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto scroll to newest message
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);


  const handleSend = () => {
    if (!message.trim()) return;

    const userMessage: Message = {
      id: Date.now(),
      role: "user",
      content: message,
    };

    setMessages((prev) => [...prev, userMessage]);
    setMessage("");
    setIsTyping(true);

    setTimeout(() => {
      const response = recommendPerfume(userMessage.content);

      const aiMessage: Message = {
        id: Date.now() + 1,
        role: "assistant",
        content: response,
      };
      setMessages((prev) => [...prev, aiMessage]);
      setIsTyping(false);
    }, 1500);
  };
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="
        mt-10
        w-full
        max-w-4xl
        fusion-card
        p-8
      "
    >
      <h2 className="mb-2 text-2xl font-semibold text-white">
        Ask Fusion AI
      </h2>

      <p className="mb-6 text-zinc-400">
        Describe the fragrance youre looking for.
      </p>

     <MessageList
  messages={messages}
  isTyping={isTyping}
  messagesEndRef={messagesEndRef}
/>
<ChatInput
    message={message}
    setMessage={setMessage}
    handleSend={handleSend}
/>
      
<PromptChips onSelect={setMessage} />

    </motion.div>
  );
}
