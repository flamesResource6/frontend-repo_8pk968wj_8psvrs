import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, User, Mail } from 'lucide-react';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Work from './components/Work';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50 text-slate-900">
      {/* Top Nav */}
      <header className="sticky top-0 z-50 border-b border-slate-200/60 bg-white/70 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
          <a href="#home" className="inline-flex items-center gap-2 font-semibold">
            <Rocket className="h-5 w-5 text-slate-700" />
            <span>JD • Portfolio</span>
          </a>
          <nav className="hidden gap-6 text-sm font-medium text-slate-700 md:flex">
            <a href="#about" className="hover:text-slate-900">About</a>
            <a href="#skills" className="hover:text-slate-900">Skills</a>
            <a href="#projects" className="hover:text-slate-900">Work</a>
            <a href="#contact" className="hover:text-slate-900">Contact</a>
          </nav>
          <a href="#contact" className="hidden items-center gap-2 rounded-lg bg-slate-900 px-3 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800 md:inline-flex">
            <Mail className="h-4 w-4" /> Get in touch
          </a>
        </div>
      </header>

      {/* Hero with Spline */}
      <Hero />

      {/* About */}
      <About />

      {/* Skills */}
      <Skills />

      {/* Projects, Experience, Certifications, Blogs */}
      <Work />

      {/* Contact (inline to keep imported components to 3-4) */}
      <section id="contact" className="relative mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900">Let’s build something great</h2>
            <p className="mt-3 max-w-prose text-slate-600">
              I’m open to full-time roles, consulting, and collaboration. Prefer messages with clear problem statements and impact goals.
            </p>
            <div className="mt-6 space-y-2 text-slate-700">
              <p className="flex items-center gap-2"><Mail className="h-4 w-4" /> jane@doe.dev</p>
            </div>
          </div>
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onSubmit={(e) => e.preventDefault()}
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
            <button type="submit" className="mt-4 inline-flex items-center gap-2 rounded-lg bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800">
              Send message
            </button>
          </motion.form>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200/60 bg-white/70">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 text-sm text-slate-600">
          <p className="flex items-center gap-2"><User className="h-4 w-4" /> © {new Date().getFullYear()} Jane Doe. All rights reserved.</p>
          <p className="hidden md:block">Designed with a minimalist, engineering-first aesthetic.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
