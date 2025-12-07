'use client';

import Link from 'next/link';

export default function Home({ params }) {
  const locale = params?.slug?.[0] || 'en';
  const oppositeLocale = locale === 'en' ? 'ar' : 'en';

  const content = {
    en: {
      hero: {
        title: "Freelance Web Developer Specialized in Gulf-Focused Digital Solutions",
        subtitle: "Building fast, mobile-first, and culturally-aware web applications for businesses in Saudi Arabia, UAE, and Qatar",
        viewWork: "View My Work",
        contactMe: "Contact Me",
        experience: "3+ years experience • Gulf market specialist"
      },
    },
    ar: {
      hero: {
        title: "مطور ويب مستقل متخصص في الحلول الرقمية الموجهة للخليج",
        subtitle: "نبني تطبيقات ويب سريعة وملائمة للجوال ومراعية للثقافة للشركات في السعودية والإمارات وقطر",
        viewWork: "شاهد أعمالي",
        contactMe: "اتصل بي",
        experience: "+٣ سنوات خبرة • متخصص في سوق الخليج"
      },
    }
  };

  const t = content[locale] || content.en;

  const getTogglePath = () => {
    if (typeof window === 'undefined') return `/${oppositeLocale}`;
    const path = window.location.pathname.split('/').slice(2).join('/');
    return `/${oppositeLocale}/${path}`;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white sticky top-0 z-40 border-b border-gray-200">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-4">
          <Link href={`/${locale}`} className="text-xl font-bold text-primary">
            Faruk Bashir Aminu
          </Link>

          {/* Language Toggle */}
          <Link
            href={getTogglePath()}
            className="px-2 py-1 rounded border border-primary text-primary hover:bg-primary hover:text-white transition"
          >
            {oppositeLocale === 'en' ? 'EN' : 'AR'}
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <main className="text-center py-24 px-4">
        <div className="max-w-5xl mx-auto">
          <p className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-8">
            <span className={`w-2 h-2 bg-primary rounded-full animate-pulse ${locale === 'ar' ? 'ml-2' : 'mr-2'}`}></span>
            {t.hero.experience}
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{t.hero.title}</h1>
          <p className="text-lg md:text-xl text-gray-600 mb-12">{t.hero.subtitle}</p>

          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link
              href={`/${locale}/portfolio`}
              className="bg-primary text-white px-10 py-4 rounded-xl font-semibold hover:bg-primary-dark transition shadow-lg"
            >
              {t.hero.viewWork}
            </Link>
            <Link
              href={`/${locale}/contact`}
              className="border-2 border-primary text-primary px-10 py-4 rounded-xl font-semibold hover:bg-primary hover:text-white transition shadow-lg"
            >
              {t.hero.contactMe}
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}