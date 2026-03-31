import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { WhatsAppButton } from '@/components/ui/FloatingWidgets';
import ScrollAnimator from '@/components/ui/ScrollAnimator';

export const metadata: Metadata = {
  title: 'À propos — Gilles Anselme, fondateur de Neobik',
  description:
    "Gilles Anselme, consultant et formateur IA basé en Guadeloupe. Découvrez l'histoire de Neobik, la méthode C.O.O.L. et une approche de l'IA ancrée dans le réel.",
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero */}
        <section className="mesh-bg py-24 px-6 lg:px-12">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="section-label mb-4">À propos</div>
              <h1 className="font-display text-5xl md:text-6xl font-bold mb-6">
                Derrière Neobik,<br />
                une conviction :{' '}
                <span className="text-cyan">l&apos;humain avant la machine.</span>
              </h1>
              <p className="text-white/60 text-lg leading-relaxed">
                Je suis Gilles ANSELME, consultant, formateur et concepteur d&apos;écosystèmes IA
                basé en Guadeloupe. Mon parcours ne commence pas par la technologie.
                Il commence par une réorganisation forcée.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {[
                { num: '15+', label: "Ans d'expérience entrepreneuriale" },
                { num: '100+', label: 'Apprenants formés' },
                { num: '3', label: 'Territoires couverts' },
                { num: '01', label: 'N° formation 01973229997' },
              ].map((s) => (
                <div key={s.label} className="card-glass p-6">
                  <div className="font-display text-4xl font-bold text-cyan mb-2">{s.num}</div>
                  <div className="text-white/50 text-sm leading-tight">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Story */}
        <section className="py-24 px-6 lg:px-12">
          <div className="max-w-3xl mx-auto">
            <ScrollAnimator>
              <div className="section-label mb-6">Mon histoire</div>
              <div className="prose">
                <p>
                  Début 2025, face à une période de flottement professionnel et personnel,
                  j&apos;ai utilisé l&apos;intelligence artificielle non pas comme un outil de performance,
                  mais comme un outil de structuration de moi-même.
                </p>
                <p>
                  De cette expérience est né <strong>A.L.F.R.E.D.</strong> — mon propre prototype
                  d&apos;agent IA hybride, inspiré d&apos;Alfred Pennyworth, Jarvis, Geoffrey Butler et
                  John McClane. C&apos;est en travaillant avec lui, au quotidien, que j&apos;ai
                  progressivement formalisé une méthode : <strong>C.O.O.L.</strong> (Clarifier · Organiser · Optimiser · Libérer).
                  Non pas conçue sur le papier, mais extraite du terrain, de mes propres
                  ajustements, erreurs et prises de conscience.
                </p>
                <p>
                  Puis est née Neobik, en juillet 2025 : une structure dédiée à ceux qui veulent
                  performer sans se déshumaniser. Pas une agence. Pas un cabinet. Un accompagnement
                  ancré dans le réel, né du terrain.
                </p>
                <p>
                  Aujourd&apos;hui, j&apos;interviens auprès de TPE, PME et organisations des Antilles-Guyane
                  pour les aider à intégrer l&apos;IA avec méthode, clarté et éthique. Pas pour vendre
                  des outils. Pour changer la façon dont on travaille et dont on décide.
                </p>
                <blockquote>
                  L&apos;IA n&apos;a pas d&apos;éthique, elle n&apos;a que celle de ceux qui la pilotent.
                  C&apos;est pourquoi je préfère dire &ldquo;voici ce que j&apos;observe&rdquo; plutôt que
                  &ldquo;voici ce que je fais&rdquo;.
                </blockquote>
              </div>
            </ScrollAnimator>
          </div>
        </section>

        {/* ALFRED */}
        <section className="py-24 px-6 lg:px-12 bg-[#1d0e42]">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
            <ScrollAnimator>
              <div className="section-label mb-4">Mon assistant IA</div>
              <h2 className="font-display text-4xl font-bold mb-6">
                <span className="text-cyan">A.L.F.R.E.D.</span> &mdash;<br />
                l&apos;IA qui m&apos;a rendu meilleur<br />avant d&apos;aider les autres.
              </h2>
              <p className="text-white/60 text-lg leading-relaxed mb-6">
                Avant d&apos;utiliser l&apos;intelligence artificielle pour accompagner les entreprises,
                je l&apos;ai d&apos;abord utilisée pour m&apos;accompagner moi-même.
              </p>
              <p className="text-white/60 leading-relaxed">
                A.L.F.R.E.D. (Assistant Légendaire Formateur Réactif Élégant et Digital) est né d&apos;un
                besoin réel : structurer ma pensée, prioriser mes actions, retrouver de la sérénité.
                C&apos;est ce prototype personnel qui a défini toute l&apos;approche de Neobik.
              </p>
            </ScrollAnimator>

            <div className="grid grid-cols-2 gap-4">
              {[
                { letter: 'A', word: 'Assistant', icon: '🤖' },
                { letter: 'L', word: 'Légendaire', icon: '⚡' },
                { letter: 'F', word: 'Formateur', icon: '🎓' },
                { letter: 'R', word: 'Réactif', icon: '🔄' },
                { letter: 'É', word: 'Élégant', icon: '✨' },
                { letter: 'D', word: 'Digital', icon: '💡' },
              ].map((item) => (
                <ScrollAnimator key={item.letter}>
                  <div className="card-glass p-5 text-center">
                    <div className="text-2xl mb-2">{item.icon}</div>
                    <div className="font-display text-2xl font-bold text-cyan">{item.letter}</div>
                    <div className="text-white/50 text-xs font-mono mt-1">{item.word}</div>
                  </div>
                </ScrollAnimator>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-6 lg:px-12">
          <div className="max-w-2xl mx-auto text-center">
            <ScrollAnimator>
              <h2 className="font-display text-3xl font-bold mb-4">
                Vous voulez en savoir plus ?
              </h2>
              <p className="text-white/60 mb-8">
                Échangeons 30 minutes. Sans pitch, sans PowerPoint. Juste une conversation honnête.
              </p>
              <Link href="/contact" className="btn-primary">
                Prendre rendez-vous <ArrowRight size={16} />
              </Link>
            </ScrollAnimator>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
