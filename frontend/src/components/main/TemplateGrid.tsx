import React from 'react';
import type { Template } from '../../types/template';
import TemplateCard from './TemplateCard';
import { useLanguage } from '../../context/LanguageContext';
import { SearchX, RotateCcw } from 'lucide-react';

export interface TemplateGridProps {
  templates: Template[];
  onResetFilters?: () => void;
  onChooseTemplate?: (template: Template) => void;
  onLiveDemo?: (template: Template) => void;
}

export const TemplateGrid: React.FC<TemplateGridProps> = ({
  templates,
  onResetFilters,
  onChooseTemplate,
  onLiveDemo,
}) => {
  const { t } = useLanguage();

  if (templates.length === 0) {
    return (
      <div className="text-center py-20 px-4 border border-dashed border-slate-800 rounded-3xl bg-slate-900/30 max-w-2xl mx-auto space-y-5">
        <div className="w-14 h-14 mx-auto rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
          <SearchX className="w-7 h-7" />
        </div>
        <div className="space-y-1.5">
          <h3 className="text-lg sm:text-xl font-bold text-white">
            {t.filter.noResultsTitle}
          </h3>
          <p className="text-slate-400 text-xs sm:text-sm max-w-md mx-auto leading-relaxed">
            {t.filter.noResultsText}
          </p>
        </div>
        {onResetFilters && (
          <button
            type="button"
            onClick={onResetFilters}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-600/25 transition-all hover:scale-105 active:scale-95 cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>{t.filter.resetFilters}</span>
          </button>
        )}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {templates.map((template) => (
        <TemplateCard
          key={template.id}
          template={template}
          onChooseTemplate={onChooseTemplate}
          onLiveDemo={onLiveDemo}
        />
      ))}
    </div>
  );
};

export default TemplateGrid;
