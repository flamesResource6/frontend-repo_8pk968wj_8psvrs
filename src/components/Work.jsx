import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Realtime Collaboration Platform',
    problem: 'Teams needed low-latency editing with offline-first guarantees.',
    approach: 'Designed CRDT-based conflict resolution, WebSocket fanout, and snapshotting.',
    architecture: 'Client ↔ Gateway WS → Event Bus → Worker Pool → Storage (Postgres + Redis).',
    stack: ['React', 'Node.js', 'PostgreSQL', 'Redis', 'WebSockets', 'K8s'],
    results: 'p95 < 120ms, 99.99% uptime, 3x session concurrency.',
  },
  {
    title: 'ML-Powered Content Moderation',
    problem: 'High false positives impacting user experience.',
    approach: 'Introduced active learning loop and explainable thresholds with human-in-the-loop.',
    architecture: 'Ingestion → Feature Store → Model Serving (FastAPI) → Review Console.',
    stack: ['Python', 'FastAPI', 'Kafka', 'SageMaker', 'Docker'],
    results: 'Reduced false positives by 42% and review time by 30%.',
  },
  {
    title: 'Edge-Rendered Marketing Pages',
    problem: 'Slow TTFB and SEO issues across regions.',
    approach: 'Moved to edge SSR with CDN KV cache and image optimization pipeline.',
    architecture: 'Client → Edge SSR → KV → Origin API → Metrics.',
    stack: ['Next.js', 'Cloudflare', 'Vercel', 'OpenTelemetry'],
    results: 'TTFB -60%, Core Web Vitals in the green globally.',
  },
];

const experiences = [
  { role: 'Senior Software Engineer', company: 'Acme Corp', period: '2022 — Present', impact: 'Led platform reliability, designed multi-region failover, cut incident MTTR by 45%.' },
  { role: 'Software Engineer', company: 'Beta Labs', period: '2020 — 2022', impact: 'Built data platform with dbt and Airflow; enabled self-serve analytics.' },
  { role: 'Research Assistant', company: 'University Systems Lab', period: '2019 — 2020', impact: 'Published work on distributed consensus performance.' },
];

const certs = [
  'Google Cloud Associate Cloud Engineer',
  'AWS Certified Solutions Architect — Associate',
  'Bangkit Machine Learning Graduate',
];

const articles = [
  { title: 'Patterns for Resilient APIs', url: '#', date: 'Jun 2024' },
  { title: 'CRDTs in Practice', url: '#', date: 'Mar 2024' },
];

const Pill = ({ children }) => (
  <span className="rounded-full bg-slate-50 px-2.5 py-1 text-xs text-slate-800 ring-1 ring-slate-200">
    {children}
  </span>
);

const Work = () => {
  return (
    <section id="projects" className="relative mx-auto max-w-7xl px-6 py-20">
      <h2 className="text-3xl font-bold tracking-tight text-slate-900">Projects & Case Studies</h2>
      <p className="mt-2 max-w-2xl text-slate-600">
        Selected work highlighting problem statements, approach, architecture, and outcomes.
      </p>

      <div className="mt-8 grid gap-6 lg:grid-cols-3">
        {projects.map((p, idx) => (
          <motion.article
            key={p.title}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: idx * 0.05 }}
            className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
          >
            <h3 className="text-xl font-semibold text-slate-900">{p.title}</h3>
            <div className="mt-3 space-y-2 text-sm">
              <p className="text-slate-800"><span className="font-medium">Problem:</span> {p.problem}</p>
              <p className="text-slate-800"><span className="font-medium">Approach:</span> {p.approach}</p>
              <p className="text-slate-800"><span className="font-medium">Architecture:</span> {p.architecture}</p>
            </div>
            <div className="mt-3 flex flex-wrap gap-2">
              {p.stack.map((s) => (
                <Pill key={s}>{s}</Pill>
              ))}
            </div>
            <div className="mt-4 rounded-lg bg-emerald-50 p-3 text-sm text-emerald-800 ring-1 ring-emerald-200">
              {p.results}
            </div>
          </motion.article>
        ))}
      </div>

      <div className="mt-16 grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <h3 className="text-2xl font-semibold text-slate-900">Experience</h3>
          <ol className="mt-6 space-y-6 border-l border-slate-200 pl-6">
            {experiences.map((e) => (
              <li key={e.role} className="relative">
                <span className="absolute -left-[9px] top-2 h-3 w-3 rounded-full bg-slate-400" />
                <div className="flex items-center justify-between gap-4">
                  <p className="text-slate-900 font-medium">{e.role} · {e.company}</p>
                  <span className="text-sm text-slate-600">{e.period}</span>
                </div>
                <p className="mt-1 text-sm text-slate-700">{e.impact}</p>
              </li>
            ))}
          </ol>
        </div>
        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-semibold text-slate-900">Certifications & Achievements</h3>
            <ul className="mt-4 space-y-2 text-sm text-slate-800">
              {certs.map((c) => (
                <li key={c} className="rounded-lg bg-slate-50 p-3 ring-1 ring-slate-200">{c}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-slate-900">Engineering Blogs</h3>
            <ul className="mt-4 space-y-2 text-sm">
              {articles.map((a) => (
                <li key={a.title}>
                  <a href={a.url} className="text-sky-700 hover:underline">
                    {a.title}
                  </a>
                  <span className="ml-2 text-slate-500">· {a.date}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
