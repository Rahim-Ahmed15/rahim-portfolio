export default function SectionHeading({ eyebrow, title, subtitle }) {
  return (
    <div className="mb-14 text-center">
      {eyebrow && (
        <span className="inline-block text-xs font-semibold tracking-[0.3em] text-neon mb-3 uppercase">
          ✦ {eyebrow}
        </span>
      )}
      <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-neutral-400 max-w-2xl mx-auto">{subtitle}</p>
      )}
    </div>
  );
}