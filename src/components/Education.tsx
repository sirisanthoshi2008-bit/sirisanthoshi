import { GraduationCap } from 'lucide-react';
import { education } from '@/data/portfolio';

export default function Education() {
  return (
    <section id="education" className="px-6 lg:px-16 py-20 lg:py-28">
      <div className="max-w-4xl mx-auto section-fade">
        <div className="flex items-center gap-3 mb-2">
          <span className="w-8 h-px bg-accent" />
          <p className="text-accent text-sm font-medium tracking-widest uppercase">
            Education
          </p>
        </div>
        <h2 className="font-display text-3xl lg:text-4xl font-bold text-white mb-8">
          Educational Qualification
        </h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-5 top-2 bottom-2 w-px bg-gradient-to-b from-accent via-accent/40 to-transparent" />

          <div className="flex flex-col gap-6">
            {education.map((item, idx) => (
              <div key={idx} className="relative pl-16">
                {/* Timeline dot */}
                <div className="absolute left-0 top-2 w-11 h-11 rounded-full bg-[var(--card)] border-2 border-accent flex items-center justify-center">
                  <GraduationCap size={18} className="text-accent" />
                </div>

                <div className="card p-6 hover:border-accent/40 transition-colors">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                    <h3 className="font-display text-lg font-semibold text-white">
                      {item.level}
                    </h3>
                    <span className="text-xs font-medium text-accent bg-accent/10 px-3 py-1 rounded-full">
                      {item.year}
                    </span>
                  </div>
                  <p className="text-[var(--muted)] text-sm mb-2">
                    {item.institution}
                  </p>
                  {item.detail && (
                    <p className="text-sm text-[var(--muted)]">{item.detail}</p>
                  )}
                  {item.score && (
                    <div className="mt-3 inline-flex items-center gap-2">
                      <span className="text-xs text-[var(--muted)]">Score:</span>
                      <span className="text-sm font-semibold text-white">
                        {item.score}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
