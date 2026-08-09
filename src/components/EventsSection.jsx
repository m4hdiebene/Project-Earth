import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, ArrowUpRight, ArrowRight } from 'lucide-react';
import { eventsData } from '../data/eventsData';

export default function EventsSection() {
  return (
    <section id="events" className="py-24 bg-soft-white border-t border-forest-deep/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3">
            <span className="text-xs uppercase tracking-widest text-olive-accent font-semibold block">
              Global Movements
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-forest-deep font-serif">
              Programs & Flagship Impacts
            </h2>
            <p className="text-sm text-earth-brown font-sans max-w-xl font-light leading-relaxed">
              Participate in our upcoming educational seminars, hands-on restoration campaigns, and global scientific assemblies.
            </p>
          </div>
          
          <a
            href="#get-involved"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('get-involved')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center space-x-1.5 text-xs text-forest-deep hover:text-olive-accent font-bold uppercase tracking-widest transition-colors duration-300"
          >
            <span>Learn More About Operations</span>
            <ArrowRight size={14} />
          </a>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {eventsData.map((event, index) => {
            const isExternal = !!event.externalUrl;
            
            // Outer container element wrappers
            const CardWrapper = ({ children }) => {
              if (isExternal) {
                return (
                  <a
                    href={event.externalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-left"
                  >
                    {children}
                  </a>
                );
              }
              return (
                <div className="text-left cursor-default">
                  {children}
                </div>
              );
            };

            return (
              <CardWrapper key={event.id}>
                <div
                  className="bg-white rounded-3xl border border-forest-deep/5 overflow-hidden shadow-sm hover:shadow-xl hover:shadow-olive-accent/10 hover:-translate-y-2 transition-all duration-300 flex flex-col h-full group"
                >
                  {/* Event Image Placeholder Card Visual */}
                  <div className="aspect-[16/10] bg-forest-mid relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-tr from-forest-deep to-olive-accent/20" />
                    
                    {/* Hover zoom styling */}
                    <div className="absolute inset-0 bg-forest-deep/10 opacity-80 group-hover:opacity-60 transition-opacity duration-300" />
                    
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center">
                      <span className="text-xs text-[#ECEAE5] uppercase tracking-widest bg-forest-deep/80 px-3 py-1.5 rounded-full border border-olive-accent/10 backdrop-blur-sm">
                        {/* {event.imagePlaceholder} */}
                        {/* update korbo */}
                        {/*event er pohoto update korsi */}
                        <img 
                          src={event.imagePlaceholder} 
                          alt={event.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                        />
                      </span>
                    </div>

                    {/* Date Badge Overlay */}
                    <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-md rounded-2xl py-2 px-4 shadow-sm border border-forest-deep/5 flex items-center space-x-2 text-xs font-semibold text-forest-deep">
                      <Calendar size={14} className="text-olive-accent" />
                      <span>{event.date}</span>
                    </div>
                  </div>

                  {/* Card Info Area */}
                  <div className="p-6 flex flex-col justify-between flex-grow space-y-6">
                    <div className="space-y-3">
                      <h3 className="text-xl font-bold font-serif text-forest-deep leading-tight group-hover:text-olive-accent transition-colors duration-300 flex items-start gap-1">
                        <span>{event.title}</span>
                        {isExternal && (
                          <ArrowUpRight size={16} className="text-olive-accent flex-shrink-0 mt-1 opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                        )}
                      </h3>
                      
                      <p className="text-xs sm:text-sm text-earth-brown font-light leading-relaxed font-sans">
                        {event.description}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-forest-deep/5 flex items-center justify-between">
                      {isExternal ? (
                        <span className="inline-flex items-center space-x-1.5 text-xs text-olive-accent font-bold uppercase tracking-wider">
                          <span>{event.ctaText}</span>
                          <span>→</span>
                        </span>
                      ) : (
                        <button className="inline-flex items-center space-x-1.5 text-xs text-forest-deep group-hover:text-olive-accent font-bold uppercase tracking-wider transition-colors">
                          <span>{event.ctaText}</span>
                          <span>→</span>
                        </button>
                      )}
                      
                      {isExternal && (
                        <span className="text-[10px] text-earth-brown/50 font-mono bg-beige-warm/50 px-2 py-0.5 rounded">
                          External Link
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </CardWrapper>
            );
          })}
        </div>
      </div>
    </section>
  );
}
