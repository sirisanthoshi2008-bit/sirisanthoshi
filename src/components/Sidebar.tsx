import { useEffect, useState } from 'react';
import {
  Home,
  User,
  GraduationCap,
  Briefcase,
  FolderGit2,
  Mail,
  Menu,
  X,
} from 'lucide-react';

const navItems = [
  { id: 'home', label: 'Home', icon: Home },
  { id: 'about', label: 'About', icon: User },
  { id: 'education', label: 'Education', icon: GraduationCap },
  { id: 'experience', label: 'Experience', icon: Briefcase },
  { id: 'projects', label: 'Projects', icon: FolderGit2 },
  { id: 'contact', label: 'Contact', icon: Mail },
];

export default function Sidebar() {
  const [active, setActive] = useState('home');
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: '-40% 0px -55% 0px' }
    );

    navItems.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleNav = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMobileOpen(false);
  };

  return (
    <>
      {/* Mobile top bar */}
      <header className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-[var(--bg-2)]/90 backdrop-blur-md border-b border-[var(--border)]">
        <div className="flex items-center justify-between px-5 h-16">
          <span className="font-display font-bold text-lg text-white">
            K.S<span className="text-accent">.</span>
          </span>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-2 rounded-lg hover:bg-white/5 transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
        {mobileOpen && (
          <nav className="border-t border-[var(--border)] px-5 py-4 flex flex-col gap-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNav(item.id)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                    active === item.id
                      ? 'bg-accent/10 text-accent'
                      : 'text-[var(--muted)] hover:text-white hover:bg-white/5'
                  }`}
                >
                  <Icon size={18} />
                  {item.label}
                </button>
              );
            })}
          </nav>
        )}
      </header>

      {/* Desktop sidebar */}
      <aside className="hidden lg:flex fixed left-0 top-0 bottom-0 w-72 flex-col border-r border-[var(--border)] bg-[var(--bg-2)] z-40">
        <div className="px-8 py-10">
          <div className="font-display font-bold text-2xl text-white">
            K. Siri Santhoshi
          </div>
          <p className="text-sm text-[var(--muted)] mt-1">Data Science Student</p>
        </div>

        <nav className="flex-1 px-4 flex flex-col gap-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = active === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNav(item.id)}
                className={`group flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                  isActive
                    ? 'bg-accent/10 text-accent'
                    : 'text-[var(--muted)] hover:text-white hover:bg-white/5'
                }`}
              >
                <Icon size={18} />
                {item.label}
                {isActive && (
                  <span className="ml-auto w-1.5 h-1.5 rounded-full bg-accent" />
                )}
              </button>
            );
          })}
        </nav>

        <div className="px-8 py-6 border-t border-[var(--border)]">
          <p className="text-xs text-[var(--muted)]">
            © 2026 K. Siri Santhoshi
          </p>
        </div>
      </aside>
    </>
  );
}
