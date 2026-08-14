import React from 'react';
import { ArrowUpRight, BookOpen, ArrowRight } from 'lucide-react';
import { publicationsData } from '../data/publicationsData';

export default function PublicationsSection() {
  return (
    <section id="publications" className="py-24 bg-soft-white border-t border-forest-deep/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3">
            <span className="text-xs uppercase tracking-widest text-olive-accent font-semibold block">
              Knowledge & Creations
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-forest-deep font-serif">
              Publications & Media Journals
            </h2>
            <p className="text-sm text-earth-brown font-sans max-w-xl font-light leading-relaxed">
              Read up on peer-reviewed soil data, member stories, or general media columns tracking microscopic ecology.
            </p>
          </div>
        </div>

        {/* Publications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {publicationsData.map((pub, index) => {
            const isExternal = !!pub.externalUrl;
            
            // Outer container element wrappers
            const CardWrapper = ({ children }) => {
              if (isExternal) {
                return (
                  <a
                    href={pub.externalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-left h-full"
                  >
                    {children}
                  </a>
                );
              }
              return (
                <div className="text-left cursor-default h-full">
                  {children}
                </div>
              );
            };

            return (
              <CardWrapper key={pub.id}>
                <div
                  className="bg-white rounded-3xl border border-forest-deep/5 overflow-hidden shadow-sm hover:shadow-xl hover:shadow-olive-accent/10 hover:-translate-y-2 transition-all duration-300 flex flex-col h-full group"
                >
                  {/* Publication Image Card Visual */}
                  <div className="aspect-[16/10] bg-forest-mid relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-tr from-forest-deep to-olive-accent/20" />
                    
                    {/* Hover zoom styling */}
                    <div className="absolute inset-0 bg-forest-deep/10 opacity-80 group-hover:opacity-60 transition-opacity duration-300" />
                    
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                      <img 
                        src={pub.imagePlaceholder} 
                        alt={pub.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                      />
                    </div>

                    {/* Tag Badge Overlay */}
                    <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-md rounded-2xl py-2 px-4 shadow-sm border border-forest-deep/5 flex items-center space-x-2 text-xs font-semibold text-forest-deep">
                      <BookOpen size={14} className="text-olive-accent" />
                      <span>{pub.date}</span>
                    </div>
                  </div>

                  {/* Card Info Area */}
                  <div className="p-6 flex flex-col justify-between flex-grow space-y-6">
                    <div className="space-y-3">
                      <h3 className="text-xl font-bold font-serif text-forest-deep leading-tight group-hover:text-olive-accent transition-colors duration-300 flex items-start gap-1 line-clamp-3">
                        <span>{pub.title}</span>
                        {isExternal && (
                          <ArrowUpRight size={16} className="text-olive-accent flex-shrink-0 mt-1 opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                        )}
                      </h3>
                      
                      <p className="text-xs sm:text-sm text-earth-brown font-light leading-relaxed font-sans line-clamp-4">
                        {pub.description}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-forest-deep/5 flex items-center justify-between mt-auto">
                      {isExternal ? (
                        <span className="inline-flex items-center space-x-1.5 text-xs text-olive-accent font-bold uppercase tracking-wider">
                          <span>{pub.ctaText}</span>
                          <span>→</span>
                        </span>
                      ) : (
                        <button className="inline-flex items-center space-x-1.5 text-xs text-forest-deep group-hover:text-olive-accent font-bold uppercase tracking-wider transition-colors">
                          <span>{pub.ctaText}</span>
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
