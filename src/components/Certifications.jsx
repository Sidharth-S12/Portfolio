import { motion } from "framer-motion";
import { Award, Trophy } from "lucide-react";
import { certifications, activities } from "../data/content";

export default function Certifications() {
  return (
    <section id="certifications" className="relative py-28 md:py-36 border-t border-border bg-surface/30">
      <div className="max-w-6xl mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-2 mb-6">
            <Award size={16} className="text-accent" />
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-accent">Certifications</span>
          </div>
          <ul className="space-y-4">
            {certifications.map((c) => (
              <li key={c} className="text-ink text-sm border-b border-border pb-4">{c}</li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="flex items-center gap-2 mb-6">
            <Trophy size={16} className="text-accent" />
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-accent">Beyond code</span>
          </div>
          <ul className="space-y-4">
            {activities.map((a) => (
              <li key={a} className="text-ink text-sm border-b border-border pb-4">{a}</li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
