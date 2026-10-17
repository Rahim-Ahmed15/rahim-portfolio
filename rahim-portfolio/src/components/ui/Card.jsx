export default function Card({ children, className = '', hover = true }) {
  return (
    <div
      className={`glass rounded-2xl p-6 ${
        hover ? 'hover:border-neon/50 hover:-translate-y-1 transition-all duration-300' : ''
      } ${className}`}
    >
      {children}
    </div>
  );
}