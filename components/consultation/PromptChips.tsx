
"use client";

type PromptChipsProps = {
  onSelect: (prompt: string) => void;
};

const prompts = [
  {
    label: "Fresh Citrus",
    value: "fresh citrus fragrance",
  },
  {
    label: "Summer Fresh",
    value: "summer fragrance",
  },
  {
    label: "Luxury Oud",
    value: "oud fragrance",
  },
  {
    label: "Romantic Rose",
    value: "rose fragrance",
  },
  {
    label: "Woody Luxury",
    value: "woody fragrance",
  },
  {
    label: "Sweet Vanilla",
    value: "vanilla perfume",
  },
  {
    label: "Winter Fragrance",
    value: "winter fragrance",
  },
  {
    label: "Formal Occasion",
    value: "formal fragrance",
  },
  {
    label: "Romantic Date",
    value: "date night fragrance",
  },
  {
    label: "Vanilla Lover",
    value: "vanilla fragrance",
  },
  {
    label: "Woody Perfume",
    value: "woody fragrance",
  },
  {
    label: "Office Wear",
    value: "office fragrance",
  },
];

export default function PromptChips({
  onSelect,
}: PromptChipsProps) {
  return (
    <div className="mt-8">
      <p className="mb-4 text-sm uppercase tracking-widest text-zinc-500">
        Popular Searches
      </p>

      <div className="flex flex-wrap gap-3">
        {prompts.map((prompt) => (
<button
  key={prompt.label}
  onClick={() => onSelect(prompt.value)}
  className="
    group
    relative
    overflow-hidden
    rounded-full
    border
    border-white/10
    bg-white/[0.03]
    px-5
    py-2.5
    text-sm
    font-medium
    text-white
    transition-all
    duration-500
    hover:border-fuchsia-500/60
    hover:text-white
    hover:shadow-[0_0_12px_rgba(168,85,247,.35),0_0_35px_rgba(217,70,239,.25)]
    hover:-translate-y-0.5
    hover:shadow-[0_0_18px_rgba(168,85,247,.45),0_0_45px_rgba(217,70,239,.35)]
  "
>
  {/* Purple Glow Background */}
  <span
    className="
      absolute
      inset-0
      rounded-full
      bg-gradient-to-r
      from-fuchsia-500/0
      via-fuchsia-500/15
      to-violet-500/0
      opacity-0
      blur-md
      transition-all
      duration-500
      group-hover:opacity-100
    "
  />

  {/* Animated Shine */}
  <span
    className="
      absolute
      inset-0
      -translate-x-full
      bg-gradient-to-r
      from-transparent
      via-white/25
      to-transparent
      transition-transform
      duration-700
      group-hover:translate-x-full
    "
  />

  <span className="relative z-10">
    ✦ {prompt.label}
  </span>
</button>        
//  <button
//   key={prompt.label}
//   onClick={() => onSelect(prompt.value)}
//   className="rounded-full border border-fuchsia-500 bg-fuchsia-500/20 px-4 py-2 text-sm text-white hover:bg-fuchsia-500/30"
// >
//   ✦ {prompt.label}
// </button>
        ))}
      </div>
    </div>
  );
}