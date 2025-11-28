import Link from 'next/link';

export default function Portfolio({ params }) {
  const locale = params?.slug?.[0] || 'en';
  
  const content = {
    en: {
      title: "Portfolio",
      subtitle: "My recent projects for Gulf clients",
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
          <Link href={`/${locale}/portfolio`} className="text-primary font-semibold">Portfolio</Link>
          <Link href={`/${locale}/about`} className="text-text hover:text-primary">{t.nav.about}</Link>
          <Link href={`/${locale}/contact`} className="text-text hover:text-primary">{t.nav.contact}</Link>
        </nav>
      </header>

      <section className="py-16 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">{t.title}</h1>
        <p className="text-xl text-text">{t.subtitle}</p>
      </section>
    </div>
  );
}
