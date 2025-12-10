
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { HiMenu, HiX } from 'react-icons/hi';
import { usePathname } from 'next/navigation'; // RECOMMENDED: Use for path access

export default function Header({ locale, t }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);
  const pathname = usePathname(); // Get current path from hook

  useEffect(() => {
    setIsMounted(true);
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      // Close menu automatically if screen resizes to desktop size
      if (window.innerWidth >= 768) setIsOpen(false);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (!isMounted) {
    return (
      <header className="bg-white shadow-sm border-b border-gray-200" dir={locale === 'ar' ? 'rtl' : 'ltr'}>
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          {/* Use brand name from translations (if available), otherwise fallback */}
          <div className="text-xl font-bold text-primary">{t?.brand || "Fazet.dev"}</div>
          <div className="w-8 h-8"></div>
        </div>
      </header>
    );
  }

  const isDesktop = windowWidth >= 768;
  const isMobile = windowWidth < 768;
  const isRTL = locale === 'ar';

  const links = [
    { href: `/${locale}`, label: t.nav.home },
    { href: `/${locale}/services`, label: t.nav.services },
    { href: `/${locale}/portfolio`, label: t.nav.portfolio },
    { href: `/${locale}/about`, label: t.nav.about },
    { href: `/${locale}/book`, label: t.nav.book },
    { href: `/${locale}/contact`, label: t.nav.contact },
  ];

  // FIXED: True bilingual toggle logic using usePathname
  const oppositeLocale = locale === "en" ? "ar" : "en";
  const toggleLabel = locale === "en" ? "AR" : "EN";

  const togglePath = () => {
    // If pathname is not available (e.g., initial server render fallback), return root
    if (!pathname) return `/${oppositeLocale}`; 
    
    // Split the path, remove the current locale (first segment), and replace with opposite locale
    const pathParts = pathname.split("/").filter(Boolean);
    
    // Check if the first part is the locale (to prevent errors on root or odd paths)
    if (pathParts.length > 0 && (pathParts[0] === 'en' || pathParts[0] === 'ar')) {
        pathParts[0] = oppositeLocale;
    } else {
        // If no locale is in the path (e.g., root '/'), prepend the opposite locale
        return `/${oppositeLocale}${pathname}`;
    }

    return `/${pathParts.join("/")}`;
  };

  return (
    <header className={`bg-white shadow-sm border-b border-gray-200 ${isRTL ? 'font-arabic' : 'font-english'}`} dir={isRTL ? "rtl" : "ltr"}>
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">

        {/* Brand Link - Sourced from translations */}
        <Link href={`/${locale}`} className="text-xl font-extrabold tracking-tight text-primary shrink-0 hover:text-accent transition-colors">
          {t?.brand || "Fazet.dev"}
        </Link>

        {/* Desktop Menu */}
        {isDesktop && (
          <nav className="flex items-center space-x-4 rtl:space-x-reverse text-sm">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                // FIXED: Color classes
                className="text-gray-700 hover:text-primary font-semibold whitespace-nowrap px-2 py-1 transition-colors"
              >
                {link.label}
              </Link>
            ))}

            {/* EN/AR Toggle Button */}
            <Link
              href={togglePath()}
              className="ml-4 rtl:mr-4 rtl:ml-0 px-3 py-1 rounded-md border-2 border-primary text-primary font-bold hover:bg-primary hover:text-white transition-all"
            >
              {toggleLabel}
            </Link>
          </nav>
        )}

        {/* Mobile Hamburger */}
        {isMobile && (
          <button
            className="text-primary text-2xl p-1"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <HiX className="w-6 h-6" /> : <HiMenu className="w-6 h-6" />}
          </button>
        )}
      </div>

      {/* Mobile Menu */}
      {isOpen && isMobile && (
        <nav className="bg-white px-4 pb-4 space-y-1 border-t border-gray-200">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              // FIXED: Color classes
              className="block text-gray-800 hover:text-primary font-semibold py-3 border-b border-dashed border-gray-100 last:border-b-0 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}

          {/* Mobile EN/AR Toggle */}
          <Link
            href={togglePath()}
            className="block mt-4 py-2 text-primary font-bold text-center border-2 border-primary rounded-lg hover:bg-primary hover:text-white transition-colors"
            onClick={() => setIsOpen(false)}
          >
            {t.nav.languageToggleLabel || `View in ${oppositeLocale.toUpperCase()}`}
          </Link>
        </nav>
      )}
    </header>
  );
}
