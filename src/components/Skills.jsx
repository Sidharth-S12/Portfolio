import { motion } from "framer-motion";
import { skills } from "../data/content";

export default function Skills() {
  return (
    <section id="skills" className="relative py-28 md:py-36 border-t border-border bg-surface/30">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-accent">Skills</span>
          <h2 className="font-display font-semibold text-3xl md:text-4xl text-ink mt-4">
            The stack behind the projects.
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((group, i) => (
            <motion.div
              key={group.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="rounded-2xl border border-border bg-surface p-6 hover:border-accent-2/60 transition-colors"
            >
              <p className="font-mono text-xs uppercase tracking-widest text-signal mb-4">{group.label}</p>
              <ul className="space-y-2.5">
                {group.items.map((item) => (
                  <li key={item} className="text-ink text-sm flex items-start gap-2">
                    <span className="text-accent mt-1.5 text-[8px]">●</span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
