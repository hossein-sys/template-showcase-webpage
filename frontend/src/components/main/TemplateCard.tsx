import React from 'react';
import type { Template } from '../../types/template';
import { useLanguage } from '../../context/LanguageContext';
import { Star, ExternalLink, Sparkles, Check } from 'lucide-react';

export interface TemplateCardProps {
  template: Template;
  onChooseTemplate?: (template: Template) => void;
  onLiveDemo?: (template: Template) => void;
}

export const TemplateCard: React.FC<TemplateCardProps> = ({
  template,
  onChooseTemplate,
  onLiveDemo,
}) => {
  const { t, language } = useLanguage();

  const handleLiveDemoClick = (e: React.MouseEvent) => {
    if (onLiveDemo) {
      e.preventDefault();
      onLiveDemo(template);
    }
  };

  const handleChooseClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onChooseTemplate) {
      onChooseTemplate(template);
    } else {
      const title = language === 'fa' && template.titleFa ? template.titleFa : template.title;
      alert(`Selected "${title}". Proceeding to template setup!`);
    }
  };

  const displayTitle = language === 'fa' && template.titleFa ? template.titleFa : template.title;
  const displayDescription =
    language === 'fa' && template.descriptionFa ? template.descriptionFa : template.description;
  const displayCategory =
    language === 'fa' && template.categoryFa ? template.categoryFa : template.category;
  const displayTags = language === 'fa' && template.tagsFa ? template.tagsFa : template.tags;
  const displayPrice =
    typeof template.price === 'number'
      ? `$${template.price}`
      : language === 'fa'
      ? t.card.freeBadge
      : template.price;

  return (
    <article className="group flex flex-col bg-slate-900/80 border border-slate-800 hover:border-indigo-500/50 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-500/15 hover:-translate-y-1.5 focus-within:ring-2 focus-within:ring-indigo-500">
      {/* Image Container with Fixed 16/10 Aspect Ratio */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-950">
        <img
          src={template.previewImage}
          alt={displayTitle}
          loading="lazy"
          className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
        />

        {/* Gradient vignette on image */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-60" />

        {/* Badge Overlay (Top Left in LTR, Top Right in RTL) */}
        <div className="absolute top-3 left-3 rtl:right-3 rtl:left-auto flex flex-wrap items-center gap-1.5 z-10">
          {template.isPopular && (
            <span className="inline-flex items-center gap-1 bg-amber-400 text-slate-950 text-[11px] font-extrabold px-2.5 py-0.5 rounded-md shadow-md uppercase tracking-wider">
              <Sparkles className="w-3 h-3 fill-slate-950" />
              {t.card.popularBadge}
            </span>
          )}
          <span className="bg-slate-900/85 backdrop-blur-md text-slate-200 text-[11px] font-medium px-2.5 py-0.5 rounded-md border border-white/10 shadow-sm">
            {displayCategory}
          </span>
        </div>

        {/* Price Tag (Top Right in LTR, Top Left in RTL) */}
        <div className="absolute top-3 right-3 rtl:left-3 rtl:right-auto z-10">
          <span className="bg-slate-950/90 backdrop-blur-md text-emerald-400 text-xs font-bold px-2.5 py-1 rounded-md border border-emerald-500/30 shadow-lg">
            {displayPrice}
          </span>
        </div>

        {/* Quick Action Buttons on Image Hover / Overlay */}
        <div className="absolute inset-0 bg-slate-950/70 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex flex-col items-center justify-center gap-3 p-4 z-20">
          <a
            href={template.liveDemoUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleLiveDemoClick}
            className="w-44 inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-semibold bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-all hover:scale-105 active:scale-95 shadow-lg backdrop-blur-md cursor-pointer"
          >
            <span>{t.card.liveDemo}</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>

          <button
            type="button"
            onClick={handleChooseClick}
            className="w-44 inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-semibold bg-indigo-600 hover:bg-indigo-500 text-white transition-all hover:scale-105 active:scale-95 shadow-lg shadow-indigo-600/30 cursor-pointer"
          >
            <Check className="w-3.5 h-3.5" />
            <span>{t.card.chooseTemplate}</span>
          </button>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
        <div className="space-y-2">
          {/* Title and Rating */}
          <div className="flex items-start justify-between gap-3">
            <h3 className="font-bold text-base text-slate-100 group-hover:text-indigo-300 transition-colors line-clamp-1">
              {displayTitle}
            </h3>
            <div className="flex items-center gap-1 text-xs text-amber-400 font-semibold bg-amber-400/10 px-2 py-0.5 rounded border border-amber-400/20 shrink-0">
              <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
              <span>{template.rating.toFixed(1)}</span>
            </div>
          </div>

          {/* Description */}
          <p className="text-slate-400 text-xs leading-relaxed line-clamp-2">
            {displayDescription}
          </p>
        </div>

        {/* Key Tag Pills */}
        <div className="space-y-3">
          <div className="flex flex-wrap gap-1.5">
            {displayTags.map((tag) => (
              <span
                key={tag}
                className="text-[10px] font-medium px-2 py-0.5 rounded-md bg-slate-800 text-slate-300 border border-slate-700/60"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Mobile Fallback Action Buttons (visible on touch/smaller screens) */}
          <div className="flex sm:hidden items-center gap-2 pt-2 border-t border-slate-800">
            <a
              href={template.liveDemoUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleLiveDemoClick}
              className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg text-xs font-semibold bg-slate-800 text-slate-200 border border-slate-700 hover:bg-slate-700"
            >
              <span>{t.card.liveDemo}</span>
              <ExternalLink className="w-3 h-3" />
            </a>
            <button
              type="button"
              onClick={handleChooseClick}
              className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg text-xs font-semibold bg-indigo-600 text-white hover:bg-indigo-500"
            >
              <Check className="w-3 h-3" />
              <span>{t.card.chooseTemplate}</span>
            </button>
          </div>
        </div>
      </div>
    </article>
  );
};

export default TemplateCard;
