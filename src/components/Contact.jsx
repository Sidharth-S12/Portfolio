import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";
import { profile } from "../data/content";

export default function Contact() {
  return (
    <section id="contact" className="relative py-28 md:py-40 border-t border-border overflow-hidden">
      <div className="absolute inset-0 bg-grad-radial opacity-70" />
      <div className="relative max-w-6xl mx-auto px-6 md:px-10 text-center">
        <motion.span
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-mono text-xs uppercase tracking-[0.3em] text-accent"
        >
          Contact
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display font-semibold text-4xl md:text-6xl text-ink mt-5 max-w-2xl mx-auto leading-tight"
        >
          Building something? Let's talk.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-muted mt-6 max-w-md mx-auto"
        >
          Open to internships, collaborations, and interesting problems in ML and full-stack development.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-grad-accent text-ink font-medium hover:brightness-110 transition focus-ring"
          >
            <Mail size={16} /> {profile.email}
          </a>
        </motion.div>

        <div className="flex items-center justify-center gap-6 mt-10">
          <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="text-muted hover:text-accent transition focus-ring">
            <GithubIcon width={20} height={20} />
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="text-muted hover:text-accent transition focus-ring">
            <LinkedinIcon width={20} height={20} />
          </a>
        </div>
      </div>
    </section>
  );
}
