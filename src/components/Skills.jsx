"use client";

import { motion } from "framer-motion";
import {
  CheckCircle2,
  Code2,
  Megaphone,
  Network,
  Palette,
  Search,
  ShieldCheck,
  Sparkles,
  Wrench,
} from "lucide-react";

const skills = [
  {
    icon: Code2,
    title: "Développement Web",
    description:
      "Création de sites vitrines, interfaces modernes, bases de données et logique utilisateur.",
    items: [
      "Développement de sites vitrines en HTML / CSS / JavaScript",
      "Création et gestion de bases de données SQL",
      "Utilisation de PHPMyAdmin pour gérer les données",
      "Connexion d’un site à une base de données",
      "Fiche produit dynamique",
      "Authentification Firebase",
      "Gestion des utilisateurs",
      "Modification des informations, mot de passe, email et déconnexion",
      "Vérification par email à la création de compte",
      "Intégration responsive mobile / tablette / desktop",
      "Reproduction fidèle de maquettes Figma",
      "Structuration propre d’un projet",
      "Déploiement sur Netlify et o2switch",
      "Utilisation avancée de l’IA pour debug, optimisation et structuration",
    ],
  },
  {
    icon: Network,
    title: "Réseaux & Infrastructure",
    description:
      "Installation, configuration réseau, matériel et environnement local.",
    items: [
      "Installation et configuration de routeurs",
      "Création et sertissage de câbles RJ45",
      "Mise en place de réseaux locaux",
      "Paramétrage de tablettes",
      "Expérience sur Windows Server 2008",
      "Bases Active Directory",
      "Configuration de NAS",
      "Installation de caméras de sécurité",
      "Paramétrage domotique : alarme, volets, chauffage, portail, TV, enceintes",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Cybersécurité",
    description:
      "Tests, analyse réseau et apprentissage des vulnérabilités en environnement personnel.",
    items: [
      "Utilisation de Kali Linux en environnement de test",
      "Scan de réseau local avec Nmap",
      "Tests Man-in-the-Middle sur mon propre réseau avec Ettercap",
      "Apprentissage des vulnérabilités SQL",
      "Mise en place et configuration de pare-feu",
    ],
  },
  {
    icon: Search,
    title: "OSINT",
    description:
      "Recherche d’informations en sources ouvertes dans un cadre d’entraînement.",
    items: [
      "Recherche d’informations en sources ouvertes",
      "Exploitation de bases de données publiques",
      "Utilisation d’outils OSINT dans un cadre d’entraînement",
    ],
  },
  {
    icon: Wrench,
    title: "Maintenance & Hardware",
    description:
      "Montage, optimisation et maintenance de postes informatiques.",
    items: [
      "Montage complet de PC",
      "Installation et optimisation de Windows",
      "Optimisation système pour performance gaming et fluidité",
    ],
  },
  {
    icon: Sparkles,
    title: "IA & Automatisation",
    description:
      "Usage avancé de l’IA générative et réflexion autour de l’automatisation.",
    items: [
      "4 ans d’utilisation avancée d’IA générative",
      "Rédaction de prompts optimisés pour génération de code",
      "Rédaction de prompts pour images, vidéos et musique",
      "Projet entrepreneurial autour de l’automatisation pour entreprises : ALYO",
    ],
  },
  {
    icon: Palette,
    title: "UI / UX & Design",
    description:
      "Interfaces, maquettes, hiérarchie visuelle et cohérence graphique.",
    items: [
      "Création de maquettes sur Figma",
      "Conception de landing pages modernes",
      "Réflexion UX : structure, hiérarchie et lisibilité",
      "Création d’identités visuelles simples",
      "Création de logos, affiches, palettes et cohérence graphique",
      "Bases solides sur Photoshop",
      "Bases sur Illustrator",
      "Bases sur Premiere Pro",
    ],
  },
  {
    icon: Megaphone,
    title: "Communication & Réseaux sociaux",
    description:
      "Création de supports visuels et gestion de présence digitale.",
    items: [
      "Création de posts pour entreprises et projets scolaires",
      "Étude de la marque Méduse à Angers",
      "Création de visuels cohérents avec l’identité d’une marque",
      "Gestion d’un site associatif",
      "Création de supports de communication",
    ],
  },
];

export default function Skills() {
  return (
    <section id="competences" className="relative overflow-hidden px-6 py-32">
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
            Compétences — technique & création
          </div>

          <h2 className="text-5xl font-black leading-[0.95] tracking-[-0.07em] text-white md:text-7xl">
            Un profil polyvalent, orienté projets réels.
          </h2>

          <p className="mx-auto mt-7 max-w-3xl text-base leading-8 text-white/55 md:text-lg">
            Je touche à plusieurs domaines du digital : développement web,
            réseaux, cybersécurité, design, IA et communication. Le but n’est
            pas juste de connaître des outils, mais de savoir les utiliser dans
            des vrais projets.
          </p>
        </motion.div>

        <div className="mt-20 grid gap-5 md:grid-cols-2">
          {skills.map((skill, index) => {
            const Icon = skill.icon;

            return (
              <motion.article
                key={skill.title}
                initial={{ opacity: 0, y: 34, scale: 0.98 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{
                  duration: 0.65,
                  delay: index * 0.05,
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

                  <div>
                    <h3 className="text-2xl font-bold tracking-tight text-white md:text-3xl">
                      {skill.title}
                    </h3>

                    <p className="mt-3 max-w-2xl leading-7 text-white/50">
                      {skill.description}
                    </p>
                  </div>
                </div>

                <div className="mt-6 h-px w-full bg-gradient-to-r from-blue-400/30 via-white/10 to-transparent" />

                <ul className="mt-6 grid gap-3">
                  {skill.items.map((item) => (
                    <li key={item} className="flex gap-3 leading-7 text-white/58">
                      <CheckCircle2
                        size={18}
                        className="mt-1 shrink-0 text-blue-300"
                      />
                      <span>{item}</span>
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