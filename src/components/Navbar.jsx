import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, ChevronRight, ArrowRight } from 'lucide-react';
import { navigationItems } from '../data/navigation';
import { assets } from '../data/assets';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeSubDropdown, setActiveSubDropdown] = useState(null);
  const [logoError, setLogoError] = useState(false);
  const [activeSection, setActiveSection] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll spy: track which section is visible on the Home page
  useEffect(() => {
    if (location.pathname !== '/') { setActiveSection(null); return; }
    const sectionIds = navigationItems.filter(i => i.sectionId).map(i => i.sectionId);
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter(e => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
      if (visible.length > 0) setActiveSection(visible[0].target.id);
    }, { rootMargin: '-20% 0px -60% 0px', threshold: 0 });
    sectionIds.forEach(id => { const el = document.getElementById(id); if (el) observer.observe(el); });
    return () => observer.disconnect();
  }, [location.pathname]);

  // Close mobile menu on route changes
  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
    setActiveSubDropdown(null);
  }, [location]);

  const handleScrollToSection = (path) => {
    if (path.startsWith('/#')) {
      const id = path.substring(2);
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const isHome = location.pathname === '/';
  const isHeroOverlay = isHome && !scrolled;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled || !isHome
          ? 'glass-nav py-3 shadow-md'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <Link to="/" className="flex items-center space-x-2 group">
            {!logoError ? (
              <img
                src={isHeroOverlay ? assets.logos.main : assets.logos.dark}
                alt="Logo"
                className="h-30 w-auto object-contain block max-w-[150px]"
                onError={() => setLogoError(true)}
              />
            ) : (
              <div className="w-10 h-10 bg-forest-deep text-olive-accent flex items-center justify-center font-bold font-sans text-xs rounded-lg">
                EA
              </div>
            )}
            {/* <div>
              <span className="text-lg font-bold text-forest-deep tracking-wider block font-serif leading-none group-hover:text-forest-mid transition-colors">
                EARTH'S ANTS
              </span>
              <span className="text-[9px] uppercase tracking-widest text-olive-accent font-sans block leading-none">
                Micro-Eco Foundation
              </span>
            </div> */}
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigationItems.map((item, index) => {
              const hasSubmenu = !!item.submenu;
              const isActive = item.sectionId ? activeSection === item.sectionId : location.pathname === item.path;

              return (
                <div
                  key={index}
                  className="relative"
                  onMouseEnter={() => setActiveDropdown(index)}
                  onMouseLeave={() => {
                    setActiveDropdown(null);
                    setActiveSubDropdown(null);
                  }}
                >
                  {hasSubmenu ? (
                    <button
                      className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-all ${
                        activeDropdown === index
                          ? 'text-olive-accent'
                          : isHeroOverlay ? 'text-white hover:text-olive-accent' : 'text-forest-deep hover:text-forest-mid'
                      }`}
                    >
                      <span>{item.label}</span>
                      <ChevronDown
                        size={14}
                        className={`transition-transform duration-300 ${
                          activeDropdown === index ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                  ) : (
                    <Link
                      to={item.path}
                      onClick={() => handleScrollToSection(item.path)}
                      className={`px-3 py-2 rounded-md text-sm font-medium transition-all ${
                        isActive
                          ? 'text-olive-accent bg-olive-accent/10'
                          : isHeroOverlay ? 'text-white hover:text-olive-accent' : 'text-forest-deep hover:text-forest-mid hover:bg-forest-deep/5'
                      }`}
                    >
                      {item.label}
                    </Link>
                  )}

                  {/* Desktop Dropdown Layer 1 */}
                  <AnimatePresence>
                    {hasSubmenu && activeDropdown === index && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 8, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="absolute left-0 mt-1 w-64 glass-card rounded-xl shadow-xl py-2 z-50"
                      >
                        {item.submenu.map((sub, sIdx) => {
                          const hasSubSub = !!sub.subsubmenu;
                          return (
                            <div
                              key={sIdx}
                              className="relative"
                              onMouseEnter={() => {
                                if (hasSubSub) setActiveSubDropdown(sIdx);
                              }}
                              onMouseLeave={() => {
                                if (hasSubSub) setActiveSubDropdown(null);
                              }}
                            >
                              {hasSubSub ? (
                                <div
                                  className={`w-full flex items-center justify-between px-4 py-2 text-sm text-forest-deep font-medium hover:bg-olive-accent/10 hover:text-olive-accent transition-colors cursor-pointer ${
                                    activeSubDropdown === sIdx ? 'bg-olive-accent/10 text-olive-accent' : ''
                                  }`}
                                >
                                  <span>{sub.label}</span>
                                  <ChevronRight size={14} />
                                </div>
                              ) : (
                                <Link
                                  to={sub.path}
                                  onClick={() => handleScrollToSection(sub.path)}
                                  className="block px-4 py-2 text-sm text-forest-deep hover:bg-olive-accent/10 hover:text-olive-accent transition-colors"
                                >
                                  {sub.label}
                                </Link>
                              )}

                              {/* Desktop Dropdown Layer 2 (Subsubmenu) */}
                              <AnimatePresence>
                                {hasSubSub && activeSubDropdown === sIdx && (
                                  <motion.div
                                    initial={{ opacity: 0, x: 10, y: -8 }}
                                    animate={{ opacity: 1, x: 0, y: 0 }}
                                    exit={{ opacity: 0, x: 8, y: -8 }}
                                    transition={{ duration: 0.15 }}
                                    className="absolute left-full top-0 ml-1 w-56 glass-card rounded-xl shadow-xl py-2 z-50"
                                  >
                                    {sub.subsubmenu.map((ssub, ssIdx) => (
                                      <Link
                                        key={ssIdx}
                                        to={ssub.path}
                                        onClick={() => handleScrollToSection(ssub.path)}
                                        className="block px-4 py-2 text-sm text-forest-deep hover:bg-olive-accent/10 hover:text-olive-accent transition-colors"
                                      >
                                        {ssub.label}
                                      </Link>
                                    ))}
                                  </motion.div>
                                )}
                              </AnimatePresence>
                            </div>
                          );
                        })}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}

            <Link
              to="/get-involved"
              className="ml-4 inline-flex items-center space-x-1.5 bg-forest-deep hover:bg-forest-mid text-white text-xs font-semibold uppercase tracking-wider py-2.5 px-5 rounded-full shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300"
            >
              <span>Join The Colony</span>
              <ArrowRight size={14} className="text-olive-accent animate-pulse" />
            </Link>
          </nav>

          {/* Mobile Hamburger Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-lg focus:outline-none transition-colors ${isHeroOverlay ? 'text-white hover:text-olive-accent' : 'text-forest-deep hover:text-olive-accent'}`}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="lg:hidden glass-nav shadow-lg overflow-y-auto max-h-[85vh] border-b border-olive-accent/20"
          >
            <div className="px-4 pt-2 pb-6 space-y-2">
              {navigationItems.map((item, idx) => {
                const hasSub = !!item.submenu;
                const isItemOpen = activeDropdown === idx;

                return (
                  <div key={idx} className="border-b border-forest-deep/5 pb-2">
                    {hasSub ? (
                      <div>
                        <button
                          onClick={() => setActiveDropdown(isItemOpen ? null : idx)}
                          className="w-full flex items-center justify-between py-2 text-base font-semibold text-forest-deep"
                        >
                          <span>{item.label}</span>
                          <ChevronDown
                            size={16}
                            className={`transition-transform duration-300 ${isItemOpen ? 'rotate-180' : ''}`}
                          />
                        </button>

                        {/* Mobile Submenu */}
                        <AnimatePresence>
                          {isItemOpen && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              className="pl-4 space-y-1 mt-1 overflow-hidden"
                            >
                              {item.submenu.map((sub, sIdx) => {
                                const hasSubSub = !!sub.subsubmenu;
                                const isSubOpen = activeSubDropdown === sIdx;

                                return (
                                  <div key={sIdx}>
                                    {hasSubSub ? (
                                      <div>
                                        <button
                                          onClick={() => setActiveSubDropdown(isSubOpen ? null : sIdx)}
                                          className="w-full flex items-center justify-between py-1.5 text-sm font-medium text-forest-mid"
                                        >
                                          <span>{sub.label}</span>
                                          <ChevronDown
                                            size={14}
                                            className={`transition-transform duration-300 ${isSubOpen ? 'rotate-180' : ''}`}
                                          />
                                        </button>

                                        {/* Mobile Subsubmenu */}
                                        <AnimatePresence>
                                          {isSubOpen && (
                                            <motion.div
                                              initial={{ opacity: 0, height: 0 }}
                                              animate={{ opacity: 1, height: 'auto' }}
                                              exit={{ opacity: 0, height: 0 }}
                                              className="pl-4 space-y-1.5 mt-1 overflow-hidden border-l border-olive-accent/25"
                                            >
                                              {sub.subsubmenu.map((ssub, ssIdx) => (
                                                <Link
                                                  key={ssIdx}
                                                  to={ssub.path}
                                                  onClick={() => {
                                                    setIsOpen(false);
                                                    handleScrollToSection(ssub.path);
                                                  }}
                                                  className="block py-1 text-xs text-olive-accent font-medium hover:text-forest-deep"
                                                >
                                                  {ssub.label}
                                                </Link>
                                              ))}
                                            </motion.div>
                                          )}
                                        </AnimatePresence>
                                      </div>
                                    ) : (
                                      <Link
                                        to={sub.path}
                                        onClick={() => {
                                          setIsOpen(false);
                                          handleScrollToSection(sub.path);
                                        }}
                                        className="block py-1.5 text-sm text-forest-mid hover:text-olive-accent"
                                      >
                                        {sub.label}
                                      </Link>
                                    )}
                                  </div>
                                );
                              })}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link
                        to={item.path}
                        onClick={() => {
                          setIsOpen(false);
                          handleScrollToSection(item.path);
                        }}
                        className="block py-2 text-base font-semibold text-forest-deep hover:text-olive-accent"
                      >
                        {item.label}
                      </Link>
                    )}
                  </div>
                );
              })}

              <div className="pt-4">
                <Link
                  to="/get-involved"
                  onClick={() => setIsOpen(false)}
                  className="w-full flex items-center justify-center space-x-2 bg-forest-deep hover:bg-forest-mid text-white text-center py-3 rounded-full font-bold uppercase tracking-wider text-xs shadow-md"
                >
                  <span>Join Colony</span>
                  <ArrowRight size={14} className="text-olive-accent" />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
