import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Newspaper, FileText, PenTool, Image, UserPlus, Lightbulb } from 'lucide-react';

export default function FeatureGrid() {
  const cards = [
    {
      title: 'News & Updates',
      description: 'Daily developments, field logs, and announcements from Earth\'s Ants sites.',
      icon: Newspaper,
      link: '/#news-daily',
      placeholder: 'news-placeholder.jpg',
      bgStyle: 'bg-white'
    },
    {
      title: 'Research & Articles',
      description: 'Academic studies, bioturbation papers, and environmental analytics journals.',
      icon: FileText,
      link: '/#research',
      placeholder: 'research-placeholder.jpg',
      bgStyle: 'bg-white'
    },
    {
      title: 'Member Blogs',
      description: 'First-hand reflections, research stories, and diaries from local colony members.',
      icon: PenTool,
      link: '/#blogs',
      placeholder: 'blogs-placeholder.jpg',
      bgStyle: 'bg-white'
    },
    {
      title: 'Creative Corner',
      description: 'Ecological sketches, nature inspired poems, and microscopic photography prints.',
      icon: Lightbulb,
      link: '/#creative',
      placeholder: 'creative-placeholder.jpg',
      bgStyle: 'bg-white'
    },
    {
      title: 'Gallery',
      description: 'Visual database of ant species, habitat setups, and conservation teams.',
      icon: Image,
      link: '/#gallery',
      placeholder: 'gallery-1.jpg', // gallery-1.jpg placeholder as requested
      bgStyle: 'bg-white'
    },
    {
      title: 'Join Our Mission',
      description: 'Apply to be a volunteer, formal research member, or corporate sponsor.',
      icon: UserPlus,
      link: '/get-involved',
      placeholder: 'join-placeholder.jpg',
      bgStyle: 'bg-olive-accent/15 border border-olive-accent/30 text-forest-deep'
    }
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' } 
    }
  };

  return (
    <section id="features" className="py-24 bg-beige-warm">
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-xs uppercase tracking-widest text-olive-accent font-semibold block">
            Core Directories
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-forest-deep font-serif">
            Explore the Colony
          </h2>
          <p className="text-sm text-earth-brown font-sans max-w-lg mx-auto font-light leading-relaxed">
            Browse our core portals to keep up to date with active research, creative programs, field galleries, and volunteer recruitment panels.
          </p>
        </div>

        {/* 
          6-card row on desktop, stack on mobile.
          We use grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6
        */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6"
        >
          {cards.map((card, idx) => {
            const Icon = card.icon;
            
            return (
              <motion.div
                key={idx}
                variants={cardVariants}
                whileHover={{
                  y: -8,
                  scale: 1.03,
                  boxShadow: '0 20px 25px -5px rgba(138, 168, 123, 0.25), 0 8px 10px -6px rgba(138, 168, 123, 0.2)',
                }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className={`rounded-2xl p-6 flex flex-col justify-between shadow-sm relative overflow-hidden transition-colors border border-forest-deep/5 ${card.bgStyle} group cursor-pointer`}
              >
                {/* Background design accents */}
                <div className="absolute right-[-20%] top-[-20%] w-24 h-24 rounded-full bg-olive-accent/5 group-hover:bg-olive-accent/10 transition-colors pointer-events-none" />

                {/* Card Top */}
                <div className="space-y-4 relative z-10">
                  <div className="w-10 h-10 rounded-xl bg-forest-deep text-olive-accent flex items-center justify-center group-hover:bg-olive-accent group-hover:text-forest-deep transition-colors duration-300">
                    <Icon size={20} />
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-bold text-forest-deep tracking-wide font-serif mb-1 group-hover:text-forest-mid">
                      {card.title}
                    </h3>
                    <p className="text-xs text-earth-brown leading-relaxed font-sans font-light">
                      {card.description}
                    </p>
                  </div>
                </div>

                {/* Card Bottom: Image comment identifier for coding clarity */}
                <div className="mt-8 pt-4 border-t border-forest-deep/5 space-y-2 relative z-10">
                  <span className="text-[9px] uppercase tracking-widest text-olive-accent font-semibold block">
                    Source Placeholder:
                  </span>
                  <span className="text-[10px] text-earth-brown/80 font-mono block overflow-hidden text-ellipsis whitespace-nowrap bg-beige-warm/50 px-2 py-1 rounded">
                    {/* {card.placeholder} */}
                    {card.placeholder}
                  </span>
                  <Link
                    to={card.link}
                    onClick={() => {
                      if (card.link.startsWith('/#')) {
                        const id = card.link.substring(2);
                        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="inline-flex items-center space-x-1 text-xs text-forest-deep group-hover:text-olive-accent font-bold uppercase tracking-wider transition-colors pt-2"
                  >
                    <span>Open Portal</span>
                    <span className="transform group-hover:translate-x-1 transition-transform duration-300">→</span>
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
