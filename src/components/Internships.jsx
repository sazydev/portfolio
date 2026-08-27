"use client";

import { motion } from "framer-motion";
import {
  Building2,
  CheckCircle2,
  Code2,
  MonitorCog,
  Network,
  PanelsTopLeft,
  Server,
  Wrench,
} from "lucide-react";

const internships = [
  {
    icon: PanelsTopLeft,
    title: "Stage Développeur Web / WordPress",
    place: "Andégave Communication — Angers",
    duration: "3 jours",
    missions: [
      "Développement et amélioration d’un site WordPress pour le Domaine de Pescheray.",
      "Création de composants, CPT et fonctionnalités WordPress personnalisés.",
      "Développement d’un plugin de conversion PNG / JPG vers WebP.",
      "Optimisation du responsive, de l’accessibilité et de l’interface du site.",
    ],
  },
  {
    icon: Code2,
    title: "Stage Développeur Web",
    place: "ESSHA Segré Basket — Segré",
    duration: "3 mois",
    missions: [
      "Refonte et développement complet du site web du club avec Next.js.",
      "Intégration de Directus comme CMS pour permettre au club de gérer son contenu en autonomie.",
      "Création et gestion dynamique des équipes, joueurs, matchs, entraînements et actualités.",
      "Travail sur le responsive, l’expérience utilisateur et le design global du site.",
    ],
  },
  {
    icon: MonitorCog,
    title: "Stage de Seconde",
    place: "Lycée Bourg Chevreau",
    duration: "2 semaines",
    missions: [
      "Maintenance de PC fixes, PC portables, imprimantes et périphériques.",
      "Mise à jour du site web du lycée.",
      "Préparation des ordinateurs pour les sessions PIX.",
      "Création d’une bannière défilante en HTML/CSS.",
    ],
  },
  {
    icon: Network,
    title: "Stage de Seconde",
    place: "Mairie de Segré",
    duration: "5 semaines",
    missions: [
      "Installation et configuration de tablettes pour les écoles.",
      "Utilisation de Windows Server 2008.",
      "Installation de pare-feu sur des postes informatiques.",
      "Mise en place de routeurs et câbles RJ45.",
    ],
  },
  {
    icon: Wrench,
    title: "Stage de Première",
    place: "Boutique Informatique de Segré",
    duration: "2 semaines",
    missions: [
      "Montage et démontage de PC fixes et portables.",
      "Remplacement d’écran de PC portable.",
      "Maintenance informatique en entreprise.",
      "Optimisation de postes pour améliorer les performances.",
    ],
  },
  {
    icon: Server,
    title: "Stage de Terminale",
    place: "Boutique Informatique de Segré",
    duration: "7 semaines",
    missions: [
      "Préparation complète de postes informatiques avant mise en vente.",
      "Installation de systèmes d’exploitation.",
      "Optimisation et nettoyage de PC portables.",
      "Maintenance informatique en environnement professionnel.",
    ],
  },
];

export default function Internships() {
  return (
    <section id="stages" className="relative overflow-hidden px-6 py-32">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.75 }}
          className="mx-auto max-w-4xl text-center"
        >
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-white/55">
            <span className="h-2 w-2 rounded-full bg-blue-400 shadow-[0_0_20px_rgba(96,165,250,0.9)]" />
            Stages — expériences terrain
          </div>

          <h2 className="text-5xl font-black leading-[0.95] tracking-[-0.07em] text-white md:text-7xl">
            Du concret, pas seulement de la théorie.
          </h2>

          <p className="mx-auto mt-7 max-w-3xl text-base leading-8 text-white/55 md:text-lg">
            Ces stages m’ont permis de toucher à la maintenance, au réseau, au
            matériel, aux systèmes et à l’environnement professionnel. C’est ce
            qui m’a donné une base technique solide avant d’aller plus loin dans
            le web et la cybersécurité.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {internships.map((stage, index) => {
              const Icon = stage.icon;

              return (
                <motion.article
                  key={`${stage.title}-${stage.place}`}
                  initial={{ opacity: 0, y: 34, scale: 0.98 }}
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
                  className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#080a10]/80 p-7 shadow-[0_30px_100px_rgba(0,0,0,0.35)] backdrop-blur-xl"
                >
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-300/40 to-transparent opacity-0 transition group-hover:opacity-100" />

                  <div className="flex items-start gap-5">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-blue-400/20 bg-blue-500/10 text-blue-300 shadow-[0_0_40px_rgba(59,130,246,0.16)]">
                      <Icon size={24} />
                    </div>

                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="rounded-full border border-blue-400/20 bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-300">
                          {stage.duration}
                        </span>
                      </div>

                      <h3 className="mt-4 text-2xl font-bold tracking-tight text-white md:text-3xl">
                        {stage.title}
                      </h3>

                      <p className="mt-2 flex items-center gap-2 text-white/45">
                        <Building2 size={16} />
                        {stage.place}
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 h-px w-full bg-gradient-to-r from-blue-400/30 via-white/10 to-transparent" />

                  <ul className="mt-6 grid gap-3">
                    {stage.missions.map((mission) => (
                      <li
                        key={mission}
                        className="flex gap-3 leading-7 text-white/58"
                      >
                        <CheckCircle2
                          size={18}
                          className="mt-1 shrink-0 text-blue-300"
                        />
                        <span>{mission}</span>
                      </li>
                    ))}
                  </ul>
                </motion.article>
              );
          })}
        </div>
      </div>
    </section>
  );
}
