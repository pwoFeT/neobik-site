import Link from 'next/link';
import { ArrowRight, Zap, Bot, GraduationCap, Search, CheckCircle, Quote } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { WhatsAppButton } from '@/components/ui/FloatingWidgets';
import ScrollAnimator from '@/components/ui/ScrollAnimator';

const services = [
  {
    icon: Bot,
    title: 'Agents IA personnalisés',
    desc: 'Des assistants virtuels adaptés à vos processus : support client, RH, administratif. Disponibles 24h/24, sans erreur ni congé.',
    href: '/services#agents',
  },
  {
    icon: Zap,
    title: 'Automatisation intelligente',
    desc: 'Email, CRM, calendrier, reporting — libérez du temps sur les tâches à faible valeur ajoutée.',
    href: '/services#automatisation',
  },
  {
    icon: GraduationCap,
    title: 'Formations sur mesure',
    desc: 'Ateliers, parcours, interventions en entreprise. Une pédagogie qui démystifie l\'IA sans technosolutionnisme.',
    href: '/services#formation',
  },
  {
    icon: Search,
    title: 'Audit & Conseil stratégique',
    desc: 'Un diagnostic clair pour identifier où l\'IA peut transformer votre organisation, sans vous vendre ce dont vous n\'avez pas besoin.',
    href: '/services#conseil',
  },
];

const engagements = [
  'Diagnostic rapide et sans jargon',
  'Intégration fluide à vos outils existants',
  'Transfert de compétences et autonomie réelle',
  'Confidentialité et éthique des données',
  'Résultats mesurables dès les premières semaines',
];

const testimonials = [
  {
    quote: 'J\'étais angoissée par l\'IA, j\'avais peur de me sentir inutile. Aujourd\'hui, je repars sereine, confiante, et je vois ce que je peux en faire.',
    author: 'Participante',
    context: 'Formation Simplon Guadeloupe',
  },
  {
    quote: 'Ce n\'était pas une formation sur ChatGPT — c\'est une formation sur la façon de penser différemment avec l\'IA. Et ça change tout.',
    author: 'Apprenant',
    context: 'Formation Simplon Guadeloupe',
  },
  {
    quote: 'Vous avez insisté sur la dimension éthique : ne pas devenir esclave d\'un assistant, mais l\'utiliser pour gagner du temps et alléger la charge.',
    author: 'Apprenante',
    context: 'Formation IA, Guadeloupe',
  },
];

const coolSteps = [
  { letter: 'C', word: 'Clarifier', desc: 'Comprendre ce qu\'on veut réellement améliorer avant d\'utiliser l\'IA.' },
  { letter: 'O', word: 'Organiser', desc: 'Structurer les informations, les idées et les processus pour les rendre lisibles.' },
  { letter: 'O', word: 'Optimiser', desc: 'Automatiser ce qui peut l\'être, sans déshumaniser ce qui doit rester humain.' },
  { letter: 'L', word: 'Libérer', desc: 'Redonner du temps, de la clarté et de la confiance aux personnes et aux équipes.' },
];

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        {/* ── HERO ── */}
        <section className="mesh-bg min-h-screen flex items-center pt-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 py-24 grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="section-label mb-6">Guadeloupe · Martinique · Guyane</div>
              <h1 className="font-display text-5xl md:text-6xl xl:text-7xl font-bold leading-none mb-8">
                L&apos;IA qui libère.{' '}
                <br />
                <span className="text-cyan">Pas celle qui</span>{' '}
                <br />
                submerge.
              </h1>
              <p className="font-body text-white/70 text-lg leading-relaxed mb-10 max-w-md">
                Neobik accompagne les TPE, PME et organisations des Antilles-Guyane
                à intégrer l&apos;intelligence artificielle avec méthode, éthique et résultats mesurables.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="btn-primary">
                  Planifier un appel gratuit <ArrowRight size={16} />
                </Link>
                <Link href="/services" className="btn-outline">
                  Nos services
                </Link>
              </div>
            </div>

            {/* Animated badge area */}
            <div className="hidden lg:flex items-center justify-center">
              <div className="relative w-80 h-80">
                {/* Orbit rings */}
                <div className="absolute inset-0 border border-cyan/10 rounded-full animate-spin" style={{ animationDuration: '20s' }} />
                <div className="absolute inset-8 border border-violet/20 rounded-full animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }} />
                {/* Center */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="font-display text-6xl font-bold text-cyan mb-2">N</div>
                    <div className="section-label text-white/50">NEOBIK</div>
                  </div>
                </div>
                {/* Floating dots */}
                {['top-4 left-1/2', 'bottom-4 left-1/2', 'left-4 top-1/2', 'right-4 top-1/2'].map((pos, i) => (
                  <div key={i} className={`absolute ${pos} w-3 h-3 bg-cyan rounded-full -translate-x-1/2 -translate-y-1/2`} />
                ))}
              </div>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30">
            <div className="w-px h-12 bg-gradient-to-b from-transparent to-cyan/50" />
          </div>
        </section>

        {/* ── SERVICES ── */}
        <section className="py-28 px-6 lg:px-12 bg-[#1d0e42]">
          <div className="max-w-7xl mx-auto">
            <ScrollAnimator>
              <div className="section-label mb-4">Ce que nous faisons</div>
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
                Des solutions concrètes.<br />
                <span className="text-cyan">Des résultats mesurables.</span>
              </h2>
              <p className="text-white/60 max-w-xl mb-16 text-lg">
                Nous intégrons l&apos;intelligence artificielle au cœur de vos processus pour vous faire
                gagner du temps, de la clarté et de la performance.
              </p>
            </ScrollAnimator>

            <div className="grid md:grid-cols-2 gap-6">
              {services.map((service, i) => (
                <ScrollAnimator key={service.title} delay={i * 100}>
                  <Link href={service.href} className="card-glass p-8 block group transition-all duration-300">
                    <div className="flex items-start gap-6">
                      <div className="shrink-0 w-12 h-12 bg-cyan/10 border border-cyan/20 flex items-center justify-center group-hover:bg-cyan/20 transition-colors">
                        <service.icon size={22} className="text-cyan" />
                      </div>
                      <div>
                        <h3 className="font-display text-xl font-bold mb-3 group-hover:text-cyan transition-colors">
                          {service.title}
                        </h3>
                        <p className="text-white/60 text-sm leading-relaxed">{service.desc}</p>
                      </div>
                    </div>
                    <div className="mt-6 flex items-center gap-2 text-cyan text-sm font-mono opacity-0 group-hover:opacity-100 transition-opacity">
                      En savoir plus <ArrowRight size={14} />
                    </div>
                  </Link>
                </ScrollAnimator>
              ))}
            </div>
          </div>
        </section>

        {/* ── MÉTHODE COOL ── */}
        <section className="py-28 px-6 lg:px-12">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
            <ScrollAnimator>
              <div className="section-label mb-4">Notre méthode</div>
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
                La méthode{' '}
                <span className="text-cyan">C.O.O.L.</span>
              </h2>
              <p className="text-white/60 text-lg leading-relaxed mb-8">
                Née du terrain et de l&apos;écoute des besoins réels, cette méthode guide la transformation
                numérique des organisations de manière concrète, fluide et humaine.
              </p>
              <p className="text-white/60 text-lg leading-relaxed">
                Elle remet l&apos;humain au centre, tout en faisant de la technologie un levier
                d&apos;autonomie et de sens.
              </p>
            </ScrollAnimator>

            <div className="space-y-4">
              {coolSteps.map((step, i) => (
                <ScrollAnimator key={step.letter + i} delay={i * 120}>
                  <div className="card-glass p-6 flex items-start gap-6">
                    <div className="shrink-0 font-display text-4xl font-bold text-cyan leading-none w-10">
                      {step.letter}
                    </div>
                    <div>
                      <div className="font-display text-xl font-bold mb-1">{step.word}</div>
                      <p className="text-white/60 text-sm leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                </ScrollAnimator>
              ))}
            </div>
          </div>
        </section>

        {/* ── ENGAGEMENTS ── */}
        <section className="py-28 px-6 lg:px-12 bg-[#1d0e42]">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
            <ScrollAnimator>
              <div className="section-label mb-4">Pourquoi Neobik ?</div>
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
                Une approche humaine,{' '}
                <span className="text-cyan">agile et impactante.</span>
              </h2>
              <p className="text-white/60 text-lg leading-relaxed mb-8">
                Parce que l&apos;IA ne doit pas remplacer l&apos;humain, mais le libérer. Nous allions
                technologie et pédagogie pour transformer la complexité en clarté.
              </p>
              <ul className="space-y-4">
                {engagements.map((eng) => (
                  <li key={eng} className="flex items-center gap-3 text-white/80">
                    <CheckCircle size={18} className="text-cyan shrink-0" />
                    <span>{eng}</span>
                  </li>
                ))}
              </ul>
            </ScrollAnimator>

            {/* Testimonials */}
            <div className="space-y-6">
              {testimonials.map((t, i) => (
                <ScrollAnimator key={i} delay={i * 150}>
                  <div className="card-glass p-8 relative">
                    <Quote size={28} className="text-cyan/20 absolute top-6 right-6" />
                    <p className="text-white/80 text-sm leading-relaxed italic mb-4">
                      &ldquo;{t.quote}&rdquo;
                    </p>
                    <div>
                      <div className="text-cyan text-sm font-semibold font-display">{t.author}</div>
                      <div className="text-white/40 text-xs font-mono">{t.context}</div>
                    </div>
                  </div>
                </ScrollAnimator>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA FINAL ── */}
        <section className="py-28 px-6 lg:px-12">
          <div className="max-w-3xl mx-auto text-center">
            <ScrollAnimator>
              <div className="section-label mb-6">Passez à l&apos;action</div>
              <h2 className="font-display text-4xl md:text-6xl font-bold mb-6">
                Prêt à transformer<br />
                <span className="text-cyan">la façon dont vous travaillez ?</span>
              </h2>
              <p className="text-white/60 text-lg mb-10">
                Un appel de 30 minutes pour identifier où l&apos;IA peut créer de la valeur concrète dans votre activité.
                Gratuit. Sans engagement.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/contact" className="btn-primary">
                  Planifier un appel gratuit <ArrowRight size={16} />
                </Link>
                <Link href="/blog" className="btn-outline">
                  Lire le blog
                </Link>
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
