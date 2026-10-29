import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../../context/LanguageContext';
import { Layers, Activity, Cpu, ShieldCheck } from 'lucide-react';

export const StudioPillars: React.FC = () => {
  const { language } = useLanguage();

  const pillars = [
    {
      num: '01',
      title: language === 'fa' ? 'نظم معماری و تایپ‌اسکریپت' : 'Architectural Discipline',
      desc:
        language === 'fa'
          ? 'قالب‌های ما مجموعه‌ای از کدهای سرهم‌بندی‌شده نیستند؛ بلکه سیستم‌های زنده با توکن‌های ریاضی و قراردادهای دقیق تایپ‌اسکریپت هستند.'
          : 'Not assembled templates, but living design systems structured with mathematical tokens, clean interfaces, and strict TypeScript contracts.',
      icon: Layers,
      accent: 'text-indigo-400 border-indigo-500/20 bg-indigo-500/5',
    },
    {
      num: '02',
      title: language === 'fa' ? 'موشن مبتنی بر فیزیک واقعی' : 'Physics-Tuned Kinetic Flow',
      desc:
        language === 'fa'
          ? 'ما انیمیشن‌های بیهوده و آزاردهنده را حذف کرده‌ایم. هر ترنزیشن و کشش فنری برای شفافیت ذهنی و جهت‌یابی فضایی کاربر کالیبره شده است.'
          : 'Zero gratuitous movement. Every bezier curve and spring constant is calibrated for spatial orientation and tactile feedback.',
      icon: Activity,
      accent: 'text-cyan-400 border-cyan-500/20 bg-cyan-500/5',
    },
    {
      num: '03',
      title: language === 'fa' ? 'عملکرد و پایداری بدون سازش' : 'Zero-Compromise Engine',
      desc:
        language === 'fa'
          ? 'لود صفحات زیر یک ثانیه، پرش صفحه صفر (CLS: 0) و مدیریت هوشمند منابع WebGL برای مصرف بهینه باتری و رم کاربران.'
          : 'Sub-second initial paint, zero layout shift, and intelligent WebGL lifecycle disposal to safeguard memory and frame rates.',
      icon: Cpu,
      accent: 'text-emerald-400 border-emerald-500/20 bg-emerald-500/5',
    },
  ];

  return (
    <section className="py-24 sm:py-36 px-4 sm:px-6 lg:px-8 bg-slate-950 border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Header */}
        <div className="max-w-2xl space-y-4">
          <div className="inline-flex items-center gap-2 text-indigo-400 text-xs font-mono uppercase tracking-widest">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>STUDIO PILLARS // SYSTEM VALUES</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            {language === 'fa' ? 'تمایز بنیادین آرک‌تایپ' : 'What Makes This Platform Different.'}
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            {language === 'fa'
              ? 'تلفیق استاندارد استودیوهای خلاق بین‌المللی با قدرت مهندسی فرانت‌اند مدرن.'
              : 'Bridging the chasm between world-class interactive design studios and production-ready web engineering.'}
          </p>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.num}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: idx * 0.12, ease: [0.16, 1, 0.3, 1] }}
                className="group relative flex flex-col justify-between p-8 rounded-3xl bg-slate-900/40 border border-white/5 hover:border-white/15 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
              >
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-2xl font-black text-slate-600 group-hover:text-indigo-400 transition-colors">
                      {pillar.num}
                    </span>
                    <div className={`p-3 rounded-2xl border ${pillar.accent}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-xl font-bold text-white group-hover:text-indigo-200 transition-colors">
                      {pillar.title}
                    </h3>
                    <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-white/5 flex items-center justify-between text-slate-500 font-mono text-[10px]">
                  <span>STANDARD: VERIFIED</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default StudioPillars;
