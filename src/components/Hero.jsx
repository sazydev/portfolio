"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Folder, Mail } from "lucide-react";
import { useEffect, useState } from "react";

const words = [
  "Développeur Web",
  "Cybersécurité",
  "Réseaux Informatique",
  "Design UI / UX",
  "Automatisation IA",
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((current) => (current + 1) % words.length);
    }, 2200);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-28 pb-20">
      <div className="mx-auto flex max-w-7xl flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-9 inline-flex rounded-full border border-blue-400/60 bg-blue-500/10 px-6 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-blue-300 shadow-[0_0_40px_rgba(59,130,246,0.18)]"
        >
          Recherche alternance · Septembre 2026
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.1 }}
          className="max-w-6xl text-5xl font-black leading-[0.9] tracking-[-0.045em] text-white sm:text-6xl md:text-7xl lg:text-[7.5rem]"
        >
          Mattéo
          <br />
          Courtin
        </motion.h1>

        <div className="mt-8 flex min-h-[90px] items-center justify-center overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={words[index]}
              initial={{ y: 60, opacity: 0, filter: "blur(12px)" }}
              animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
              exit={{ y: -60, opacity: 0, filter: "blur(12px)" }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="relative text-4xl font-black leading-none tracking-[-0.06em] text-blue-500 sm:text-5xl md:text-7xl lg:text-8xl"
            >
              {words[index]}
              <span className="ml-2 inline-block h-[0.85em] w-2 translate-y-2 bg-blue-500 shadow-[0_0_28px_rgba(59,130,246,0.9)]" />
            </motion.div>
          </AnimatePresence>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.25 }}
          className="mt-8 max-w-3xl text-base leading-8 text-white/55 md:text-xl"
        >
          Profil web avec une base en systèmes, réseaux et cybersécurité.
          Je conçois des interfaces propres, modernes et utiles, avec une vraie
          attention au design et à l’expérience utilisateur.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.35 }}
          className="mt-10 flex flex-wrap justify-center gap-4"
        >
          <a
            href="#projets"
            className="group inline-flex h-14 items-center gap-3 rounded-xl bg-blue-500 px-7 text-sm font-bold text-white shadow-[0_20px_60px_rgba(59,130,246,0.32)] transition hover:-translate-y-1 hover:bg-blue-400"
          >
            <Folder size={18} />
            Voir mes projets
            <ArrowUpRight
              size={17}
              className="transition group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </a>

          <a
            href="#contact"
            className="group inline-flex h-14 items-center gap-3 rounded-xl border border-white/10 bg-white/[0.04] px-7 text-sm font-bold text-white transition hover:-translate-y-1 hover:bg-white/[0.08]"
          >
            <Mail size={18} />
            Me contacter
          </a>
        </motion.div>
      </div>
    </section>
  );
}