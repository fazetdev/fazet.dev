'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { HiMail, HiPhone, HiGlobe } from 'react-icons/hi';

export default function Footer({ locale, t }) {
  const [showFooter, setShowFooter] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Show footer when scrolling down, hide when scrolling up
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setShowFooter(true); // Show when scrolling down
      } else if (currentScrollY < lastScrollY) {
        setShowFooter(false); // Hide when scrolling up
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const content = {
    en: {
      title: "Let's Build Something Great",
      subtitle: "Ready to start your web project?",
      viewWork: "View My Work",
      contactMe: "Contact Me",
      quickLinks: "Quick Links",
      services: "Services",
      portfolio: "Portfolio",
      about: "About",
      contact: "Contact",
      book: "Book",
      connect: "Connect",
      email: "fazetdev@gmail.com",
      phone: "+234 798 292 1105",
      location: "Kano, Nigeria",
      availability: "Available for new projects",
      copyright: "© {year} Faruk Bashir Aminu. All rights reserved.",
      footerNote: "Gulf-focused web solutions since 2021"
    },
    ar: {
      title: "لنبني شيئاً رائعاً",
      subtitle: "مستعد لبدء مشروعك على الويب؟",
      viewWork: "شاهد أعمالي",
      contactMe: "اتصل بي",
      quickLinks: "روابط سريعة",
      services: "الخدمات",
      portfolio: "الأعمال",
      about: "عني",
      contact: "اتصل",
      book: "الحجز",
      connect: "تواصل",
      email: "fazetdev@gmail.com",
      phone: "+٢٣٤ ٧٩٨ ٢٩٢ ١١٠٥",
      location: "كانو، نيجيريا",
      availability: "متاح لمشاريع جديدة",
      copyright: "© {year} فاروق بشير أمينو. جميع الحقوق محفوظة.",
      footerNote: "حلول ويب موجهة للخليج منذ ٢٠٢١"
    }
  };

  const footerContent = content[locale] || content.en;

  const currentYear = new Date().getFullYear();

  return (
    <>
      {/* Main Footer (always visible at bottom) */}
      <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white mt-auto">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Left Column - Brand & Contact */}
            <div>
              <h3 className="text-2xl font-bold mb-4">Faruk Bashir Aminu</h3>
              <p className="text-gray-300 mb-4">{footerContent.footerNote}</p>
              <div className="space-y-3">
                <div className="flex items-center">
                  <HiMail className="mr-3 text-accent" />
                  <a href={`mailto:${footerContent.email}`} className="text-gray-300 hover:text-white">
                    {footerContent.email}
                  </a>
                </div>
                <div className="flex items-center">
                  <HiPhone className="mr-3 text-accent" />
                  <a href={`https://wa.me/2347982921105`} className="text-gray-300 hover:text-white">
                    {footerContent.phone}
                  </a>
                </div>
                <div className="flex items-center">
                  <HiGlobe className="mr-3 text-accent" />
                  <span className="text-gray-300">{footerContent.location}</span>
                </div>
              </div>
            </div>

            {/* Middle Column - Quick Links */}
            <div>
              <h4 className="text-xl font-bold mb-4">{footerContent.quickLinks}</h4>
              <ul className="space-y-2">
                <li><Link href={`/${locale}`} className="text-gray-300 hover:text-white">{locale === 'ar' ? 'الرئيسية' : 'Home'}</Link></li>
                <li><Link href={`/${locale}/services`} className="text-gray-300 hover:text-white">{footerContent.services}</Link></li>
                <li><Link href={`/${locale}/portfolio`} className="text-gray-300 hover:text-white">{footerContent.portfolio}</Link></li>
                <li><Link href={`/${locale}/about`} className="text-gray-300 hover:text-white">{footerContent.about}</Link></li>
                <li><Link href={`/${locale}/contact`} className="text-gray-300 hover:text-white">{footerContent.contact}</Link></li>
                <li><Link href={`/${locale}/book`} className="text-gray-300 hover:text-white">{footerContent.book}</Link></li>
              </ul>
            </div>

            {/* Right Column - CTA */}
            <div>
              <h4 className="text-xl font-bold mb-4">{footerContent.title}</h4>
              <p className="text-gray-300 mb-6">{footerContent.subtitle}</p>
              <div className="flex flex-col space-y-3">
                <Link 
                  href={`/${locale}/portfolio`}
                  className="bg-accent hover:bg-yellow-600 text-white px-6 py-3 rounded-lg font-semibold text-center transition-colors"
                >
                  {footerContent.viewWork}
                </Link>
                <Link 
                  href={`/${locale}/contact`}
                  className="border-2 border-white hover:bg-white hover:text-gray-900 text-white px-6 py-3 rounded-lg font-semibold text-center transition-colors"
                >
                  {footerContent.contactMe}
                </Link>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-6 text-center">
            <p className="text-gray-400">
              {footerContent.copyright.replace('{year}', currentYear)}
            </p>
            <p className="text-gray-500 text-sm mt-2">
              {footerContent.availability}
            </p>
          </div>
        </div>
      </footer>

      {/* Sticky CTA Footer (appears/disappears on scroll) */}
      <div className={`fixed ${showFooter ? 'bottom-0' : '-bottom-full'} left-0 right-0 bg-gradient-to-r from-primary to-primary-dark text-white shadow-2xl transition-all duration-500 z-50`}>
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-center sm:text-left">
              <h3 className="font-bold text-lg">{footerContent.title}</h3>
              <p className="text-sm opacity-90">{footerContent.subtitle}</p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3">
              <Link 
                href={`/${locale}/portfolio`}
                className="bg-white text-primary hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold text-center transition-colors min-w-[150px]"
              >
                {footerContent.viewWork}
              </Link>
              <Link 
                href={`/${locale}/contact`}
                className="border-2 border-white hover:bg-white/10 px-6 py-3 rounded-lg font-semibold text-center transition-colors min-w-[150px]"
              >
                {footerContent.contactMe}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
