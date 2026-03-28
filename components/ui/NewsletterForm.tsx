'use client';

import { useState } from 'react';
import { Mail, Loader2, CheckCircle } from 'lucide-react';

export default function NewsletterFormClient() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, name }),
      });
      if (res.ok) {
        setStatus('success');
        setEmail('');
        setName('');
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="flex flex-col items-center gap-3 text-center">
        <CheckCircle size={32} className="text-cyan" />
        <p className="font-display font-bold">Vous êtes inscrit !</p>
        <p className="text-white/50 text-sm">Premier numéro à venir dès la semaine prochaine.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto w-full">
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Prénom"
        className="flex-1 bg-white/5 border border-white/15 text-white placeholder-white/30 px-4 py-3 text-sm focus:border-cyan focus:outline-none transition-colors font-body min-w-0"
      />
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="votre@email.com"
        className="flex-1 bg-white/5 border border-white/15 text-white placeholder-white/30 px-4 py-3 text-sm focus:border-cyan focus:outline-none transition-colors font-body min-w-0"
      />
      <button type="submit" disabled={status === 'loading'} className="btn-primary shrink-0">
        {status === 'loading' ? (
          <Loader2 size={16} className="animate-spin" />
        ) : (
          <Mail size={16} />
        )}
        S&apos;abonner
      </button>
      {status === 'error' && (
        <p className="text-red-400 text-xs font-mono mt-1 w-full">
          Erreur. Réessayez ou écrivez à contact@neobik.com
        </p>
      )}
    </form>
  );
}
