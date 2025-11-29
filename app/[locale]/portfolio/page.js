import Link from 'next/link';

export default function Portfolio({ params }) {
  const locale = params?.slug?.[0] || 'en';
  const t = content[locale] || content.en;

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <Link href={`/${locale}`} className="text-xl font-bold text-primary">Faruk Aminu</Link>
          <div className="flex space-x-4 rtl:space-x-reverse">
            <Link href="/en" className="text-text hover:text-primary">EN</Link>
            <span className="text-gray-300">|</span>
            <Link href="/ar" className="text-text hover:text-primary">AR</Link>
          </div>
        </div>
        <nav className="max-w-7xl mx-auto px-4 py-2 flex space-x-6 rtl:space-x-reverse text-sm">
          <Link href={`/${locale}`} className="text-text hover:text-primary">{t.nav.home}</Link>
          <Link href={`/${locale}/portfolio`} className="text-primary font-semibold">{t.nav.portfolio}</Link>
          <Link href={`/${locale}/about`} className="text-text hover:text-primary">{t.nav.about}</Link>
          <Link href={`/${locale}/contact`} className="text-text hover:text-primary">{t.nav.contact}</Link>
        </nav>
      </header>

      <section className="py-20 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">{t.hero.title}</h1>
          <p className="text-xl md:text-2xl text-text mb-8 max-w-3xl mx-auto">{t.hero.subtitle}</p>

          <div className="grid md:grid-cols-2 gap-8">
            {t.projects.map((project, index) => (
              <div key={index} className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow text-left">
                <h2 className="text-2xl font-bold text-primary mb-2">{project.title}</h2>
                <p className="text-text mb-4">{project.description}</p>
                <Link href={project.link} className="text-accent font-semibold hover:underline">{project.linkText}</Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

const content = {
  en: {
    hero: { ... },
    projects: [ ... ],
    nav: { ... }
  },
  ar: {
    hero: { ... },
    projects: [ ... ],
    nav: { ... }
  }
};
