import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Shield, Sparkles, Handshake, Globe, Compass, Eye } from 'lucide-react';
import { assets } from '../data/assets';

export default function About() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.substring(1);
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
    <div className="w-full pt-24 bg-beige-warm min-h-screen">
      {/* Page Header */}
      <section className="bg-forest-deep text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-tr from-forest-deep via-forest-mid to-olive-accent/15 opacity-80" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <span className="text-xs uppercase tracking-widest text-olive-accent font-semibold">About The Organization</span>
          <h1 className="text-4xl sm:text-5xl font-bold font-serif">Deep Roots, Micro Foundations</h1>
          <p className="text-sm text-[#D0CFC9] max-w-xl mx-auto font-light font-sans">
            Learn more about Earth's Ants Foundation: our team, our ecological research targets, and the global partners that make our field operations possible.
          </p>
        </div>
      </section>

      {/* Who We Are */}
      <section id="who-we-are" className="py-20 bg-white border-b border-forest-deep/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Visual block */}
            <div className="lg:col-span-5 aspect-[4/3] rounded-3xl bg-forest-mid flex flex-col items-center justify-center text-center p-6 border border-olive-accent/15 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-tr from-forest-deep to-olive-accent/25 opacity-90 z-0" />
              <img
                src={assets.images.aboutWhoWeAre}
                alt="Who We Are"
                className="w-full h-full object-cover absolute inset-0 z-0"
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
              <span className="relative z-10 text-xs text-[#ECEAE5] uppercase tracking-widest bg-forest-deep/80 px-3 py-1.5 rounded-full border border-olive-accent/10">
                Who We Are
              </span>
              <p className="relative z-10 text-[10px] text-[#D0CFC9] font-mono mt-2">[ {assets.images.aboutWhoWeAre} ]</p>
            </div>

            {/* Description */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-3">
                <span className="text-xs uppercase tracking-widest text-olive-accent font-semibold block">Who We Are</span>
                <h2 className="text-3xl sm:text-4xl font-bold text-forest-deep font-serif leading-tight">
                  Guardians of the Soil Ecosystem
                </h2>
              </div>
              
              <div className="space-y-4 text-xs sm:text-sm text-earth-brown leading-relaxed font-sans font-light">
                <p>
                  Established in 2021, <strong>Earth’s Ants Foundation</strong> arose from a simple realization: in our haste to conserve large mammals and giant forest canopies, global ecology had neglected the subterranean engine that keeps the Earth fertile.
                </p>
                <p>
                  Ants constitute a significant portion of our planet's insect biomass. As ecosystem engineers, their nesting behaviors aerate soils, mix minerals (bioturbation), accelerate organic decomposition, and provide root structures for native flora.
                </p>
                <p>
                  We are an international non-governmental organization combining strict scientific observation with public community outreach. By protecting formic habitats and restoring damaged soils using bio-inspired models, we help secure the future of our biosphere.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6 pt-4 border-t border-forest-deep/5">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 rounded-lg bg-olive-accent/10 flex items-center justify-center text-olive-accent flex-shrink-0">
                    <Shield size={16} />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-forest-deep uppercase tracking-wider">Habitat Advocacy</h4>
                    <p className="text-[11px] text-earth-brown/80 font-light mt-0.5">Protecting vital nesting and feeding zones.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 rounded-lg bg-olive-accent/10 flex items-center justify-center text-olive-accent flex-shrink-0">
                    <Sparkles size={16} />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-forest-deep uppercase tracking-wider">Bio-Replication</h4>
                    <p className="text-[11px] text-earth-brown/80 font-light mt-0.5">Applying biological systems to modern agriculture.</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section id="mission-vision" className="py-20 bg-soft-white border-b border-forest-deep/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            
            {/* Mission Card */}
            <div className="bg-white border border-forest-deep/5 rounded-3xl p-8 sm:p-10 shadow-sm hover:shadow-md transition-shadow space-y-6 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-forest-deep text-olive-accent flex items-center justify-center shadow-inner">
                  <Compass size={22} />
                </div>
                <h3 className="text-2xl font-bold font-serif text-forest-deep">Our Mission</h3>
                <p className="text-xs sm:text-sm text-earth-brown font-light leading-relaxed font-sans">
                  To protect microscopic biodiversity and restore planetary soil health by studying and conserving ant populations worldwide, fostering ecological literacy, and empowering community-led conservation movements.
                </p>
              </div>
              <div className="border-t border-forest-deep/5 pt-4">
                <span className="text-[9px] uppercase tracking-widest text-olive-accent font-semibold block">Commitment</span>
                <span className="text-xs text-earth-brown font-light">Directing 85% of all funds to field research & soil re-aeration projects.</span>
              </div>
            </div>

            {/* Vision Card */}
            <div className="bg-white border border-forest-deep/5 rounded-3xl p-8 sm:p-10 shadow-sm hover:shadow-md transition-shadow space-y-6 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-forest-deep text-olive-accent flex items-center justify-center shadow-inner">
                  <Eye size={22} />
                </div>
                <h3 className="text-2xl font-bold font-serif text-forest-deep">Our Vision</h3>
                <p className="text-xs sm:text-sm text-earth-brown font-light leading-relaxed font-sans">
                  A global eco-system where soil health is prioritized in carbon budgets, where micro-fauna habitats are legally defended, and where youth and scientific leaders collaborate to build bio-sustainable agricultural and forestry models.
                </p>
              </div>
              <div className="border-t border-forest-deep/5 pt-4">
                <span className="text-[9px] uppercase tracking-widest text-olive-accent font-semibold block">Prospect</span>
                <span className="text-xs text-earth-brown font-light">Onboarding 50 global research chapters by 2030.</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Supporters & Partners */}
      <section id="supporters-partners" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs uppercase tracking-widest text-olive-accent font-semibold block">Collaborations</span>
            <h2 className="text-3xl font-bold text-forest-deep font-serif">Supporters & Partners</h2>
            <p className="text-sm text-earth-brown font-sans font-light leading-relaxed">
              We work in collaboration with world-class academic groups, forestry bodies, and non-profits to support soil integrity projects.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="border border-forest-deep/5 bg-beige-warm/40 rounded-2xl p-6 flex flex-col items-center justify-center text-center space-y-3 hover:border-olive-accent/25 hover:bg-white transition-all duration-300 relative overflow-hidden min-h-[120px]">
              <img
                src={assets.logos.partners[0]}
                alt="Partner logo"
                className="w-full h-full object-contain absolute inset-0 p-4 z-0"
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
              <div className="relative z-10 flex flex-col items-center justify-center space-y-1">
                <Handshake className="text-olive-accent" size={24} />
                <h4 className="text-xs font-bold text-forest-deep font-sans uppercase tracking-wider">Oregon Soil Lab</h4>
                <span className="text-[9px] text-earth-brown/50 font-mono block">[ {assets.logos.partners[0]} ]</span>
              </div>
            </div>
            <div className="border border-forest-deep/5 bg-beige-warm/40 rounded-2xl p-6 flex flex-col items-center justify-center text-center space-y-3 hover:border-olive-accent/25 hover:bg-white transition-all duration-300 relative overflow-hidden min-h-[120px]">
              <img
                src={assets.logos.partners[1]}
                alt="Partner logo"
                className="w-full h-full object-contain absolute inset-0 p-4 z-0"
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
              <div className="relative z-10 flex flex-col items-center justify-center space-y-1">
                <Globe className="text-olive-accent" size={24} />
                <h4 className="text-xs font-bold text-forest-deep font-sans uppercase tracking-wider">Global Bio Trust</h4>
                <span className="text-[9px] text-earth-brown/50 font-mono block">[ {assets.logos.partners[1]} ]</span>
              </div>
            </div>
            <div className="border border-forest-deep/5 bg-beige-warm/40 rounded-2xl p-6 flex flex-col items-center justify-center text-center space-y-3 hover:border-olive-accent/25 hover:bg-white transition-all duration-300 relative overflow-hidden min-h-[120px]">
              <img
                src={assets.logos.partners[2]}
                alt="Partner logo"
                className="w-full h-full object-contain absolute inset-0 p-4 z-0"
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
              <div className="relative z-10 flex flex-col items-center justify-center space-y-1">
                <Handshake className="text-olive-accent" size={24} />
                <h4 className="text-xs font-bold text-forest-deep font-sans uppercase tracking-wider">Forest Conservation</h4>
                <span className="text-[9px] text-earth-brown/50 font-mono block">[ {assets.logos.partners[2]} ]</span>
              </div>
            </div>
            <div className="border border-forest-deep/5 bg-beige-warm/40 rounded-2xl p-6 flex flex-col items-center justify-center text-center space-y-3 hover:border-olive-accent/25 hover:bg-white transition-all duration-300 relative overflow-hidden min-h-[120px]">
              <img
                src={assets.logos.partners[3]}
                alt="Partner logo"
                className="w-full h-full object-contain absolute inset-0 p-4 z-0"
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
              <div className="relative z-10 flex flex-col items-center justify-center space-y-1">
                <Globe className="text-olive-accent" size={24} />
                <h4 className="text-xs font-bold text-forest-deep font-sans uppercase tracking-wider">Eco-Science Coalition</h4>
                <span className="text-[9px] text-earth-brown/50 font-mono block">[ {assets.logos.partners[3]} ]</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
