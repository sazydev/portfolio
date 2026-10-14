"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Folder, Mail } from "lucide-react";
import { useEffect, useState } from "react";

const words = [
  "Communication",
  "Réseaux sociaux",
  "Développeur Web",
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
    <section className="hero-section relative flex items-center justify-center overflow-hidden">
      <div className="content-container flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-6 inline-flex rounded-full border border-blue-400/60 bg-blue-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-blue-300 shadow-[0_0_40px_rgba(59,130,246,0.18)]"
        >
          Recherche alternance · Dès maintenant
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.1 }}
          className="hero-title text-white"
        >
          Mattéo
          <br />
          Courtin
        </motion.h1>

        <div className="mt-5 flex min-h-20 w-full items-center justify-center overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={words[index]}
              initial={{ y: 60, opacity: 0, filter: "blur(12px)" }}
              animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
              exit={{ y: -60, opacity: 0, filter: "blur(12px)" }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="hero-specialty relative text-blue-500"
            >
              {words[index]}
              <span className="ml-2 inline-block h-[0.85em] w-1 align-middle bg-blue-500 shadow-[0_0_28px_rgba(59,130,246,0.9)]" />
            </motion.div>
          </AnimatePresence>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.25 }}
          className="section-intro mt-4 text-white/55"
        >
Profil polyvalent entre communication, création digitale et développement web. De l’identité visuelle au contenu, jusqu’à la conception d’un site, j’aime toucher à tout et transformer une idée en projet concret.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.35 }}
          className="mt-7 flex flex-wrap justify-center gap-3"
        >
          <a
            href="#projets"
            className="group action-button inline-flex items-center rounded-xl bg-blue-500 text-sm font-bold text-white shadow-[0_20px_60px_rgba(59,130,246,0.32)] transition hover:-translate-y-1 hover:bg-blue-400"
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
            className="group action-button inline-flex items-center rounded-xl border border-white/10 bg-white/[0.04] text-sm font-bold text-white transition hover:-translate-y-1 hover:bg-white/[0.08]"
          >
            <Mail size={18} />
            Me contacter
          </a>
        </motion.div>
      </div>
    </section>
  );
}