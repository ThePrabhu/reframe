import Link from "next/link";
import { ArrowRight, Github, Mail, MessageCircle } from "lucide-react";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Contact | Reframe",
  description: "Get in touch with the Reframe team.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[var(--bg)] text-[var(--text)] p-10">
      <div className="mx-auto w-full max-w-[1400px] px-8 xl:px-12">
        <div className="mb-6">
          <Link
            href="/"
            className="inline-flex items-center text-sm opacity-70 hover:opacity-100 transition-opacity"
          >
            &larr; Back to Reframe
          </Link>
        </div>

        <h1 className="text-4xl font-bold mb-6">Contact</h1>

        <p className="mb-8 text-lg opacity-90">
          Have a question, feedback, or found a bug?
        </p>

        <div className="grid gap-6 sm:grid-cols-2">
          <a
            href="https://github.com/magic-peach/reframe/issues"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 rounded-xl border border-[var(--border)] bg-[var(--surface)] px-4 py-5 transition-colors hover:border-[var(--muted)]"
          >
            <Github className="h-6 w-6 text-[var(--muted)] group-hover:text-[var(--text)]" />
            <div>
              <div className="text-lg font-semibold group-hover:text-[var(--text)]">
                GitHub Issues
              </div>
              <div className="text-sm opacity-70">For bug reports and feature requests.</div>
            </div>
            <ArrowRight className="ml-auto h-4 w-4 opacity-60" />
          </a>

          <a
            href="https://github.com/magic-peach/reframe/discussions"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 rounded-xl border border-[var(--border)] bg-[var(--surface)] px-4 py-5 transition-colors hover:border-[var(--muted)]"
          >
            <MessageCircle className="h-6 w-6 text-[var(--muted)] group-hover:text-[var(--text)]" />
            <div>
              <div className="text-lg font-semibold group-hover:text-[var(--text)]">
                GitHub Discussions
              </div>
              <div className="text-sm opacity-70">For questions, ideas, and general help.</div>
            </div>
            <ArrowRight className="ml-auto h-4 w-4 opacity-60" />
          </a>
        </div>
      </div>

      <Footer />
    </main>
  );
}
