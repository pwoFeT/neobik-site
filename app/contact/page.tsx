import type { Metadata } from 'next';
import { Mail, Phone, MapPin, Linkedin, Calendar } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { WhatsAppButton } from '@/components/ui/FloatingWidgets';
import ScrollAnimator from '@/components/ui/ScrollAnimator';
import ContactForm from '@/components/ui/ContactForm';

export const metadata: Metadata = {
  title: 'Contact — Planifier un appel avec Neobik',
  description:
    'Planifiez un appel découverte gratuit de 30 minutes avec Gilles Anselme, fondateur de Neobik. Conseil et formation IA pour les Antilles-Guyane.',
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <section className="mesh-bg py-24 px-6 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="section-label mb-4">Contact</div>
            <h1 className="font-display text-5xl md:text-6xl font-bold mb-6 max-w-xl">
              Vous avez un projet<br />
              <span className="text-cyan">ou une idée ?</span>
            </h1>
            <p className="text-white/60 text-lg max-w-md">
              Que vous soyez en exploration ou prêt à passer à l&apos;action, commençons
              par un appel de 30 minutes. Gratuit. Sans engagement.
            </p>
          </div>
        </section>

        <section className="py-20 px-6 lg:px-12">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">
            <ScrollAnimator>
              <div className="section-label mb-4">Réserver un créneau</div>
              <h2 className="font-display text-3xl font-bold mb-6">
                Planifier un appel découverte
              </h2>
              <p className="text-white/60 mb-8 leading-relaxed">
                Choisissez le créneau qui vous convient directement dans mon agenda.
                Vous recevez une confirmation automatique avec le lien de visioconférence.
              </p>
              <div className="card-glass p-10 flex flex-col items-center text-center gap-6">
                <div className="w-16 h-16 bg-cyan/10 border border-cyan/20 flex items-center justify-center">
                  <Calendar size={28} className="text-cyan" />
                </div>
                <div>
                  <h3 className="font-display text-2xl font-bold mb-2">
                    Choisissez votre créneau
                  </h3>
                  <p className="text-white/60 text-sm leading-relaxed">
                    30 minutes · Gratuit · Sans engagement<br />
                    Confirmation automatique par email
                  </p>
                </div>
                <a
                  href="https://calendar.app.google/Z7J1bmXcvLXD6qu37"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary text-base px-10 py-4"
                >
                  Réserver un créneau →
                </a>
                <p className="text-white/30 text-xs font-mono">
                  Propulsé par Google Agenda · Confirmé automatiquement
                </p>
              </div>
            </ScrollAnimator>

            <div className="space-y-12">
              <ScrollAnimator delay={100}>
                <div className="section-label mb-4">Envoyer un message</div>
                <h2 className="font-display text-3xl font-bold mb-6">
                  Préférez écrire ?
                </h2>
                <ContactForm />
              </ScrollAnimator>

              <ScrollAnimator delay={200}>
                <div className="card-glass p-8">
                  <div className="section-label mb-6">Coordonnées directes</div>
                  <ul className="space-y-5">
                    <li>
                      <a href="mailto:contact@neobik.com" className="flex items-center gap-3 text-white/70 hover:text-cyan transition-colors">
                        <Mail size={18} className="text-cyan" /> contact@neobik.com
                      </a>
                    </li>
                    <li>
                      <a href="https://wa.me/590690304095" className="flex items-center gap-3 text-white/70 hover:text-cyan transition-colors">
                        <Phone size={18} className="text-cyan" /> +590 690 30 40 95 (WhatsApp)
                      </a>
                    </li>
                    <li>
                      <span className="flex items-start gap-3 text-white/70">
                        <MapPin size={18} className="text-cyan mt-0.5 shrink-0" />
                        Résidence Destrellan · 37 allée des Perdrix · 97122 Baie-Mahault, Guadeloupe
                      </span>
                    </li>
                    <li>
                      <a href="https://linkedin.com/in/gillesanselme" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-white/70 hover:text-cyan transition-colors">
                        <Linkedin size={18} className="text-cyan" /> LinkedIn — Gilles Anselme
                      </a>
                    </li>
                  </ul>
                  <div className="mt-8 pt-8 border-t border-white/10">
                    <div className="section-label mb-3">Zones d&apos;intervention</div>
                    <div className="flex flex-wrap gap-2">
                      {['Guadeloupe', 'Martinique', 'Guyane', 'France hexagonale (distanciel)'].map((z) => (
                        <span key={z} className="text-xs font-mono text-white/60 border border-white/15 px-3 py-1.5">{z}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </ScrollAnimator>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
