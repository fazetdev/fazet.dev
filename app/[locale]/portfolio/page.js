import Link from 'next/link';

const content = {
  en: {
    hero: {
      title: "Portfolio – Selected Projects",
      subtitle: "Projects-centered for gulf",
      viewWork: "View All Work",
      contactMe: "Contact Me"
    },
    projects: [
      {
        title: "Property Tech",
        description: "Custom platforms for real estate developers with payment calculators & virtual tours.",
        link: "/portfolio/property-tech",
        linkText: "View Case Study"
      },
      {
        title: "Business Automation",
        description: "AI-powered customer service hubs to manage inquiries from WhatsApp, Instagram & email.",
        link: "/portfolio/business-automation",
        linkText: "View Case Study"
      },
      {
        title: "Logistics Tech",
        description: "Driver dashboards & delivery management tools for last-mile logistics companies.",
        link: "/portfolio/logistics-tech",
        linkText: "View Case Study"
      },
      {
        title: "Business Dashboards",
        description: "Custom admin dashboards for salons, clinics, and service businesses to manage operations.",
        link: "/portfolio/business-dashboards",
        linkText: "View Case Study"
      }
    ],
    nav: {
      home: "Home",
      portfolio: "Portfolio",
      about: "About",
      contact: "Contact"
    }
  },
  ar: {
    hero: {
      title: "أعمالي – المشاريع المختارة",
      subtitle: "عرض للمشاريع التي بنيتها للشركات الموجهة للسوق الخليجي",
      viewWork: "عرض جميع الأعمال",
      contactMe: "اتصل بي"
    },
    projects: [
      {
        title: "تقنية العقارات",
        description: "منصات مخصصة لمطوري العقارات مع حاسبات الدفع والجولات الافتراضية.",
        link: "/portfolio/property-tech",
        linkText: "عرض دراسة الحالة"
      },
      {
        title: "أتمتة الأعمال",
        description: "مراكز خدمة عملاء مدعومة بالذكاء الاصطناعي لإدارة الاستفسارات من واتساب وإنستغرام والبريد الإلكتروني.",
        link: "/portfolio/business-automation",
        linkText: "عرض دراسة الحالة"
      },
      {
        title: "تقنية الخدمات اللوجستية",
        description: "لوحات تحكم السائقين وأدوات إدارة التوصيل لشركات الخدمات اللوجستية من الميل الأخير.",
        link: "/portfolio/logistics-tech",
        linkText: "عرض دراسة الحالة"
      },
      {
        title: "لوحات تحكم الأعمال",
        description: "لوحات تحكم إدارية مخصصة لصالونات وعيادات وأعمال الخدمات لإدارة العمليات.",
        link: "/portfolio/business-dashboards",
        linkText: "عرض دراسة الحالة"
      }
    ],
    nav: {
      home: "الرئيسية",
      portfolio: "الأعمال",
      about: "عني",
      contact: "اتصل"
    }
  }
};

export default function Portfolio({ params }) {
  const locale = params?.slug?.[0] || 'en';
  const t = content[locale] || content.en;

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <Link href={`/${locale}`} className="text-xl font-bold text-primary">Faruk Aminu</Link>
          <div className="flex space-x-4 rtl:space-x-reverse">
            <Link href="/en" className="text-text hover:text-primary">EN</Link>
            <span className="text-gray-300">|</span>
            <Link href="/ar" className="text-text hover:text-primary">AR</Link>
          </div>
        </div>
        <nav className="max-w-7xl mx-auto px-4 py-2 flex space-x-6 rtl:space-x-reverse text-sm">
          <Link href={`/${locale}`} className="text-text hover:text-primary">{t.nav.home}</Link>
          <Link href={`/${locale}/portfolio`} className="text-primary font-semibold">{t.nav.portfolio}</Link>
          <Link href={`/${locale}/about`} className="text-text hover:text-primary">{t.nav.about}</Link>
          <Link href={`/${locale}/contact`} className="text-text hover:text-primary">{t.nav.contact}</Link>
        </nav>
      </header>

      {/* Hero */}
      <section className="py-20 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">{t.hero.title}</h1>
          <p className="text-xl md:text-2xl text-text mb-8 max-w-3xl mx-auto">{t.hero.subtitle}</p>

          <div className="grid md:grid-cols-2 gap-8">
            {t.projects.map((project, index) => (
              <div key={index} className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow text-left">
                <h2 className="text-2xl font-bold text-primary mb-2">{project.title}</h2>
                <p className="text-text mb-4">{project.description}</p>
                <Link href={project.link} className="text-accent font-semibold hover:underline">{project.linkText}</Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
