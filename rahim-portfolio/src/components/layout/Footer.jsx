import { FiGithub, FiLinkedin, FiTwitter, FiMail } from 'react-icons/fi';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-white/10 mt-20">
      <div className="container-wide px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <p className="font-display text-lg font-bold">
            Rahim<span className="text-neon">.</span>
          </p>
          <p className="text-neutral-500 text-sm mt-1">
            © {year} Rahim. Built with React &amp; Vite.
          </p>
        </div>

        <div className="flex items-center gap-4 text-xl">
          <a href="https://github.com/Rahim-Ahmed15" target="_blank" rel="noopener noreferrer"
             className="text-neutral-400 hover:text-neon transition-colors">
            <FiGithub />
          </a>
          <a href="https://www.linkedin.com/in/rahim-ahmed-086825274" target="_blank" rel="noopener noreferrer"
             className="text-neutral-400 hover:text-neon transition-colors">
            <FiLinkedin />
          </a>
          <a href="mailto:rahimjameel15@gmail.com"
             className="text-neutral-400 hover:text-neon transition-colors">
            <FiMail />
          </a>
        </div>
      </div>
    </footer>
  );
}