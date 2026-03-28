import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Calendar, Tag } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { WhatsAppButton } from '@/components/ui/FloatingWidgets';
import { getAllArticles, getArticleBySlug, markdocToHtml } from '@/lib/articles';
import NewsletterFormClient from '@/components/ui/NewsletterForm';

interface Props {
  params: { slug: string };
}

const categoryLabels: Record<string, string> = {
  ia: 'Intelligence Artificielle',
  entrepreneuriat: 'Entrepreneuriat',
  formation: 'Formation',
  cybersecurite: 'Cybersécurité',
  reflexion: 'Réflexion',
};

export async function generateStaticParams() {
  const articles = await getAllArticles();
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const article = await getArticleBySlug(params.slug);
  if (!article) return { title: 'Article introuvable | Neobik' };

  const title = article.seoTitle || article.title;
  const description = article.seoDescription || article.excerpt;

  return {
    title: `${title} | Neobik`,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
      publishedTime: article.publishedAt,
      authors: ['Gilles Anselme'],
      url: `https://neobik.com/blog/${article.slug}`,
    },
    twitter: { card: 'summary_large_image', title, description },
  };
}

export default async function ArticlePage({ params }: Props) {
  const article = await getArticleBySlug(params.slug);
  if (!article) notFound();

  const allArticles = await getAllArticles();
  const related = allArticles
    .filter((a) => a.slug !== article.slug && a.category === article.category)
    .slice(0, 3);

  const htmlContent = markdocToHtml(article.content);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: article.title,
    description: article.excerpt,
    datePublished: article.publishedAt,
    author: {
      '@type': 'Person',
      name: 'Gilles Anselme',
      url: 'https://neobik.com/about',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Neobik',
      url: 'https://neobik.com',
    },
    url: `https://neobik.com/blog/${article.slug}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main className="pt-20">
        {/* Hero */}
        <section className="mesh-bg py-20 px-6 lg:px-12">
          <div className="max-w-3xl mx-auto">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-white/40 hover:text-cyan transition-colors font-mono text-sm mb-8"
            >
              <ArrowLeft size={14} /> Retour au blog
            </Link>
            <div className="flex items-center gap-3 mb-6">
              <span className="text-xs font-mono text-cyan border border-cyan/30 px-2 py-0.5">
                {categoryLabels[article.category] || article.category}
              </span>
              <span className="flex items-center gap-1 text-white/40 text-xs font-mono">
                <Calendar size={11} />
                {new Date(article.publishedAt).toLocaleDateString('fr-FR', {
                  day: 'numeric', month: 'long', year: 'numeric',
                })}
              </span>
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-bold leading-tight mb-6">
              {article.title}
            </h1>
            <p className="text-white/60 text-xl leading-relaxed border-l-2 border-cyan/40 pl-6">
              {article.excerpt}
            </p>
          </div>
        </section>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-cyan/20 to-transparent" />

        {/* Content */}
        <section className="py-16 px-6 lg:px-12">
          <div className="max-w-3xl mx-auto">
            <div
              className="prose"
              dangerouslySetInnerHTML={{ __html: htmlContent }}
            />

            {/* Author signature */}
            <div className="mt-16 pt-8 border-t border-white/10 flex items-start gap-4">
              <div className="w-12 h-12 bg-violet flex items-center justify-center font-display font-bold text-cyan text-lg shrink-0">
                GA
              </div>
              <div>
                <div className="font-display font-bold">Gilles Anselme</div>
                <div className="text-white/40 text-sm font-mono">Fondateur de Neobik</div>
                <p className="text-white/50 text-sm mt-1 leading-relaxed">
                  Conseil & Formation en Intelligence Artificielle, Automatisation & Transformation Digitale
                  pour les Antilles-Guyane.
                </p>
              </div>
            </div>

            {/* Share */}
            <div className="mt-10 flex items-center gap-4">
              <span className="section-label">Partager</span>
              <a
                href={`https://www.linkedin.com/shareArticle?mini=true&url=https://neobik.com/blog/${article.slug}&title=${encodeURIComponent(article.title)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-mono text-white/50 border border-white/15 px-3 py-1.5 hover:border-cyan hover:text-cyan transition-colors"
              >
                LinkedIn
              </a>
              <a
                href={`https://wa.me/?text=${encodeURIComponent(article.title + ' — https://neobik.com/blog/' + article.slug)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-mono text-white/50 border border-white/15 px-3 py-1.5 hover:border-cyan hover:text-cyan transition-colors"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </section>

        {/* Related */}
        {related.length > 0 && (
          <section className="py-16 px-6 lg:px-12 bg-[#1d0e42]">
            <div className="max-w-7xl mx-auto">
              <div className="section-label mb-8">À lire aussi</div>
              <div className="grid md:grid-cols-3 gap-6">
                {related.map((a) => (
                  <Link key={a.slug} href={`/blog/${a.slug}`} className="card-glass p-6 block group hover:border-white/20 transition-all">
                    <h3 className="font-display text-lg font-bold mb-2 group-hover:text-cyan transition-colors leading-tight">
                      {a.title}
                    </h3>
                    <p className="text-white/50 text-sm line-clamp-2 leading-relaxed mb-4">{a.excerpt}</p>
                    <span className="text-cyan text-sm font-mono">Lire →</span>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Newsletter */}
        <section className="py-16 px-6 lg:px-12">
          <div className="max-w-2xl mx-auto text-center">
            <div className="section-label mb-3">Newsletter</div>
            <h2 className="font-display text-3xl font-bold mb-3">
              Ma veille IA, chaque semaine.
            </h2>
            <p className="text-white/60 mb-8">
              Pas de hype, pas de bruit. Les actualités IA que je juge vraiment utiles pour votre activité.
            </p>
            <NewsletterFormClient />
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
