// components/ContactForm.js
"use client";
import { useState } from 'react';

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });

    if (res.ok) {
      setStatus('success');
      setForm({ name: '', email: '', message: '' });
    } else {
      setStatus('error');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto">
      <input
        type="text"
        name="name"
        placeholder="Tu nombre"
        value={form.name}
        onChange={handleChange}
        required
        className="w-full border p-2 rounded"
      />
      <input
        type="email"
        name="email"
        placeholder="Tu correo"
        value={form.email}
        onChange={handleChange}
        required
        className="w-full border p-2 rounded"
      />
      <textarea
        name="message"
        placeholder="Tu mensaje"
        value={form.message}
        onChange={handleChange}
        required
        className="w-full border p-2 rounded"
      />
      <button type="submit" className="bg-blue-600 text-white p-2 rounded">
        Enviar
      </button>
      {status === 'loading' && <p>Enviando...</p>}
      {status === 'success' && <p>✅ Mensaje enviado correctamente</p>}
      {status === 'error' && <p>❌ Error al enviar el mensaje</p>}
    </form>
  );
}
