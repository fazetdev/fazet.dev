"use client";

import { useState } from "react";
import Link from "next/link";

export default function Portfolio({ params }) {
  const locale = params?.slug?.[0] || "en";

  const content = {
    en: {
      title: " Services",
      subtitle: "Premium web solutions tailored for Gulf businesses",
      services: [
        {
          name: "Premium Property Platform",
          tagline: "From off-plan sales to luxury listings, I build the tools that close deals.",
          packages: [
            {
              name: "Starter",
              price: "$1,500",
              features: [
                "Custom Payment Plan Calculator",
                "Bilingual (EN/AR) Landing Page",
                "5 Property Listings",
                "Contact & WhatsApp Integration",
              ],
              note: "Based on typical 4-6 week project scope",
            },
            {
              name: "Professional",
              price: "$3,500",
              features: [
                "Everything in Starter",
                "Full Admin Dashboard",
                "Hijri/Gregorian Date Integration",
                "Interactive Site Map",
                "Virtual Tour Integration (360° photos/video)",
              ],
              note: "Pricing starts from $3,500",
            },
            {
              name: "Enterprise",
              price: "$7,000+",
              features: [
                "Fully custom platform with CRM, lead management, and advanced analytics",
              ],
              note: "Custom Solution",
            },
          ],
          caseStudyLink: "#premium-property-case",
        },
        {
          name: "Business Management Dashboard",
          tagline: "Automate your scheduling, payments, and customer tracking in one place.",
          packages: [
            {
              name: "Essential",
              price: "$900",
              features: ["Core Dashboard UI", "Appointment Scheduler", "Customer Database", "Basic Reporting"],
              note: "Based on typical 4-6 week project scope",
            },
            {
              name: "Growth",
              price: "$1,800",
              features: [
                "Everything in Essential",
                "Payment Tracking & Invoicing",
                "Staff/Resource Management",
                "Advanced Analytics & Charts",
                "Bilingual (EN/AR) Support",
              ],
              note: "Pricing starts from $1,800",
            },
            {
              name: "Custom",
              price: "$3,000+",
              features: ["Tailored to your specific workflow (inventory, commissions, etc.)"],
              note: "Custom Solution",
            },
          ],
          caseStudyLink: "#business-dashboard-case",
        },
        {
          name: "E-Commerce & Delivery Suite",
          tagline: "Build a seamless online store and empower your delivery fleet.",
          packages: [
            {
              name: "Online Store",
              price: "$1,200",
              features: [
                "Bilingual E-commerce Site",
                "Product Catalog & Cart",
                "Integrated Payment Gateway (Stripe/Tap)",
                "Basic Order Management",
              ],
              note: "Based on typical 4-6 week project scope",
            },
            {
              name: "Delivery Pro",
              price: "$2,200",
              features: [
                "Everything in Online Store",
                "Driver Dashboard (Map Integration)",
                "Order Tracking & Status Updates",
                "Driver Earnings Tracker",
              ],
              note: "Pricing starts from $2,200",
            },
            {
              name: "Custom Logistics",
              price: "$4,500+",
              features: ["Full fleet management, route optimization, etc."],
              note: "Custom Solution",
            },
          ],
          caseStudyLink: "#ecommerce-delivery-case",
        },
        {
          name: "Customer Service AI Hub",
          tagline: "Stop losing customers in the noise. Centralize and automate your support.",
          packages: [
            {
              name: "Starter Setup",
              price: "$800",
              features: ["Unified Inbox UI (Simulated)", "Canned Responses Library", "Basic Customer History"],
              note: "Based on typical 4-6 week project scope",
            },
            {
              name: "AI Automation",
              price: "$2,500",
              features: [
                "Everything in Starter",
                "AI Reply Integration (OpenAI API)",
                "Automated Ticket Tagging",
                "Performance Analytics",
              ],
              note: "Pricing starts from $2,500",
            },
            {
              name: "Full Custom",
              price: "$5,000+",
              features: ["Multi-channel integration (WhatsApp Business API, Instagram, etc.)"],
              note: "Custom Solution",
            },
          ],
          caseStudyLink: "#customer-service-ai-case",
        },
      ],
      nav: {
        home: "Home",
        services: "Services",
        portfolio: "Portfolio",
        about: "About",
        contact: "Contact",
      },
      ctaText: "View Case Study",
      showDetails: "Show Details",
      hideDetails: "Hide Details",
    },
    ar: {
      title: "أعمالي وخدماتي",
      subtitle: "حلول ويب مميزة مخصصة لأعمال الخليج",
      services: [
        {
          name: "منصة العقارات المميزة",
          tagline: "من المبيعات المسبقة إلى القوائم الفاخرة، أبني الأدوات التي تُنجز الصفقات.",
          packages: [
            {
              name: "المبتدئ",
              price: "$1,500",
              features: [
                "حاسبة خطة الدفع المخصصة",
                "صفحة هبوط ثنائية اللغة (EN/AR)",
                "5 قوائم عقارية",
                "تكامل البريد واتساب",
              ],
              note: "مدة المشروع النموذجية 4-6 أسابيع",
            },
            {
              name: "المهني",
              price: "$3,500",
              features: [
                "كل شيء في المبتدئ",
                "لوحة تحكم كاملة",
                "تكامل التاريخ الهجري/الميلادي",
                "خريطة تفاعلية",
                "تكامل الجولات الافتراضية (صور/فيديو 360°)",
              ],
              note: "تبدأ الأسعار من $3,500",
            },
            {
              name: "المؤسسة",
              price: "$7,000+",
              features: ["منصة مخصصة بالكامل مع CRM وإدارة العملاء والتحليلات المتقدمة"],
              note: "حل مخصص",
            },
          ],
          caseStudyLink: "#premium-property-case",
        },
        {
          name: "لوحة إدارة الأعمال",
          tagline: "أتمتة جدولة المواعيد والمدفوعات وتتبع العملاء في مكان واحد.",
          packages: [
            {
              name: "الأساسي",
              price: "$900",
              features: ["واجهة لوحة التحكم الأساسية", "جدولة المواعيد", "قاعدة بيانات العملاء", "التقارير الأساسية"],
              note: "مدة المشروع النموذجية 4-6 أسابيع",
            },
            {
              name: "النمو",
              price: "$1,800",
              features: [
                "كل شيء في الأساسي",
                "تتبع المدفوعات والفواتير",
                "إدارة الموظفين/الموارد",
                "تحليلات ورسوم بيانية متقدمة",
                "دعم ثنائي اللغة (EN/AR)",
              ],
              note: "تبدأ الأسعار من $1,800",
            },
            {
              name: "مخصص",
              price: "$3,000+",
              features: ["مصمم حسب سير العمل الخاص بك (المخزون، العمولات، إلخ)"],
              note: "حل مخصص",
            },
          ],
          caseStudyLink: "#business-dashboard-case",
        },
        {
          name: "حل التجارة الإلكترونية والتوصيل",
          tagline: "بناء متجر إلكتروني سلس وتمكين أسطول التوصيل الخاص بك.",
          packages: [
            {
              name: "المتجر الإلكتروني",
              price: "$1,200",
              features: [
                "موقع تجارة إلكترونية ثنائي اللغة",
                "كتالوج المنتجات وعربة التسوق",
                "بوابة دفع متكاملة (Stripe/Tap)",
                "إدارة الطلبات الأساسية",
              ],
              note: "مدة المشروع النموذجية 4-6 أسابيع",
            },
            {
              name: "التوصيل الاحترافي",
              price: "$2,200",
              features: [
                "كل شيء في المتجر الإلكتروني",
                "لوحة سائق (تكامل الخريطة)",
                "تتبع الطلبات وتحديث الحالة",
                "متعقب أرباح السائقين",
              ],
              note: "تبدأ الأسعار من $2,200",
            },
            {
              name: "الخدمات اللوجستية المخصصة",
              price: "$4,500+",
              features: ["إدارة الأسطول بالكامل، تحسين المسارات، إلخ"],
              note: "حل مخصص",
            },
          ],
          caseStudyLink: "#ecommerce-delivery-case",
        },
        {
          name: "مركز خدمة العملاء بالذكاء الاصطناعي",
          tagline: "توقف عن فقد العملاء وسط الضوضاء. مركز ودرب الدعم تلقائيًا.",
          packages: [
            {
              name: "إعداد المبتدئ",
              price: "$800",
              features: ["واجهة صندوق وارد موحدة (محاكاة)", "مكتبة الردود الجاهزة", "تاريخ العملاء الأساسي"],
              note: "مدة المشروع النموذجية 4-6 أسابيع",
            },
            {
              name: "أتمتة الذكاء الاصطناعي",
              price: "$2,500",
              features: [
                "كل شيء في المبتدئ",
                "تكامل الردود بالذكاء الاصطناعي (OpenAI API)",
                "تصنيف التذاكر تلقائيًا",
                "تحليلات الأداء",
              ],
              note: "تبدأ الأسعار من $2,500",
            },
            {
              name: "مخصص بالكامل",
              price: "$5,000+",
              features: ["تكامل متعدد القنوات (WhatsApp Business API، Instagram، إلخ)"],
              note: "حل مخصص",
            },
          ],
          caseStudyLink: "#customer-service-ai-case",
        },
      ],
      nav: {
        home: "الرئيسية",
        services: "الخدمات",
        portfolio: "الأعمال",
        about: "عني",
        contact: "اتصل",
      },
      ctaText: "عرض دراسة الحالة",
      showDetails: "عرض التفاصيل",
      hideDetails: "إخفاء التفاصيل",
    },
  };

  const t = content[locale] || content.en;
  const [openIndexes, setOpenIndexes] = useState([]);

  const toggleDetails = (index) => {
    setOpenIndexes((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <div className="min-h-screen bg-background px-4">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto flex justify-between items-center py-4">
          <Link href={`/${locale}`} className="text-xl font-bold text-primary">Faruk Aminu</Link>
          <div className="flex space-x-4 rtl:space-x-reverse">
            <Link href="/en" className="text-text hover:text-primary">EN</Link>
            <span className="text-gray-300">|</span>
            <Link href="/ar" className="text-text hover:text-primary">AR</Link>
          </div>
        </div>
        <nav className="max-w-7xl mx-auto flex space-x-6 rtl:space-x-reverse text-sm py-2">
          <Link href={`/${locale}`} className="text-text hover:text-primary">{t.nav.home}</Link>
          <Link href={`/${locale}/services`} className="text-text hover:text-primary">{t.nav.services}</Link>
          <Link href={`/${locale}/portfolio`} className="text-primary font-semibold">{t.nav.portfolio}</Link>
          <Link href={`/${locale}/about`} className="text-text hover:text-primary">{t.nav.about}</Link>
          <Link href={`/${locale}/contact`} className="text-text hover:text-primary">{t.nav.contact}</Link>
        </nav>
      </header>

      {/* Page Title */}
      <div className="max-w-6xl mx-auto text-center my-12">
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">{t.title}</h1>
        <p className="text-xl text-text">{t.subtitle}</p>
      </div>

      {/* Services List */}
      <div className="max-w-6xl mx-auto space-y-12">
        {t.services.map((service, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
            <h2 className="text-2xl font-bold text-primary mb-2">{service.name}</h2>
            <p className="text-text mb-4 italic">{service.tagline}</p>

            {service.packages.map((pkg, i) => (
              <div key={i} className="border-t border-gray-200 py-4">
                <div className="flex justify-between items-center cursor-pointer" onClick={() => toggleDetails(`${index}-${i}`)}>
                  <h3 className="text-lg font-semibold">{pkg.name} - {pkg.price}</h3>
                  <span className="text-accent font-semibold">
                    {openIndexes.includes(`${index}-${i}`) ? t.hideDetails : t.showDetails}
                  </span>
                </div>
                {openIndexes.includes(`${index}-${i}`) && (
                  <ul className="mt-2 list-disc list-inside text-text">
                    {pkg.features.map((f, j) => (
                      <li key={j}>{f}</li>
                    ))}
                    <li className="mt-2 italic text-sm">{pkg.note}</li>
                  </ul>
                )}
              </div>
            ))}

            <div className="mt-4 text-right">
              <Link href={service.caseStudyLink} className="bg-accent text-white px-6 py-2 rounded-lg font-semibold hover:bg-yellow-600 transition-colors">
                {t.ctaText}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
