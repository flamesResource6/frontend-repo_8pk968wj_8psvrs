import React from 'react';
import { motion } from 'framer-motion';

const groups = [
  { title: 'Backend', items: ['Node.js', 'Python', 'Go', 'FastAPI', 'Express', 'GraphQL', 'gRPC'] },
  { title: 'Frontend', items: ['React', 'Next.js', 'Vite', 'Tailwind CSS', 'TypeScript'] },
  { title: 'Mobile', items: ['React Native', 'Flutter'] },
  { title: 'Systems', items: ['Linux', 'Docker', 'Kubernetes', 'Nginx'] },
  { title: 'DevOps', items: ['GitHub Actions', 'Terraform', 'ArgoCD'] },
  { title: 'Cloud', items: ['AWS', 'GCP', 'Azure', 'Cloudflare'] },
  { title: 'Databases', items: ['PostgreSQL', 'MongoDB', 'Redis', 'DynamoDB'] },
  { title: 'Tools', items: ['Git', 'Jest', 'Playwright', 'OpenAPI', 'Sentry'] },
];

const Skills = () => {
  return (
    <section id="skills" className="relative mx-auto max-w-7xl px-6 py-20">
      <h2 className="text-3xl font-bold tracking-tight text-slate-900">Technical Skills</h2>
      <p className="mt-2 max-w-2xl text-slate-600">Curated toolkit for building reliable, scalable products.</p>
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {groups.map((g, idx) => (
          <motion.div
            key={g.title}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.04 }}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
          >
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-600">{g.title}</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {g.items.map((item) => (
                <span key={item} className="rounded-full bg-slate-50 px-3 py-1 text-sm text-slate-800 ring-1 ring-slate-200">
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
