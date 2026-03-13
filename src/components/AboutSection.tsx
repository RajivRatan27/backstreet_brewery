"use client";

import Image from "next/image";

const features = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: "Fresh Craft Beer",
    description:
      "Brewed daily on-site with hand-selected hops and malts. Every batch is a unique expression of flavour.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    title: "Chef-Curated Menu",
    description:
      "Bold flavours inspired by global cuisine and local Bangalore palates. From wood-fired pizzas to grilled favourites.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
      </svg>
    ),
    title: "Live Events & Music",
    description:
      "DJ nights, live bands, sports screenings and themed parties every weekend — because great beer deserves great vibes.",
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="section-padding bg-brand-darker relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-900/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Image */}
          <div className="relative group">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/reviews.png"
                alt="Backstreet Brewery interior"
                width={700}
                height={500}
                className="object-contain w-full h-[320px] md:h-[420px] group-hover:scale-100 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </div>

            {/* Stats badge */}
            <div className="absolute -bottom-6 -right-4 glass-amber rounded-2xl p-5 shadow-2xl">
              <div className="flex items-center gap-4">
                <div className="text-center">
                  <div className="text-3xl font-display font-bold text-gradient-gold">8+</div>
                  <div className="text-xs text-gray-400 mt-0.5">Craft Beers</div>
                </div>
                <div className="w-px h-10 bg-amber-700/40" />
                <div className="text-center">
                  <div className="text-3xl font-display font-bold text-gradient-gold">200+</div>
                  <div className="text-xs text-gray-400 mt-0.5">Dishes</div>
                </div>
                <div className="w-px h-10 bg-amber-700/40" />
                <div className="text-center">
                  <div className="text-3xl font-display font-bold text-gradient-gold">5★</div>
                  <div className="text-xs text-gray-400 mt-0.5">Rated</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div className="space-y-8">
            <div>
              <span className="text-amber-500 text-sm font-semibold tracking-[0.2em] uppercase">
                Our Story
              </span>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-white mt-3 mb-5 leading-tight">
                Where Every Pint{" "}
                <span className="text-gradient">Tells a Story</span>
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed">
                Tucked into the heart of Sarjapur Road, Backstreet Brewery was born from a
                simple belief: that great beer and great food are best enjoyed together, in
                great company. We brew every batch with obsessive attention to craft — from
                the grain mill to your glass.
              </p>
              <p className="text-gray-400 text-lg leading-relaxed mt-4">
                Our kitchen draws inspiration from global street food culture while celebrating
                Bangalore&apos;s vibrant, eclectic spirit. Whether you&apos;re here for a quiet
                weeknight dinner or a Saturday night blowout, Backstreet is your place.
              </p>
            </div>

            {/* Feature highlights */}
            <div className="space-y-5">
              {features.map((feat, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-4 glass rounded-2xl p-5 hover:bg-white/[0.06] transition-colors group"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-amber-900/30 flex items-center justify-center text-amber-400 group-hover:bg-amber-900/40 transition-colors">
                    {feat.icon}
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">{feat.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{feat.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
