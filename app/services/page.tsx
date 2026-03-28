import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Bot, Zap, GraduationCap, Search, Mic, CheckCircle } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { WhatsAppButton } from '@/components/ui/FloatingWidgets';
import ScrollAnimator from '@/components/ui/ScrollAnimator';

export const metadata: Metadata = {
  title: 'Services — Formation IA, Conseil, Automatisation | Neobik',
  description:
    'Neobik propose des formations IA sur mesure, du conseil stratégique, de l\'automatisation et des agents IA pour les entreprises des Antilles-Guyane.',
};

const services = [
  {
    id: 'formation',
    icon: GraduationCap,
    title: 'Formation IA sur mesure',
    tagline: 'Démystifier, comprendre, maîtriser.',
    desc: 'Des formations conçues pour des non-techniciens qui veulent comprendre et utiliser l\'IA sans se noyer dans le jargon. Chaque session part des besoins réels de votre équipe.',
    features: [
      'Ateliers découverte (demi-journée / journée)',
      'Parcours multi-sessions sur mesure',
      'Interventions en entreprise, COMEX, équipes terrain',
      'Conférences de sensibilisation (jusqu\'à 800 personnes)',
      'Formation de formateurs internes',
    ],
    publics: ['TPE/PME', 'Secteur public', 'Organismes de formation', 'Associations'],
    cta: 'Demander un programme',
  },
  {
    id: 'conseil',
    icon: Search,
    title: 'Audit & Conseil stratégique',
    tagline: 'Savoir avant d\'investir.',
    desc: 'Un diagnostic structuré pour identifier concrètement où l\'IA peut créer de la valeur dans votre organisation — et où elle ne sert à rien. Pas de solution vendue avant d\'avoir compris le problème.',
    features: [
      'Audit des processus existants',
      'Identification des gains potentiels',
      'Feuille de route priorisée',
      'Accompagnement à la décision',
      'Rapport d\'étonnement indépendant',
    ],
    publics: ['Dirigeants', 'DSI', 'DRH', 'Responsables formation'],
    cta: 'Planifier un diagnostic',
  },
  {
    id: 'automatisation',
    icon: Zap,
    title: 'Automatisation intelligente',
    tagline: 'Libérez du temps sur ce qui peut l\'être.',
    desc: 'Mise en place de workflows automatisés pour vos tâches répétitives : emails, relances, reporting, synchronisation d\'outils. Conçu pour fonctionner sans que vous ayez besoin d\'intervenir.',
    features: [
      'Automatisation email et CRM',
      'Workflows de relance clients',
      'Tableaux de bord automatisés',
      'Intégration Google Workspace',
      'Synchronisation multi-outils (n8n)',
    ],
    publics: ['Commerciaux', 'Équipes admin', 'Indépendants', 'Freelances'],
    cta: 'Identifier mes automatisations',
  },
  {
    id: 'agents',
    icon: Bot,
    title: 'Agents IA personnalisés',
    tagline: 'Votre assistant, disponible 24h/24.',
    desc: 'Conception et déploiement d\'agents IA adaptés à vos processus spécifiques : support client, réponse aux FAQ, traitement de demandes RH, aide à la rédaction. Configurés avec votre base de connaissance.',
    features: [
      'Agent support client (chat, email)',
      'Assistant RH interne',
      'Agent de qualification commerciale',
      'Chatbot sur votre site internet',
      'Assistant rédactionnel personnalisé',
    ],
    publics: ['Service client', 'RH', 'Commercial', 'Direction'],
    cta: 'Concevoir mon agent',
  },
  {
    id: 'conferences',
    icon: Mic,
    title: 'Conférences & Interventions',
    tagline: 'Faire réfléchir, pas convaincre.',
    desc: 'Interventions lors d\'événements professionnels, séminaires d\'entreprise, journées institutionnelles. Un regard critique sur l\'IA qui ne cherche pas à impressionner, mais à éclairer.',
    features: [
      'Keynotes (30 à 90 min)',
      'Tables rondes et panels',
      'Ateliers interactifs',
      'Format question/réponse avec public',
      'Interventions jusqu\'à 800 participants',
    ],
    publics: ['Organisateurs d\'événements', 'Comités de direction', 'Établissements publics'],
    cta: 'Discuter de votre événement',
  },
];

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero */}
        <section className="mesh-bg py-24 px-6 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="section-label mb-4">Nos services</div>
            <h1 className="font-display text-5xl md:text-6xl font-bold max-w-2xl mb-6">
              Ce que Neobik peut faire{' '}
              <span className="text-cyan">pour vous.</span>
            </h1>
            <p className="text-white/60 text-lg max-w-xl">
              Pas de package pré-fabriqué. Chaque intervention démarre par une compréhension
              de votre réalité terrain. L&apos;IA vient après.
            </p>
          </div>
        </section>

        {/* Services */}
        <section className="py-16 px-6 lg:px-12">
          <div className="max-w-7xl mx-auto space-y-6">
            {services.map((service, i) => (
              <ScrollAnimator key={service.id} delay={i * 80}>
                <div id={service.id} className="card-glass p-10 scroll-mt-28">
                  <div className="grid lg:grid-cols-3 gap-10">
                    {/* Left */}
                    <div className="lg:col-span-1">
                      <div className="w-14 h-14 bg-cyan/10 border border-cyan/20 flex items-center justify-center mb-6">
                        <service.icon size={26} className="text-cyan" />
                      </div>
                      <h2 className="font-display text-2xl font-bold mb-2">{service.title}</h2>
                      <div className="text-cyan font-mono text-sm mb-4">{service.tagline}</div>
                      <p className="text-white/60 text-sm leading-relaxed mb-6">{service.desc}</p>
                      <Link href="/contact" className="btn-primary text-sm">
                        {service.cta} <ArrowRight size={14} />
                      </Link>
                    </div>

                    {/* Right */}
                    <div className="lg:col-span-2 grid md:grid-cols-2 gap-8">
                      <div>
                        <div className="section-label mb-4">Ce que ça inclut</div>
                        <ul className="space-y-3">
                          {service.features.map((f) => (
                            <li key={f} className="flex items-start gap-2 text-sm text-white/70">
                              <CheckCircle size={15} className="text-cyan shrink-0 mt-0.5" />
                              {f}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <div className="section-label mb-4">Pour qui</div>
                        <div className="flex flex-wrap gap-2">
                          {service.publics.map((p) => (
                            <span
                              key={p}
                              className="text-xs font-mono text-white/60 border border-white/15 px-3 py-1.5"
                            >
                              {p}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollAnimator>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 px-6 lg:px-12 bg-[#1d0e42]">
          <div className="max-w-3xl mx-auto text-center">
            <ScrollAnimator>
              <h2 className="font-display text-4xl font-bold mb-4">
                Pas sûr de ce dont vous avez besoin ?
              </h2>
              <p className="text-white/60 text-lg mb-8">
                Commencez par un appel de 30 minutes. On identifie ensemble ce qui fait sens,
                sans engagement de votre part.
              </p>
              <Link href="/contact" className="btn-primary">
                Planifier un appel gratuit <ArrowRight size={16} />
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
