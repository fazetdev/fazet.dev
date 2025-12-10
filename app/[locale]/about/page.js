'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function About({ params }) {
  const locale = params?.locale || params?.slug?.[0] || "en";
  const pathname = usePathname();
  const oppositeLocale = locale === "en" ? "ar" : "en";

  const content = {
    en: {
      title: "Faruk Bashir Aminu",
      subtitle: "Professional Web Developer specializing in Gulf market solutions",
      sections: [
        "I specialize in delivering high-performance, mobile-first, culturally-aware web solutions tailored for businesses in Saudi Arabia, UAE, and Qatar.",
        "Clear communication (including WhatsApp), fast turnaround, and precise understanding of local business practices are my priorities.",
        "I combine international standards with regional insights, ensuring your digital solutions are effective and reliable."
      ],
      skills: {
        title: "Technical Skills",
        categories: [
          { name: "Frontend", items: ["React", "Next.js", "JavaScript", "TypeScript", "Tailwind CSS", "HTML5/CSS3"] },
          { name: "Backend", items: ["Node.js", "Express", "MongoDB", "Firebase", "REST APIs"] },
          { name: "Tools & Others", items: ["Git/GitHub", "Vercel/Netlify", "Figma", "Webpack", "Responsive Design"] }
        ]
      },
      gstNote: "Available in Gulf Standard Time (GST +4)"
    },
    ar: {
      title: "فاروق بشير أمينو",
      subtitle: "مطور ويب محترف متخصص في حلول سوق الخليج",
      sections: [
        "أتخصص في تقديم حلول ويب عالية الأداء وملائمة للجوال ومراعية للثقافة للشركات في السعودية والإمارات وقطر.",
        "أعطي الأولوية للتواصل الواضح (بما في ذلك واتساب)، والسرعة في التنفيذ، وفهم دقيق لممارسات الأعمال المحلية.",
        "أدمج المعايير الدولية مع الرؤى الإقليمية لضمان حلول رقمية فعالة وموثوقة."
      ],
      skills: {
        title: "المهارات التقنية",
        categories: [
          { name: "Frontend", items: ["React", "Next.js", "JavaScript", "TypeScript", "Tailwind CSS", "HTML5/CSS3"] },
          { name: "Backend", items: ["Node.js", "Express", "MongoDB", "Firebase", "REST APIs"] },
          { name: "أدوات أخرى", items: ["Git/GitHub", "Vercel/Netlify", "Figma", "Webpack", "التصميم المتجاوب"] }
        ]
      },
      gstNote: "متاح بتوقيت الخليج (GST +4)"
    }
  };

  const t = content[locale] || content.en;

  const getOppositeLocalePath = () => {
    if (!pathname) return `/${oppositeLocale}/about`;
    const pathParts = pathname.split('/').filter(Boolean);
    if (pathParts[0] === "en" || pathParts[0] === "ar") pathParts[0] = oppositeLocale;
    return `/${pathParts.join('/')}`;
  };

  return (
    <div className={`min-h-screen bg-neutral-50 text-neutral-900 ${locale === 'ar' ? 'font-arabic' : 'font-sans'}`} dir={locale === 'ar' ? 'rtl' : 'ltr'}>
      {/* Header */}
      <header className="bg-white/95 backdrop-blur-sm sticky top-0 z-40 border-b border-gray-200">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-4">
          <Link href={`/${locale}`} className="text-xl font-extrabold tracking-tight text-primary hover:text-accent transition">Fazet.dev</Link>
          <div className="flex items-center gap-3 text-sm">
            <Link href={getOppositeLocalePath()} className="px-3 py-1 bg-gray-50 rounded-lg font-semibold text-gray-700 hover:bg-gray-100 transition">
              {oppositeLocale.toUpperCase()}
            </Link>
          </div>
        </div>
      </header>

      {/* About Section */}
      <main className="max-w-6xl mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row items-center gap-10 mb-16">
          {/* Professional Headshot */}
          <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-primary shadow-lg flex-shrink-0">
            <img src="/images/faruk.jpg" alt={t.title} className="object-cover w-full h-full" />
          </div>

          {/* Bio and Expertise */}
          <div className="flex-1">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">{t.title}</h1>
            <p className="text-xl text-text mb-6">{t.subtitle}</p>
            <div className="space-y-4 text-lg text-text leading-relaxed">
              {t.sections.map((para, i) => <p key={i}>{para}</p>)}
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200 mb-8">
          <h2 className="text-2xl font-bold text-primary mb-6">{t.skills.title}</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {t.skills.categories.map((cat, i) => (
              <div key={i} className="bg-gray-50 rounded-lg p-4">
                <h3 className="font-bold text-lg text-gray-800 mb-3">{cat.name}</h3>
                <div className="flex flex-wrap gap-2">
                  {cat.items.map((skill, j) => (
                    <span key={j} className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Availability / Gulf Time Note */}
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
        &copy; {new Date().getFullYear()} Faruk Bashir Aminu. All rights reserved.
      </footer>
    </div>
  );
}
