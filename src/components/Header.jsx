"use client";

import { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

const navItems = [
  { label: "À propos", href: "#apropos" },
  { label: "Compétences", href: "#competences" },
  { label: "Projets", href: "#projets" },
  { label: "Parcours", href: "#parcours" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed left-0 top-0 z-50 w-full px-4 pt-4">
      <div
        className={`mx-auto flex h-16 max-w-7xl items-center justify-between rounded-2xl border px-5 transition-all duration-300 ${
          scrolled
            ? "border-white/10 bg-[#070a12]/85 shadow-[0_20px_80px_rgba(0,0,0,0.45)] backdrop-blur-2xl"
            : "border-white/8 bg-white/[0.035] backdrop-blur-xl"
        }`}
      >
        <a href="#" className="group flex items-center">
          <div className="relative flex h-11 w-16 items-center justify-center">
            <div className="absolute inset-0 rounded-2xl bg-blue-500/10 opacity-0 blur-xl transition duration-500 group-hover:opacity-100" />

            <svg
              viewBox="0 0 120 70"
              className="relative h-10 w-[68px] overflow-visible"
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
            </svg>
          </div>
        </a>

        <nav className="hidden items-center gap-1 rounded-full border border-white/10 bg-black/20 p-1 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 text-sm text-white/55 transition hover:bg-white/[0.06] hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href="/assets/cv-1.pdf"
            className="group inline-flex h-11 items-center gap-2 rounded-full border border-white/10 bg-white px-5 text-sm font-semibold text-black transition hover:scale-[1.02] hover:bg-blue-100"
          >
            Télécharger CV
            <ArrowUpRight
              size={16}
              className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-white md:hidden"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="mx-auto mt-3 max-w-7xl rounded-2xl border border-white/10 bg-[#070a12]/95 p-3 shadow-[0_20px_80px_rgba(0,0,0,0.5)] backdrop-blur-2xl md:hidden">
          <div className="flex flex-col gap-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-4 py-3 text-sm text-white/70 transition hover:bg-white/[0.06] hover:text-white"
              >
                {item.label}
              </a>
            ))}

            <a
              href="/assets/cv-1.pdf"
              className="mt-2 flex h-12 items-center justify-center rounded-xl bg-white text-sm font-semibold text-black"
            >
              Télécharger CV
            </a>
          </div>
        </div>
      )}
    </header>
  );
}