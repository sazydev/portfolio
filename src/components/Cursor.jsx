"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export default function Cursor() {
  const [hovered, setHovered] = useState(false);
  const [visible, setVisible] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const smoothX = useSpring(mouseX, {
    damping: 18,
    stiffness: 140,
    mass: 0.4,
  });

  const smoothY = useSpring(mouseY, {
    damping: 18,
    stiffness: 140,
    mass: 0.4,
  });

  useEffect(() => {
    const move = (e) => {
      setVisible(true);
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const leave = () => setVisible(false);

    const over = (e) => {
      if (e.target.closest("a, button")) setHovered(true);
    };

    const out = (e) => {
      if (e.target.closest("a, button")) setHovered(false);
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseleave", leave);
    document.addEventListener("mouseover", over);
    document.addEventListener("mouseout", out);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseleave", leave);
      document.removeEventListener("mouseover", over);
      document.removeEventListener("mouseout", out);
    };
  }, [mouseX, mouseY]);

  return (
    <>
      <motion.div
        style={{
          x: smoothX,
          y: smoothY,
        }}
        animate={{
          opacity: visible ? 1 : 0,
          scale: hovered ? 1.8 : 1,
        }}
        transition={{ duration: 0.18 }}
        className="pointer-events-none fixed left-0 top-0 z-[9999] hidden h-12 w-12 -translate-x-1/2 -translate-y-1/2 rounded-full border border-blue-300/30 bg-blue-400/10 backdrop-blur-[2px] mix-blend-screen md:block"
      />

      <motion.div
        style={{
          x: smoothX,
          y: smoothY,
        }}
        animate={{
          opacity: visible ? 0.45 : 0,
          scale: hovered ? 2.2 : 1.4,
        }}
        transition={{ duration: 0.25 }}
        className="pointer-events-none fixed left-0 top-0 z-[9998] hidden h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/20 blur-2xl md:block"
      />

      <motion.div
        style={{
          x: mouseX,
          y: mouseY,
        }}
        animate={{
          opacity: visible ? 1 : 0,
          scale: hovered ? 0.6 : 1,
        }}
        transition={{ duration: 0.12 }}
        className="pointer-events-none fixed left-0 top-0 z-[10000] hidden h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-300 shadow-[0_0_20px_rgba(96,165,250,0.9)] md:block"
      />
    </>
  );
}