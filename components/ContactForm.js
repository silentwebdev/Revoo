'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle } from 'lucide-react';

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center justify-center py-16 text-center"
      >
        <div className="w-16 h-16 rounded-full bg-green-500/15 border border-green-500/30 flex items-center justify-center mb-4">
          <CheckCircle className="w-8 h-8 text-green-400" />
        </div>
        <h3 className="font-display font-bold text-2xl text-white mb-2">Message Sent!</h3>
        <p className="text-white/50 text-sm mb-6">We&apos;ll get back to you within 24 hours via WhatsApp or email.</p>
        <button
          onClick={() => { setSubmitted(false); setForm({ name: '', phone: '', email: '', message: '' }); }}
          className="btn-outline text-sm"
        >
          Send Another
        </button>
      </motion.div>
    );
  }

  const inputClass = `
    w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/10
    text-white placeholder-white/30 text-sm
    focus:outline-none focus:border-green-500/50 focus:bg-white/8 focus:ring-0
    transition-all duration-200
  `;

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block text-xs font-medium text-white/50 mb-1.5 ml-1">Full Name *</label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Ahmed Khan"
            value={form.name}
            onChange={handleChange}
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-xs font-medium text-white/50 mb-1.5 ml-1">Phone Number *</label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            placeholder="+92 300 0000000"
            value={form.phone}
            onChange={handleChange}
            className={inputClass}
          />
        </div>
      </div>
      <div>
        <label htmlFor="email" className="block text-xs font-medium text-white/50 mb-1.5 ml-1">Email Address *</label>
        <input
          id="email"
          name="email"
          type="email"
          required
          placeholder="you@email.com"
          value={form.email}
          onChange={handleChange}
          className={inputClass}
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-xs font-medium text-white/50 mb-1.5 ml-1">Message *</label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Tell us which model you're interested in..."
          value={form.message}
          onChange={handleChange}
          className={`${inputClass} resize-none`}
        />
      </div>
      <button
        type="submit"
        disabled={loading}
        className="w-full btn-primary justify-center py-4 text-base disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {loading ? (
          <span className="flex items-center gap-2">
            <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            Sending...
          </span>
        ) : (
          <span className="flex items-center gap-2">
            Send Message
            <Send className="w-4 h-4" />
          </span>
        )}
      </button>
    </form>
  );
}
