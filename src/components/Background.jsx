"use client";

import PixelSnow from "@/components/PixelSnow";
import { motion, useMotionValue, useTransform } from "framer-motion";

export default function Background() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const spotlight = useTransform(
    [x, y],
    ([latestX, latestY]) =>
      `radial-gradient(520px circle at ${latestX}px ${latestY}px, rgba(59,130,246,0.14), transparent 48%)`
  );

  function handleMouseMove(e) {
    x.set(e.clientX);
    y.set(e.clientY);
  }

  return (
    <div
      onMouseMove={handleMouseMove}
      className="fixed inset-0 -z-50 overflow-hidden bg-[#020617]"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(37,99,235,0.20),transparent_34%)]" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(14,165,233,0.08),transparent_28%)]" />

      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,6,23,0)_0%,rgba(2,6,23,0.65)_70%,rgba(2,6,23,0.95)_100%)]" />

      <motion.div
        style={{ background: spotlight }}
        className="absolute inset-0"
      />

      <PixelSnow />
    </div>
  );
}