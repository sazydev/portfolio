"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";

const sections = [
  {id:"accueil", label:"Accueil"},
  {id:"apropos", label:"À propos"},
  {id:"competences", label:"Compétences"},
  {id:"motion-design", label:"Motion design"},
  {id:"projets", label:"Projets"},
  {id:"parcours", label:"Parcours"},
  {id:"apports", label:"Apports"},
  {id:"stages", label:"Stages"},
  {id:"contact", label:"Contact"},
];
const mainSections = ["apropos", "competences", "projets", "parcours", "contact"];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("accueil");
  const menuRef = useRef(null);
  const toggleRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 180, damping: 30 });

  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 1024px)");
    const closeOnDesktop = event => {
      if (event.matches) setOpen(false);
    };
    desktop.addEventListener("change", closeOnDesktop);
    return () => desktop.removeEventListener("change", closeOnDesktop);
  }, []);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      let current = "accueil";
      for (const section of sections) {
        const node = document.getElementById(section.id);
        if (node && node.getBoundingClientRect().top <= window.innerHeight * 0.32) current = section.id;
      }
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 12) current = "contact";
      setActive(current);
    };
    const onScroll = () => { cancelAnimationFrame(frame); frame = requestAnimationFrame(update); };
    update();
    window.addEventListener("scroll", onScroll, {passive:true});
    window.addEventListener("resize", onScroll);
    return () => {cancelAnimationFrame(frame); window.removeEventListener("scroll",onScroll); window.removeEventListener("resize",onScroll);};
  }, []);

  useEffect(() => {
    if (!open) return;
    const firstLink = menuRef.current?.querySelector("a");
    firstLink?.focus();
    const onKey = event => {
      if (event.key === "Escape") {setOpen(false); toggleRef.current?.focus();}
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown",onKey);
  }, [open]);

  return <>
    <a className="skip-link" href="#main-content">Aller au contenu</a>
    <header className="site-header">
      <div className="header-inner content-container">
        <a href="#accueil" className="header-logo" aria-label="Accueil — Mattéo Courtin">            <svg
              viewBox="0 0 120 70"
              className="relative h-8 w-14 overflow-visible"
              aria-label="Logo Mattéo Courtin"
            >
              <path
                d="M12 52V18H24L39 38L54 18H66V52H55V34L42 52H36L23 34V52H12Z"
                className="fill-white transition duration-300 group-hover:fill-blue-50"
              />

<path
  d="M82 52C70 52 62 45 62 35C62 25 70 18 82 18H107V28H84C78 28 74 31 74 35C74 39 78 42 84 42H107V52H82Z"
  className="fill-white transition duration-300 group-hover:fill-blue-50"
/>

              <rect
                x="110"
                y="42"
                width="10"
                height="10"
                rx="2"
                className="fill-blue-500 drop-shadow-[0_0_16px_rgba(59,130,246,0.8)] transition duration-300 group-hover:fill-blue-400"
              />
            </svg></a>
        <span className="header-section-name" aria-hidden="true">{sections.find(item => item.id === active)?.label}</span>
        <nav className="desktop-navigation" aria-label="Navigation principale">
          {sections.filter(item => mainSections.includes(item.id)).map(item => <a key={item.id} href={`#${item.id}`} aria-current={active === item.id ? "location" : undefined}>{item.label}</a>)}
        </nav>
        <a className="header-cv" href="/assets/CV_Matteo_Courtin.pdf" download="CV_Matteo_Courtin.pdf">Télécharger CV <ArrowUpRight size={16} aria-hidden="true" /></a>
        <button ref={toggleRef} className="menu-toggle" type="button" aria-label={open ? "Fermer le menu" : "Ouvrir le menu"} aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
      </div>
      <motion.div className="reading-progress" style={{scaleX:progress}} />
      {open && <nav ref={menuRef} id="mobile-navigation" className="mobile-navigation" aria-label="Navigation mobile" data-lenis-prevent>
        {sections.map(item => <a key={item.id} href={`#${item.id}`} onClick={() => setOpen(false)} aria-current={active === item.id ? "location" : undefined}>{item.label}<ArrowUpRight size={18} /></a>)}
        <a href="/assets/CV_Matteo_Courtin.pdf" download="CV_Matteo_Courtin.pdf">Télécharger CV</a>
      </nav>}
    </header>
    <nav className="section-rail" aria-label="Repères dans la page">
      {sections.map(item => <a key={item.id} href={`#${item.id}`} aria-current={active === item.id ? "location" : undefined}><span>{item.label}</span><i aria-hidden="true" /></a>)}
    </nav>
    <div className="current-section" aria-hidden="true"><span />{sections.find(item => item.id === active)?.label}</div>
  </>;
}
