"use client";
import Reveal from "@/components/Reveal";

import {
  Plus,
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
];

export default function Internships() {
  return (
    <section id="stages" className="portfolio-section internships-section">
      <div className="content-container">
        <Reveal className="section-heading">
          <h2 className="section-title text-white">Du concret, pas seulement de la théorie.</h2>
          <p className="section-intro text-white/55">Ces stages m’ont permis de toucher à la maintenance, au réseau, au matériel, aux systèmes et à l’environnement professionnel. C’est ce qui m’a donné une base technique solide avant d’aller plus loin dans le web et la cybersécurité.</p>
        </Reveal>
        <div className="internship-list">
          {internships.map(stage => (
            <Reveal as="details" mode="fade" key={`${stage.title}-${stage.place}`} className="internship-entry">
              <summary>
                <span className="internship-duration">{stage.duration}</span>
                <span className="internship-name"><strong>{stage.title}</strong><span>{stage.place}</span></span>
                <Plus size={20} aria-hidden="true" />
              </summary>
              <ul>{stage.missions.map(mission => <li key={mission}>{mission}</li>)}</ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
