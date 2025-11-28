'use client';

import { useLocale } from 'next-intl';
import { useRouter } from 'next/navigation';

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();

  const switchLanguage = () => {
    const newLocale = locale === 'en' ? 'ar' : 'en';
    router.push(`/${newLocale}`);
  };

  return (
    <button
      onClick={switchLanguage}
      className="px-3 py-1 border border-primary text-primary rounded-md hover:bg-primary hover:text-white transition-colors"
    >
      {locale === 'en' ? 'AR' : 'EN'}
    </button>
  );
}
