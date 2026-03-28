import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'Mentions légales | Neobik',
  robots: { index: false },
};

export default function MentionsLegalesPage() {
  return (
    <>
      <Header />
      <main className="pt-20 py-24 px-6 lg:px-12 min-h-screen">
        <div className="max-w-3xl mx-auto">
          <div className="section-label mb-4">Informations légales</div>
          <h1 className="font-display text-4xl font-bold mb-12">Mentions légales</h1>

          <div className="prose">
            <h2>Éditeur du site</h2>
            <p>
              <strong>Raison sociale :</strong> ANSELME Gilles Yann-Marie<br />
              <strong>Nom commercial :</strong> Neobik<br />
              <strong>SIREN :</strong> 531 888 154<br />
              <strong>SIRET :</strong> 53188815400030<br />
              <strong>Code APE :</strong> 7022Z — Conseil pour les affaires et autres conseils de gestion<br />
              <strong>Nature :</strong> Entreprise libérale non réglementée<br />
              <strong>N° de déclaration d&apos;activité de formation :</strong> 01973229997<br />
              <strong>Adresse :</strong> Résidence Destrellan, 37 allée des Perdrix — 97122 Baie-Mahault, Guadeloupe, France<br />
              <strong>Email :</strong> <a href="mailto:contact@neobik.com">contact@neobik.com</a><br />
              <strong>Site web :</strong> <a href="https://neobik.com">neobik.com</a>
            </p>

            <h2>Directeur de la publication</h2>
            <p>Gilles Anselme, en qualité de fondateur de Neobik.</p>

            <h2>Hébergement</h2>
            <p>
              Le site neobik.com est hébergé sur un serveur VPS Hostinger KVM2.<br />
              <strong>Hostinger International Ltd.</strong><br />
              61 Lordou Vironos str., 6023 Larnaca, Chypre<br />
              <a href="https://www.hostinger.com" target="_blank" rel="noopener noreferrer">www.hostinger.com</a>
            </p>

            <h2>Propriété intellectuelle</h2>
            <p>
              L&apos;ensemble du contenu de ce site (textes, images, structure, logos, méthode C.O.O.L.)
              est la propriété exclusive de Neobik / Gilles Anselme, sauf mention contraire.
              Toute reproduction, même partielle, est interdite sans autorisation préalable écrite.
            </p>

            <h2>Limitation de responsabilité</h2>
            <p>
              Les informations publiées sur ce site ont un caractère informatif général.
              Neobik ne saurait être tenu responsable de tout dommage direct ou indirect
              résultant de l&apos;utilisation de ces informations.
            </p>

            <h2>Données personnelles</h2>
            <p>
              Pour toute information relative au traitement de vos données personnelles,
              consultez notre <a href="/politique-de-confidentialite">Politique de confidentialité</a>.
            </p>

            <h2>Médiation et litiges</h2>
            <p>
              En cas de litige, nous vous invitons à nous contacter en premier lieu à
              l&apos;adresse <a href="mailto:contact@neobik.com">contact@neobik.com</a>.
              En l&apos;absence de résolution amiable, vous pouvez recourir à la médiation de la consommation
              ou saisir les juridictions compétentes.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
