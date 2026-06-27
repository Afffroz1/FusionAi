"use client";

import { motion } from "framer-motion";

type TypingIndicatorProps = {
  isTyping: boolean;
};

export default function TypingIndicator({
  isTyping,
}: TypingIndicatorProps) {

  if (!isTyping) return null;

  return (
    <div className="flex justify-start">
      <div
        className="
          rounded-2xl
          border
          border-white/5
          bg-white/5
          px-4
          py-3
          backdrop-blur-xl
        "
      >
        <p className="mb-2 text-[10px] uppercase tracking-[0.25em] text-zinc-500">
          Fusion AI
        </p>

        <div className="flex gap-2">
          <motion.div
            className="h-2 w-2 rounded-full bg-fuchsia-400"
            animate={{
              opacity: [0.2, 1, 0.2],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              repeat: Infinity,
              duration: 1,
            }}
          />

          <motion.div
            className="h-2 w-2 rounded-full bg-fuchsia-400"
            animate={{
              opacity: [0.2, 1, 0.2],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              repeat: Infinity,
              duration: 1,
              delay: 0.2,
            }}
          />

          <motion.div
            className="h-2 w-2 rounded-full bg-fuchsia-400"
            animate={{
              opacity: [0.2, 1, 0.2],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              repeat: Infinity,
              duration: 1,
              delay: 0.4,
            }}
          />
        </div>
      </div>
    </div>
  );
}