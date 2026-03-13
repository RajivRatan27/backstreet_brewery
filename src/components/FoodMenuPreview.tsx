"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const categories = [
  {
    id: "starters",
    label: "Starters",
    emoji: "🍟",
    items: [
      {
        name: "Brewery Nachos",
        desc: "Crispy tortillas, beer cheese, jalapeños, pico de gallo",
        price: "₹369",
        image: "https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?w=300&q=80",
        tag: "Popular",
      },
      {
        name: "Chicken Lollipops",
        desc: "Beer-battered crispy chicken, chipotle aioli",
        price: "₹429",
        image: "https://images.unsplash.com/photo-1567620832903-9fc6debc209f?w=300&q=80",
        tag: null,
      },
      {
        name: "Avocado Hummus",
        desc: "Whipped hummus, avocado, dukkah, toasted pita",
        price: "₹299",
        image: "https://images.unsplash.com/photo-1637090491695-76cad8782f46?w=300&q=80",
        tag: "Veg",
      },
    ],
  },
  {
    id: "pizzas",
    label: "Pizzas",
    emoji: "🍕",
    items: [
      {
        name: "Backstreet BBQ",
        desc: "Smoked pulled chicken, cheddar, caramelised onions, BBQ sauce",
        price: "₹549",
        image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=300&q=80",
        tag: "Chef's Pick",
      },
      {
        name: "Spicy Arrabbiata",
        desc: "San Marzano tomato, chillies, basil, fresh mozzarella",
        price: "₹469",
        image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=300&q=80",
        tag: "Veg",
      },
      {
        name: "Truffle Mushroom",
        desc: "Black truffle oil, mix mushrooms, parmesan, thyme",
        price: "₹599",
        image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=300&q=80",
        tag: "Premium",
      },
    ],
  },
  {
    id: "grill",
    label: "Grill & BBQ",
    emoji: "🥩",
    items: [
      {
        name: "Beer-Can Chicken",
        desc: "Half chicken, lager-braised, chimichurri, fries",
        price: "₹699",
        image: "https://images.unsplash.com/photo-1598514982901-9f6a22d3ce30?w=300&q=80",
        tag: "Signature",
      },
      {
        name: "Wagyu Beef Burger",
        desc: "Wagyu patty, smoked cheddar, truffle mayo, brioche bun",
        price: "₹849",
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=300&q=80",
        tag: "Premium",
      },
      {
        name: "Paneer Tikka Skewers",
        desc: "Tandoor-charred paneer, saffron yoghurt, mint chutney",
        price: "₹399",
        image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=300&q=80",
        tag: "Veg",
      },
    ],
  },
  {
    id: "asian",
    label: "Asian Bowls",
    emoji: "🍜",
    items: [
      {
        name: "Ramen Tonkotsu",
        desc: "Rich pork broth, chashu, soft egg, bamboo shoots, nori",
        price: "₹549",
        image: "https://images.unsplash.com/photo-1569050467447-ce54b3bbc37d?w=300&q=80",
        tag: null,
      },
      {
        name: "Thai Green Curry",
        desc: "Coconut green curry, seasonal vegetables, jasmine rice",
        price: "₹449",
        image: "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=300&q=80",
        tag: "Veg",
      },
      {
        name: "Korean BBQ Bao",
        desc: "Gochujang pork belly, pickled daikon, sesame, spring onion",
        price: "₹499",
        image: "https://images.unsplash.com/photo-1563245372-f21724e3856d?w=300&q=80",
        tag: null,
      },
    ],
  },
  {
    id: "dessert",
    label: "Desserts",
    emoji: "🍮",
    items: [
      {
        name: "Stout Chocolate Lava",
        desc: "Dark chocolate fondant infused with Midnight Stout, vanilla ice cream",
        price: "₹329",
        image: "https://images.unsplash.com/photo-1624353365286-3f8d62daad51?w=300&q=80",
        tag: "Must Try",
      },
      {
        name: "Mango Crème Brûlée",
        desc: "Alphonso mango custard, caramelised sugar crust",
        price: "₹299",
        image: "https://images.unsplash.com/photo-1470124182917-cc6e71b22ecc?w=300&q=80",
        tag: null,
      },
      {
        name: "Cheesecake Jar",
        desc: "New York style cheesecake, berry compote, graham crumble",
        price: "₹279",
        image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=300&q=80",
        tag: null,
      },
    ],
  },
];

export default function FoodMenuPreview() {
  const [activeCategory, setActiveCategory] = useState("starters");
  const active = categories.find((c) => c.id === activeCategory)!;

  return (
    <section id="menu" className="section-padding bg-brand-darker relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-orange-900/8 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-amber-500 text-sm font-semibold tracking-[0.2em] uppercase">
            Our Kitchen
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mt-3 mb-4">
            Food <span className="text-gradient">Menu</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Global street food, wood-fired pizzas, and everything in between —
            made from scratch to pair perfectly with our brews.
          </p>
        </div>

        {/* Category tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeCategory === cat.id
                  ? "bg-gradient-to-r from-amber-500 to-orange-600 text-black shadow-lg shadow-amber-900/40"
                  : "glass text-gray-300 hover:text-white hover:bg-white/10"
              }`}
            >
              <span>{cat.emoji}</span>
              {cat.label}
            </button>
          ))}
        </div>

        {/* Menu items grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {active.items.map((item, idx) => (
            <div
              key={idx}
              className="group glass rounded-2xl overflow-hidden hover:border-amber-700/30 transition-all duration-500 hover:shadow-xl hover:shadow-amber-900/20 hover:-translate-y-1"
            >
              <div className="relative h-44 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                {item.tag && (
                  <span
                    className={`absolute top-3 left-3 text-xs font-bold px-3 py-1 rounded-full ${
                      item.tag === "Veg"
                        ? "bg-green-500 text-white"
                        : item.tag === "Premium"
                        ? "bg-purple-500 text-white"
                        : "bg-amber-500 text-black"
                    }`}
                  >
                    {item.tag}
                  </span>
                )}
                <div className="absolute bottom-3 right-3 glass px-3 py-1 rounded-full">
                  <span className="text-amber-400 font-bold text-sm">{item.price}</span>
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-white font-semibold text-lg mb-1">{item.name}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* View full menu button */}
        <div className="text-center mt-12">
          <Link
            href="#"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-400 hover:to-orange-500 text-black font-bold px-10 py-4 rounded-full text-sm tracking-wide uppercase transition-all duration-300 shadow-lg shadow-amber-900/40 hover:scale-105"
          >
            View Full Menu
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
