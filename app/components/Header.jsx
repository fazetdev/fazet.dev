'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { HiMenu, HiX } from 'react-icons/hi';

export default function Header({ locale, t }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    setIsMounted(true);
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      if (window.innerWidth >= 768) setIsOpen(false);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (!isMounted) {
    return (
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-xl font-bold text-primary">Faruk Bashir Aminu</div>
          <div className="w-8 h-8"></div>
        </div>
      </header>
    );
  }

  const isDesktop = windowWidth >= 768;
  const isMobile = windowWidth < 768;

  const links = [
    { href: `/${locale}`, label: t.nav.home },
    { href: `/${locale}/services`, label: t.nav.services },
    { href: `/${locale}/portfolio`, label: t.nav.portfolio },
    { href: `/${locale}/about`, label: t.nav.about },
    { href: `/${locale}/book`, label: t.nav.book },
    { href: `/${locale}/contact`, label: t.nav.contact },
  ];

  // 🔥 FIXED: True bilingual toggle (EN/AR)
  const oppositeLocale = locale === "en" ? "ar" : "en";
  const toggleLabel = locale === "en" ? "AR" : "EN";

  // 🔥 FIXED: Language toggle preserves current page correctly
  const togglePath = () => {
    if (typeof window === "undefined") return `/${oppositeLocale}`;

    const pathParts = window.location.pathname.split("/").filter(Boolean);

    // Remove current locale from path
    pathParts.shift();

    // Build correct translated path
    return `/${oppositeLocale}/${pathParts.join("/")}`;
  };

  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">

        <Link href={`/${locale}`} className="text-xl font-bold text-primary shrink-0">
          Faruk Bashir Aminu
        </Link>

        {/* Desktop Menu */}
        {isDesktop && (
          <nav className="flex items-center space-x-4 rtl:space-x-reverse text-sm">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-text hover:text-primary font-semibold whitespace-nowrap px-2 py-1"
              >
                {link.label}
              </Link>
            ))}

            {/* 🔥 EN/AR Toggle Button */}
            <Link
              href={togglePath()}
              className="ml-4 px-3 py-1 rounded-md border border-primary text-primary font-semibold hover:bg-primary hover:text-white transition"
            >
              {toggleLabel}
            </Link>
          </nav>
        )}

        {/* Mobile Hamburger */}
        {isMobile && (
          <button
            className="text-primary text-2xl"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <HiX /> : <HiMenu />}
          </button>
        )}
      </div>

      {/* Mobile Menu */}
      {isOpen && isMobile && (
        <nav className="bg-white px-4 pb-4 space-y-2 border-t border-gray-200">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block text-text hover:text-primary font-semibold py-2"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}

          {/* 🔥 Mobile EN/AR Toggle */}
          <Link
            href={togglePath()}
            className="block mt-2 py-2 text-primary font-semibold"
            onClick={() => setIsOpen(false)}
          >
            {toggleLabel}
          </Link>
        </nav>
      )}
    </header>
  );
}
