'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function Header({ locale, t }) {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: `/${locale}`, label: t.nav.home },
    { href: `/${locale}/services`, label: t.nav.services },
    { href: `/${locale}/portfolio`, label: t.nav.portfolio },
    { href: `/${locale}/about`, label: t.nav.about },
    { href: `/${locale}/contact`, label: t.nav.contact },
    { href: `/${locale}/book`, label: t.nav.book }, // Book page
  ];

  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link href={`/${locale}`} className="text-xl font-bold text-primary">Faruk Aminu</Link>
        
        {/* Desktop links */}
        <nav className="hidden md:flex space-x-6 rtl:space-x-reverse text-sm">
          {links.map((link, i) => (
            <Link key={i} href={link.href} className="text-text hover:text-primary font-semibold">{link.label}</Link>
          ))}
        </nav>

        {/* Mobile hamburger button */}
        <button
          className="md:hidden text-primary font-bold text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? '✖' : '☰'}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <nav className="md:hidden bg-white border-t border-gray-200 px-4 py-2 flex flex-col space-y-2 rtl:space-y-reverse">
          {links.map((link, i) => (
            <Link key={i} href={link.href} className="text-text hover:text-primary font-semibold">{link.label}</Link>
          ))}
        </nav>
      )}
    </header>
  );
}
