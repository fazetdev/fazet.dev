import { Inter, Cairo } from 'next/font/google';
import './globals.css';

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

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}
