import React from 'react';
import { assets } from '../data/assets';

const sponsorNames = [
  'Green Earth Foundation',
  'Nature Alliance',
  'Eco Future',
  'Global Roots',
  'Youth For Climate',
  'Soil Ecology Coalition',
];

export default function SponsorTicker() {
  const sponsors = assets.logos.sponsors.map((placeholder, idx) => ({
    id: idx + 1,
    name: sponsorNames[idx] || `Sponsor ${idx + 1}`,
    placeholder
  }));
 
  // Duplicate the list of logos to create a seamless infinite marquee loop
  const tickerItems = [...sponsors, ...sponsors, ...sponsors, ...sponsors];

  return (
    <section className="bg-white py-12 overflow-hidden border-y border-forest-deep/5 relative">
      {/* Soft gradient fades on left and right for premium depth */}
      <div className="absolute top-0 bottom-0 left-0 w-16 md:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 bottom-0 right-0 w-16 md:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 mb-6 text-center">
        <span className="text-[10px] uppercase tracking-widest text-olive-accent font-semibold">
          Supported & Trusted By
        </span>
      </div>

      {/* Marquee Container with pause-on-hover capability */}
      <div className="flex select-none overflow-hidden group">
        <div className="flex animate-marquee whitespace-nowrap gap-12 pr-12 group-hover:[animation-play-state:paused] transition-all">
          {tickerItems.map((sponsor, idx) => (
            <div
              key={idx}
              className="inline-flex flex-col items-center justify-center min-w-[140px] md:min-w-[180px] aspect-[3/1] rounded-xl border border-forest-deep/5 bg-beige-warm/30 px-4 py-2 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 hover:border-olive-accent/30 hover:bg-white transition-all duration-300 cursor-pointer"
            >
              {/* Grayscale-to-color image logo placeholder */}
              {/* {sponsor.placeholder} */}
              {/* <span className="text-[10px] md:text-xs font-semibold text-forest-deep font-sans tracking-wider block text-center leading-none">
                {sponsor.name}
              </span>
              <span className="text-[8px] text-earth-brown/60 font-mono block mt-1">
                {sponsor.placeholder}
              </span> */}
              {/* 📸 স্পনসরের আসল লোগো ইমেজ */}
            <img 
              src={sponsor.placeholder} 
              alt={sponsor.name} 
              className="max-h-8 md:max-h-10 w-auto object-contain transition-all" 
            />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
