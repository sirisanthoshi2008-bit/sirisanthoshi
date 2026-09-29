import { Briefcase, Github, ExternalLink } from 'lucide-react';
import { experience } from '@/data/portfolio';

export default function Experience() {
  return (
    <section id="experience" className="px-6 lg:px-16 py-20 lg:py-28">
      <div className="max-w-4xl mx-auto section-fade">
        <div className="flex items-center gap-3 mb-2">
          <span className="w-8 h-px bg-accent" />
          <p className="text-accent text-sm font-medium tracking-widest uppercase">
            Experience
          </p>
        </div>
        <h2 className="font-display text-3xl lg:text-4xl font-bold text-white mb-8">
          Work Experience
        </h2>

        <div className="flex flex-col gap-6">
          {experience.map((item, idx) => (
            <div key={idx} className="card p-6 lg:p-8 hover:border-accent/40 transition-colors">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                  <Briefcase size={22} className="text-accent" />
                </div>
                <div className="flex-1">
                  <h3 className="font-display text-lg lg:text-xl font-semibold text-white mb-1">
                    {item.title}
                  </h3>
                  <p className="text-[var(--muted)] text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>

              {item.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-4">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-medium text-[var(--muted)] bg-[var(--bg-2)] border border-[var(--border)] px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              {(item.github || item.demo) && (
                <div className="flex items-center gap-3 mt-5">
                  {item.github && (
                    <a
                      href={item.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-[var(--muted)] hover:text-accent transition-colors"
                    >
                      <Github size={16} /> Code
                    </a>
                  )}
                  {item.demo && (
                    <a
                      href={item.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-[var(--muted)] hover:text-accent transition-colors"
                    >
                      <ExternalLink size={16} /> Live Demo
                    </a>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
