import { Inter, Cairo } from 'next/font/google';

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

export default function LocaleLayout({ children, params }) {
  const locale = params?.slug?.[0] || 'en';
  
  return (
    <html lang={locale} dir={locale === 'ar' ? 'rtl' : 'ltr'}>
      <body className={`${locale === 'ar' ? cairo.variable : inter.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}
