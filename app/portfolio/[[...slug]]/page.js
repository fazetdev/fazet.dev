import Link from "next/link";

export default function Portfolio({ params }) {
  const locale = params?.slug?.[0] || "en";

  const content = {
    en: {
      title: "Portfolio",
      subtitle: "My recent projects for Gulf clients",
      projects: [
        {
          title: "Bayt Elite",
          category: "Property Tech / Real Estate",
          challenge:
            "Gulf real estate developers struggle with clunky, non-cultural payment calculators that don't account for local preferences and Islamic finance requirements.",
          solution: [
            "Dynamic payment calculator with Islamic finance options",
            "Hijri date integration for project timelines",
            "Qibla finder and prayer time features",
            "Virtual property tour capabilities",
            "Multi-language support (Arabic/English)",
          ],
          tech: ["Next.js", "Tailwind CSS", "Node.js", "MongoDB"],
          demo: "#",
          code: "#",
        },
        {
          title: "Tawasul AI",
          category: "Business Automation / SaaS",
          challenge:
            "Businesses in the Gulf receive customer inquiries across multiple platforms (WhatsApp, Instagram, email) leading to missed messages and inconsistent responses.",
          solution: [
            "Unified inbox for all communication channels",
            "AI-powered response suggestions",
            "Automated inquiry categorization",
            "Multi-language chatbot integration",
            "Real-time notification system",
          ],
          tech: ["Next.js", "Tailwind CSS", "Python", "Firebase"],
          demo: "#",
          code: "#",
        },
        {
          title: "Zimam Delivery",
          category: "Logistics Tech / Mobile-First",
          challenge:
            "Last-mile logistics companies lack efficient driver management tools and real-time delivery tracking systems tailored for Gulf urban environments.",
          solution: [
            "Real-time driver tracking dashboard",
            "Automated route optimization",
            "Delivery status notifications",
            "Driver performance analytics",
            "Mobile-first responsive design",
          ],
          tech: ["Next.js", "Tailwind CSS", "React Native", "Express.js"],
          demo: "#",
          code: "#",
        },
        {
          title: "Al-Multaqa",
          category: "Business Software / B2B Dashboards",
          challenge:
            "Service businesses like salons and clinics need customized admin tools to manage appointments, inventory, and customer relationships efficiently.",
          solution: [
            "Customizable appointment scheduling",
            "Inventory management system",
            "Customer relationship management",
            "Financial reporting dashboard",
            "Multi-location support",
          ],
          tech: ["Next.js", "Tailwind CSS", "PostgreSQL", "Prisma"],
          demo: "#",
          code: "#",
        },
      ],
      nav: {
        home: "Home",
        services: "Services",
        about: "About",
        contact: "Contact",
      },
      labels: {
        category: "Category",
        challenge: "The Challenge",
        solution: "The Solution",
        tech: "Tech Stack",
        liveDemo: "Live Demo",
        viewCode: "View Code",
      },
    },
    ar: {
      title: "الأعمال",
      subtitle: "مشاريعي الحديثة لعملاء الخليج",
      projects: [
        {
          title: "بيت إيليت",
          category: "تقنية العقارات / العقارات",
          challenge:
            "يعاني مطورو العقارات في الخليج من حاسبات الدفع المعقدة وغير المراعية للثقافة التي لا تأخذ في الاعتبار التفضيلات المحلية ومتطلبات التمويل الإسلامي.",
          solution: [
            "حاسبة دفع ديناميكية مع خيارات التمويل الإسلامي",
            "دمج التواريخ الهجرية لجداول المشاريع",
            "ميزات باحث القبلة وأوقات الصلاة",
            "إمكانيات الجولة الافتراضية للممتلكات",
            "دعم متعدد اللغات (العربية/الإنجليزية)",
          ],
          tech: ["Next.js", "Tailwind CSS", "Node.js", "MongoDB"],
          demo: "#",
          code: "#",
        },
        {
          title: "تواصل AI",
          category: "أتمتة الأعمال / برمجيات كخدمة",
          challenge:
            "تتلقى الشركات في الخليج استفسارات العملاء عبر منصات متعددة (واتساب، إنستغرام، البريد الإلكتروني) مما يؤدي إلى فقدان الرسائل وردود غير متسقة.",
          solution: [
            "صندوق وارد موحد لجميع قنوات الاتصال",
            "اقتراحات ردود مدعومة بالذكاء الاصطناعي",
            "تصنيف الاستفسارات الآلي",
            "دمج روبوت المحادثات متعدد اللغات",
            "نظام إشعارات فوري",
          ],
          tech: ["Next.js", "Tailwind CSS", "Python", "Firebase"],
          demo: "#",
          code: "#",
        },
        {
          title: "زِمَام دليفري",
          category: "تقنية الخدمات اللوجستية / mobile-first",
          challenge:
            "تفتقر شركات الخدمات اللوجستية من الميل الأخير إلى أدوات فعالة لإدارة السائقين وأنظمة تتبع التوصيل الفورية المصممة لبيئات الخليج الحضرية.",
          solution: [
            "لوحة تحكم لتتبع السائقين في الوقت الفعلي",
            "تحسين المسار الآلي",
            "إشعارات حالة التوصيل",
            "تحليلات أداء السائقين",
            "تصميم متجاوب mobile-first",
          ],
          tech: ["Next.js", "Tailwind CSS", "React Native", "Express.js"],
          demo: "#",
          code: "#",
        },
        {
          title: "الملتقى",
          category: "برمجيات الأعمال / لوحات تحكم B2B",
          challenge:
            "تحتاج أعمال الخدمات مثل الصالونات والعيادات إلى أدوات إدارية مخصصة لإدارة المواعيد والمخزون وعلاقات العملاء بكفاءة.",
          solution: [
            "جدولة مواعيد قابلة للتخصيص",
            "نظام إدارة المخزون",
            "إدارة علاقات العملاء",
            "لوحة تحكم التقارير المالية",
            "دعم المواقع المتعددة",
          ],
          tech: ["Next.js", "Tailwind CSS", "PostgreSQL", "Prisma"],
          demo: "#",
          code: "#",
        },
      ],
      nav: {
        home: "الرئيسية",
        services: "الخدمات",
        about: "عني",
        contact: "اتصل",
      },
      labels: {
        category: "الفئة",
        challenge: "التحدي",
        solution: "الحل",
        tech: "المجموعة التقنية",
        liveDemo: "عرض حي",
        viewCode: "عرض الكود",
      },
    },
  };

  const t = content[locale] || content.en;

  return (
    <div className="min-h-screen bg-background" dir={locale === "ar" ? "rtl" : "ltr"}>
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center md:items-start gap-4 md:gap-0">
          <Link href={`/${locale}`} className="text-xl font-bold text-primary">
            Faruk Aminu
          </Link>
          <div className="flex space-x-4 rtl:space-x-reverse">
            <a href="/en/portfolio" className="text-text hover:text-primary">
              EN
            </a>
            <span className="text-gray-300">|</span>
            <a href="/ar/portfolio" className="text-text hover:text-primary">
              AR
            </a>
          </div>
        </div>

        <nav className="max-w-7xl mx-auto px-4 py-2 flex flex-wrap gap-4 md:gap-6 text-sm">
          <Link href={`/${locale}`} className="text-text hover:text-primary">
            {t.nav.home}
          </Link>
          <Link href={`/${locale}/services`} className="text-text hover:text-primary">
            {t.nav.services}
          </Link>
          <Link
            href={`/${locale}/portfolio`}
            className="text-primary font-semibold"
          >
            {locale === "ar" ? "الأعمال" : "Portfolio"}
          </Link>
          <Link href={`/${locale}/about`} className="text-text hover:text-primary">
            {t.nav.about}
          </Link>
          <Link
            href={`/${locale}/contact`}
            className="text-text hover:text-primary"
          >
            {t.nav.contact}
          </Link>
        </nav>
      </header>

      {/* Portfolio Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              {t.title}
            </h1>
            <p className="text-xl text-text">{t.subtitle}</p>
          </div>

          <div className="space-y-12">
            {t.projects.map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg p-6 md:p-8 flex flex-col md:flex-row md:justify-between gap-6 md:gap-4"
              >
                {/* Left: Title + Category */}
                <div className={`flex-1 ${locale === "ar" ? "text-right" : "text-left"}`}>
                  <h2 className="text-2xl font-bold text-primary mb-2">
                    {project.title}
                  </h2>
                  <p className="text-text">
                    <span className="font-semibold">{t.labels.category}:</span>{" "}
                    {project.category}
                  </p>
                </div>

                {/* Right: Links */}
                <div className="flex space-x-4 rtl:space-x-reverse mt-2 md:mt-0">
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-accent text-white px-4 py-2 rounded-lg font-semibold hover:bg-yellow-600 transition-colors"
                  >
                    {t.labels.liveDemo}
                  </a>
                  <a
                    href={project.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-200 text-text px-4 py-2 rounded-lg font-semibold hover:bg-gray-300 transition-colors"
                  >
                    {t.labels.viewCode}
                  </a>
                </div>

                {/* Screenshot */}
                <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center my-4 md:my-0 flex-1">
                  <span className="text-text">
                    {project.title} {locale === "ar" ? "لقطة الشاشة" : "Screenshot"}
                  </span>
                </div>

                {/* Challenge + Solution */}
                <div className="grid md:grid-cols-2 gap-6 flex-1">
                  <div className={locale === "ar" ? "text-right" : "text-left"}>
                    <h3 className="text-lg font-semibold text-primary mb-2">
                      {t.labels.challenge}
                    </h3>
                    <p className="text-text">{project.challenge}</p>
                  </div>
                  <div className={locale === "ar" ? "text-right" : "text-left"}>
                    <h3 className="text-lg font-semibold text-primary mb-2">
                      {t.labels.solution}
                    </h3>
                    <ul className="list-disc list-inside space-y-1">
                      {project.solution.map((sol, idx) => (
                        <li key={idx}>{sol}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="bg-primary text-white px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
