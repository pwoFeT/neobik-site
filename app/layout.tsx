import type { Metadata } from 'next';
import { Syne, DM_Sans, DM_Mono } from 'next/font/google';
import './globals.css';

const syne = Syne({
  subsets: ['latin'],
  variable: '--font-syne',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'],
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
  weight: ['300', '400', '500'],
});

const dmMono = DM_Mono({
  subsets: ['latin'],
  variable: '--font-dm-mono',
  display: 'swap',
  weight: ['300', '400'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://neobik.com'),
  title: {
    default: 'Neobik — Conseil & Formation en Intelligence Artificielle | Guadeloupe',
    template: '%s | Neobik',
  },
  description:
    'Neobik accompagne les TPE, PME et organisations des Antilles-Guyane dans leur transition vers l\'IA. Formation, conseil, automatisation et agents IA sur mesure. Clarifier · Organiser · Optimiser · Libérer.',
  keywords: [
    'intelligence artificielle Guadeloupe',
    'formation IA Antilles',
    'consultant IA Guadeloupe',
    'automatisation Martinique',
    'formation ChatGPT Guadeloupe',
    'agents IA Guyane',
    'transformation digitale Antilles',
    'Neobik',
    'Gilles Anselme',
    'méthode COOL',
  ],
  authors: [{ name: 'Gilles Anselme', url: 'https://neobik.com' }],
  creator: 'Gilles Anselme — Neobik',
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://neobik.com',
    siteName: 'Neobik',
    title: 'Neobik — Intelligence Artificielle pour les Antilles-Guyane',
    description:
      'Conseil, formation et automatisation IA pour les entreprises des Antilles-Guyane. Une approche humaine, éthique et sans frictions.',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Neobik' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Neobik — Intelligence Artificielle pour les Antilles-Guyane',
    description: 'Conseil, formation et automatisation IA. Une approche humaine, éthique et sans frictions.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
  verification: {
    google: 'REMPLACER_PAR_VOTRE_CODE_GOOGLE_SEARCH_CONSOLE',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${syne.variable} ${dmSans.variable} ${dmMono.variable}`}>
      <body className="bg-purple text-white font-body antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
