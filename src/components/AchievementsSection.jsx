import React from 'react';
import { ArrowUpRight, Trophy, Globe } from 'lucide-react';
import { achievementsData } from '../data/achievementsData';

export default function AchievementsSection() {
  return (
    <section id="recognition" className="py-24 bg-soft-white border-t border-forest-deep/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-xs uppercase tracking-widest text-olive-accent font-semibold block">
            Achievements
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-forest-deep font-serif">
            Recognition & Global Awards
          </h2>
          <p className="text-sm text-earth-brown font-sans max-w-xl mx-auto font-light leading-relaxed">
            We are proud to have our team recognized by international organizations and prominent competitions.
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievementsData.map((achievement) => {
            const isExternal = !!achievement.externalUrl;
            
            const CardWrapper = ({ children }) => {
              if (isExternal) {
                return (
                  <a
                    href={achievement.externalUrl}
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
              <CardWrapper key={achievement.id}>
                <div
                  className={`bg-white rounded-3xl border ${
                    achievement.isGlobal ? 'border-olive-accent/40 shadow-md ring-1 ring-olive-accent/20' : 'border-forest-deep/5 shadow-sm'
                  } overflow-hidden hover:shadow-xl hover:shadow-olive-accent/10 hover:-translate-y-2 transition-all duration-300 flex flex-col h-full group`}
                >
                  {/* Achievement Image Card Visual */}
                  <div className="aspect-[16/10] bg-forest-mid relative overflow-hidden">
                    <img 
                      src={achievement.imagePlaceholder} 
                      alt={achievement.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/40 via-transparent to-transparent opacity-50 pointer-events-none" />

                    {/* Tag Badge Overlay */}
                    <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-md rounded-2xl py-2 px-3.5 shadow-sm border border-forest-deep/5 flex items-center space-x-2 text-xs font-semibold text-forest-deep">
                      {achievement.isGlobal ? (
                        <>
                          <Globe size={14} className="text-olive-accent" />
                          <span className="text-olive-accent font-bold uppercase tracking-wider text-[10px]">Global Award</span>
                          <span className="text-earth-brown/40">•</span>
                          <span>{achievement.date}</span>
                        </>
                      ) : (
                        <>
                          <Trophy size={14} className="text-olive-accent" />
                          <span>{achievement.date}</span>
                        </>
                      )}
                    </div>
                  </div>

                  {/* Card Info Area */}
                  <div className="p-6 flex flex-col justify-between flex-grow space-y-6">
                    <div className="space-y-3">
                      <h3 className="text-xl font-bold font-serif text-forest-deep leading-tight group-hover:text-olive-accent transition-colors duration-300 flex items-start gap-1 line-clamp-3">
                        <span>{achievement.title}</span>
                        {isExternal && (
                          <ArrowUpRight size={16} className="text-olive-accent flex-shrink-0 mt-1 opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                        )}
                      </h3>
                      
                      <p className="text-xs sm:text-sm text-earth-brown font-light leading-relaxed font-sans line-clamp-5">
                        {achievement.description}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-forest-deep/5 flex items-center justify-between mt-auto">
                      {isExternal ? (
                        <span className="inline-flex items-center space-x-1.5 text-xs text-olive-accent font-bold uppercase tracking-wider">
                          <span>{achievement.ctaText}</span>
                          <span>→</span>
                        </span>
                      ) : (
                        <button className="inline-flex items-center space-x-1.5 text-xs text-forest-deep group-hover:text-olive-accent font-bold uppercase tracking-wider transition-colors">
                          <span>{achievement.ctaText}</span>
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
