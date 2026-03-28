import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'Politique de confidentialité | Neobik',
  robots: { index: false },
};

export default function PolitiqueConfidentialitePage() {
  return (
    <>
      <Header />
      <main className="pt-20 py-24 px-6 lg:px-12 min-h-screen">
        <div className="max-w-3xl mx-auto">
          <div className="section-label mb-4">RGPD</div>
          <h1 className="font-display text-4xl font-bold mb-4">Politique de confidentialité</h1>
          <p className="text-white/40 font-mono text-sm mb-12">Dernière mise à jour : {new Date().toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })}</p>

          <div className="prose">
            <h2>Responsable du traitement</h2>
            <p>
              <strong>Neobik</strong> — Gilles Anselme<br />
              Résidence Destrellan, 37 allée des Perdrix — 97122 Baie-Mahault, Guadeloupe<br />
              Email : <a href="mailto:contact@neobik.com">contact@neobik.com</a>
            </p>

            <h2>Données collectées</h2>
            <p>Neobik collecte les données suivantes dans des cas précis :</p>
            <ul>
              <li><strong>Formulaire de contact :</strong> nom, email, entreprise (optionnel), message</li>
              <li><strong>Newsletter :</strong> prénom (optionnel), adresse email</li>
              <li><strong>Prise de rendez-vous :</strong> nom, email, créneau choisi (via Google Calendar)</li>
            </ul>

            <h2>Finalités et bases légales</h2>
            <ul>
              <li><strong>Répondre à vos demandes de contact</strong> — Intérêt légitime (art. 6.1.f RGPD)</li>
              <li><strong>Envoi de la newsletter</strong> — Consentement explicite (art. 6.1.a RGPD)</li>
              <li><strong>Gestion des rendez-vous</strong> — Exécution d&apos;une démarche précontractuelle (art. 6.1.b RGPD)</li>
            </ul>

            <h2>Durée de conservation</h2>
            <ul>
              <li>Formulaire de contact : 3 ans après le dernier échange</li>
              <li>Newsletter : jusqu&apos;à désinscription</li>
              <li>Données de rendez-vous : 1 an</li>
            </ul>

            <h2>Destinataires des données</h2>
            <p>Vos données sont transmises aux sous-traitants suivants, dans le cadre strict de leurs fonctions :</p>
            <ul>
              <li><strong>Brevo (Sendinblue)</strong> — envoi d&apos;emails et gestion newsletter — <a href="https://www.brevo.com/fr/legal/privacypolicy/" target="_blank" rel="noopener noreferrer">Politique Brevo</a></li>
              <li><strong>Google Workspace</strong> — agenda et visioconférence — <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Politique Google</a></li>
            </ul>
            <p>Aucune donnée n&apos;est vendue à des tiers.</p>

            <h2>Vos droits</h2>
            <p>Conformément au RGPD et à la loi Informatique et Libertés, vous disposez des droits suivants :</p>
            <ul>
              <li>Droit d&apos;accès, de rectification et d&apos;effacement</li>
              <li>Droit à la portabilité</li>
              <li>Droit d&apos;opposition et de limitation du traitement</li>
              <li>Droit de retirer votre consentement à tout moment</li>
            </ul>
            <p>
              Pour exercer ces droits : <a href="mailto:contact@neobik.com">contact@neobik.com</a><br />
              En cas de réclamation non résolue : <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer">CNIL</a>
            </p>

            <h2>Cookies</h2>
            <p>
              Ce site utilise uniquement des cookies fonctionnels strictement nécessaires à son bon fonctionnement.
              Aucun cookie publicitaire ou de tracking tiers n&apos;est utilisé sans votre consentement explicite.
            </p>

            <h2>Sécurité</h2>
            <p>
              Les données sont transmises via HTTPS (TLS). L&apos;hébergement est sécurisé sur VPS avec
              certificat SSL Let&apos;s Encrypt géré automatiquement.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
