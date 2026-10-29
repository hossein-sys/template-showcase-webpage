import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '../../context/LanguageContext';
import { useNavigation } from '../../context/NavigationContext';
import { Menu, X, ArrowUpRight, Globe, Layers } from 'lucide-react';

export const StudioHeader: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('');
  const { language, setLanguage } = useLanguage();
  const { navigate } = useNavigation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: language === 'fa' ? 'پیش‌نمایش زنده' : 'Live Preview', href: '#gallery' },
    { label: language === 'fa' ? 'چرا آرک‌تایپ؟' : 'Why Choose Us', href: '#benefits' },
    { label: language === 'fa' ? 'نحوه راه‌اندازی' : 'How It Works', href: '#how-it-works' },
  ];

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    setActiveSection(href);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed top-3.5 sm:top-5 left-0 right-0 z-50 flex justify-center px-3 sm:px-6 pointer-events-none">
      <motion.header
        initial={{ y: -25, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`pointer-events-auto w-full max-w-4xl rounded-full transition-all duration-300 ${
          isScrolled
            ? 'bg-slate-950/70 backdrop-blur-2xl border border-white/15 shadow-[0_12px_40px_rgba(0,0,0,0.6)] py-2 sm:py-2.5 px-4 sm:px-6 ring-1 ring-white/10'
            : 'bg-slate-950/45 backdrop-blur-xl border border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.35)] py-2.5 sm:py-3 px-4 sm:px-6 ring-1 ring-white/5'
        }`}
      >
        <div className="flex items-center justify-between gap-3">
          
          {/* Brand Mark and Wordmark */}
          <button
            type="button"
            onClick={() => {
              navigate('/');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-2.5 sm:gap-3 group cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded-full"
          >
            <div className="relative w-8 h-8 rounded-full bg-gradient-to-tr from-indigo-500 via-indigo-600 to-violet-500 p-[1px] shadow-md shadow-indigo-500/25 group-hover:shadow-indigo-500/40 transition-shadow">
              <div className="w-full h-full bg-slate-950 rounded-full flex items-center justify-center">
                <Layers className="w-3.5 h-3.5 text-indigo-400 group-hover:text-white transition-colors" />
              </div>
            </div>

            <div className="flex flex-col text-left rtl:text-right">
              <span className="font-extrabold tracking-wider text-sm sm:text-base text-white group-hover:text-indigo-200 transition-colors">
                ARCHETYPE
              </span>
              <span className="text-[8px] sm:text-[9px] font-mono tracking-widest text-slate-400 uppercase -mt-0.5">
                {language === 'fa' ? 'قالب‌های آماده وب' : 'Website Templates'}
              </span>
            </div>
          </button>

          {/* Balanced Center Navigation */}
          <nav
            className="hidden sm:flex items-center gap-1 bg-slate-900/40 border border-white/5 rounded-full px-3 py-1 backdrop-blur-md"
            aria-label="Main Navigation"
          >
            {navLinks.map((link) => {
              const isActive = activeSection === link.href;
              return (
                <button
                  key={link.href}
                  type="button"
                  onClick={() => handleNavClick(link.href)}
                  className={`relative px-3 py-1 text-xs font-medium tracking-wide transition-colors duration-150 cursor-pointer ${
                    isActive ? 'text-white' : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="navActivePill"
                      className="absolute inset-0 bg-white/10 rounded-full -z-10 border border-white/10"
                      transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                    />
                  )}
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* Right Action: Language Switcher & Primary CTA */}
          <div className="hidden sm:flex items-center gap-2.5">
            {/* Language Switcher */}
            <div className="flex items-center bg-slate-900/60 border border-white/10 rounded-full p-0.5 text-[11px] font-semibold text-slate-400">
              <button
                type="button"
                onClick={() => setLanguage('en')}
                className={`px-2 py-0.5 rounded-full transition-colors cursor-pointer ${
                  language === 'en' ? 'bg-indigo-600 text-white shadow-sm' : 'hover:text-white'
                }`}
                title="English"
              >
                EN
              </button>
              <button
                type="button"
                onClick={() => setLanguage('fa')}
                className={`px-2 py-0.5 rounded-full transition-colors cursor-pointer ${
                  language === 'fa' ? 'bg-indigo-600 text-white shadow-sm' : 'hover:text-white'
                }`}
                title="فارسی"
              >
                فا
              </button>
            </div>

            {/* Primary CTA: "Explore Templates" */}
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              type="button"
              onClick={() => navigate('/templates')}
              className="relative group inline-flex items-center gap-1.5 px-4 py-1.5 sm:px-5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-indigo-600 via-indigo-500 to-violet-600 hover:from-indigo-500 hover:to-violet-500 shadow-md shadow-indigo-600/30 transition-all duration-200 border border-indigo-400/30 cursor-pointer"
            >
              <span>{language === 'fa' ? 'مشاهده قالب‌ها' : 'Explore Templates'}</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </motion.button>
          </div>

          {/* Mobile Right Controls */}
          <div className="flex sm:hidden items-center gap-1.5">
            <button
              type="button"
              onClick={() => navigate('/templates')}
              className="px-3 py-1.5 rounded-full bg-indigo-600 text-white text-xs font-semibold shadow-sm inline-flex items-center gap-1"
            >
              <span>{language === 'fa' ? 'قالب‌ها' : 'Templates'}</span>
              <ArrowUpRight className="w-3 h-3" />
            </button>

            <button
              type="button"
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
              aria-label={isMobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              aria-expanded={isMobileMenuOpen}
              className="p-1.5 rounded-full text-slate-300 hover:bg-slate-900 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 cursor-pointer"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>

        {/* Mobile Dropdown Drawer */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className="mt-3 pt-3 border-t border-white/10 space-y-2.5 pb-2"
            >
              <div className="flex items-center justify-between px-2 text-xs text-slate-400">
                <span>{language === 'fa' ? 'زبان / Language:' : 'Language / زبان:'}</span>
                <div className="flex items-center gap-1 bg-slate-900 border border-white/10 rounded-full p-0.5">
                  <button
                    type="button"
                    onClick={() => setLanguage('en')}
                    className={`px-2.5 py-0.5 rounded-full text-[11px] font-bold ${
                      language === 'en' ? 'bg-indigo-600 text-white' : 'text-slate-400'
                    }`}
                  >
                    English
                  </button>
                  <button
                    type="button"
                    onClick={() => setLanguage('fa')}
                    className={`px-2.5 py-0.5 rounded-full text-[11px] font-bold ${
                      language === 'fa' ? 'bg-indigo-600 text-white' : 'text-slate-400'
                    }`}
                  >
                    فارسی
                  </button>
                </div>
              </div>

              <nav className="flex flex-col space-y-1">
                {navLinks.map((link) => (
                  <button
                    key={link.href}
                    type="button"
                    onClick={() => handleNavClick(link.href)}
                    className="w-full text-left rtl:text-right px-3 py-1.5 rounded-xl text-xs font-medium text-slate-300 hover:text-white hover:bg-slate-900/60 transition-colors"
                  >
                    {link.label}
                  </button>
                ))}
              </nav>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    navigate('/templates');
                  }}
                  className="w-full inline-flex items-center justify-center gap-2 py-2 px-4 rounded-xl text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 shadow-md shadow-indigo-600/30 transition-colors"
                >
                  <Globe className="w-3.5 h-3.5" />
                  <span>{language === 'fa' ? 'کاتالوگ قالب‌های آماده (/templates)' : 'Browse Template Catalog (/templates)'}</span>
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </div>
  );
};

export default StudioHeader;
