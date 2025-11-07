import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send } from 'lucide-react';

const Contact = () => {
  const [status, setStatus] = useState('idle');

  const onSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');
    setTimeout(() => setStatus('sent'), 800);
  };

  return (
    <section id="contact" className="relative mx-auto max-w-7xl px-6 py-20">
      <div className="grid gap-10 md:grid-cols-2">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">Let’s build something great</h2>
          <p className="mt-3 max-w-prose text-slate-600">
            I’m open to full-time roles, consulting, and collaboration. Prefer messages with clear problem statements and impact goals.
          </p>
          <div className="mt-6 space-y-2 text-slate-700">
            <p className="flex items-center gap-2"><Mail className="h-4 w-4" /> jane@doe.dev</p>
            <p className="flex items-center gap-2"><Send className="h-4 w-4" /> Calendly: /jane-doe (optional)</p>
          </div>
        </div>
        <motion.form
          onSubmit={onSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="sm:col-span-1">
              <label className="text-sm font-medium text-slate-700">Name</label>
              <input required className="mt-1 w-full rounded-lg border-slate-200 bg-slate-50 px-3 py-2 text-slate-900 outline-none ring-1 ring-transparent focus:bg-white focus:ring-slate-300" />
            </div>
            <div className="sm:col-span-1">
              <label className="text-sm font-medium text-slate-700">Email</label>
              <input type="email" required className="mt-1 w-full rounded-lg border-slate-200 bg-slate-50 px-3 py-2 text-slate-900 outline-none ring-1 ring-transparent focus:bg-white focus:ring-slate-300" />
            </div>
            <div className="sm:col-span-2">
              <label className="text-sm font-medium text-slate-700">Message</label>
              <textarea rows={5} required className="mt-1 w-full rounded-lg border-slate-200 bg-slate-50 px-3 py-2 text-slate-900 outline-none ring-1 ring-transparent focus:bg-white focus:ring-slate-300" />
            </div>
          </div>
          <button
            type="submit"
            className="mt-4 inline-flex items-center gap-2 rounded-lg bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800"
            disabled={status !== 'idle'}
          >
            {status === 'sending' ? 'Sending…' : status === 'sent' ? 'Sent!' : 'Send message'}
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
