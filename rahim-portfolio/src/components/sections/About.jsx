import { motion } from "framer-motion";
import { FiCode, FiZap, FiArrowRight } from "react-icons/fi";
import SectionHeading from "../ui/SectionHeading";
import Button from "../ui/Button";

export default function About() {
  return (
    <section id="about" className="section-pad">
      <div className="container-wide">
        <SectionHeading
          eyebrow="About Me"
          title={
            <>
              The Developer Behind <span className="neon-text">the Code</span>
            </>
          }
        />

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left — Matrix visual */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-2xl overflow-hidden border border-neon/30 bg-neutral-900 p-8 font-mono text-sm leading-relaxed"
          >
            <div className="absolute top-3 left-4 flex gap-1.5">
              <span className="w-3 h-3 rounded-full bg-red-500/70" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
              <span className="w-3 h-3 rounded-full bg-neon/70" />
            </div>
            <div className="mt-6 text-neutral-400 space-y-1">
              <p>
                <span className="text-neon">const</span> developer = {"{"}
              </p>
              <p className="pl-4">
                name: <span className="text-emerald-300">'Rahim'</span>,
              </p>
              <p className="pl-4">
                role: <span className="text-emerald-300">'MERN Stack Dev'</span>
                ,
              </p>
              <p className="pl-4">
                stack: [
                <span className="text-emerald-300">
                  'MongoDB', 'Express', 'React',
                </span>
                <span className="text-emerald-300">'Vite'</span>,{" "}
                <span className="text-emerald-300">'Node'</span>],
              </p>
              <p className="pl-4">
                security:{" "}
                <span className="text-emerald-300">'JWT Validation',</span>,
              </p>
              <p className="pl-4">
                passion: <span className="text-emerald-300">'Clean Code'</span>,
              </p>
              <p className="pl-4">
                available: <span className="text-neon">true</span>,
              </p>
              <p>{"}"};</p>
            </div>
          </motion.div>

          {/* Right — Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="font-display text-2xl md:text-3xl font-bold mb-5">
              Hi, I'm Rahim 👋
            </h3>
            <p className="text-neutral-400 leading-relaxed mb-4">
              A passionate{" "}
              <span className="text-neon">Full-Stack Web Developer</span>{" "}
              specialized in the MERN stack (React, Node.js, Express, MongoDB),
              with a strong focus on clean code, scalable architectures, and
              efficient backend operations.
            </p>
            <p className="text-neutral-400 leading-relaxed mb-8">
              Over the past year and a half, I've shipped 30+ real-world
              projects — from Wanderlust (an Airbnb-inspired listing platform
              deployed on Vercel with MongoDB Atlas) to Linkora (a full-featured
              URL shortener with QR codes and click analytics). I've implemented
              complete JWT authentication systems, designed REST APIs with
              MongoDB aggregation pipelines, and crafted modern Liquid Glass UIs
              inspired by Apple's design language. I care deeply about clean
              code architecture, secure authentication flows, and user-first
              performance. Whether it's a startup MVP or a complex production
              app, I approach every project with the same goal: build it right,
              ship it fast, and make it maintainable for the long run.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              <div className="glass rounded-2xl p-5 border border-white/10 hover:border-neon/40 transition">
                <FiCode className="text-neon text-2xl mb-3" />
                <p className="font-semibold mb-1">Tech Stack Summary</p>
                <p className="text-sm text-neutral-400">
                  MongoDB, Express, React, Node.js, JWT Validation
                </p>
              </div>
              <div className="glass rounded-2xl p-5 border border-white/10 hover:border-neon/40 transition">
                <FiZap className="text-neon text-2xl mb-3" />
                <p className="font-semibold mb-1">Development Focus</p>
                <p className="text-sm text-neutral-400">
                  Clean Code, Performance, Agile Work
                </p>
              </div>
            </div>

            <Button href="#contact" variant="outline">
              Read My Full Story <FiArrowRight />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
