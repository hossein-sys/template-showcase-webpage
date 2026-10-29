import React from 'react';
import { motion } from 'motion/react';
import CrystalizedBall from '../react-bits/Crystalized-Ball/CrystalizedBall';
import TechText from '../react-bits/Tech-Text/TechText';
import { useLanguage } from '../../context/LanguageContext';
import { useNavigation } from '../../context/NavigationContext';
import { ArrowUpRight, Compass, CheckCircle2, Sparkles } from 'lucide-react';

export const StudioHero: React.FC = () => {
  const { language } = useLanguage();
  const { navigate } = useNavigation();

  return (
    <section className="relative min-h-[96vh] flex items-center justify-center pt-28 sm:pt-36 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-slate-950 text-slate-100">
      {/* Deep atmospheric lighting & fine grid mesh */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b08_1px,transparent_1px),linear-gradient(to_bottom,#1e293b08_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[450px] bg-indigo-600/12 rounded-full blur-[150px] pointer-events-none -z-10" />
      <div className="absolute top-2/3 left-1/3 -translate-x-1/2 w-[450px] h-[300px] bg-cyan-500/8 rounded-full blur-[130px] pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto flex flex-col items-center text-center space-y-6 sm:space-y-7 relative z-10">
        
        {/* Marketplace Eyebrow Pill */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/90 border border-white/10 text-xs font-mono uppercase tracking-widest text-indigo-400 backdrop-blur-md shadow-lg shadow-black/50"
        >
          <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
          <span>{language === 'fa' ? 'مارکت‌پلیس قالب‌های آماده وب تجاری' : 'READY-MADE WEBSITE TEMPLATE MARKETPLACE'}</span>
        </motion.div>

        {/* Decorative Atmospheric WebGL Sphere (CrystalizedBall) integrated above brand title */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-44 h-44 sm:w-56 sm:h-56 md:w-64 md:h-64 flex items-center justify-center my-1 select-none"
        >
          {/* Ambient luminous glow backplate */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-indigo-500/25 via-purple-500/15 to-cyan-500/20 blur-3xl -z-10" />
          <CrystalizedBall
            preset="nebula"
            speed={0.6}
            interactive={true}
            hoverStrength={1.1}
            className="w-full h-full"
          />
        </motion.div>

        {/* Kinetic Brand Title (TechText) - The Main Visual Brand Focal Point */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="w-full max-w-xl sm:max-w-2xl h-18 sm:h-22 md:h-24 flex items-center justify-center select-none md:mb-24"
        >
          <TechText
            text="ARCHETYPE"
            fontSize={100}
            letterSpacing={2}
            color="#f8fafc"
            accentColor="#818cf8"
            align="center"
            lineStyle="solid"
            intro="assemble"
            guides={false}
            labels={true}
            draggable={false}
            className="w-full h-full"
          />
        </motion.div>

        {/* Powerful Business Marketplace Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-3"
        >
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.12] text-white">
            {language === 'fa' ? (
              <>
                راه‌اندازی سایت تجاری شما در{' '}
                <br className="hidden sm:inline" />
                <span className="bg-gradient-to-r from-indigo-300 via-slate-100 to-indigo-400 bg-clip-text text-transparent">
                  چند ساعت، نه چند ماه.
                </span>
              </>
            ) : (
              <>
                Launch your business website in{' '}
                <br className="hidden sm:inline" />
                <span className="bg-gradient-to-r from-indigo-300 via-slate-100 to-indigo-400 bg-clip-text text-transparent">
                  hours, not months.
                </span>
              </>
            )}
          </h1>
        </motion.div>

        {/* Concise Supporting Explanation of Ready-Made Templates Platform */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="text-slate-400 text-sm sm:text-base md:text-lg font-normal max-w-2xl leading-relaxed"
        >
          {language === 'fa'
            ? 'فرآیند طاقت‌فرسا و پرهزینه توسعه اختصاصی را کنار بگذارید. قالب‌های آماده، واکنش‌گرا و بهینه‌سازی‌شده برای نرخ تبدیل؛ ساخته‌شده با React 19، تایپ‌اسکریپت و تیلویند همراه با مالکیت ۱۰۰٪ سورس‌کد.'
            : 'Skip the slow, costly agency development cycle. Discover ready-made, conversion-engineered website templates built with modern React 19, TypeScript, and Tailwind CSS. Deploy on day one.'}
        </motion.p>

        {/* Primary and Secondary CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center gap-3.5 pt-2 w-full sm:w-auto"
        >
          {/* Primary CTA navigating to /templates */}
          <button
            type="button"
            onClick={() => navigate('/templates')}
            className="w-full sm:w-auto group inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-indigo-600 via-indigo-500 to-violet-600 hover:from-indigo-500 hover:to-violet-500 shadow-xl shadow-indigo-600/35 border border-indigo-400/30 transition-all duration-200 hover:scale-[1.02] cursor-pointer"
          >
            <span>{language === 'fa' ? 'مشاهده همه قالب‌های آماده' : 'Browse Ready-Made Templates'}</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>

          {/* Secondary CTA scrolling to benefits */}
          <a
            href="#benefits"
            onClick={(e) => {
              e.preventDefault();
              const target = document.querySelector('#benefits');
              target?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold text-slate-300 hover:text-white bg-slate-900/80 hover:bg-slate-800 border border-white/10 transition-colors cursor-pointer"
          >
            <Compass className="w-4 h-4 text-indigo-400" />
            <span>{language === 'fa' ? 'چرا آرک‌تایپ؟' : 'Why Choose Us'}</span>
          </a>
        </motion.div>

        {/* Micro-Trust Highlights */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="pt-6 flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs font-medium text-slate-400"
        >
          <div className="flex items-center gap-2 bg-slate-900/50 px-3 py-1.5 rounded-full border border-white/5">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>{language === 'fa' ? 'مالکیت کامل سورس‌کد' : 'Full Source Code Ownership'}</span>
          </div>
          <div className="flex items-center gap-2 bg-slate-900/50 px-3 py-1.5 rounded-full border border-white/5">
            <CheckCircle2 className="w-4 h-4 text-indigo-400" />
            <span>{language === 'fa' ? 'لایسنس تجاری نامحدود' : 'Unlimited Commercial License'}</span>
          </div>
          <div className="flex items-center gap-2 bg-slate-900/50 px-3 py-1.5 rounded-full border border-white/5">
            <CheckCircle2 className="w-4 h-4 text-cyan-400" />
            <span>{language === 'fa' ? 'ضمانت بازگشت وجه ۱۴ روزه' : '14-Day Refund Guarantee'}</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default StudioHero;
