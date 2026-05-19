"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Code2, ExternalLink, Mail } from "lucide-react";

const contacts = [
  {
    icon: Mail,
    label: "Email",
    value: "courtinmatteo49@gmail.com",
    href: "mailto:courtinmatteo49@gmail.com",
  },
  {
    icon: ExternalLink,
    label: "LinkedIn",
    value: "linkedin.com/in/courtinmatteo",
    href: "https://www.linkedin.com/in/courtinmatteo/",
  },
  {
    icon: Code2,
    label: "GitHub",
    value: "github.com/sazydev",
    href: "https://github.com/sazydev",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden px-6 py-32">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 34, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-[#080a10]/80 p-8 shadow-[0_40px_140px_rgba(0,0,0,0.45)] backdrop-blur-xl md:p-14"
        >
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-300/50 to-transparent" />
          <div className="absolute -right-32 -top-32 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />

          <div className="grid items-end gap-12 lg:grid-cols-[1fr_0.9fr]">
            <div>
              <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-white/55">
                <span className="h-2 w-2 rounded-full bg-blue-400 shadow-[0_0_20px_rgba(96,165,250,0.9)]" />
                Contact — échangeons
              </div>

              <h2 className="max-w-3xl text-5xl font-black leading-[0.95] tracking-[-0.07em] text-white md:text-7xl">
                On échange sur la suite ?
              </h2>

              <p className="mt-7 max-w-2xl text-base leading-8 text-white/55 md:text-lg">
                Que ce soit pour une alternance, un stage, un projet ou
                simplement pour discuter, tu peux me contacter directement.
              </p>

              <a
                href="mailto:courtinmatteo49@gmail.com"
                className="group mt-10 inline-flex h-14 items-center gap-3 rounded-xl bg-blue-500 px-7 text-sm font-bold text-white shadow-[0_20px_60px_rgba(59,130,246,0.3)] transition hover:-translate-y-1 hover:bg-blue-400"
              >
                M’envoyer un mail
                <ArrowUpRight
                  size={17}
                  className="transition group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </a>
            </div>

            <div className="grid gap-4">
              {contacts.map((contact, index) => {
                const Icon = contact.icon;

                return (
                  <motion.a
                    key={contact.label}
                    href={contact.href}
                    target={
                      contact.href.startsWith("mailto:") ? undefined : "_blank"
                    }
                    rel={
                      contact.href.startsWith("mailto:")
                        ? undefined
                        : "noreferrer"
                    }
                    initial={{ opacity: 0, x: 24 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{
                      duration: 0.55,
                      delay: index * 0.08,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    whileHover={{
                      y: -5,
                      borderColor: "rgba(96,165,250,0.25)",
                    }}
                    className="group relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/[0.035] p-5"
                  >
                    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-300/30 to-transparent opacity-0 transition group-hover:opacity-100" />

                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-300">
                        <Icon size={21} />
                      </div>

                      <div className="min-w-0 flex-1">
                        <p className="font-bold tracking-tight text-white">
                          {contact.label}
                        </p>
                        <p className="mt-1 break-words text-sm text-white/45">
                          {contact.value}
                        </p>
                      </div>

                      <ArrowUpRight
                        size={18}
                        className="text-white/25 transition group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-blue-300"
                      />
                    </div>
                  </motion.a>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}