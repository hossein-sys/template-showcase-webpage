import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { Zap, Code2, Smartphone, ShieldCheck, CheckCircle2, TrendingUp } from 'lucide-react';

export const TrustFeatures: React.FC = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: Zap,
      badge: t.features.speedBadge,
      title: t.features.speedTitle,
      description: t.features.speedDesc,
      image:
        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
      imageAlt: 'Performance Analytics Dashboard',
      bullets: [t.features.speedB1, t.features.speedB2, t.features.speedB3],
      accentClass: 'from-amber-500/20 to-orange-500/10 text-amber-400 border-amber-500/30',
      iconClass: 'bg-amber-500/10 text-amber-400 border border-amber-500/20',
    },
    {
      icon: Code2,
      badge: t.features.codeBadge,
      title: t.features.codeTitle,
      description: t.features.codeDesc,
      image:
        'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80',
      imageAlt: 'Clean TypeScript Architecture',
      bullets: [t.features.codeB1, t.features.codeB2, t.features.codeB3],
      accentClass: 'from-indigo-500/20 to-violet-500/10 text-indigo-400 border-indigo-500/30',
      iconClass: 'bg-indigo-500/10 text-indigo-400 border border-indigo-500/20',
    },
    {
      icon: Smartphone,
      badge: t.features.seoBadge,
      title: t.features.seoTitle,
      description: t.features.seoDesc,
      image:
        'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80',
      imageAlt: 'Mobile Responsive Device',
      bullets: [t.features.seoB1, t.features.seoB2, t.features.seoB3],
      accentClass: 'from-emerald-500/20 to-cyan-500/10 text-emerald-400 border-emerald-500/30',
      iconClass: 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20',
    },
  ];

  return (
    <section className="py-16 sm:py-24 border-t border-slate-800/80 bg-slate-950/60 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-indigo-500/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 text-indigo-300 border border-indigo-500/20 text-xs font-semibold uppercase tracking-wider">
            <ShieldCheck className="w-3.5 h-3.5 text-indigo-400" />
            {t.features.badge}
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {t.features.heading}
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            {t.features.subheading}
          </p>
        </div>

        {/* 3 High-Impact Value Cards with Pictures */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="group relative flex flex-col justify-between bg-slate-900/60 border border-slate-800 hover:border-indigo-500/40 rounded-3xl p-5 sm:p-6 transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-500/10 hover:-translate-y-1.5 overflow-hidden"
              >
                <div>
                  {/* Picture Banner for the Box */}
                  <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl bg-slate-950 mb-5 border border-slate-800/80">
                    <img
                      src={feature.image}
                      alt={feature.imageAlt}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-108"
                    />
                    {/* Vignette Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/30 to-transparent opacity-80" />

                    {/* Overlay Icon & Badge */}
                    <div className="absolute bottom-3 left-3 rtl:right-3 rtl:left-auto flex items-center gap-2 z-10">
                      <div
                        className={`w-9 h-9 rounded-xl flex items-center justify-center backdrop-blur-md shadow-md ${feature.iconClass}`}
                      >
                        <Icon className="w-4 h-4" />
                      </div>
                      <span
                        className={`text-[11px] font-bold px-2.5 py-0.5 rounded-lg border backdrop-blur-md shadow-sm bg-gradient-to-r ${feature.accentClass}`}
                      >
                        {feature.badge}
                      </span>
                    </div>
                  </div>

                  {/* Title & Description */}
                  <div className="space-y-2 text-left rtl:text-right px-1">
                    <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-indigo-300 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>

                {/* Bullets List */}
                <div className="pt-5 mt-5 border-t border-slate-800/80 space-y-2.5 px-1">
                  {feature.bullets.map((bullet) => (
                    <div key={bullet} className="flex items-center gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Social Proof Quick Banner */}
        <div className="p-6 rounded-2xl bg-gradient-to-r from-indigo-950/40 via-slate-900/40 to-indigo-950/40 border border-slate-800 flex flex-col sm:flex-row items-center justify-around gap-6 text-center sm:text-left rtl:sm:text-right">
          <div className="flex items-center gap-3">
            <TrendingUp className="w-8 h-8 text-indigo-400 shrink-0" />
            <div>
              <div className="text-xl font-extrabold text-white">{t.features.statRating}</div>
              <div className="text-xs text-slate-400">{t.features.statRatingDesc}</div>
            </div>
          </div>
          <div className="h-8 w-px bg-slate-800 hidden sm:block" />
          <div>
            <div className="text-xl font-extrabold text-white">{t.features.statWebsites}</div>
            <div className="text-xs text-slate-400">{t.features.statWebsitesDesc}</div>
          </div>
          <div className="h-8 w-px bg-slate-800 hidden sm:block" />
          <div>
            <div className="text-xl font-extrabold text-white">{t.features.statSpeed}</div>
            <div className="text-xs text-slate-400">{t.features.statSpeedDesc}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustFeatures;
