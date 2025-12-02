"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import TimeZoneDisplay from "../../components/TimeZoneDisplay";

export default function Book({ params }) {
  const locale = params?.slug?.[0] || "en";

  const [userTimezone, setUserTimezone] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Detect user timezone
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
    setUserTimezone(tz);
    setIsLoading(false);
  }, []);

  const content = {
    en: {
      title: "Book My Services",
      subtitle: "Schedule a consultation for your web project",
      heroSubtitle: "Choose a time that works for you across different time zones",

      // Timezone Section
      timezoneTitle: "Your Time Zone",
      timezoneSubtitle: "Times adjust automatically to your location",
      autoDetected: "Auto-detected",

      // Booking Section
      bookingTitle: "Select Appointment Time",
      bookingSubtitle: "Available slots in your local time",
      calendlyNote: "Powered by Calendly • Secure & Simple",

      // Contact Cards
      contactTitle: "Other Ways to Contact Me",
      contactSubtitle: "Prefer to schedule another way?",
      emailCard: {
        title: "Email",
        description: "For detailed project discussions",
        action: "Send Email",
        icon: "✉️"
      },
      whatsappCard: {
        title: "WhatsApp",
        description: "Quick questions & urgent requests",
        action: "Message on WhatsApp",
        icon: "💬"
      },
      telegramCard: {
        title: "Telegram",
        description: "For ongoing communication",
        action: "Message on Telegram",
        icon: "📱"
      },

      // Services Info
      servicesTitle: "What to Expect",
      servicesSubtitle: "During our consultation:",
      services: [
        "📋 Project requirements discussion",
        "💡 Solution proposals and ideas",
        "⏱️ Timeline and pricing estimate",
        "🔧 Technical approach overview",
        "❓ Your questions answered"
      ],

      // Footer
      footerTitle: "Booking Information",
      footerText: "All consultations include preparation and follow-up notes. I've been helping clients with web projects since 2021.",

      // CTAs
      ctaBook: "Book Your Slot",
      ctaViewContact: "View Contact Page",
      backToHome: "← Back to Home"
    },
    ar: {
      title: "احجز خدماتي",
      subtitle: "جدولة استشارة لمشروعك على الويب",
      heroSubtitle: "اختر الوقت المناسب لك عبر المناطق الزمنية المختلفة",

      // Timezone Section
      timezoneTitle: "منطقتك الزمنية",
      timezoneSubtitle: "الأوقات تضبط تلقائياً حسب موقعك",
      autoDetected: "تم الكشف تلقائياً",

      // Booking Section
      bookingTitle: "اختر وقت الموعد",
      bookingSubtitle: "المواعيد المتاحة بالتوقيت المحلي الخاص بك",
      calendlyNote: "مشغل بواسطة Calendly • آمن وبسيط",

      // Contact Cards
      contactTitle: "طرق أخرى للاتصال بي",
      contactSubtitle: "تفضل جدولة بطريقة أخرى؟",
      emailCard: {
        title: "البريد الإلكتروني",
        description: "لمناقشات المشاريع التفصيلية",
        action: "إرسال بريد إلكتروني",
        icon: "✉️"
      },
      whatsappCard: {
        title: "واتساب",
        description: "الأسئلة السريعة والطلبات العاجلة",
        action: "مراسلة على واتساب",
        icon: "💬"
      },
      telegramCard: {
        title: "تيليجرام",
        description: "للتواصل المستمر",
        action: "مراسلة على تيليجرام",
        icon: "📱"
      },

      // Services Info
      servicesTitle: "ما يمكنك توقعه",
      servicesSubtitle: "خلال استشارتنا:",
      services: [
        "📋 مناقشة متطلبات المشروع",
        "💡 مقترحات وأفكار للحلول",
        "⏱️ تقدير المدة والسعر",
        "🔧 نظرة عامة على النهج التقني",
        "❓ الإجابة على أسئلتك"
      ],

      // Footer
      footerTitle: "معلومات الحجز",
      footerText: "تشمل جميع الاستشارات التحضير ومذكرات المتابعة. أساعد العملاء في مشاريع الويب منذ ٢٠٢١.",

      // CTAs
      ctaBook: "احجز موعدك",
      ctaViewContact: "عرض صفحة الاتصال",
      backToHome: "← العودة للرئيسية"
    }
  };

  const t = content[locale] || content.en;

  return (
    <div
      className={`min-h-screen bg-gradient-to-b from-gray-50 to-white ${locale === "ar" ? "font-arabic" : "font-english"}`}
      dir={locale === "ar" ? "rtl" : "ltr"}
    >
      {/* Hero Section - NO DUPLICATE HEADER */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              {t.title}
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
              {t.subtitle}
            </p>
            <p className="text-lg text-gray-500 mb-12 max-w-2xl mx-auto">
              {t.heroSubtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Timezone & Booking */}
          <div className="lg:col-span-2 space-y-8">
            {/* Timezone Badge */}
            <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">{t.timezoneTitle}</h2>
                  <p className="text-gray-600">{t.timezoneSubtitle}</p>
                </div>
                <div className="mt-4 md:mt-0">
                  {!isLoading && (
                    <div className="flex items-center space-x-3 rtl:space-x-reverse">
                      <div className="bg-gray-100 px-4 py-2 rounded-lg">
                        <span className="font-mono text-gray-800">{userTimezone}</span>
                      </div>
                      <span className="text-sm text-green-600 font-medium">{t.autoDetected}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Full TimeZoneDisplay Component */}
              <TimeZoneDisplay locale={locale} />
            </div>

            {/* Calendar Container */}
            <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-6">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">{t.bookingTitle}</h2>
                <p className="text-gray-600">{t.bookingSubtitle}</p>
              </div>

              {/* Calendly Widget */}
              <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-8 border-2 border-dashed border-gray-300 min-h-[400px] flex flex-col items-center justify-center">
                <div className="text-center max-w-md mx-auto">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-2xl text-white">📅</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Book Your Consultation</h3>
                  <p className="text-gray-600 mb-6">
                    Select a convenient time for your project discussion.
                  </p>
                  <div className="space-y-4">
                    <a 
                      href="https://calendly.com" 
                      target="_blank" 
                      className="block w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-4 rounded-xl font-semibold text-lg text-center transition-colors"
                    >
                      {t.ctaBook}
                    </a>
                    <p className="text-sm text-gray-500">
                      {t.calendlyNote}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Cards & Services Info */}
          <div className="space-y-8">
            {/* Contact Cards */}
            <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-6">
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">{t.contactTitle}</h2>
                <p className="text-gray-600">{t.contactSubtitle}</p>
              </div>

              <div className="space-y-4">
                {/* Email Card */}
                <div className="bg-gradient-to-r from-blue-50 to-blue-100 border border-blue-200 rounded-xl p-5 hover:border-blue-300 transition-all duration-300 hover:shadow-md">
                  <div className="flex items-start mb-4">
                    <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center mr-4 rtl:mr-0 rtl:ml-4">
                      <span className="text-xl">{t.emailCard.icon}</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 text-lg">{t.emailCard.title}</h3>
                      <p className="text-gray-600 text-sm mt-1">{t.emailCard.description}</p>
                    </div>
                  </div>
                  <a 
                    href="mailto:fazetdev@gmail.com"
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
                  >
                    {t.emailCard.action} →
                  </a>
                </div>

                {/* WhatsApp Card */}
                <div className="bg-gradient-to-r from-green-50 to-green-100 border border-green-200 rounded-xl p-5 hover:border-green-300 transition-all duration-300 hover:shadow-md">
                  <div className="flex items-start mb-4">
                    <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center mr-4 rtl:mr-0 rtl:ml-4">
                      <span className="text-xl">{t.whatsappCard.icon}</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 text-lg">{t.whatsappCard.title}</h3>
                      <p className="text-gray-600 text-sm mt-1">{t.whatsappCard.description}</p>
                    </div>
                  </div>
                  <a 
                    href="https://wa.me/2347982921105"
                    target="_blank"
                    className="inline-flex items-center text-green-600 hover:text-green-800 font-medium"
                  >
                    {t.whatsappCard.action} →
                  </a>
                </div>

                {/* Telegram Card */}
                <div className="bg-gradient-to-r from-purple-50 to-purple-100 border border-purple-200 rounded-xl p-5 hover:border-purple-300 transition-all duration-300 hover:shadow-md">
                  <div className="flex items-start mb-4">
                    <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center mr-4 rtl:mr-0 rtl:ml-4">
                      <span className="text-xl">{t.telegramCard.icon}</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 text-lg">{t.telegramCard.title}</h3>
                      <p className="text-gray-600 text-sm mt-1">{t.telegramCard.description}</p>
                    </div>
                  </div>
                  <a 
                    href="https://t.me/fazetdev"
                    target="_blank"
                    className="inline-flex items-center text-purple-600 hover:text-purple-800 font-medium"
                  >
                    {t.telegramCard.action} →
                  </a>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-200">
                <Link 
                  href={`/${locale}/contact`}
                  className="flex items-center justify-center text-gray-700 hover:text-blue-600 font-medium"
                >
                  {t.ctaViewContact} →
                </Link>
              </div>
            </div>

            {/* Services Info Section */}
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl shadow-xl p-6">
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">{t.servicesTitle}</h2>
                <p className="text-gray-600">{t.servicesSubtitle}</p>
              </div>

              <ul className="space-y-3">
                {t.services.map((service, index) => (
                  <li key={index} className="flex items-start">
                    <span className="mr-3 rtl:mr-0 rtl:ml-3 mt-1">{service.substring(0, 3)}</span>
                    <span className="text-gray-700">{service.substring(3)}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 pt-6 border-t border-gray-300">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full flex items-center justify-center mr-3">
                    <span className="text-sm text-white">✓</span>
                  </div>
                  <span className="text-sm text-gray-600">
                    {locale === "ar" ? "استشارة فردية مخصصة" : "Personalized one-on-one consultation"}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Notice */}
        <div className="mt-12 bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl border border-gray-300 p-8">
          <div className="flex items-start">
            <div className="w-12 h-12 bg-gray-200 rounded-xl flex items-center justify-center mr-4 rtl:mr-0 rtl:ml-4 flex-shrink-0">
              <span className="text-gray-600 text-xl">ℹ️</span>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{t.footerTitle}</h3>
              <p className="text-gray-700 leading-relaxed">
                {t.footerText}
              </p>
            </div>
          </div>

          <div className="mt-6 flex justify-between items-center pt-6 border-t border-gray-300">
            <Link 
              href={`/${locale}`}
              className="text-blue-600 hover:text-blue-800 font-medium"
            >
              {t.backToHome}
            </Link>
            <div className="text-sm text-gray-500">
              © {new Date().getFullYear()} Faruk Bashir Aminu.
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
