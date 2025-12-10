'use client';

import Link from "next/link";
import { usePathname } from "next/navigation"; 

// Grok's Icon Map 
const icons = {
    email: '✉️',
    whatsapp: '💬',
    telegram: '📱',
    linkedin: '👔',
    github: '🖥️',
    location: '📍'
};

export default function Contact({ params }) {
  const locale = params?.locale || params?.slug?.[0] || "en";
  const pathname = usePathname(); 
  const oppositeLocale = locale === "en" ? "ar" : "en";

  const content = {
    en: {
      title: "Get in Touch with Faruk",
      subtitle: "Prioritized communication channels for high-value Gulf clients.",
      contacts: [
        { key: 'email', label: "Email Address", value: "fazetdev@gmail.com", href: "mailto:fazetdev@gmail.com", type: 'primary', icon: icons.email, description: "For project briefs, formal inquiries, and detailed proposals." },
        { key: 'whatsapp', label: "WhatsApp Chat", value: "+234 708 292 1105", href: "https://wa.me/2347082921105", type: 'accent', icon: icons.whatsapp, description: "Fastest response time for quick questions and urgent scheduling." },
        { key: 'linkedin', label: "LinkedIn", value: "/faruk-bashir-aminu", href: "https://www.linkedin.com/in/faruk-bashir-aminu-65b30b36b", type: 'secondary', icon: icons.linkedin },
        { key: 'github', label: "GitHub", value: "/fazetdev", href: "https://github.com/fazetdev", type: 'secondary', icon: icons.github },
        { key: 'telegram', label: "Telegram", value: "@fazetdev", href: "https://t.me/fazetdev", type: 'secondary', icon: icons.telegram },
        { key: 'location', label: "Location", value: "Kano, Nigeria (GST +4)", type: 'secondary', icon: icons.location },
      ],
      ctaBooking: "Go to Booking Page",
    },
    ar: {
      title: "تواصل مع فاروق",
      subtitle: "قنوات اتصال ذات أولوية لعملاء الخليج ذوي القيمة العالية.",
      contacts: [
        { key: 'email', label: "البريد الإلكتروني", value: "fazetdev@gmail.com", href: "mailto:fazetdev@gmail.com", type: 'primary', icon: icons.email, description: "لملخصات المشاريع والاستفسارات الرسمية والمقترحات التفصيلية." },
        { key: 'whatsapp', label: "واتساب", value: "+234 708 292 1105", href: "https://wa.me/2347082921105", type: 'accent', icon: icons.whatsapp, description: "أسرع وقت استجابة للأسئلة السريعة والجدولة العاجلة." },
        { key: 'linkedin', label: "لينكدإن", value: "/faruk-bashir-aminu", href: "https://www.linkedin.com/in/faruk-bashir-aminu-65b30b36b", type: 'secondary', icon: icons.linkedin },
        { key: 'github', label: "GitHub", value: "/fazetdev", href: "https://github.com/fazetdev", type: 'secondary', icon: icons.github },
        { key: 'telegram', label: "تيليجرام", value: "@fazetdev", href: "https://t.me/fazetdev", type: 'secondary', icon: icons.telegram },
        { key: 'location', label: "الموقع", value: "كانو، نيجيريا (GST +4)", type: 'secondary', icon: icons.location },
      ],
      ctaBooking: "اذهب إلى صفحة الحجز",
    }
  };

  const t = content[locale] || content.en;

  const getOppositeLocalePath = () => {
    if (!pathname) return `/${oppositeLocale}/contact`;
    const pathParts = pathname.split('/').filter(part => part);
    if (pathParts.length > 0 && (pathParts[0] === 'en' || pathParts[0] === 'ar')) {
      pathParts[0] = oppositeLocale;
      return `/${pathParts.join('/')}`;
    } else {
      return `/${oppositeLocale}${pathname === '/' ? '' : pathname}`;
    }
  };

  const primaryContact = t.contacts.find(c => c.key === 'email');
  const accentContact = t.contacts.find(c => c.key === 'whatsapp');
  const secondaryContacts = t.contacts.filter(c => c.type === 'secondary');
  
  // Custom Card Component for Priority Contacts
  const PriorityCard = ({ contact }) => {
    const isAccent = contact.type === 'accent';
    const bgColor = isAccent ? 'bg-accent text-white' : 'bg-primary text-white';
    const hoverColor = isAccent ? 'hover:bg-accent-dark' : 'hover:bg-primary-dark';
    
    return (
      <a 
        href={contact.href} 
        target={contact.key !== 'location' ? "_blank" : "_self"} 
        rel="noopener noreferrer" 
        className={`flex flex-col items-center justify-center p-8 rounded-xl shadow-2xl transition-all duration-300 transform hover:scale-[1.03] ${bgColor} ${hoverColor} h-full`}
      >
        <div className="text-5xl mb-4">{contact.icon}</div>
        <h3 className="text-xl font-extrabold mb-1">{contact.label}</h3>
        <p className="text-lg font-mono tracking-wider mb-3">{contact.value}</p>
        <p className={`text-sm text-center font-light opacity-80 ${isAccent ? 'text-white' : 'text-gray-200'}`}>{contact.description}</p>
      </a>
    );
  };

  return (
    <div className={`min-h-screen bg-neutral-50 text-neutral-900 ${locale === 'ar' ? 'font-arabic' : 'font-english'}`} dir={locale === 'ar' ? 'rtl' : 'ltr'}>
      {/* Header */}
      <header className="bg-white/95 backdrop-blur-sm sticky top-0 z-40 border-b border-gray-200">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-4">
          <Link href={`/${locale}`} className="text-xl font-extrabold tracking-tight text-primary hover:text-accent transition">
            Fazet.dev
          </Link>
          <div className="flex items-center gap-3 text-sm">
            <Link 
              href={getOppositeLocalePath()}
              className="px-3 py-1 bg-gray-50 rounded-lg font-semibold text-gray-700 hover:bg-gray-100 transition"
            >
              {oppositeLocale.toUpperCase()}
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-primary leading-tight">{t.title}</h1>
          <p className="mt-4 text-xl text-neutral-700 max-w-3xl mx-auto">{t.subtitle}</p>
        </div>

        {/* PRIORITY CONTACTS - 3-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Email Card (Primary Navy) */}
          <div className="lg:col-span-1">
            {primaryContact && <PriorityCard contact={primaryContact} />}
          </div>

          {/* WhatsApp Card (Accent Gold/Teal) */}
          <div className="lg:col-span-1">
            {accentContact && <PriorityCard contact={accentContact} />}
          </div>

          {/* SECONDARY CONTACTS - Grouped */}
          <div className="lg:col-span-1 bg-white rounded-xl p-6 shadow-xl border border-gray-200">
            <h2 className="text-2xl font-bold text-primary mb-6 border-b pb-3">
              {locale === "ar" ? "وسائل أخرى" : "Secondary Channels"}
            </h2>
            <div className="space-y-6">
              {secondaryContacts.map((contact) => (
                <div key={contact.key} className="flex items-start">
                  <span className="text-xl mr-4 rtl:mr-0 rtl:ml-4 flex-shrink-0">{contact.icon}</span>
                  <div>
                    <p className="font-semibold text-gray-800 mb-1">{contact.label}</p>
                    <a 
                      href={contact.href} 
                      target={contact.key !== 'location' ? "_blank" : "_self"} 
                      rel="noopener noreferrer" 
                      className={`text-gray-600 hover:text-primary transition ${contact.key !== 'location' ? 'hover:underline' : ''}`}
                    >
                      {contact.value}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Booking CTA */}
        <div className="mt-12 text-center">
          <Link
            href={`/${locale}/book`}
            className="inline-flex items-center bg-accent text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-accent-dark transition shadow-lg transform hover:scale-[1.02]"
          >
            {t.ctaBooking}
          </Link>
          <p className="mt-3 text-sm text-neutral-500">
            {locale === 'ar' ? "لضمان أفضل خدمة، يفضل جدولة موعد." : "For the best service, scheduling a consultation is recommended."}
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
