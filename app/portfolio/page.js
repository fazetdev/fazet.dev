import Link from 'next/link';

export default function Portfolio({ params }) {
  const locale = params?.locale || 'en';
  
  const content = {
    en: {
      title: "Portfolio",
      subtitle: "My recent projects for Gulf clients",
      featured: {
        title: "Featured Project: Bayt Elite",
        problem: "Gulf real estate developers struggle with clunky, non-cultural payment calculators.",
        solution: "A premium PropTech platform with a dynamic payment calculator, Hijri dates, and Qibla finder.",
        demo: "Live Demo"
      },
      nav: {
        home: "Home",
        services: "Services", 
        about: "About",
        contact: "Contact"
      }
    },
    ar: {
      title: "الأعمال",
      subtitle: "مشاريعي الحديثة لعملاء الخليج",
      featured: {
        title: "المشروع المميز: بيت النخبة",
        problem: "يعاني مطورو العقارات في الخليج من حاسبات الدفع المعقدة وغير المراعية للثقافة.",
        solution: "منصة تقنية عقارات متميزة مع حاسبة ديناميكية للدفع والتواريخ الهجرية وباحث عن القبلة.",
        demo: "عرض حي"
      },
      nav: {
        home: "الرئيسية",
        services: "الخدمات",
        about: "عني", 
        contact: "اتصل"
      }
    }
  };

  const t = content[locale] || content.en;

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <Link href={`/${locale}`} className="text-xl font-bold text-primary">Faruk Aminu</Link>
          <div className="flex space-x-4 rtl:space-x-reverse">
            <a href="/en/portfolio" className="text-text hover:text-primary">EN</a>
            <span className="text-gray-300">|</span>
            <a href="/ar/portfolio" className="text-text hover:text-primary">AR</a>
          </div>
        </div>
        <nav className="max-w-7xl mx-auto px-4 py-2 flex space-x-6 rtl:space-x-reverse text-sm">
          <Link href={`/${locale}`} className="text-text hover:text-primary">{t.nav.home}</Link>
          <Link href={`/${locale}/services`} className="text-text hover:text-primary">{t.nav.services}</Link>
          <Link href={`/${locale}/portfolio`} className="text-primary font-semibold">{locale === 'ar' ? 'الأعمال' : 'Portfolio'}</Link>
          <Link href={`/${locale}/about`} className="text-text hover:text-primary">{t.nav.about}</Link>
          <Link href={`/${locale}/contact`} className="text-text hover:text-primary">{t.nav.contact}</Link>
        </nav>
      </header>

      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">{t.title}</h1>
            <p className="text-xl text-text">{t.subtitle}</p>
          </div>
          
          {/* Featured Project */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
            <h2 className="text-2xl font-bold text-primary mb-6">{t.featured.title}</h2>
            <div className="bg-gray-200 h-64 rounded-lg mb-6 flex items-center justify-center">
              <span className="text-text">Project Screenshot Placeholder</span>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-primary mb-2">The Problem</h3>
                <p className="text-text">{t.featured.problem}</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-primary mb-2">The Solution</h3>
                <p className="text-text">{t.featured.solution}</p>
              </div>
            </div>
            <div className="text-center mt-6">
              <button className="bg-accent text-white px-6 py-3 rounded-lg font-semibold hover:bg-yellow-600 transition-colors">
                {t.featured.demo}
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export async function generateStaticParams() {
  return [
    { locale: 'en' },
    { locale: 'ar' }
  ];
}
