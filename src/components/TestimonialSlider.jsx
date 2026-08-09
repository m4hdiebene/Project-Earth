import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { testimonialsData } from '../data/testimonialsData';

export default function TestimonialSlider() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right

  const nextSlide = () => {
    setDirection(1);
    setCurrent((prev) => (prev === testimonialsData.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrent((prev) => (prev === 0 ? testimonialsData.length - 1 : prev - 1));
  };

  const setSlide = (idx) => {
    setDirection(idx > current ? 1 : -1);
    setCurrent(idx);
  };

  const slideVariants = {
    enter: (dir) => ({
      x: dir > 0 ? 100 : -100,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: 'easeOut' }
    },
    exit: (dir) => ({
      x: dir < 0 ? 100 : -100,
      opacity: 0,
      transition: { duration: 0.3, ease: 'easeIn' }
    })
  };

  const activeQuote = testimonialsData[current];

  return (
    <section id="testimonials" className="py-24 bg-soft-white border-t border-forest-deep/5 relative overflow-hidden">
      {/* Decorative quotes graphic */}
      <div className="absolute left-[8%] top-[15%] text-olive-accent/10 pointer-events-none hidden md:block">
        <Quote size={120} className="fill-current" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-xs uppercase tracking-widest text-olive-accent font-semibold block">
            What Leaders Say
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-forest-deep font-serif">
            Voices of the Forest
          </h2>
        </div>

        {/* Carousel Slider Panel */}
        <div className="relative min-h-[320px] sm:min-h-[260px] flex items-center justify-center">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={current}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="space-y-6"
            >
              {/* Quote Block */}
              <p className="text-lg sm:text-2xl font-serif text-forest-deep italic leading-relaxed max-w-3xl mx-auto">
                "{activeQuote.quote}"
              </p>
              
              {/* Author Info Area */}
              <div className="space-y-1">
                <h4 className="text-sm font-bold uppercase tracking-wider text-forest-deep font-sans">
                  {activeQuote.author}
                </h4>
                <p className="text-xs text-olive-accent font-medium">
                  {activeQuote.position}
                </p>
                <span className="text-[10px] text-earth-brown/40 font-mono block pt-1">
                  [ {activeQuote.imagePlaceholder} ]
                </span>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls Left/Right */}
          <button
            onClick={prevSlide}
            className="absolute left-[-20px] md:left-[-50px] p-3 rounded-full bg-white border border-forest-deep/5 hover:border-olive-accent/30 text-forest-deep hover:text-olive-accent shadow-md hover:shadow-lg transition-all duration-300 transform active:scale-95"
            aria-label="Previous quote"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-[-20px] md:right-[-50px] p-3 rounded-full bg-white border border-forest-deep/5 hover:border-olive-accent/30 text-forest-deep hover:text-olive-accent shadow-md hover:shadow-lg transition-all duration-300 transform active:scale-95"
            aria-label="Next quote"
          >
            <ChevronRight size={18} />
          </button>
        </div>

        {/* Pagination Dots Indicator */}
        <div className="flex justify-center items-center space-x-2.5 mt-10">
          {testimonialsData.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setSlide(idx)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                current === idx
                  ? 'bg-forest-deep w-6'
                  : 'bg-forest-deep/20 hover:bg-forest-deep/40'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
