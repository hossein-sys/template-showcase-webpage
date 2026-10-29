import React, { useState } from 'react';
import CrystalizedBall from '../react-bits/Crystalized-Ball/CrystalizedBall';
import TechText from '../react-bits/Tech-Text/TechText';
import { useLanguage } from '../../context/LanguageContext';
import {
  Search,
  Sparkles,
  Smartphone,
  Rocket,
  TrendingUp,
  ShieldCheck,
  ArrowRight,
} from 'lucide-react';

export interface HeroSectionProps {
  searchQuery?: string;
  onSearchChange?: (query: string) => void;
  onSearchSubmit?: (query: string) => void;
  totalTemplatesCount?: number;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  searchQuery = '',
  onSearchChange,
  onSearchSubmit,
  totalTemplatesCount = 50,
}) => {
  const [internalQuery, setInternalQuery] = useState(searchQuery);
  const { t, language, direction } = useLanguage();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setInternalQuery(val);
    onSearchChange?.(val);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearchSubmit?.(internalQuery);
    const target = document.getElementById('browse') || document.getElementById('templates-grid');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const quickNiches =
    language === 'fa'
      ? [
          { label: 'فروشگاهی', query: 'فروشگاهی' },
          { label: 'نرم‌افزار', query: 'نرم‌افزار' },
          { label: 'پزشکی و کلینیک', query: 'پزشکی' },
          { label: 'املاک لوکس', query: 'املاک' },
          { label: 'آژانس خلاقیت', query: 'آژانس' },
        ]
      : [
          { label: 'E-commerce', query: 'E-commerce' },
          { label: 'SaaS', query: 'SaaS' },
          { label: 'Clinic', query: 'Clinic' },
          { label: 'Real Estate', query: 'Real Estate' },
          { label: 'Agency', query: 'Agency' },
        ];

  return (
    <section className="relative overflow-hidden pt-8 pb-14 sm:pt-14 sm:pb-20 px-4 sm:px-6 lg:px-8 border-b border-slate-200/60 dark:border-slate-800/60 bg-radial-[at_50%_0%] from-indigo-950/40 via-slate-950 to-slate-950 text-slate-100">
      {/* Background ambient lighting effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-indigo-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto flex flex-col items-center text-center space-y-7 relative z-10">
        
        {/* 1. Eye-Catching Badge */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-indigo-500/10 text-indigo-300 border border-indigo-500/25 text-xs sm:text-sm font-semibold tracking-wide backdrop-blur-md shadow-sm shadow-indigo-500/10">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
          </span>
          <Sparkles className="w-4 h-4 text-indigo-400" />
          <span>{totalTemplatesCount}+ {t.hero.badge}</span>
        </div>

        {/* Interactive React-Bits 3D Crystalized Orb Centerpiece */}
        <div className="relative w-44 h-44 sm:w-56 sm:h-56 group cursor-grab active:cursor-grabbing select-none my-1">
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-indigo-500/20 via-purple-500/15 to-cyan-500/20 blur-2xl -z-10 group-hover:scale-110 transition-transform duration-500" />
          <CrystalizedBall
            preset="nebula"
            speed={0.8}
            interactive={true}
            hoverStrength={1.2}
            className="w-full h-full rounded-2xl"
          />
        </div>

        {/* Interactive React-Bits Kinetic Typography Site Brand Title */}
        <div className="w-full max-w-2xl h-18 sm:h-22 flex items-center justify-center">
          <TechText
            text={language === 'fa' ? 'ARCHETYPE' : 'ARCHETYPE'}
            fontSize={44}
            color="#f8fafc"
            accentColor="#818cf8"
            align="center"
            intro="assemble"
            lineStyle="solid"
            className="w-full h-full"
          />
        </div>

        {/* 2. Bold Headline for Business Owners Wanting to Launch Fast */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white max-w-4xl leading-[1.25]">
          {t.hero.titleStart}{' '}
          <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent">
            {t.hero.titleHighlight}
          </span>
        </h1>

        {/* 3. Brief Subheading */}
        <p className="text-slate-300 text-base sm:text-lg md:text-xl font-normal max-w-2xl leading-relaxed">
          {t.hero.subtitle}
        </p>

        {/* 4. Integrated Quick-Search Bar inside Hero with Instant Submit Trigger */}
        <div className="w-full max-w-2xl pt-2">
          <form
            onSubmit={handleSubmit}
            className="relative flex items-center p-1.5 sm:p-2 rounded-2xl bg-slate-900/90 border border-slate-700/80 shadow-2xl shadow-indigo-950/40 backdrop-blur-xl focus-within:border-indigo-500 focus-within:ring-4 focus-within:ring-indigo-500/20 transition-all"
          >
            <div className="pl-3.5 pr-2 rtl:pr-3.5 rtl:pl-2 text-slate-400">
              <Search className="w-5 h-5 text-indigo-400" />
            </div>
            <input
              type="text"
              value={internalQuery}
              onChange={handleInputChange}
              placeholder={t.hero.searchPlaceholder}
              className="w-full py-2.5 sm:py-3 pr-3 rtl:pl-3 bg-transparent text-sm sm:text-base text-slate-100 placeholder-slate-400 focus:outline-none"
            />
            <button
              type="submit"
              className="inline-flex items-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white font-semibold text-xs sm:text-sm shadow-lg shadow-indigo-600/30 transition-all hover:scale-[1.02] active:scale-[0.98] whitespace-nowrap cursor-pointer"
            >
              <span>{t.hero.searchButton}</span>
              <ArrowRight className={`w-4 h-4 hidden sm:inline ${direction === 'rtl' ? 'rotate-180' : ''}`} />
            </button>
          </form>

          {/* Quick suggestions pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-3 text-xs text-slate-400">
            <span className="text-slate-500 font-medium">{t.hero.popularLabel}</span>
            {quickNiches.map((niche) => (
              <button
                key={niche.label}
                type="button"
                onClick={() => {
                  setInternalQuery(niche.query);
                  onSearchChange?.(niche.query);
                  onSearchSubmit?.(niche.query);
                  const target = document.getElementById('browse') || document.getElementById('templates-grid');
                  target?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-2.5 py-1 rounded-md bg-slate-900/60 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-white transition-colors cursor-pointer"
              >
                {niche.label}
              </button>
            ))}
          </div>
        </div>

        {/* 5. Micro-Trust Signals Below the Hero */}
        <div className="pt-6 border-t border-slate-800/80 w-full max-w-4xl grid grid-cols-2 md:grid-cols-4 gap-4 text-xs sm:text-sm text-slate-300">
          <div className="flex items-center justify-center gap-2 py-1.5 px-3 rounded-lg bg-slate-900/40 border border-slate-800/40">
            <Smartphone className="w-4 h-4 text-indigo-400 shrink-0" />
            <span className="font-medium">{t.hero.trustResponsive}</span>
          </div>

          <div className="flex items-center justify-center gap-2 py-1.5 px-3 rounded-lg bg-slate-900/40 border border-slate-800/40">
            <TrendingUp className="w-4 h-4 text-emerald-400 shrink-0" />
            <span className="font-medium">{t.hero.trustSeo}</span>
          </div>

          <div className="flex items-center justify-center gap-2 py-1.5 px-3 rounded-lg bg-slate-900/40 border border-slate-800/40">
            <Rocket className="w-4 h-4 text-amber-400 shrink-0" />
            <span className="font-medium">{t.hero.trustDeploy}</span>
          </div>

          <div className="flex items-center justify-center gap-2 py-1.5 px-3 rounded-lg bg-slate-900/40 border border-slate-800/40">
            <ShieldCheck className="w-4 h-4 text-cyan-400 shrink-0" />
            <span className="font-medium">{t.hero.trustCommercial}</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;
