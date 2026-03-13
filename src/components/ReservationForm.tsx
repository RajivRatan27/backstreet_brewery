"use client";

import { useState } from "react";

export default function ReservationForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    guests: "2",
    date: "",
    time: "",
    occasion: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      id="reservation"
      className="section-padding bg-brand-dark relative overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-amber-900/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-amber-500 text-sm font-semibold tracking-[0.2em] uppercase">
            Reserve Your Spot
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mt-3 mb-4">
            Book a <span className="text-gradient">Table</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Whether it&apos;s a casual night out or a special celebration — we&apos;ll have your table ready.
          </p>
        </div>

        {submitted ? (
          <div className="glass-amber rounded-3xl p-12 text-center">
            <div className="text-6xl mb-4">🍺</div>
            <h3 className="text-2xl font-display font-bold text-white mb-3">
              Reservation Confirmed!
            </h3>
            <p className="text-gray-300 mb-6">
              Thanks, <span className="text-amber-400">{form.name}</span>! We&apos;ve received your
              reservation for <span className="text-amber-400">{form.guests} guests</span> on{" "}
              <span className="text-amber-400">{form.date}</span> at{" "}
              <span className="text-amber-400">{form.time}</span>. Our team will confirm via
              WhatsApp or call.
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="glass px-6 py-2 rounded-full text-amber-400 text-sm hover:bg-white/10 transition-colors"
            >
              Make Another Reservation
            </button>
          </div>
        ) : (
          <div className="glass rounded-3xl p-8 md:p-12">
            <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6">
              {/* Name */}
              <div className="space-y-2">
                <label className="text-sm text-gray-400 font-medium">Full Name *</label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Arjun Sharma"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-amber-500/50 focus:bg-white/[0.07] transition-all text-sm"
                />
              </div>

              {/* Phone */}
              <div className="space-y-2">
                <label className="text-sm text-gray-400 font-medium">Phone Number *</label>
                <input
                  type="tel"
                  required
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  placeholder="+91 98765 43210"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-amber-500/50 focus:bg-white/[0.07] transition-all text-sm"
                />
              </div>

              {/* Guests */}
              <div className="space-y-2">
                <label className="text-sm text-gray-400 font-medium">Number of Guests *</label>
                <select
                  required
                  value={form.guests}
                  onChange={(e) => setForm({ ...form, guests: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-amber-500/50 focus:bg-white/[0.07] transition-all text-sm appearance-none cursor-pointer"
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8, "9+", "Large Party (10+)"].map((n) => (
                    <option key={n} value={n} className="bg-brand-dark">
                      {n} {typeof n === "number" && n === 1 ? "Guest" : "Guests"}
                    </option>
                  ))}
                </select>
              </div>

              {/* Occasion */}
              <div className="space-y-2">
                <label className="text-sm text-gray-400 font-medium">Occasion (optional)</label>
                <select
                  value={form.occasion}
                  onChange={(e) => setForm({ ...form, occasion: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-amber-500/50 focus:bg-white/[0.07] transition-all text-sm appearance-none cursor-pointer"
                >
                  <option value="" className="bg-brand-dark">Select occasion</option>
                  <option className="bg-brand-dark">Birthday</option>
                  <option className="bg-brand-dark">Anniversary</option>
                  <option className="bg-brand-dark">Corporate</option>
                  <option className="bg-brand-dark">Date Night</option>
                  <option className="bg-brand-dark">Casual Dinner</option>
                </select>
              </div>

              {/* Date */}
              <div className="space-y-2">
                <label className="text-sm text-gray-400 font-medium">Preferred Date *</label>
                <input
                  type="date"
                  required
                  value={form.date}
                  onChange={(e) => setForm({ ...form, date: e.target.value })}
                  min={new Date().toISOString().split("T")[0]}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-amber-500/50 focus:bg-white/[0.07] transition-all text-sm [color-scheme:dark]"
                />
              </div>

              {/* Time */}
              <div className="space-y-2">
                <label className="text-sm text-gray-400 font-medium">Preferred Time *</label>
                <select
                  required
                  value={form.time}
                  onChange={(e) => setForm({ ...form, time: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-amber-500/50 focus:bg-white/[0.07] transition-all text-sm appearance-none cursor-pointer"
                >
                  <option value="" className="bg-brand-dark">Select time slot</option>
                  {["12:00 PM", "1:00 PM", "2:00 PM", "6:00 PM", "7:00 PM", "8:00 PM", "9:00 PM", "10:00 PM"].map(
                    (t) => (
                      <option key={t} value={t} className="bg-brand-dark">
                        {t}
                      </option>
                    )
                  )}
                </select>
              </div>

              {/* Submit */}
              <div className="md:col-span-2 mt-2">
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-400 hover:to-orange-500 text-black font-bold py-4 rounded-xl text-sm tracking-wide uppercase transition-all duration-300 shadow-lg shadow-amber-900/40 hover:shadow-amber-700/50 hover:scale-[1.02] flex items-center justify-center gap-2"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  Reserve Table
                </button>
                <p className="text-center text-gray-500 text-xs mt-3">
                  We&apos;ll confirm your booking within 30 minutes via call or WhatsApp.
                </p>
              </div>
            </form>
          </div>
        )}
      </div>
    </section>
  );
}
