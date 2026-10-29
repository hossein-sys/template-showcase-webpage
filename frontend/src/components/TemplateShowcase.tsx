import React, { useState, useMemo } from 'react';
import type { Template, SortOption } from '../types/template';
import { MOCK_TEMPLATES } from '../data/mockTemplates';
import Header from './header/Header';
import HeroSection from './main/HeroSection';
import FilterBar from './main/FilterBar';
import TemplateGrid from './main/TemplateGrid';
import PreviewModal from './main/PreviewModal';
import TrustFeatures from './main/TrustFeatures';
import FAQSection from './main/FAQSection';
import Footer from './footer/Footer';
import { useLanguage } from '../context/LanguageContext';
import { ArrowRight, MessageSquareCode } from 'lucide-react';

export type { Template, SortOption };
export { MOCK_TEMPLATES };

export const TemplateShowcase: React.FC = () => {
  const { t, language, direction } = useLanguage();

  // Active filter/search/sort state
  const [selectedCategoryId, setSelectedCategoryId] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [sortBy, setSortBy] = useState<SortOption>('popular');

  // Preview modal state
  const [previewTemplate, setPreviewTemplate] = useState<Template | null>(null);

  // Dynamically compute filtered and sorted templates with bilingual search
  const filteredTemplates = useMemo(() => {
    return MOCK_TEMPLATES.filter((tpl) => {
      let matchesCategory = false;
      if (selectedCategoryId === 'all') {
        matchesCategory = true;
      } else if (selectedCategoryId === 'ecommerce') {
        matchesCategory = tpl.category.toLowerCase().includes('commerce') || tpl.categoryFa?.includes('فروشگاه') || false;
      } else if (selectedCategoryId === 'corporate') {
        matchesCategory = tpl.category.toLowerCase().includes('corporate') || tpl.categoryFa?.includes('شرکتی') || false;
      } else if (selectedCategoryId === 'saas') {
        matchesCategory = tpl.category.toLowerCase().includes('saas') || tpl.categoryFa?.includes('نرم‌افزار') || false;
      } else if (selectedCategoryId === 'restaurant') {
        matchesCategory = tpl.category.toLowerCase().includes('restaurant') || tpl.categoryFa?.includes('رستوران') || false;
      } else if (selectedCategoryId === 'services') {
        matchesCategory = tpl.category.toLowerCase().includes('services') || tpl.categoryFa?.includes('خدمات') || false;
      }

      const query = searchQuery.trim().toLowerCase();
      const matchesSearch =
        !query ||
        tpl.title.toLowerCase().includes(query) ||
        (tpl.titleFa && tpl.titleFa.toLowerCase().includes(query)) ||
        tpl.description.toLowerCase().includes(query) ||
        (tpl.descriptionFa && tpl.descriptionFa.toLowerCase().includes(query)) ||
        tpl.tags.some((tag) => tag.toLowerCase().includes(query)) ||
        (tpl.tagsFa && tpl.tagsFa.some((tag) => tag.toLowerCase().includes(query)));

      return matchesCategory && matchesSearch;
    }).sort((a, b) => {
      if (sortBy === 'popular') {
        return (b.isPopular ? 1 : 0) - (a.isPopular ? 1 : 0) || b.rating - a.rating;
      }
      if (sortBy === 'rating') {
        return b.rating - a.rating;
      }
      if (sortBy === 'newest') {
        const dateA = a.createdAt ? new Date(a.createdAt).getTime() : 0;
        const dateB = b.createdAt ? new Date(b.createdAt).getTime() : 0;
        return dateB - dateA;
      }
      return 0;
    });
  }, [selectedCategoryId, searchQuery, sortBy]);

  const scrollToSection = (sectionId: string) => {
    const el = document.querySelector(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleResetFilters = () => {
    setSelectedCategoryId('all');
    setSearchQuery('');
  };

  const handleChooseTemplate = (template: Template) => {
    const title = language === 'fa' && template.titleFa ? template.titleFa : template.title;
    alert(
      language === 'fa'
        ? `قالب "${title}" با موفقیت انتخاب شد! در حال انتقال به ویزارد استقرار.`
        : `Success: "${title}" selected! Proceeding to setup wizard.`
    );
  };

  const handleLiveDemo = (template: Template) => {
    setPreviewTemplate(template);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 antialiased selection:bg-indigo-500 selection:text-white flex flex-col">
      {/* 1. Sticky Navigation Header */}
      <Header
        onNavigate={scrollToSection}
        onGetStartedClick={() => scrollToSection('#browse')}
        onContactSalesClick={() => scrollToSection('#custom-request')}
      />

      {/* 2. Conversion-Focused Hero Section */}
      <HeroSection
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        onSearchSubmit={setSearchQuery}
        totalTemplatesCount={50}
      />

      {/* 3. Main Templates Showcase Section */}
      <main id="browse" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 space-y-10 scroll-mt-24 flex-1">
        
        {/* Dedicated FilterBar */}
        <FilterBar
          selectedCategoryId={selectedCategoryId}
          onSelectCategory={setSelectedCategoryId}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          sortBy={sortBy}
          onSortChange={setSortBy}
          resultCount={filteredTemplates.length}
          totalCount={MOCK_TEMPLATES.length}
        />

        {/* Responsive Template Grid with Cards & Empty State */}
        <div id="templates-grid">
          <TemplateGrid
            templates={filteredTemplates}
            onResetFilters={handleResetFilters}
            onChooseTemplate={handleChooseTemplate}
            onLiveDemo={handleLiveDemo}
          />
        </div>

        {/* Trust Features (Speed, Clean Code, SEO) */}
        <div id="features" className="scroll-mt-24">
          <TrustFeatures />
        </div>

        {/* Pricing Anchor Section */}
        <section id="pricing" className="mt-16 rounded-3xl bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800 p-8 sm:p-12 text-center space-y-6 scroll-mt-24">
          <div className="max-w-2xl mx-auto space-y-3">
            <span className="text-xs uppercase tracking-widest text-indigo-400 font-bold">
              {t.pricing.badge}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              {t.pricing.heading}
            </h2>
            <p className="text-slate-400 text-sm">
              {t.pricing.description}
            </p>
          </div>
          <div className="inline-flex flex-wrap items-center justify-center gap-4 text-xs font-semibold text-slate-300 pt-2">
            <span className="bg-slate-800/80 px-4 py-2 rounded-xl border border-slate-700">{t.pricing.p1}</span>
            <span className="bg-slate-800/80 px-4 py-2 rounded-xl border border-slate-700">{t.pricing.p2}</span>
            <span className="bg-slate-800/80 px-4 py-2 rounded-xl border border-slate-700">{t.pricing.p3}</span>
          </div>
        </section>

        {/* Custom Request Section */}
        <section id="custom-request" className="rounded-3xl bg-indigo-950/30 border border-indigo-500/20 p-6 sm:p-10 flex flex-col lg:flex-row items-center justify-between gap-8 scroll-mt-24 overflow-hidden">
          <div className="flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left rtl:sm:text-right">
            <div className="relative w-28 h-28 sm:w-36 sm:h-36 rounded-2xl overflow-hidden shrink-0 border border-indigo-500/30 shadow-xl shadow-indigo-950/50">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80"
                alt="Bespoke Architecture Team"
                loading="lazy"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-indigo-950/80 via-transparent to-transparent" />
            </div>

            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 text-indigo-400 text-xs font-bold uppercase tracking-wider">
                <MessageSquareCode className="w-4 h-4" />
                {t.custom.badge}
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                {t.custom.heading}
              </h3>
              <p className="text-slate-400 text-xs sm:text-sm max-w-xl">
                {t.custom.description}
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={() =>
              alert(
                language === 'fa'
                  ? 'از پیام شما متشکریم! فرم ثبت مشخصات پروژه باز خواهد شد.'
                  : 'Thank you for your interest! A custom request modal or email will open here.'
              )
            }
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs sm:text-sm shadow-xl shadow-indigo-600/30 transition-transform active:scale-95 whitespace-nowrap cursor-pointer shrink-0"
          >
            <span>{t.custom.button}</span>
            <ArrowRight className={`w-4 h-4 ${direction === 'rtl' ? 'rotate-180' : ''}`} />
          </button>
        </section>

        {/* FAQ Accordion Section */}
        <div id="faq" className="scroll-mt-24">
          <FAQSection />
        </div>

      </main>

      {/* Comprehensive 4-Column Footer */}
      <Footer />

      {/* Interactive Preview Modal */}
      <PreviewModal
        template={previewTemplate}
        isOpen={Boolean(previewTemplate)}
        onClose={() => setPreviewTemplate(null)}
        onUseTemplate={handleChooseTemplate}
      />
    </div>
  );
};

export default TemplateShowcase;
