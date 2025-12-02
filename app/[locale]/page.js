"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Home({ params }) {
  const locale = params?.slug?.[0] || 'en';
  const [showStickyFooter, setShowStickyFooter] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky footer when user scrolls past 300px
      setShowStickyFooter(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
            linkText: "Explore project"
          },
          {
            title: "Tawasul AI – Business Automation",
            description: "AI-powered customer service hubs to manage inquiries from WhatsApp, Instagram & email.",
            link: "#tawasul-ai-case-study",
            linkText: "Explore project"
          },
          {
            title: "Zimam Delivery – Logistics Tech",
            description: "Driver dashboards & delivery management tools for last-mile logistics companies.",
            link: "#zimam-delivery-case-study",
            linkText: "Explore project"
          },
          {
            title: "Al-Multaqa – Business Dashboards",
            description: "Custom admin dashboards for salons, clinics, and service businesses to manage operations.",
            link: "#al-multaqa-case-study",
            linkText: "Explore project"
          }
        ]
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
      }
    }
  };

  const t = content[locale] || content.en;

  return (
    <div className="min-h-screen bg-background" dir={locale === 'ar' ? 'rtl' : 'ltr'}>
      {/* Hero Section with Original CTA */}
      <section className="pt-20 pb-16 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6">{t.hero.title}</h1>
          <p className="text-xl md:text-2xl text-text mb-12 max-w-3xl mx-auto">{t.hero.subtitle}</p>
          
          {/* Original CTA - Stays in its original position */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-20">
            <Link 
              href={`/${locale}/portfolio`} 
              className="bg-accent text-white px-8 py-3 rounded-lg font-semibold hover:bg-yellow-600 transition-colors text-lg"
            >
              {t.hero.viewWork}
            </Link>
            <Link 
              href={`/${locale}/contact`} 
              className="border-2 border-primary text-primary px-8 py-3 rounded-lg font-semibold hover:bg-primary hover:text-white transition-colors text-lg"
            >
              {t.hero.contactMe}
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12">{t.services.title}</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {t.services.items.map((service, i) => (
              <div key={i} className="text-center p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold text-primary mb-3">{service.title}</h3>
                <p className="text-text mb-4">{service.description}</p>
                <Link href={service.link} className="text-accent font-semibold hover:underline inline-flex items-center">
                  → {service.linkText}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sticky Footer CTA - Appears when scrolling */}
      <div className={`fixed ${showStickyFooter ? 'bottom-0' : '-bottom-full'} left-0 right-0 bg-white border-t border-gray-300 shadow-2xl py-4 px-4 transition-all duration-500 z-50`}>
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-center sm:text-left">
              <h3 className="font-bold text-lg text-primary">
                {locale === 'ar' ? 'مستعد لبدء مشروعك؟' : 'Ready to start your project?'}
              </h3>
              <p className="text-gray-600 text-sm">
                {locale === 'ar' ? 'تواصل معي الآن' : 'Get in touch now'}
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3">
              <Link 
                href={`/${locale}/portfolio`} 
                className="bg-accent text-white px-8 py-3 rounded-lg font-semibold hover:bg-yellow-600 transition-colors text-center min-w-[160px]"
              >
                {t.hero.viewWork}
              </Link>
              <Link 
                href={`/${locale}/contact`} 
                className="border-2 border-primary text-primary px-8 py-3 rounded-lg font-semibold hover:bg-primary hover:text-white transition-colors text-center min-w-[160px]"
              >
                {t.hero.contactMe}
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section with another CTA */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold text-primary mb-8">
            {locale === 'ar' ? 'لنبدأ العمل معاً' : "Let's work together"}
          </h3>
          <p className="text-xl text-text mb-10 max-w-2xl mx-auto">
            {locale === 'ar' 
              ? 'أحتاج إلى مشروع ويب مخصص أو استشارة؟' 
              : 'Need a custom web project or consultation?'}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href={`/${locale}/portfolio`} 
              className="bg-accent text-white px-10 py-4 rounded-lg font-semibold hover:bg-yellow-600 transition-colors text-lg"
            >
              {t.hero.viewWork}
            </Link>
            <Link 
              href={`/${locale}/contact`} 
              className="border-2 border-primary text-primary px-10 py-4 rounded-lg font-semibold hover:bg-primary hover:text-white transition-colors text-lg"
            >
              {t.hero.contactMe}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
