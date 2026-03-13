"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface FloatingItem {
  src: string;
  alt: string;
  className: string;
  animationClass: string;
  size: number;
}

const floatingItems: FloatingItem[] = [
  {
    src: "https://images.unsplash.com/photo-1608270586620-248524c67de9?w=200&q=80",
    alt: "Craft beer glass",
    className:
      "absolute top-[8%] left-[4%] md:top-[12%] md:left-[6%] opacity-80 drop-shadow-2xl",
    animationClass: "animate-float",
    size: 200,
  },
  {
    src: "/backstreet1.png",
    alt: "Beer pint",
    className:
      "absolute top-[5%] right-[5%] md:top-[8%] md:right-[8%] opacity-80 drop-shadow-2xl",
    animationClass: "animate-float-delayed",
    size: 160,
  },
  {
    src: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=200&q=80",
    alt: "Gourmet pizza",
    className:
      "absolute bottom-[22%] left-[2%] md:bottom-[20%] md:left-[4%] opacity-80 drop-shadow-2xl",
    animationClass: "animate-float-slow",
    size: 180,
  },
  {
    src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=200&q=80",
    alt: "Burger",
    className:
      "absolute bottom-[18%] right-[3%] md:bottom-[22%] md:right-[6%] opacity-80 drop-shadow-2xl",
    animationClass: "animate-float",
    size: 180,
  },
  {
    src: "/backstreet2.png",
    alt: "Beer bottles",
    className:
      "absolute top-[38%] left-[0%] md:top-[40%] md:left-[2%] opacity-70 drop-shadow-2xl hidden md:block",
    animationClass: "animate-float-delayed",
    size: 100,
  },
  {
    src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=200&q=80",
    alt: "Gourmet dining plate",
    className:
      "absolute top-[40%] right-[0%] md:top-[42%] md:right-[2%] opacity-70 drop-shadow-2xl hidden md:block",
    animationClass: "animate-float-slow",
    size: 180,
  },
];

interface FloatingFoodHeroProps {
  title?: React.ReactNode;
  description?: string;
  children?: React.ReactNode;
  className?: string;
}

export default function FloatingFoodHero({
  title,
  description,
  children,
  className,
}: FloatingFoodHeroProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  }, []);

  return (
    <section
      className={cn(
        "relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-brand-darker",
        className
      )}
    >
      {/* Background gradient orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-amber/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-orange-900/15 rounded-full blur-[100px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-amber/5 rounded-full blur-[140px]" />
      </div>

      {/* Dark vignette overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 30%, rgba(7,7,7,0.7) 100%)",
        }}
      />

      {/* Floating food/drink images */}
      {floatingItems.map((item, idx) => (
        <div key={idx} className={cn(item.className, item.animationClass)}>
          <div className="relative rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/10">
            <Image
              src={item.src}
              alt={item.alt}
              width={item.size}
              height={item.size}
              className="object-cover"
              priority={idx < 2}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
          </div>
        </div>
      ))}

      {/* Hero content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Top badge */}
        <div className="inline-flex items-center gap-2 glass-amber rounded-full px-4 py-2 mb-8 text-sm font-medium text-amber-400 animate-fade-in">
          <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
          Sarjapur Road, Bengaluru
        </div>

        {/* Main heading */}
        <div className="animate-slide-up" style={{ animationDelay: "0.1s" }}>
          {title ?? (
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-tight mb-6">
              <span className="block text-white">Crafted Brews.</span>
              <span className="block text-gradient">Bold Flavours.</span>
            </h1>
          )}
        </div>

        {/* Description */}
        <p
          className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed animate-slide-up"
          style={{ animationDelay: "0.25s" }}
        >
          {description ??
            "Welcome to Backstreet Brewery — Bengaluru's destination for handcrafted beers, vibrant nightlife, and unforgettable dining experiences."}
        </p>

        {/* CTA buttons or children */}
        <div
          className="animate-slide-up"
          style={{ animationDelay: "0.4s" }}
        >
          {children}
        </div>
      </div>

      {/* Scroll indicator */}
      {/* <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500 animate-bounce">
        <span className="text-xs tracking-[0.2em] uppercase">Scroll</span>
        <svg
          width="16"
          height="24"
          viewBox="0 0 16 24"
          fill="none"
          className="opacity-60"
        >
          <rect x="1" y="1" width="14" height="22" rx="7" stroke="currentColor" strokeWidth="1.5" />
          <rect
            x="7"
            y="5"
            width="2"
            height="6"
            rx="1"
            fill="#D4840A"
            className="animate-bounce"
          />
        </svg>
      </div> */}
    </section>
  );
}
