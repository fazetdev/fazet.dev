"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import TimeZoneDisplay from "@/app/components/TimeZoneDisplay";

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
      title: "Book Your Consultation",
      subtitle: "Premium Web Solutions for Gulf Business Leaders",
      heroSubtitle: "Schedule at your convenience across multiple time zones",
      
      // Timezone Section
      timezoneTitle: "Your Time Zone",
      timezoneSubtitle: "All times automatically adjust to your location",
      autoDetected: "Auto-detected",
      changeTimezone: "Change",
      
      // Booking Section
      bookingTitle: "Select Appointment Time",
      bookingSubtitle: "Available slots in your local time",
      calendlyNote: "Powered by Calendly • Secure & Professional",
      
      // Contact Cards
      contactTitle: "Alternative Booking Methods",
      contactSubtitle: "Prefer to schedule another way?",
      emailCard: {
        title: "Email",
        description: "For detailed project discussions",
        action: "Send Proposal Request",
        icon: "✉️"
      },
      whatsappCard: {
        title: "WhatsApp",
        description: "Quick questions & urgent requests",
        action: "Message Directly",
        icon: "💬"
      },
      telegramCard: {
        title: "Telegram",
        description: "Ongoing project communication",
        action: "Start Chat",
        icon: "📱"
      },
      
      // Premium Guarantee
      guaranteeTitle: "Gulf Business Guarantee",
      guaranteeSubtitle: "Why Gulf clients choose us:",
      guarantees: [
        "🕒 Timezone-optimized scheduling",
        "🌙 Respect for Gulf business hours",
        "🤝 Dedicated Gulf account manager",
        "💼 Professional Arabic/English support",
        "⚡ 4-hour response time guarantee",
        "📅 Weekend appointments available"
      ],
      
      // Footer
      footerTitle: "Premium Service Notice",
      footerText: "All consultations include pre-meeting preparation, detailed follow-up notes, and actionable next steps. Serving Gulf clients since 2023.",
      
      // Navigation
      nav: {
        home: "Home",
        services: "Services",
        portfolio: "Portfolio",
        about: "About",
        contact: "Contact",
        book: "Book"
      },
      
      // CTAs
      ctaBook: "Secure Your Slot",
      ctaViewContact: "View Contact Page",
      backToHome: "← Back to Home"
    },
    ar: {
      title: "احجز استشارتك",
      subtitle: "حلول ويب متميزة لقادة الأعمال في الخليج",
      heroSubtitle: "جدولة في الوقت المناسب لك عبر مناطق زمنية متعددة",
      
      // Timezone Section
      timezoneTitle: "منطقتك الزمنية",
      timezoneSubtitle: "جميع الأوقات تتكيف تلقائياً مع موقعك",
      autoDetected: "تم الكشف تلقائياً",
      changeTimezone: "تغيير",
      
      // Booking Section
      bookingTitle: "اختر وقت الموعد",
      bookingSubtitle: "المواعيد المتاحة بالتوقيت المحلي الخاص بك",
      calendlyNote: "مشغل بواسطة Calendly • آمن ومهني",
      
      // Contact Cards
      contactTitle: "طرق الحجز البديلة",
      contactSubtitle: "تفضل جدولة بطريقة أخرى؟",
      emailCard: {
        title: "البريد الإلكتروني",
        description: "لمناقشات المشاريع التفصيلية",
        action: "إرسال طلب عرض",
        icon: "✉️"
      },
      whatsappCard: {
        title: "واتساب",
        description: "الأسئلة السريعة والطلبات العاجلة",
        action: "مراسلة مباشرة",
        icon: "💬"
      },
      telegramCard: {
        title: "تيليجرام",
        description: "تواصل مستمر للمشروع",
        action: "بدء محادثة",
        icon: "📱"
      },
      
      // Premium Guarantee
      guaranteeTitle: "ضمان أعمال الخليج",
      guaranteeSubtitle: "لماذا يختارنا عملاء الخليج:",
      guarantees: [
        "🕒 جدولة مُحسّنة حسب المنطقة الزمنية",
        "🌙 احترام ساعات العمل في الخليج",
        "🤝 مدير حسابات مخصص للخليج",
        "💼 دعم مهني عربي/إنجليزي",
        "⚡ ضمان رد في غضون 4 ساعات",
        "📅 مواعيد متاحة في عطلة نهاية الأسبوع"
      ],
      
      // Footer
      footerTitle: "إشعار الخدمة المتميزة",
      footerText: "تشمل جميع الاستشارات التحضير المسبق للاجتماع، ومذكرات متابعة مفصلة، وخطوات عملية قابلة للتنفيذ. نخدم عملاء الخليج منذ 2023.",
      
      // Navigation
      nav: {
        home: "الرئيسية",
        services: "الخدمات",
        portfolio: "الأعمال",
        about: "عني",
        contact: "اتصل",
        book: "احجز"
      },
      
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
      {/* Premium Header */}
      <header className="bg-white shadow-lg border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link href={`/${locale}`} className="flex items-center">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-lg flex items-center justify-center mr-3">
                <span className="text-white font-bold">F</span>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                Faruk Aminu
              </span>
            </Link>
            
            <div className="flex items-center space-x-4 rtl:space-x-reverse">
              <div className="hidden md:flex items-center space-x-2 rtl:space-x-reverse bg-blue-50 px-3 py-1.5 rounded-full">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                <span className="text-sm font-medium text-blue-700">Available Now</span>
              </div>
              <div className="flex space-x-2 rtl:space-x-reverse">
                <Link href="/en/book" className={`px-3 py-1 rounded-lg text-sm font-medium ${locale === 'en' ? 'bg-blue-600 text-white' : 'text-gray-600 hover:text-blue-600'}`}>
                  EN
                </Link>
                <Link href="/ar/book" className={`px-3 py-1 rounded-lg text-sm font-medium ${locale === 'ar' ? 'bg-blue-600 text-white' : 'text-gray-600 hover:text-blue-600'}`}>
                  AR
                </Link>
              </div>
            </div>
          </div>
          
          <nav className="flex space-x-8 rtl:space-x-reverse py-3 border-t border-gray-100">
            <Link href={`/${locale}`} className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              {t.nav.home}
            </Link>
            <Link href={`/${locale}/services`} className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              {t.nav.services}
            </Link>
            <Link href={`/${locale}/portfolio`} className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              {t.nav.portfolio}
            </Link>
            <Link href={`/${locale}/about`} className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              {t.nav.about}
            </Link>
            <Link href={`/${locale}/contact`} className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              {t.nav.contact}
            </Link>
            <Link href={`/${locale}/book`} className="text-blue-600 font-semibold relative group">
              {t.nav.book}
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform"></span>
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
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
            
            {/* Premium Badge */}
            <div className="inline-flex items-center space-x-2 rtl:space-x-reverse bg-gradient-to-r from-blue-50 to-cyan-50 px-6 py-3 rounded-full border border-blue-200 mb-12">
              <span className="text-blue-600">🌟</span>
              <span className="font-medium text-gray-800">Premium Gulf Business Service</span>
            </div>
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
              <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-8 border-2 border-dashed border-gray-300 min-h-[500px] flex flex-col items-center justify-center">
                <div className="text-center max-w-md mx-auto">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-2xl text-white">📅</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Professional Booking Calendar</h3>
                  <p className="text-gray-600 mb-6">
                    Connect your Calendly, Cal.com, or custom booking system to display available time slots.
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

          {/* Right Column - Contact Cards & Guarantee */}
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

            {/* Premium Guarantee Section */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl shadow-2xl p-6 text-white">
              <div className="mb-6">
                <div className="flex items-center mb-3">
                  <span className="text-xl mr-2">🌟</span>
                  <h2 className="text-2xl font-bold">{t.guaranteeTitle}</h2>
                </div>
                <p className="text-gray-300">{t.guaranteeSubtitle}</p>
              </div>
              
              <ul className="space-y-3">
                {t.guarantees.map((guarantee, index) => (
                  <li key={index} className="flex items-start">
                    <span className="mr-3 rtl:mr-0 rtl:ml-3 mt-1">•</span>
                    <span className="text-gray-200">{guarantee}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-8 pt-6 border-t border-gray-700">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-gradient-to-r from-yellow-500 to-orange-400 rounded-full flex items-center justify-center mr-3">
                    <span className="text-sm">✓</span>
                  </div>
                  <span className="text-sm text-gray-300">Gulf Business Certified Service</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Notice */}
        <div className="mt-12 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl border border-blue-200 p-8">
          <div className="flex items-start">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mr-4 rtl:mr-0 rtl:ml-4 flex-shrink-0">
              <span className="text-blue-600 text-xl">ℹ️</span>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{t.footerTitle}</h3>
              <p className="text-gray-700 leading-relaxed">
                {t.footerText}
              </p>
            </div>
          </div>
          
          <div className="mt-6 flex justify-between items-center pt-6 border-t border-blue-200">
            <Link 
              href={`/${locale}`}
              className="text-blue-600 hover:text-blue-800 font-medium"
            >
              {t.backToHome}
            </Link>
            <div className="text-sm text-gray-500">
              © {new Date().getFullYear()} Faruk Aminu. All rights reserved.
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}