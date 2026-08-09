import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Trophy, BookOpen, Heart, MessageSquare, Send, Mail, MapPin, Phone, ShieldCheck } from 'lucide-react';
import Hero from '../components/Hero';
import FeatureGrid from '../components/FeatureGrid';
import EventsSection from '../components/EventsSection';
import LeadershipSection from '../components/LeadershipSection';
import TestimonialSlider from '../components/TestimonialSlider';

export default function Home() {
  const location = useLocation();

  // Scroll to section on hash link redirect
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.substring(1);
      // Wait for rendering to complete
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 200);
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <div className="w-full">
      {/* Cinematic Hero */}
      <Hero />

      {/* Feature Grid */}
      <FeatureGrid />

      {/* Publications / Creations / Updates Section */}
      <section id="publications" className="py-24 bg-soft-white border-t border-forest-deep/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs uppercase tracking-widest text-olive-accent font-semibold block">
              Knowledge & Creations
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-forest-deep font-serif">
              Publications & Media Journals
            </h2>
            <p className="text-sm text-earth-brown font-sans max-w-md mx-auto font-light leading-relaxed">
              Read up on peer-reviewed soil data, member stories, or general media columns tracking microscopic ecology.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Sub-section: Member Blogs */}
            <div id="blogs" className="bg-white rounded-3xl p-8 border border-forest-deep/5 shadow-sm space-y-6 flex flex-col justify-between hover:shadow-md transition-shadow">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-olive-accent uppercase tracking-wider bg-olive-accent/10 px-3 py-1 rounded-full">
                    Member Blogs
                  </span>
                  <span className="text-xs text-earth-brown/50">3 Articles Available</span>
                </div>
                <h3 className="text-xl font-bold font-serif text-forest-deep">Perspectives from the Colony</h3>
                <div className="space-y-4 pt-2">
                  <div className="border-l-2 border-olive-accent/30 pl-4 space-y-1">
                    <h4 className="text-sm font-semibold text-forest-deep hover:text-olive-accent cursor-pointer transition-colors">Finding Solace in Soil Aeration</h4>
                    <p className="text-xs text-earth-brown font-light">By Rebecca Stone • 2 days ago</p>
                  </div>
                  <div className="border-l-2 border-olive-accent/30 pl-4 space-y-1">
                    <h4 className="text-sm font-semibold text-forest-deep hover:text-olive-accent cursor-pointer transition-colors">Formicary Sub-climates & Rain Patterns</h4>
                    <p className="text-xs text-earth-brown font-light">By Daniel Miller • 1 week ago</p>
                  </div>
                </div>
              </div>
              <div className="border-t border-forest-deep/5 pt-4">
                <span className="text-[10px] text-earth-brown/40 font-mono block mb-2">[ blogs-placeholder.jpg ]</span>
                <button className="text-xs text-forest-deep hover:text-olive-accent font-bold uppercase tracking-wider">
                  Read All Blogs →
                </button>
              </div>
            </div>

            {/* Sub-section: Research & Articles */}
            <div id="research" className="bg-white rounded-3xl p-8 border border-forest-deep/5 shadow-sm space-y-6 flex flex-col justify-between hover:shadow-md transition-shadow">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-olive-accent uppercase tracking-wider bg-olive-accent/10 px-3 py-1 rounded-full">
                    Research & Papers
                  </span>
                  <span className="text-xs text-earth-brown/50">Academic Focus</span>
                </div>
                <h3 className="text-xl font-bold font-serif text-forest-deep">Entomology & Soil Bioturbation</h3>
                <div className="space-y-4 pt-2">
                  <div className="border-l-2 border-olive-accent/30 pl-4 space-y-1">
                    <h4 className="text-sm font-semibold text-forest-deep hover:text-olive-accent cursor-pointer transition-colors">Micro-channeling: Root Absorption Impacts</h4>
                    <p className="text-xs text-earth-brown font-light">Published in Soil Biology Journal 2026</p>
                  </div>
                  <div className="border-l-2 border-olive-accent/30 pl-4 space-y-1">
                    <h4 className="text-sm font-semibold text-forest-deep hover:text-olive-accent cursor-pointer transition-colors">Ant Nest Density in Post-Wildfire Soils</h4>
                    <p className="text-xs text-earth-brown font-light">Ecology Press Review • March 2026</p>
                  </div>
                </div>
              </div>
              <div className="border-t border-forest-deep/5 pt-4">
                <span className="text-[10px] text-earth-brown/40 font-mono block mb-2">[ research-placeholder.jpg ]</span>
                <button className="text-xs text-forest-deep hover:text-olive-accent font-bold uppercase tracking-wider">
                  Browse Publications →
                </button>
              </div>
            </div>

            {/* Sub-section: Creative Corner */}
            <div id="creative" className="bg-white rounded-3xl p-8 border border-forest-deep/5 shadow-sm space-y-6 flex flex-col justify-between hover:shadow-md transition-shadow">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-olive-accent uppercase tracking-wider bg-olive-accent/10 px-3 py-1 rounded-full">
                    Creative Corner
                  </span>
                  <span className="text-xs text-earth-brown/50">Arts & Design</span>
                </div>
                <h3 className="text-xl font-bold font-serif text-forest-deep">Forest Floor Art Collections</h3>
                <div className="space-y-4 pt-2">
                  <div className="border-l-2 border-olive-accent/30 pl-4 space-y-1">
                    <h4 className="text-sm font-semibold text-forest-deep hover:text-olive-accent cursor-pointer transition-colors">Microscopic Lenses: Photoreactive Prints</h4>
                    <p className="text-xs text-earth-brown font-light">Exhibition Series by Arthur Clay</p>
                  </div>
                  <div className="border-l-2 border-olive-accent/30 pl-4 space-y-1">
                    <h4 className="text-sm font-semibold text-forest-deep hover:text-olive-accent cursor-pointer transition-colors">Echoes of the Colony: Forest Audio Logs</h4>
                    <p className="text-xs text-earth-brown font-light">Soundscape Project • 2026 Release</p>
                  </div>
                </div>
              </div>
              <div className="border-t border-forest-deep/5 pt-4">
                <span className="text-[10px] text-earth-brown/40 font-mono block mb-2">[ creative-placeholder.jpg ]</span>
                <button className="text-xs text-forest-deep hover:text-olive-accent font-bold uppercase tracking-wider">
                  Explore Creative works →
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Flagship Events & Programs */}
      <EventsSection />

      {/* Gallery Section */}
      <section id="gallery" className="py-24 bg-beige-warm border-t border-forest-deep/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs uppercase tracking-widest text-olive-accent font-semibold block">
              Exhibitions
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-forest-deep font-serif">
              Visual Archives & Bio-Activity
            </h2>
            <p className="text-sm text-earth-brown font-sans max-w-md mx-auto font-light leading-relaxed">
              A gallery showcase detailing colony architecture, field excursions, and microbiological soil mappings.
            </p>
          </div>

          {/* Responsive gallery grid with empty placeholders as requested */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="aspect-[4/3] rounded-3xl bg-forest-mid flex flex-col items-center justify-center border border-olive-accent/15 hover:border-olive-accent/40 shadow-sm relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-tr from-forest-deep to-transparent opacity-80" />
              <div className="relative z-10 p-4 text-center">
                <h4 className="text-white text-sm font-semibold">Tunnelling Cross-Section</h4>
                <span className="text-[10px] text-earth-brown/80 font-mono block mt-2 bg-white/10 px-3 py-1 rounded-full backdrop-blur-sm">
                  [ gallery-1.jpg ]
                </span>
              </div>
            </div>
            <div className="aspect-[4/3] rounded-3xl bg-forest-mid flex flex-col items-center justify-center border border-olive-accent/15 hover:border-olive-accent/40 shadow-sm relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-tr from-forest-deep to-transparent opacity-80" />
              <div className="relative z-10 p-4 text-center">
                <h4 className="text-white text-sm font-semibold">Bioturbation Workshop Oregon</h4>
                <span className="text-[10px] text-earth-brown/80 font-mono block mt-2 bg-white/10 px-3 py-1 rounded-full backdrop-blur-sm">
                  [ gallery-2.jpg ]
                </span>
              </div>
            </div>
            <div className="aspect-[4/3] rounded-3xl bg-forest-mid flex flex-col items-center justify-center border border-olive-accent/15 hover:border-olive-accent/40 shadow-sm relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-tr from-forest-deep to-transparent opacity-80" />
              <div className="relative z-10 p-4 text-center">
                <h4 className="text-white text-sm font-semibold">Micro-Ecological Camp 2026</h4>
                <span className="text-[10px] text-earth-brown/80 font-mono block mt-2 bg-white/10 px-3 py-1 rounded-full backdrop-blur-sm">
                  [ gallery-3.jpg ]
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recognition & Awards Section */}
      <section id="recognition" className="py-24 bg-soft-white border-t border-forest-deep/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs uppercase tracking-widest text-olive-accent font-semibold block">
              Achievements
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-forest-deep font-serif">
              Recognition & Global Awards
            </h2>
            <p className="text-sm text-earth-brown font-sans max-w-md mx-auto font-light leading-relaxed">
              We are proud to have our soil conservation advocacy recognized by international biology and conservation groups.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-3xl p-8 border border-forest-deep/5 flex flex-col items-center text-center space-y-4 hover:shadow-md transition-shadow">
              <div className="w-14 h-14 rounded-full bg-olive-accent/10 flex items-center justify-center text-olive-accent">
                <Trophy size={28} />
              </div>
              <h3 className="text-lg font-bold font-serif text-forest-deep">Bio-diversity Shield 2025</h3>
              <p className="text-xs sm:text-sm text-earth-brown font-light leading-relaxed font-sans">
                Awarded by the National Soil Ecology Council for our impactful community bioturbation mapping program.
              </p>
              <span className="text-[10px] text-earth-brown/40 font-mono block pt-2">[ award-1.jpg ]</span>
            </div>

            <div className="bg-white rounded-3xl p-8 border border-forest-deep/5 flex flex-col items-center text-center space-y-4 hover:shadow-md transition-shadow">
              <div className="w-14 h-14 rounded-full bg-olive-accent/10 flex items-center justify-center text-olive-accent">
                <ShieldCheck size={28} />
              </div>
              <h3 className="text-lg font-bold font-serif text-forest-deep">Green Canopy Accord</h3>
              <p className="text-xs sm:text-sm text-earth-brown font-light leading-relaxed font-sans">
                Official recognition by the World Reforestation Registry for micro-ecosystem protection structures.
              </p>
              <span className="text-[10px] text-earth-brown/40 font-mono block pt-2">[ award-2.jpg ]</span>
            </div>

            <div className="bg-white rounded-3xl p-8 border border-forest-deep/5 flex flex-col items-center text-center space-y-4 hover:shadow-md transition-shadow">
              <div className="w-14 h-14 rounded-full bg-olive-accent/10 flex items-center justify-center text-olive-accent">
                <Heart size={28} />
              </div>
              <h3 className="text-lg font-bold font-serif text-forest-deep">Eco Impact Award</h3>
              <p className="text-xs sm:text-sm text-earth-brown font-light leading-relaxed font-sans">
                Presented by the Youth for Soil Initiative for recruiting over 5,000 active soil stewards in 2025.
              </p>
              <span className="text-[10px] text-earth-brown/40 font-mono block pt-2">[ award-3.jpg ]</span>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Board */}
      <LeadershipSection />

      {/* Testimonials Slider */}
      <TestimonialSlider />

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-white border-t border-forest-deep/5 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left side details */}
            <div className="lg:col-span-5 space-y-6">
              <div className="space-y-3">
                <span className="text-xs uppercase tracking-widest text-olive-accent font-semibold block">
                  Connect With Us
                </span>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-forest-deep font-serif leading-tight">
                  Reach Out to The Colony
                </h2>
                <p className="text-sm text-earth-brown font-sans font-light leading-relaxed">
                  Have questions about academic collaborations, field programs, or recruitment? Drop us a line and our executive team will correspond shortly.
                </p>
              </div>

              <div className="space-y-4 pt-4">
                <div className="flex items-start space-x-3 text-sm text-earth-brown">
                  <MapPin size={18} className="text-olive-accent mt-1 flex-shrink-0" />
                  <span>108 Formicary Ave, Forest Canopy, Oregon, 97401</span>
                </div>
                <div className="flex items-center space-x-3 text-sm text-earth-brown">
                  <Phone size={18} className="text-olive-accent flex-shrink-0" />
                  <span>+1 (503) 555-0194</span>
                </div>
                <div className="flex items-center space-x-3 text-sm text-earth-brown">
                  <Mail size={18} className="text-olive-accent flex-shrink-0" />
                  <span>info@earthsants.org</span>
                </div>
              </div>
            </div>

            {/* Right side form */}
            <div className="lg:col-span-7 bg-beige-warm/40 border border-forest-deep/5 rounded-3xl p-8 sm:p-10 shadow-sm relative overflow-hidden">
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-semibold uppercase tracking-wider text-forest-deep block">Full Name</label>
                    <input
                      type="text"
                      required
                      placeholder="Jane Doe"
                      className="w-full bg-white border border-forest-deep/5 rounded-xl py-3 px-4 text-sm text-forest-deep placeholder-earth-brown/40 focus:outline-none focus:ring-1 focus:ring-olive-accent focus:border-olive-accent transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-semibold uppercase tracking-wider text-forest-deep block">Email Address</label>
                    <input
                      type="email"
                      required
                      placeholder="jane@example.com"
                      className="w-full bg-white border border-forest-deep/5 rounded-xl py-3 px-4 text-sm text-forest-deep placeholder-earth-brown/40 focus:outline-none focus:ring-1 focus:ring-olive-accent focus:border-olive-accent transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-semibold uppercase tracking-wider text-forest-deep block">Topic of Inquiry</label>
                  <select
                    className="w-full bg-white border border-forest-deep/5 rounded-xl py-3 px-4 text-sm text-forest-deep focus:outline-none focus:ring-1 focus:ring-olive-accent focus:border-olive-accent transition-all"
                  >
                    <option>General Conservation Inquiry</option>
                    <option>Scientific Partnerships</option>
                    <option>Recruitment Support</option>
                    <option>Sponsorships & Donations</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-semibold uppercase tracking-wider text-forest-deep block">Message Details</label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Describe your inquiry..."
                    className="w-full bg-white border border-forest-deep/5 rounded-xl py-3 px-4 text-sm text-forest-deep placeholder-earth-brown/40 focus:outline-none focus:ring-1 focus:ring-olive-accent focus:border-olive-accent transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-forest-deep hover:bg-forest-mid text-white font-semibold uppercase tracking-wider text-xs py-3.5 px-6 rounded-xl shadow-md transition-colors flex items-center justify-center space-x-2"
                >
                  <span>Dispatch Message</span>
                  <Send size={13} className="text-olive-accent" />
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
