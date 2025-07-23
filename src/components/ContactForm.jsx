'use client';
import { useState } from 'react';

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    const res = await fetch('/api/contact', {
      method: 'POST',
      body: JSON.stringify(form),
    });

    if (res.ok) {
      setSent(true);
      setForm({ name: '', email: '', message: '' });
    }
  }

  return sent ? (
    <p>Gracias por tu mensaje.</p>
  ) : (
    <form onSubmit={handleSubmit}>
      <input name="name" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} required />
      <input name="email" type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} required />
      <textarea name="message" value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} required />
      <button type="submit">Enviar</button>
    </form>
  );
}
