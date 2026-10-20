"use client";

import { AnimatePresence, motion, useMotionValue, useSpring } from "framer-motion";
import { ArrowDown, ArrowUpRight, Folder, Mail } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import projects from "@/data/projects";
import { revealEase } from "@/components/Reveal";

const words = ["Communication", "Réseaux sociaux", "Développeur Web", "Réseaux Informatique", "Design UI / UX", "Automatisation IA"];
const featured = projects.slice(0, 3);

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState(1);
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const rotateY = useSpring(pointerX, {stiffness:180,damping:28,mass:0.65,restDelta:0.01,restSpeed:0.05});
  const rotateX = useSpring(pointerY, {stiffness:180,damping:28,mass:0.65,restDelta:0.01,restSpeed:0.05});

  useEffect(() => {
    const interval = setInterval(() => setIndex(value => (value + 1) % words.length), 2800);
    return () => clearInterval(interval);
  }, []);

  function move(event) {
    if (event.pointerType !== "mouse") return;
    const rect = event.currentTarget.getBoundingClientRect();
    pointerX.set(((event.clientX - rect.left) / rect.width - 0.5) * 8);
    pointerY.set(-((event.clientY - rect.top) / rect.height - 0.5) * 6);
  }

  return (
    <section id="accueil" className="hero-section">
      <div className="content-container hero-layout">
        <div className="hero-copy">
          <motion.p initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.5,ease:revealEase}} className="hero-availability">Recherche alternance · Dès maintenant</motion.p>
          <h1 className="hero-title">
            <span className="hero-title-line"><motion.span initial={{y:"110%"}} animate={{y:0}} transition={{duration:0.95,delay:0.08,ease:revealEase}}>Mattéo</motion.span></span>
            <span className="hero-title-line"><motion.span initial={{y:"110%"}} animate={{y:0}} transition={{duration:0.95,delay:0.2,ease:revealEase}}>Courtin<span className="hero-title-dot">.</span></motion.span></span>
          </h1>
          <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.6,delay:0.4,ease:revealEase}} className="hero-word-window"><AnimatePresence mode="wait" initial={false}>
            <motion.p key={index} initial={{y:30,opacity:0}} animate={{y:0,opacity:1}} exit={{y:-25,opacity:0}} transition={{duration:0.35}}>{words[index]}</motion.p>
          </AnimatePresence></motion.div>
          <motion.p initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} transition={{duration:0.65,delay:0.5,ease:revealEase}} className="hero-description">Profil polyvalent entre communication, création digitale et développement web. De l’identité visuelle au contenu, jusqu’à la conception d’un site, j’aime toucher à tout et transformer une idée en projet concret.</motion.p>
          <motion.div initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} transition={{duration:0.65,delay:0.62,ease:revealEase}} className="hero-actions">
            <a href="#projets" className="action-button primary-action"><Folder size={18} aria-hidden="true" />Voir mes projets<ArrowUpRight size={17} aria-hidden="true" /></a>
            <a href="#contact" className="action-button secondary-action"><Mail size={18} aria-hidden="true" />Me contacter</a>
          </motion.div>
        </div>
        <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.9,delay:0.25,ease:revealEase}} className="hero-work" onPointerMove={move} onPointerLeave={() => {pointerX.set(0);pointerY.set(0);}}>
          <div className="work-orbit" aria-hidden="true" />
          <motion.div className="work-stack" style={{rotateX,rotateY,transformStyle:"preserve-3d"}}>
            {featured.map((project, i) => {
              const position = (i - selected + featured.length) % featured.length;
              return <motion.a key={project.title} href={project.link} target="_blank" rel="noopener noreferrer" aria-label={`Ouvrir le projet ${project.title} (nouvel onglet)`} className="work-plane" style={{zIndex:position === 0 ? 3 : 3-position}} initial={{opacity:0,x:0,y:0,rotate:0,scale:1}} animate={{opacity:1,x:position === 0 ? 0 : position === 1 ? 30 : -25,y:position === 0 ? 0 : position === 1 ? -60 : 62,rotate:position === 0 ? -3 : position === 1 ? 7 : -10,scale:position === 0 ? 1 : 0.93}} transition={{duration:0.8,ease:revealEase}}>
                <Image src={project.image} alt={`Aperçu du projet ${project.title}`} width={1000} height={650} priority={i===1} loading="eager" sizes="(max-width: 767px) 85vw, 45vw" className="work-image" />
                <span className="work-plane-label"><strong>{project.title}</strong><ArrowUpRight size={18} aria-hidden="true" /></span>
              </motion.a>;
            })}
          </motion.div>
          <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.5,delay:0.75,ease:revealEase}} className="work-selector" aria-label="Choisir un aperçu de projet">{featured.map((project,i) => <button key={project.title} type="button" aria-pressed={selected === i} onClick={() => setSelected(i)}>{project.title}</button>)}</motion.div>
        </motion.div>
      </div>
      <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.7,delay:0.8,ease:revealEase}} className="hero-bottom content-container"><a href="#apropos">À propos <ArrowDown size={16} aria-hidden="true" /></a><span>Communication · Web · Création digitale</span></motion.div>
    </section>
  );
}
