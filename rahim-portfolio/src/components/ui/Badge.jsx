export default function Badge({ children, className = '' }) {
  return (
    <span
      className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium border border-neon/40 bg-neon/5 text-neon backdrop-blur-md ${className}`}
    >
      {children}
    </span>
  );
}