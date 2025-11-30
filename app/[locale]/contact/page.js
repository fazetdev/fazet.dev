"use client";

import Link from "next/link";

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
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">{t.title}</h1>
          <p className="text-xl text-text mb-12">{t.subtitle}</p>

          {/* Contact Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200 space-y-3">
              <p><strong>{t.labels.email}:</strong> <a href={`mailto:${t.contacts.email}`} className="text-accent hover:underline">{t.contacts.email}</a></p>
              <p><strong>{t.labels.linkedin}:</strong> <a href={t.contacts.linkedin} target="_blank" className="text-accent hover:underline">Faruk Bashir Aminu</a></p>
              <p><strong>{t.labels.github}:</strong> <a href={t.contacts.github} target="_blank" className="text-accent hover:underline">fazetdev</a></p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200 space-y-3">
              <p><strong>{t.labels.whatsapp}:</strong> <a href={t.contacts.whatsapp} className="text-accent hover:underline">+234 798 292 1105</a></p>
              <p><strong>{t.labels.telegram}:</strong> <a href={t.contacts.telegram} className="text-accent hover:underline">@fazetdev</a></p>
              <p><strong>{t.labels.location}:</strong> {t.contacts.location}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
