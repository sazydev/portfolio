"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function Cursor() {
  const [hovered, setHovered] = useState(false);
  const [visible, setVisible] = useState(false);
  const interaction = useRef({ hovered: false, visible: false });

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const smoothX = useSpring(mouseX, {
    damping: 28,
    stiffness: 220,
    mass: 0.5,
    restDelta: 0.2,
    restSpeed: 0.5,
  });

  const smoothY = useSpring(mouseY, {
    damping: 28,
    stiffness: 220,
    mass: 0.5,
    restDelta: 0.2,
    restSpeed: 0.5,
  });

  const cursorX = useTransform(smoothX, value => Math.round(value));
  const cursorY = useTransform(smoothY, value => Math.round(value));

  useEffect(() => {
    const precisePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
    if (!precisePointer.matches) return;

    document.documentElement.classList.add("has-custom-cursor");
    const move = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!interaction.current.visible) {
        interaction.current.visible = true;
        setVisible(true);
      }
      const nextHovered = e.target instanceof Element && Boolean(e.target.closest("a, button, summary, [role='button']"));
      if (nextHovered !== interaction.current.hovered) {
        interaction.current.hovered = nextHovered;
        setHovered(nextHovered);
      }
    };
    const leave = () => {
      interaction.current.visible = false;
      interaction.current.hovered = false;
      setVisible(false);
      setHovered(false);
    };
    window.addEventListener("mousemove", move);
    document.addEventListener("mouseleave", leave);
    window.addEventListener("blur", leave);

    return () => {
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseleave", leave);
      window.removeEventListener("blur", leave);
      document.documentElement.classList.remove("has-custom-cursor");
    };
  }, [mouseX, mouseY]);

  return (
    <div aria-hidden="true">
      <motion.div
        style={{
          x: cursorX,
          y: cursorY,
        }}
        animate={{
          opacity: visible ? 1 : 0,
          scale: hovered ? 1.8 : 1,
        }}
        transition={{ duration: 0.16, ease: "easeOut" }}
        className="portfolio-cursor pointer-events-none fixed left-0 top-0 z-[9999] hidden h-12 w-12 -translate-x-1/2 -translate-y-1/2 rounded-full border border-blue-300/30 bg-blue-400/5 md:block"
      />

      <motion.div
        style={{
          x: cursorX,
          y: cursorY,
        }}
        animate={{
          opacity: visible ? 0.45 : 0,
          scale: hovered ? 2.2 : 1.4,
        }}
        transition={{ duration: 0.18, ease: "easeOut" }}
        className="portfolio-cursor pointer-events-none fixed left-0 top-0 z-[9998] hidden h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full cursor-halo md:block"
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
        transition={{ duration: 0.12, ease: "easeOut" }}
        className="portfolio-cursor pointer-events-none fixed left-0 top-0 z-[10000] hidden h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-300 shadow-[0_0_20px_rgba(96,165,250,0.9)] md:block"
      />
    </div>
  );
}