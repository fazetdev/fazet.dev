'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Home({ params }) {
  const locale = params?.locale || params?.slug?.[0] || 'en';
  const pathname = usePathname();

  const content = {
    en: {
      hero: {
        title: "Freelance Web Developer Specialized in ",
        accent: "Gulf-Focused Digital Solutions",
        subtitle: "Building high-performance, mobile-first, and culturally-aware web applications for businesses in Saudi Arabia, UAE, and Qatar.",
        viewWork: "View Portfolio", 
        contactMe: "Start a Project", 
        experience: "3+ Years Experience • Regional Expert" 
      },
    },
    ar: {
      hero: {
        title: "مطور ويب مستقل متخصص في ",
        accent: "الحلول الرقمية الموجهة للخليج",
        subtitle: "نبني تطبيقات ويب عالية الأداء وملائمة للجوال ومراعية للثقافة للشركات في السعودية والإمارات وقطر.",
        viewWork: "شاهد الأعمال",
        contactMe: "ابدأ مشروعًا",
        experience: "+٣ سنوات خبرة • خبير إقليمي"
      },
    }
  };

  const t = content[locale] || content.en;
  const oppositeLocale = locale === 'en' ? 'ar' : 'en';

  const getTogglePath = () => {
    if (!pathname) return `/${oppositeLocale}`;
    const pathParts = pathname.split('/').filter(Boolean);
    if (pathParts.length > 0 && (pathParts[0] === 'en' || pathParts[0] === 'ar')) {
      pathParts[0] = oppositeLocale;
      return `/${pathParts.join('/')}`;
    }
    return `/${oppositeLocale}`;
  };

  // --- GROK'S UI/UX: Enforce RTL for Arabic ---
  return (
    <div 
      className={`min-h-screen bg-white ${locale === 'ar' ? 'font-arabic' : 'font-english'}`}
      dir={locale === 'ar' ? 'rtl' : 'ltr'}
    >
      {/* Header */}
      <header className="bg-white sticky top-0 z-40 border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-4">
          <Link href={`/${locale}`} className="text-xl font-extrabold text-primary hover:text-accent transition">
            Fazet.dev
          </Link>
          
          {/* Language Toggle */}
          <div className="flex items-center gap-3 text-sm">
            <Link
              href={getTogglePath()} 
              className="px-3 py-1 bg-gray-50 rounded-lg font-semibold text-gray-700 hover:bg-gray-100 transition"
            >
              {oppositeLocale.toUpperCase()}
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="py-20 sm:py-32 px-4">
        <div className={`max-w-5xl mx-auto ${locale === 'ar' ? 'text-right' : 'text-left'}`}>
          
          {/* Experience Banner (Fixed margin for tailwindcss-rtl) */}
          <p className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-8">
            {/* The margin is now explicitly set using mr-2 and reversed in RTL */}
            <span className={`w-2 h-2 bg-accent rounded-full animate-pulse mr-2 rtl:ml-2 rtl:mr-0`}></span>
            {t.hero.experience}
          </p>

          {/* Hero Title */}
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 text-primary leading-tight">
            {t.hero.title}
            <span className="text-accent block sm:inline-block mt-1 sm:mt-0">{t.hero.accent}</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-700 mb-12 max-w-4xl">
            {t.hero.subtitle}
          </p>

          {/* CTA Buttons */}
          <div className={`flex flex-col sm:flex-row gap-5 ${locale === 'ar' ? 'sm:justify-end' : 'sm:justify-start'}`}>
            <Link
              href={`/${locale}/portfolio`}
              className="bg-primary text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-primary-dark transition shadow-lg transform hover:scale-[1.02]"
            >
              {t.hero.viewWork}
            </Link>
            <Link
              href={`/${locale}/contact`}
              className="border-2 border-accent text-accent px-10 py-4 rounded-xl font-bold text-lg hover:bg-accent hover:text-white transition shadow-lg transform hover:scale-[1.02]"
            >
              {t.hero.contactMe}
            </Link>
          </div>
        </div>
      </main>

      {/* Placeholder for Trust Signals */}
      <section className="max-w-7xl mx-auto px-4 py-16 text-center border-t border-gray-100">
        <h2 className="text-2xl font-bold text-gray-400">Trusted by modern businesses in the Gulf region.</h2>
      </section>

    </div>
  );
}
