"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Code2,
  Cpu,
  Rocket,
  ShieldCheck,
} from "lucide-react";

const cards = [
  {
    icon: Cpu,
    title: "Base technique",
    text: "Hardware, systèmes, réseau, maintenance et compréhension terrain.",
  },
  {
    icon: Code2,
    title: "Création web",
    text: "Sites modernes, responsive, structurés et pensés pour l’utilisateur.",
  },
  {
    icon: ShieldCheck,
    title: "Culture cyber",
    text: "OSINT, Kali Linux, analyse réseau, tests en environnement personnel.",
  },
];

export default function About() {
  return (
    <section id="apropos" className="relative overflow-hidden px-6 py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[0.9fr_1.1fr]">
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.75 }}
          className="max-w-2xl"
        >
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-white/55">
            <span className="h-2 w-2 rounded-full bg-blue-400 shadow-[0_0_20px_rgba(96,165,250,0.9)]" />
            À propos — mon parcours
          </div>

          <h2 className="text-5xl font-black leading-[0.95] tracking-[-0.07em] text-white md:text-7xl">
            Un profil web avec une vraie base technique.
          </h2>

          <div className="mt-8 space-y-5 text-base leading-8 text-white/55 md:text-lg">
            <p>
              J’ai commencé par vouloir monter mon PC pour jouer. J’ai appris en
              testant, en galérant, puis en recommençant jusqu’à comprendre.
            </p>

            <p>
              Ensuite, je suis tombé dans le digital : sites web, design,
              développement, OSINT, cybersécurité et automatisation.
            </p>

            <p>
              Aujourd’hui, je veux progresser sur des projets concrets, avec une
              approche simple : comprendre, construire, améliorer.
            </p>
          </div>

          <a
            href="https://www.linkedin.com/in/courtinmatteo/"
            target="_blank"
            rel="noreferrer"
            className="group mt-10 inline-flex h-12 items-center gap-2 rounded-xl bg-blue-500 px-6 text-sm font-bold text-white shadow-[0_20px_60px_rgba(59,130,246,0.3)] transition hover:-translate-y-1 hover:bg-blue-400"
          >
            Voir mon LinkedIn
            <ArrowUpRight
              size={17}
              className="transition group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 32, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="absolute -inset-8 rounded-[3rem] bg-blue-500/10 blur-3xl" />

          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#080a10]/80 p-6 shadow-[0_40px_120px_rgba(0,0,0,0.45)] backdrop-blur-xl">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-300/40 to-transparent" />

            <motion.div
              whileHover={{
                y: -5,
                borderColor: "rgba(96,165,250,0.25)",
              }}
              transition={{ type: "spring", stiffness: 240, damping: 22 }}
              className="rounded-[1.5rem] border border-white/10 bg-white/[0.035] p-7"
            >
              <div className="flex items-center justify-between gap-5">
                <div>
                  <p className="text-sm font-medium text-blue-300">Objectif</p>

                  <h3 className="mt-4 text-3xl font-bold tracking-tight text-white">
                    Trouver une alternance où je peux progresser.
                  </h3>
                </div>

                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-blue-400/20 bg-blue-500/10 text-blue-300 shadow-[0_0_40px_rgba(59,130,246,0.16)]">
                  <Rocket size={24} />
                </div>
              </div>

              <p className="mt-5 leading-8 text-white/55">
Je sais que je n’ai pas encore tout appris. Mais j’ai déjà assez créé pour savoir ce que je peux apporter. Je cherche maintenant une entreprise qui me laissera le prouver.
              </p>
            </motion.div>

            <div className="mt-5 grid gap-4">
              {cards.map((card, index) => {
                const Icon = card.icon;

                return (
                  <motion.div
                    key={card.title}
                    initial={{ opacity: 0, x: 24 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    whileHover={{
                      y: -5,
                      borderColor: "rgba(96,165,250,0.25)",
                    }}
                    transition={{
                      duration: 0.55,
                      delay: index * 0.08,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="group relative flex gap-5 overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-5"
                  >
                    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-300/30 to-transparent opacity-0 transition group-hover:opacity-100" />

                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-300">
                      <Icon size={21} />
                    </div>

                    <div>
                      <h4 className="text-lg font-bold tracking-tight text-white">
                        {card.title}
                      </h4>

                      <p className="mt-2 text-sm leading-6 text-white/50">
                        {card.text}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}