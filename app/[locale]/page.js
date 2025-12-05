import Link from 'next/link';

export default function Home({ params }) {
  const locale = params?.locale || 'en';

  const content = {
    en: {
      hero: {
        title: "Freelance Web Developer for Gulf Businesses",
        subtitle: "Crafting fast, mobile-first, culturally-aware web apps for Saudi Arabia, UAE & Qatar",
        viewWork: "View My Work",
        contactMe: "Contact Me",
        experience: "3+ years experience • Gulf market specialist"
      },
      services: {
        title: "Tailored Services for Gulf Businesses",
        subtitle: "Custom solutions designed to meet regional needs",
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
            description: "AI-powered customer service hubs managing WhatsApp, Instagram & email inquiries.",
            tech: "Node.js • AI APIs • Multi-language",
            link: "#tawasul-ai-case-study",
            linkText: "Explore project"
          },
          {
            title: "Zimam Delivery – Logistics Tech",
            description: "Driver dashboards & delivery management for last-mile logistics.",
            tech: "React Native • Maps API • Offline-first",
            link: "#zimam-delivery-case-study",
            linkText: "Explore project"
          },
          {
            title: "Al-Multaqa – Business Dashboards",
            description: "Custom admin dashboards for salons, clinics, and service businesses.",
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
        title: "مطور ويب مستقل للشركات الخليجية",
        subtitle: "تصميم تطبيقات ويب سريعة ومتوافقة مع الجوال وملائمة للثقافة للشركات في السعودية والإمارات وقطر",
        viewWork: "شاهد أعمالي",
        contactMe: "اتصل بي",
        experience: "+٣ سنوات خبرة • متخصص في سوق الخليج"
      },
      services: {
        title: "خدمات مخصصة لأعمال الخليج",
        subtitle: "حلول مخصصة لتلبية الاحتياجات الإقليمية",
        items: [
          {
            title: "بيت إيليت – تقنية العقارات",
            description: "منصات لمطوري العقارات مع حاسبات الدفع والجولات الافتراضية.",
            tech: "Next.js • React • دعم RTL العربي",
            link: "#bayt-elite-case-study",
            linkText: "عرض دراسة حالة"
          },
          {
            title: "تواصل AI – أتمتة الأعمال",
            description: "مراكز خدمة عملاء مدعومة بالذكاء الاصطناعي لإدارة استفسارات واتساب وإنستغرام والبريد الإلكتروني.",
            tech: "Node.js • واجهات AI • متعدد اللغات",
            link: "#tawasul-ai-case-study",
            linkText: "عرض دراسة حالة"
          },
          {
            title: "زِمَام دليفري – تقنية الخدمات اللوجستية",
            description: "لوحات تحكم للسائقين وأدوات إدارة التوصيل لشركات الخدمات اللوجستية.",
            tech: "React Native • Maps API • وضع عدم الاتصال",
            link: "#zimam-delivery-case-study",
            linkText: "عرض دراسة حالة"
          },
          {
            title: "الملتقى – لوحات تحكم الأعمال",
            description: "لوحات تحكم مخصصة للصالونات والعيادات والشركات لإدارة العمليات.",
            tech: "Full Stack • Analytics • عربي/إنجليزي",
            link: "#al-multaqa-case-study",
            linkText: "عرض دراسة حالة"
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
    <div className="px-6 md:px-12 lg:px-20 py-12 space-y-16">

      {/* Hero Section */}
      <section className="text-center relative bg-gradient-to-r from-emerald-500 via-blue-600 to-gold-500 text-white rounded-3xl p-12 shadow-lg overflow-hidden">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 animate-fadeIn">{t.hero.title}</h1>
        <p className="text-lg md:text-xl mb-6 animate-fadeIn delay-200">{t.hero.subtitle}</p>
        <p className="mb-6 font-semibold">{t.hero.experience}</p>
        <div className="flex justify-center gap-6 mt-4">
          <Link href={`/${locale}/portfolio`} className="px-6 py-3 bg-white text-emerald-600 font-bold rounded-xl shadow-lg hover:scale-105 transition transform">
            {t.hero.viewWork}
          </Link>
          <Link href={`/${locale}/contact`} className="px-6 py-3 border border-white text-white font-bold rounded-xl hover:bg-white hover:text-emerald-600 transition transform">
            {t.hero.contactMe}
          </Link>
        </div>
      </section>

      {/* Services Section */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold text-emerald-700">{t.services.title}</h2>
        <p className="text-lg text-gray-700">{t.services.subtitle}</p>
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {t.services.items.map((item, i) => (
            <div key={i} className="p-6 border rounded-2xl shadow-xl hover:shadow-2xl hover:scale-105 transition transform bg-white">
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="mb-2 text-gray-600">{item.description}</p>
              <p className="text-sm font-mono mb-3">{item.tech}</p>
              <Link href={item.link} className="text-emerald-600 font-semibold hover:underline">{item.linkText}</Link>
            </div>
          ))}
        </div>
      </section>

      {/* Why Section */}
      <section className="space-y-4">
        <h2 className="text-3xl font-bold text-emerald-700">{t.why.title}</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          {t.why.items.map((item, i) => (
            <li key={i} className="hover:text-emerald-600 transition">{item}</li>
          ))}
        </ul>
      </section>

    </div>
  );
}
