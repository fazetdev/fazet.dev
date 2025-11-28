import { useTranslations } from 'next-intl';
import { useLocale } from 'next-intl';
import Link from 'next/link';
import Header from '../../components/Header';

export default function Home() {
  const t = useTranslations('home.hero');
  const tCommon = useTranslations('common');
  const locale = useLocale();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className={`text-4xl md:text-6xl font-bold text-primary mb-6 ${locale === 'ar' ? 'font-arabic' : 'font-english'}`}>
            {t('title')}
          </h1>
          <p className={`text-xl md:text-2xl text-text mb-8 max-w-3xl mx-auto ${locale === 'ar' ? 'font-arabic' : 'font-english'}`}>
            {t('subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href={`/${locale}/portfolio`} 
              className="bg-accent text-white px-8 py-3 rounded-lg font-semibold hover:bg-yellow-600 transition-colors"
            >
              {tCommon('viewWork')}
            </Link>
            <Link 
              href={`/${locale}/contact`} 
              className="border-2 border-primary text-primary px-8 py-3 rounded-lg font-semibold hover:bg-primary hover:text-white transition-colors"
            >
              {tCommon('contactMe')}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
