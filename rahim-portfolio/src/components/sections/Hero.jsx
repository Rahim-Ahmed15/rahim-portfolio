import { motion } from "framer-motion";
import { FiArrowRight, FiGithub, FiLinkedin } from "react-icons/fi";
import Button from "../ui/Button";
import Badge from "../ui/Badge";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-28 pb-16 px-6 md:px-12 lg:px-20"
    >
      <div className="container-wide grid lg:grid-cols-2 gap-14 items-center">
        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <Badge className="mb-6">
            <span className="w-2 h-2 rounded-full bg-neon animate-pulse" />
            Available for freelance
          </Badge>

          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] mb-6">
            Building Next-Gen Web Solutions with{" "}
            <span className="neon-text">Clean Code</span> &amp;{" "}
            <span className="neon-text">MERN Stack</span>
          </h1>

          <p className="text-neutral-400 text-lg max-w-xl mb-8 leading-relaxed">
            Transforming complex logic into elegant, high-performance web
            applications. Specializing in MERN architectures, JWT authentication
            architectures, React architectures, clean code dynamics, and
            seamless user experiences.
          </p>

          <div className="flex flex-wrap gap-4">
            <Button href="#projects">
              Explore Projects <FiArrowRight />
            </Button>
            <Button href="#contact" variant="outline">
              Book a Sync
            </Button>
          </div>

          <div className="flex items-center gap-4 mt-10">
            <a
              href="https://github.com/Rahim-Ahmed15"
              target="_blank"
              rel="noreferrer"
              className="text-2xl text-neutral-500 hover:text-neon transition-colors"
            >
              <FiGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/rahim-ahmed-086825274"
              target="_blank"
              rel="noreferrer"
              className="text-2xl text-neutral-500 hover:text-neon transition-colors"
            >
              <FiLinkedin />
            </a>
            <div className="h-px flex-1 max-w-[100px] bg-white/10" />
            <span className="text-xs text-neutral-500 tracking-widest uppercase">
              Based in Pakistan
            </span>
          </div>
        </motion.div>

        {/* RIGHT — Profile */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative"
        >
          <div className="relative w-full max-w-md mx-auto">
            {/* Glow ring */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-neon/40 via-transparent to-neon/40 rounded-3xl blur-2xl opacity-60" />

            {/* Image container */}
            <div className="relative rounded-3xl overflow-hidden border border-neon/30 bg-neutral-900">
              <div className="aspect-square w-full bg-gradient-to-br from-neutral-900 to-neutral-950 flex items-center justify-center">
                <img
                  src="/images/profile.png"
                  alt="Rahim"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = "none";
                  }}
                />
              </div>
              <motion.div
                animate={{ top: ["0%", "100%", "0%"] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute left-0 right-0 h-1 bg-gradient-to-r from-transparent via-neon to-transparent pointer-events-none"
                style={{ boxShadow: "0 0 20px #00FF88, 0 0 40px #00FF88" }}
              />
              {/* Grid overlay */}
              <div
                className="absolute inset-0 opacity-20 pointer-events-none"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(0,255,136,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,136,0.3) 1px, transparent 1px)",
                  backgroundSize: "30px 30px",
                }}
              />
            </div>

            {/* Floating Badge 1 */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -left-4 glass rounded-2xl px-4 py-3 border border-neon/30"
            >
              <p className="text-neon font-bold text-lg">30+</p>
              <p className="text-neutral-400 text-xs">Projects Done</p>
            </motion.div>

            {/* Floating Badge 2 */}
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-4 -right-4 glass rounded-2xl px-4 py-3 border border-neon/30"
            >
              <p className="text-neon font-bold text-sm">
                Mern Stack Developer
              </p>
              <p className="text-neutral-400 text-xs">Specialized</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
