import { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react';
import { profile } from '@/data/portfolio';

export default function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // No backend configured — this is a UI-only form.
    // It does not actually send an email.
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  const contactItems = [
    profile.email && { icon: Mail, label: 'Email', value: profile.email },
    profile.phone && { icon: Phone, label: 'Phone', value: profile.phone },
    profile.location && { icon: MapPin, label: 'Location', value: profile.location },
  ].filter(Boolean) as { icon: typeof Mail; label: string; value: string }[];

  return (
    <section id="contact" className="px-6 lg:px-16 py-20 lg:py-28">
      <div className="max-w-4xl mx-auto section-fade">
        <div className="flex items-center gap-3 mb-2">
          <span className="w-8 h-px bg-accent" />
          <p className="text-accent text-sm font-medium tracking-widest uppercase">
            Contact
          </p>
        </div>
        <h2 className="font-display text-3xl lg:text-4xl font-bold text-white mb-8">
          Get In Touch
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Contact info */}
          <div className="card p-6 lg:p-8">
            <h3 className="font-display text-lg font-semibold text-white mb-4">
              Contact Information
            </h3>
            <p className="text-sm text-[var(--muted)] mb-6 leading-relaxed">
              Feel free to reach out if you'd like to connect or collaborate on a
              project.
            </p>

            {contactItems.length > 0 ? (
              <div className="flex flex-col gap-4">
                {contactItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.label} className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                        <Icon size={18} className="text-accent" />
                      </div>
                      <div>
                        <p className="text-xs text-[var(--muted)]">{item.label}</p>
                        <p className="text-sm text-white font-medium">{item.value}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="flex items-center gap-3 p-4 rounded-xl bg-[var(--bg-2)] border border-[var(--border)]">
                <Mail size={18} className="text-[var(--muted)]" />
                <p className="text-sm text-[var(--muted)]">
                  Contact details not provided yet.
                </p>
              </div>
            )}

            {/* Social links */}
            {(profile.linkedin || profile.github || profile.kaggle) && (
              <div className="flex items-center gap-3 mt-6">
                {profile.linkedin && (
                  <a
                    href={profile.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-lg border border-[var(--border)] text-sm text-[var(--muted)] hover:text-accent hover:border-accent transition-colors"
                  >
                    LinkedIn
                  </a>
                )}
                {profile.github && (
                  <a
                    href={profile.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-lg border border-[var(--border)] text-sm text-[var(--muted)] hover:text-accent hover:border-accent transition-colors"
                  >
                    GitHub
                  </a>
                )}
                {profile.kaggle && (
                  <a
                    href={profile.kaggle}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-lg border border-[var(--border)] text-sm text-[var(--muted)] hover:text-accent hover:border-accent transition-colors"
                  >
                    Kaggle
                  </a>
                )}
              </div>
            )}
          </div>

          {/* Contact form */}
          <div className="card p-6 lg:p-8">
            <h3 className="font-display text-lg font-semibold text-white mb-4">
              Send a Message
            </h3>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div>
                <label className="text-xs text-[var(--muted)] mb-1.5 block">
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="Enter your name"
                  className="w-full px-4 py-3 rounded-lg bg-[var(--bg-2)] border border-[var(--border)] text-white text-sm placeholder:text-[var(--muted)]/50 focus:outline-none focus:border-accent transition-colors"
                />
              </div>
              <div>
                <label className="text-xs text-[var(--muted)] mb-1.5 block">
                  Your Email
                </label>
                <input
                  type="email"
                  required
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 rounded-lg bg-[var(--bg-2)] border border-[var(--border)] text-white text-sm placeholder:text-[var(--muted)]/50 focus:outline-none focus:border-accent transition-colors"
                />
              </div>
              <div>
                <label className="text-xs text-[var(--muted)] mb-1.5 block">
                  Message
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="Write your message..."
                  className="w-full px-4 py-3 rounded-lg bg-[var(--bg-2)] border border-[var(--border)] text-white text-sm placeholder:text-[var(--muted)]/50 focus:outline-none focus:border-accent transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                disabled={sent}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-accent text-black font-semibold text-sm hover:bg-[var(--accent-2)] transition-colors disabled:opacity-60"
              >
                {sent ? (
                  <>
                    <CheckCircle2 size={18} /> Message Sent
                  </>
                ) : (
                  <>
                    <Send size={18} /> Send Message
                  </>
                )}
              </button>
              <p className="text-xs text-[var(--muted)] text-center">
                This is a UI-only form — no email is sent without a backend.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
