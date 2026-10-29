import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../../context/LanguageContext';
import { useNavigation } from '../../context/NavigationContext';
import { Zap, ShieldCheck, DollarSign, Smartphone, ArrowUpRight, CheckCircle2 } from 'lucide-react';

export const StudioBenefits: React.FC = () => {
  const { language } = useLanguage();
  const { navigate } = useNavigation();

  const benefits = [
    {
      num: '01',
      title: language === 'fa' ? 'راه‌اندازی در چند ساعت، صرفه‌جویی میلیونی' : 'Launch in Hours, Save Thousands',
      desc:
        language === 'fa'
          ? 'دیگر نیازی به ماه‌ها انتظار برای آژانس‌های طراحی و پرداخت هزینه‌های سنگین نیست. قالب‌های ما آماده استقرار بوده و کسب‌وکار شما را فوراً آنلاین می‌کنند.'
          : 'Eliminate 3-month agency timelines and costly custom development. Start generating business immediately with production-ready designs.',
      bullets: [
        language === 'fa' ? 'صرفه‌جویی در ماه‌ها زمان طراحی' : 'Save 3+ months of development',
        language === 'fa' ? 'کاهش چشمگیر هزینه‌های راه‌اندازی' : 'Save up to 80% on design budgets',
      ],
      icon: DollarSign,
      accent: 'text-amber-400 border-amber-500/20 bg-amber-500/10',
    },
    {
      num: '02',
      title: language === 'fa' ? 'مهندسی‌شده برای حداکثر نرخ تبدیل' : 'Engineered for High Conversion',
      desc:
        language === 'fa'
          ? 'تمامی صفحات بر اساس اصول روانشناسی فروش و تعامل کاربر ساخته شده‌اند؛ با دکمه‌های اقدام شفاف، تایپوگرافی خوانا و ایجاد حس اعتماد در مخاطب.'
          : 'Built around buyer psychology and conversion principles: clear visual hierarchy, frictionless CTAs, and trust signals that turn visitors into paying customers.',
      bullets: [
        language === 'fa' ? 'بهینه‌سازی قیف فروش و لید' : 'Optimized lead & checkout funnels',
        language === 'fa' ? 'چیدمان استاندارد و کاربرپسند' : 'Frictionless, intuitive layouts',
      ],
      icon: Zap,
      accent: 'text-indigo-400 border-indigo-500/20 bg-indigo-500/10',
    },
    {
      num: '03',
      title: language === 'fa' ? 'مالکیت ۱۰۰٪ سورس‌کد و بدون اشتراک' : 'Full Source Code & Zero Lock-in',
      desc:
        language === 'fa'
          ? 'شما سورس‌کد کامل، ماژولار و تمیز را بر پایه React و Tailwind دریافت می‌کنید. بدون هیچ‌گونه قفل نرم‌افزاری یا هزینه ماهیانه اجباری.'
          : 'Receive complete, unminified React 19 + TypeScript + Tailwind CSS code. Host anywhere, customize completely, with lifetime commercial rights.',
      bullets: [
        language === 'fa' ? 'بدون هزینه‌های پنهان یا اشتراک ماهانه' : 'No recurring subscription fees',
        language === 'fa' ? 'فایل‌های طراحی فیگما همراه قالب' : 'Free Figma design files included',
      ],
      icon: ShieldCheck,
      accent: 'text-emerald-400 border-emerald-500/20 bg-emerald-500/10',
    },
    {
      num: '04',
      title: language === 'fa' ? 'سئو قوی و واکنش‌گرایی در همه دیوایس‌ها' : 'Omni-Device & SEO Optimized',
      desc:
        language === 'fa'
          ? 'تست‌شده در انواع گوشی‌های هوشمند، تبلت‌ها و دسکتاپ. سرعت بارگذاری زیر ۱ ثانیه همراه با ساختار استاندارد متاتگ‌های سئو برای گوگل.'
          : 'Hand-tuned responsive breakpoints for flawless viewing on mobile, tablet, and desktop. Score 99+ on Google PageSpeed with semantic HTML.',
      bullets: [
        language === 'fa' ? 'امتیاز ۹۹+ سرعت گوگل (PageSpeed)' : '99+ Google PageSpeed score',
        language === 'fa' ? 'آماده برای رتبه‌گیری در موتورهای جستجو' : 'Structured OpenGraph & Schema tags',
      ],
      icon: Smartphone,
      accent: 'text-cyan-400 border-cyan-500/20 bg-cyan-500/10',
    },
  ];

  return (
    <section id="benefits" className="py-24 sm:py-36 px-4 sm:px-6 lg:px-8 bg-slate-950 border-t border-white/5 relative scroll-mt-20">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-white/10">
          <div className="max-w-2xl space-y-3">
            <span className="text-xs font-mono text-indigo-400 uppercase tracking-widest">
              {language === 'fa' ? 'چرا آرک‌تایپ؟ // ارزش‌های تجاری' : 'WHY ARTHETYPE // THE VALUE PROPOSITION'}
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
              {language === 'fa' ? 'چرا بنیان‌گذاران و آژانس‌ها قالب‌های ما را انتخاب می‌کنند؟' : 'Why Businesses & Agencies Choose Our Templates.'}
            </h2>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              {language === 'fa'
                ? 'ما بهترین استاندارد استودیوهای بین‌المللی را در قالب‌هایی آماده و مقرون‌به‌صرفه در اختیار شما قرار داده‌ایم.'
                : 'Everything you need to launch a high-authority website without writing code from scratch or hiring expensive designers.'}
            </p>
          </div>

          <button
            type="button"
            onClick={() => navigate('/templates')}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 transition-all shadow-md shadow-indigo-600/25 self-start md:self-auto cursor-pointer"
          >
            <span>{language === 'fa' ? 'مشاهده کاتالوگ قالب‌ها' : 'Explore All Templates'}</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

        {/* 4 Value Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {benefits.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.num}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="group relative flex flex-col justify-between p-8 rounded-3xl bg-slate-900/40 border border-white/5 hover:border-white/15 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
              >
                <div className="space-y-5">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-2xl font-black text-slate-600 group-hover:text-indigo-400 transition-colors">
                      {item.num}
                    </span>
                    <div className={`p-3 rounded-2xl border ${item.accent}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-white group-hover:text-indigo-200 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-white/5 space-y-2">
                  {item.bullets.map((bullet) => (
                    <div key={bullet} className="flex items-center gap-2 text-xs text-slate-300 font-medium">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default StudioBenefits;
