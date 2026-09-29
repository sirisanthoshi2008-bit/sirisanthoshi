import { FolderGit2, Github, ExternalLink } from 'lucide-react';
import { projects } from '@/data/portfolio';

export default function Projects() {
  return (
    <section id="projects" className="px-6 lg:px-16 py-20 lg:py-28">
      <div className="max-w-4xl mx-auto section-fade">
        <div className="flex items-center gap-3 mb-2">
          <span className="w-8 h-px bg-accent" />
          <p className="text-accent text-sm font-medium tracking-widest uppercase">
            Projects
          </p>
        </div>
        <h2 className="font-display text-3xl lg:text-4xl font-bold text-white mb-8">
          My Projects
        </h2>

        <div className="grid grid-cols-1 gap-6">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="card p-6 lg:p-8 hover:border-accent/40 transition-colors group"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <FolderGit2 size={22} className="text-accent" />
                </div>
                <div className="flex-1">
                  <h3 className="font-display text-lg lg:text-xl font-semibold text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-[var(--muted)] text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>

              {project.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-medium text-accent bg-accent/10 px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              {(project.github || project.demo) && (
                <div className="flex items-center gap-4 mt-5 pt-5 border-t border-[var(--border)]">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-[var(--muted)] hover:text-accent transition-colors"
                    >
                      <Github size={16} /> View Code
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
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
