import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../../context/LanguageContext';
import { Quote } from 'lucide-react';

export const DesignPhilosophy: React.FC = () => {
  const { language } = useLanguage();

  return (
    <section id="philosophy" className="py-24 sm:py-36 px-4 sm:px-6 lg:px-8 bg-slate-950 border-t border-b border-white/5 relative overflow-hidden scroll-mt-20">
      <div className="max-w-5xl mx-auto space-y-12">
        
        {/* Editorial Subheader */}
        <div className="flex items-center gap-3 text-xs font-mono tracking-widest text-slate-500 uppercase">
          <span className="w-8 h-px bg-slate-700" />
          <span>MANIFESTO // ARCHITECTURE OF SENSATION</span>
        </div>

        {/* Large Editorial Statement */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative"
        >
          <Quote className="w-16 h-16 text-indigo-500/10 absolute -top-8 -left-8 -z-10" />
          <blockquote className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-slate-100 tracking-tight leading-[1.25]">
            {language === 'fa' ? (
              <>
                «ما وب یک‌بار مصرف را نمی‌پذیریم. ما معتقدیم وب‌سایت‌های تجاری باید به اندازه برترین فضاهای معماری فیزیکی جهان،{' '}
                <span className="text-indigo-400">دقیق، ماندگار و تکان‌دهنده</span> باشند.»
              </>
            ) : (
              <>
                "We reject the disposable web. We believe digital storefronts and enterprise interfaces should feel as{' '}
                <span className="text-indigo-400">deliberate, enduring, and kinetic</span> as the world's finest architectural spaces."
              </>
            )}
          </blockquote>
        </motion.div>

        {/* Supporting Editorial Column */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-6 border-t border-white/5 text-xs sm:text-sm text-slate-400 leading-relaxed font-normal">
          <div className="space-y-2">
            <h4 className="font-mono text-xs uppercase tracking-wider text-slate-200">
              01 / Radical Restraint
            </h4>
            <p>
              Every pixel exists with mathematical intention. We eliminate arbitrary gradients, decorative clutter, and meaningless widgets.
            </p>
          </div>

          <div className="space-y-2">
            <h4 className="font-mono text-xs uppercase tracking-wider text-slate-200">
              02 / Kinetic Feedback
            </h4>
            <p>
              Motion is not decoration; motion is spatial orientation. Subtle physics establish weight, inertia, and visceral tactile feedback.
            </p>
          </div>

          <div className="space-y-2">
            <h4 className="font-mono text-xs uppercase tracking-wider text-slate-200">
              03 / Uncompromising Code
            </h4>
            <p>
              Zero layout shifts. Strict TypeScript contracts. Sub-second First Contentful Paint and fluid responsive geometry across every screen.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default DesignPhilosophy;
