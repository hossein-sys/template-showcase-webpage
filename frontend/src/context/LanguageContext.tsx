import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'en' | 'fa';
export type Direction = 'ltr' | 'rtl';

export interface Translations {
  nav: {
    browse: string;
    pricing: string;
    customRequest: string;
    contactSales: string;
    getStarted: string;
    features: string;
    faq: string;
  };
  hero: {
    badge: string;
    titleStart: string;
    titleHighlight: string;
    subtitle: string;
    searchPlaceholder: string;
    searchButton: string;
    popularLabel: string;
    trustResponsive: string;
    trustSeo: string;
    trustDeploy: string;
    trustCommercial: string;
    pillConversion: string;
    pillResponsive: string;
    pillLicense: string;
  };
  filter: {
    searchPlaceholder: string;
    sortByLabel: string;
    sortPopular: string;
    sortRating: string;
    sortNewest: string;
    nicheLabel: string;
    showing: string;
    templateSingular: string;
    templatePlural: string;
    filteredFrom: string;
    resetFilters: string;
    noResultsTitle: string;
    noResultsText: string;
  };
  categories: {
    all: string;
    ecommerce: string;
    corporate: string;
    saas: string;
    restaurant: string;
    services: string;
  };
  card: {
    popularBadge: string;
    freeBadge: string;
    liveDemo: string;
    chooseTemplate: string;
    livePreview: string;
  };
  features: {
    badge: string;
    heading: string;
    subheading: string;
    speedTitle: string;
    speedBadge: string;
    speedDesc: string;
    speedB1: string;
    speedB2: string;
    speedB3: string;
    codeTitle: string;
    codeBadge: string;
    codeDesc: string;
    codeB1: string;
    codeB2: string;
    codeB3: string;
    seoTitle: string;
    seoBadge: string;
    seoDesc: string;
    seoB1: string;
    seoB2: string;
    seoB3: string;
    statRating: string;
    statRatingDesc: string;
    statWebsites: string;
    statWebsitesDesc: string;
    statSpeed: string;
    statSpeedDesc: string;
  };
  pricing: {
    badge: string;
    heading: string;
    description: string;
    p1: string;
    p2: string;
    p3: string;
  };
  custom: {
    badge: string;
    heading: string;
    description: string;
    button: string;
  };
  faq: {
    badge: string;
    heading: string;
    subheading: string;
    supportNote: string;
    supportLink: string;
    items: Array<{ question: string; answer: string }>;
  };
  modal: {
    desktop: string;
    tablet: string;
    mobile: string;
    newTab: string;
    useTemplate: string;
    close: string;
    loading: string;
  };
  footer: {
    description: string;
    nichesTitle: string;
    resourcesTitle: string;
    stayInLoopTitle: string;
    newsletterDesc: string;
    emailPlaceholder: string;
    subscribedMsg: string;
    noSpamMsg: string;
    rightsReserved: string;
    privacy: string;
    terms: string;
    cookies: string;
    security: string;
  };
}

export const translations: Record<Language, Translations> = {
  en: {
    nav: {
      browse: 'Browse',
      pricing: 'Pricing',
      customRequest: 'Custom Request',
      contactSales: 'Contact Sales',
      getStarted: 'Get Started',
      features: 'Features',
      faq: 'FAQ',
    },
    hero: {
      badge: '50+ Production-Ready Business Templates',
      titleStart: 'Launch Your High-Converting Business Website in',
      titleHighlight: 'Hours, Not Weeks',
      subtitle:
        'Skip months of custom development. Deploy conversion-engineered, battle-tested templates built for modern agencies, SaaS founders, e-commerce stores, and clinics.',
      searchPlaceholder: 'Search by industry, e.g. SaaS, Clinic, Restaurant, Real Estate...',
      searchButton: 'Explore Templates',
      popularLabel: 'Popular:',
      trustResponsive: 'Responsive Designs',
      trustSeo: 'SEO-Optimized',
      trustDeploy: 'One-Click Deploy',
      trustCommercial: 'Commercial License',
      pillConversion: '⚡ Conversion-Engineered',
      pillResponsive: '💎 Fully Responsive',
      pillLicense: '🛡️ Commercial Rights Included',
    },
    filter: {
      searchPlaceholder: 'Search templates by title, niche, or tech stack...',
      sortByLabel: 'Sort by:',
      sortPopular: 'Most Popular',
      sortRating: 'Highest Rated',
      sortNewest: 'Newest',
      nicheLabel: 'Niche:',
      showing: 'Showing',
      templateSingular: 'template',
      templatePlural: 'templates',
      filteredFrom: 'filtered from',
      resetFilters: 'Reset all filters',
      noResultsTitle: 'No matching templates found',
      noResultsText:
        "We couldn't find any templates matching your active keyword search or category filter. Try broadening your criteria or reset filters.",
    },
    categories: {
      all: 'All Templates',
      ecommerce: 'E-commerce',
      corporate: 'Corporate & Agency',
      saas: 'SaaS & Tech',
      restaurant: 'Restaurant & Food',
      services: 'Services',
    },
    card: {
      popularBadge: 'Popular',
      freeBadge: 'Free',
      liveDemo: 'Live Demo',
      chooseTemplate: 'Choose Template',
      livePreview: 'Live Preview',
    },
    features: {
      badge: 'Engineering Standards',
      heading: 'Built for Peak Conversion & Technical Longevity',
      subheading:
        'Every template in the ARCHETYPE library passes rigorous audits for performance, accessibility, clean architecture, and conversion psychology.',
      speedTitle: 'Lightning-Fast Speed',
      speedBadge: '99+ PageSpeed',
      speedDesc:
        'Engineered with zero-bloat modern React and optimized asset delivery. Achieve sub-second page loads and instant interactions out of the box.',
      speedB1: 'Core Web Vitals Optimized',
      speedB2: 'Zero Layout Shift (CLS: 0)',
      speedB3: 'Compressed Modern WebP/AVIF',
      codeTitle: 'Clean, Maintainable Code',
      codeBadge: 'Strict TypeScript',
      codeDesc:
        'Architected with production-grade TypeScript, Tailwind CSS v4, and modular UI components. Customize layouts and features effortlessly in minutes.',
      codeB1: 'Strict Type Safety & Zero Any',
      codeB2: 'Component-Driven Architecture',
      codeB3: 'Figma File Tokens Included',
      seoTitle: 'SEO & Mobile-First Excellence',
      seoBadge: 'Omni-Channel Ready',
      seoDesc:
        'Fluid across smartphones, tablets, laptops, and ultra-wide monitors. Pre-configured OpenGraph metadata, schema markup, and accessible semantic HTML.',
      seoB1: 'Fluid Viewport Breakpoints',
      seoB2: 'Automated Semantic SEO Tags',
      seoB3: 'WCAG AA Accessibility Compliant',
      statRating: '4.95 / 5.0',
      statRatingDesc: 'Average founder satisfaction rating',
      statWebsites: '2,400+',
      statWebsitesDesc: 'Business websites powered by Archetype',
      statSpeed: '3.4x Faster',
      statSpeedDesc: 'Time-to-market compared to scratch development',
    },
    pricing: {
      badge: 'Transparent Licensing',
      heading: 'Simple, Lifetime Commercial Access',
      description:
        'Every template comes with lifetime updates, free Figma design files, and complete commercial deployment rights for unlimited client projects.',
      p1: '✓ No recurring subscriptions',
      p2: '✓ 14-day money-back guarantee',
      p3: '✓ Full source code ownership',
    },
    custom: {
      badge: 'Tailored Architecture',
      heading: 'Need a bespoke custom business template?',
      description:
        'Our engineering team can build customized modules, custom integrations, or specialized design systems for your business within 5 business days.',
      button: 'Request Custom Build',
    },
    faq: {
      badge: 'Clear Answers',
      heading: 'Frequently Asked Questions',
      subheading: 'Everything founders, agencies, and developers need to know about Archetype templates.',
      supportNote: 'Have a custom question not covered here?',
      supportLink: 'Speak directly with an engineer',
      items: [
        {
          question: 'Can I customize the code and design system?',
          answer:
            'Yes, absolutely. You receive complete, unminified source code written in clean TypeScript and Tailwind CSS v4. You have full freedom to modify styling, add database models, connect custom backends, or rearrange UI components with no restrictions.',
        },
        {
          question: 'Do you provide hosting, or can I host on my own infrastructure?',
          answer:
            'Every template is 100% host-agnostic. You can deploy with one click to Vercel, Netlify, Cloudflare Pages, AWS Amplify, Render, or any custom Docker/VPS server environment. Detailed step-by-step deployment instructions are included in the template README.',
        },
        {
          question: 'Can I request bespoke custom features or bespoke design?',
          answer:
            'Yes. If your business requires custom API integrations, localized checkout workflows, or specific interactive modules, our engineering studio provides tailored architecture packages with guaranteed 5-day delivery turnaround.',
        },
        {
          question: 'What commercial rights and licensing terms are included?',
          answer:
            'All purchases include our Unlimited Commercial License. You are permitted to launch unlimited client websites or commercial businesses without paying recurring royalties or attribution fees. The only restriction is reselling the template as a standalone raw code asset.',
        },
        {
          question: 'Are future React and Tailwind updates included for free?',
          answer:
            'Yes. Every template includes lifetime version updates. When major frameworks release breaking changes or new features (such as React 19 or Tailwind CSS updates), we maintain and push updated codebase releases to your dashboard free of charge.',
        },
        {
          question: 'What is your refund policy if the template does not fit my project?',
          answer:
            'We offer an unconditional 14-day money-back guarantee. If the template does not meet your technical expectations or project requirements, contact our support team and we will issue a full refund promptly.',
        },
      ],
    },
    modal: {
      desktop: 'Desktop',
      tablet: 'Tablet (768px)',
      mobile: 'Mobile (375px)',
      newTab: 'New Tab',
      useTemplate: 'Use This Template',
      close: 'Close',
      loading: 'Connecting to live preview environment...',
    },
    footer: {
      description:
        'The premier business template collective. High-converting, production-ready website architectures crafted with React, TypeScript, and Tailwind CSS.',
      nichesTitle: 'Template Niches',
      resourcesTitle: 'Resources & Support',
      stayInLoopTitle: 'Stay in the Loop',
      newsletterDesc: 'Get notified when new conversion-optimized business templates and free UI kits drop.',
      emailPlaceholder: 'Enter your email address',
      subscribedMsg: "You're subscribed! Check your inbox soon.",
      noSpamMsg: 'No spam ever. Unsubscribe anytime with 1 click.',
      rightsReserved: 'ARCHETYPE Template Studio. All rights reserved.',
      privacy: 'Privacy Policy',
      terms: 'Terms of Service',
      cookies: 'Cookie Policy',
      security: 'Security',
    },
  },
  fa: {
    nav: {
      browse: 'مشاهده قالب‌ها',
      pricing: 'تعرفه‌ها و لایسنس',
      customRequest: 'سفارش اختصاصی',
      contactSales: 'تماس با فروش',
      getStarted: 'شروع کنید',
      features: 'ویژگی‌ها',
      faq: 'سوالات متداول',
    },
    hero: {
      badge: 'بیش از ۵۰ قالب آماده تجاری و شرکتی',
      titleStart: 'راه‌اندازی وب‌سایت تجاری پربازده در',
      titleHighlight: 'چند ساعت، نه چند هفته',
      subtitle:
        'ماه‌ها زمان توسعه اختصاصی را ذخیره کنید. استقرار قالب‌های مدرن و تست‌شده مهندسی نرخ تبدیل برای آژانس‌ها، بنیان‌گذاران SaaS، فروشگاه‌ها و کلینیک‌ها.',
      searchPlaceholder: 'جستجو بر اساس حوزه کاری، مثلا SaaS، کلینیک، رستوران، املاک...',
      searchButton: 'کاوش قالب‌ها',
      popularLabel: 'محبوب:',
      trustResponsive: 'طراحی واکنش‌گرا',
      trustSeo: 'بهینه‌سازی سئو',
      trustDeploy: 'استقرار تک‌کلیکی',
      trustCommercial: 'مجوز تجاری کامل',
      pillConversion: '⚡ بهینه‌شده برای تبدیل',
      pillResponsive: '💎 کاملاً واکنش‌گرا',
      pillLicense: '🛡️ مالکیت کامل کدهای منبع',
    },
    filter: {
      searchPlaceholder: 'جستجوی قالب بر اساس عنوان، حوزه کاری یا فناوری...',
      sortByLabel: 'مرتب‌سازی:',
      sortPopular: 'محبوب‌ترین',
      sortRating: 'بالاترین امتیاز',
      sortNewest: 'جدیدترین',
      nicheLabel: 'دسته‌بندی:',
      showing: 'نمایش',
      templateSingular: 'قالب',
      templatePlural: 'قالب',
      filteredFrom: 'فیلتر شده از میان',
      resetFilters: 'تنظیم مجدد همه فیلترها',
      noResultsTitle: 'هیچ قالبی با این مشخصات یافت نشد',
      noResultsText:
        'هیچ قالبی منطبق با کلمه کلیدی یا دسته‌بندی انتخابی شما پیدا نشد. لطفاً معیار جستجو را تغییر دهید یا فیلترها را ریست کنید.',
    },
    categories: {
      all: 'همه قالب‌ها',
      ecommerce: 'فروشگاهی',
      corporate: 'شرکتی و آژانس',
      saas: 'نرم‌افزار و فناوری',
      restaurant: 'رستوران و کافه',
      services: 'خدماتی و کلینیک',
    },
    card: {
      popularBadge: 'ویژه و محبوب',
      freeBadge: 'رایگان',
      liveDemo: 'پیش‌نمایش زنده',
      chooseTemplate: 'انتخاب قالب',
      livePreview: 'مشاهده دمو',
    },
    features: {
      badge: 'استانداردهای مهندسی نرم‌افزار',
      heading: 'طراحی‌شده برای اوج نرخ تبدیل و ماندگاری فنی',
      subheading:
        'تمامی قالب‌های موجود در آرشیو آرک‌تایپ تست‌های سخت‌گیرانه عملکرد، دسترس‌پذیری، معماری تمیز و روانشناسی تبدیل کاربر را گذرانده‌اند.',
      speedTitle: 'سرعت لود فوق‌العاده',
      speedBadge: 'امتیاز +۹۹ پیج‌اسپید',
      speedDesc:
        'مهندسی‌شده با مدرن‌ترین فناوری‌های React بدون کد اضافی. دستیابی به لود زیر یک ثانیه و تعاملات سریع و آنی کاربر.',
      speedB1: 'بهینه‌سازی Core Web Vitals',
      speedB2: 'بدون پرش صفحه (CLS صفر)',
      speedB3: 'تصاویر فشرده نسل جدید WebP و AVIF',
      codeTitle: 'کد تمیز و قابل نگهداری',
      codeBadge: 'تایپ‌اسکریپت دقیق',
      codeDesc:
        'معماری ماژولار با TypeScript سخت‌گیرانه و Tailwind CSS v4. شخصی‌سازی آسان چیدمان و قابلیت‌ها در چند دقیقه.',
      codeB1: 'ایمنی ۱۰۰٪ تایپ‌ها بدون استفاده از any',
      codeB2: 'طراحی کامپوننت‌محور مقیاس‌پذیر',
      codeB3: 'شامل توکن‌های طراحی فیگما',
      seoTitle: 'سئو عالی و اولویت تلفن همراه',
      seoBadge: 'سازگار با همه دیوایس‌ها',
      seoDesc:
        'نمایش بی‌نقص در موبایل، تبلت، لپ‌تاپ و نمایشگرهای عریض. متاتگ‌های آماده OpenGraph، نشانه‌گذاری استاندارد و ساختار معنایی HTML.',
      seoB1: 'نقاط شکست استاندارد برای انواع صفحات',
      seoB2: 'برچسب‌های سئوی ساختاریافته خودکار',
      seoB3: 'سازگاری کامل با استانداردهای دسترس‌پذیری WCAG AA',
      statRating: '۴.۹۵ از ۵',
      statRatingDesc: 'میانگین رضایت بنیان‌گذاران و مدیران کسب‌وکار',
      statWebsites: '+۲,۴۰۰',
      statWebsitesDesc: 'وب‌سایت فعال راه‌اندازی‌شده با آرک‌تایپ',
      statSpeed: '۳.۴ برابر سریع‌تر',
      statSpeedDesc: 'صرفه‌جویی در زمان رسیدن به بازار نسبت به کدنویسی از صفر',
    },
    pricing: {
      badge: 'لایسنس شفاف و دائمی',
      heading: 'دسترسی تجاری مادام‌العمر بدون هزینه ماهانه',
      description:
        'هر قالب همراه با آپدیت‌های مادام‌العمر، فایل‌های طراحی Figma و مجوز استفاده نامحدود برای پروژه‌های تجاری و مشتریان ارائه می‌شود.',
      p1: '✓ بدون هزینه و اشتراک دوره‌ای',
      p2: '✓ ۱۴ روز ضمانت بی قید و شرط بازگشت وجه',
      p3: '✓ مالکیت ۱۰۰٪ کامل کدهای منبع',
    },
    custom: {
      badge: 'معماری و توسعه سفارشی',
      heading: 'آیا به یک قالب یا ماژول اختصاصی نیاز دارید؟',
      description:
        'تیم مهندسی ما ماژول‌های اختصاصی، یکپارچه‌سازی با درگاه‌های پرداخت، وب‌سرویس‌ها یا دیزاین سیستم‌های سفارشی شما را ظرف ۵ روز کاری تحویل می‌دهد.',
      button: 'درخواست سفارش ساخت سفارشی',
    },
    faq: {
      badge: 'پاسخ‌های شفاف',
      heading: 'پرسش‌های متداول',
      subheading: 'هر آنچه بنیان‌گذاران، آژانس‌ها و توسعه‌دهندگان باید درباره قالب‌های آرک‌تایپ بدانند.',
      supportNote: 'آیا سوال متفاوتی دارید که در اینجا ذکر نشده است؟',
      supportLink: 'گفتگوی مستقیم با مهندسان فنی',
      items: [
        {
          question: 'آیا می‌توانم کدهای منبع و سیستم طراحی را کاملاً ویرایش کنم؟',
          answer:
            'بله، ۱۰۰٪. شما کدهای کامل و خوانا را با TypeScript و Tailwind CSS نسخه ۴ دریافت می‌کنید. شما آزادی کامل دارید که ظاهر را تغییر دهید، پایگاه‌داده و بک‌اند متصل کنید، یا کامپوننت‌های جدید اضافه کنید.',
        },
        {
          question: 'آیا هاستینگ همراه قالب است یا می‌توانم روی سرور شخصی آپلود کنم؟',
          answer:
            'قالب‌ها به هیچ هاست خاصی وابسته نیستند. می‌توانید با یک کلیک روی سرورهای ابری، Vercel، Netlify، یا هر سرور لینوکس، هاست سی‌پنل، داکر یا VPS شخصی خود مستقر نمایید.',
        },
        {
          question: 'آیا امکان درخواست امکانات یا طراحی اختصاصی وجود دارد؟',
          answer:
            'بله. استودیوی توسعه ما خدمات سفارشی‌سازی شامل اتصال API، سیستم‌های چندزبانه و درگاه‌های پرداخت اختصاصی را با تحویل تضمینی ظرف ۵ روز کاری ارائه می‌دهد.',
        },
        {
          question: 'شرایط لایسنس و حقوق تجاری استفاده از قالب‌ها چیست؟',
          answer:
            'کلیه قالب‌ها دارای لایسنس تجاری نامحدود هستند. شما مجاز هستید بدون پرداخت حق امتیاز به تعداد نامحدود وب‌سایت برای مشتریان یا پروژه‌های تجاری خود بسازید. تنها محدودیت، بازفروش خام فایل‌های کد است.',
        },
        {
          question: 'آیا با انتشار نسخه‌های جدید React و Tailwind آپدیت دریافت می‌کنم؟',
          answer:
            'بله، تمامی خریداران از آپدیت‌های مادام‌العمر رایگان بهره‌مند می‌شوند. با انتشار نسخه‌های جدید، نسخه‌های به‌روزرسانی‌شده در پنل کاربری شما قرار می‌گیرد.',
        },
        {
          question: 'شرایط ضمانت بازگشت وجه در صورت عدم رضایت چگونه است؟',
          answer:
            'ما ضمانت بازگشت وجه ۱۴ روزه بدون قید و شرط ارائه می‌دهیم. در صورتی که قالب با نیازهای شما همخوانی نداشت، مبلغ پرداختی بدون کسر کارمزد مسترد خواهد شد.',
        },
      ],
    },
    modal: {
      desktop: 'رایانه (Desktop)',
      tablet: 'تبلت (768px)',
      mobile: 'موبایل (375px)',
      newTab: 'تب جدید',
      useTemplate: 'استفاده از این قالب',
      close: 'بستن',
      loading: 'در حال بارگذاری محیط پیش‌نمایش زنده...',
    },
    footer: {
      description:
        'مرجع برتر قالب‌های پیشرفته وب تجاری. معماری‌های پربازده و آماده استقرار با استفاده از React، TypeScript و Tailwind CSS.',
      nichesTitle: 'دسته‌بندی قالب‌ها',
      resourcesTitle: 'منابع و پشتیبانی',
      stayInLoopTitle: 'عضویت در خبرنامه',
      newsletterDesc: 'از انتشار قالب‌های تجاری جدید و فایل‌های UI رایگان قبل از دیگران مطلع شوید.',
      emailPlaceholder: 'ایمیل خود را وارد نمایید',
      subscribedMsg: 'عضویت شما با موفقیت ثبت شد!',
      noSpamMsg: 'بدون ایمیل تبلیغاتی. لغو عضویت در هر زمان تنها با ۱ کلیک.',
      rightsReserved: 'استودیو قالب‌های آرک‌تایپ. تمامی حقوق محفوظ است.',
      privacy: 'حریم خصوصی',
      terms: 'شرایط و ضوابط',
      cookies: 'قوانین کوکی',
      security: 'امنیت',
    },
  },
};

interface LanguageContextType {
  language: Language;
  direction: Direction;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('archetype_language');
      if (saved === 'en' || saved === 'fa') return saved;
    }
    return 'en';
  });

  const direction: Direction = language === 'fa' ? 'rtl' : 'ltr';

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    if (typeof window !== 'undefined') {
      localStorage.setItem('archetype_language', lang);
    }
  };

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'fa' : 'en');
  };

  useEffect(() => {
    document.documentElement.dir = direction;
    document.documentElement.lang = language;
    if (language === 'fa') {
      document.body.classList.add('font-persian');
    } else {
      document.body.classList.remove('font-persian');
    }
  }, [language, direction]);

  return (
    <LanguageContext.Provider
      value={{
        language,
        direction,
        setLanguage,
        toggleLanguage,
        t: translations[language],
      }}
    >
      <div dir={direction} className={direction === 'rtl' ? 'font-sans' : ''}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export default LanguageContext;
