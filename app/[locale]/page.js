import Link from 'next/link';

export default function Home({ params }) {
  const locale = params?.slug?.[0] || 'en';

  const content = {
    en: {
      hero: {
        title: "Freelance Web Developer Specialized in Gulf-Focused Digital Solutions",
        subtitle: "Fast, mobile-first, culturally-aware web applications designed for Gulf businesses",
        viewWork: "View My Work",
        contactMe: "Contact Me"
      },
      services: {
        title: "Professional Services",
        items: [
          {
            title: "Property Technology Solutions",
            description: "We deliver intuitive platforms for real estate businesses, featuring financial transparency, interactive virtual tours, and multi-calendar support to streamline client engagement and sales conversion.",
            link: "#property-tech-case",
            linkText: "View Case Study"
          },
          {
            title: "Business Automation Systems",
            description: "Centralize customer interactions across messaging apps and email with AI-assisted dashboards, reducing response times while maintaining context-aware, professional communication.",
            link: "#business-automation-case",
            linkText: "View Case Study"
          },
          {
            title: "Logistics & Delivery Platforms",
            description: "Optimize last-mile operations with driver-focused dashboards, real-time tracking, offline capabilities, and analytics, improving efficiency and minimizing operational errors.",
            link: "#logistics-case",
            linkText: "View Case Study"
          },
          {
            title: "Operational Dashboards",
            description: "Empower service businesses with data-driven dashboards for scheduling, payments, client tracking, and multilingual support—allowing managers to make informed decisions quickly and confidently.",
            link: "#dashboard-case",
            linkText: "View Case Study"
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
        subtitle: "تطبيقات ويب سريعة وملائمة للجوال، مصممة خصيصًا لشركات الخليج",
        viewWork: "شاهد أعمالي",
        contactMe: "اتصل بي"
      },
      services: {
        title: "خدمات احترافية",
        items: [
          {
            title: "حلول تقنية العقارات",
            description: "نوفر منصات سهلة الاستخدام لشركات العقارات، مع شفافية مالية كاملة، جولات افتراضية تفاعلية، ودعم متعدد للتقويمات لتسهيل التعامل مع العملاء وزيادة المبيعات.",
            link: "#property-tech-case",
            linkText: "عرض دراسة الحالة"
          },
          {
            title: "أنظمة أتمتة الأعمال",
            description: "جمع كل تفاعلات العملاء من تطبيقات المراسلة والبريد الإلكتروني في لوحة واحدة مدعومة بالذكاء الاصطناعي، لتقليل وقت الاستجابة مع الحفاظ على التواصل الاحترافي والسياقي.",
            link: "#business-automation-case",
            linkText: "عرض دراسة الحالة"
          },
          {
            title: "منصات الخدمات اللوجستية والتوصيل",
            description: "تحسين عمليات الميل الأخير عبر لوحات تحكم موجهة للسائقين، تتبع لحظي، دعم العمل دون اتصال، وتحليلات دقيقة لتقليل الأخطاء وزيادة الكفاءة.",
            link: "#logistics-case",
            linkText: "عرض دراسة الحالة"
          },
          {
            title: "لوحات التحكم التشغيلية",
            description: "تمكين الأعمال الخدمية بلوحات تحكم قائمة على البيانات للجدولة، المدفوعات، تتبع العملاء، ودعم متعدد اللغات، مما يتيح للمديرين اتخاذ قرارات سريعة وواعية.",
            link: "#dashboard-case",
            linkText: "عرض دراسة الحالة"
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
          <Link href={`/${locale}`} className="text-primary font-semibold">{t.nav.home}</Link>
          <Link href={`/${locale}/services`} className="text-text hover:text-primary">{t.nav.services}</Link>
          <Link href={`/${locale}/portfolio`} className="text-text hover:text-primary">{t.nav.portfolio}</Link>
          <Link href={`/${locale}/about`} className="text-text hover:text-primary">{t.nav.about}</Link>
          <Link href={`/${locale}/contact`} className="text-text hover:text-primary">{t.nav.contact}</Link>
        </nav>
      </header>

      {/* Hero */}
      <section className="py-20 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6">{t.hero.title}</h1>
          <p className="text-xl md:text-2xl text-text mb-8 max-w-3xl mx-auto">{t.hero.subtitle}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
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

      {/* Services */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12">{t.services.title}</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {t.services.items.map((service, index) => (
              <div key={index} className="text-center p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow bg-gray-50">
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
