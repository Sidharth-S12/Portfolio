import { motion } from "framer-motion";
import { profile, education } from "../data/content";

export default function About() {
  return (
    <section id="about" className="relative py-28 md:py-36 border-t border-border">
      <div className="max-w-6xl mx-auto px-6 md:px-10 grid md:grid-cols-[0.9fr_1.1fr] gap-12 md:gap-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-accent">About</span>
          <h2 className="font-display font-semibold text-3xl md:text-4xl text-ink mt-4 leading-tight">
            Data science on paper,<br /> full-stack in practice.
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="space-y-8"
        >
          <p className="text-muted text-lg leading-relaxed">{profile.bio}</p>

          <div className="rounded-2xl border border-border bg-surface p-6">
            <p className="font-mono text-xs uppercase tracking-widest text-muted mb-3">Education</p>
            <p className="text-ink font-medium">{education.degree}</p>
            <p className="text-muted text-sm mt-1">{education.school}</p>
            <div className="flex items-center gap-4 mt-4">
              <span className="font-mono text-sm text-signal">CGPA {education.cgpa}</span>
            </div>
            <div className="flex flex-wrap gap-2 mt-4">
              {education.coursework.map((c) => (
                <span key={c} className="font-mono text-xs px-3 py-1 rounded-full bg-surface-2 text-muted border border-border">
                  {c}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
