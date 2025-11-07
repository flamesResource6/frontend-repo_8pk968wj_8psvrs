import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="relative mx-auto max-w-7xl px-6 py-20">
      <div className="grid gap-12 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="space-y-4"
        >
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">About Me</h2>
          <p className="text-slate-700 leading-relaxed">
            I believe engineering is the pursuit of clarity. I build systems that are simple to reason about, fail predictably, and scale with purpose. My craft centers on data-driven decisions, thoughtful abstractions, and testable architectures.
          </p>
          <p className="text-slate-700 leading-relaxed">
            Specialties include distributed systems, API design, mobile experiences, and applied ML. I love bringing teams together around robust tooling, observability, and a culture of continuous improvement.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
        >
          <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-600">Tooling & Focus</h3>
          <div className="mt-4 grid grid-cols-2 gap-3 text-sm text-slate-800">
            <div className="rounded-lg bg-slate-50 p-3">Clean Architecture</div>
            <div className="rounded-lg bg-slate-50 p-3">Domain-Driven Design</div>
            <div className="rounded-lg bg-slate-50 p-3">Observability</div>
            <div className="rounded-lg bg-slate-50 p-3">Testing & CI/CD</div>
            <div className="rounded-lg bg-slate-50 p-3">Performance Tuning</div>
            <div className="rounded-lg bg-slate-50 p-3">Security by Design</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
