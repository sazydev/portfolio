"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Reveal from "@/components/Reveal";
import {
  ArrowUpRight,
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
  "Développement d’applications web avec React et Next.js",
  "Création de dashboards interactifs et interfaces SaaS",
  "Intégration de Supabase",
  "Authentification sécurisée et gestion des utilisateurs",
  "Gestion des abonnements, paiements et webhooks Stripe",
  "Création de graphiques interactifs avec Recharts",

  "Développement WordPress et création de composants personnalisés",
  "Création de plugins WordPress sur mesure",
  "Développement d’un plugin de conversion PNG / JPG vers WebP",
  "Intégration et gestion de CMS avec Directus",

  "Développement de sites en HTML / CSS / JavaScript",
  "Création et gestion de bases de données SQL",
  "Connexion et exploitation de données via API",

  "Intégration responsive mobile / tablette / desktop",
  "Reproduction fidèle de maquettes Figma",
  "Création d’interfaces UI / UX modernes",

  "Déploiement et maintenance sur Netlify et o2switch",
  "Utilisation de Git / GitHub et gestion de versions",
]
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
    "Création d’identités visuelles, de contenus et gestion de présence digitale.",
  items: [
    "Création de logos et d’identités visuelles",
    "Création de supports et visuels de communication",
    "Gestion et création de contenus pour les réseaux sociaux",
    "Gestion d’un compte TikTok professionnel ayant dépassé 150 000 vues",
    "Création de campagnes de communication pour mes propres projets",
    "Analyse de marque et réflexion autour du positionnement",
    "Gestion et mise à jour de sites web",
  ],
},
];

export default function Skills() {
  const [active, setActive] = useState(0);
  return (
    <section id="competences" className="portfolio-section skills-section">
      <div className="content-container">
        <Reveal className="section-heading">
          <h2 className="section-title text-white">Un profil très polyvalent</h2>
          <p className="section-intro text-white/55">Communication, développement, design, IA, réseaux… difficile de me mettre dans une seule case. Et ça me va très bien. J’aime comprendre, tester et surtout transformer ce que j’apprends en projets concrets.</p>
        </Reveal>
        <div className="skills-workbench">
          <Reveal mode="fade" className="skills-selector" aria-label="Domaines de compétences">
            {skills.map((skill, index) => (
              <button key={skill.title} id={`skill-button-${index}`} aria-expanded={active === index} aria-controls={`skill-content-${index}`} onClick={() => setActive(index)} className="skill-choice" data-active={active === index}>
                <span>{skill.title}</span><ArrowUpRight size={18} aria-hidden="true" />
              </button>
            ))}
          </Reveal>
          <Reveal mode="fade" delay={0.12} className="skills-display">
            {skills.map((skill, index) => (
              <div key={skill.title} id={`skill-content-${index}`} role="region" aria-labelledby={`skill-button-${index}`} hidden={active !== index}>
                {active === index && <motion.div initial={{opacity:0, y:12}} animate={{opacity:1,y:0}} transition={{duration:0.25}}>
                  <h3>{skill.title}</h3>
                  <p className="section-intro text-white/55">{skill.description}</p>
                  <ul>{skill.items.map(item => <li key={item}>{item}</li>)}</ul>
                </motion.div>}
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
