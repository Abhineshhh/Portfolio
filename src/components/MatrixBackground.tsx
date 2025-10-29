'use client';

import { useEffect, useRef } from 'react';

export default function MatrixBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Backend-themed characters: binary, symbols, brackets, operators
    const chars = '01{}[]()<>=+-*/&|!~^%$#@.,:;?';
    const fontSize = 14;

    // Arrays that will be recreated on resize
    let columns = 0;
    let drops: number[] = [];
    let speeds: number[] = [];
    let opacities: number[] = [];

    const setup = () => {
      const dpr = Math.max(1, window.devicePixelRatio || 1);
      canvas.width = Math.floor(window.innerWidth * dpr);
      canvas.height = Math.floor(window.innerHeight * dpr);
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.scale(dpr, dpr);

      columns = Math.floor(window.innerWidth / fontSize);
      drops = new Array(columns).fill(0).map(() => Math.random() * -100);
      speeds = new Array(columns).fill(0).map(() => 0.3 + Math.random() * 0.7);
      opacities = new Array(columns).fill(0).map(() => 0.3 + Math.random() * 0.4);
    };

    setup();
    const onResize = () => {
      // reset transform and re-setup on resize
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      setup();
    };
    window.addEventListener('resize', onResize);

    const draw = () => {
      // Pause drawing when tab is hidden to save CPU/battery
  if (typeof document !== 'undefined' && 'hidden' in document && (document as Document & { hidden?: boolean }).hidden) return;

      // trailing effect
      ctx.fillStyle = 'rgba(0, 0, 0, 0.06)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.font = `${fontSize}px "Courier New", monospace`;
      ctx.textBaseline = 'top';

      for (let i = 0; i < columns; i++) {
        const char = chars[Math.floor(Math.random() * chars.length)];
        const x = i * fontSize;
        const y = drops[i] * fontSize;

        const gradient = ctx.createLinearGradient(x, y, x, y + fontSize);
        gradient.addColorStop(0, `rgba(0, 255, 255, ${opacities[i]})`);
        gradient.addColorStop(1, `rgba(0, 200, 100, ${Math.max(0.08, opacities[i] * 0.6)})`);

        ctx.fillStyle = gradient;
        ctx.fillText(char, x, y);

        // reset occasionally to add variation
        if (y > window.innerHeight && Math.random() > 0.98) {
          drops[i] = Math.random() * -20;
          speeds[i] = 0.3 + Math.random() * 0.7;
          opacities[i] = 0.3 + Math.random() * 0.4;
        }

        drops[i] += speeds[i];
      }
    };

    // Choose FPS: lower on small screens to save battery
    const isMobile = window.innerWidth <= 768 || /Mobi|Android/i.test(navigator.userAgent);
    let fps = isMobile ? 15 : 30;
    let loop: number | null = null;

    const startLoop = () => {
      if (loop) window.clearInterval(loop);
      loop = window.setInterval(draw, Math.round(1000 / fps));
    };

    startLoop();

    // If viewport changes significantly, adjust fps on resize
    const onResizeFps = () => {
      const nowMobile = window.innerWidth <= 768 || /Mobi|Android/i.test(navigator.userAgent);
      const newFps = nowMobile ? 15 : 30;
      if (newFps !== fps) {
        fps = newFps;
        startLoop();
      }
    };
    window.addEventListener('resize', onResizeFps);

    return () => {
      if (loop) window.clearInterval(loop);
      window.removeEventListener('resize', onResize);
      window.removeEventListener('resize', onResizeFps);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-10 opacity-20"
      style={{ pointerEvents: 'none' }}
    />
  );
}
