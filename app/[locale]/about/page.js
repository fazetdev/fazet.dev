"use client";

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
      education: {
        title: "Education",
        items: [
          {
            degree: "B.Sc. Computer Science",
            institution: "Bayero University, Kano",
            period: "2018 - 2022",
            details: "Specialized in Software Engineering and Web Technologies"
          },
          {
            degree: "Full Stack Web Development Certification",
            institution: "FreeCodeCamp",
            period: "2021",
            details: "MERN Stack (MongoDB, Express, React, Node.js)"
          }
        ]
      },
      experience: {
        title: "Experience",
        items: [
          {
            role: "Freelance Web Developer",
            company: "Self-employed",
            period: "2021 - Present",
            details: [
              "Building custom web applications for Gulf-based clients",
              "Specializing in property tech, business automation, and logistics platforms",
              "Working with clients across Saudi Arabia, UAE, and Qatar"
            ]
          },
          {
            role: "Web Development Instructor",
            company: "Local Tech Community",
            period: "2020 - 2021",
            details: [
              "Taught HTML, CSS, JavaScript, and React fundamentals",
              "Mentored aspiring developers in web technologies"
            ]
          }
        ]
      },
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
      education: {
        title: "التعليم",
        items: [
          {
            degree: "بكالوريوس علوم الحاسب",
            institution: "جامعة بايرو، كانو",
            period: "٢٠١٨ - ٢٠٢٢",
            details: "متخصص في هندسة البرمجيات وتقنيات الويب"
          },
          {
            degree: "شهادة تطوير ويب Full Stack",
            institution: "FreeCodeCamp",
            period: "٢٠٢١",
            details: "MERN Stack (MongoDB, Express, React, Node.js)"
          }
        ]
      },
      experience: {
        title: "الخبرة",
        items: [
          {
            role: "مطور ويب مستقل",
            company: "عمل حر",
            period: "٢٠٢١ - الحاضر",
            details: [
              "بناء تطبيقات ويب مخصصة لعملاء الخليج",
              "متخصص في تقنية العقارات وأتمتة الأعمال ومنصات الخدمات اللوجستية",
              "العمل مع عملاء في السعودية والإمارات وقطر"
            ]
          },
          {
            role: "مدرس تطوير ويب",
            company: "مجتمع التقنية المحلي",
            period: "٢٠٢٠ - ٢٠٢١",
            details: [
              "تدريس أساسيات HTML و CSS و JavaScript و React",
              "توجيه المطورين الطموحين في تقنيات الويب"
            ]
          }
        ]
      },
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
    <div
      className={`min-h-screen bg-background ${locale === "ar" ? "font-arabic" : "font-english"}`}
      dir={locale === "ar" ? "rtl" : "ltr"}
    >
      {/* About Section - NO DUPLICATE HEADER */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <div className="flex flex-col md:flex-row items-center gap-8 mb-16">
            {/* Profile Image */}
            <div className="w-48 h-48 relative rounded-full overflow-hidden border-4 border-accent shadow-lg flex-shrink-0">
              <img src="/images/faruk.jpg" alt="Faruk Bashir Aminu" className="object-cover w-full h-full" />
            </div>

            {/* About Text */}
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

          {/* Education & Experience Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Education */}
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
              <h2 className="text-2xl font-bold text-primary mb-6">{t.education.title}</h2>
              <div className="space-y-6">
                {t.education.items.map((item, index) => (
                  <div key={index} className="border-l-4 border-accent pl-4">
                    <h3 className="font-bold text-lg text-gray-800">{item.degree}</h3>
                    <p className="text-gray-600">{item.institution}</p>
                    <p className="text-sm text-gray-500 mt-1">{item.period}</p>
                    <p className="text-gray-700 mt-2">{item.details}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Experience */}
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
              <h2 className="text-2xl font-bold text-primary mb-6">{t.experience.title}</h2>
              <div className="space-y-6">
                {t.experience.items.map((item, index) => (
                  <div key={index} className="border-l-4 border-primary pl-4">
                    <h3 className="font-bold text-lg text-gray-800">{item.role}</h3>
                    <p className="text-gray-600">{item.company}</p>
                    <p className="text-sm text-gray-500 mt-1">{item.period}</p>
                    <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
                      {item.details.map((detail, i) => (
                        <li key={i}>{detail}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Skills Section */}
          <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200 mb-8">
            <h2 className="text-2xl font-bold text-primary mb-6">{t.skills.title}</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {t.skills.categories.map((category, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-4">
                  <h3 className="font-bold text-lg text-gray-800 mb-3">{category.name}</h3>
                  <div className="flex flex-wrap gap-2">
                    {category.items.map((skill, i) => (
                      <span key={i} className="bg-accent/20 text-accent-dark px-3 py-1 rounded-full text-sm font-medium">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Availability Note */}
          <div className="mt-8 p-6 bg-gradient-to-r from-accent/10 to-primary/10 rounded-xl border border-accent/20 text-center">
            <p className="text-lg font-semibold text-text">{t.gstNote}</p>
            <p className="text-gray-600 mt-2">
              {locale === "ar" 
                ? "أعمل وفقًا لتوقيت الخليج لتسهيل التواصل مع العملاء في المنطقة." 
                : "I work on Gulf Standard Time to better serve clients in the region."}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
