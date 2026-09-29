import { GraduationCap, Code2 } from 'lucide-react';
import { profile } from '@/data/portfolio';

export default function About() {
  return (
    <section id="about" className="px-6 lg:px-16 py-20 lg:py-28">
      <div className="max-w-4xl mx-auto section-fade">
        <div className="flex items-center gap-3 mb-2">
          <span className="w-8 h-px bg-accent" />
          <p className="text-accent text-sm font-medium tracking-widest uppercase">
            About
          </p>
        </div>
        <h2 className="font-display text-3xl lg:text-4xl font-bold text-white mb-8">
          About Me
        </h2>

        <div className="card p-8 lg:p-10">
          <p className="text-base lg:text-lg text-[var(--muted)] leading-relaxed mb-6">
            I'm {profile.name}, currently pursuing my{' '}
            <span className="text-white font-medium">B.Tech in Data Science</span>{' '}
            (2nd Year) at the{' '}
            <span className="text-white font-medium">
              Nalla Narasimha Reddy Group of Institutions
            </span>
            . I have a strong interest in technology and enjoy developing
            websites that are functional, user-friendly, and solve real problems.
          </p>

          <p className="text-base lg:text-lg text-[var(--muted)] leading-relaxed mb-8">
            My academic journey has given me a solid foundation, and I'm eager to
            continue building my skills in web development and data science
            through hands-on projects.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex items-start gap-4 p-4 rounded-xl bg-[var(--bg-2)] border border-[var(--border)]">
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                <GraduationCap size={20} className="text-accent" />
              </div>
              <div>
                <p className="text-sm text-[var(--muted)] mb-1">Education</p>
                <p className="text-white font-medium text-sm">
                  B.Tech Data Science, 2nd Year
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-xl bg-[var(--bg-2)] border border-[var(--border)]">
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                <Code2 size={20} className="text-accent" />
              </div>
              <div>
                <p className="text-sm text-[var(--muted)] mb-1">Interest</p>
                <p className="text-white font-medium text-sm">
                  Web Development & Technology
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
