import { motion } from "framer-motion";
import { ArrowDown, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";
import NodeNetwork from "./NodeNetwork";
import { profile } from "../data/content";

export default function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex items-center overflow-hidden bg-grad-radial">
      <div className="absolute inset-0 opacity-60">
        <NodeNetwork className="w-full h-full" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-void/40 to-void" />

      <div className="relative max-w-6xl mx-auto px-6 md:px-10 pt-24 pb-16 w-full">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-mono text-xs uppercase tracking-[0.3em] text-signal mb-6"
        >
          <span className="inline-block w-2 h-2 rounded-full bg-signal mr-2 align-middle animate-pulse" />
          Open to opportunities
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display font-semibold text-5xl sm:text-6xl md:text-7xl leading-[1.05] text-ink max-w-3xl"
        >
          {profile.name}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-6 text-lg md:text-xl text-muted max-w-xl leading-relaxed"
        >
          {profile.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-grad-accent text-ink font-medium text-sm hover:brightness-110 transition focus-ring"
          >
            View projects
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border text-ink text-sm hover:border-accent transition focus-ring"
          >
            Get in touch
          </a>

          <div className="flex items-center gap-3 ml-2">
            <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="p-2 text-muted hover:text-accent transition focus-ring">
              <GithubIcon width={18} height={18} />
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="p-2 text-muted hover:text-accent transition focus-ring">
              <LinkedinIcon width={18} height={18} />
            </a>
            <a href={`mailto:${profile.email}`} aria-label="Email" className="p-2 text-muted hover:text-accent transition focus-ring">
              <Mail size={18} />
            </a>
          </div>
        </motion.div>
      </div>

      <a
        href="#about"
        aria-label="Scroll to about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted hover:text-accent transition focus-ring animate-bounce"
      >
        <ArrowDown size={20} />
      </a>
    </section>
  );
}
