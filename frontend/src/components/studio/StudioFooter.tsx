import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { useNavigation } from '../../context/NavigationContext';
import { Layers, ArrowUpRight } from 'lucide-react';

export const StudioFooter: React.FC = () => {
  const { language } = useLanguage();
  const { navigate } = useNavigation();

  return (
    <footer className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-950 border-t border-white/10 text-slate-500 text-xs">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-12 border-b border-white/5">
          
          {/* Col 1: Brand */}
          <div className="space-y-3 md:col-span-1">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-full bg-indigo-600 flex items-center justify-center font-black text-white text-xs">
                <Layers className="w-3.5 h-3.5" />
              </div>
              <span className="font-extrabold tracking-wider text-sm text-white">
                ARCHETYPE
              </span>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed">
              {language === 'fa'
                ? 'مرجع برتر قالب‌های آماده وب تجاری. معماری‌های پربازده و واکنش‌گرا مهندسی‌شده با React 19 و Tailwind CSS v4.'
                : 'The premier marketplace for production-ready business website templates. Built with React 19, TypeScript, and Tailwind CSS.'}
            </p>
          </div>

          {/* Col 2: Categories */}
          <div className="space-y-2.5">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              {language === 'fa' ? 'دسته‌بندی قالب‌ها' : 'Template Niches'}
            </h4>
            <ul className="space-y-1.5 text-xs text-slate-400">
              <li>
                <button
                  type="button"
                  onClick={() => navigate('/templates')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  {language === 'fa' ? 'فروشگاه‌های اینترنتی' : 'E-commerce Storefronts'}
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => navigate('/templates')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  {language === 'fa' ? 'نرم‌افزارهای ابری (SaaS)' : 'SaaS & Tech Platforms'}
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => navigate('/templates')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  {language === 'fa' ? 'شرکتی و آژانس‌های خلاقیت' : 'Corporate & Agency Portfolios'}
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => navigate('/templates')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  {language === 'fa' ? 'کلینیک‌ها و مراکز درمانی' : 'Clinics & Healthcare'}
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Quick Navigation */}
          <div className="space-y-2.5">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              {language === 'fa' ? 'بخش‌های اصلی' : 'Navigation'}
            </h4>
            <ul className="space-y-1.5 text-xs text-slate-400">
              <li>
                <button
                  type="button"
                  onClick={() => {
                    navigate('/');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  {language === 'fa' ? 'صفحه اصلی' : 'Home'}
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => navigate('/templates')}
                  className="text-indigo-400 hover:text-indigo-300 font-semibold transition-colors cursor-pointer flex items-center gap-1"
                >
                  <span>{language === 'fa' ? 'کاتالوگ قالب‌ها (/templates)' : 'Browse Catalog (/templates)'}</span>
                  <ArrowUpRight className="w-3 h-3" />
                </button>
              </li>
              <li>
                <a href="#experience" className="hover:text-white transition-colors">
                  {language === 'fa' ? 'تجربه وب‌جی‌ال' : 'WebGL Visuals'}
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="hover:text-white transition-colors">
                  {language === 'fa' ? 'فرآیند خرید و استفاده' : 'How It Works'}
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Trust & Guarantees */}
          <div className="space-y-2.5">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              {language === 'fa' ? 'ضمانت‌ها و پشتیبانی' : 'Licensing & Guarantees'}
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              {language === 'fa'
                ? 'تمامی قالب‌ها دارای لایسنس تجاری نامحدود، سورس‌کد کامل، ۱۴ روز ضمانت بازگشت وجه و آپدیت‌های مادام‌العمر رایگان هستند.'
                : 'Every template includes lifetime commercial licensing, unminified source code, a 14-day refund guarantee, and free framework updates.'}
            </p>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono">
          <div>
            © {new Date().getFullYear()} ARCHETYPE TEMPLATE MARKETPLACE. ALL RIGHTS RESERVED.
          </div>
          <div className="flex items-center gap-6">
            <span>REACT 19</span>
            <span>•</span>
            <span>TYPESCRIPT</span>
            <span>•</span>
            <span>TAILWIND V4</span>
            <span>•</span>
            <span>MOTION</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default StudioFooter;
