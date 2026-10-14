import { ArrowUpRight } from "lucide-react";

export default function MotionShowcase() {
  return (
    <section
      id="motion-design"
      aria-labelledby="motion-design-title"
      className="portfolio-section relative overflow-hidden"
    >
      <div className="content-container grid items-center gap-10 lg:grid-cols-[1fr_360px] lg:gap-20">
        <div className="max-w-xl">
          <div className="section-label border border-white/10 bg-white/[0.04] text-white/55">
            <span
              aria-hidden="true"
              className="h-2 w-2 rounded-full bg-blue-400 shadow-[0_0_20px_rgba(96,165,250,0.9)]"
            />
            Du concret
          </div>

          <h2 id="motion-design-title" className="section-title text-white">
            Du contenu qui donne envie de vous choisir.
          </h2>

          <p className="section-intro mt-5 text-white/55">
            Vos services méritent plus qu’une simple présentation. Je crée des
            vidéos qui mettent en valeur votre savoir-faire et donnent envie
            d’en découvrir davantage.
          </p>

          <a
            href="#contact"
            className="action-button group mt-7 inline-flex items-center rounded-xl bg-blue-500 font-bold text-white shadow-[0_20px_60px_rgba(59,130,246,0.3)] transition hover:-translate-y-1 hover:bg-blue-400 motion-reduce:transform-none motion-reduce:transition-none"
          >
            Parlons de votre projet
            <ArrowUpRight
              aria-hidden="true"
              size={17}
              className="transition group-hover:translate-x-1 group-hover:-translate-y-1 motion-reduce:transform-none motion-reduce:transition-none"
            />
          </a>
        </div>

        <figure className="mx-auto w-full max-w-[340px]">
          <video
            controls
            playsInline
            preload="none"
            width="720"
            height="1280"
            poster="/videos/epure-poster.webp"
            aria-label="Épure Ouverture : concept publicitaire indépendant en motion design, 30 secondes"
            aria-describedby="epure-caption"
            className="block aspect-[9/16] h-auto w-full rounded-[1.25rem] border border-white/10 bg-black object-contain shadow-[0_30px_100px_rgba(0,0,0,0.45)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-300"
          >
            <source src="/videos/epure-motion.mp4" type="video/mp4" />
            Votre navigateur ne permet pas de lire cette vidéo.{" "}
            <a href="/videos/epure-motion.mp4">Ouvrir le film au format MP4</a>.
          </video>

          <figcaption
            id="epure-caption"
            className="body-copy mt-4 text-center text-white/55"
          >
            <span className="block font-semibold text-white/80">
              Épure Ouverture
            </span>
            Concept publicitaire indépendant · Motion design · 30 secondes
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
