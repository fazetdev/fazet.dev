"use client";

import Link from "next/link";
import TimeZoneDisplay from "../../components/TimeZoneDisplay";

export default function Contact({ params }) {
  const locale = params?.slug?.[0] || "en";

  const content = {
    en: {
      title: "Contact Faruk Aminu",
      subtitle: "Professional web solutions for Gulf businesses",
      labels: {
        email: "Email",
        linkedin: "LinkedIn",
        github: "GitHub",
        whatsapp: "WhatsApp",
        telegram: "Telegram",
        location: "Location",
        contactMe: "Contact Me",
        home: "Home",
        services: "Services",
        portfolio: "Portfolio",
        about: "About"
      },
      contacts: {
        email: "fazetdev@gmail.com",
        linkedin: "https://linkedin.com/in/faruk-bashir-aminu",
        github: "https://github.com/fazetdev",
        whatsapp: "https://wa.me/2347982921105",
        telegram: "https://t.me/fazetdev",
        location: "Kano, Nigeria"
      }
    },
    ar: {
      title: "اتصل بفرّوق أمينو",
      subtitle: "حلول ويب مهنية لعملاء الخليج",
      labels: {
        email: "البريد الإلكتروني",
        linkedin: "لينكدإن",
        github: "GitHub",
        whatsapp: "واتساب",
        telegram: "تيليجرام",
        location: "الموقع",
        contactMe: "تواصل معي",
        home: "الرئيسية",
        services: "الخدمات",
        portfolio: "الأعمال",
        about: "عني"
      },
      contacts: {
        email: "fazetdev@gmail.com",
        linkedin: "https://linkedin.com/in/faruk-bashir-aminu",
        github: "https://github.com/fazetdev",
        whatsapp: "https://wa.me/2347982921105",
        telegram: "https://t.me/fazetdev",
        location: "كانو، نيجيريا"
      }
    }
  };

  const t = content[locale] || content.en;

  return (
    <div
      className={`min-h-screen bg-background ${locale === "ar" ? "font-arabic" : "font-english"}`}
      dir={locale === "ar" ? "rtl" : "ltr"}
    >
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <Link href={`/${locale}`} className="text-xl font-bold text-primary">Faruk Aminu</Link>
          <div className="flex space-x-4 rtl:space-x-reverse">
            <Link href="/en/contact" className="text-text hover:text-primary">EN</Link>
            <span className="text-gray-300">|</span>
            <Link href="/ar/contact" className="text-text hover:text-primary">AR</Link>
          </div>
        </div>
        <nav className="max-w-7xl mx-auto px-4 py-2 flex space-x-6 rtl:space-x-reverse text-sm">
          <Link href={`/${locale}`} className="text-text hover:text-primary">{t.labels.home}</Link>
          <Link href={`/${locale}/services`} className="text-text hover:text-primary">{t.labels.services}</Link>
          <Link href={`/${locale}/portfolio`} className="text-text hover:text-primary">{t.labels.portfolio}</Link>
          <Link href={`/${locale}/about`} className="text-text hover:text-primary">{t.labels.about}</Link>
          <Link href={`/${locale}/contact`} className="text-primary font-semibold">{t.labels.contactMe}</Link>
        </nav>
      </header>

      {/* Contact Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">{t.title}</h1>
            <p className="text-xl text-text">{t.subtitle}</p>
          </div>

          {/* Time Zone Display Component */}
          <TimeZoneDisplay locale={locale} />

          {/* Contact Info Cards */}
          <div className="mt-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200 space-y-6">
                <h3 className="text-2xl font-bold text-gray-800 border-b pb-3">Professional Profiles</h3>
                <div className="space-y-4">
                  <div className="flex items-center p-3 hover:bg-blue-50 rounded-lg transition">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                      <span className="text-blue-600 font-bold">✉️</span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-700">{t.labels.email}</p>
                      <a href={`mailto:${t.contacts.email}`} className="text-accent hover:underline text-lg">{t.contacts.email}</a>
                    </div>
                  </div>
                  
                  <div className="flex items-center p-3 hover:bg-blue-50 rounded-lg transition">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                      <span className="text-blue-600 font-bold">💼</span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-700">{t.labels.linkedin}</p>
                      <a href={t.contacts.linkedin} target="_blank" className="text-accent hover:underline text-lg">Faruk Bashir Aminu</a>
                    </div>
                  </div>
                  
                  <div className="flex items-center p-3 hover:bg-blue-50 rounded-lg transition">
                    <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center mr-3">
                      <span className="text-gray-600 font-bold">👨‍💻</span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-700">{t.labels.github}</p>
                      <a href={t.contacts.github} target="_blank" className="text-accent hover:underline text-lg">fazetdev</a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200 space-y-6">
                <h3 className="text-2xl font-bold text-gray-800 border-b pb-3">Direct Communication</h3>
                <div className="space-y-4">
                  <div className="flex items-center p-3 hover:bg-green-50 rounded-lg transition">
                    <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mr-3">
                      <span className="text-green-600 font-bold">💬</span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-700">{t.labels.whatsapp}</p>
                      <a href={t.contacts.whatsapp} className="text-accent hover:underline text-lg">+234 798 292 1105</a>
                      <p className="text-sm text-gray-500 mt-1">Fastest response during business hours</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center p-3 hover:bg-blue-50 rounded-lg transition">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                      <span className="text-blue-600 font-bold">📱</span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-700">{t.labels.telegram}</p>
                      <a href={t.contacts.telegram} className="text-accent hover:underline text-lg">@fazetdev</a>
                    </div>
                  </div>
                  
                  <div className="flex items-center p-3 hover:bg-gray-50 rounded-lg transition">
                    <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center mr-3">
                      <span className="text-gray-600 font-bold">📍</span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-700">{t.labels.location}</p>
                      <p className="text-lg text-gray-800">{t.contacts.location}</p>
                      <p className="text-sm text-gray-500 mt-1">Serving Gulf clients remotely</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
