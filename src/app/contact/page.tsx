import Link from "next/link";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[var(--bg)] text-[var(--text)] pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-6">
        <div className="mb-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-[var(--muted)] transition-colors hover:text-[var(--text)]"
          >
            <svg
              className="h-3.5 w-3.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Back to Reframe
          </Link>
        </div>

        <div className="mb-12 text-center flex flex-col items-center">
          <div className="mb-6 h-16 w-16 rounded-2xl border border-[var(--border)] bg-[var(--surface)] flex items-center justify-center shadow-sm">
            <span className="text-2xl font-bold text-[var(--accent)]">?</span>
          </div>

          <h1 className="text-5xl font-bold tracking-tight mb-4">Contact</h1>
          <p className="max-w-2xl text-base md:text-lg text-[var(--muted)] leading-relaxed">
            Have a question, feedback, or found a bug? Use one of the links below
            and we’ll keep the conversation where it’s easiest to track.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <a
            href="https://github.com/magic-peach/reframe/issues"
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 md:p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--accent)] hover:shadow-lg hover:shadow-black/5"
          >
            <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--bg)] border border-[var(--border)] text-[var(--accent)]">
              <span className="text-lg font-semibold">01</span>
            </div>
            <h2 className="text-2xl font-semibold tracking-tight mb-3 group-hover:text-[var(--accent)] transition-colors">
              GitHub Issues
            </h2>
            <p className="text-[var(--muted)] leading-relaxed">
              For bug reports and feature requests. Best for anything that needs
              a clear paper trail or can be reproduced.
            </p>
          </a>

          <a
            href="https://github.com/magic-peach/reframe/discussions"
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 md:p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--accent)] hover:shadow-lg hover:shadow-black/5"
          >
            <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--bg)] border border-[var(--border)] text-[var(--accent)]">
              <span className="text-lg font-semibold">02</span>
            </div>
            <h2 className="text-2xl font-semibold tracking-tight mb-3 group-hover:text-[var(--accent)] transition-colors">
              GitHub Discussions
            </h2>
            <p className="text-[var(--muted)] leading-relaxed">
              For questions, ideas, and general help. Good for broader
              conversations that don’t need an issue entry.
            </p>
          </a>
        </div>

        <div className="mt-8 rounded-2xl border border-[var(--border)] bg-[var(--surface)] px-6 py-5 text-sm text-[var(--muted)]">
          This page follows the shared theme tokens from globals.css, so the design updates automatically in light, dark, and high-contrast modes.
        </div>
      </div>
    </main>
  );
}
