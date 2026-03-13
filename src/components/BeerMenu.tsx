"use client";

import Image from "next/image";

const beers = [
  {
    name: "Backstreet Lager",
    tagline: "Our Signature",
    description:
      "Smooth golden lager with a crisp, clean finish. Brewed with premium Pilsner malt and noble hops — the perfect session beer.",
    abv: "4.8%",
    ibu: "18",
    style: "American Lager",
    color: "from-yellow-700 to-amber-500",
    image: "https://images.unsplash.com/photo-1608270586620-248524c67de9?w=400&q=85",
    badge: "Best Seller",
  },
  {
    name: "Midnight Stout",
    tagline: "Dark & Deep",
    description:
      "Rich roasted malt stout with notes of dark chocolate and espresso. Silky smooth with a lingering bitter finish.",
    abv: "6.2%",
    ibu: "32",
    style: "Dry Stout",
    color: "from-gray-900 to-stone-700",
    image: "https://images.unsplash.com/photo-1555658636-6e4a36218be7?w=400&q=85",
    badge: "Staff Pick",
  },
  {
    name: "Citrus IPA",
    tagline: "Hop Forward",
    description:
      "Bursting with citrus and tropical aromas from Citra and Mosaic hops. Medium bitterness with a bright, refreshing finish.",
    abv: "6.5%",
    ibu: "55",
    style: "India Pale Ale",
    color: "from-orange-700 to-yellow-600",
    image: "https://images.unsplash.com/photo-1616098093213-6e716e666d98?w=400&q=85",
    badge: "Seasonal",
  },
  {
    name: "Wheat Bliss",
    tagline: "Light & Lively",
    description:
      "Unfiltered hefeweizen brewed with 50% wheat malt. Banana and clove esters with a hazy golden pour.",
    abv: "5.1%",
    ibu: "12",
    style: "Hefeweizen",
    color: "from-yellow-600 to-amber-400",
    image: "https://images.unsplash.com/photo-1571506165871-ee72a35bc9d4?w=400&q=85",
    badge: "New",
  },
];

export default function BeerMenu() {
  return (
    <section id="beers" className="section-padding bg-brand-dark relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-0 w-[600px] h-[400px] bg-amber-900/8 rounded-full blur-[160px]" />
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-amber-500 text-sm font-semibold tracking-[0.2em] uppercase">
            Brewed In-House
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mt-3 mb-4">
            Signature <span className="text-gradient">Craft Beers</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Eight taps. Endless possibilities. Each beer crafted from scratch in our
            on-site brewery with locally sourced ingredients.
          </p>
        </div>

        {/* Beer cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {beers.map((beer, idx) => (
            <div
              key={idx}
              className="group glass rounded-3xl overflow-hidden hover:border-amber-700/40 transition-all duration-500 hover:shadow-2xl hover:shadow-amber-900/30 hover:-translate-y-2"
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={beer.image}
                  alt={beer.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${beer.color} opacity-40`} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                {/* Badge */}
                <span className="absolute top-3 right-3 bg-amber-500 text-black text-xs font-bold px-3 py-1 rounded-full">
                  {beer.badge}
                </span>

                {/* Style tag */}
                <span className="absolute bottom-3 left-3 text-xs text-white/80 glass px-2 py-1 rounded-full">
                  {beer.style}
                </span>
              </div>

              {/* Content */}
              <div className="p-5">
                <p className="text-amber-400 text-xs font-semibold tracking-widest uppercase mb-1">
                  {beer.tagline}
                </p>
                <h3 className="text-xl font-display font-bold text-white mb-3">{beer.name}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">{beer.description}</p>

                {/* ABV / IBU */}
                <div className="flex gap-4 pt-4 border-t border-white/5">
                  <div>
                    <div className="text-amber-400 font-bold text-lg">{beer.abv}</div>
                    <div className="text-gray-500 text-xs">ABV</div>
                  </div>
                  <div>
                    <div className="text-amber-400 font-bold text-lg">{beer.ibu}</div>
                    <div className="text-gray-500 text-xs">IBU</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View all CTA */}
        <div className="text-center mt-12">
          <a
            href="#menu"
            className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 font-semibold text-sm uppercase tracking-widest group transition-colors"
          >
            Explore Full Tap List
            <svg
              className="w-4 h-4 group-hover:translate-x-1 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
