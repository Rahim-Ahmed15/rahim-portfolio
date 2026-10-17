import { useEffect, useRef } from 'react';

export default function MatrixRain() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    // Chhota character set = kam lines
    const chars = '01'.split('');

    // ⬆️ BARA font = kam columns = kam lines
    const fontSize = 22;

    let columns = Math.floor(canvas.width / fontSize);
    let drops = Array(columns).fill(1);

    const draw = () => {
      // ⬇️ Trail — zyada value = jaldi fade = short trail (subtle lagta hai)
      ctx.fillStyle = 'rgba(0, 0, 0, 0.12)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = chars[Math.floor(Math.random() * chars.length)];
        const x = i * fontSize;
        const y = drops[i] * fontSize;

        // ⬇️ Halka green — bright nahi
        ctx.fillStyle = 'rgba(0, 255, 136, 0.75)';
        ctx.fillText(text, x, y);

        // Head character occasionally brighter (matrix ka signature look)
        if (Math.random() > 0.985) {
          ctx.fillStyle = 'rgba(200, 255, 220, 0.9)';
          ctx.fillText(text, x, y);
        }

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.98) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    // ⬇️ SLOW speed — 45 → 80 (zyada slow, cinematic)
    const id = setInterval(draw, 80);

    const onResize = () => {
      resize();
      columns = Math.floor(canvas.width / fontSize);
      drops = Array(columns).fill(1);
    };
    window.addEventListener('resize', onResize);

    return () => {
      clearInterval(id);
      window.removeEventListener('resize', resize);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none"
      style={{ opacity: 0.35 }}   // ⬅️ HALKA — 0.55 → 0.35
      aria-hidden="true"
    />
  );
}