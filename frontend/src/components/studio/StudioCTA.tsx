import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../../context/LanguageContext';
import { useNavigation } from '../../context/NavigationContext';
import { ArrowUpRight, Sparkles, MessageSquareCode, ShieldCheck } from 'lucide-react';

export const StudioCTA: React.FC = () => {
  const { language } = useLanguage();
  const { navigate } = useNavigation();

  return (
    <section className="py-24 sm:py-36 px-4 sm:px-6 lg:px-8 bg-slate-950 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[380px] bg-indigo-600/12 rounded-full blur-[140px] pointer-events-none -z-10" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-5xl mx-auto rounded-3xl border border-white/15 bg-gradient-to-b from-slate-900/90 via-slate-950/90 to-slate-950 p-8 sm:p-16 text-center space-y-8 shadow-[0_20px_70px_rgba(0,0,0,0.6)] relative overflow-hidden"
      >
        {/* Ambient Top Glow Line */}
        <div className="absolute top-0 left-1/4 right-1/4 h-[1px] bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />

        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/10 text-indigo-300 border border-indigo-500/25 text-xs font-mono uppercase tracking-widest backdrop-blur-md">
          <Sparkles className="w-3.5 h-3.5" />
          <span>{language === 'fa' ? 'راه‌اندازی فوری // تضمین کیفیت' : 'READY TO DEPLOY // IMMEDIATE ACCESS'}</span>
        </div>

        <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-[1.15] max-w-3xl mx-auto">
          {language === 'fa' ? (
            <>
              قالب ایده‌آل کسب‌وکار خود را{' '}
              <span className="bg-gradient-to-r from-indigo-300 via-white to-cyan-300 bg-clip-text text-transparent">
                همین امروز پیدا کنید.
              </span>
            </>
          ) : (
            <>
              Find the perfect ready-made website template for your{' '}
              <span className="bg-gradient-to-r from-indigo-300 via-white to-cyan-300 bg-clip-text text-transparent">
                business.
              </span>
            </>
          )}
        </h2>

        <p className="text-slate-400 text-sm sm:text-lg max-w-2xl mx-auto leading-relaxed">
          {language === 'fa'
            ? 'به کاتالوگ جامع قالب‌های آماده فروشگاهی، نرم‌افزاری، شرکتی و خدماتی دسترسی پیدا کنید. مالکیت کامل سورس‌کد، فایل‌های فیگما و آپدیت‌های مادام‌العمر در اختیار شماست.'
            : 'Access our complete catalog of curated business website templates. Full source code ownership, Figma assets, and unconditional 14-day refund guarantee included.'}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          {/* Primary CTA navigating to /templates */}
          <button
            type="button"
            onClick={() => navigate('/templates')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-indigo-600 via-indigo-500 to-violet-600 hover:from-indigo-500 hover:to-violet-500 shadow-xl shadow-indigo-600/40 border border-indigo-400/30 transition-all hover:scale-105 active:scale-95 cursor-pointer"
          >
            <span>{language === 'fa' ? 'مشاهده کاتالوگ قالب‌ها (/templates)' : 'Browse Template Catalog (/templates)'}</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>

          {/* Secondary CTA for custom requests */}
          <button
            type="button"
            onClick={() => {
              navigate('/templates');
              setTimeout(() => {
                document.getElementById('custom-request')?.scrollIntoView({ behavior: 'smooth' });
              }, 150);
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full text-sm font-semibold text-slate-300 hover:text-white bg-slate-900/80 hover:bg-slate-800 border border-white/10 transition-colors cursor-pointer"
          >
            <MessageSquareCode className="w-4 h-4 text-indigo-400" />
            <span>{language === 'fa' ? 'سفارش ساخت ماژول اختصاصی' : 'Custom Build Request'}</span>
          </button>
        </div>

        {/* Guarantee Callout */}
        <div className="pt-6 border-t border-white/5 flex items-center justify-center gap-6 text-xs text-slate-400">
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            {language === 'fa' ? '۱۴ روز ضمانت بازگشت وجه' : '14-Day Money-Back Guarantee'}
          </span>
          <span className="hidden sm:inline">•</span>
          <span className="hidden sm:inline">
            {language === 'fa' ? 'پشتیبانی فنی از تیم توسعه' : 'Dedicated Developer Support'}
          </span>
        </div>

      </motion.div>
    </section>
  );
};

export default StudioCTA;
