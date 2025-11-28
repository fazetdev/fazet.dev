import Link from 'next/link';

export default function Home({ params }) {
  const locale = params?.slug?.[0] || 'en';
  
  const content = {
    en: {
      hero: {
        title: "Freelance Web Developer Specialized in Gulf-Focused Digital Solutions",
        subtitle: "Building fast, mobile-first, and culturally-aware web applications for businesses in Saudi Arabia, UAE, and Qatar",
        viewWork: "View My Work",
        contactMe: "Contact Me"
      },
      nav: {
        home: "Home",
        services: "Services",
        portfolio: "Portfolio",
        about: "About",
        contact: "Contact"
      }
    },
    ar: {
      hero: {
        title: "مطور ويب مستقل متخصص في الحلول الرقمية الموجهة للخليج",
        subtitle: "نبني تطبيقات ويب سريعة وملائمة للجوال ومراعية للثقافة للشركات في السعودية والإمارات وقطر",
        viewWork: "شاهد أعمالي",
        contactMe: "اتصل بي"
      },
      nav: {
        home: "الرئيسية",
        services: "الخدمات",
        portfolio: "الأعمال",
        about: "عني",
        contact: "اتصل"
      }
    }
  };

  const t = content[locale] || content.en;

  return (
    <div className="min-h-screen bg-background">
      {/* Header with Navigation */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <Link href={`/${locale}`} className="text-xl font-bold text-primary">Faruk Aminu</Link>
          <div className="flex space-x-4 rtl:space-x-reverse">
            <a href="/en" className="text-text hover:text-primary">EN</a>
            <span className="text-gray-300">|</span>
            <a href="/ar" className="text-text hover:text-primary">AR</a>
          </div>
        </div>
        <nav className="max-w-7xl mx-auto px-4 py-2 flex space-x-6 rtl:space-x-reverse text-sm">
          <Link href={`/${locale}`} className="text-primary font-semibold">{t.nav.home}</Link>
          <Link href={`/${locale}/services`} className="text-text hover:text-primary">{t.nav.services}</Link>
          <Link href={`/${locale}/portfolio`} className="text-text hover:text-primary">{t.nav.portfolio}</Link>
          <Link href={`/${locale}/about`} className="text-text hover:text-primary">{t.nav.about}</Link>
          <Link href={`/${locale}/contact`} className="text-text hover:text-primary">{t.nav.contact}</Link>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6">
            {t.hero.title}
          </h1>
          <p className="text-xl md:text-2xl text-text mb-8 max-w-3xl mx-auto">
            {t.hero.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href={`/${locale}/portfolio`} 
              className="bg-accent text-white px-8 py-3 rounded-lg font-semibold hover:bg-yellow-600 transition-colors"
            >
              {t.hero.viewWork}
            </Link>
            <Link 
              href={`/${locale}/contact`} 
              className="border-2 border-primary text-primary px-8 py-3 rounded-lg font-semibold hover:bg-primary hover:text-white transition-colors"
            >
              {t.hero.contactMe}
            </Link>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12">My Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <h3 className="text-xl font-bold text-primary mb-3">PropTech Platforms</h3>
              <p className="text-text mb-4">Custom real estate solutions for Gulf market</p>
              <Link href={`/${locale}/services`} className="text-accent font-semibold hover:underline">Learn more →</Link>
            </div>
            <div className="text-center p-6">
              <h3 className="text-xl font-bold text-primary mb-3">Bilingual Websites</h3>
              <p className="text-text mb-4">Arabic & English sites with RTL support</p>
              <Link href={`/${locale}/services`} className="text-accent font-semibold hover:underline">Learn more →</Link>
            </div>
            <div className="text-center p-6">
              <h3 className="text-xl font-bold text-primary mb-3">E-commerce</h3>
              <p className="text-text mb-4">Stores with Gulf payment integration</p>
              <Link href={`/${locale}/services`} className="text-accent font-semibold hover:underline">Learn more →</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
