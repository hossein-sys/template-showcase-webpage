import React, { useState, useEffect } from 'react';
import type { Template } from '../../types/template';
import { useLanguage } from '../../context/LanguageContext';
import {
  Monitor,
  Tablet,
  Smartphone,
  ExternalLink,
  X,
  Sparkles,
  ShieldCheck,
  Loader2,
} from 'lucide-react';

export type ViewportMode = 'desktop' | 'tablet' | 'mobile';

export interface PreviewModalProps {
  template: Template | null;
  isOpen: boolean;
  onClose: () => void;
  onUseTemplate?: (template: Template) => void;
}

export const PreviewModal: React.FC<PreviewModalProps> = ({
  template,
  isOpen,
  onClose,
  onUseTemplate,
}) => {
  const [viewport, setViewport] = useState<ViewportMode>('desktop');
  const [isLoading, setIsLoading] = useState(true);
  const { t, language } = useLanguage();

  // Close modal on ESC key press & lock body scroll when modal is open
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen, onClose]);

  // Reset loading state when template changes
  useEffect(() => {
    if (template) {
      setIsLoading(true);
      setViewport('desktop');
    }
  }, [template]);

  if (!isOpen || !template) return null;

  // Viewport width styling
  const getViewportWidthClass = () => {
    switch (viewport) {
      case 'mobile':
        return 'w-[375px] max-w-[95%]';
      case 'tablet':
        return 'w-[768px] max-w-[95%]';
      case 'desktop':
      default:
        return 'w-full max-w-7xl';
    }
  };

  const handleUseTemplate = () => {
    if (onUseTemplate) {
      onUseTemplate(template);
    } else {
      const title = language === 'fa' && template.titleFa ? template.titleFa : template.title;
      alert(`Success: "${title}" selected! Proceeding to project deployment.`);
    }
  };

  const displayTitle = language === 'fa' && template.titleFa ? template.titleFa : template.title;
  const displayCategory =
    language === 'fa' && template.categoryFa ? template.categoryFa : template.category;
  const displayPrice =
    typeof template.price === 'number'
      ? `$${template.price}`
      : language === 'fa'
      ? t.card.freeBadge
      : template.price;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="preview-modal-title"
      className="fixed inset-0 z-50 flex flex-col bg-slate-950/85 backdrop-blur-md animate-fadeIn"
    >
      {/* 1. Accessible Backdrop Overlay with Click-Outside Trigger */}
      <div
        className="absolute inset-0 -z-10"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* 2. Top Bar inside Modal */}
      <header className="w-full bg-slate-900 border-b border-slate-800 px-4 sm:px-6 py-3 flex items-center justify-between gap-3 shrink-0 shadow-lg select-none">
        {/* Left: Template Title & Category */}
        <div className="flex items-center gap-3 min-w-0">
          <div className="w-8 h-8 rounded-lg bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400 font-bold text-xs shrink-0">
            {displayTitle.charAt(0)}
          </div>
          <div className="min-w-0 text-left rtl:text-right">
            <h2
              id="preview-modal-title"
              className="text-sm sm:text-base font-bold text-white truncate leading-tight"
            >
              {displayTitle}
            </h2>
            <div className="flex items-center gap-2 text-xs text-slate-400">
              <span className="text-indigo-400 font-medium">{displayCategory}</span>
              <span>•</span>
              <span className="text-emerald-400 font-semibold">{displayPrice}</span>
            </div>
          </div>
        </div>

        {/* Center: Responsive Viewport Switcher Buttons */}
        <div className="hidden md:flex items-center gap-1 bg-slate-950/80 p-1 rounded-xl border border-slate-800">
          <button
            type="button"
            onClick={() => setViewport('desktop')}
            aria-label={t.modal.desktop}
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
              viewport === 'desktop'
                ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                : 'text-slate-400 hover:text-white hover:bg-slate-800'
            }`}
          >
            <Monitor className="w-3.5 h-3.5" />
            <span>{t.modal.desktop}</span>
          </button>

          <button
            type="button"
            onClick={() => setViewport('tablet')}
            aria-label={t.modal.tablet}
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
              viewport === 'tablet'
                ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                : 'text-slate-400 hover:text-white hover:bg-slate-800'
            }`}
          >
            <Tablet className="w-3.5 h-3.5" />
            <span>{t.modal.tablet}</span>
          </button>

          <button
            type="button"
            onClick={() => setViewport('mobile')}
            aria-label={t.modal.mobile}
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
              viewport === 'mobile'
                ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                : 'text-slate-400 hover:text-white hover:bg-slate-800'
            }`}
          >
            <Smartphone className="w-3.5 h-3.5" />
            <span>{t.modal.mobile}</span>
          </button>
        </div>

        {/* Right: Actions ("Open in New Tab", "Use This Template", Close Button) */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          {/* Open in New Tab Link */}
          <a
            href={template.liveDemoUrl}
            target="_blank"
            rel="noopener noreferrer"
            title={t.modal.newTab}
            className="p-2 sm:px-3 sm:py-2 rounded-xl text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-700/80 transition-colors inline-flex items-center gap-1.5 text-xs font-medium cursor-pointer"
          >
            <ExternalLink className="w-4 h-4" />
            <span className="hidden sm:inline">{t.modal.newTab}</span>
          </a>

          {/* Primary CTA: "Use This Template" */}
          <button
            type="button"
            onClick={handleUseTemplate}
            className="inline-flex items-center gap-1.5 px-3.5 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 shadow-md shadow-indigo-600/25 transition-all hover:scale-105 active:scale-95 cursor-pointer"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t.modal.useTemplate}</span>
          </button>

          {/* Close ('✕') Button */}
          <button
            type="button"
            onClick={onClose}
            aria-label={t.modal.close}
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </header>

      {/* Mobile Viewport Switcher Bar (under top bar on small screens) */}
      <div className="flex md:hidden items-center justify-center gap-2 bg-slate-900/90 border-b border-slate-800 py-2 px-3">
        {(['desktop', 'tablet', 'mobile'] as ViewportMode[]).map((mode) => (
          <button
            key={mode}
            type="button"
            onClick={() => setViewport(mode)}
            className={`px-3 py-1 rounded-lg text-xs font-medium capitalize transition-colors ${
              viewport === mode
                ? 'bg-indigo-600 text-white'
                : 'text-slate-400 hover:text-white bg-slate-800'
            }`}
          >
            {t.modal[mode]}
          </button>
        ))}
      </div>

      {/* 3. Content Area: Framed iframe with smooth transition */}
      <div className="flex-1 overflow-auto p-3 sm:p-6 flex items-center justify-center bg-slate-950/50">
        <div
          className={`h-full bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl flex flex-col overflow-hidden transition-all duration-300 ease-in-out relative ${getViewportWidthClass()}`}
        >
          {/* Simulated Browser Address/Status Bar */}
          <div className="bg-slate-950/90 border-b border-slate-800 px-4 py-2 flex items-center justify-between text-xs text-slate-400 shrink-0">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 inline-block" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
              <div className="ml-3 rtl:mr-3 rtl:ml-0 px-3 py-0.5 rounded-md bg-slate-900 border border-slate-800 text-[11px] text-slate-400 font-mono flex items-center gap-1.5" dir="ltr">
                <ShieldCheck className="w-3 h-3 text-emerald-400" />
                <span className="truncate max-w-xs">{template.liveDemoUrl}</span>
              </div>
            </div>

            <span className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold">
              {viewport === 'desktop' ? '100% Fluid' : viewport === 'tablet' ? '768px' : '375px'}
            </span>
          </div>

          {/* Iframe Viewport Container */}
          <div className="relative flex-1 w-full h-full bg-slate-950 overflow-hidden">
            {isLoading && (
              <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-slate-950 gap-3 text-slate-400">
                <Loader2 className="w-8 h-8 text-indigo-500 animate-spin" />
                <p className="text-xs">{t.modal.loading}</p>
              </div>
            )}

            <iframe
              key={`${template.id}-${viewport}`}
              src={template.liveDemoUrl}
              title={`${displayTitle} Live Preview`}
              sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
              loading="lazy"
              onLoad={() => setIsLoading(false)}
              className="w-full h-full border-0 bg-white"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreviewModal;
