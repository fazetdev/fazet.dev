"use client";

import Link from "next/link";

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
        github: "https://github.com/fazetdev/bayt-elite.git",
        demo: "https://bayt-elite.vercel.app/",
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
        github: "https://github.com/fazetdev/tawasul-ai.git",
        demo: "https://tawasul-ai.vercel.app/",
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
        github: "https://github.com/fazetdev/zimam-delivery.git",
        demo: "https://zimam-delivery.vercel.app/",
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
        github: "https://github.com/fazetdev/almultaqla.git",
        demo: "https://al-multaqla.vercel.app/",
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
        github: "https://github.com/fazetdev/bayt-elite.git",
        demo: "https://bayt-elite.vercel.app/",
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
        github: "https://github.com/fazetdev/tawasul-ai.git",
        demo: "https://tawasul-ai.vercel.app/",
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
        github: "https://github.com/fazetdev/zimam-delivery.git",
        demo: "https://zimam-delivery.vercel.app/",
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
        github: "https://github.com/fazetdev/almultaqla.git",
        demo: "https://al-multaqla.vercel.app/",
        category: "برمجيات B2B",
        tagline: "أتمتة الجدولة والمدفوعات وإدارة العملاء بكفاءة."
      }
    ]
  }
};

export default function Portfolio({ params }) {
  const locale = params?.slug?.[0] || "en";
  const t = content[locale] || content.en;
  const isRTL = locale === "ar";

  return (
    <div className={`min-h-screen bg-gradient-to-b from-gray-50 to-white ${isRTL ? "rtl" : "ltr"}`}>
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-4">{t.hero.title}</h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-16">{t.hero.subtitle}</p>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-10">
            {t.projects.map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl p-8 shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-200 flex flex-col justify-between"
              >
                <div>
                  <h2 className="text-2xl font-bold text-primary mb-3">{project.title}</h2>
                  <p className="text-gray-700 mb-4">{project.description}</p>
                  <div className={`flex flex-wrap gap-2 mb-4 ${isRTL ? "rtl:text-right" : ""}`}>
                    {project.features.map((feat, i) => (
                      <span
                        key={i}
                        className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {feat}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-3 mt-4">
                  <Link
                    href={project.demo}
                    className="bg-gradient-to-r from-primary to-primary-dark text-white px-5 py-2 rounded-xl font-semibold hover:opacity-90 transition-all text-center"
                  >
                    {locale === "ar" ? "عرض مباشر" : "Live Demo"}
                  </Link>
                  <Link
                    href={project.github}
                    className="bg-gradient-to-r from-accent to-accent-dark text-white px-5 py-2 rounded-xl font-semibold hover:opacity-90 transition-all text-center"
                  >
                    {locale === "ar" ? "مشروع GitHub" : "GitHub"}
                  </Link>
                </div>
                <p className="text-sm italic text-gray-500 mt-4">{project.tagline}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
