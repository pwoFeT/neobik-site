'use client';

import { useState } from 'react';
import { Send, Loader2, CheckCircle } from 'lucide-react';

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [form, setForm] = useState({ name: '', email: '', company: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus('success');
        setForm({ name: '', email: '', company: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="card-glass p-8 flex flex-col items-center text-center gap-4">
        <CheckCircle size={40} className="text-cyan" />
        <h3 className="font-display text-xl font-bold">Message envoyé !</h3>
        <p className="text-white/60 text-sm">Je vous répondrai dans les 24h.</p>
        <button onClick={() => setStatus('idle')} className="btn-outline text-sm mt-2">
          Envoyer un autre message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="section-label block mb-2">Nom *</label>
          <input
            type="text"
            name="name"
            required
            value={form.name}
            onChange={handleChange}
            placeholder="Votre nom"
            className="w-full bg-white/5 border border-white/15 text-white placeholder-white/30 px-4 py-3 text-sm focus:border-cyan focus:outline-none transition-colors font-body"
          />
        </div>
        <div>
          <label className="section-label block mb-2">Email *</label>
          <input
            type="email"
            name="email"
            required
            value={form.email}
            onChange={handleChange}
            placeholder="votre@email.com"
            className="w-full bg-white/5 border border-white/15 text-white placeholder-white/30 px-4 py-3 text-sm focus:border-cyan focus:outline-none transition-colors font-body"
          />
        </div>
      </div>
      <div>
        <label className="section-label block mb-2">Entreprise / Organisation</label>
        <input
          type="text"
          name="company"
          value={form.company}
          onChange={handleChange}
          placeholder="Optionnel"
          className="w-full bg-white/5 border border-white/15 text-white placeholder-white/30 px-4 py-3 text-sm focus:border-cyan focus:outline-none transition-colors font-body"
        />
      </div>
      <div>
        <label className="section-label block mb-2">Message *</label>
        <textarea
          name="message"
          required
          rows={5}
          value={form.message}
          onChange={handleChange}
          placeholder="Décrivez votre projet, votre besoin ou posez-moi simplement une question..."
          className="w-full bg-white/5 border border-white/15 text-white placeholder-white/30 px-4 py-3 text-sm focus:border-cyan focus:outline-none transition-colors font-body resize-none"
        />
      </div>
      {status === 'error' && (
        <p className="text-red-400 text-sm font-mono">
          Une erreur s&apos;est produite. Essayez par email : contact@neobik.com
        </p>
      )}
      <button type="submit" disabled={status === 'loading'} className="btn-primary">
        {status === 'loading' ? (
          <><Loader2 size={16} className="animate-spin" /> Envoi en cours...</>
        ) : (
          <><Send size={16} /> Envoyer le message</>
        )}
      </button>
    </form>
  );
}
