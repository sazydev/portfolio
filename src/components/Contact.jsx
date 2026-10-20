"use client";
import Reveal from "@/components/Reveal";

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
    <section id="contact" className="portfolio-section contact-section">
      <div className="content-container">
        <Reveal className="contact-heading">
          <h2 className="section-title text-white">On échange sur la suite ?</h2>
          <ArrowUpRight className="contact-big-arrow" aria-hidden="true" />
        </Reveal>
        <div className="contact-bottom">
          <Reveal delay={0.08}><p className="section-intro text-white/55">Que ce soit pour une alternance, un stage, un projet ou simplement pour discuter, tu peux me contacter directement.</p>
          <a href="mailto:courtinmatteo49@gmail.com" className="action-button contact-cta">M’envoyer un mail <ArrowUpRight size={18} aria-hidden="true" /></a></Reveal>
          <div className="contact-links">{contacts.map((contact, index) => <Reveal as="a" mode="fade" delay={index * 0.08} key={contact.label} href={contact.href} target={contact.href.startsWith("mailto:") ? undefined : "_blank"} rel={contact.href.startsWith("mailto:") ? undefined : "noreferrer"}>
            <span><strong>{contact.label}</strong><span>{contact.value}</span></span><ArrowUpRight size={22} aria-hidden="true" />
          </Reveal>)}</div>
        </div>
      </div>
    </section>
  );
}
