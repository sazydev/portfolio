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

    const particles = Array.from({ length: 120 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 2 + 0.5,
      speed: Math.random() * 0.35 + 0.1,
      opacity: Math.random() * 0.7 + 0.15,
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
        ctx.fillStyle = `rgba(59, 130, 246, ${p.opacity})`;

        ctx.fillRect(p.x, p.y, p.size, p.size);

        p.y += p.speed;
        p.x += Math.sin(p.y * 0.01) * 0.15;

        if (p.y > height) {
          p.y = -10;
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
      className="fixed inset-0 -z-40 h-full w-full pointer-events-none"
    />
  );
}