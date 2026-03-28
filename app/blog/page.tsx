import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Calendar, Tag } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { WhatsAppButton } from '@/components/ui/FloatingWidgets';
import ScrollAnimator from '@/components/ui/ScrollAnimator';
import { getAllArticles } from '@/lib/articles';

export const metadata: Metadata = {
  title: 'Blog — Intelligence Artificielle, Entrepreneuriat & Formation | Neobik',
  description:
    'Réflexions sur l\'IA, l\'entrepreneuriat aux Antilles-Guyane, la formation et la transformation numérique. Par Gilles Anselme, fondateur de Neobik.',
};

const categoryLabels: Record<string, string> = {
  ia: 'Intelligence Artificielle',
  entrepreneuriat: 'Entrepreneuriat',
  formation: 'Formation',
  cybersecurite: 'Cybersécurité',
  reflexion: 'Réflexion',
};

const categoryColors: Record<string, string> = {
  ia: 'text-cyan border-cyan/30',
  entrepreneuriat: 'text-violet-300 border-violet-300/30',
  formation: 'text-emerald-400 border-emerald-400/30',
  cybersecurite: 'text-orange-400 border-orange-400/30',
  reflexion: 'text-pink-400 border-pink-400/30',
};

export default async function BlogPage() {
  const articles = await getAllArticles();

  const featured = articles.find((a) => a.featured);
  const rest = articles.filter((a) => !a.featured);

  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero */}
        <section className="mesh-bg py-24 px-6 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="section-label mb-4">Blog</div>
            <h1 className="font-display text-5xl md:text-6xl font-bold mb-6 max-w-2xl">
              Réflexions sur l&apos;IA<br />
              <span className="text-cyan">sans filtre marketing.</span>
            </h1>
            <p className="text-white/60 text-lg max-w-xl">
              Des textes qui partent du vécu réel. Tensions, contradictions, lucidité.
              Ce que les formations techniques n&apos;osent pas dire.
            </p>
          </div>
        </section>

        <section className="py-20 px-6 lg:px-12">
          <div className="max-w-7xl mx-auto">

            {/* Featured article */}
            {featured && (
              <ScrollAnimator>
                <Link href={`/blog/${featured.slug}`} className="block mb-16 group">
                  <div className="card-glass p-10 grid lg:grid-cols-2 gap-10 items-center hover:border-cyan/30 transition-all duration-300">
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <span className="section-label text-orange-400">À la une</span>
                        <span className={`text-xs font-mono border px-2 py-0.5 ${categoryColors[featured.category] || 'text-white/50 border-white/20'}`}>
                          {categoryLabels[featured.category] || featured.category}
                        </span>
                      </div>
                      <h2 className="font-display text-3xl font-bold mb-4 group-hover:text-cyan transition-colors">
                        {featured.title}
                      </h2>
                      <p className="text-white/60 leading-relaxed mb-6">{featured.excerpt}</p>
                      <div className="flex items-center gap-4 text-white/40 text-xs font-mono">
                        <span className="flex items-center gap-1">
                          <Calendar size={12} />
                          {new Date(featured.publishedAt).toLocaleDateString('fr-FR', {
                            day: 'numeric', month: 'long', year: 'numeric',
                          })}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center justify-end">
                      <div className="flex items-center gap-2 text-cyan font-display font-semibold">
                        Lire l&apos;article <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
              </ScrollAnimator>
            )}

            {/* Article grid */}
            {articles.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-white/40 font-mono text-sm">
                  Les articles arrivent bientôt. Revenez vite.
                </p>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {rest.map((article, i) => (
                  <ScrollAnimator key={article.slug} delay={i * 80}>
                    <Link href={`/blog/${article.slug}`} className="card-glass p-8 block group h-full flex flex-col hover:border-white/20 transition-all duration-300">
                      <div className="flex items-center gap-2 mb-4">
                        <span className={`text-xs font-mono border px-2 py-0.5 ${categoryColors[article.category] || 'text-white/50 border-white/20'}`}>
                          {categoryLabels[article.category] || article.category}
                        </span>
                      </div>
                      <h3 className="font-display text-xl font-bold mb-3 group-hover:text-cyan transition-colors leading-tight flex-1">
                        {article.title}
                      </h3>
                      <p className="text-white/50 text-sm leading-relaxed mb-6 line-clamp-3">
                        {article.excerpt}
                      </p>
                      <div className="flex items-center justify-between text-xs font-mono text-white/30 mt-auto">
                        <span className="flex items-center gap-1">
                          <Calendar size={11} />
                          {new Date(article.publishedAt).toLocaleDateString('fr-FR', {
                            day: 'numeric', month: 'short', year: 'numeric',
                          })}
                        </span>
                        <span className="text-cyan group-hover:translate-x-1 transition-transform inline-block">→</span>
                      </div>
                    </Link>
                  </ScrollAnimator>
                ))}
              </div>
            )}

            {/* Newsletter CTA */}
            <ScrollAnimator>
              <div className="mt-20 card-glass p-10 text-center border-cyan/20">
                <div className="section-label mb-3">Newsletter</div>
                <h2 className="font-display text-3xl font-bold mb-3">
                  Ma veille IA, directement dans votre boîte.
                </h2>
                <p className="text-white/60 mb-8 max-w-md mx-auto">
                  Chaque semaine, une sélection des actualités IA que je juge pertinentes pour les entreprises
                  des Antilles-Guyane. Sans bruit. Sans hype inutile.
                </p>
                <NewsletterForm />
              </div>
            </ScrollAnimator>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}

function NewsletterForm() {
  // This is a server component — we use a client form below
  return <NewsletterFormClient />;
}

// Inlined client form to avoid extra file
import NewsletterFormClient from '@/components/ui/NewsletterForm';
