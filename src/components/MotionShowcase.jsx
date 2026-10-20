import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/Reveal";

export default function MotionShowcase() {
  return (
    <section
      id="motion-design"
      aria-labelledby="motion-design-title"
      className="portfolio-section relative overflow-hidden"
    >
      <div className="content-container grid items-center gap-10 lg:grid-cols-[1fr_360px] lg:gap-20">
        <Reveal className="max-w-xl">
          <h2 id="motion-design-title" className="section-title text-white">
            Et si je donnais vie à votre prochaine publicité ?
          </h2>

          <p className="section-intro mt-5 text-white/55">
            J’ai choisi au hasard une entreprise à Angers : Multi Services Urban.
            Pour montrer ce que je pouvais apporter à une entreprise en matière
            de publicité grâce au motion design, je me suis amusé à imaginer et
            réaliser cette vidéo.
          </p>

          <a
            href="#contact"
            className="action-button group mt-7 inline-flex items-center rounded-xl bg-blue-500 font-semibold text-white shadow-[0_20px_60px_rgba(59,130,246,0.3)] transition hover:bg-blue-400"
          >
            Parlons de votre projet
            <ArrowUpRight
              aria-hidden="true"
              size={17}
              className="action-arrow"
            />
          </a>
        </Reveal>

        <Reveal as="figure" mode="fade" delay={0.12} className="mx-auto w-full max-w-[340px]">
          <div className="motion-video-frame">
          <video
            controls
            playsInline
            preload="metadata"
            width="720"
            height="1280"
            aria-label="Multi Services Urban : concept publicitaire personnel en motion design"
            aria-describedby="motion-design-caption"
            className="block aspect-[9/16] h-auto w-full rounded-[1.25rem] border border-white/10 bg-black object-contain shadow-[0_30px_100px_rgba(0,0,0,0.45)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-300"
          >
            <source src="/videos/motion-design.mp4" type="video/mp4" />
            Votre navigateur ne permet pas de lire cette vidéo.{" "}
            <a href="/videos/motion-design.mp4">Ouvrir le film au format MP4</a>.
          </video>
          </div>

          <figcaption
            id="motion-design-caption"
            className="body-copy mt-4 text-center text-white/55"
          >
            <span className="block font-semibold text-white/80">
              Multi Services Urban
            </span>
            Projet personnel · Concept publicitaire non commandé · Motion design
          </figcaption>
        </Reveal>
      </div>
    </section>
  );
}
