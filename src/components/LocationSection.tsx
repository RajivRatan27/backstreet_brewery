"use client";

export default function LocationSection() {
  return (
    <section id="location" className="section-padding bg-brand-darker relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-amber-900/8 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-amber-500 text-sm font-semibold tracking-[0.2em] uppercase">
            Find Us
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mt-3 mb-4">
            Visit <span className="text-gradient">Backstreet</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            We&apos;re located in the heart of Sarjapur Road — a short cab ride from Koramangala,
            Whitefield, and HSR Layout.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-stretch">
          {/* Map */}
          <div className="rounded-3xl overflow-hidden h-[400px] lg:h-auto min-h-[400px] ring-1 ring-white/10 shadow-2xl relative group">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.7168254673784!2d77.69339781482124!3d12.921051290883693!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1359729e3a53%3A0x2485c1560cf190a!2sBackstreet%20Brewery!5e0!3m2!1sen!2sin!4v1710234567890!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 w-full h-full"
            />
            {/* Mini overlay tag */}
            <div className="absolute top-4 left-4 glass-amber rounded-xl px-4 py-2 z-10">
              <span className="text-amber-300 font-semibold text-sm">📍 We&apos;re here!</span>
            </div>
          </div>

          {/* Info */}
          <div className="space-y-6">
            {/* Address card */}
            <div className="glass rounded-2xl p-6 hover:border-amber-700/30 transition-colors">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-amber-900/30 flex items-center justify-center flex-shrink-0 text-amber-400">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">Address</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Backstreet Brewery<br />
                    Sarjapur Road, Kasavanahalli<br />
                    Bengaluru, Karnataka 560035
                  </p>
                  <a
                    href="https://maps.google.com/?q=Backstreet+Brewery+Sarjapur+Road+Bengaluru"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-amber-400 hover:text-amber-300 text-sm font-medium mt-2 group transition-colors"
                  >
                    Get Directions
                    <svg className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Phone card */}
            <div className="glass rounded-2xl p-6 hover:border-amber-700/30 transition-colors">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-amber-900/30 flex items-center justify-center flex-shrink-0 text-amber-400">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">Reservations & Inquiries</h3>
                  <a
                    href="tel:+919876543210"
                    className="text-amber-400 hover:text-amber-300 text-sm font-medium transition-colors"
                  >
                    +91 98765 43210
                  </a>
                  <br />
                  <a
                    href="https://wa.me/919876543210"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-green-400 hover:text-green-300 text-sm font-medium mt-1 transition-colors"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                    </svg>
                    Chat on WhatsApp
                  </a>
                </div>
              </div>
            </div>

            {/* Hours card */}
            <div className="glass rounded-2xl p-6 hover:border-amber-700/30 transition-colors">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-amber-900/30 flex items-center justify-center flex-shrink-0 text-amber-400">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="w-full">
                  <h3 className="text-white font-semibold mb-3">Opening Hours</h3>
                  <div className="space-y-2 text-sm">
                    {[
                      { day: "Monday – Thursday", time: "12:00 PM – 12:00 AM", status: "open" },
                      { day: "Friday", time: "12:00 PM – 2:00 AM", status: "open" },
                      { day: "Saturday", time: "11:00 AM – 2:00 AM", status: "open" },
                      { day: "Sunday", time: "11:00 AM – 12:00 AM", status: "open" },
                    ].map((h) => (
                      <div key={h.day} className="flex items-center justify-between">
                        <span className="text-gray-400">{h.day}</span>
                        <span className="text-amber-400 font-medium">{h.time}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-3 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                    <span className="text-green-400 text-xs font-semibold">Open Now</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
