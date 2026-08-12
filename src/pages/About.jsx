import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Shield, Sparkles, Handshake, Globe, Compass, Eye } from 'lucide-react';
import { assets } from '../data/assets';

// Reusable Section Header Component
const SectionHeader = ({ subtitle, title, description, align = 'center', dark = false }) => (
  <div className={`space-y-3 ${align === 'center' ? 'text-center max-w-2xl mx-auto' : ''}`}>
    <span className="text-xs uppercase tracking-widest text-olive-accent font-semibold block">
      {subtitle}
    </span>
    <h2 className={`text-3xl sm:text-4xl font-bold font-serif leading-tight ${dark ? 'text-white' : 'text-forest-deep'}`}>
      {title}
    </h2>
    {description && (
      <p className={`text-sm font-sans font-light leading-relaxed ${dark ? 'text-[#D0CFC9]' : 'text-earth-brown'}`}>
        {description}
      </p>
    )}
  </div>
);

// Reusable Info Card for Mission/Vision
const InfoCard = ({ icon: Icon, title, description, footerLabel, footerText }) => (
  <div className="bg-white border border-forest-deep/5 rounded-3xl p-8 sm:p-10 shadow-sm hover:shadow-md transition-shadow space-y-6 flex flex-col justify-between">
    <div className="space-y-4">
      <div className="w-12 h-12 rounded-2xl bg-forest-deep text-olive-accent flex items-center justify-center shadow-inner">
        <Icon size={22} />
      </div>
      <h3 className="text-2xl font-bold font-serif text-forest-deep">{title}</h3>
      <p className="text-xs sm:text-sm text-earth-brown font-light leading-relaxed font-sans">
        {description}
      </p>
    </div>
    <div className="border-t border-forest-deep/5 pt-4">
      <span className="text-[9px] uppercase tracking-widest text-olive-accent font-semibold block mb-1">
        {footerLabel}
      </span>
      <span className="text-xs text-earth-brown font-light">{footerText}</span>
    </div>
  </div>
);

// Reusable Partner Card
const PartnerCard = ({ logo, name, icon: Icon }) => (
  <div className="border border-forest-deep/5 bg-beige-warm/40 rounded-2xl p-6 flex flex-col items-center justify-center text-center space-y-3 hover:border-olive-accent/25 hover:bg-white transition-all duration-300 relative overflow-hidden min-h-[120px] group">
    <img
      src={logo}
      alt={`${name} logo`}
      className="w-full h-full object-contain absolute inset-0 p-4 z-0 opacity-10 group-hover:opacity-20 transition-opacity"
      onError={(e) => {
        e.target.style.display = 'none';
      }}
    />
    <div className="relative z-10 flex flex-col items-center justify-center space-y-1">
      <Icon className="text-olive-accent group-hover:scale-110 transition-transform" size={24} />
      <h4 className="text-xs font-bold text-forest-deep font-sans uppercase tracking-wider">{name}</h4>
      <span className="text-[9px] text-earth-brown/50 font-mono block">[ {logo.split('/').pop()} ]</span>
    </div>
  </div>
);

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

  // Partner data mapped to the PartnerCard component
  const partners = [
    { name: 'Oregon Soil Lab', logo: assets.logos.partners[0], icon: Handshake },
    { name: 'Global Bio Trust', logo: assets.logos.partners[1], icon: Globe },
    { name: 'Forest Conservation', logo: assets.logos.partners[2], icon: Handshake },
    { name: 'Eco-Science Coalition', logo: assets.logos.partners[3], icon: Globe },
  ];

  return (
    <div className="w-full pt-24 bg-beige-warm min-h-screen">
      {/* Page Header */}
      <section className="bg-forest-deep text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-tr from-forest-deep via-forest-mid to-olive-accent/15 opacity-80" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <span className="text-xs uppercase tracking-widest text-olive-accent font-semibold">About The Organization</span>
          <h1 className="text-4xl sm:text-5xl font-bold font-serif text-white">Deep Roots, Micro Foundations</h1>
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
            <div className="lg:col-span-5 aspect-[4/3] rounded-3xl bg-forest-deep flex flex-col items-center justify-center text-center p-6 border border-olive-accent/15 relative overflow-hidden group shadow-lg">
              <div className="absolute inset-0 bg-gradient-to-tr from-forest-deep to-olive-accent/25 opacity-90 z-0" />
              <img
                src={assets.images.aboutWhoWeAre}
                alt="Who We Are"
                className="w-full h-full object-cover absolute inset-0 z-0 mix-blend-overlay opacity-50 group-hover:opacity-70 transition-opacity duration-500"
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
              <div className="relative z-10 flex flex-col items-center p-6 border border-white/10 rounded-2xl bg-forest-deep/40 backdrop-blur-md">
                <Shield className="text-olive-accent mb-3" size={28} />
                <span className="text-xs text-white uppercase tracking-widest font-bold block mb-1">
                  Who We Are
                </span>
                <p className="text-[10px] text-olive-accent/90 font-mono tracking-wider">
                  [ {assets.images.aboutWhoWeAre.split('/').pop()} ]
                </p>
              </div>
            </div>

            {/* Description */}
            <div className="lg:col-span-7 space-y-6">
              <SectionHeader 
                align="left"
                subtitle="Who We Are"
                title="Guardians of the Soil Ecosystem"
              />
              
              <div className="space-y-4 text-xs sm:text-sm text-earth-brown leading-relaxed font-sans font-light">
                <p>
                  Established in 2021, <strong className="text-forest-deep font-semibold">Earth’s Ants Foundation</strong> arose from a simple realization: in our haste to conserve large mammals and giant forest canopies, global ecology had neglected the subterranean engine that keeps the Earth fertile.
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
                  <div className="w-8 h-8 rounded-lg bg-olive-accent/15 flex items-center justify-center text-olive-accent flex-shrink-0">
                    <Shield size={16} />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-forest-deep uppercase tracking-wider mb-0.5">Habitat Advocacy</h4>
                    <p className="text-[11px] text-earth-brown/80 font-light leading-relaxed">Protecting vital nesting and feeding zones.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 rounded-lg bg-olive-accent/15 flex items-center justify-center text-olive-accent flex-shrink-0">
                    <Sparkles size={16} />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-forest-deep uppercase tracking-wider mb-0.5">Bio-Replication</h4>
                    <p className="text-[11px] text-earth-brown/80 font-light leading-relaxed">Applying biological systems to modern agriculture.</p>
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
            <InfoCard 
              icon={Compass}
              title="Our Mission"
              description="To protect microscopic biodiversity and restore planetary soil health by studying and conserving ant populations worldwide, fostering ecological literacy, and empowering community-led conservation movements."
              footerLabel="Commitment"
              footerText="Directing 85% of all funds to field research & soil re-aeration projects."
            />
            <InfoCard 
              icon={Eye}
              title="Our Vision"
              description="A global eco-system where soil health is prioritized in carbon budgets, where micro-fauna habitats are legally defended, and where youth and scientific leaders collaborate to build bio-sustainable agricultural and forestry models."
              footerLabel="Prospect"
              footerText="Onboarding 50 global research chapters by 2030."
            />
          </div>
        </div>
      </section>

      {/* Supporters & Partners */}
      <section id="supporters-partners" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
             <SectionHeader 
               subtitle="Collaborations"
               title="Supporters & Partners"
               description="We work in collaboration with world-class academic groups, forestry bodies, and non-profits to support soil integrity projects."
             />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {partners.map((partner, index) => (
              <PartnerCard key={index} {...partner} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
