import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { Send, CheckCircle2, ShieldCheck } from 'lucide-react';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const { t, language } = useLanguage();

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setIsSubscribed(true);
      setEmail('');
    }
  };

  const categories =
    language === 'fa'
      ? [
          { label: 'فروشگاه‌های اینترنتی', href: '#browse' },
          { label: 'پلتفرم‌های نرم‌افزاری و ابری', href: '#browse' },
          { label: 'پورتفولیوهای شرکتی و آژانس', href: '#browse' },
          { label: 'رستوران و مراکز پذیرایی', href: '#browse' },
          { label: 'مراکز پزشکی و درمانی', href: '#browse' },
          { label: 'مشاورین املاک و مستغلات', href: '#browse' },
        ]
      : [
          { label: 'E-commerce Storefronts', href: '#browse' },
          { label: 'SaaS & Tech Platforms', href: '#browse' },
          { label: 'Corporate & Agency Portfolios', href: '#browse' },
          { label: 'Restaurant & Hospitality', href: '#browse' },
          { label: 'Healthcare & Clinical Services', href: '#browse' },
          { label: 'Real Estate & Brokerages', href: '#browse' },
        ];

  const supportLinks =
    language === 'fa'
      ? [
          { label: 'مستندات و راهنمای راه‌اندازی', href: '#' },
          { label: 'کیت‌های طراحی فیگما', href: '#' },
          { label: 'گزارش تغییرات و انتشارات', href: '#' },
          { label: 'پشتیبانی فنی و مهندسی', href: '#custom-request' },
          { label: 'شرایط لایسنس تجاری', href: '#pricing' },
          { label: 'ضمانت بازگشت وجه (۱۴ روز)', href: '#pricing' },
        ]
      : [
          { label: 'Documentation & Guides', href: '#' },
          { label: 'Figma UI Kits', href: '#' },
          { label: 'Changelog & Releases', href: '#' },
          { label: 'Engineering Support', href: '#custom-request' },
          { label: 'Commercial License Terms', href: '#pricing' },
          { label: 'Refund Policy (14 Days)', href: '#pricing' },
        ];

  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-slate-400 text-xs sm:text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-slate-800/80">
          
          {/* Column 1: Brand description and social links (span 4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-indigo-600 to-violet-500 flex items-center justify-center font-black text-white text-base shadow-lg shadow-indigo-500/25">
                {language === 'fa' ? 'آ' : 'A'}
              </div>
              <span className="font-extrabold tracking-tight text-lg text-white">
                {language === 'fa' ? 'آرک‌تایپ' : 'ARCHETYPE'}
              </span>
            </div>

            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-sm">
              {t.footer.description}
            </p>

            {/* Social Links */}
            <div className="pt-2 flex items-center gap-3">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Archetype on GitHub"
                className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-700 hover:text-white flex items-center justify-center transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
              </a>

              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Archetype on Twitter"
                className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-700 hover:text-white flex items-center justify-center transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>

              <a
                href="https://discord.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Archetype on Discord"
                className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-700 hover:text-white flex items-center justify-center transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.929 1.793 8.18 1.793 12.061 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.894.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
                </svg>
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Archetype on LinkedIn"
                className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-700 hover:text-white flex items-center justify-center transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.761-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Template categories (span 3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              {t.footer.nichesTitle}
            </h4>
            <ul className="space-y-2 text-xs">
              {categories.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="hover:text-white transition-colors duration-150 inline-block py-0.5"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Support & Documentation links (span 2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              {t.footer.resourcesTitle}
            </h4>
            <ul className="space-y-2 text-xs">
              {supportLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="hover:text-white transition-colors duration-150 inline-block py-0.5"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Newsletter subscription input with privacy note (span 3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              {t.footer.stayInLoopTitle}
            </h4>
            <p className="text-xs text-slate-400">
              {t.footer.newsletterDesc}
            </p>

            {isSubscribed ? (
              <div className="flex items-center gap-2 p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-medium">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span>{t.footer.subscribedMsg}</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="relative">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={t.footer.emailPlaceholder}
                    className="w-full pl-3.5 pr-10 rtl:pr-3.5 rtl:pl-10 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                  />
                  <button
                    type="submit"
                    aria-label="Subscribe to newsletter"
                    className="absolute right-1.5 rtl:left-1.5 rtl:right-auto top-1/2 -translate-y-1/2 p-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white transition-colors cursor-pointer"
                  >
                    <Send className="w-3.5 h-3.5 rtl:rotate-180" />
                  </button>
                </div>
                <div className="flex items-center gap-1.5 text-[11px] text-slate-500">
                  <ShieldCheck className="w-3 h-3 text-slate-500 shrink-0" />
                  <span>{t.footer.noSpamMsg}</span>
                </div>
              </form>
            )}
          </div>

        </div>

        {/* Bottom row: Copyright notice and legal links */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} {t.footer.rightsReserved}
          </div>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-slate-400 transition-colors">
              {t.footer.privacy}
            </a>
            <a href="#" className="hover:text-slate-400 transition-colors">
              {t.footer.terms}
            </a>
            <a href="#" className="hover:text-slate-400 transition-colors">
              {t.footer.cookies}
            </a>
            <a href="#" className="hover:text-slate-400 transition-colors">
              {t.footer.security}
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
