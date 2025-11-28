import Link from 'next/link';
import LanguageSwitcher from './LanguageSwitcher';
import Navigation from './Navigation';

export default function Header() {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="text-xl font-bold text-primary">
            Faruk Aminu
          </Link>

          {/* Navigation Links */}
          <Navigation />

          {/* Language Switcher */}
          <LanguageSwitcher />
        </div>
      </div>
    </header>
  );
}
