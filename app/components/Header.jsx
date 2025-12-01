"use client";
import Link from 'next/link';
import { useState } from 'react';
import TimeZoneDisplay from './TimeZoneDisplay';

export default function Header({ locale, t }) {
  const [isOpen, setIsOpen] = useState(false);

  const pages = [
    { href: `/${locale}`, label: t.nav.home },
    { href: `/${locale}/services`, label: t.nav.services },
    { href: `/${locale}/portfolio`, label: t.nav.portfolio },
    { href: `/${locale}/about`, label: t.nav.about },
    { href: `/${locale}/contact`, label: t.nav.contact },
    { href: `/${locale}/book`, label: "Book" } // Added Book page
  ];

  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link href={`/${locale}`} className="text-xl font-bold text-primary">Faruk Aminu</Link>
        <div className="hidden md:flex space-x-6 rtl:space-x-reverse">
          {pages.map((page, i) => (
            <Link key={i} href={page.href} className="text-text hover:text-primary font-semibold">{page.label}</Link>
          ))}
          <TimeZoneDisplay />
          <div className="flex space-x-2 rtl:space-x-reverse ml-4">
            <Link href="/en" className="text-text hover:text-primary">EN</Link>
            <span className="text-gray-300">|</span>
            <Link href="/ar" className="text-text hover:text-primary">AR</Link>
          </div>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsOpen(!isOpen)} className="text-text focus:outline-none">
            {isOpen ? "✖" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <nav className="md:hidden px-4 pb-4 space-y-2">
          {pages.map((page, i) => (
            <Link key={i} href={page.href} className="block text-text hover:text-primary font-semibold">{page.label}</Link>
          ))}
          <TimeZoneDisplay />
          <div className="flex space-x-2 rtl:space-x-reverse mt-2">
            <Link href="/en" className="text-text hover:text-primary">EN</Link>
            <span className="text-gray-300">|</span>
            <Link href="/ar" className="text-text hover:text-primary">AR</Link>
          </div>
        </nav>
      )}
    </header>
  );
}
