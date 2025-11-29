import Link from 'next/link';

export default function Services({ params }) {
  const locale = params?.slug?.[0] || 'en';
  
  const content = {
    en: {
      title: "Services",
      subtitle: "Premium web solutions engineered for Gulf business growth",
      services: [
        {
          title: "Premium Property Platform",
          description: "From off-plan sales to luxury listings, I build the tools that close deals.",
          packages: [
            {
              name: "Starter",
              price: "$1,500",
              features: [
                "Custom Payment Plan Calculator",
                "Bilingual (EN/AR) Landing Page", 
                "5 Property Listings",
                "Contact & WhatsApp Integration"
              ],
              note: "Based on typical 2-3 week project scope"
            },
            {
              name: "Professional", 
              price: "$3,500",
              features: [
                "Everything in Starter +",
                "Full Admin Dashboard",
                "Hijri/Gregorian Date Integration",
                "Interactive Site Map",
                "Virtual Tour Integration (360° photos/video)"
              ],
              note: "Based on typical 4-6 week project scope"
            },
            {
              name: "Enterprise",
              price: "$7,000+",
              features: [
                "Fully custom platform with CRM",
                "Advanced lead management",
                "Real-time analytics dashboard",
                "Custom API integrations",
                "Priority support & maintenance"
              ],
              note: "Tailored to your specific requirements"
            }
          ],
          caseStudy: {
            text: "View Bayt Elite Case Study",
            link: "/portfolio/bayt-elite"
          }
        },
        {
          title: "AI Business Automation Suite", 
          description: "AI-powered customer service hubs to manage inquiries from WhatsApp, Instagram & email.",
          packages: [
            {
              name: "Starter",
              price: "$1,200",
              features: [
                "Unified Inbox Setup",
                "2 Channel Integration (WhatsApp + Email)",
                "Basic AI Response Templates", 
                "7-day History Storage"
              ],
              note: "Based on typical 2-3 week project scope"
            },
            {
              name: "Professional",
              price: "$2,800",
              features: [
                "Everything in Starter +",
                "Multi-channel Integration (WhatsApp, Instagram, Email)",
                "Custom AI Training",
                "30-day History Storage", 
                "Basic Analytics Dashboard"
              ],
              note: "Based on typical 4-6 week project scope"
            },
            {
              name: "Enterprise",
              price: "$5,500+",
              features: [
                "Custom AI Model Development",
                "Unlimited History Storage",
                "Advanced Analytics & Reporting",
                "CRM Integration",
                "24/7 Priority Support"
              ],
              note: "Tailored to your specific requirements"
            }
          ],
          caseStudy: {
            text: "View Tawasul AI Case Study", 
            link: "/portfolio/tawasul-ai"
          }
        },
        {
          title: "Logistics Management System",
          description: "Driver dashboards & delivery management tools for last-mile logistics companies.",
          packages: [
            {
              name: "Starter",
              price: "$1,800", 
              features: [
                "Driver Mobile Dashboard",
                "Basic Route Optimization",
                "Real-time Tracking",
                "Delivery Status Updates"
              ],
              note: "Based on typical 3-4 week project scope"
            },
            {
              name: "Professional",
              price: "$4,200",
              features: [
                "Everything in Starter +",
                "Advanced Route Algorithms", 
                "Fleet Management Console",
                "Performance Analytics",
                "Customer Notification System" // ✅ FIXED: Added missing quote
              ],
              note: "Based on typical 5-7 week project scope"
            },
            {
              name: "Enterprise", 
              price: "$8,000+",
              features: [
                "Custom Logistics Platform",
                "AI-powered Route Optimization",
                "Multi-warehouse Support",
                "Custom API Integrations",
                "Dedicated Account Manager"
              ],
              note: "Tailored to your specific requirements"
            }
          ],
          caseStudy: {
            text: "View Zimam Delivery Case Study",
            link: "/portfolio/zimam-delivery" 
          }
        },
        {
          title: "Business Intelligence Dashboards",
          description: "Custom admin dashboards for salons, clinics, and service businesses to manage operations.",
          packages: [
            {
              name: "Starter",
              price: "$1,000",
              features: [
                "Basic Admin Dashboard", 
                "Appointment Management",
                "Customer Database",
                "Basic Reporting"
              ],
              note: "Based on typical 2-3 week project scope"
            },
            {
              name: "Professional",
              price: "$2,500",
              features: [
                "Everything in Starter +",
                "Advanced Analytics", 
                "Inventory Management",
                "Multi-location Support",
                "Custom Report Builder"
              ],
              note: "Based on typical 4-5 week project scope"
            },
            {
              name: "Enterprise",
              price: "$5,000+", 
              features: [
                "Custom Business Intelligence Suite",
                "Real-time Data Sync",
                "Advanced Security Features",
                "Custom Module Development",
                "White-label Solution"
              ],
              note: "Tailored to your specific requirements"
            }
          ],
          caseStudy: {
            text: "View Al-Multaqa Case Study",
            link: "/portfolio/al-multaqa"
          }
        }
      ],
      nav: {
        home: "Home",
        portfolio: "Portfolio", 
        about: "About",
        contact: "Contact"
      },
      customSolution: "Need a custom solution?",
      contactCta: "Let's discuss your project"
    },
    ar: {
      title: "الخدمات",
      subtitle: "حلول ويب متميزة مصممة لنمو الأعمال في الخليج",
      services: [
        {
          title: "منصة العقارات المتميزة",
          description: "من مبيعات قيد التخطيط إلى قوائم الفخامة، أبني الأدوات التي تنجز الصفقات.",
          packages: [
            {
              name: "المبتدئ",
              price: "1,500 $",
              features: [
                "آلة حاسبة مخصصة لخطط الدفع",
                "صفحة هبوط ثنائية اللغة (إنجليزية/عربية)",
                "عقارات مدرجة", // ✅ IMPROVED: More professional real estate term
                "تكامل نموذج التواصل والواتساب" // ✅ IMPROVED: Clearer communication integration
              ],
              note: "بناءً على نطاق مشروع نموذجي 2-3 أسابيع"
            },
            {
              name: "المحترف",
              price: "3,500 $",
              features: [
                "كل ما في المبتدئ +",
                "لوحة تحكم إدارية كاملة",
                "تكامل التاريخ الهجري والميلادي",
                "خريطة موقع تفاعلية",
                "تكامل الجولة الافتراضية (صور 360°/فيديو)"
              ],
              note: "بناءً على نطاق مشروع نموذجي 4-6 أسابيع"
            },
            {
              name: "المؤسسي",
              price: "+7,000 $",
              features: [
                "منصة مخصصة بالكامل مع CRM",
                "إدارة متقدمة للعملاء المحتملين",
                "لوحة تحكم تحليلات لحظية", // ✅ IMPROVED: More technical term
                "تكاملات API مخصصة",
                "دعم أولوية وصيانة"
              ],
              note: "مصممة خصيصًا لمتطلباتك"
            }
          ],
          caseStudy: {
            text: "مشاهدة دراسة حالة بيت إيليت", // ✅ IMPROVED: Better CTA wording
            link: "/portfolio/bayt-elite"
          }
        },
        {
          title: "مجموعة أتمتة الأعمال بالذكاء الاصطناعي",
          description: "مراكز خدمة عملاء مدعومة بالذكاء الاصطناعي لإدارة الاستفسارات من واتساب وإنستغرام والبريد الإلكتروني.",
          packages: [
            {
              name: "المبتدئ",
              price: "1,200 $",
              features: [
                "إعداد صندوق وارد موحد",
                "تكامل قناتين (واتساب + بريد إلكتروني)",
                "قوائم ردود ذكاء اصطناعي أساسية",
                "تخزين تاريخ 7 أيام"
              ],
              note: "بناءً على نطاق مشروع نموذجي 2-3 أسابيع"
            },
            {
              name: "المحترف",
              price: "2,800 $",
              features: [
                "كل ما في المبتدئ +",
                "تكامل متعدد القنوات (واتساب، إنستغرام، بريد إلكتروني)",
                "تدريب ذكاء اصطناعي مخصص",
                "تخزين تاريخ 30 يومًا",
                "لوحة تحكم تحليلات أساسية"
              ],
              note: "بناءً على نطاق مشروع نموذجي 4-6 أسابيع"
            },
            {
              name: "المؤسسي",
              price: "+5,500 $",
              features: [
                "تطوير نموذج ذكاء اصطناعي مخصص",
                "تخزين تاريخ غير محدود",
                "تحليلات وتقارير متقدمة",
                "تكامل CRM",
                "دعم أولوية 24/7"
              ],
              note: "مصممة خصيصًا لمتطلباتك"
            }
          ],
          caseStudy: {
            text: "مشاهدة دراسة حالة تواصل AI", // ✅ IMPROVED: Better CTA wording
            link: "/portfolio/tawasul-ai"
          }
        },
        {
          title: "نظام إدارة الخدمات اللوجستية",
          description: "لوحات تحكم السائقين وأدوات إدارة التوصيل لشركات الخدمات اللوجستية من الميل الأخير.",
          packages: [
            {
              name: "المبتدئ",
              price: "1,800 $",
              features: [
                "لوحة تحكم جوال للسائق",
                "تحسين مسار أساسي",
                "تتبع فوري",
                "تحديثات حالة التوصيل"
              ],
              note: "بناءً على نطاق مشروع نموذجي 3-4 أسابيع"
            },
            {
              name: "المحترف",
              price: "4,200 $",
              features: [
                "كل ما في المبتدئ +",
                "خوارزميات مسار متقدمة", 
                "وحدة تحكم إدارة الأسطول",
                "تحليلات الأداء",
                "نظام إشعارات العملاء"
              ],
              note: "بناءً على نطاق مشروع نموذجي 5-7 أسابيع"
            },
            {
              name: "المؤسسي", 
              price: "+8,000 $",
              features: [
                "منصة لوجستية مخصصة",
                "تحسين مسار مدعوم بالذكاء الاصطناعي",
                "دعم متعدد المستودعات",
                "تكاملات API مخصصة",
                "مدير حساب مخصص" // ✅ IMPROVED: Correct Gulf wording
              ],
              note: "مصممة خصيصًا لمتطلباتك"
            }
          ],
          caseStudy: {
            text: "مشاهدة دراسة حالة زمام دليفري", // ✅ IMPROVED: Better CTA wording
            link: "/portfolio/zimam-delivery"
          }
        },
        {
          title: "لوحات تحكم ذكاء الأعمال",
          description: "لوحات تحكم إدارية مخصصة لصالونات وعيادات وأعمال الخدمات لإدارة العمليات.",
          packages: [
            {
              name: "المبتدئ",
              price: "1,000 $",
              features: [
                "لوحة تحكم إدارية أساسية",
                "إدارة المواعيد",
                "قاعدة بيانات العملاء",
                "تقارير أساسية"
              ],
              note: "بناءً على نطاق مشروع نموذجي 2-3 أسابيع"
            },
            {
              name: "المحترف",
              price: "2,500 $",
              features: [
                "كل ما في المبتدئ +",
                "تحليلات متقدمة",
                "إدارة المخزون",
                "دعم المواقع المتعددة",
                "منشئ تقارير مخصص"
              ],
              note: "بناءً على نطاق مشروع نموذجي 4-5 أسابيع"
            },
            {
              name: "المؤسسي",
              price: "+5,000 $", 
              features: [
                "مجموعة ذكاء أعمال مخصصة",
                "مزامنة البيانات الفورية",
                "ميزات أمان متقدمة",
                "تطوير وحدات مخصصة",
                "حل بتصميم العلامة البيضاء" // ✅ IMPROVED: More formal white-label term
              ],
              note: "مصممة خصيصًا لمتطلباتك"
            }
          ],
          caseStudy: {
            text: "مشاهدة دراسة حالة الملتقى", // ✅ IMPROVED: Better CTA wording
            link: "/portfolio/al-multaqa"
          }
        }
      ],
      nav: {
        home: "الرئيسية",
        portfolio: "الأعمال",
        about: "عني",
        contact: "اتصل"
      },
      customSolution: "هل تحتاج إلى حل مخصص؟",
      contactCta: "لنتحدث عن مشروعك"
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
          <Link href={`/${locale}/services`} className="text-primary font-semibold">{locale === 'ar' ? 'الخدمات' : 'Services'}</Link>
          <Link href={`/${locale}/portfolio`} className="text-text hover:text-primary">{t.nav.portfolio}</Link>
          <Link href={`/${locale}/about`} className="text-text hover:text-primary">{t.nav.about}</Link>
          <Link href={`/${locale}/contact`} className="text-text hover:text-primary">{t.nav.contact}</Link>
        </nav>
      </header>

      {/* Services Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">{t.title}</h1>
            <p className="text-xl text-text max-w-3xl mx-auto">{t.subtitle}</p>
          </div>
          
          {/* Services Grid */}
          <div className="space-y-20">
            {t.services.map((service, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                {/* Service Header */}
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold text-primary mb-4">{service.title}</h2>
                  <p className="text-xl text-text max-w-2xl mx-auto">{service.description}</p>
                </div>

                {/* Packages Grid */}
                <div className="grid lg:grid-cols-3 gap-8 mb-8">
                  {service.packages.map((pkg, pkgIndex) => (
                    <div 
                      key={pkgIndex} 
                      className={`rounded-xl p-6 border-2 ${
                        pkg.name === 'Professional' || pkg.name === 'المحترف'
                          ? 'border-accent bg-accent/5 transform scale-105 shadow-lg' 
                          : 'border-gray-200'
                      } transition-all hover:shadow-xl`}
                    >
                      <div className="text-center mb-6">
                        <h3 className="text-xl font-bold text-primary mb-2">{pkg.name}</h3>
                        <div className="text-3xl font-bold text-accent mb-2">{pkg.price}</div>
                        <p className="text-sm text-text/70">{pkg.note}</p>
                      </div>
                      
                      <ul className="space-y-3 mb-6">
                        {pkg.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start">
                            <span className="text-accent mr-2 mt-1">•</span>
                            <span className="text-text">{feature}</span>
                          </li>
                        ))}
                      </ul>

                      {(pkg.name === 'Professional' || pkg.name === 'المحترف') && (
                        <div className="text-center">
                          <span className="inline-block bg-accent text-white text-sm px-3 py-1 rounded-full">
                            {locale === 'ar' ? 'الأكثر طلباً' : 'Most Popular'}
                          </span>
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                {/* Case Study CTA */}
                <div className="text-center border-t border-gray-200 pt-8">
                  <Link 
                    href={service.caseStudy.link}
                    className="inline-flex items-center bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
                  >
                    {service.caseStudy.text}
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Custom Solution CTA */}
          <div className="text-center mt-16 bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
            <h3 className="text-2xl font-bold text-primary mb-4">{t.customSolution}</h3>
            <p className="text-text mb-6 max-w-2xl mx-auto">
              {locale === 'en' 
                ? "Have unique requirements? Let's build a custom solution tailored to your specific business needs."
                : "هل لديك متطلبات فريدة؟ لنبني حلاً مخصصًا مصممًا خصيصًا لاحتياجات عملك."}
            </p>
            <Link 
              href={`/${locale}/contact`}
              className="inline-flex items-center bg-accent text-white px-8 py-3 rounded-lg font-semibold hover:bg-yellow-600 transition-colors"
            >
              {t.contactCta}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}