import React from 'react';
import type { SortOption } from '../../types/template';
import { useLanguage } from '../../context/LanguageContext';
import { Search, X, ArrowUpDown, Filter } from 'lucide-react';

export interface CategoryDefinition {
  id: string;
  labelEn: string;
  labelFa: string;
}

export const CATEGORY_DEFINITIONS: CategoryDefinition[] = [
  { id: 'all', labelEn: 'All Templates', labelFa: 'همه قالب‌ها' },
  { id: 'ecommerce', labelEn: 'E-commerce', labelFa: 'فروشگاهی' },
  { id: 'corporate', labelEn: 'Corporate & Agency', labelFa: 'شرکتی و آژانس' },
  { id: 'saas', labelEn: 'SaaS & Tech', labelFa: 'نرم‌افزار و فناوری' },
  { id: 'restaurant', labelEn: 'Restaurant & Food', labelFa: 'رستوران و کافه' },
  { id: 'services', labelEn: 'Services', labelFa: 'خدماتی و کلینیک' },
];

export interface FilterBarProps {
  selectedCategoryId: string;
  onSelectCategory: (categoryId: string) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  sortBy: SortOption;
  onSortChange: (sort: SortOption) => void;
  resultCount: number;
  totalCount?: number;
}

export const FilterBar: React.FC<FilterBarProps> = ({
  selectedCategoryId,
  onSelectCategory,
  searchQuery,
  onSearchChange,
  sortBy,
  onSortChange,
  resultCount,
  totalCount,
}) => {
  const { t, language } = useLanguage();

  return (
    <section className="bg-slate-900/70 backdrop-blur-md border border-slate-800/90 rounded-2xl p-4 sm:p-6 shadow-2xl space-y-5 transition-all">
      {/* Search & Sort Controls Row */}
      <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between">
        
        {/* Real-time Text Search Input with Search Icon & Clear Button ('✕') */}
        <div className="relative flex-1">
          <Search className="absolute left-3.5 rtl:right-3.5 rtl:left-auto top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder={t.filter.searchPlaceholder}
            aria-label="Search business templates"
            className="w-full pl-10 pr-10 rtl:pr-10 rtl:pl-10 py-2.5 rounded-xl bg-slate-950 border border-slate-800 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 text-sm text-slate-200 placeholder-slate-500 transition-all outline-none"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => onSearchChange('')}
              aria-label="Clear search input"
              className="absolute right-3 rtl:left-3 rtl:right-auto top-1/2 -translate-y-1/2 p-1 rounded-md text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Sort Dropdown */}
        <div className="flex items-center gap-2.5 self-end md:self-auto">
          <label
            htmlFor="filterbar-sort-by"
            className="text-xs font-medium text-slate-400 flex items-center gap-1.5 whitespace-nowrap select-none"
          >
            <ArrowUpDown className="w-3.5 h-3.5 text-indigo-400" />
            {t.filter.sortByLabel}
          </label>
          <select
            id="filterbar-sort-by"
            value={sortBy}
            onChange={(e) => onSortChange(e.target.value as SortOption)}
            aria-label="Sort templates"
            className="bg-slate-950 border border-slate-800 text-slate-200 text-xs sm:text-sm rounded-xl px-3 py-2.5 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 outline-none transition-all cursor-pointer"
          >
            <option value="popular">{t.filter.sortPopular}</option>
            <option value="rating">{t.filter.sortRating}</option>
            <option value="newest">{t.filter.sortNewest}</option>
          </select>
        </div>
      </div>

      {/* Category Chips / Pills with Mobile Smooth Horizontal Scroll */}
      <div className="flex items-center gap-2 overflow-x-auto no-scrollbar scroll-smooth pb-1 pt-0.5">
        <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider mr-1 rtl:ml-1 hidden sm:inline-flex items-center gap-1 shrink-0 select-none">
          <Filter className="w-3 h-3 text-slate-500" />
          {t.filter.nicheLabel}
        </span>
        {CATEGORY_DEFINITIONS.map((category) => {
          const isActive = selectedCategoryId === category.id;
          const label = language === 'fa' ? category.labelFa : category.labelEn;

          return (
            <button
              key={category.id}
              type="button"
              onClick={() => onSelectCategory(category.id)}
              aria-pressed={isActive}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium whitespace-nowrap transition-all duration-200 cursor-pointer shrink-0 ${
                isActive
                  ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30 scale-[1.02]'
                  : 'bg-slate-800/70 text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-700/50'
              }`}
            >
              {label}
            </button>
          );
        })}
      </div>

      {/* Result Counter & Active Filter Reset */}
      <div className="flex items-center justify-between text-xs text-slate-400 pt-2 border-t border-slate-800/60">
        <span className="font-medium">
          {t.filter.showing} <strong className="text-slate-100 font-bold">{resultCount}</strong>{' '}
          {resultCount === 1 ? t.filter.templateSingular : t.filter.templatePlural}
          {totalCount !== undefined && totalCount !== resultCount && (
            <span className="text-slate-500">
              {' '}
              ({t.filter.filteredFrom} {totalCount})
            </span>
          )}
        </span>

        {(searchQuery || selectedCategoryId !== 'all') && (
          <button
            type="button"
            onClick={() => {
              onSearchChange('');
              onSelectCategory('all');
            }}
            className="text-indigo-400 hover:text-indigo-300 underline font-medium cursor-pointer transition-colors"
          >
            {t.filter.resetFilters}
          </button>
        )}
      </div>
    </section>
  );
};

export default FilterBar;
