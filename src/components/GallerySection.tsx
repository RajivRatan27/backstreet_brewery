"use client";

import { useState } from "react";
import Image from "next/image";

const galleryImages = [
  {
    src: "/thebar.jpg",
    alt: "Brewery interior ambience",
    span: "col-span-2 row-span-2",
    caption: "The Bar",
  },
  {
    src: "https://images.unsplash.com/photo-1608270586620-248524c67de9?w=400&q=85",
    alt: "Craft beer close-up",
    span: "",
    caption: "Craft Beers",
  },
  {
    src: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&q=85",
    alt: "Gourmet pizza",
    span: "",
    caption: "Wood-Fired Pizza",
  },
  {
    src: "https://images.unsplash.com/photo-1566417713940-fe7c737a9ef2?w=400&q=85",
    alt: "Nightlife at the brewery",
    span: "",
    caption: "Nightlife",
  },
  {
    src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&q=85",
    alt: "Gourmet plating",
    span: "",
    caption: "Gourmet Dining",
  },
  {
    src: "/bb2.png",
    alt: "PhotoSpotvibe",
    span: "",
    caption: "The Vibe",
  },
  {
    src: "https://images.unsplash.com/photo-1516997121675-4c2d1684aa3e?w=600&q=85",
    alt: "Friends dining and laughing",
    span: "col-span-2",
    caption: "Friends & Good Times",
  },
];

export default function GallerySection() {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <section id="gallery" className="section-padding bg-brand-darker relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-amber-500 text-sm font-semibold tracking-[0.2em] uppercase">
            Visual Story
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mt-3 mb-4">
            Inside <span className="text-gradient">Backstreet</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            A glimpse into the atmosphere, the flavours, and the moments that make Backstreet Brewery Bengaluru&apos;s favourite gathering spot.
          </p>
        </div>

        {/* Masonry-style grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 auto-rows-[200px]">
          {galleryImages.map((img, idx) => (
            <div
              key={idx}
              className={`group relative overflow-hidden rounded-2xl cursor-pointer ${img.span}`}
              onClick={() => setSelected(img.src)}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300" />
              <div className="absolute inset-0 flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="glass text-white text-sm font-semibold px-3 py-1.5 rounded-full">
                  {img.caption}
                </span>
              </div>
              {/* Zoom icon */}
              <div className="absolute top-3 right-3 w-8 h-8 rounded-full glass flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                </svg>
              </div>
            </div>
          ))}
        </div>

        {/* Instagram CTA */}
        <div className="text-center mt-12">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-amber-400 font-semibold transition-colors group"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
            Follow @backstreetbrewery on Instagram
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>

      {/* Lightbox */}
      {selected && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelected(null)}
        >
          <button
            className="absolute top-4 right-4 text-white glass w-10 h-10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
            onClick={() => setSelected(null)}
          >
            ✕
          </button>
          <div className="relative max-w-4xl w-full max-h-[85vh] aspect-video rounded-2xl overflow-hidden">
            <Image
              src={selected}
              alt="Gallery preview"
              fill
              className="object-contain"
            />
          </div>
        </div>
      )}
    </section>
  );
}
