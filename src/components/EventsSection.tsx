"use client";

import Image from "next/image";

const events = [
  {
    day: "Every Friday",
    title: "DJ Nights",
    description:
      "The best DJs spin everything from deep house to Bollywood remixes. The dancefloor opens at 9 PM.",
    time: "9:00 PM – 2:00 AM",
    highlight: "Weekly",
    image: "/djnights.jpg",
    color: "from-purple-900/60",
    icon: "🎧",
  },
  {
    day: "Every Saturday",
    title: "Live Music",
    description:
      "Bengaluru's best live bands and acoustic artists perform on our stage. Good music and great beer go hand-in-hand.",
    time: "8:00 PM – 12:00 AM",
    highlight: "This Week: Backstreet Saturday",
    image: "/livemusic.jpeg",
    color: "from-blue-900/60",
    icon: "🎸",
  },
  {
    day: "Match Days",
    title: "Sports Screenings",
    description:
      "Multiple screens, surround sound, and cold beers — watch every big game in the best atmosphere in Sarjapur.",
    time: "As per schedule",
    highlight: "IPL Season",
    image: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=500&q=85",
    color: "from-green-900/60",
    icon: "⚽",
  },
  {
    day: "Every Weekend",
    title: "Weekend Parties",
    description:
      "Themed nights, quiz nights, brewery tours, and more. Every weekend brings something new to Backstreet.",
    time: "8:00 PM – 1:00 AM",
    highlight: "Upcoming: Rooftop Bash",
    image: "https://images.unsplash.com/photo-1566417713940-fe7c737a9ef2?w=500&q=85",
    color: "from-amber-900/60",
    icon: "🎉",
  },
];

export default function EventsSection() {
  return (
    <section id="events" className="section-padding bg-brand-dark relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-purple-900/8 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-amber-500 text-sm font-semibold tracking-[0.2em] uppercase">
            Nightlife & Entertainment
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mt-3 mb-4">
            Events & <span className="text-gradient">Live Nights</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            From intimate live music sets to high-energy DJ nights — there&apos;s always
            something happening at Backstreet.
          </p>
        </div>

        {/* Events grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {events.map((event, idx) => (
            <div
              key={idx}
              className="group relative glass rounded-3xl overflow-hidden hover:border-amber-700/30 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
            >
              {/* Background image */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-t ${event.color} via-black/40 to-transparent`}
                />

                {/* Icon */}
                <div className="absolute top-4 left-4 text-3xl">{event.icon}</div>

                {/* Highlight badge */}
                <span className="absolute top-4 right-4 glass text-amber-400 text-xs font-bold px-3 py-1 rounded-full">
                  {event.highlight}
                </span>
              </div>

              {/* Content */}
              <div className="p-5">
                <p className="text-amber-400 text-xs font-semibold tracking-widest uppercase mb-1">
                  {event.day}
                </p>
                <h3 className="text-white font-display font-bold text-xl mb-2">{event.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">{event.description}</p>
                <div className="flex items-center gap-2 text-gray-500 text-xs">
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {event.time}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Newsletter/notify CTA */}
        <div className="mt-16 glass-amber rounded-3xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-display font-bold text-white mb-2">
              Never Miss a Night
            </h3>
            <p className="text-gray-400">
              Get event updates, exclusive passes, and early bird offers.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <input
              type="email"
              placeholder="your@email.com"
              className="glass rounded-full px-5 py-3 text-white placeholder-gray-500 text-sm bg-transparent focus:outline-none focus:ring-2 focus:ring-amber-500/50 min-w-[220px]"
            />
            <button className="bg-gradient-to-r from-amber-500 to-orange-600 text-black font-bold px-6 py-3 rounded-full text-sm uppercase tracking-wide hover:from-amber-400 hover:to-orange-500 transition-all whitespace-nowrap">
              Notify Me
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
