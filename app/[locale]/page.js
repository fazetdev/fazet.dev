import Link from 'next/link';

export default function Home({ params }) {
  // ✅ Use params.locale because your folder is [locale]
  const locale = params?.locale || 'en';

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
            description: "لوحات تحكم السائقين وأدوات إدارة التوصيل لشركات الخدمات اللوجستية.",
            tech: "React Native • Maps API • وضع عدم الاتصال",
            link: "#zimam-delivery-case-study",
            linkText: "عرض دراسة حالة زِمَام دليفري"
          },
          {
            title: "الملتقى – لوحات تحكم الأعمال",
            description: "لوحات تحكم مخصصة للصالونات والعيادات والشركات لإدارة العمليات.",
            tech: "Full Stack • Analytics • عربي/إنجليزي",
            link: "#al-multaqa-case-study",
            linkText: "عرض دراسة حالة الملتقى"
          }
        ]
      },
      why: {
        title: "لماذا تختار الشركات الخليجية خدماتي",
        items: [
          "تطوير ثنائي اللغة (عربي/إنجليزي)",
          "فهم عميق لثقافة الأعمال في الخليج",
          "خبرة في بوابات الدفع المحلية (STC Pay، إلخ)",
          "تصميم موجه للجوال ودمج واتساب",
          "احترام اللوائح والعادات المحلية",
          "استجابة سريعة متوافقة مع توقيت الخليج"
        ]
      }
    }
  };

  const t = content[locale] || content.en;

  return (
    <div className="px-4 md:px-8 lg:px-16 py-8">
      {/* Hero Section */}
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">{t.hero.title}</h1>
        <p className="text-lg mb-6">{t.hero.subtitle}</p>
        <p className="mb-2">{t.hero.experience}</p>
        <div className="flex justify-center gap-4 mt-4">
          <Link href={`/${locale}/portfolio`} className="px-4 py-2 bg-primary text-white rounded">
            {t.hero.viewWork}
          </Link>
          <Link href={`/${locale}/contact`} className="px-4 py-2 border border-primary rounded text-primary">
            {t.hero.contactMe}
          </Link>
        </div>
      </section>

      {/* Services Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-2">{t.services.title}</h2>
        <p className="mb-6">{t.services.subtitle}</p>
        <div className="grid md:grid-cols-2 gap-6">
          {t.services.items.map((item, i) => (
            <div key={i} className="p-4 border rounded hover:shadow-lg transition">
              <h3 className="font-semibold mb-1">{item.title}</h3>
              <p className="mb-2">{item.description}</p>
              <p className="text-sm mb-2">{item.tech}</p>
              <Link href={item.link} className="text-primary font-semibold">
                {item.linkText}
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Why Section */}
      <section>
        <h2 className="text-2xl font-bold mb-4">{t.why.title}</h2>
        <ul className="list-disc pl-6 space-y-2">
          {t.why.items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </section>
    </div>
  );
}
