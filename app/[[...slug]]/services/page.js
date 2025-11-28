import Link from 'next/link';

export default function Services({ params }) {
  const locale = params?.slug?.[0] || 'en';
  
  const content = {
    en: {
      title: "Services",
      subtitle: "Professional web solutions tailored for the Gulf market",
      services: [
        {
          title: "Custom PropTech Platform",
          description: "White-labeled real estate platforms with payment calculators, Hijri dates, and booking systems.",
          price: "Starting at $4,500"
        },
        {
          title: "Bilingual Landing Pages", 
          description: "High-converting, SEO-optimized landing pages in Arabic and English.",
          price: "Starting at $1,200"
        },
        {
          title: "E-commerce & Dashboards",
          description: "Modern stores & internal business tools with VAT & Tamara BNPL integration.",
          price: "Starting at $2,500"
        }
      ],
      nav: {
        home: "Home",
        portfolio: "Portfolio",
        about: "About", 
        contact: "Contact"
      }
    },
    ar: {
      title: "الخدمات",
      subtitle: "حلول ويب احترافية مصممة خصيصًا لسوق الخليج",
      services: [
        {
          title: "منصة تقنية العقارات المخصصة",
          description: "منصات عقارية ذات علامة تجارية بيضاء مع حاسبات الدفع والتواريخ الهجرية وأنظمة الحجز.",
          price: "تبدأ من 4500$"
        },
        {
          title: "صفحات الهبوط ثنائية اللغة",
          description: "صفحات هبوط عالية التحويل ومحسنة لمحركات البحث باللغتين العربية والإنجليزية.",
          price: "تبدأ من 1200$"
        },
        {
          title: "التجارة الإلكترونية ولوحات التحكم",
          description: "متاجر حديثة وأدوات أعمال داخلية مع تكامل ضريبة القيمة المضافة وتمارة للدفع لاحقًا.",
          price: "تبدأ من 2500$"
        }
      ],
      nav: {
        home: "الرئيسية",
        portfolio: "الأعمال", 
        about: "عني",
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
            <a href="/en/services" className="text-text hover:text-primary">EN</a>
            <span className="text-gray-300">|</span>
            <a href="/ar/services" className="text-text hover:text-primary">AR</a>
          </div>
        </div>
        <nav className="max-w-7xl mx-auto px-4 py-2 flex space-x-6 rtl:space-x-reverse text-sm">
          <Link href={`/${locale}`} className="text-text hover:text-primary">{t.nav.home}</Link>
          <Link href={`/${locale}/services`} className="text-primary font-semibold">Services</Link>
          <Link href={`/${locale}/portfolio`} className="text-text hover:text-primary">{t.nav.portfolio}</Link>
          <Link href={`/${locale}/about`} className="text-text hover:text-primary">{t.nav.about}</Link>
          <Link href={`/${locale}/contact`} className="text-text hover:text-primary">{t.nav.contact}</Link>
        </nav>
      </header>

      {/* Services Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">{t.title}</h1>
            <p className="text-xl text-text max-w-2xl mx-auto">{t.subtitle}</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {t.services.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 border border-gray-200 hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-bold text-primary mb-3">{service.title}</h3>
                <p className="text-text mb-4">{service.description}</p>
                <div className="text-accent font-bold text-lg">{service.price}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
