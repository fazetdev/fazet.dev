import Link from 'next/link';

const content = {
  en: {
    hero: {
      title: "Portfolio – Selected Projects",
      subtitle: "Projects centered for Gulf-focused businesses"
    },
    projects: [
      {
        title: "Bayt Elite – Property Technology",
        description: "Custom PropTech platform with payment calculators, 360° virtual tours, and Hijri/Gregorian date integration.",
        features: [
          "Dynamic Payment Calculator",
          "Transparent Cost Breakdown",
          "Hijri & Gregorian Dates",
          "Prayer Times & Qibla Finder",
          "360° Tours & Walkthroughs",
          "Dual-Path Contact Form & WhatsApp"
        ],
        github: "#",
        demo: "#",
        category: "Property Technology",
        tagline: "Closing off-plan property deals with financial transparency and cultural trust."
      },
      {
        title: "Tawasul AI – Customer Service Automation",
        description: "AI-powered hub for WhatsApp, Instagram & Email inquiries with unified dashboard and canned responses.",
        features: [
          "Unified Inbox Dashboard",
          "Simulated AI Reply Generation",
          "Canned Responses Library",
          "Customer History Panel",
          "Conversation Tagging"
        ],
        github: "#",
        demo: "#",
        category: "SaaS & Business Automation",
        tagline: "Centralizes inquiries and cuts response time by 70%."
      },
      {
        title: "Zimam Delivery – Logistics Platform",
        description: "Driver-centric app with offline-capable maps, daily earnings tracker, and community tips for GCC delivery routes.",
        features: [
          "Offline-Capable Pin System",
          "Daily Earnings Tracker",
          "Community Notes",
          "Ultra-Mobile-First UI"
        ],
        github: "#",
        demo: "#",
        category: "Logistics Tech",
        tagline: "Solving GCC last-mile delivery chaos with driver-centric tools."
      },
      {
        title: "Al-Multaqa – Business Management Dashboard",
        description: "CRM-lite dashboard for salons, clinics, and service businesses with scheduling and analytics.",
        features: [
          "Visual Appointment Scheduler",
          "Client & Payment Tracker",
          "Business Analytics",
          "Full Bilingual Support"
        ],
        github: "#",
        demo: "#",
        category: "B2B Software",
        tagline: "Automates scheduling, payments, and customer management efficiently."
      }
    ]
  },
  ar: {
    hero: {
      title: "أعمالي – المشاريع المختارة",
      subtitle: "مشاريع موجهة للشركات في السوق الخليجي"
    },
    projects: [
      {
        title: "بيت إيليت – منصة تقنية العقارات",
        description: "منصة PropTech مخصصة مع حاسبات الدفع، جولات 360° افتراضية، وتكامل تواريخ هجري/ميلادي.",
        features: [
          "حاسبة دفع ديناميكية",
          "تفصيل تكاليف شفاف",
          "تواريخ هجري وميلادي",
          "مواقيت الصلاة وبوصلة القبلة",
          "جولات 360° ومشاهد فيديو",
          "نموذج اتصال + واتساب بنقرة واحدة"
        ],
        github: "#",
        demo: "#",
        category: "تقنية العقارات",
        tagline: "إغلاق صفقات العقارات المخطط لها بشفافية مالية وثقة ثقافية."
      },
      {
        title: "تواصل AI – أتمتة خدمة العملاء",
        description: "لوحة مركزية لإدارة استفسارات واتساب، إنستغرام والبريد الإلكتروني مع ردود جاهزة.",
        features: [
          "لوحة صندوق وارد موحد",
          "توليد ردود ذكاء اصطناعي تجريبية",
          "مكتبة الردود الجاهزة",
          "لوحة تاريخ العملاء",
          "تصنيف المحادثات"
        ],
        github: "#",
        demo: "#",
        category: "SaaS وأتمتة الأعمال",
        tagline: "مركز استفسارات موحد يقلل وقت الاستجابة بنسبة 70%."
      },
      {
        title: "زِمَام دليفري – منصة الخدمات اللوجستية",
        description: "تطبيق للسائقين مع خرائط قابلة للعمل أوفلاين، متتبع أرباح يومية ونصائح للمواقع.",
        features: [
          "نظام تحديد المواقع أوفلاين",
          "متتبع أرباح يومية",
          "ملاحظات المجتمع",
          "واجهة مستخدم مريحة للجوال"
        ],
        github: "#",
        demo: "#",
        category: "تقنية الخدمات اللوجستية",
        tagline: "حل فوضى التوصيل الميل الأخير في الخليج بأدوات للسائقين."
      },
      {
        title: "الملتقى – لوحة إدارة الأعمال",
        description: "لوحة إدارة CRM-lite للصالونات والعيادات مع الجدولة والتحليلات.",
        features: [
          "جدول مواعيد بصري",
          "متتبع العملاء والمدفوعات",
          "تحليلات الأعمال",
          "دعم ثنائي اللغة كامل"
        ],
        github: "#",
        demo: "#",
        category: "برمجيات B2B",
        tagline: "أتمتة الجدولة والمدفوعات وإدارة العملاء بكفاءة."
      }
    ]
  }
};

export default function Portfolio({ params }) {
  const locale = params?.slug?.[0] || 'en';
  const t = content[locale] || content.en;
  const isRTL = locale === 'ar';

  return (
    <div className={`min-h-screen bg-background ${isRTL ? 'rtl' : 'ltr'}`}>
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
          <Link href={`/${locale}`} className="text-text hover:text-primary">{locale === 'ar' ? 'الرئيسية' : 'Home'}</Link>
          <Link href={`/${locale}/portfolio`} className="text-primary font-semibold">{locale === 'ar' ? 'الأعمال' : 'Portfolio'}</Link>
          <Link href={`/${locale}/about`} className="text-text hover:text-primary">{locale === 'ar' ? 'عني' : 'About'}</Link>
          <Link href={`/${locale}/contact`} className="text-text hover:text-primary">{locale === 'ar' ? 'اتصل' : 'Contact'}</Link>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">{t.hero.title}</h1>
          <p className="text-xl md:text-2xl text-text mb-12 max-w-3xl mx-auto">{t.hero.subtitle}</p>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {t.projects.map((project, index) => (
              <div key={index} className="p-6 border border-gray-200 rounded-2xl shadow-lg hover:shadow-2xl transition-all bg-white">
                <h2 className="text-2xl font-bold text-primary mb-2">{project.title}</h2>
                <p className="text-text mb-4">{project.description}</p>
                <ul className={`mb-4 list-disc pl-5 ${isRTL ? 'rtl:text-right' : ''}`}>
                  {project.features.map((feat, i) => (
                    <li key={i} className="text-text mb-1">{feat}</li>
                  ))}
                </ul>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link href={project.github} className="bg-accent text-white px-4 py-2 rounded-lg font-semibold hover:bg-accent/90 transition-colors text-center">{locale === 'ar' ? 'مشروع GitHub' : 'GitHub'}</Link>
                  <Link href={project.demo} className="bg-primary text-white px-4 py-2 rounded-lg font-semibold hover:bg-primary/90 transition-colors text-center">{locale === 'ar' ? 'عرض مباشر' : 'Live Demo'}</Link>
                </div>
                <p className="mt-4 text-sm italic text-gray-500">{project.tagline}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
