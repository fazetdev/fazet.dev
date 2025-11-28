import Link from 'next/link';

export default function About({ params }) {
  const locale = params?.slug?.[0] || 'en';
  
  const content = {
    en: {
      title: "Faruk Bashir Aminu",
      sections: [
        "A professional web developer specializing in the digital needs of the Gulf market.",
        "My focus is on delivering fast, reliable, and culturally-aware web solutions that understand the business landscape of Saudi Arabia, the UAE, and Qatar.",
        "I prioritize clear communication (including WhatsApp), respect for fast timelines, and building solutions that truly fit the local market.",
        "With a strong English-speaking tech background from Nigeria, I bring international standards with local market understanding."
      ],
      nav: {
        home: "Home",
        services: "Services",
        portfolio: "Portfolio", 
        contact: "Contact"
      }
    },
    ar: {
      title: "فاروق بشير أمينو",
      sections: [
        "مطور ويب محترف متخصص في الاحتياجات الرقمية لسوق الخليج.",
        "أركز على تقديم حلول ويب سريعة وموثوقة ومراعية للثقافة تفهم بيئة الأعمال في السعودية والإمارات وقطر.",
        "أولويّاتي هي التواصل الواضح (بما في ذلك واتساب)، واحترام الجداول الزمنية السريعة، وبناء حلول تناسب السوق المحلي حقًا.",
        "بخلفية تقنية قوية في التحدث باللغة الإنجليزية من نيجيريا، أجمع بين المعايير الدولية وفهم السوق المحلي."
      ],
      nav: {
        home: "الرئيسية",
        services: "الخدمات",
        portfolio: "الأعمال",
        contact: "اتصل"
      }
    }
  };

  const t = content[locale] || content.en;

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <Link href={`/${locale}`} className="text-xl font-bold text-primary">Faruk Aminu</Link>
          <div className="flex space-x-4 rtl:space-x-reverse">
            <a href="/en/about" className="text-text hover:text-primary">EN</a>
            <span className="text-gray-300">|</span>
            <a href="/ar/about" className="text-text hover:text-primary">AR</a>
          </div>
        </div>
        <nav className="max-w-7xl mx-auto px-4 py-2 flex space-x-6 rtl:space-x-reverse text-sm">
          <Link href={`/${locale}`} className="text-text hover:text-primary">{t.nav.home}</Link>
          <Link href={`/${locale}/services`} className="text-text hover:text-primary">{t.nav.services}</Link>
          <Link href={`/${locale}/portfolio`} className="text-text hover:text-primary">{t.nav.portfolio}</Link>
          <Link href={`/${locale}/about`} className="text-primary font-semibold">About</Link>
          <Link href={`/${locale}/contact`} className="text-text hover:text-primary">{t.nav.contact}</Link>
        </nav>
      </header>

      {/* About Content */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">{t.title}</h1>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="space-y-6 text-lg text-text leading-relaxed">
              {t.sections.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
            
            <div className="mt-8 p-4 bg-accent/10 rounded-lg border border-accent/20">
              <p className="text-text text-center">
                <strong>Available in Gulf Standard Time (GST +4)</strong>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
