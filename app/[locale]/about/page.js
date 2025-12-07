'use client';

import Link from "next/link";

export default function About({ params }) {
  const locale = params?.slug?.[0] || "en";

  const content = {
    en: {
      title: "Faruk Bashir Aminu",
      subtitle: "Professional Web Developer specializing in Gulf market solutions",
      sections: [
        "A professional web developer specializing in the digital needs of the Gulf market.",
        "My focus is on delivering fast, reliable, and culturally-aware web solutions that understand the business landscape of Saudi Arabia, the UAE, and Qatar.",
        "I prioritize clear communication (including WhatsApp), respect for fast timelines, and building solutions that truly fit the local market.",
        "With a strong English-speaking tech background from Nigeria, I bring international standards with local market understanding."
      ],
      skills: {
        title: "Technical Skills",
        categories: [
          {
            name: "Frontend",
            items: ["React", "Next.js", "JavaScript", "TypeScript", "Tailwind CSS", "HTML5/CSS3"]
          },
          {
            name: "Backend",
            items: ["Node.js", "Express", "MongoDB", "Firebase", "REST APIs"]
          },
          {
            name: "Tools & Others",
            items: ["Git/GitHub", "Vercel/Netlify", "Figma", "Webpack", "Responsive Design"]
          }
        ]
      },
      gstNote: "Available in Gulf Standard Time (GST +4)"
    },
    ar: {
      title: "فاروق بشير أمينو",
      subtitle: "مطور ويب محترف متخصص في حلول سوق الخليج",
      sections: [
        "مطور ويب محترف متخصص في الاحتياجات الرقمية لسوق الخليج.",
        "أركز على تقديم حلول ويب سريعة وموثوقة ومراعية للثقافة تفهم بيئة الأعمال في السعودية والإمارات وقطر.",
        "أولويّاتي هي التواصل الواضح (بما في ذلك واتساب)، واحترام الجداول الزمنية السريعة، وبناء حلول تناسب السوق المحلي حقًا.",
        "بخلفية تقنية قوية في التحدث باللغة الإنجليزية من نيجيريا، أجمع بين المعايير الدولية وفهم السوق المحلي."
      ],
      skills: {
        title: "المهارات التقنية",
        categories: [
          {
            name: "Frontend",
            items: ["React", "Next.js", "JavaScript", "TypeScript", "Tailwind CSS", "HTML5/CSS3"]
          },
          {
            name: "Backend",
            items: ["Node.js", "Express", "MongoDB", "Firebase", "REST APIs"]
          },
          {
            name: "أدوات أخرى",
            items: ["Git/GitHub", "Vercel/Netlify", "Figma", "Webpack", "التصميم المتجاوب"]
          }
        ]
      },
      gstNote: "متاح بتوقيت الخليج (GST +4)"
    }
  };

  const t = content[locale] || content.en;

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900">
      {/* Header */}
      <header className="bg-white/95 backdrop-blur-sm sticky top-0 z-40 border-b border-gray-200">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-4">
          <Link href={`/${locale}`} className="text-xl font-extrabold tracking-tight text-primary-700">
            Faruk Bashir Aminu
          </Link>

          <div className="flex items-center gap-3 text-sm">
            <Link href={`/en/about`} className="px-2 py-1 rounded hover:bg-gray-100">EN</Link>
            <span className="text-gray-300">|</span>
            <Link href={`/ar/about`} className="px-2 py-1 rounded hover:bg-gray-100">AR</Link>
          </div>
        </div>
      </header>

      {/* About Content */}
      <main className="max-w-6xl mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row items-center gap-8 mb-16">
          <div className="w-48 h-48 relative rounded-full overflow-hidden border-4 border-primary shadow-lg flex-shrink-0">
            <img src="/images/faruk.jpg" alt={t.title} className="object-cover w-full h-full" />
          </div>

          <div className="flex-1">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">{t.title}</h1>
            <p className="text-xl text-text mb-6">{t.subtitle}</p>
            <div className="space-y-4 text-lg text-text leading-relaxed">
              {t.sections.map((para, index) => (
                <p key={index}>{para}</p>
              ))}
            </div>
          </div>
        </div>

        {/* Skills */}
        <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200 mb-8">
          <h2 className="text-2xl font-bold text-primary mb-6">{t.skills.title}</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {t.skills.categories.map((category, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-4">
                <h3 className="font-bold text-lg text-gray-800 mb-3">{category.name}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.items.map((skill, i) => (
                    <span key={i} className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Availability Note */}
        <div className="mt-8 p-6 bg-gradient-to-r from-primary/10 to-gray-50 rounded-xl border border-primary/20 text-center">
          <p className="text-lg font-semibold text-text">{t.gstNote}</p>
          <p className="text-gray-600 mt-2">
            {locale === "ar"
              ? "أعمل وفقًا لتوقيت الخليج لتسهيل التواصل مع العملاء في المنطقة."
              : "I work on Gulf Standard Time to better serve clients in the region."}
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-6 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Faruk Aminu. All rights reserved.
      </footer>
    </div>
  );
}