'use client';

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation"; // Added for dynamic toggle

export default function Services({ params }) {
  const locale = params?.locale || params?.slug?.[0] || "en";
  const pathname = usePathname();
  const [openIndexes, setOpenIndexes] = useState([]);

  const toggle = (id) =>
    setOpenIndexes((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );

  const content = {
    // ... (content remains unchanged for brevity and focus)
    en: {
      pageTitle: "Services",
      subtitle: "Premium digital solutions engineered for Gulf businesses",
      services: [
        {
          name: "Premium Property Platform",
          tagline: "Modern tools for brokers, developers, and luxury real estate agencies.",
          packages: [
            {
              name: "Starter",
              price: "$950",
              features: [
                "Clean property catalog",
                "Fast mobile-first pages",
                "Basic lead form (WhatsApp)",
                "Developer branding",
              ],
              note: "Based on typical 4-6 week project scope",
              highlight: false,
            },
            {
              name: "Professional",
              price: "$1,950",
              features: [
                "Full listing system",
                "Off-plan project pages",
                "Multi-agent lead routing",
                "PDF brochure generator",
                "Light analytics & performance tuning",
              ],
              note: "Pricing starts from $1,950",
              highlight: true, // Mark as preferred package
            },
            {
              name: "Enterprise",
              price: "$3,500+",
              features: [
                "Advanced CRM + pipeline",
                "Unit availability & inventory",
                "Interactive floor plans",
                "API & third-party integrations",
              ],
              note: "Custom solution — timeframe depends on scope",
              highlight: false,
            },
          ],
          caseStudyLink: "/portfolio/property-tech",
        },
        {
          name: "Business Management Dashboard",
          tagline: "Automate operations, payments, and scheduling in one place.",
          packages: [
            {
              name: "Essential",
              price: "$650",
              features: [
                "Booking calendar",
                "Client database",
                "Simple staff panel",
                "Mobile-friendly UI",
              ],
              note: "Based on typical 4-6 week project scope",
              highlight: false,
            },
            {
              name: "Growth",
              price: "$1,200",
              features: [
                "Multi-staff scheduling",
                "Wallet/payments tracking",
                "Invoices & receipts",
                "Task automation",
              ],
              note: "Pricing starts from $1,200",
              highlight: true,
            },
            {
              name: "Custom",
              price: "$2,500+",
              features: ["Custom modules, API connections, secure multi-branch dashboards"],
              note: "Custom solution — tailored timeline",
              highlight: false,
            },
          ],
          caseStudyLink: "/portfolio/business-automation",
        },
        {
          name: "E-Commerce & Delivery Suite",
          tagline: "Sell online and manage delivery operations smoothly.",
          packages: [
            {
              name: "Online Store",
              price: "$1,000",
              features: [
                "Professional storefront",
                "Secure checkout",
                "Product & catalog management",
                "Payments integration",
              ],
              note: "Based on typical 4-6 week project scope",
              highlight: false,
            },
            {
              name: "Delivery Pro",
              price: "$1,450",
              features: [
                "Driver assignment & tracking",
                "Delivery status updates",
                "Branch & order management",
                "Live order updates for customers",
              ],
              note: "Pricing starts from $1,450",
              highlight: true,
            },
            {
              name: "Custom Logistics",
              price: "$3,000+",
              features: ["Full fleet system, route optimization, warehouse tools"],
              note: "Custom solution — scope varies",
              highlight: false,
            },
          ],
          caseStudyLink: "/portfolio/logistics-tech",
        },
        {
          name: "Customer Service AI Hub",
          tagline: "Centralize and automate customer support with AI assistance.",
          packages: [
            {
              name: "Starter Setup",
              price: "$850",
              features: [
                "Unified inbox setup",
                "Basic AI replies",
                "Knowledge base structure",
                "Auto-tagging",
              ],
              note: "Based on typical 4-6 week project scope",
              highlight: false,
            },
            {
              name: "AI Automation",
              price: "$1,350",
              features: [
                "Custom AI workflows",
                "Multi-language responses",
                "Lead qualification",
                "Performance analytics",
              ],
              note: "Pricing starts from $1,350",
              highlight: true,
            },
            {
              name: "Full Custom",
              price: "$3,000+",
              features: ["Deep automation, CRM connections, advanced AI training"],
              note: "Custom solution — enterprise timelines",
              highlight: false,
            },
          ],
          caseStudyLink: "/portfolio/customer-service-ai",
        },
      ],
      ctaText: "View Case Study",
      showDetails: "Show Details",
      hideDetails: "Hide Details",
    },
    // ... (Arabic content with highlight: true added to Growth/Professional tiers)
    ar: {
      pageTitle: "الخدمات",
      subtitle: "حلول رقمية احترافية مصممة لأعمال الخليج",
      services: [
        {
          name: "منصة العقار المتقدمة",
          tagline: "حلول حديثة للوكلاء العقاريين والمطوّرين وشركات العقارات الفاخرة.",
          packages: [
            {
              name: "باقة البداية",
              price: "٩٥٠$",
              features: [
                "كتالوج عقارات مرتب",
                "صفحات سريعة ومناسبة للجوال",
                "نموذج تسجيل العملاء → واتساب",
                "هوية ومظهر احترافي",
              ],
              note: "مدة النموذجية للمشروع 4-6 أسابيع",
              highlight: false,
            },
            {
              name: "باقة الاحتراف",
              price: "١٩٥٠$",
              features: [
                "نظام قوائم متكامل",
                "صفحات مشاريع البيع على الخارطة",
                "توزيع العملاء على عدة وكلاء",
                "توليد كتيّب PDF تلقائي",
                "تحليلات أساسية وتحسين أداء",
              ],
              note: "تبدأ الأسعار من ١٩٥٠$",
              highlight: true,
            },
            {
              name: "باقة المؤسسات",
              price: "٣٥٠٠$+",
              features: [
                "CRM متقدّم مع مراحل البيع",
                "نظام توافر الوحدات",
                "مخططات تفاعلية",
                "تكاملات مع أنظمة خارجية",
              ],
              note: "حل مخصص — يعتمد على نطاق المشروع",
              highlight: false,
            },
          ],
          caseStudyLink: "/portfolio/property-tech",
        },
        {
          name: "لوحة إدارة الأعمال",
          tagline: "أتمتة الجدولة، المدفوعات، وإدارة العملاء في مكان واحد.",
          packages: [
            {
              name: "الباقة الأساسية",
              price: "٦٥٠$",
              features: ["تقويم الحجز", "قاعدة بيانات العملاء", "لوحة للموظفين", "واجهة صديقة للموبايل"],
              note: "مدة النموذجية للمشروع 4-6 أسابيع",
              highlight: false,
            },
            {
              name: "باقة النمو",
              price: "١٢٠٠$",
              features: [
                "جدولة متعددة للموظفين",
                "تتبع المدفوعات والمحفظة",
                "الفواتير والإيصالات",
                "أتمتة المهام",
              ],
              note: "تبدأ الأسعار من ١٢٠٠$",
              highlight: true,
            },
            {
              name: "حل مخصص",
              price: "٢٥٠٠$+",
              features: ["وحدات مخصّصة، تكاملات API، لوحات متعددة الفروع"],
              note: "حل مخصّص — جدول زمني مخصص",
              highlight: false,
            },
          ],
          caseStudyLink: "/portfolio/business-automation",
        },
        {
          name: "مجموعة التجارة والتوصيل",
          tagline: "متجر إلكتروني سلس ونظام توصيل ذكي يناسب السوق المحلي.",
          packages: [
            {
              name: "المتجر الإلكتروني",
              price: "١٠٠٠$",
              features: ["واجهة متجر احترافية", "دفع آمن", "إدارة المنتجات", "ربط بوابات الدفع"],
              note: "مدة النموذجية للمشروع 4-6 أسابيع",
              highlight: false,
            },
            {
              name: "باقة التوصيل برو",
              price: "١٤٥٠$",
              features: [
                "تعيين وتتبع السائقين",
                "حالة الطلب",
                "إدارة الفروع",
                "تحديثات مباشرة للعميل",
              ],
              note: "تبدأ الأسعار من ١٤٥٠$",
              highlight: true,
            },
            {
              name: "لوجستيات مخصّصة",
              price: "٣٠٠٠$+",
              features: ["نظام أسطول كامل، تحسين المسارات، أدوات المستودعات"],
              note: "حل مخصص — يعتمد على النطاق",
              highlight: false,
            },
          ],
          caseStudyLink: "/portfolio/logistics-tech",
        },
        {
          name: "مركز دعم العملاء بالذكاء الاصطناعي",
          tagline: "جمع وأتمتة رسائل العملاء عبر القنوات مع مساعدة AI.",
          packages: [
            {
              name: "الإعداد الأساسي",
              price: "٨٥٠$",
              features: ["إعداد صندوق موحد", "ردود AI أساسية", "بناء قاعدة معرفة", "تصنيف تلقائي"],
              note: "مدة النموذجية للمشروع 4-6 أسابيع",
              highlight: false,
            },
            {
              name: "أتمتة الذكاء",
              price: "١٣٥٠$",
              features: [
                "مهام AI مخصّصة",
                "ردود متعددة اللغات",
                "تأهيل العملاء",
                "تحليلات الأداء",
              ],
              note: "تبدأ الأسعار من ١٣٥٠$",
              highlight: true,
            },
            {
              name: "حل مخصص",
              price: "٣٠٠٠$+",
              features: ["أتمتة عميقة، ربط CRM، تدريب AI متقدّم"],
              note: "حل مخصص — للمؤسسات",
              highlight: false,
            },
          ],
          caseStudyLink: "/portfolio/customer-service-ai",
        },
      ],
      ctaText: "عرض دراسة الحالة",
      showDetails: "عرض التفاصيل",
      hideDetails: "إخفاء التفاصيل",
    },
  };
  
  const t = content[locale] || content.en;
  const oppositeLocale = locale === "en" ? "ar" : "en";

  const getTogglePath = () => {
    if (!pathname) return `/${oppositeLocale}/services`;
    const pathParts = pathname.split('/').filter(Boolean);
    if (pathParts.length > 0 && (pathParts[0] === 'en' || pathParts[0] === 'ar')) {
      pathParts[0] = oppositeLocale;
      return `/${pathParts.join('/')}`;
    }
    return `/${oppositeLocale}${pathname === '/' ? '' : pathname}`;
  };


  return (
    <div className={`min-h-screen bg-neutral-50 ${locale === 'ar' ? 'font-arabic' : 'font-english'}`} dir={locale === 'ar' ? 'rtl' : 'ltr'}>
      {/* Header */}
      <header className="bg-white/95 backdrop-blur-sm sticky top-0 z-40 border-b border-gray-200">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-4">
          <Link href={`/${locale}`} className="text-xl font-extrabold tracking-tight text-primary hover:text-accent transition">
             Fazet.dev
          </Link>

          <div className="flex items-center gap-3 text-sm">
            <Link 
              href={getTogglePath()} 
              className="px-3 py-1 bg-gray-50 rounded-lg font-semibold text-gray-700 hover:bg-gray-100 transition"
            >
              {oppositeLocale.toUpperCase()}
            </Link>
          </div>
        </div>
      </header>

      {/* Page header */}
      <main className="max-w-6xl mx-auto px-4 py-12">
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-bold text-primary">{t.pageTitle}</h1>
          <p className="mt-4 text-xl text-gray-700 max-w-2xl mx-auto">{t.subtitle}</p>
        </div>

        {/* Services list */}
        <div className="space-y-8">
          {t.services.map((svc, sIdx) => (
            <section key={sIdx} className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
              <div className="px-6 py-6 md:px-10 md:py-8">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-primary">{svc.name}</h2>
                    <p className="mt-2 text-gray-600">{svc.tagline}</p>
                  </div>
                  
                  {/* Case Study CTA */}
                  <div className="flex items-center gap-3 flex-shrink-0">
                    <Link
                      href={svc.caseStudyLink}
                      className="inline-flex items-center bg-accent text-white px-5 py-2 rounded-xl font-semibold shadow-md hover:bg-accent-dark transition"
                    >
                      {t.ctaText}
                    </Link>
                  </div>
                </div>

                {/* Packages */}
                <div className="mt-8 grid gap-6 md:grid-cols-3">
                  {svc.packages.map((pkg, pIdx) => {
                    const id = `${sIdx}-${pIdx}`;
                    const opened = openIndexes.includes(id);
                    
                    const isHighlighted = pkg.highlight;
                    const borderClass = isHighlighted ? "border-accent ring-2 ring-accent/50" : "border-gray-200";
                    const headerClass = isHighlighted ? "text-accent" : "text-primary";
                    const priceClass = isHighlighted ? "text-accent" : "text-primary";
                    const bgClass = isHighlighted ? "bg-white" : "bg-neutral-50";

                    return (
                      <div key={id} className={`rounded-xl p-6 border ${borderClass} ${bgClass} shadow-lg transition-all`}>
                        <div className="flex items-start justify-between">
                          <div>
                            <h3 className={`text-xl font-extrabold ${headerClass}`}>{pkg.name}</h3>
                            <div className={`mt-1 text-3xl font-extrabold ${priceClass}`}>{pkg.price}</div>
                            <p className="mt-2 text-sm text-gray-500">{pkg.note}</p>
                          </div>

                          {/* Toggle Button */}
                          <button
                            onClick={() => toggle(id)}
                            aria-expanded={opened}
                            className={`ml-4 rtl:mr-4 rtl:ml-0 inline-flex items-center gap-2 rounded-lg px-3 py-2 border border-gray-300 hover:bg-gray-100 text-sm transition`}
                          >
                            <span className="text-sm font-medium text-gray-700">{opened ? t.hideDetails : t.showDetails}</span>
                            <svg className={`w-4 h-4 text-gray-600 transform transition-transform ${opened ? "rotate-180" : ""}`} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                              <path d="M5 8l5 5 5-5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          </button>
                        </div>

                        {opened && (
                          <div className="mt-5 text-base text-gray-700 border-t border-dashed border-gray-200 pt-4">
                            <ul className="list-disc list-inside space-y-2 marker:text-primary">
                              {pkg.features.map((f, i) => (
                                <li key={i}>{f}</li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </section>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <p className="text-xl font-semibold text-gray-700 mb-4">
            {locale === "ar"
              ? "هل تحتاج إلى حل مخصص؟ تواصل معي لتحديد نطاق وموعد العرض."
              : "Need a custom solution? Get in touch and we'll scope your project and timeline."}
          </p>
          <Link
            href={`/${locale}/contact`}
            className="inline-flex items-center bg-primary text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-primary-dark transition shadow-xl"
          >
            {locale === "ar" ? "تواصل معي" : "Contact Me"}
          </Link>
        </div>
      </main>
    </div>
  );
}
