import Link from 'next/link';

export default function Home({ params }) {
  const locale = params?.slug?.[0] || 'en';
  
  const content = {
    en: {
      title: "Freelance Web Developer Specialized in Gulf-Focused Digital Solutions",
      subtitle: "Building fast, mobile-first, and culturally-aware web applications for businesses in Saudi Arabia, UAE, and Qatar",
      viewWork: "View My Work",
      contactMe: "Contact Me"
    },
    ar: {
      title: "مطور ويب مستقل متخصص في الحلول الرقمية الموجهة للخليج",
      subtitle: "نبني تطبيقات ويب سريعة وملائمة للجوال ومراعية للثقافة للشركات في السعودية والإمارات وقطر",
      viewWork: "شاهد أعمالي",
      contactMe: "اتصل بي"
    }
  };

  const t = content[locale] || content.en;

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6">
            {t.title}
          </h1>
          <p className="text-xl md:text-2xl text-text mb-8 max-w-3xl mx-auto">
            {t.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href={`/${locale}/portfolio`} 
              className="bg-accent text-white px-8 py-3 rounded-lg font-semibold hover:bg-yellow-600 transition-colors"
            >
              {t.viewWork}
            </Link>
            <Link 
              href={`/${locale}/contact`} 
              className="border-2 border-primary text-primary px-8 py-3 rounded-lg font-semibold hover:bg-primary hover:text-white transition-colors"
            >
              {t.contactMe}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
