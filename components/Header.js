'use client';

import { useTranslations } from 'next-intl';
import { useLocale } from 'next-intl';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function Header() {
  const t = useTranslations('navigation');
  const locale = useLocale();
  const router = useRouter();

  const switchLanguage = () => {
    const newLocale = locale === 'en' ? 'ar' : 'en';
    router.push(`/${newLocale}`);
  };

  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href={`/${locale}`} className="text-xl font-bold text-primary">
            Faruk Aminu
          </Link>

          {/* Navigation Links */}
          <nav className="hidden md:flex space-x-8 rtl:space-x-reverse">
            <Link href={`/${locale}`} className="text-text hover:text-primary transition-colors">
              {t('home')}
            </Link>
            <Link href={`/${locale}/services`} className="text-text hover:text-primary transition-colors">
              {t('services')}
            </Link>
            <Link href={`/${locale}/portfolio`} className="text-text hover:text-primary transition-colors">
              {t('portfolio')}
            </Link>
            <Link href={`/${locale}/about`} className="text-text hover:text-primary transition-colors">
              {t('about')}
            </Link>
            <Link href={`/${locale}/contact`} className="text-text hover:text-primary transition-colors">
              {t('contact')}
            </Link>
          </nav>

          {/* Language Switcher */}
          <button
            onClick={switchLanguage}
            className="px-3 py-1 border border-primary text-primary rounded-md hover:bg-primary hover:text-white transition-colors"
          >
            {locale === 'en' ? 'AR' : 'EN'}
          </button>
        </div>
      </div>
    </header>
  );
}
