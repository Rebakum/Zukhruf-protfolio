import React, { useState } from "react";
import newsletterMug from "../assets/images/newsletter_mug_1783403322712.jpg";

export const Newsletter: React.FC = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      alert(`Thank you for subscribing with: ${email}`);
      setEmail("");
    }
  };

  return (
    <section className="bg-gradient-to-br from-[#800707] to-[#5A0303] text-white rounded-2xl p-8 overflow-hidden relative shadow-xl border border-[#991B1B]/40 group">
      <div className="grid grid-cols-1 sm:grid-cols-12 items-center gap-6">
        {/* Left Side: Subscription Form */}
        <div className="sm:col-span-8 text-left space-y-4 z-10">
          <span className="text-[11px] font-extrabold tracking-[0.2em] text-white/80 uppercase block">
            Stay Updated
          </span>
          <h3 className="text-xl font-black tracking-tight leading-none font-display">
            Subscribe To Newsletter
          </h3>
          <p className="text-[12px] leading-relaxed text-red-100 font-medium max-w-md">
            Get the latest updates, offers and design tips straight to your inbox.
          </p>

          {/* Form */}
          <form onSubmit={handleSubscribe} className="flex gap-3 max-w-md pt-2">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 bg-white/95 text-slate-900 placeholder-slate-400 text-[13px] font-bold px-4 py-3.5 rounded-xl border-0 focus:ring-2 focus:ring-white focus:outline-none transition-all"
            />
            <button
              type="submit"
              className="bg-[#E10F0F] hover:bg-[#C90D0D] text-white text-[12px] font-extrabold px-6 py-3.5 rounded-xl transition-colors duration-200 uppercase tracking-wider shrink-0"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Right Side: Mug Image */}
        <div className="sm:col-span-4 flex justify-center sm:justify-end">
          <div className="w-32 h-32 rounded-2xl overflow-hidden border border-white/10 shadow-lg shrink-0 transform transition-transform duration-500 group-hover:rotate-2 group-hover:scale-105">
            <img
              src={newsletterMug}
              alt="Zukhruf Brand Coffee Mug"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
