import Link from 'next/link';

export default function Home({ params }) {
  const locale = params?.slug?.[0] || 'en';

  const content = {
    en: {
      hero: {
        title: "Freelance Web Developer Specialized in Gulf-Focused Digital Solutions",
        subtitle: "Building fast, mobile-first, and culturally-aware web applications for businesses in Saudi Arabia, UAE, and Qatar",
        viewWork: "View My Work",
        contactMe: "Contact Me",
        experience: "3+ years experience • Gulf market specialist"
      },
      services: {
        title: "Services Tailored for Gulf Businesses",
        subtitle: "Custom solutions addressing specific regional needs",
        items: [
          {
            title: "Bayt Elite – Property Tech",
            description: "Custom platforms for real estate developers with payment calculators & virtual tours.",
            tech: "Next.js • React • Arabic RTL",
            link: "#bayt-elite-case-study",
            linkText: "Explore project"
          },
          {
            title: "Tawasul AI – Business Automation",
            description: "AI-powered customer service hubs to manage inquiries from WhatsApp, Instagram & email.",
            tech: "Node.js • AI APIs • Multi-language",
            link: "#tawasul-ai-case-study",
            linkText: "Explore project"
          },
          {
            title: "Zimam Delivery – Logistics Tech",
            description: "Driver dashboards & delivery management tools for last-mile logistics companies.",
            tech: "React Native • Maps API • Offline-first",
            link: "#zimam-delivery-case-study",
            linkText: "Explore project"
          },
          {
            title: "Al-Multaqa – Business Dashboards",
            description: "Custom admin dashboards for salons, clinics, and service businesses to manage operations.",
            tech: "Full Stack • Analytics • Arabic/English",
            link: "#al-multaqa-case-study",
            linkText: "Explore project"
          }
        ]
      },
      why: {
        title: "Why Gulf Businesses Choose Me",
        items: [
          "Arabic/English bilingual development",
          "Deep understanding of Gulf business culture",
          "Experience with local payment gateways (STC Pay, etc.)",
          "Mobile-first, WhatsApp-integrated solutions",
          "Respect for local regulations and customs",
          "Fast response times aligned with GST timezone"
        ]
      }
    },
    ar: {
      hero: {
        title: "مطور ويب مستقل متخصص في الحلول الرقمية الموجهة للخليج",
        subtitle: "نبني تطبيقات ويب سريعة وملائمة للجوال ومراعية للثقافة للشركات في السعودية والإمارات وقطر",
        viewWork: "شاهد أعمالي",
        contactMe: "اتصل بي",
        experience: "+٣ سنوات خبرة • متخصص في سوق الخليج"
      },
      services: {
        title: "خدمات مصممة لأعمال الخليج",
        subtitle: "حلول مخصصة تلبي الاحتياجات الإقليمية الخاصة",
        items: [
          {
            title: "بيت إيليت – تقنية العقارات",
            description: "منصات مخصصة لمطوري العقارات مع حاسبات الدفع والجولات الافتراضية.",
            tech: "Next.js • React • دعم RTL العربي",
            link: "#bayt-elite-case-study",
            linkText: "عرض دراسة حالة بيت إيليت"
          },
          {
            title: "تواصل AI – أتمتة الأعمال",
            description: "مراكز خدمة عملاء مدعومة بالذكاء الاصطناعي لإدارة الاستفسارات من واتساب وإنستغرام والبريد الإلكتروني.",
            tech: "Node.js • واجهات برمجة الذكاء الاصطناعي • متعدد اللغات",
            link: "#tawasul-ai-case-study",
            linkText: "عرض دراسة حالة تواصل AI"
          },
          {
            title: "زِمَام دليفري – تقنية الخدمات اللوجستية",
            description: "لوحات تحكم السائقين وأدوات إدارة التوصيل لشركات الخدمات اللوجستية من الميل الأخير.",
            tech: "React Native • خرائط API • تصميم أوفلاين",
            link: "#zimam-delivery-case-study",
            linkText: "عرض دراسة حالة زِمَام دليفري"
          },
          {
            title: "الملتقى – لوحات تحكم الأعمال",
            description: "لوحات تحكم إدارية مخصصة لصالونات وعيادات وأعمال الخدمات لإدارة العمليات.",
            tech: "تطوير كامل • تحليلات • عربي/إنجليزي",
            link: "#al-multaqa-case-study",
            linkText: "عرض دراسة حالة الملتقى"
          }
        ]
      },
      why: {
        title: "لماذا تختارني شركات الخليج",
        items: [
          "تطوير ثنائي اللغة عربي/إنجليزي",
          "فهم عميق لثقافة الأعمال في الخليج",
          "خبرة في بوابات الدفع المحلية (STC Pay وغيرها)",
          "حلول تركز على الموبايل ومتكاملة مع واتساب",
          "احترام اللوائح والعادات المحلية",
          "أوقات استجابة سريعة متوافقة مع توقيت الخليج"
        ]
      }
    }
  };

  const t = content[locale] || content.en;

  return (
    <div className="min-h-screen" dir={locale === 'ar' ? 'rtl' : 'ltr'}>
      {/* Hero Section - Gulf-focused */}
      <section className="pt-24 pb-20 px-4 text-center bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-5xl mx-auto">
          {/* Experience badge */}
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-8">
            <span className="w-2 h-2 bg-primary rounded-full mr-2 animate-pulse"></span>
            {t.hero.experience}
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight">
            {t.hero.title}
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
            {t.hero.subtitle}
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link 
              href={`/${locale}/portfolio`} 
              className="group bg-primary text-white px-10 py-4 rounded-xl font-semibold hover:bg-primary-dark transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl text-lg inline-flex items-center justify-center"
            >
              {t.hero.viewWork}
              <span className="ml-3 group-hover:translate-x-2 transition-transform">→</span>
            </Link>
            <Link 
              href={`/${locale}/contact`} 
              className="group border-2 border-primary text-primary px-10 py-4 rounded-xl font-semibold hover:bg-primary hover:text-white transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl text-lg inline-flex items-center justify-center"
            >
              {t.hero.contactMe}
              <span className="ml-3 group-hover:translate-x-2 transition-transform">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section - Gulf-specific */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              {t.services.title}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t.services.subtitle}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-10">
            {t.services.items.map((service, i) => (
              <div key={i} className="group relative">
                <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-primary hover:shadow-2xl transition-all duration-500 h-full transform hover:-translate-y-2">
                  {/* Arabic-style decorative element */}
                  <div className="absolute top-0 right-0 w-16 h-16 opacity-5 group-hover:opacity-10 transition-opacity">
                    <div className="text-4xl">{locale === 'ar' ? '☪️' : '🚀'}</div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                  
                  <div className="mb-6">
                    <div className="inline-block px-3 py-1 bg-gray-100 text-gray-700 text-sm font-mono rounded">
                      {service.tech}
                    </div>
                  </div>
                  
                  <Link 
                    href={service.link} 
                    className="inline-flex items-center text-primary font-semibold hover:text-primary-dark group/link"
                  >
                    <span className="border-b-2 border-primary/30 group-hover/link:border-primary">
                      {service.linkText}
                    </span>
                    <span className="ml-2 group-hover/link:translate-x-2 transition-transform">→</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Me - Gulf-specific advantages */}
      <section className="py-20 px-4 bg-gradient-to-r from-gray-50 to-gray-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {t.why.title}
            </h2>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {t.why.items.map((item, i) => (
              <div key={i} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-primary">✓</span>
                  </div>
                  <p className="text-gray-700 font-medium">{item}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block px-8 py-4 bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl mb-10">
            <p className="text-lg font-medium text-gray-700">
              {locale === 'ar' 
                ? "مستعد لتحويل فكرتك إلى واقع رقمي؟" 
                : "Ready to transform your idea into a digital reality?"}
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link 
              href={`/${locale}/portfolio`} 
              className="bg-gray-900 text-white px-10 py-4 rounded-xl font-semibold hover:bg-black transition-all duration-300 shadow-lg hover:shadow-xl text-lg"
            >
              {t.hero.viewWork}
            </Link>
            <Link 
              href={`/${locale}/contact`} 
              className="border-2 border-gray-900 text-gray-900 px-10 py-4 rounded-xl font-semibold hover:bg-gray-900 hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl text-lg"
            >
              {t.hero.contactMe}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
