import Link from 'next/link';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="min-h-screen mesh-bg flex items-center justify-center px-6">
        <div className="text-center max-w-xl">
          {/* Big 404 */}
          <div className="font-display text-[160px] md:text-[220px] font-bold leading-none text-cyan/10 select-none mb-0">
            404
          </div>

          <div className="font-mono text-cyan text-sm tracking-widest uppercase mb-4 -mt-6">
            Page introuvable
          </div>

          <h1 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Cette page n&apos;existe pas.
          </h1>

          <p className="text-white/50 text-lg leading-relaxed mb-10">
            Comme une IA mal promptée — elle a cherché, mais n&apos;a rien trouvé de pertinent.
            Retournez à l&apos;essentiel.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/" className="btn-primary">
              <ArrowLeft size={16} /> Retour à l&apos;accueil
            </Link>
            <Link href="/contact" className="btn-outline">
              Nous contacter <ArrowRight size={16} />
            </Link>
          </div>

          {/* Quick links */}
          <div className="mt-12 flex flex-wrap justify-center gap-6 text-sm font-mono text-white/30">
            {[
              { href: '/services', label: 'Services' },
              { href: '/blog', label: 'Blog' },
              { href: '/about', label: 'À propos' },
            ].map((l) => (
              <Link key={l.href} href={l.href} className="hover:text-cyan transition-colors">
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
