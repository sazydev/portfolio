"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Code2,
  Globe,
  LayoutTemplate,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

const values = [
  {
    icon: Globe,
    title: "Présence en ligne",
    label: "01",
    text: "Créer des sites crédibles, modernes et clairs pour donner confiance dès les premières secondes.",
  },
  {
    icon: LayoutTemplate,
    title: "Interface & expérience",
    label: "02",
    text: "Transformer une idée en interface propre, lisible et agréable à utiliser.",
  },
  {
    icon: ShieldCheck,
    title: "Vision technique",
    label: "03",
    text: "Apporter une logique web, réseau et cybersécurité pour construire des projets plus solides.",
  },
  {
    icon: Sparkles,
    title: "Impact concret",
    label: "04",
    text: "Chercher à créer quelque chose d’utile, pas seulement quelque chose de joli.",
  },
];

export default function Value() {
  return (
    <section id="apports" className="portfolio-section relative overflow-hidden">
      <div className="content-container">
        <div className="grid items-start gap-8 lg:gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.75 }}
            className="lg:sticky lg:top-28"
          >
            <div className="section-label border border-white/10 bg-white/[0.04] text-white/55">
              <span className="h-2 w-2 rounded-full bg-blue-400 shadow-[0_0_20px_rgba(96,165,250,0.9)]" />
              Ce que je peux apporter
            </div>

            <h2 className="section-title text-white">
              Une approche utile, pas juste visuelle.
            </h2>

            <p className="section-intro mt-5 text-white/55">
              Mon objectif, ce n’est pas seulement de faire un site qui “rend
              bien”. C’est de créer quelque chose de clair, utile, cohérent et
              capable d’aider un projet à avancer.
            </p>

            <div className="mt-10 surface-card border border-white/10 bg-[#080a10]/75 shadow-[0_30px_100px_rgba(0,0,0,0.35)] backdrop-blur-xl">
              <div className="flex items-center gap-4">
                <div className="icon-box bg-blue-500/10 text-blue-300">
                  <Code2 size={22} />
                </div>

                <div>
                  <p className="font-semibold text-white">
                    Ce que je cherche
                  </p>
                  <p className="mt-1 text-sm text-white/45">
                    Une alternance où je peux apprendre, produire et progresser.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="grid gap-4">
            {values.map((value, index) => {
              const Icon = value.icon;

              return (
                <motion.article
                  key={value.title}
                  initial={{ opacity: 0, y: 32, scale: 0.98 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{
                    duration: 0.65,
                    delay: index * 0.08,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  whileHover={{
                    y: -6,
                    borderColor: "rgba(96,165,250,0.25)",
                  }}
                  className="group relative overflow-hidden surface-card border border-white/10 bg-[#080a10]/80 shadow-[0_30px_100px_rgba(0,0,0,0.35)] backdrop-blur-xl"
                >
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-300/40 to-transparent opacity-0 transition group-hover:opacity-100" />

                  <div className="flex items-start gap-4">
                    <div className="icon-box border border-blue-400/20 bg-blue-500/10 text-blue-300 shadow-[0_0_40px_rgba(59,130,246,0.16)]">
                      <Icon size={20} />
                    </div>

                    <div className="flex-1">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <p className="text-sm font-medium text-blue-300">
                            {value.label}
                          </p>

                          <h3 className="mt-2 card-title text-white">
                            {value.title}
                          </h3>
                        </div>

                        <ArrowUpRight
                          size={20}
                          className="mt-1 text-white/25 transition group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-blue-300"
                        />
                      </div>

                      <p className="mt-4 max-w-2xl body-copy text-white/55">
                        {value.text}
                      </p>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
