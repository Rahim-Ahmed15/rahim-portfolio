import { motion } from 'framer-motion';
import { FiLayout, FiServer, FiTrendingUp } from 'react-icons/fi';
import SectionHeading from '../ui/SectionHeading';

const skills = [
  {
    icon: FiLayout,
    title: 'Frontend Architecture',
    desc: 'Building scalable React & Next.js applications with modern state management and component design.',
    tags: ['React', 'Next.js', 'Vite', 'Tailwind'],
  },
  {
    icon: FiServer,
    title: 'API Development',
    desc: 'Designing and integrating RESTful APIs, optimizing data flow between client and server.',
    tags: ['Node.js', 'Express', 'REST', 'Auth'],
  },
  {
    icon: FiTrendingUp,
    title: 'Authentication & Security',
    desc: 'Implementing secure authentication systems, including JWT and OAuth, to protect user data and ensure privacy.',
    tags: ['JWT', 'Passport', 'Security'],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section-pad">
      <div className="container-wide">
        <SectionHeading
          eyebrow="My Expertise"
          title={<>What I <span className="neon-text">Offer</span></>}
          subtitle="A focused toolkit for building modern, production-ready web applications."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass rounded-2xl p-7 border border-white/10 hover:border-neon/50 hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-xl bg-neon/10 border border-neon/30 flex items-center justify-center mb-5 group-hover:bg-neon/20 transition">
                <s.icon className="text-neon text-xl" />
              </div>
              <h3 className="font-display text-xl font-bold mb-3">{s.title}</h3>
              <p className="text-neutral-400 text-sm leading-relaxed mb-5">{s.desc}</p>
              <div className="flex flex-wrap gap-2">
                {s.tags.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-neutral-300"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}