import React, { useState } from 'react';
import { Menu, X, Sparkles, ArrowRight, Globe } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { useNavigation } from '../../context/NavigationContext';

export interface HeaderProps {
  onNavigate?: (sectionId: string) => void;
  onGetStartedClick?: () => void;
  onContactSalesClick?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  onNavigate,
  onGetStartedClick,
  onContactSalesClick,
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, setLanguage, t, direction } = useLanguage();
  const { navigate } = useNavigation();

  const navLinks = [
    { label: language === 'fa' ? 'صفحه اصلی استودیو' : 'Studio Home', href: '/', isRoute: true },
    { label: t.nav.browse, href: '#browse' },
    { label: t.nav.features, href: '#features' },
    { label: t.nav.pricing, href: '#pricing' },
    { label: t.nav.faq, href: '#faq' },
    { label: t.nav.customRequest, href: '#custom-request' },
  ];

  const handleLinkClick = (href: string, isRoute?: boolean) => {
    setIsMobileMenuOpen(false);
    if (isRoute || href.startsWith('/')) {
      navigate(href);
      return;
    }
    if (onNavigate) {
      onNavigate(href);
    } else {
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-white/80 dark:bg-slate-900/80 border-b border-slate-200/80 dark:border-slate-800/80 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Logo / Brand Name */}
          <button
            type="button"
            onClick={() => navigate('/')}
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded-lg cursor-pointer text-left rtl:text-right"
          >
            <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-tr from-indigo-600 via-indigo-500 to-violet-500 flex items-center justify-center font-black text-white text-lg shadow-lg shadow-indigo-500/25 group-hover:shadow-indigo-500/40 transition-shadow">
              <span>{language === 'fa' ? 'آ' : 'A'}</span>
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-emerald-400 rounded-full border-2 border-white dark:border-slate-900" />
            </div>
            <div className="flex flex-col text-left rtl:text-right">
              <span className="font-extrabold tracking-tight text-lg sm:text-xl text-slate-900 dark:text-white leading-none">
                {language === 'fa' ? 'آرک‌تایپ' : 'ARCHETYPE'}
              </span>
              <span className="text-[10px] uppercase tracking-widest text-indigo-600 dark:text-indigo-400 font-semibold mt-1">
                {language === 'fa' ? 'استودیو قالب‌های تجاری' : 'Template Studio'}
              </span>
            </div>
          </button>

          {/* Quick Navigation Links (Desktop) */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.href);
                }}
                className="text-xs lg:text-sm font-medium text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white transition-colors duration-150 relative py-1 after:absolute after:bottom-0 after:left-0 rtl:after:right-0 after:w-0 hover:after:w-full after:h-0.5 after:bg-indigo-600 dark:after:bg-indigo-400 after:transition-all after:duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action CTA & Language Switcher (Desktop) */}
          <div className="hidden md:flex items-center gap-3 lg:gap-4">
            
            {/* Language Switcher Button */}
            <div className="flex items-center bg-slate-100 dark:bg-slate-800/80 p-1 rounded-xl border border-slate-200 dark:border-slate-700/80 text-xs font-semibold">
              <button
                type="button"
                onClick={() => setLanguage('en')}
                className={`flex items-center gap-1 px-2.5 py-1 rounded-lg transition-all cursor-pointer ${
                  language === 'en'
                    ? 'bg-indigo-600 text-white shadow-sm'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
                title="English language"
              >
                <span>🇺🇸</span>
                <span>EN</span>
              </button>

              <button
                type="button"
                onClick={() => setLanguage('fa')}
                className={`flex items-center gap-1 px-2.5 py-1 rounded-lg transition-all cursor-pointer ${
                  language === 'fa'
                    ? 'bg-indigo-600 text-white shadow-sm'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
                title="زبان فارسی"
              >
                <span>🇮🇷</span>
                <span>فارسی</span>
              </button>
            </div>

            <button
              onClick={onContactSalesClick}
              className="text-xs font-semibold text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white px-2.5 py-2 transition-colors cursor-pointer"
            >
              {t.nav.contactSales}
            </button>

            <button
              onClick={onGetStartedClick}
              className="group inline-flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 shadow-md shadow-indigo-600/25 hover:shadow-lg hover:shadow-indigo-600/35 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
            >
              <span>{t.nav.getStarted}</span>
              <ArrowRight className={`w-4 h-4 group-hover:translate-x-0.5 transition-transform ${direction === 'rtl' ? 'rotate-180' : ''}`} />
            </button>
          </div>

          {/* Mobile Hamburger & Lang Toggle */}
          <div className="flex md:hidden items-center gap-2">
            {/* Quick Mobile Lang Switcher */}
            <button
              type="button"
              onClick={() => setLanguage(language === 'en' ? 'fa' : 'en')}
              className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-xs font-bold text-slate-700 dark:text-slate-200"
              aria-label="Toggle language"
            >
              <Globe className="w-3.5 h-3.5 text-indigo-400" />
              <span>{language === 'en' ? 'FA' : 'EN'}</span>
            </button>

            <button
              type="button"
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
              aria-label={isMobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              aria-expanded={isMobileMenuOpen}
              className="p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 cursor-pointer"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Dropdown Menu Drawer */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-b border-slate-200/80 dark:border-slate-800/80 bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl px-4 pt-3 pb-6 space-y-4 shadow-2xl transition-all">
          
          {/* Mobile Language Switcher */}
          <div className="flex items-center justify-between pb-2 border-b border-slate-200 dark:border-slate-800">
            <span className="text-xs font-semibold text-slate-500">Language / زبان:</span>
            <div className="flex items-center gap-1.5">
              <button
                type="button"
                onClick={() => setLanguage('en')}
                className={`px-3 py-1 rounded-lg text-xs font-bold ${
                  language === 'en' ? 'bg-indigo-600 text-white' : 'bg-slate-800 text-slate-300'
                }`}
              >
                🇺🇸 English
              </button>
              <button
                type="button"
                onClick={() => setLanguage('fa')}
                className={`px-3 py-1 rounded-lg text-xs font-bold ${
                  language === 'fa' ? 'bg-indigo-600 text-white' : 'bg-slate-800 text-slate-300'
                }`}
              >
                🇮🇷 فارسی
              </button>
            </div>
          </div>

          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.href);
                }}
                className="px-3 py-2.5 rounded-lg text-sm font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800/80 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="pt-3 border-t border-slate-200 dark:border-slate-800 flex flex-col gap-2.5">
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onContactSalesClick?.();
              }}
              className="w-full text-center py-2.5 rounded-xl text-xs font-semibold text-slate-700 dark:text-slate-200 border border-slate-300 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
            >
              {t.nav.contactSales}
            </button>
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onGetStartedClick?.();
              }}
              className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 shadow-md shadow-indigo-600/25 transition-colors"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>{t.nav.getStarted}</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
