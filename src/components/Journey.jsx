"use client";

import { motion } from "framer-motion";
import {
  GraduationCap,
  BriefcaseBusiness,
  Award,
  ArrowUpRight,
} from "lucide-react";

const journey = [
  {
    icon: GraduationCap,
    date: "2025 — 2028",
    title: "Bachelor Web & Digital",
    place: "MyDigitalSchool Angers",
    description:
      "Formation orientée web, design et communication digitale.",
  },
  {
    icon: BriefcaseBusiness,
    date: "2024 — 2025",
    title: "Hôte de caisse — CDD 6 mois",
    place: "Bricomarché Segré",
    description:
      "Expérience professionnelle qui m’a permis de gagner en confiance, organisation et relation client.",
  },
  {
    icon: Award,
    date: "2021 — 2024",
    title: "Bac Pro Systèmes Numériques",
    place: "Lycée Saint Aubin La Salle",
    description:
      "Bases en informatique, réseaux, systèmes, maintenance et environnement numérique.",
  },
];

export default function Journey() {
  return (
    <section id="parcours" className="portfolio-section relative overflow-hidden">
      <div className="content-container">
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.75 }}
          className="mx-auto max-w-4xl text-center"
        >
          <div className="section-label border border-white/10 bg-white/[0.04] text-white/55">
            <span className="h-2 w-2 rounded-full bg-blue-400 shadow-[0_0_20px_rgba(96,165,250,0.9)]" />
            Parcours — évolution & expérience
          </div>

          <h2 className="section-title text-white">
            Mon Parcours
          </h2>

          <p className="section-intro mx-auto mt-5 text-white/55">
            Un parcours construit entre études, expériences professionnelles,
            projets personnels et montée en compétences continue.
          </p>
        </motion.div>

        <div className="mx-auto mt-10 grid max-w-4xl gap-4">
          {journey.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 34, scale: 0.97 }}
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
                className={`group relative overflow-hidden surface-card border border-white/10 bg-[#080a10]/80 shadow-[0_30px_100px_rgba(0,0,0,0.35)] backdrop-blur-xl ${
                  index % 2 === 0 ? "md:mr-auto" : "md:ml-auto"
                } w-full md:w-[58%]`}
              >
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-300/40 to-transparent opacity-0 transition group-hover:opacity-100" />

                <div className="icon-box absolute right-5 top-5 border border-blue-400/20 bg-blue-500/10 text-blue-300 shadow-[0_0_40px_rgba(59,130,246,0.18)]">
                  <Icon size={22} />
                </div>

                <div className="pr-16">
                  <p className="text-sm font-medium text-blue-300">
                    {item.date}
                  </p>

                  <h3 className="mt-3 card-title text-white">
                    {item.title}
                  </h3>

                  <p className="body-copy mt-2 text-white/45">{item.place}</p>
                </div>

                <div className="mt-5 h-px w-full bg-gradient-to-r from-blue-400/30 via-white/10 to-transparent" />

                <p className="mt-4 body-copy text-white/58">
                  {item.description}
                </p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
