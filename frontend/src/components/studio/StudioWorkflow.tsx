import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { useNavigation } from '../../context/NavigationContext';
import { Search, MonitorCheck, Rocket, ArrowUpRight, ArrowRight } from 'lucide-react';

export const StudioWorkflow: React.FC = () => {
  const { language, direction } = useLanguage();
  const { navigate } = useNavigation();

  const steps = [
    {
      step: '01',
      title: language === 'fa' ? '۱. انتخاب و فیلتر قالب' : '1. Browse & Select',
      subtitle: language === 'fa' ? 'قالب متناسب با کسب‌وکارتان را پیدا کنید' : 'Find your exact industry match',
      desc:
        language === 'fa'
          ? 'آرشیو قالب‌های تجاری را برای فروشگاه‌ها، نرم‌افزارهای ابری (SaaS)، آژانس‌های تبلیغاتی، کلینیک‌ها و املاک بررسی و بهترین چیدمان را انتخاب کنید.'
          : 'Browse dozens of business niches—E-commerce, SaaS, Agency, Healthcare, Real Estate, and Food—curated for maximum conversion and credibility.',
      icon: Search,
    },
    {
      step: '02',
      title: language === 'fa' ? '۲. بررسی دمو و تست واکنش‌گرایی' : '2. Test Live Previews',
      subtitle: language === 'fa' ? 'پیش‌نمایش در موبایل، تبلت و دسکتاپ' : 'Real-time multi-viewport testing',
      desc:
        language === 'fa'
          ? 'پیش از هر تصمیمی، عملکرد واقعی و تعاملی قالب را در حالت‌های موبایل، تبلت و مانیتور با سوئیچر رزولوشن اختصاصی امتحان کنید.'
          : 'Test full interactive demos directly inside our live modal previewer across Desktop, Tablet (768px), and Mobile (375px) viewports before deciding.',
      icon: MonitorCheck,
    },
    {
      step: '03',
      title: language === 'fa' ? '۳. دانلود سورس‌کد و لانچ در روز اول' : '3. Customize & Deploy',
      subtitle: language === 'fa' ? 'بدون اشتراک ماهیانه با مالکیت کامل' : 'Deploy on Day One with zero lock-in',
      desc:
        language === 'fa'
          ? 'سورس‌کد کامل، ماژولار و تمیز React 19 + Tailwind CSS را همراه با فایل‌های فیگما دریافت نموده و با یک کلیک روی هاست یا سرور دلخواه مستقر سازید.'
          : 'Download complete unminified source code with Figma design assets. Swap in your brand copy and deploy with one click to Vercel, Netlify, or custom VPS.',
      icon: Rocket,
    },
  ];

  return (
    <section id="how-it-works" className="py-24 sm:py-36 px-4 sm:px-6 lg:px-8 bg-slate-950 border-t border-white/5 relative scroll-mt-20">
      <div className="max-w-6xl mx-auto space-y-16">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-white/10">
          <div className="max-w-2xl space-y-3">
            <span className="text-xs font-mono text-indigo-400 uppercase tracking-widest">
              {language === 'fa' ? 'فرآیند خرید و راه‌اندازی // ۳ گام آسان' : 'HOW IT WORKS // THREE SIMPLE STEPS'}
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
              {language === 'fa' ? 'چگونه قالب مناسب خود را انتخاب و راه‌اندازی کنید؟' : 'How Customers Choose & Launch Templates.'}
            </h2>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              {language === 'fa'
                ? 'از مشاهده و تست دمو تا راه‌اندازی رسمی وب‌سایت تجاری شما، همه چیز ساده، سریع و بدون سردرگمی طراحی شده است.'
                : 'A seamless, transparent experience engineered to get your company live on the web in hours with absolute confidence.'}
            </p>
          </div>

          <button
            type="button"
            onClick={() => navigate('/templates')}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 transition-all shadow-md shadow-indigo-600/25 self-start md:self-auto cursor-pointer"
          >
            <span>{language === 'fa' ? 'شروع کاوش قالب‌ها' : 'Start Browsing Templates'}</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {steps.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.step}
                className="relative p-8 rounded-3xl bg-slate-900/40 border border-white/5 space-y-6 flex flex-col justify-between hover:border-white/15 transition-all duration-300 hover:shadow-xl"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-3xl font-black text-slate-700">
                      {item.step}
                    </span>
                    <div className="w-11 h-11 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <h3 className="text-lg sm:text-xl font-bold text-white">
                      {item.title}
                    </h3>
                    <p className="text-xs font-medium text-indigo-400">
                      {item.subtitle}
                    </p>
                  </div>

                  <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/5 flex items-center justify-between text-indigo-400 text-xs font-semibold">
                  <span>READY TO LAUNCH</span>
                  <ArrowRight className={`w-4 h-4 ${direction === 'rtl' ? 'rotate-180' : ''}`} />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default StudioWorkflow;
