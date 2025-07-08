import sendgrid from "@sendgrid/mail";

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

export async function POST(req) {
  const { name, email, message } = await req.json();

  try {
    await sendgrid.send({
      to: process.env.CONTACT_TO_EMAIL,
      from: process.env.CONTACT_FROM_EMAIL,
      subject: `Nuevo mensaje de contacto de ${name}`,
      text: `${message}\n\nEmail del remitente: ${email}`,
    });

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error("ERROR SENDGRID", error);
    return new Response(JSON.stringify({ error: "Error al enviar el correo" }), { status: 500 });
  }
}
