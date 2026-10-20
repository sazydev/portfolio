"use client";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Code2, ExternalLink, Target, Trophy, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useLenis } from "lenis/react";
import Image from "next/image";
import projects from "@/data/projects";
import Reveal, { revealEase, revealViewport } from "@/components/Reveal";
const filters = ["Tous", "Professionnel", "Scolaire", "Design"];

export default function Projects() {
  const [activeFilter,setActiveFilter] = useState("Tous");
  const [selected,setSelected] = useState(null);
  const filtered = activeFilter === "Tous" ? projects : projects.filter(project => project.category === activeFilter);
  return <section id="projets" className="portfolio-section projects-section">
    <div className="content-container">
      <Reveal className="section-heading"><h2 className="section-title text-white">Mes Projets</h2><p className="section-intro text-white/55">Une sélection de projets réalisés en cours, en autonomie ou pour de vraies structures. Clique sur une image pour visiter le site, ou sur « Voir détails » pour découvrir le projet.</p></Reveal>
      <Reveal mode="fade" className="project-filters" aria-label="Filtrer les projets">{filters.map(filter => <button key={filter} type="button" aria-pressed={activeFilter === filter} onClick={() => setActiveFilter(filter)}>{filter}</button>)}</Reveal>
      <motion.div layout="position" className="project-gallery">
        <AnimatePresence mode="popLayout">{filtered.map(project => <motion.article layout="position" key={project.title} initial={{opacity:0}} whileInView={{opacity:1}} viewport={revealViewport} exit={{opacity:0}} transition={{duration:0.6,ease:revealEase}} className="gallery-project">
          <motion.a initial={{clipPath:"inset(0 0 18% 0 round 5px)"}} whileInView={{clipPath:"inset(0 0 0% 0 round 5px)",transitionEnd:{clipPath:"none"}}} viewport={revealViewport} transition={{duration:0.85,ease:revealEase}} className="project-cover" href={project.link} target="_blank" rel="noopener noreferrer" aria-label={`Ouvrir le projet ${project.title} (nouvel onglet)`}>
            <Image src={project.image} alt={project.title} width={1200} height={800} sizes="(max-width: 767px) 100vw, 50vw" />
            <span className="project-open"><ArrowUpRight size={28} aria-hidden="true" /></span>
            {project.note && <span className="project-note">Note : {project.note}</span>}
          </motion.a>
          <div className="project-meta"><p>{project.type}</p><h3>{project.title}</h3><p className="body-copy text-white/55">{project.description}</p><button type="button" className="project-details" onClick={() => setSelected(project)}>Voir détails <ArrowUpRight size={16} aria-hidden="true" /></button></div>
        </motion.article>)}</AnimatePresence>
      </motion.div>
    </div>
    <AnimatePresence>{selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}</AnimatePresence>
  </section>;
}

function ProjectModal({ project, onClose }) {
  const lenis = useLenis();
  const dialogRef = useRef(null);
  const closeRef = useRef(onClose);
  useEffect(() => { closeRef.current = onClose; }, [onClose]);
  useEffect(() => {
    const previousFocus = document.activeElement;
    const scrollPosition = { left: window.scrollX, top: window.scrollY };
    const body = document.body;
    const root = document.documentElement;
    const previousBodyOverflow = body.style.overflow;
    const previousHtmlOverflow = root.style.overflow;
    const previousScrollBehavior = root.style.scrollBehavior;
    const wasStopped = lenis?.isStopped;

    lenis?.stop();
    root.style.scrollBehavior = "auto";
    body.style.overflow = "hidden";
    root.style.overflow = "hidden";
    dialogRef.current?.querySelector("button")?.focus({ preventScroll: true });

    const keydown = event => {
      if (event.key === "Escape") closeRef.current();
      if (event.key !== "Tab") return;
      const nodes = dialogRef.current?.querySelectorAll('button, a[href], [tabindex="0"]');
      if (!nodes?.length) return;
      const first = nodes[0];
      const last = nodes[nodes.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", keydown);
    return () => {
      document.removeEventListener("keydown", keydown);
      body.style.overflow = previousBodyOverflow;
      root.style.overflow = previousHtmlOverflow;
      if (lenis) {
        lenis.resize();
        lenis.scrollTo(scrollPosition.top, { immediate: true, force: true });
        if (!wasStopped) lenis.start();
      } else {
        window.scrollTo({ ...scrollPosition, behavior: "instant" });
      }
      previousFocus?.focus({ preventScroll: true });
      root.style.scrollBehavior = previousScrollBehavior;
    };
  }, [lenis]);

  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 px-4 py-8 backdrop-blur-xl"
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
        className="relative max-h-[88vh] w-full max-w-3xl overflow-hidden rounded-[1.25rem] border border-white/10 bg-[#080a10] shadow-[0_40px_140px_rgba(0,0,0,0.75)]"
      >
        <button
          aria-label="Fermer les détails du projet"
          onClick={onClose}
          className="absolute right-4 top-4 z-20 flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-black/50 text-white backdrop-blur-xl transition hover:bg-white hover:text-black"
        >
          <X size={20} />
        </button>

        <div className="max-h-[88vh] overscroll-contain overflow-y-auto" data-lenis-prevent>
          <div className="relative h-48 overflow-hidden sm:h-56">
            <Image
              width={1200}
              height={800}
              sizes="(max-width: 767px) 100vw, 768px"
              src={project.image}
              alt={project.title}
              className="h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#080a10] via-[#080a10]/20 to-transparent" />
          </div>

          <div className="p-5 sm:p-7">
            <p className="w-fit rounded-full border border-blue-400/20 bg-blue-500/10 px-3 py-1 type-small text-blue-300">
              {project.type}
            </p>

            <h3 id="project-modal-title" className="mt-4 card-title text-white">
              {project.title}
            </h3>

            <div className="mt-6 space-y-6">
              <InfoBlock
                icon={Code2}
                title="Description"
                text={project.description}
              />

              <InfoBlock
                icon={Target}
                title="Objectifs"
                text={project.objectives}
              />

              <div>
                <div className="flex items-center gap-3 text-blue-400">
                  <Code2 size={22} />
                  <h4 className="subheading">
                    Technologies utilisées
                  </h4>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-lg border border-white/10 bg-white/[0.04] px-3 py-2 type-small text-white/60"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <InfoBlock icon={Trophy} title="Résultat" text={project.result} />

              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="action-button inline-flex items-center rounded-xl bg-blue-500 font-semibold text-white shadow-[0_20px_60px_rgba(59,130,246,0.3)] transition hover:bg-blue-400"
                >
                  Voir le projet en ligne
                  <ExternalLink size={17} />
                </a>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

function InfoBlock({ icon: Icon, title, text }) {
  return (
    <div>
      <div className="flex items-center gap-3 text-blue-400">
        <Icon size={22} />
        <h4 className="subheading">{title}</h4>
      </div>

      <p className="mt-4 body-copy text-white/55">{text}</p>
    </div>
  );
}
