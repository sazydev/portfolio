"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Plus, Minus } from "lucide-react";
import { useState } from "react";
import Reveal from "@/components/Reveal";

const disciplines = [
  {
    title: "Base technique",
    text: "Monter un PC, comprendre un système, faire fonctionner un réseau. C’est sur le terrain que j’ai construit mes premiers réflexes.",
    tags: ["Hardware", "Systèmes", "Réseaux"],
  },
  {
    title: "Création web",
    text: "Du premier croquis au site en ligne, j’aime construire des interfaces claires, soigner les détails et voir un projet prendre forme.",
    tags: ["Interfaces", "Développement", "Responsive"],
  },
  {
    title: "Culture cyber",
    text: "OSINT, Kali Linux, analyse réseau : j’explore la sécurité en environnement personnel pour mieux comprendre ce que je construis.",
    tags: ["OSINT", "Kali Linux", "Analyse réseau"],
  },
];

export default function About() {
  const [active, setActive] = useState(null);

  return (
    <section id="apropos" className="portfolio-section relative overflow-hidden">
      <div className="content-container grid items-center gap-8 lg:gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal
          className="max-w-2xl"
        >
          <h2 className="section-title text-white">
            Un profil web avec une vraie base technique.
          </h2>

          <div className="mt-5 space-y-4 section-intro text-white/55">
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
            className="group mt-7 action-button inline-flex items-center rounded-xl bg-blue-500 font-semibold text-white shadow-[0_20px_60px_rgba(59,130,246,0.3)] transition hover:bg-blue-400"
          >
            Voir mon LinkedIn
            <ArrowUpRight
              size={17}
              className="action-arrow"
            />
          </a>
        </Reveal>

        <div className="about-explorer">
          <div className="about-disciplines">
            {disciplines.map((discipline, index) => {
              const isActive = active === index;
              return (
                <Reveal key={discipline.title} mode="fade" delay={index * 0.08} className="about-discipline" data-active={isActive}>
                  <h3>
                    <button
                      type="button"
                      id={`discipline-trigger-${index}`}
                      aria-expanded={isActive}
                      aria-controls={`discipline-panel-${index}`}
                      onClick={() => setActive(isActive ? null : index)}
                      className="about-discipline-trigger text-white"
                    >
                      <span>{discipline.title}</span>
                      <span className="about-discipline-toggle" aria-hidden="true">
                        {isActive ? <Minus size={18} /> : <Plus size={18} />}
                      </span>
                    </button>
                  </h3>
                  <motion.div
                    id={`discipline-panel-${index}`}
                    role="region"
                    aria-labelledby={`discipline-trigger-${index}`}
                    aria-hidden={!isActive}
                    inert={!isActive}
                    initial={false}
                    animate={{ opacity: isActive ? 1 : 0, height: isActive ? "auto" : 0 }}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="about-discipline-content">
                      <p className="about-discipline-description body-copy text-white/55">{discipline.text}</p>
                      <ul className="about-discipline-tags type-small text-white/55" aria-label="Domaines explorés">
                        {discipline.tags.map((tag) => <li key={tag}>{tag}</li>)}
                      </ul>
                    </div>
                  </motion.div>
                </Reveal>
              );
            })}
          </div>

          <Reveal className="about-next-step" delay={0.08}>
            <p className="about-next-label type-small font-medium text-blue-300">La suite ?</p>
            <h3 className="card-title text-white">Une alternance pour aller plus loin.</h3>
            <p className="body-copy text-white/55">
              Je sais que je n’ai pas encore tout appris. Mais j’ai déjà assez
              créé pour savoir ce que je peux apporter. Je cherche une entreprise
              qui me laissera le prouver.
            </p>
            <a href="#contact" className="about-contact-link font-semibold text-white">
              Faisons connaissance <ArrowUpRight size={18} aria-hidden="true" />
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
