'use client';

import Link from "next/link";
import { usePathname } from "next/navigation"; // Added for better header links

const content = {
  en: {
    hero: {
      title: "Specialized Portfolio – Gulf-Focused Solutions",
      subtitle: "Selected high-performance projects demonstrating regional expertise and technical excellence."
    },
    projects: [
      {
        title: "Bayt Elite – PropTech Platform",
        description: "Custom PropTech platform with payment calculators, 360° virtual tours, and critical Hijri/Gregorian date integration.",
        features: [
          "Hijri & Gregorian Dates",
          "Dynamic Payment Calculator",
          "360° Tours",
          "WhatsApp Integration"
        ],
        github: "https://github.com/fazetdev/bayt-elite.git",
        demo: "https://bayt-elite.vercel.app/",
        category: "Property Technology",
        tagline: "Closing off-plan property deals with financial transparency and cultural trust."
      },
      {
        title: "Tawasul AI – Customer Service Hub",
        description: "AI-powered hub for WhatsApp, Instagram & Email inquiries with a unified dashboard and canned responses.",
        features: [
          "Unified Inbox Dashboard",
          "AI Reply Generation",
          "Canned Responses Library",
          "Customer History Panel"
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
          "Offline Maps",
          "Daily Earnings Tracker",
          "Community Notes",
          "Ultra-Mobile-First"
        ],
        github: "https://github.com/fazetdev/zimam-delivery.git",
        demo: "https://zimam-delivery.vercel.app/",
        category: "Logistics Tech",
        tagline: "Solving GCC last-mile delivery chaos with driver-centric tools."
      },
      {
        title: "Al-Multaqa – Business Management Dashboard",
        description: "CRM-lite dashboard for salons, clinics, and service businesses with scheduling, analytics, and full bilingual support.",
        features: [
          "Visual Scheduler",
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
      title: "أعمالي المتخصصة – حلول موجهة للخليج",
      subtitle: "مشاريع مختارة عالية الأداء تثبت الخبرة الإقليمية والتميز التقني."
    },
    projects: [
      {
        title: "بيت إيليت – منصة تقنية العقارات",
        description: "منصة PropTech مخصصة مع حاسبات الدفع، جولات 360° افتراضية، وتكامل التواريخ الهجري/الميلادي.",
        features: [
          "تواريخ هجري وميلادي",
          "حاسبة دفع ديناميكية",
          "جولات 360°",
          "تكامل واتساب"
        ],
        github: "https://github.com/fazetdev/bayt-elite.git",
        demo: "https://bayt-elite.vercel.app/",
        category: "تقنية العقارات",
        tagline: "إغلاق صفقات العقارات المخطط لها بشفافية مالية وثقة ثقافية."
      },
      {
        title: "تواصل AI – مركز خدمة العملاء",
        description: "لوحة مركزية لإدارة استفسارات واتساب، إنستغرام والبريد الإلكتروني مع ردود جاهزة.",
        features: [
          "لوحة صندوق وارد موحد",
          "توليد ردود AI",
          "مكتبة الردود الجاهزة",
          "تاريخ العملاء"
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
          "خرائط أوفلاين",
          "متتبع أرباح يومية",
          "ملاحظات المجتمع",
          "واجهة للجوال"
        ],
        github: "https://github.com/fazetdev/zimam-delivery.git",
        demo: "https://zimam-delivery.vercel.app/",
        category: "تقنية الخدمات اللوجستية",
        tagline: "حل فوضى التوصيل الميل الأخير في الخليج بأدوات للسائقين."
      },
      {
        title: "الملتقى – لوحة إدارة الأعمال",
        description: "لوحة إدارة CRM-lite للصالونات والعيادات مع الجدولة والتحليلات ودعم ثنائي اللغة كامل.",
        features: [
          "جدول مواعيد بصري",
          "متتبع العملاء",
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
  const locale = params?.locale || params?.slug?.[0] || "en";
  const t = content[locale] || content.en;
  const isRTL = locale === "ar";

  // Placeholder for opposite locale path (needed for navigation)
  const pathname = usePathname();
  const oppositeLocale = locale === "en" ? "ar" : "en";
  const getOppositeLocalePath = () => {
    if (!pathname) return `/${oppositeLocale}/portfolio`;
    const pathParts = pathname.split('/').filter(part => part);
    if (pathParts.length > 0 && (pathParts[0] === 'en' || pathParts[0] === 'ar')) {
      pathParts[0] = oppositeLocale;
      return `/${pathParts.join('/')}`;
    } else {
      return `/${oppositeLocale}${pathname === '/' ? '' : pathname}`;
    }
  };


  return (
    <div className={`min-h-screen bg-gray-50 ${isRTL ? "font-arabic" : "font-sans"}`} dir={isRTL ? "rtl" : "ltr"}>
      {/* Header - Simple and branded */}
      <header className="bg-white/95 backdrop-blur-sm sticky top-0 z-40 border-b border-gray-200">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-4">
          <Link href={`/${locale}`} className="text-xl font-extrabold tracking-tight text-primary hover:text-accent transition">
            Fazet.dev
          </Link>
          <div className="flex items-center gap-3 text-sm">
            <Link 
              href={getOppositeLocalePath()}
              className="px-3 py-1 bg-gray-50 rounded-lg font-semibold text-gray-700 hover:bg-gray-100 transition"
            >
              {oppositeLocale.toUpperCase()}
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-4 leading-tight">{t.hero.title}</h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-16 max-w-4xl mx-auto">{t.hero.subtitle}</p>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-12">
            {t.projects.map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-200 flex flex-col justify-between overflow-hidden"
              >
                {/* 1. Image Placeholder (CRITICAL) */}
                <div className="w-full h-52 bg-gray-200 rounded-xl mb-6 overflow-hidden flex items-center justify-center border border-gray-300">
                  <span className="text-lg text-gray-500 font-semibold">{project.title} Screenshot</span>
                </div>

                {/* 2. Content */}
                <div>
                  <span className="inline-block text-sm font-semibold text-accent mb-2">{project.category}</span>
                  <h2 className="text-2xl font-bold text-primary mb-3">{project.title}</h2>

                  {/* Tagline (Highlight value proposition) */}
                  <p className="text-base italic text-gray-600 mb-4 font-medium border-b pb-4 border-dashed border-gray-100">{project.tagline}</p>

                  <p className="text-gray-700 mb-4">{project.description}</p>

                  {/* Feature Tags (Cleaned up) */}
                  <div className={`flex flex-wrap gap-2 mb-6 ${isRTL ? "justify-end" : "justify-start"}`}>
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

                {/* 3. CTAs - FIX APPLIED HERE */}
                <div className="mt-auto pt-4 border-t border-gray-100">
                    <div className="flex flex-col sm:flex-row gap-3">
                        <Link
                            href={project.demo}
                            target="_blank" // Added
                            rel="noopener noreferrer" // Added
                            className="flex-1 bg-primary text-white px-5 py-3 rounded-xl font-bold hover:bg-primary-dark transition-all text-center shadow-md hover:shadow-lg"
                        >
                            {locale === "ar" ? "عرض مباشر" : "Live Demo"}
                        </Link>
                        <Link
                            href={project.github}
                            target="_blank" // Added
                            rel="noopener noreferrer" // Added
                            className="flex-1 border-2 border-accent text-accent px-5 py-3 rounded-xl font-bold hover:bg-accent hover:text-white transition-all text-center"
                        >
                            {locale === "ar" ? "مشروع GitHub" : "GitHub"}
                        </Link>
                    </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <div className="bg-white border-t border-gray-200 p-12 text-center">
        <h2 className="text-3xl font-bold text-primary mb-3">{locale === 'ar' ? 'هل أنت مستعد لبدء مشروعك؟' : 'Ready to start your next project?'}</h2>
        <p className="text-lg text-gray-600 mb-6">{locale === 'ar' ? 'قم بجدولة استشارة مباشرة لمناقشة متطلباتك الإقليمية.' : 'Schedule a direct consultation to discuss your regional requirements.'}</p>
        <Link
            href={`/${locale}/contact`}
            className="inline-flex items-center bg-accent text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-accent-dark transition shadow-lg transform hover:scale-[1.02]"
        >
            {locale === 'ar' ? 'احجز استشارتك الآن' : 'Book Your Consultation Now'}
        </Link>
      </div>
    </div>
  );
}
