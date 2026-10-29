import React, { useMemo } from 'react';
import { motion } from 'motion/react';
import GridMotion from '../react-bits/Grid-motion/GridMotion';
import { MOCK_TEMPLATES } from '../../data/mockTemplates';
import { useLanguage } from '../../context/LanguageContext';
import { useNavigation } from '../../context/NavigationContext';
import { ArrowUpRight, Sparkles, Layers, Eye } from 'lucide-react';

export const StudioGridMotion: React.FC = () => {
  const { language } = useLanguage();
  const { navigate } = useNavigation();

  // Create high-fidelity interactive preview cards for GridMotion
  const gridItems = useMemo(() => {
    // Duplicate templates so all 3-4 rows show a rich alternating variety
    const pool = [...MOCK_TEMPLATES, ...MOCK_TEMPLATES];

    return pool.map((tpl, index) => (
      <div
        key={`${tpl.id}-${index}`}
        onClick={() => navigate('/templates')}
        className="relative w-full h-full group cursor-pointer select-none overflow-hidden rounded-[inherit] bg-slate-900"
      >
        <img
          src={tpl.previewImage}
          alt={language === 'fa' ? tpl.titleFa : tpl.title}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108 pointer-events-none"
          loading="lazy"
          draggable={false}
        />
        {/* Subtle vignette and bottom shadow overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/30 to-transparent pointer-events-none" />
        
        {/* Card content badge overlay */}
        <div className="absolute inset-x-0 bottom-0 p-3 sm:p-4 z-10 flex items-end justify-between gap-2 pointer-events-none">
          <div className="space-y-1 min-w-0 text-left rtl:text-right">
            <span className="inline-block px-2 py-0.5 rounded-full text-[9px] sm:text-[10px] font-mono uppercase tracking-wider font-semibold bg-indigo-500/30 text-indigo-200 border border-indigo-400/30 backdrop-blur-md">
              {language === 'fa' ? tpl.categoryFa : tpl.category}
            </span>
            <h4 className="text-xs sm:text-sm font-bold text-white tracking-tight truncate drop-shadow-md">
              {language === 'fa' ? tpl.titleFa : tpl.title}
            </h4>
          </div>

          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-black/60 border border-white/10 backdrop-blur-md text-[11px] font-mono font-semibold text-emerald-400 shrink-0">
            <span>{typeof tpl.price === 'number' ? `$${tpl.price}` : (language === 'fa' ? 'رایگان' : 'Free')}</span>
          </div>
        </div>

        {/* Hover inspect indicator pill */}
        <div className="absolute top-3 right-3 sm:top-4 sm:right-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-indigo-600/90 text-white text-[10px] font-mono font-semibold shadow-lg backdrop-blur-md pointer-events-none">
          <Eye className="w-3 h-3" />
          <span>{language === 'fa' ? 'مشاهده قالب' : 'View'}</span>
        </div>
      </div>
    ));
  }, [language, navigate]);

  return (
    <section id="gallery" className="relative py-20 sm:py-28 bg-slate-950 border-t border-white/5 overflow-hidden scroll-mt-20 sm:scroll-mt-24">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-indigo-600/10 rounded-full blur-[160px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 sm:mb-14">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-white/10">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-mono text-indigo-400 uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{language === 'fa' ? 'گالری زنده قالب‌ها // حرکت پیوسته' : 'CURATED COLLECTION // IN MOTION'}</span>
            </div>
            
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
              {language === 'fa' ? (
                <>
                  پیش‌نمایش زنده{' '}
                  <span className="bg-gradient-to-r from-indigo-300 via-slate-100 to-indigo-400 bg-clip-text text-transparent">
                    طراحی‌های آماده بهره‌برداری
                  </span>
                </>
              ) : (
                <>
                  A Living Tapestry of{' '}
                  <span className="bg-gradient-to-r from-indigo-300 via-slate-100 to-indigo-400 bg-clip-text text-transparent">
                    Production-Ready Designs.
                  </span>
                </>
              )}
            </h2>

            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              {language === 'fa'
                ? 'با حرکت دادن نشانگر ماوس، جلوه نورافکن (Spotlight) و ژرف‌نمایی سه‌بعدی قالب‌ها را بررسی کنید. ساخته‌شده برای انواع فروشگاه‌ها، نرم‌افزارهای ابری، آژانس‌ها و خدمات حرفه‌ای.'
                : 'Move your cursor across the canvas to illuminate each design with dynamic spotlight and 3D parallax. Built to scale modern businesses with instant credibility.'}
            </p>
          </div>

          {/* Quick CTA to /templates */}
          <button
            type="button"
            onClick={() => navigate('/templates')}
            className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full text-xs sm:text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-500 transition-all shadow-lg shadow-indigo-600/30 self-start md:self-auto cursor-pointer border border-indigo-400/30 hover:scale-[1.02]"
          >
            <Layers className="w-4 h-4" />
            <span>{language === 'fa' ? 'ورود به کاتالوگ و فیلتر قالب‌ها' : 'Open Template Catalog'}</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Grid Motion Canvas Container */}
      <div className="relative w-full h-[520px] sm:h-[620px] md:h-[680px] overflow-hidden select-none">
        {/* Top & Bottom Cinematic Edge Feathering */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-slate-950 via-slate-950/70 to-transparent z-10" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent z-10" />

        {/* The React Bits GridMotion Component */}
        <GridMotion
          items={gridItems}
          rows={3}
          aspectRatio={1.55}
          gap={24}
          radius={20}
          angle={-8}
          tilt={22}
          speed={24}
          direction="alternate"
          parallax={0.6}
          spotlight={0.8}
          dim={0.4}
          grayscale={false}
          fade={0.4}
          theme="dark"
          className="w-full h-full"
        />

        {/* Center-Bottom Floating Pill Prompt */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 pointer-events-auto"
        >
          <button
            type="button"
            onClick={() => navigate('/templates')}
            className="group flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-slate-900/85 hover:bg-slate-900 border border-white/15 backdrop-blur-xl shadow-2xl shadow-black text-xs font-medium text-slate-300 hover:text-white transition-all cursor-pointer"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>
              {language === 'fa'
                ? 'مشاهده تمامی قالب‌ها با قابلیت پیش‌نمایش زنده در چند دیوایس'
                : 'Click any template to test multi-viewport live demo'}
            </span>
            <ArrowUpRight className="w-3.5 h-3.5 text-indigo-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default StudioGridMotion;
