import Link from 'next/link';
import { Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const services = [
  { href: '/services#formation', label: 'Formation IA' },
  { href: '/services#conseil', label: 'Conseil & Audit' },
  { href: '/services#automatisation', label: 'Automatisation' },
  { href: '/services#agents', label: 'Agents IA' },
  { href: '/services#conferences', label: 'Conférences' },
];

const links = [
  { href: '/blog', label: 'Blog' },
  { href: '/about', label: 'À propos' },
  { href: '/contact', label: 'Contact' },
  { href: '/mentions-legales', label: 'Mentions légales' },
  { href: '/politique-de-confidentialite', label: 'Confidentialité' },
];

export default function Footer() {
  return (
    <footer className="bg-[#1a0d38] border-t border-white/10 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Top grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="font-display text-3xl font-bold mb-4">
              neo<span className="text-cyan">bik</span>
            </div>
            <p className="font-body text-white/60 text-sm leading-relaxed max-w-xs mb-6">
              Conseil, formation et automatisation IA pour les entreprises des Antilles-Guyane.
              Une approche humaine, éthique et sans frictions.
            </p>
            <div className="section-label mb-3">Méthode</div>
            <div className="flex gap-3 flex-wrap">
              {['Clarifier', 'Organiser', 'Optimiser', 'Libérer'].map((word) => (
                <span key={word} className="text-xs font-mono text-cyan/70 border border-cyan/20 px-2 py-1">
                  {word}
                </span>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <div className="section-label mb-5">Services</div>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s.href}>
                  <Link href={s.href} className="text-sm text-white/60 hover:text-cyan transition-colors">
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <div className="section-label mb-5">Contact</div>
            <ul className="space-y-4">
              <li>
                <a
                  href="mailto:contact@neobik.com"
                  className="flex items-center gap-2 text-sm text-white/60 hover:text-cyan transition-colors"
                >
                  <Mail size={14} /> contact@neobik.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+5906603095"
                  className="flex items-center gap-2 text-sm text-white/60 hover:text-cyan transition-colors"
                >
                  <Phone size={14} /> +590 660-30-95
                </a>
              </li>
              <li>
                <span className="flex items-start gap-2 text-sm text-white/60">
                  <MapPin size={14} className="mt-0.5 shrink-0" />
                  37 allée des Perdrix<br />97122 Baie-Mahault, Guadeloupe
                </span>
              </li>
              <li>
                <a
                  href="https://linkedin.com/in/gillesanselme"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-white/60 hover:text-cyan transition-colors"
                >
                  <Linkedin size={14} /> LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Links row */}
        <div className="flex flex-wrap gap-x-8 gap-y-2 mb-8">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="text-xs text-white/40 hover:text-white/70 transition-colors">
              {l.label}
            </Link>
          ))}
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="text-xs text-white/30">
            © {new Date().getFullYear()} Neobik — SIRET 53188815400030 · N° formation 01973229997
          </p>
          <p className="text-xs text-white/30">
            Fait avec lucidité en Guadeloupe 🇬🇵
          </p>
        </div>
      </div>
    </footer>
  );
}
