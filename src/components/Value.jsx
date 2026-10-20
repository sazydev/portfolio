"use client";
import Reveal from "@/components/Reveal";

import {
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
    <section id="apports" className="portfolio-section value-section">
      <div className="content-container value-layout">
        <Reveal className="value-intro">
          <h2 className="section-title text-white">Une approche utile, pas juste visuelle.</h2>
          <p className="section-intro text-white/55">Mon objectif, ce n’est pas seulement de faire un site qui “rend bien”. C’est de créer quelque chose de clair, utile, cohérent et capable d’aider un projet à avancer.</p>
          <div className="value-objective"><p>Ce que je cherche</p><p>Une alternance où je peux apprendre, produire et progresser.</p></div>
        </Reveal>
        <div className="value-list">
          {values.map((value, index) => <Reveal as="article" delay={index * 0.05} key={value.title}>
            <span className="value-number">{value.label}</span>
            <div><h3>{value.title}</h3><p className="body-copy text-white/55">{value.text}</p></div>
          </Reveal>)}
        </div>
      </div>
    </section>
  );
}
