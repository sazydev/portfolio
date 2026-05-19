"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  Code2,
  ExternalLink,
  Target,
  Trophy,
  X,
} from "lucide-react";
import { useMemo, useRef, useState } from "react";
import projects from "@/data/projects";

const filters = ["Tous", "Professionnel", "Scolaire", "Design"];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("Tous");
  const [selected, setSelected] = useState(null);
  const [slideDirection, setSlideDirection] = useState(0);
  const [isSwitching, setIsSwitching] = useState(false);
  const sliderRef = useRef(null);

  const filteredProjects = useMemo(() => {
    if (activeFilter === "Tous") return projects;
    return projects.filter((project) => project.category === activeFilter);
  }, [activeFilter]);

  const scroll = (direction) => {
    const slider = sliderRef.current;
    if (!slider || isSwitching) return;

    const dir = direction === "next" ? 1 : -1;
    setSlideDirection(dir);
    setIsSwitching(true);

    setTimeout(() => {
      slider.scrollBy({
        left: dir * 430,
        behavior: "smooth",
      });
    }, 160);

    setTimeout(() => {
      setIsSwitching(false);
      setSlideDirection(0);
    }, 620);
  };

  const handleFilter = (filter) => {
    setActiveFilter(filter);
    setTimeout(() => {
      sliderRef.current?.scrollTo({ left: 0, behavior: "smooth" });
    }, 100);
  };

  return (
    <section id="projets" className="relative overflow-hidden px-6 py-28">
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
            Projets — réalisations concrètes
          </div>

          <h2 className="text-5xl font-black leading-[0.95] tracking-[-0.07em] text-white-500 md:text-7xl">
            Mes Projets
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-white/55 md:text-lg">
            Une sélection de projets réalisés en cours, en autonomie ou pour de
            vraies structures. Clique sur un projet pour voir les détails.
          </p>
        </motion.div>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => handleFilter(filter)}
              className={`rounded-full border px-5 py-2.5 text-sm font-medium transition ${
                activeFilter === filter
                  ? "border-blue-400 bg-blue-500 text-white shadow-[0_15px_50px_rgba(59,130,246,0.3)]"
                  : "border-white/10 bg-white/[0.03] text-white/55 hover:bg-white/[0.07] hover:text-white"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="relative mt-14">
          <button
            onClick={() => scroll("prev")}
            disabled={isSwitching}
            className="absolute left-0 top-1/2 z-20 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-[#080a10]/90 text-white shadow-[0_20px_70px_rgba(0,0,0,0.45)] backdrop-blur-xl transition hover:bg-blue-500 disabled:opacity-40 md:flex"
          >
            <ChevronLeft size={22} />
          </button>

          <motion.div
            ref={sliderRef}
            animate={{
              x: isSwitching ? slideDirection * -26 : 0,
              opacity: isSwitching ? 0.9 : 1,
              scale: isSwitching ? 0.985 : 1,
            }}
            transition={{
              duration: 0.42,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="no-scrollbar flex snap-x gap-6 overflow-x-auto scroll-smooth px-1 py-6 md:px-16"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <ProjectCard
                  key={project.title}
                  project={project}
                  index={index}
                  onOpen={() => setSelected(project)}
                  isSwitching={isSwitching}
                  slideDirection={slideDirection}
                />
              ))}
            </AnimatePresence>
          </motion.div>

          <button
            onClick={() => scroll("next")}
            disabled={isSwitching}
            className="absolute right-0 top-1/2 z-20 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-[#080a10]/90 text-white shadow-[0_20px_70px_rgba(0,0,0,0.45)] backdrop-blur-xl transition hover:bg-blue-500 disabled:opacity-40 md:flex"
          >
            <ChevronRight size={22} />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {selected && (
          <ProjectModal project={selected} onClose={() => setSelected(null)} />
        )}
      </AnimatePresence>
    </section>
  );
}

function ProjectCard({ project, index, onOpen, isSwitching, slideDirection }) {
  return (
    <motion.article
      layout
      initial={{
        opacity: 0,
        y: 30,
        scale: 0.96,
      }}
      animate={{
        opacity: isSwitching ? 0.84 : 1,
        y: 0,
        x: isSwitching ? slideDirection * -22 : 0,
        scale: isSwitching ? 0.985 : 1,
      }}
      exit={{
        opacity: 0,
        y: -20,
        scale: 0.96,
      }}
      transition={{
        layout: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
        duration: 0.55,
        delay: isSwitching ? index * 0.02 : index * 0.04,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group relative h-[540px] min-w-[320px] snap-center overflow-hidden rounded-[2rem] border border-white/10 bg-[#080a10]/85 shadow-[0_30px_100px_rgba(0,0,0,0.5)] backdrop-blur-xl transition duration-500 hover:-translate-y-3 hover:border-blue-400/40 hover:shadow-[0_35px_120px_rgba(59,130,246,0.25)] sm:min-w-[380px]"
    >
      <div className="relative h-64 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#080a10] via-[#080a10]/20 to-transparent" />

        {project.note && (
          <div className="absolute right-4 top-4 rounded-full border border-white/10 bg-black/50 px-3 py-1 text-xs text-white/70 backdrop-blur-md">
            Note : {project.note}
          </div>
        )}
      </div>

      <div className="flex h-[276px] flex-col p-6">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-400">
          {project.type}
        </p>

        <h3 className="mt-2 text-2xl font-bold tracking-tight text-white">
          {project.title}
        </h3>

        <p className="mt-3 min-h-[72px] line-clamp-3 text-sm leading-6 text-white/50">
          {project.description}
        </p>

        <div className="mt-5 flex min-h-[72px] flex-wrap content-start gap-2">
          {project.tags.slice(0, 4).map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-white/10 bg-white/[0.035] px-3 py-1.5 text-xs text-white/55"
            >
              {tag}
            </span>
          ))}
        </div>

        <button
          onClick={onOpen}
          className="mt-auto inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-blue-500 px-5 text-sm font-bold text-white shadow-[0_20px_60px_rgba(59,130,246,0.3)] transition hover:-translate-y-1 hover:bg-blue-400"
        >
          Voir détails
          <ArrowUpRight size={16} />
        </button>
      </div>
    </motion.article>
  );
}

function ProjectModal({ project, onClose }) {
  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 px-4 py-8 backdrop-blur-xl"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 40, scale: 0.96 }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        className="relative max-h-[88vh] w-full max-w-4xl overflow-hidden rounded-[2rem] border border-white/10 bg-[#080a10] shadow-[0_40px_140px_rgba(0,0,0,0.75)]"
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-20 flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-black/50 text-white backdrop-blur-xl transition hover:bg-white hover:text-black"
        >
          <X size={20} />
        </button>

        <div className="max-h-[88vh] overflow-y-auto">
          <div className="relative h-80 overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#080a10] via-[#080a10]/20 to-transparent" />
          </div>

          <div className="p-7 md:p-10">
            <p className="w-fit rounded-full border border-blue-400/20 bg-blue-500/10 px-3 py-1 text-sm text-blue-300">
              {project.type}
            </p>

            <h3 className="mt-5 text-4xl font-black tracking-[-0.05em] text-white">
              {project.title}
            </h3>

            <div className="mt-8 space-y-9">
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
                  <h4 className="text-2xl font-bold tracking-tight">
                    Technologies utilisées
                  </h4>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-lg border border-white/10 bg-white/[0.04] px-3 py-2 text-sm text-white/60"
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
                  className="inline-flex h-12 items-center gap-2 rounded-xl bg-blue-500 px-6 text-sm font-bold text-white shadow-[0_20px_60px_rgba(59,130,246,0.3)] transition hover:-translate-y-1 hover:bg-blue-400"
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
        <h4 className="text-2xl font-bold tracking-tight">{title}</h4>
      </div>

      <p className="mt-4 leading-8 text-white/55">{text}</p>
    </div>
  );
}