"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Contact({ params }) {
  const locale = params?.slug?.[0] || "en";

  const [currentTime, setCurrentTime] = useState("");
  const [availability, setAvailability] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      
      // Format Kano time
      const kanoTime = now.toLocaleTimeString('en-US', {
        timeZone: 'Africa/Lagos',
        hour12: true,
        hour: 'numeric',
        minute: '2-digit'
      });
      setCurrentTime(kanoTime);
      
      // Check availability
      const kanoHour = now.toLocaleTimeString('en-US', {
        timeZone: 'Africa/Lagos',
        hour: 'numeric',
        hour12: false
      });
      const kanoHourNum = parseInt(kanoHour);
      const isBusinessHours = kanoHourNum >= 9 && kanoHourNum < 17;
      
      setAvailability(isBusinessHours ? '🟢 Available Now' : '⏰ Outside Business Hours');
    };

    updateTime();
    const interval = setInterval(updateTime, 30000); // Update every 30 seconds
    return () => clearInterval(interval);
  }, []);

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
        about: "About",
        book: "Book Appointment"
      },
      contacts: {
        email: "fazetdev@gmail.com",
        linkedin: "https://linkedin.com/in/faruk-bashir-aminu",
        github: "https://github.com/fazetdev",
        whatsapp: "https://wa.me/2347982921105",
        telegram: "https://t.me/fazetdev",
        location: "Kano, Nigeria"
      },
      availability: {
        title: "Current Status",
        kanoTime: "Kano, Nigeria",
        businessHours: "Business Hours",
        hours: "9:00 AM - 5:00 PM (WAT)",
        gulfHours: "11:00 AM - 7:00 PM (GST)",
        bookNow: "Book Appointment",
        viewAllTimes: "View all time zones"
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
        about: "عني",
        book: "احجز موعد"
      },
      contacts: {
        email: "fazetdev@gmail.com",
        linkedin: "https://linkedin.com/in/faruk-bashir-aminu",
        github: "https://github.com/fazetdev",
        whatsapp: "https://wa.me/2347982921105",
        telegram: "https://t.me/fazetdev",
        location: "كانو، نيجيريا"
      },
      availability: {
        title: "الحالة الحالية",
        kanoTime: "كانو، نيجيريا",
        businessHours: "ساعات العمل",
        hours: "٩:٠٠ ص - ٥:٠٠ م (توقيت غرب أفريقيا)",
        gulfHours: "١١:٠٠ ص - ٧:٠٠ م (توقيت الخليج)",
        bookNow: "احجز موعد",
        viewAllTimes: "عرض جميع المناطق الزمنية"
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
          <Link href={`/${locale}/book`} className="text-text hover:text-primary">{t.labels.book}</Link>
        </nav>
      </header>

      {/* Contact Section */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          {/* Title */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">{t.title}</h1>
            <p className="text-xl text-text">{t.subtitle}</p>
          </div>

          {/* Availability Card */}
          <div className="mb-10 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-5 border border-blue-200 shadow-sm">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-center mb-2">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                    <span className="text-blue-600">🕒</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">{t.availability.title}</h3>
                    <div className="flex items-center mt-1">
                      <span className={`text-sm font-medium px-2 py-1 rounded-full ${availability.includes('Available') ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                        {availability}
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="ml-11 space-y-2">
                  <div className="flex items-center text-sm text-gray-600">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                    <span>{t.availability.kanoTime}: {currentTime} (WAT)</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                    <span>{t.availability.businessHours}: {t.availability.hours}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                    <span>{t.availability.gulfHours}</span>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col gap-2">
                <Link 
                  href={`/${locale}/book`}
                  className="bg-primary hover:bg-primary-dark text-white px-5 py-2.5 rounded-lg font-medium text-center transition-colors whitespace-nowrap"
                >
                  {t.availability.bookNow}
                </Link>
                <Link 
                  href={`/${locale}/book`}
                  className="text-primary hover:text-primary-dark text-sm font-medium text-center hover:underline"
                >
                  {t.availability.viewAllTimes} →
                </Link>
              </div>
            </div>
          </div>

          {/* Contact Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200 space-y-4">
              <h3 className="font-semibold text-gray-800 text-lg mb-3">Professional & Social</h3>
              <div className="space-y-3">
                <div>
                  <p className="font-medium text-gray-700">{t.labels.email}:</p>
                  <a href={`mailto:${t.contacts.email}`} className="text-accent hover:underline">{t.contacts.email}</a>
                </div>
                <div>
                  <p className="font-medium text-gray-700">{t.labels.linkedin}:</p>
                  <a href={t.contacts.linkedin} target="_blank" className="text-accent hover:underline">Faruk Bashir Aminu</a>
                </div>
                <div>
                  <p className="font-medium text-gray-700">{t.labels.github}:</p>
                  <a href={t.contacts.github} target="_blank" className="text-accent hover:underline">fazetdev</a>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200 space-y-4">
              <h3 className="font-semibold text-gray-800 text-lg mb-3">Direct Contact</h3>
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
        </div>
      </section>
    </div>
  );
}