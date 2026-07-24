import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { GithubIcon } from "./icons";
import { projects } from "../data/content";

export default function Projects() {
  return (
    <section id="projects" className="relative py-28 md:py-36 border-t border-border">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-accent">Projects</span>
          <h2 className="font-display font-semibold text-3xl md:text-4xl text-ink mt-4">
            Three problems, three platforms.
          </h2>
        </motion.div>

        <div className="space-y-6">
          {projects.map((p, i) => (
            <motion.article
              key={p.id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.08 }}
              className="group rounded-2xl border border-border bg-surface p-7 md:p-9 hover:border-accent-2/60 transition-colors"
            >
              <div className="grid md:grid-cols-[1fr_auto] gap-6 md:gap-10">
                <div>
                  <div className="flex items-center gap-3 flex-wrap">
                    <h3 className="font-display font-semibold text-2xl text-ink">{p.name}</h3>
                    <span className="font-mono text-[11px] uppercase tracking-widest text-signal">{p.tag}</span>
                  </div>

                  <p className="text-muted mt-4 leading-relaxed max-w-2xl">{p.summary}</p>

                  <ul className="mt-5 space-y-2">
                    {p.points.map((pt) => (
                      <li key={pt} className="text-sm text-ink/90 flex items-start gap-2">
                        <span className="text-accent-2 mt-1.5 text-[8px]">●</span>
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2 mt-6">
                    {p.stack.map((s) => (
                      <span key={s} className="font-mono text-xs px-3 py-1 rounded-full bg-surface-2 text-muted border border-border">
                        {s}
                      </span>
                    ))}
                  </div>

                  {(p.links.live || p.links.github) && (
                    <div className="flex items-center gap-5 mt-6">
                      {p.links.live && (
                        <a href={p.links.live} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-sm text-accent hover:text-ink transition focus-ring">
                          Live site <ArrowUpRight size={14} />
                        </a>
                      )}
                      {p.links.github && (
                        <a href={p.links.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-sm text-muted hover:text-ink transition focus-ring">
                          <GithubIcon width={14} height={14} /> Source
                        </a>
                      )}
                    </div>
                  )}
                </div>

                <div className="flex md:flex-col justify-between md:justify-start md:items-end gap-2 md:min-w-[180px] md:text-right pt-1">
                  <p className="font-display font-semibold text-xl md:text-2xl text-accent">{p.metric}</p>
                  <p className="font-mono text-xs text-muted">{p.metricLabel}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
