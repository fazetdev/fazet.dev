'use client';

import { useTranslations } from 'next-intl';
import { useLocale } from 'next-intl';
import Link from 'next/link';

export default function Navigation() {
  const t = useTranslations('navigation');
  const locale = useLocale();

  return (
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
  );
}
