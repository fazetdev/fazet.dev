'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { HiMail, HiCode, HiArrowRight } from 'react-icons/hi';

export default function Footer({ locale = 'en' }) {
  const [year] = useState(new Date().getFullYear());
  const [showSticky, setShowSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowSticky(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Clean, minimal translations
  const content = {
    en: {
      // Sticky CTA
      stickyTitle: "Interested in working together?",
      stickyAction: "Start a Conversation",
      
      // Main Footer
      brand: "Faruk Bashir Aminu",
      tagline: "Web Developer",
      contactTitle: "Connect",
      quickLinks: "Explore",
      services: "Services",
      portfolio: "Portfolio",
      about: "About",
      contact: "Contact",
      book: "Schedule",
      email: "fazetdev@gmail.com",
      github: "GitHub",
      availability: "Available for select projects",
      copyright: `© ${year} Faruk Bashir Aminu`,
      madeWith: "Built with Next.js & Tailwind",
      
      // CTA Section
      ctaTitle: "Have a project in mind?",
      ctaSubtitle: "Let's discuss how we can bring it to life",
      ctaButton1: "View Portfolio",
      ctaButton2: "Send Email"
    },
    ar: {
      // Sticky CTA
      stickyTitle: "مهتم بالعمل معاً؟",
      stickyAction: "ابدأ محادثة",
      
      // Main Footer
      brand: "فاروق بشير أمينو",
      tagline: "مطور ويب",
      contactTitle: "تواصل",
      quickLinks: "استكشف",
      services: "الخدمات",
      portfolio: "الأعمال",
      about: "عني",
      contact: "اتصل",
      book: "جدولة",
      email: "fazetdev@gmail.com",
      github: "GitHub",
      availability: "متاح لمشاريع مختارة",
      copyright: `© ${year} فاروق بشير أمينو`,
      madeWith: "مبني بـ Next.js & Tailwind",
      
      // CTA Section
      ctaTitle: "هل لديك مشروع في الذهن؟",
      ctaSubtitle: "لنناقش كيف يمكننا إحيائه",
      ctaButton1: "عرض الأعمال",
      ctaButton2: "إرسال بريد"
    }
  };

  const t = content[locale] || content.en;

  return (
    <>
      {/* Simple Sticky CTA - Only appears after scrolling */}
      {showSticky && (
        <div className="fixed bottom-6 right-6 bg-primary text-white rounded-full shadow-xl z-50 animate-fade-in">
          <Link 
            href={`/${locale}/contact`}
            className="flex items-center px-6 py-3 font-medium hover:bg-primary-dark transition-colors rounded-full"
          >
            <HiArrowRight className="ml-2" />
            {t.stickyAction}
          </Link>
        </div>
      )}

      {/* Main Footer */}
      <footer className="bg-gray-50 border-t border-gray-200 mt-20">
        {/* CTA Section */}
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">{t.ctaTitle}</h3>
            <p className="text-gray-600 max-w-2xl mx-auto mb-8">{t.ctaSubtitle}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href={`/${locale}/portfolio`}
                className="bg-gray-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-black transition-colors inline-flex items-center justify-center"
              >
                {t.ctaButton1}
              </Link>
              <a 
                href="mailto:fazetdev@gmail.com"
                className="border-2 border-gray-900 text-gray-900 px-6 py-3 rounded-lg font-medium hover:bg-gray-900 hover:text-white transition-colors inline-flex items-center justify-center"
              >
                <HiMail className="mr-2" />
                {t.ctaButton2}
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-gray-300">
            {/* Brand */}
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">{t.brand}</h3>
              <p className="text-gray-600 mb-4">{t.tagline}</p>
              <p className="text-sm text-gray-500">{t.availability}</p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">{t.quickLinks}</h4>
              <ul className="space-y-2">
                <li><Link href={`/${locale}/services`} className="text-gray-600 hover:text-primary transition-colors">{t.services}</Link></li>
                <li><Link href={`/${locale}/portfolio`} className="text-gray-600 hover:text-primary transition-colors">{t.portfolio}</Link></li>
                <li><Link href={`/${locale}/about`} className="text-gray-600 hover:text-primary transition-colors">{t.about}</Link></li>
                <li><Link href={`/${locale}/book`} className="text-gray-600 hover:text-primary transition-colors">{t.book}</Link></li>
              </ul>
            </div>

            {/* Contact - Only Email & GitHub */}
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">{t.contactTitle}</h4>
              <div className="space-y-3">
                <a 
                  href="mailto:fazetdev@gmail.com"
                  className="flex items-center text-gray-600 hover:text-primary transition-colors"
                >
                  <HiMail className="mr-2" />
                  {t.email}
                </a>
                <a 
                  href="https://github.com/fazetdev"
                  target="_blank"
                  className="flex items-center text-gray-600 hover:text-primary transition-colors"
                >
                  <HiCode className="mr-2" />
                  {t.github}
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Copyright */}
          <div className="mt-8 pt-6 border-t border-gray-300 text-center">
            <p className="text-gray-500 text-sm">
              {t.copyright} • {t.madeWith}
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
