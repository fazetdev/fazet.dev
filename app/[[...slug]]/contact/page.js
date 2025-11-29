import Image from 'next/image';
import Link from 'next/link';

export default function Contact({ params }) {
  const locale = params?.slug?.[0] || 'en';

  const content = {
    en: {
      title: "Contact Faruk Aminu",
      subtitle: "Professional web solutions for Gulf businesses",
      description: [
        "I am a web developer specializing in fast, reliable, and culturally-aware solutions for the Gulf market.",
        "Based in Kano, Nigeria, I bring international standards and clear communication to every project.",
        "Feel free to reach out through email, WhatsApp, Telegram, or GitHub. I respond promptly and professionally."
      ],
      labels: {
        email: "Email",
        linkedin: "LinkedIn",
        github: "GitHub",
        whatsapp: "WhatsApp / Telegram",
        location: "Location",
        contactMe: "Contact Me"
      }
    },
    ar: {
      title: "اتصل بفرّوق أمينو",
      subtitle: "حلول ويب مهنية لعملاء الخليج",
      description: [
        "أنا مطور ويب متخصص في تقديم حلول سريعة وموثوقة ومراعية للثقافة لسوق الخليج.",
        "أقيم في كانو، نيجيريا، وأقدم معايير دولية وتواصل واضح في كل مشروع.",
        "لا تتردد في التواصل عبر البريد الإلكتروني، واتساب، تيليجرام أو GitHub. أستجيب بسرعة وباحترافية."
      ],
      labels: {
        email: "البريد الإلكتروني",
        linkedin: "لينكدإن",
        github: "GitHub",
        whatsapp: "واتساب / تيليجرام",
        location: "الموقع",
        contactMe: "تواصل معي"
      }
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
            <a href="/en/contact" className="text-text hover:text-primary">EN</a>
            <span className="text-gray-300">|</span>
            <a href="/ar/contact" className="text-text hover:text-primary">AR</a>
          </div>
        </div>
        <nav className="max-w-7xl mx-auto px-4 py-2 flex space-x-6 rtl:space-x-reverse text-sm">
          <Link href={`/${locale}`} className="text-text hover:text-primary">{t.labels.home}</Link>
          <Link href={`/${locale}/services`} className="text-text hover:text-primary">{t.labels.services}</Link>
          <Link href={`/${locale}/portfolio`} className="text-text hover:text-primary">{t.labels.portfolio}</Link>
          <Link href={`/${locale}/about`} className="text-text hover:text-primary">{t.labels.about}</Link>
          <Link href={`/${locale}/contact`} className="text-primary font-semibold">{t.labels.contactMe}</Link>
        </nav>
      </header>

      {/* Contact Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">{t.title}</h1>
          <p className="text-xl text-text mb-8">{t.subtitle}</p>

          {/* Profile Image */}
          <div className="mx-auto mb-8 w-48 h-48 relative rounded-full overflow-hidden border-4 border-accent shadow-lg">
            <Image
              src="/images/faruk.jpg"
              alt="Faruk Aminu"
              fill
              className="object-cover"
            />
          </div>

          {/* Description */}
          <div className="space-y-4 text-lg text-text mb-12">
            {t.description.map((para, index) => (
              <p key={index}>{para}</p>
            ))}
          </div>

          {/* Contact Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200">
              <p><strong>{t.labels.email}:</strong> <a href="mailto:fazetdev@gmail.com" className="text-accent hover:underline">fazetdev@gmail.com</a></p>
              <p><strong>{t.labels.linkedin}:</strong> <a href="https://linkedin.com/in/faruk-bashir-aminu" target="_blank" className="text-accent hover:underline">faruk Bashir Aminu</a></p>
              <p><strong>{t.labels.github}:</strong> <a href="https://github.com/fazetdev" target="_blank" className="text-accent hover:underline">fazetdev</a></p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200">
              <p><strong>{t.labels.whatsapp}:</strong> <a href="https://wa.me/2347982921105" className="text-accent hover:underline">+234 798 292 1105</a></p>
              <p><strong>{t.labels.location}:</strong> Kano, Nigeria</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
