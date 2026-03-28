import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const { name, email, company, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Champs requis manquants' }, { status: 400 });
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: 'Email invalide' }, { status: 400 });
    }

    const BREVO_API_KEY = process.env.BREVO_API_KEY;
    const CONTACT_EMAIL = process.env.CONTACT_EMAIL || 'contact@neobik.com';

    if (!BREVO_API_KEY) {
      console.error('BREVO_API_KEY manquant');
      return NextResponse.json({ error: 'Configuration serveur manquante' }, { status: 500 });
    }

    // Send notification to Gilles
    const notifRes = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'api-key': BREVO_API_KEY,
      },
      body: JSON.stringify({
        sender: { name: 'Neobik Site', email: CONTACT_EMAIL },
        to: [{ email: CONTACT_EMAIL, name: 'Gilles Anselme' }],
        replyTo: { email, name },
        subject: `[Neobik] Nouveau message de ${name}${company ? ` — ${company}` : ''}`,
        htmlContent: `
          <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
            <div style="background: #2B1559; padding: 24px; color: white;">
              <h1 style="color: #07D3D5; font-size: 20px; margin: 0 0 8px;">Nouveau message reçu</h1>
              <p style="color: rgba(255,255,255,0.6); margin: 0; font-size: 14px;">Via le site neobik.com</p>
            </div>
            <div style="padding: 24px; background: #f9f9f9;">
              <table style="width: 100%; border-collapse: collapse;">
                <tr><td style="padding: 8px 0; color: #666; width: 120px; font-size: 14px;">Nom</td><td style="padding: 8px 0; font-weight: bold;">${name}</td></tr>
                <tr><td style="padding: 8px 0; color: #666; font-size: 14px;">Email</td><td style="padding: 8px 0;"><a href="mailto:${email}">${email}</a></td></tr>
                ${company ? `<tr><td style="padding: 8px 0; color: #666; font-size: 14px;">Entreprise</td><td style="padding: 8px 0;">${company}</td></tr>` : ''}
              </table>
              <div style="margin-top: 16px; padding: 16px; background: white; border-left: 3px solid #07D3D5;">
                <p style="color: #333; line-height: 1.6; white-space: pre-wrap; margin: 0;">${message}</p>
              </div>
            </div>
            <div style="padding: 16px 24px; background: #eee; font-size: 12px; color: #999;">
              Neobik · 37 allée des Perdrix · 97122 Baie-Mahault
            </div>
          </div>
        `,
      }),
    });

    // Send confirmation to sender
    await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'api-key': BREVO_API_KEY,
      },
      body: JSON.stringify({
        sender: { name: 'Gilles Anselme — Neobik', email: CONTACT_EMAIL },
        to: [{ email, name }],
        subject: 'Votre message a bien été reçu — Neobik',
        htmlContent: `
          <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
            <div style="background: #2B1559; padding: 32px; color: white; text-align: center;">
              <h1 style="color: #07D3D5; font-size: 24px; margin: 0 0 8px; font-weight: bold;">neobik</h1>
              <p style="color: rgba(255,255,255,0.6); margin: 0; font-size: 13px;">CLARIFIER · ORGANISER · OPTIMISER · LIBÉRER</p>
            </div>
            <div style="padding: 32px; background: #fafafa;">
              <p>Bonjour ${name},</p>
              <p>Votre message a bien été reçu. Je vous répondrai dans les 24 heures.</p>
              <p>Si votre besoin est urgent, vous pouvez me joindre directement :</p>
              <ul>
                <li>WhatsApp : <a href="https://wa.me/590660309595">+590 660-30-95</a></li>
                <li>Email : <a href="mailto:contact@neobik.com">contact@neobik.com</a></li>
              </ul>
              <p style="margin-top: 24px;">À très bientôt,</p>
              <p><strong>Gilles Anselme</strong><br>
              <span style="color: #666; font-size: 14px;">Fondateur de Neobik</span></p>
            </div>
          </div>
        `,
      }),
    });

    if (!notifRes.ok) {
      const err = await notifRes.json();
      console.error('Brevo error:', err);
      return NextResponse.json({ error: 'Erreur envoi email' }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('Contact API error:', err);
    return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 });
  }
}
