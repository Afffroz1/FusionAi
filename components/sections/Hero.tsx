"use client";
import { ArrowRight } from "lucide-react";


import { useState } from "react";
import FusionLogo from "@/components/ui/FusionLogo";
import ConsultationPanel from "@/components/consultation/ConsultationPanel";

export default function Hero() {

  const [consultationOpen, setConsultationOpen] = useState(false);
  return (
<section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6">

      {/* Left Glow */}



      <div
        className="
        absolute
        left-[-250px]
        top-[80px]
        h-[700px]
        w-[700px]
        rounded-full
        bg-fuchsia-700/10
        blur-[220px]
        "
      />

      {/* Right Glow */}

      <div
        className="
        absolute
        right-[-250px]
        bottom-[50px]
        h-[700px]
        w-[700px]
        rounded-full
        bg-indigo-700/10
        blur-[220px]
        "
      />

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center text-center">

        {/* Logo */}

        <div className="mb-8">
          <FusionLogo />
        </div>

        {/* Tagline */}

        <p
          className="
          text-xl
          tracking-[0.15em]
          uppercase
          text-zinc-400
          md:text-2xl
          "
        >
          Discover Your Signature Scent
        </p>

        {/* Description */}

        <p
          className="
          mt-8
          max-w-3xl
          text-lg
          leading-relaxed
          text-zinc-500
          "
        >
          Fusion AI combines fragrance expertise,
          scent profiling and artificial intelligence
          to recommend perfumes tailored to every
          personality, season and occasion.
        </p>

        {/* Buttons */}

       {/* Consultation */}

<div className="mt-14">

  {!consultationOpen && (
    <button
  onClick={() => setConsultationOpen(true)}
  className="
    group
    relative
    overflow-hidden

    inline-flex
    items-center
    justify-center
    gap-3

    rounded-full

    px-10
    py-4

    text-lg
    font-semibold
    text-white

    border
    border-fuchsia-500/20

   bg-gradient-to-b
from-[#ff3db8]
via-[#d1008f]
to-[#9b006d]

    transition-all
    duration-500

    hover:-translate-y-0.5
    hover:border-fuchsia-400/60
    hover:shadow-[0_0_20px_rgba(255,61,184,.45),0_0_45px_rgba(255,61,184,.30),0_0_70px_rgba(255,61,184,.15)]

    active:scale-[0.98]
  "
>
  {/* Purple Glow */}
  <span
    className="
      absolute
      inset-0
      rounded-full
      opacity-0
      blur-xl

      bg-gradient-to-r
      from-transparent
      via-fuchsia-500/40
      to-transparent

      transition-all
      duration-500

      group-hover:opacity-100
    "
  />

  {/* Shine Sweep */}
  <span
    className="
      absolute
      inset-0
      -translate-x-full

      bg-gradient-to-r
      from-transparent
      via-white/40
      to-transparent

      transition-transform
      duration-700

      group-hover:translate-x-full
    "
  />
{/* Purple Ambient Glow */}
<span
  className="
    absolute
    inset-0
    rounded-full
    bg-gradient-to-r
    from-transparent
    via-fuchsia-500/20
    to-transparent
    opacity-0
    blur-xl
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

<span className="relative z-10 flex items-center gap-3">
  Start AI Consultation
  <ArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />



    
  </span>
</button>
  )}

  {consultationOpen && (
    <ConsultationPanel />
  )}

</div>

      </div>

    </section>
  );
}