"use client";

import { useEffect, useRef } from "react";

export default function PixelSnow() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let width = window.innerWidth;
    let height = window.innerHeight;
    let animationFrame;

    canvas.width = width;
    canvas.height = height;

    const particles = Array.from({ length: 220 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,

      // PLUS GROS
      size: Math.random() * 3.5 + 1.2,

      // Mouvement
      speed: Math.random() * 0.55 + 0.15,

      // PLUS VISIBLE
      opacity: Math.random() * 0.6 + 0.35,

      // Glow plus présent
      glow: Math.random() * 16 + 10,
    }));

    function resize() {
      width = window.innerWidth;
      height = window.innerHeight;

      canvas.width = width;
      canvas.height = height;
    }

    function draw() {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p) => {
        ctx.beginPath();

        // Glow bleu
        ctx.shadowBlur = p.glow;
        ctx.shadowColor = "rgba(59,130,246,0.9)";

        // Couleur un peu plus claire
        ctx.fillStyle = `rgba(125, 190, 255, ${p.opacity})`;

        ctx.fillRect(p.x, p.y, p.size, p.size);

        // Mouvement
        p.y += p.speed;
        p.x += Math.sin(p.y * 0.012) * 0.22;

        // Reset
        if (p.y > height) {
          p.y = -12;
          p.x = Math.random() * width;
        }
      });

      animationFrame = requestAnimationFrame(draw);
    }

    draw();

    window.addEventListener("resize", resize);

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-40 h-full w-full pointer-events-none opacity-100"
    />
  );
}