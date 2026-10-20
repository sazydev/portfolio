"use client";

import { motion } from "framer-motion";

export const revealEase = [0.22, 1, 0.36, 1];
export const revealViewport = { once: true, margin: "0px 0px -48px 0px", amount: 0.12 };

const elements = {
  div: motion.div,
  article: motion.article,
  figure: motion.figure,
  details: motion.details,
  a: motion.a,
};

// Observe each block separately: long lists must reveal as they enter the screen.
// Only opacity and a short translation; no blur, zoom or persistent GPU layers.
export default function Reveal({ as = "div", delay = 0, mode = "rise", children, ...props }) {
  const Element = elements[as];
  return <Element
    initial={{ opacity: 0, y: mode === "rise" ? 18 : 0 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={revealViewport}
    transition={{ duration: 0.7, delay, ease: revealEase }}
    {...props}
  >{children}</Element>;
}
