'use client';
import { useState } from 'react';
import Link from 'next/link';
import { HiMenu, HiX } from 'react-icons/hi';

export default function Header({ locale, t }) {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: `/${locale}`, label: t.nav.home },
    { href: `/${locale}/services`, label: t.nav.services },
    { href: `/${locale}/portfolio`, label: t.nav.portfolio },
    { href: `/${locale}/about`, label: t.nav.about },
    { href: `/${locale}/book`, label: t.nav.book },       // <-- Book page
    { href: `/${locale}/contact`, label: t.nav.contact },
  ];

  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link href={`/${locale}`} className="text-xl font-bold text-primary">
          Faruk Aminu
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-6 rtl:space-x-reverse text-sm">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="text-text hover:text-primary font-semibold">
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-primary text-2xl"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <nav className="md:hidden bg-white px-4 pb-4 space-y-2 rtl:space-y-reverse border-t border-gray-200">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block text-text hover:text-primary font-semibold"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
