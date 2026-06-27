 import { motion } from "framer-motion";
 type Message = {
    id: number;
    role: "user" | "assistant";
    content: string;
};

type ChatMessageProps = {
    message: Message;
};
 export default function ChatMessage({
    message,
}: ChatMessageProps) {
    return (
 <motion.div
              key={message.id}
              initial={{ opacity: 0, y: 15, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className={`mb-4 flex ${
                message.role === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div className={`max-w-[50%] rounded-2xl px-3 py-2 ${
                  message.role === "user"
                    ? "border border-fuchsia-500/30 bg-fuchsia-500/10 text-white"
                    : "border border-white/10 bg-white/5 text-zinc-200"
                }`}
              >
                <p className="mb-2 text-[10px] uppercase tracking-[0.25em] text-zinc-500">
                  {message.role === "user" ? "You" : "Fusion AI"}
                </p>
               <p className="text-sm leading-relaxed">
  {message.content}
</p>
              </div>
            </motion.div>
)}