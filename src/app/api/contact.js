// pages/api/contact.js
import sendgrid from '@sendgrid/mail';

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Método no permitido' });
  }

  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: 'Faltan campos obligatorios' });
  }

  try {
    await sendgrid.send({
      to: process.env.CONTACT_TO_EMAIL, // destinatario
      from: process.env.CONTACT_FROM_EMAIL, // remitente (verificado en SendGrid)
      subject: `Nuevo mensaje de ${name}`,
      html: `
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${message}</p>
      `,
    });

    return res.status(200).json({ message: 'Mensaje enviado' });
  } catch (error) {
    console.error('SendGrid error:', error);
    return res.status(500).json({ message: 'Error enviando el mensaje' });
  }
}
