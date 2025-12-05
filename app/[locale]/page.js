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
  const isRTL = locale === 'ar';

  return (
    <div className={`min-h-screen bg-gradient-to-br from-gray-50 to-emerald-50 ${isRTL ? 'font-cairo' : 'font-poppins'}`} dir={isRTL ? 'rtl' : 'ltr'}>
      
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-emerald-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/3 w-80 h-80 bg-amber-100 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative px-4 sm:px-6 md:px-12 lg:px-20 py-8 md:py-12 space-y-16 md:space-y-24">
        
        {/* Hero Section - Luxury Gulf Style */}
        <section className="relative rounded-3xl md:rounded-[2.5rem] overflow-hidden group">
          {/* Luxury Gradient Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-600 via-emerald-700 to-emerald-900"></div>
          
          {/* Gold Accent Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-500/10 to-transparent animate-shimmer"></div>
          
          {/* Geometric Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              backgroundSize: '30px'
            }}></div>
          </div>
          
          <div className="relative z-10 text-center px-6 py-12 md:px-12 md:py-20 lg:py-24">
            {/* Experience Badge */}
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-8 animate-fade-in">
              <span className="w-2 h-2 bg-emerald-300 rounded-full animate-pulse"></span>
              <span className="text-sm font-semibold text-white tracking-wide">{t.hero.experience}</span>
            </div>
            
            {/* Main Title with Glow Effect */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-emerald-100 to-amber-100 drop-shadow-2xl">
                {t.hero.title}
              </span>
            </h1>
            
            {/* Subtitle */}
            <p className="text-lg md:text-xl lg:text-2xl text-emerald-100 mb-10 max-w-3xl mx-auto leading-relaxed px-4">
              {t.hero.subtitle}
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 md:gap-6 mt-8">
              <Link 
                href={`/${locale}/portfolio`}
                className="group relative px-8 py-4 bg-gradient-to-r from-white to-emerald-50 text-emerald-900 font-bold rounded-2xl shadow-2xl hover:shadow-emerald-500/30 transition-all duration-300 hover:-translate-y-1 min-w-[200px] text-center overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/0 via-white/20 to-emerald-500/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                <span className="relative flex items-center justify-center gap-2">
                  {t.hero.viewWork}
                  <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </Link>
              
              <Link 
                href={`/${locale}/contact`}
                className="group relative px-8 py-4 border-2 border-white/50 text-white font-bold rounded-2xl backdrop-blur-sm hover:bg-white/10 transition-all duration-300 hover:border-white hover:shadow-lg min-w-[200px] text-center"
              >
                <span className="relative flex items-center justify-center gap-2">
                  {t.hero.contactMe}
                  <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </span>
              </Link>
            </div>
          </div>
        </section>

        {/* Services Section - Card Grid with Hover Effects */}
        <section className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-emerald-800">
                {t.services.title}
              </span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              {t.services.subtitle}
            </p>
          </div>
          
          <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
            {t.services.items.map((item, i) => (
              <div 
                key={i}
                className="group relative bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-200 overflow-hidden"
              >
                {/* Hover Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/0 via-emerald-500/5 to-emerald-500/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                
                {/* Service Number */}
                <div className="absolute top-6 right-6 w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-700 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-lg">
                  {i + 1}
                </div>
                
                <div className="relative space-y-4">
                  <h3 className="text-2xl font-bold text-gray-900 group-hover:text-emerald-700 transition-colors">
                    {item.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {item.tech.split('•').map((techItem, idx) => (
                      <span 
                        key={idx}
                        className="px-3 py-1 bg-emerald-50 text-emerald-700 text-sm font-medium rounded-full border border-emerald-100"
                      >
                        {techItem.trim()}
                      </span>
                    ))}
                  </div>
                  
                  <Link 
                    href={item.link}
                    className="inline-flex items-center gap-2 text-emerald-600 font-semibold group/link"
                  >
                    {item.linkText}
                    <svg className="w-4 h-4 transform group-hover/link:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Why Choose Me Section - Elegant List */}
        <section className="bg-gradient-to-br from-white to-emerald-50 rounded-3xl p-8 md:p-12 shadow-xl">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-700 to-emerald-900">
                {t.why.title}
              </span>
            </h2>
            
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {t.why.items.map((item, i) => (
                <div 
                  key={i}
                  className="relative p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group border border-emerald-100"
                >
                  {/* Icon */}
                  <div className="absolute -top-3 -left-3 w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg">
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  
                  <p className="text-gray-700 pt-6 pl-2 pr-4 group-hover:text-emerald-800 transition-colors">
                    {item}
                  </p>
                </div>
              ))}
            </div>
            
            {/* Trust Badges */}
            <div className="flex flex-wrap justify-center items-center gap-6 md:gap-12 mt-16 pt-8 border-t border-gray-200">
              <div className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-emerald-800 bg-clip-text text-transparent">100%</div>
                <div className="text-sm text-gray-600">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-emerald-800 bg-clip-text text-transparent">50+</div>
                <div className="text-sm text-gray-600">Projects Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-emerald-800 bg-clip-text text-transparent">24/7</div>
                <div className="text-sm text-gray-600">Gulf Time Support</div>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}