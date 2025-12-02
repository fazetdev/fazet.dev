import Link from 'next/link';

export default function Home({ params }) {
  const locale = params?.slug?.[0] || 'en';

  const content = {
    en: {
      hero: {
        title: "Faruk Bashir Aminu",
        subtitle: "Web Developer specializing in clean, functional digital experiences",
        tagline: "Building for the modern web"
      },
      services: {
        title: "Services",
        subtitle: "Focused solutions for specific needs",
        items: [
          {
            title: "Web Applications",
            description: "Custom, responsive applications built with modern frameworks.",
            tech: "React • Next.js • Node.js"
          },
          {
            title: "Frontend Development",
            description: "Pixel-perfect interfaces with focus on performance and UX.",
            tech: "TypeScript • Tailwind • Responsive Design"
          },
          {
            title: "Technical Consultation",
            description: "Guidance on architecture, tools, and best practices for your project.",
            tech: "Code Review • Architecture • Best Practices"
          },
          {
            title: "Performance Optimization",
            description: "Improving speed, accessibility, and core web vitals.",
            tech: "Performance • SEO • Accessibility"
          }
        ]
      },
      process: {
        title: "Approach",
        items: [
          "Understanding requirements and goals",
          "Planning architecture and tech stack",
          "Iterative development with feedback",
          "Testing, optimization, and delivery"
        ]
      }
    },
    ar: {
      hero: {
        title: "فاروق بشير أمينو",
        subtitle: "مطور ويب متخصص في تجارب رقمية نظيفة وعملية",
        tagline: "بناء للويب الحديث"
      },
      services: {
        title: "الخدمات",
        subtitle: "حلول مركزة لاحتياجات محددة",
        items: [
          {
            title: "تطبيقات الويب",
            description: "تطبيقات مخصصة ومتجاوبة مبنية بأطر العمل الحديثة.",
            tech: "React • Next.js • Node.js"
          },
          {
            title: "تطوير الواجهات",
            description: "واجهات دقيقة مع التركيز على الأداء وتجربة المستخدم.",
            tech: "TypeScript • Tailwind • تصميم متجاوب"
          },
          {
            title: "استشارات تقنية",
            description: "توجيه حول الهيكلة، الأدوات، وأفضل الممارسات لمشروعك.",
            tech: "مراجعة الكود • الهيكلة • أفضل الممارسات"
          },
          {
            title: "تحسين الأداء",
            description: "تحسين السرعة، إمكانية الوصول، ومقاييس الويب الأساسية.",
            tech: "الأداء • SEO • إمكانية الوصول"
          }
        ]
      },
      process: {
        title: "النهج",
        items: [
          "فهم المتطلبات والأهداف",
          "تخطيط الهيكلة والمجموعة التقنية",
          "تطوير تكراري مع التغذية الراجعة",
          "الاختبار، التحسين، والتسليم"
        ]
      }
    }
  };

  const t = content[locale] || content.en;

  return (
    <div className="min-h-screen" dir={locale === 'ar' ? 'rtl' : 'ltr'}>
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-block px-4 py-2 bg-gray-100 rounded-full text-gray-600 text-sm font-medium mb-6">
              {t.hero.tagline}
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              {t.hero.title}
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {t.hero.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t.services.title}</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">{t.services.subtitle}</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {t.services.items.map((service, i) => (
              <div key={i} className="group">
                <div className="bg-white border border-gray-200 rounded-xl p-6 hover:border-gray-300 hover:shadow-lg transition-all duration-300 h-full">
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                  </div>
                  <div className="pt-4 border-t border-gray-100">
                    <p className="text-sm text-gray-500 font-mono">{service.tech}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t.process.title}</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.process.items.map((step, i) => (
              <div key={i} className="text-center">
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-lg font-bold mx-auto mb-4">
                  {i + 1}
                </div>
                <p className="text-gray-700">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing Note */}
      <section className="py-12 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-gray-600 italic">
            {locale === 'ar' 
              ? "أؤمن بأن البرمجيات الجيدة تحل مشاكل حقيقية بتصميم مدروس وأداء موثوق."
              : "I believe good software solves real problems with thoughtful design and reliable performance."}
          </p>
        </div>
      </section>
    </div>
  );
}
