import { createClient } from '@sanity/client';

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: 'production',
  useCdn: false,
  token: process.env.SANITY_API_TOKEN, // token con permisos de escritura
  apiVersion: '2023-07-08',
});

export async function POST(req) {
  const { name, email, message } = await req.json();

  try {
    const doc = {
      _type: 'contactMessage',
      name,
      email,
      message,
      createdAt: new Date().toISOString(),
    };

    await client.create(doc);

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ error: 'Error al guardar' }), { status: 500 });
  }
}
