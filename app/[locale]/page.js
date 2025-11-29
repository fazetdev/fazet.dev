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
      services: {
        title: "My Services",
        items: [
          {
            title: "Bayt Elite – Property Tech",
            description: "Custom platforms for real estate developers with payment calculators & virtual tours.",
            link: "#bayt-elite-case-study",
            linkText: "View the Bayt Elite Case Study"
          },
          {
            title: "Tawasul AI – Business Automation",
            description: "AI-powered customer service hubs to manage inquiries from WhatsApp, Instagram & email.",
            link: "#tawasul-ai-case-study",
            linkText: "View the Tawasul AI Case Study"
          },
          {
            title: "Zimam Delivery – Logistics Tech",
            description: "Driver dashboards & delivery management tools for last-mile logistics companies.",
            link: "#zimam-delivery-case-study",
            linkText: "View the Zimam Delivery Case Study"
          },
          {
            title: "Al-Multaqa – Business Dashboards",
            description: "Custom admin dashboards for salons, clinics, and service businesses to manage operations.",
            link: "#al-multaqa-case-study",
            linkText: "View the Al-Multaqa Case Study"
          }
        ]
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
      services: {
        title: "خدماتي",
        items: [
          {
            title: "بيت إيليت – تقنية العقارات",
            description: "منصات مخصصة لمطوري العقارات مع حاسبات الدفع والجولات الافتراضية.",
            link: "#bayt-elite-case-study",
            linkText: "عرض دراسة حالة بيت إيليت"
          },
          {
            title: "تواصل AI – أتمتة الأعمال",
            description: "مراكز خدمة عملاء مدعومة بالذكاء الاصطناعي لإدارة الاستفسارات من واتساب وإنستغرام والبريد الإلكتروني.",
            link: "#tawasul-ai-case-study",
            linkText: "عرض دراسة حالة تواصل AI"
          },
          {
            title: "زِمَام دليفري – تقنية الخدمات اللوجستية",
            description: "لوحات تحكم السائقين وأدوات إدارة التوصيل لشركات الخدمات اللوجستية من الميل الأخير.",
            link: "#zimam-delivery-case-study",
            linkText: "عرض دراسة حالة زِمَام دليفري"
          },
          {
            title: "الملتقى – لوحات تحكم الأعمال",
            description: "لوحات تحكم إدارية مخصصة لصالونات وعيادات وأعمال الخدمات لإدارة العمليات.",
            link: "#al-multaqa-case-study",
            linkText: "عرض دراسة حالة الملتقى"
          }
        ]
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
            {/* FIXED: <a> → <Link> (no text changed) */}
            <Link href="/en" className="text-text hover:text-primary">EN</Link>
            <span className="text-gray-300">|</span>
            <Link href="/ar" className="text-text hover:text-primary">AR</Link>
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
            {/* FIXED: Added prefetch and kept text exactly */}
            <Link
              href={`/${locale}/portfolio`}
              prefetch={true}
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
          <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12">{t.services.title}</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {t.services.items.map((service, index) => (
              <div key={index} className="text-center p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold text-primary mb-3">{service.title}</h3>
                <p className="text-text mb-4">{service.description}</p>
                <Link
                  href={service.link}
                  className="text-accent font-semibold hover:underline inline-flex items-center"
                >
                  → {service.linkText}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
