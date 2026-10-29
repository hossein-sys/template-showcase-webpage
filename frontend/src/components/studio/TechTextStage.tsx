import React, { useState } from 'react';
import { motion } from 'motion/react';
import TechText from '../react-bits/Tech-Text/TechText';
import { useLanguage } from '../../context/LanguageContext';
import { useNavigation } from '../../context/NavigationContext';
import { Type, Grid, Tag, Compass, MousePointer, ArrowUpRight } from 'lucide-react';

export const TechTextStage: React.FC = () => {
  const [displayText, setDisplayText] = useState<string>('CONVERT');
  const [lineStyle, setLineStyle] = useState<'dashed' | 'solid'>('dashed');
  const [showGuides, setShowGuides] = useState<boolean>(true);
  const [showLabels, setShowLabels] = useState<boolean>(true);
  const { language } = useLanguage();
  const { navigate } = useNavigation();

  const sampleWords = ['CONVERT', 'ARCHETYPE', 'GROWTH', 'PRECISION'];

  return (
    <section id="typography" className="py-24 sm:py-36 px-4 sm:px-6 lg:px-8 bg-slate-950 relative scroll-mt-20">
      {/* Background ambient lighting - soft, unclipped */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[450px] bg-cyan-600/10 rounded-full blur-[150px] pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6 border-b border-white/10">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 text-cyan-400 text-xs font-mono uppercase tracking-widest">
              <Type className="w-3.5 h-3.5" />
              <span>{language === 'fa' ? 'تجربه تعاملی شماره ۲ // تایپوگرافی پویا' : 'TEMPLATE FEATURE 02 // DYNAMIC TYPOGRAPHY'}</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
              {language === 'fa' ? 'تایپوگرافی زنده و تعاملی که توجه مخاطب را جلب می‌کند' : 'Kinetic Typography That Demands Attention.'}
            </h2>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              {language === 'fa'
                ? 'متون و تیترهای قالب‌های ما تنها فونت‌های ایستا نیستند؛ تعاملات فنری دوبعدی و خطوط برداری کالیبره‌شده، احساس محصولی پیشرفته و لوکس را به بازدیدکنندگان انتقال می‌دهند.'
                : 'Typography in our business templates is crafted with intent. From razor-sharp font pairings to kinetic canvas physics, your brand message resonates with authority.'}
            </p>
          </div>

          {/* Interactive Word Selector & CTA */}
          <div className="flex flex-wrap items-center gap-3">
            <div className="flex flex-wrap items-center gap-1.5 p-1.5 rounded-full bg-slate-900/80 border border-white/10 backdrop-blur-md">
              <span className="text-[10px] font-mono text-slate-500 uppercase px-2 hidden sm:inline">
                TEXT:
              </span>
              {sampleWords.map((word) => {
                const isActive = displayText === word;
                return (
                  <button
                    key={word}
                    type="button"
                    onClick={() => setDisplayText(word)}
                    className={`px-3 py-1 rounded-full text-xs font-mono transition-all duration-150 cursor-pointer ${
                      isActive
                        ? 'bg-cyan-600 text-white shadow-md shadow-cyan-600/30'
                        : 'text-slate-400 hover:text-white hover:bg-slate-800'
                    }`}
                  >
                    {word}
                  </button>
                );
              })}
            </div>

            <button
              type="button"
              onClick={() => navigate('/templates')}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold text-slate-200 bg-slate-900 hover:bg-slate-800 border border-white/10 hover:border-cyan-400/30 transition-all cursor-pointer"
            >
              <span>{language === 'fa' ? 'دیدن قالب‌های متنی' : 'View Templates'}</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-cyan-400" />
            </button>
          </div>
        </div>

        {/* Generous, Unclipped Interactive Canvas Enclosure */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full min-h-[460px] sm:min-h-[540px] md:min-h-[600px] rounded-3xl border border-white/10 bg-slate-950/60 backdrop-blur-xl flex flex-col justify-between p-5 sm:p-8 shadow-[0_20px_60px_rgba(0,0,0,0.5)] group"
        >
          {/* Top Canvas Controls Bar */}
          <div className="w-full flex items-center justify-between text-xs font-mono text-slate-400 z-20 pb-4 border-b border-white/5">
            <div className="flex items-center gap-2">
              <span className="text-cyan-400 font-bold flex items-center gap-1.5">
                <Compass className="w-3.5 h-3.5" />
                CANVAS // 2D_SPRING_PHYSICS
              </span>
            </div>

            {/* Interactive Feature Toggles */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setShowGuides((prev) => !prev)}
                className={`px-3 py-1 rounded-full border text-[11px] transition-colors cursor-pointer flex items-center gap-1.5 ${
                  showGuides
                    ? 'bg-cyan-500/15 border-cyan-500/40 text-cyan-300'
                    : 'bg-slate-900 border-white/5 text-slate-500'
                }`}
                title="Toggle canvas guidelines"
              >
                <Grid className="w-3 h-3" />
                <span>GUIDES: {showGuides ? 'ON' : 'OFF'}</span>
              </button>

              <button
                type="button"
                onClick={() => setShowLabels((prev) => !prev)}
                className={`px-3 py-1 rounded-full border text-[11px] transition-colors cursor-pointer flex items-center gap-1.5 ${
                  showLabels
                    ? 'bg-indigo-500/15 border-indigo-500/40 text-indigo-300'
                    : 'bg-slate-900 border-white/5 text-slate-500'
                }`}
                title="Toggle metric labels"
              >
                <Tag className="w-3 h-3" />
                <span>METRICS: {showLabels ? 'ON' : 'OFF'}</span>
              </button>

              <button
                type="button"
                onClick={() => setLineStyle((prev) => (prev === 'dashed' ? 'solid' : 'dashed'))}
                className="hidden sm:inline-flex px-3 py-1 rounded-full border border-white/10 bg-slate-900 text-[11px] hover:text-white transition-colors cursor-pointer"
              >
                STYLE: {lineStyle.toUpperCase()}
              </button>
            </div>
          </div>

          {/* Large-Scale Kinetic Typography Stage - Unclipped & Responsive */}
          <div className="relative w-full flex-1 flex items-center justify-center my-4 min-h-[300px] sm:min-h-[380px]">
            <TechText
              key={`${displayText}-${lineStyle}-${showGuides}-${showLabels}`}
              text={displayText}
              fontSize={64}
              letterSpacing={8}
              color="#f8fafc"
              accentColor="#22d3ee"
              align="center"
              lineStyle={lineStyle}
              guides={showGuides}
              labels={showLabels}
              draggable={true}
              bounce={1.4}
              intro="assemble"
              className="w-full h-full min-h-[280px] sm:min-h-[360px]"
            />
          </div>

          {/* Bottom HUD Bar & Interactive Hint */}
          <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] font-mono text-slate-500 pt-4 border-t border-white/5 z-20">
            <div className="flex items-center gap-3">
              <span>GLYPHS: {displayText.length}</span>
              <span>•</span>
              <span>INERTIA: ACTIVE</span>
              <span>•</span>
              <span className="text-cyan-400">VECTOR SPRINGS (320 N/m)</span>
            </div>

            <div className="flex items-center gap-1.5 text-slate-400">
              <MousePointer className="w-3.5 h-3.5 text-cyan-400 animate-bounce" />
              <span>
                {language === 'fa'
                  ? 'برای کشیدن و تکان دادن حروف، ماوس را روی متن بکشید یا کلیک کنید'
                  : 'Drag or click glyphs to deform and test kinetic spring inertia'}
              </span>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default TechTextStage;
