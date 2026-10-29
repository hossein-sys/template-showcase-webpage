import React, { useState } from 'react';
import { motion } from 'motion/react';
import CrystalizedBall from '../react-bits/Crystalized-Ball/CrystalizedBall';
import { useLanguage } from '../../context/LanguageContext';
import { useNavigation } from '../../context/NavigationContext';
import { Sparkles, Sliders, RefreshCw, ArrowUpRight } from 'lucide-react';

type PresetType = 'nebula' | 'aurora' | 'frost' | 'ember' | 'abyss';

export const CrystalizedStage: React.FC = () => {
  const [activePreset, setActivePreset] = useState<PresetType>('nebula');
  const [speed, setSpeed] = useState<number>(0.8);
  const { language } = useLanguage();
  const { navigate } = useNavigation();

  const presets: { id: PresetType; label: string; labelFa: string }[] = [
    { id: 'nebula', label: 'Nebula', labelFa: 'سحابی نیلگون' },
    { id: 'aurora', label: 'Aurora', labelFa: 'شفق قطبی' },
    { id: 'frost', label: 'Frost', labelFa: 'کریستال یخ' },
    { id: 'ember', label: 'Ember', labelFa: 'شعله تابان' },
    { id: 'abyss', label: 'Abyss', labelFa: 'اعماق تاریک' },
  ];

  return (
    <section id="experience" className="py-24 sm:py-36 px-4 sm:px-6 lg:px-8 bg-slate-950 relative scroll-mt-20">
      {/* Soft background ambient gradient glow - no clipping */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[550px] bg-indigo-600/10 rounded-full blur-[160px] pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* Section Header: Explaining the Template Feature */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6 border-b border-white/10">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 text-indigo-400 text-xs font-mono uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{language === 'fa' ? 'تجربه تعاملی شماره ۱ // وب‌جی‌ال' : 'TEMPLATE FEATURE 01 // INTERACTIVE WEBGL'}</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
              {language === 'fa' ? 'جلوه‌های دیداری تعاملی، آماده در قالب‌ها' : 'Interactive Visuals That Captivate & Convert.'}
            </h2>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              {language === 'fa'
                ? 'وب‌سایت‌های معمولی فراموش می‌شوند. قالب‌های آرک‌تایپ همراه با کامپوننت‌های تعاملی مدرن نظیر شبیه‌سازی ذرات سه‌بعدی ارائه می‌شوند تا هویت برند شما در ذهن مشتریان ماندگار شود.'
                : 'Static websites get ignored. Archetype templates incorporate production-grade 3D WebGL moments and micro-interactions that elevate brand authority and keep potential customers engaged.'}
            </p>
          </div>

          {/* Interactive Controls & CTA */}
          <div className="flex flex-wrap items-center gap-3">
            {/* Preset Selector */}
            <div className="flex flex-wrap items-center gap-1.5 p-1.5 rounded-full bg-slate-900/80 border border-white/10 backdrop-blur-md">
              <span className="text-[10px] font-mono text-slate-500 uppercase px-2 hidden sm:inline">
                THEME:
              </span>
              {presets.map((preset) => {
                const isActive = activePreset === preset.id;
                return (
                  <button
                    key={preset.id}
                    type="button"
                    onClick={() => setActivePreset(preset.id)}
                    className={`px-3 py-1 rounded-full text-xs font-medium transition-all duration-150 cursor-pointer ${
                      isActive
                        ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                        : 'text-slate-400 hover:text-white hover:bg-slate-800'
                    }`}
                  >
                    {language === 'fa' ? preset.labelFa : preset.label}
                  </button>
                );
              })}
            </div>

            {/* Quick Link to Templates */}
            <button
              type="button"
              onClick={() => navigate('/templates')}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold text-slate-200 bg-slate-900 hover:bg-slate-800 border border-white/10 hover:border-indigo-400/30 transition-all cursor-pointer"
            >
              <span>{language === 'fa' ? 'دیدن قالب‌های سه‌بعدی' : 'View Templates'}</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-indigo-400" />
            </button>
          </div>
        </div>

        {/* Spacious, Unclipped Interactive Stage */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full min-h-[500px] sm:min-h-[620px] md:min-h-[700px] rounded-3xl border border-white/10 bg-slate-950/60 backdrop-blur-xl flex items-center justify-center shadow-[0_20px_60px_rgba(0,0,0,0.5)] group"
        >
          {/* Subtle Stage Indicators */}
          <div className="absolute top-4 left-5 z-20 flex items-center gap-2 text-[10px] font-mono text-slate-400 bg-slate-900/80 px-3 py-1 rounded-full border border-white/5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>GPU // OGL VOLUMETRIC RAYMARCHING</span>
          </div>

          <div className="absolute top-4 right-5 z-20 flex items-center gap-2 text-[10px] font-mono text-slate-400 bg-slate-900/80 px-3 py-1 rounded-full border border-white/5">
            <Sliders className="w-3 h-3 text-indigo-400" />
            <span>SHADER: {activePreset.toUpperCase()}</span>
          </div>

          {/* Speed Toggle */}
          <div className="absolute bottom-5 right-5 z-20">
            <button
              type="button"
              onClick={() => setSpeed((s) => (s >= 1.5 ? 0.5 : Number((s + 0.3).toFixed(1))))}
              className="flex items-center gap-1.5 bg-slate-900/80 hover:bg-slate-800 px-3 py-1.5 rounded-full border border-white/10 text-[11px] font-mono text-slate-300 hover:text-white transition-colors cursor-pointer shadow-lg"
              title="Change rotation speed"
            >
              <RefreshCw className="w-3 h-3 text-indigo-400" />
              <span>SPEED: {speed}x</span>
            </button>
          </div>

          {/* Interactive Mouse Guide Hint */}
          <div className="absolute bottom-5 left-5 z-20 hidden sm:flex items-center gap-2 text-[11px] font-mono text-slate-400 bg-slate-900/80 px-3 py-1.5 rounded-full border border-white/5">
            <span>{language === 'fa' ? 'ماوس را روی گوی حرکت دهید' : 'Move cursor across the canvas to interact'}</span>
          </div>

          {/* Unclipped Canvas Viewport */}
          <div className="w-full h-full min-h-[480px] sm:min-h-[600px] flex items-center justify-center p-2 sm:p-6">
            <CrystalizedBall
              preset={activePreset}
              speed={speed}
              interactive={true}
              hoverStrength={1.4}
              className="w-full h-full min-h-[460px] sm:min-h-[580px]"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default CrystalizedStage;
