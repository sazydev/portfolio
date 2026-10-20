"use client";

import { useEffect, useRef } from "react";

export default function PixelSnow() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    let width = window.innerWidth;
    let height = window.innerHeight;
    let frame = 0;
    let lastTime = 0;
    let particles = [];

    function resize() {
      width = window.innerWidth;
      height = window.innerHeight;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = Math.min(180, Math.max(70, Math.round(width * height / 6500)));
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 1.8 + 0.6,
        speed: Math.random() * 16 + 7,
        opacity: Math.random() * 0.55 + 0.18,
        phase: Math.random() * Math.PI * 2,
        pale: Math.random() > 0.8,
      }));
    }

    function draw(time) {
      const delta = lastTime ? Math.min((time - lastTime) / 1000, 0.05) : 0;
      lastTime = time;
      ctx.clearRect(0, 0, width, height);
      particles.forEach(p => {
        const shimmer = 0.85 + Math.sin(time * 0.0007 + p.phase) * 0.15;
        ctx.fillStyle = p.pale
          ? `rgba(150, 192, 255, ${p.opacity * shimmer})`
          : `rgba(59, 130, 246, ${p.opacity * shimmer})`;
        ctx.fillRect(Math.round(p.x), Math.round(p.y), p.size, p.size);
        p.y += p.speed * delta;
        p.x += Math.sin(time * 0.0003 + p.phase) * 4 * delta;
        if (p.y > height + 4) { p.y = -4; p.x = Math.random() * width; }
        if (p.x > width + 4) p.x = -4;
        if (p.x < -4) p.x = width + 4;
      });
      frame = requestAnimationFrame(draw);
    }

    function visibility() {
      cancelAnimationFrame(frame);
      lastTime = 0;
      if (!document.hidden) frame = requestAnimationFrame(draw);
    }
    resize();
    frame = requestAnimationFrame(draw);
    window.addEventListener("resize", resize);
    document.addEventListener("visibilitychange", visibility);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", resize);
      document.removeEventListener("visibilitychange", visibility);
    };
  }, []);

  return <canvas ref={canvasRef} className="pixel-snow absolute inset-0 h-full w-full pointer-events-none" aria-hidden="true" />;
}
