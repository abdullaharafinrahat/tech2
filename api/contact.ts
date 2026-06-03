import type { NextApiRequest, NextApiResponse } from 'next';

type ContactBody = {
  name: string;
  email: string;
  phone?: string;
  projectType?: string;
  budget?: string;
  message?: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  res.setHeader('Cache-Control', 'no-store');

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const body = req.body as ContactBody;
  const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
  const CHAT_ID = process.env.TELEGRAM_CHAT_ID;

  if (!BOT_TOKEN || !CHAT_ID) {
    return res.status(500).json({ error: 'Server configuration error' });
  }

  const text = `
📩 *New Contact Inquiry*

*Name:* ${body.name}
*Email:* ${body.email}
*Phone:* ${body.phone || 'Not provided'}
*Project Type:* ${body.projectType || 'Not provided'}
*Budget:* ${body.budget || 'Not provided'}
*Message:* ${body.message || 'No message provided'}
`.trim();

  const telegramResponse = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      chat_id: CHAT_ID,
      text,
      parse_mode: 'Markdown',
    }),
  });

  if (!telegramResponse.ok) {
    return res.status(500).json({ error: 'Failed to send message' });
  }

  return res.status(200).json({ success: true });
}
