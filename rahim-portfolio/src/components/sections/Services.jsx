import SectionHeading from '../ui/SectionHeading';
import { FiCheckCircle } from 'react-icons/fi';

const services = [
  {
  title: 'Full-Stack MERN Development',
  items: ['React + Node.js apps', 'MongoDB data modeling', 'End-to-end deployment'],
},
{
  title: 'REST API & Backend Systems',
  items: ['Express.js APIs', 'JWT authentication', 'MongoDB aggregation'],
},
{
  title: 'Modern UI & User Experience',
  items: ['Liquid Glass / Glassmorphism', 'Framer Motion animations', 'Fully responsive UI'],
},
];

export default function Services() {
  return (
    <section className="section-pad">
      <div className="container-wide">
        <SectionHeading
          eyebrow="Services"
          title={<>How I Can <span className="neon-text">Help You</span></>}
        />

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className="glass rounded-2xl p-7 border border-white/10 hover:border-neon/40 transition"
            >
              <h3 className="font-display text-lg font-bold mb-5">{s.title}</h3>
              <ul className="space-y-3">
                {s.items.map((it) => (
                  <li key={it} className="flex items-center gap-3 text-sm text-neutral-300">
                    <FiCheckCircle className="text-neon shrink-0" />
                    {it}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}