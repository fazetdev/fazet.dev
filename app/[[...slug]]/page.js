import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <section className="py-20 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6">
            Freelance Web Developer Specialized in Gulf-Focused Digital Solutions
          </h1>
          <p className="text-xl md:text-2xl text-text mb-8 max-w-3xl mx-auto">
            Building fast, mobile-first, and culturally-aware web applications for businesses in Saudi Arabia, UAE, and Qatar
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/portfolio"
              className="bg-accent text-white px-8 py-3 rounded-lg font-semibold hover:bg-yellow-600 transition-colors"
            >
              View My Work
            </Link>
            <Link
              href="/contact"
              className="border-2 border-primary text-primary px-8 py-3 rounded-lg font-semibold hover:bg-primary hover:text-white transition-colors"
            >
              Contact Me
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
