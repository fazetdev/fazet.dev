import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { Inter, Cairo } from 'next/font/google';
import '../globals.css'; // <- fixed path

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter'
});

const cairo = Cairo({
  subsets: ['arabic'],
  variable: '--font-cairo'
});

export const metadata = {
  title: 'Faruk Aminu - Freelance Web Developer',
  description: 'Freelance Web Developer Specialized in Gulf-Focused Digital Solutions',
};

export default async function LocaleLayout({ children, params }) {
  const { slug } = params;
  const locale = slug?.[0] || 'en';
  const messages = await getMessages({ locale });

  return (
    <html lang={locale} dir={locale === 'ar' ? 'rtl' : 'ltr'}>
      <body className={`${locale === 'ar' ? cairo.variable : inter.variable} font-sans`}>
        <NextIntlClientProvider messages={messages} locale={locale}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
