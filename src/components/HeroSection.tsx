"use client";

import Link from "next/link";
import FloatingFoodHero from "@/components/FloatingFoodHero";

export default function HeroSection() {
  return (
    <FloatingFoodHero>
      <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
        <Link
          href="#menu"
          className="group relative inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-400 hover:to-orange-500 text-black font-bold px-8 py-4 rounded-full text-sm tracking-wide uppercase transition-all duration-300 shadow-lg shadow-amber-900/40 hover:shadow-amber-700/50 hover:scale-105"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
            />
          </svg>
          View Menu
        </Link>
        <Link
          href="#reservation"
          className="inline-flex items-center gap-2 glass hover:bg-white/10 text-white font-bold px-8 py-4 rounded-full text-sm tracking-wide uppercase transition-all duration-300 hover:scale-105 border border-white/20"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          Book a Table
        </Link>
      </div>
    </FloatingFoodHero>
  );
}
