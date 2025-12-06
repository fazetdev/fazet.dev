"use client";

import { useState } from "react";
import Link from "next/link";

export default function Services({ params }) {
  const locale = params?.locale || "en";
  const [openIndexes, setOpenIndexes] = useState([]);

  const toggle = (id) =>
    setOpenIndexes((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );

  const content = {
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
            },
            {
              name: "Custom",
              price: "$2,500+",
              features: ["Custom modules, API connections, secure multi-branch dashboards"],
              note: "Custom solution — tailored timeline",
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
            },
            {
              name: "Custom Logistics",
              price: "$3,000+",
              features: ["Full fleet system, route optimization, warehouse tools"],
              note: "Custom solution — scope varies",
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
            },
            {
              name: "Full Custom",
              price: "$3,000+",
              features: ["Deep automation, CRM connections, advanced AI training"],
              note: "Custom solution — enterprise timelines",
            },
          ],
          caseStudyLink: "/portfolio/customer-service-ai",
        },
      ],
      ctaText: "View Case Study",
      showDetails: "Show Details",
      hideDetails: "Hide Details",
      nav: {
        home: "Home",
        services: "Services",
        portfolio: "Portfolio",
        about: "About",
        contact: "Contact",
      },
    },

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
            },
            {
              name: "حل مخصص",
              price: "٢٥٠٠$+",
              features: ["وحدات مخصّصة، تكاملات API، لوحات متعددة الفروع"],
              note: "حل مخصّص — جدول زمني مخصص",
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
            },
            {
              name: "باقة التوصيل برو",
              price: "١٤٥٠$",
              features: ["تعيين وتتبع السائقين", "حالة الطلب", "إدارة الفروع", "تحديثات مباشرة للعميل"],
              note: "تبدأ الأسعار من ١٤٥٠$",
            },
            {
              name: "لوجستيات مخصّصة",
              price: "٣٠٠٠$+",
              features: ["نظام أسطول كامل، تحسين المسارات، أدوات المستودعات"],
              note: "حل مخصص — يعتمد على النطاق",
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
            },
            {
              name: "أتمتة الذكاء",
              price: "١٣٥٠$",
              features: ["مهام AI مخصّصة", "ردود متعددة اللغات", "تأهيل العملاء", "تحليلات الأداء"],
              note: "تبدأ الأسعار من ١٣٥٠$",
            },
            {
              name: "حل مخصص",
              price: "٣٠٠٠$+",
              features: ["أتمتة عميقة، ربط CRM، تدريب AI متقدّم"],
              note: "حل مخصص — للمؤسسات",
            },
          ],
          caseStudyLink: "/portfolio/customer-service-ai",
        },
      ],
      ctaText: "عرض دراسة الحالة",
      showDetails: "عرض التفاصيل",
      hideDetails: "إخفاء التفاصيل",
      nav: {
        home: "الرئيسية",
        services: "الخدمات",
        portfolio: "الأعمال",
        about: "عني",
        contact: "اتصل",
      },
    },
  };

  const t = content[locale] || content.en;

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900">
      {/* Header */}
      <header className="bg-white/95 backdrop-blur-sm sticky top-0 z-40 border-b border-gray-200">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-4">
          <Link href={`/${locale}`} className="text-xl font-extrabold tracking-tight text-primary-700">
            Faruk Aminu
          </Link>

          <div className="flex items-center gap-4">
            <nav className="hidden md:flex gap-6 text-sm">
              <Link href={`/${locale}`} className="hover:text-primary-600">{t.nav.home}</Link>
              <Link href={`/${locale}/services`} className="text-primary-700 font-semibold">{t.nav.services}</Link>
              <Link href={`/${locale}/portfolio`} className="hover:text-primary-600">{t.nav.portfolio}</Link>
              <Link href={`/${locale}/about`} className="hover:text-primary-600">{t.nav.about}</Link>
              <Link href={`/${locale}/contact`} className="hover:text-primary-600">{t.nav.contact}</Link>
            </nav>

            <div className="flex items-center gap-3 text-sm">
              <Link href={`/en/services`} className="px-2 py-1 rounded hover:bg-gray-100">EN</Link>
              <span className="text-gray-300">|</span>
              <Link href={`/ar/services`} className="px-2 py-1 rounded hover:bg-gray-100">AR</Link>
            </div>
          </div>
        </div>
      </header>

      {/* Page header */}
      <main className="max-w-6xl mx-auto px-4 py-12">
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-700">{t.pageTitle}</h1>
          <p className="mt-4 text-lg text-neutral-600 max-w-2xl mx-auto">{t.subtitle}</p>
        </div>

        {/* Services list */}
        <div className="space-y-8">
          {t.services.map((svc, sIdx) => (
            <section key={sIdx} className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden">
              <div className="px-6 py-6 md:px-10 md:py-8">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-primary-800">{svc.name}</h2>
                    <p className="mt-2 text-neutral-600">{svc.tagline}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Link
                      href={svc.caseStudyLink}
                      className="inline-flex items-center bg-gradient-to-r from-primary-600 to-primary-400 text-white px-4 py-2 rounded-lg font-semibold shadow-sm hover:brightness-105"
                    >
                      {t.ctaText}
                    </Link>
                  </div>
                </div>

                {/* Packages */}
                <div className="mt-6 grid gap-4 md:grid-cols-3">
                  {svc.packages.map((pkg, pIdx) => {
                    const id = `${sIdx}-${pIdx}`;
                    const opened = openIndexes.includes(id);
                    return (
                      <div key={id} className={`rounded-xl p-5 border ${opened ? "border-primary-200 bg-primary-50/40" : "border-gray-200 bg-white"} shadow-sm`}>
                        <div className="flex items-start justify-between">
                          <div>
                            <h3 className="text-lg font-semibold text-primary-800">{pkg.name}</h3>
                            <div className="mt-1 text-2xl font-extrabold text-accent-600">{pkg.price}</div>
                            <p className="mt-2 text-sm text-neutral-500">{pkg.note}</p>
                          </div>

                          <button
                            onClick={() => toggle(id)}
                            aria-expanded={opened}
                            className="ml-4 inline-flex items-center gap-2 rounded-md px-3 py-2 border border-gray-200 hover:bg-gray-50 text-sm"
                          >
                            <span className="text-sm font-medium text-accent-600">{opened ? t.hideDetails : t.showDetails}</span>
                            <svg className={`w-4 h-4 transform transition-transform ${opened ? "rotate-180" : ""}`} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                              <path d="M5 8l5 5 5-5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          </button>
                        </div>

                        {opened && (
                          <div className="mt-4 text-sm text-neutral-700">
                            <ul className="list-disc list-inside space-y-2">
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
          <p className="text-neutral-600 mb-4">
            {locale === "ar"
              ? "هل تحتاج إلى حل مخصص؟ تواصل معي لتحديد نطاق وموعد العرض."
              : "Need a custom solution? Get in touch and we'll scope your project and timeline."}
          </p>
          <Link
            href={`/${locale}/contact`}
            className="inline-flex items-center bg-accent text-white px-6 py-3 rounded-lg font-semibold hover:brightness-105"
          >
            {locale === "ar" ? "تواصل معي" : "Contact Me"}
          </Link>
        </div>
      </main>
    </div>
  );
}
