import { ArrowRight } from "lucide-react";
type ChatInputProps = {
  message: string;
  setMessage: React.Dispatch<React.SetStateAction<string>>;
  handleSend: () => void;
};
export default function ChatInput({message,setMessage,handleSend,}: ChatInputProps) {
 

   

 return (  

<form
        onSubmit={(e) => {
          e.preventDefault();
        
          handleSend();
        }}
        className="
          flex
          flex-col
          gap-3
          sm:flex-row
        "
      >
    <input
  type="text"
  value={message}
  onChange={(e) => setMessage(e.target.value)}
  onKeyDown={(e) => {
    if (e.key === "Enter") {
      handleSend();
    }
  }}
  placeholder="Fresh office scent, summer perfume, luxury oud..."
  className="
    flex-1
    rounded-2xl
    border
    border-white/10
    bg-black/30
    px-5
    py-4
    text-white
    outline-none
    transition-all
    focus:border-fuchsia-500/40
  "
/>

<button
  onClick={handleSend}
  className="
    fusion-button
    flex
    items-center
    gap-2
    rounded-2xl
    px-6
  "
>
  Ask
  <ArrowRight size={18} />
</button>
      </form>
  )}