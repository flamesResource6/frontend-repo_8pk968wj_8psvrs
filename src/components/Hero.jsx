import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Calendar } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* subtle gradient veil to increase text contrast without blocking Spline interaction */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/40 to-white/80" />

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-start px-6 pt-32 pb-16 sm:pt-40">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-4 inline-flex items-center rounded-full border border-slate-200 bg-white/70 px-3 py-1 text-xs font-medium text-slate-700 backdrop-blur"
        >
          Available for impactful engineering roles
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-6xl"
        >
          Jane Doe
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mt-3 text-lg font-semibold text-slate-800 sm:text-2xl"
        >
          Software Engineer — Backend / Mobile / AI / Fullstack
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-4 max-w-2xl text-base leading-relaxed text-slate-700"
        >
          I design resilient systems, craft reliable APIs, and turn complex problems into elegant, scalable solutions. Focused on correctness, performance, and developer experience.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mt-8 flex flex-wrap items-center gap-3"
        >
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-lg bg-slate-900 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-lg bg-white/80 px-5 py-3 text-sm font-semibold text-slate-900 ring-1 ring-slate-200 backdrop-blur transition hover:bg-white"
          >
            Contact Me <Mail className="h-4 w-4" />
          </a>
          <div className="ml-2 flex items-center gap-2">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-md bg-white/80 p-2 text-slate-700 ring-1 ring-slate-200 transition hover:bg-white"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-md bg-white/80 p-2 text-slate-700 ring-1 ring-slate-200 transition hover:bg-white"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="#calendar"
              className="inline-flex items-center justify-center rounded-md bg-white/80 p-2 text-slate-700 ring-1 ring-slate-200 transition hover:bg-white"
              aria-label="Calendar"
            >
              <Calendar className="h-5 w-5" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
