import { Inter, Cairo } from 'next/font/google';
import './globals.css';
import Header from './components/Header';
import Footer from './components/Footer';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter'
});

const cairo = Cairo({
  subsets: ['arabic'],
  variable: '--font-cairo'
});

export const metadata = {
  title: 'Faruk Bashir Aminu - Freelance Web Developer',
  description: 'Freelance Web Developer Specialized in Gulf-Focused Digital Solutions',
};

export default function RootLayout({ children, params }) {
  const locale = params?.locale || 'en';   // ✅ FIXED — use locale, not slug

  const content = {
    en: {
      nav: {
        home: "Home",
        services: "Services",
        portfolio: "Portfolio",
        about: "About",
        contact: "Contact",
        book: "Book"
      },
    },
    ar: {
      nav: {
        home: "الرئيسية",
        services: "الخدمات",
        portfolio: "الأعمال",
        about: "عني",
        contact: "اتصل",
        book: "الحجز"
      },
    }
  };

  const t = content[locale] || content.en;

  return (
    <html lang={locale}>
      <body className={`${inter.variable} ${cairo.variable} font-sans min-h-screen flex flex-col`} dir={locale === 'ar' ? 'rtl' : 'ltr'}>
        <Header locale={locale} t={t} />
        <main className="flex-grow">
          {children}
        </main>
        <Footer locale={locale} />
      </body>
    </html>
  );
}
