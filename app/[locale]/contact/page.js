"use client";

import Link from "next/link";

export default function Contact({ params }) {
  const locale = params?.slug?.[0] || "en";

  const content = {
    en: {
      title: "Contact Faruk Bashir Aminu",
      subtitle: "Professional web solutions for Gulf businesses",
      labels: {
        email: "Email",
        linkedin: "LinkedIn",
        github: "GitHub",
        whatsapp: "WhatsApp",
        telegram: "Telegram",
        location: "Location"
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
      title: "اتصل بفرّوق بشير أمينو",
      subtitle: "حلول ويب مهنية لعملاء الخليج",
      labels: {
        email: "البريد الإلكتروني",
        linkedin: "لينكدإن",
        github: "GitHub",
        whatsapp: "واتساب",
        telegram: "تيليجرام",
        location: "الموقع"
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
      {/* Contact Section - NO DUPLICATE HEADER */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          {/* Title */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">{t.title}</h1>
            <p className="text-xl text-text">{t.subtitle}</p>
          </div>

          {/* Contact Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200 space-y-4">
              <h3 className="font-semibold text-gray-800 text-lg mb-3">
                {locale === "ar" ? "مهني واجتماعي" : "Professional & Social"}
              </h3>
              <div className="space-y-3">
                <div>
                  <p className="font-medium text-gray-700">{t.labels.email}:</p>
                  <a href={`mailto:${t.contacts.email}`} className="text-accent hover:underline">{t.contacts.email}</a>
                </div>
                <div>
                  <p className="font-medium text-gray-700">{t.labels.linkedin}:</p>
                  <a href={t.contacts.linkedin} target="_blank" className="text-accent hover:underline">
                    {locale === "ar" ? "فرّوق بشير أمينو" : "Faruk Bashir Aminu"}
                  </a>
                </div>
                <div>
                  <p className="font-medium text-gray-700">{t.labels.github}:</p>
                  <a href={t.contacts.github} target="_blank" className="text-accent hover:underline">fazetdev</a>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200 space-y-4">
              <h3 className="font-semibold text-gray-800 text-lg mb-3">
                {locale === "ar" ? "اتصال مباشر" : "Direct Contact"}
              </h3>
              <div className="space-y-3">
                <div>
                  <p className="font-medium text-gray-700">{t.labels.whatsapp}:</p>
                  <a href={t.contacts.whatsapp} target="_blank" className="text-accent hover:underline">+234 798 292 1105</a>
                </div>
                <div>
                  <p className="font-medium text-gray-700">{t.labels.telegram}:</p>
                  <a href={t.contacts.telegram} target="_blank" className="text-accent hover:underline">@fazetdev</a>
                </div>
                <div>
                  <p className="font-medium text-gray-700">{t.labels.location}:</p>
                  <p className="text-gray-600">{t.contacts.location}</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Simple note about booking */}
          <div className="mt-10 text-center text-gray-600">
            <p>
              {locale === "ar" 
                ? "للحصول على موعد، يرجى زيارة صفحة الحجز." 
                : "For appointments, please visit the booking page."}
            </p>
            <Link 
              href={`/${locale}/book`}
              className="inline-block mt-4 text-primary hover:underline font-medium"
            >
              {locale === "ar" ? "اذهب إلى صفحة الحجز →" : "Go to booking page →"}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
