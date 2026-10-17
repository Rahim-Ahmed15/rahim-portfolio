import { useEffect, useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';

const links = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? 'py-2' : 'py-4'
      }`}
    >
      <nav className="container-wide mx-4 md:mx-auto px-4 md:px-6 py-3 rounded-2xl glass flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2 group">
          <span className="w-9 h-9 rounded-lg bg-neutral-900 border border-neon/40 flex items-center justify-center font-display font-bold text-neon group-hover:animate-glow-pulse">
            R
          </span>
          <span className="font-display text-xl font-bold">
            Rahim<span className="text-neon">.</span>
          </span>
        </a>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.name}>
              <a
                href={l.href}
                className="text-sm text-neutral-300 hover:text-neon transition-colors duration-200 relative group"
              >
                {l.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-neon transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        {/* Hire Me */}
        <a
          href="#contact"
          className="hidden md:inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-semibold text-neon border border-neon/50 hover:bg-neon hover:text-neutral-950 transition-all duration-300 shadow-[0_0_20px_rgba(0,255,136,0.15)] hover:shadow-[0_0_35px_rgba(0,255,136,0.6)]"
        >
          Hire Me
        </a>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-2xl text-neon"
          aria-label="Toggle menu"
        >
          {open ? <HiX /> : <HiMenu />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden container-wide mx-4 mt-2 p-4 rounded-2xl glass">
          <ul className="flex flex-col gap-3">
            {links.map((l) => (
              <li key={l.name}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-2 text-neutral-200 hover:text-neon transition-colors"
                >
                  {l.name}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-2 inline-block px-5 py-2 rounded-full text-sm font-semibold text-neon border border-neon/50"
              >
                Hire Me
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}