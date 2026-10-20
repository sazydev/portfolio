"use client";
import { motion } from "framer-motion";
import Reveal, { revealEase, revealViewport } from "@/components/Reveal";

import {
  GraduationCap,
  BriefcaseBusiness,
  Award,
} from "lucide-react";

const journey = [
  {
    icon: Award,
    date: "2021 — 2024",
    title: "Bac Pro Systèmes Numériques",
    place: "Lycée Saint Aubin La Salle",
    description:
      "Bases en informatique, réseaux, systèmes, maintenance et environnement numérique.",
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
    icon: GraduationCap,
    date: "2025 — 2028",
    title: "Bachelor Web & Digital",
    place: "MyDigitalSchool Angers",
    description:
      "Formation orientée web, design et communication digitale.",
  },
];

export default function Journey() {
  return (
    <section id="parcours" className="portfolio-section journey-section">
      <div className="content-container">
        <Reveal className="section-heading">
          <h2 className="section-title text-white">Mon Parcours</h2>
          <p className="section-intro text-white/55">Un parcours construit entre études, expériences professionnelles, projets personnels et montée en compétences continue.</p>
        </Reveal>
        <div className="journey-track">
          {journey.map((item, index) => (
            <Reveal as="article" mode="fade" delay={index * 0.12} key={item.title} className="journey-stop">
              <p className="journey-date">{item.date}</p>
              <div className="journey-line" aria-hidden="true"><motion.i initial={{scaleX:0}} whileInView={{scaleX:1}} viewport={revealViewport} transition={{duration:0.85,delay:index * 0.12,ease:revealEase}} /><span /></div>
              <h3>{item.title}</h3>
              <p className="journey-place">{item.place}</p>
              <p className="body-copy text-white/55">{item.description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
