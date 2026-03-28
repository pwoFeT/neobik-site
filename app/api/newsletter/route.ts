import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const { email, name } = await req.json();

    if (!email) {
      return NextResponse.json({ error: 'Email requis' }, { status: 400 });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: 'Email invalide' }, { status: 400 });
    }

    const BREVO_API_KEY = process.env.BREVO_API_KEY;
    // ID de votre liste Brevo — à remplacer après création de la liste dans Brevo
    const LIST_ID = parseInt(process.env.BREVO_LIST_ID || '2');

    if (!BREVO_API_KEY) {
      return NextResponse.json({ error: 'Configuration manquante' }, { status: 500 });
    }

    // Create or update contact in Brevo
    const res = await fetch('https://api.brevo.com/v3/contacts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'api-key': BREVO_API_KEY,
      },
      body: JSON.stringify({
        email,
        attributes: { FIRSTNAME: name || '' },
        listIds: [LIST_ID],
        updateEnabled: true, // Update if contact already exists
      }),
    });

    // 204 = already exists and updated, 201 = created
    if (res.status === 201 || res.status === 204) {
      return NextResponse.json({ success: true });
    }

    const data = await res.json();

    // Code 'duplicate_parameter' means already subscribed — treat as success
    if (data.code === 'duplicate_parameter') {
      return NextResponse.json({ success: true });
    }

    console.error('Brevo newsletter error:', data);
    return NextResponse.json({ error: 'Erreur inscription' }, { status: 500 });
  } catch (err) {
    console.error('Newsletter API error:', err);
    return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 });
  }
}
