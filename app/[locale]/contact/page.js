'use client';

import { useState } from "react";
import Link from "next/link";

export default function Contact({ params }) {
  const locale = params?.slug?.[0] || "en";

  const content = {
    en: {
      nav: {
        home: "Home",
        services: "Services",
        portfolio: "Portfolio",
        about: "About",
        contact: "Contact",
        book: "Book"
      },
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
        linkedin: "https://www.linkedin.com/in/faruk-bashir-aminu-65b30b36b",
        github: "https://github.com/fazetdev",
        whatsapp: "https://wa.me/2347082921105",
        telegram: "https://t.me/fazetdev",
        location: "Kano, Nigeria"
      },
      ctaBooking: "Go to booking page",
    },
    ar: {
      nav: {
        home: "الرئيسية",
        services: "الخدمات",
        portfolio: "الأعمال",
        about: "عني",
        contact: "اتصل",
        book: "الحجز"
      },
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
        linkedin: "https://www.linkedin.com/in/faruk-bashir-aminu-65b30b36b",
        github: "https://github.com/fazetdev",
        whatsapp: "https://wa.me/2347082921105",
        telegram: "https://t.me/fazetdev",
        location: "كانو، نيجيريا"
      },
      ctaBooking: "اذهب إلى صفحة الحجز",
    }
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
              <Link href={`/${locale}`} className="hover:text-primary-600">
                {t.nav.home}
              </Link>
              <Link href={`/${locale}/services`} className="hover:text-primary-600">
                {t.nav.services}
              </Link>
              <Link href={`/${locale}/portfolio`} className="hover:text-primary-600">
                {t.nav.portfolio}
              </Link>
              <Link href={`/${locale}/about`} className="hover:text-primary-600">
                {t.nav.about}
              </Link>
              <Link href={`/${locale}/contact`} className="text-primary-700 font-semibold">
                {t.nav.contact}
              </Link>
              <Link href={`/${locale}/book`} className="hover:text-primary-600">
                {t.nav.book}
              </Link>
            </nav>

            <div className="flex items-center gap-3 text-sm">
              <Link href={`/en/contact`} className="px-2 py-1 rounded hover:bg-gray-100">
                EN
              </Link>
              <span className="text-gray-300">|</span>
              <Link href={`/ar/contact`} className="px-2 py-1 rounded hover:bg-gray-100">
                AR
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Page content */}
      <main className="max-w-6xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-700">{t.title}</h1>
          <p className="mt-4 text-lg text-neutral-600 max-w-2xl mx-auto">{t.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Professional Card */}
          <div className="border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow">
            <h3 className="font-semibold text-gray-800 text-lg mb-6 border-b pb-3">
              {locale === "ar" ? "مهني واجتماعي" : "Professional & Social"}
            </h3>
            <div className="space-y-6">
              {Object.entries(t.contacts).slice(0, 3).map(([key, val]) => (
                <div key={key}>
                  <p className="font-medium text-gray-700 mb-1">{t.labels[key]}:</p>
                  <a href={key === 'email' ? `mailto:${val}` : val} target="_blank" rel="noopener noreferrer" className="text-primary hover:text-blue-700 hover:underline flex items-center">
                    {val}
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Direct Contact Card */}
          <div className="border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow">
            <h3 className="font-semibold text-gray-800 text-lg mb-6 border-b pb-3">
              {locale === "ar" ? "اتصال مباشر" : "Direct Contact"}
            </h3>
            <div className="space-y-6">
              {Object.entries(t.contacts).slice(3).map(([key, val]) => (
                <div key={key}>
                  <p className="font-medium text-gray-700 mb-1">{t.labels[key]}:</p>
                  <a href={val} target="_blank" rel="noopener noreferrer" className="text-primary hover:text-blue-700 hover:underline flex items-center">
                    {val}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Booking CTA */}
        <div className="mt-12 text-center">
          <Link
            href={`/${locale}/book`}
            className="inline-flex items-center bg-accent text-white px-6 py-3 rounded-lg font-semibold hover:brightness-105"
          >
            {t.ctaBooking}
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-6 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Faruk Aminu. All rights reserved.
      </footer>
    </div>
  );
}
