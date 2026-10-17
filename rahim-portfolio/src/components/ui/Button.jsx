export default function Button({ children, href = '#', variant = 'primary', className = '', ...rest }) {
  const base = 'inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300';

  const variants = {
    primary:
      'bg-gradient-to-r from-neon to-emerald-500 text-neutral-950 shadow-[0_0_25px_rgba(0,255,136,0.4)] hover:shadow-[0_0_45px_rgba(0,255,136,0.7)] hover:scale-[1.03]',
    outline:
      'border border-neon/50 text-neon hover:bg-neon hover:text-neutral-950 shadow-[0_0_15px_rgba(0,255,136,0.15)] hover:shadow-[0_0_35px_rgba(0,255,136,0.5)]',
    ghost:
      'text-neutral-300 hover:text-neon',
  };

  return (
    <a href={href} className={`${base} ${variants[variant]} ${className}`} {...rest}>
      {children}
    </a>
  );
}