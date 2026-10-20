"use client";
import { MotionConfig } from "framer-motion";
import { ReactLenis } from "lenis/react";

const scrollOptions = {
  autoRaf: true,
  lerp: 0.11,
  smoothWheel: true,
  syncTouch: false,
  anchors: true,
  // Keep the motion preview requested for this portfolio active.
  respectReducedMotion: false,
};

export default function ExperienceShell({children}) {
  return <MotionConfig reducedMotion="never">
    <ReactLenis root options={scrollOptions}>{children}</ReactLenis>
  </MotionConfig>;
}
