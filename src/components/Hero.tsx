import { Download, User } from 'lucide-react';
import { profile } from '@/data/portfolio';

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6 lg:px-16 pt-20 lg:pt-0"
    >
      <div className="max-w-4xl mx-auto text-center section-fade">
        {/* Avatar placeholder */}
        <div className="relative inline-block mb-8">
          <div className="w-36 h-36 lg:w-44 lg:h-44 rounded-full bg-gradient-to-br from-accent/20 to-accent/5 border-2 border-accent/30 flex items-center justify-center mx-auto glow">
            <span className="font-display text-5xl lg:text-6xl font-bold text-accent">
              KS
            </span>
          </div>
          <span className="absolute bottom-2 right-2 w-5 h-5 rounded-full bg-green-400 border-2 border-[var(--bg)]" />
        </div>

        <p className="text-accent text-sm font-medium tracking-widest uppercase mb-3">
          Welcome
        </p>

        <h1 className="font-display text-4xl lg:text-6xl font-bold text-white mb-4 leading-tight">
          {profile.name}
        </h1>

        <p className="text-lg lg:text-xl text-[var(--muted)] mb-8">
          {profile.role}
        </p>

        <p className="text-base text-[var(--muted)] max-w-2xl mx-auto mb-10 leading-relaxed">
          {profile.intro}
        </p>

        {/* Buttons — only show resume if a URL was provided */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          {profile.resumeUrl ? (
            <a
              href={profile.resumeUrl}
              download
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-accent text-black font-semibold text-sm hover:bg-[var(--accent-2)] transition-colors"
            >
              <Download size={18} />
              Download Resume
            </a>
          ) : (
            <span className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-[var(--border)] text-[var(--muted)] text-sm cursor-not-allowed">
              <Download size={18} />
              Resume not uploaded
            </span>
          )}
          <button
            onClick={() =>
              document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
            }
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-[var(--border)] text-white font-medium text-sm hover:border-accent hover:text-accent transition-colors"
          >
            <User size={18} />
            About Me
          </button>
        </div>

        {/* Social buttons — only if real URLs are provided */}
        {(profile.linkedin || profile.github || profile.kaggle) && (
          <div className="flex items-center justify-center gap-4 mt-8">
            {profile.linkedin && (
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-lg border border-[var(--border)] text-sm text-[var(--muted)] hover:text-accent hover:border-accent transition-colors"
              >
                LinkedIn
              </a>
            )}
            {profile.github && (
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-lg border border-[var(--border)] text-sm text-[var(--muted)] hover:text-accent hover:border-accent transition-colors"
              >
                GitHub
              </a>
            )}
            {profile.kaggle && (
              <a
                href={profile.kaggle}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-lg border border-[var(--border)] text-sm text-[var(--muted)] hover:text-accent hover:border-accent transition-colors"
              >
                Kaggle
              </a>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
