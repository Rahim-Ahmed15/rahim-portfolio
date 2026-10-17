import { motion } from 'framer-motion';
import { FiExternalLink, FiGithub } from 'react-icons/fi';
import SectionHeading from '../ui/SectionHeading';
import { projects } from '../../data/projects';

export default function Projects() {
  return (
    <section id="projects" className="section-pad">
      <div className="container-wide">
        <SectionHeading
          eyebrow="Portfolio"
          title={<>Featured <span className="neon-text">Projects</span></>}
          subtitle="A selection of work I'm proud of — from dashboards to full-stack apps."
        />

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass rounded-2xl overflow-hidden border border-white/10 hover:border-neon/50 transition-all duration-300 group"
            >
              <div className="aspect-video w-full bg-neutral-900 overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    e.target.style.background = 'linear-gradient(135deg, #0a0a0a, #111)';
                    e.target.style.display = 'none';
                  }}
                />
              </div>

              <div className="p-6">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <h3 className="font-display text-xl font-bold">{p.title}</h3>
                  <div className="flex gap-3 text-neutral-400 shrink-0">
                    
                    <a href={p.code} target="_blank" rel="noreferrer"
                       className="hover:text-neon transition-colors" aria-label="Source code">
                      <FiGithub />
                    </a>
                  </div>
                </div>
                <p className="text-neutral-400 text-sm leading-relaxed mb-4">
                  {p.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-2.5 py-1 rounded-md bg-neon/5 border border-neon/20 text-neon/90"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}