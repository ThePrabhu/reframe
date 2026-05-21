import Link from "next/link";
import { ArrowRight, Github, Mail, MessageCircle } from "lucide-react";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Contact | Reframe",
  description: "Get in touch with the Reframe team.",
};

export default function ContactPage() {
  return (
    <>
      <main className=" bg-[var(--bg)] text-[var(--text)]">
        <div className="mx-auto w-full p-3">
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

          <div className="mx-auto w-full max-w-[1400px] px-8">
            <div className="mb-12">
              <h1 className="mt-6 text-5xl tracking-tight font-semibold">
                Contact
              </h1>

              <p className="mt-5 max-w-2xl text-lg leading-relaxed text-[var(--muted)] sm:text-xl">
                Have a question, feedback, or found a bug? Use the channels below to reach the Reframe team without leaving the browser.
              </p>
            </div>

            <div className="grid gap-4 lg:grid-cols-2">
              <a
                href="https://github.com/magic-peach/reframe/issues"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--surface)] p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--muted)]"
              >
                <div className="flex items-start gap-2 ">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-[var(--border)]">
                    <Github className="h-6 w-6" aria-hidden="true" />
                  </div>

                  <div className="min-w-0 flex-1">
                    <h2 className="text-2xl font-semibold tracking-tight">GitHub Issues</h2>
                    <p className="mt-2 max-w-md text-sm leading-6 text-[var(--muted)]">
                      For bug reports and feature requests. Share screenshots, repro steps, or any details that help us fix it faster.
                    </p>
                  </div>
                </div>

                 <div className="mt-8 border-t border-[var(--border)] pt-5">
                  <span className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--muted)] transition-all duration-300 group-hover:translate-x-1 group-hover:text-[var(--text)]">
                      Open GitHub Issues<ArrowRight className="h-4 w-4" aria-hidden="true"/>
                  </span>
                </div>
              </a>

              <a
                href="https://github.com/magic-peach/reframe/discussions"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--surface)] p-6  transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--muted)]"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-[var(--border)]  text-[var(--text)]">
                    <MessageCircle className="h-6 w-6" aria-hidden="true" />
                  </div>

                  <div className="min-w-0 flex-1">
                    <h2 className="text-2xl font-semibold tracking-tight">GitHub Discussions</h2>
                    <p className="mt-2 max-w-md text-sm leading-6 text-[var(--muted)]">
                      For questions, ideas, and general help. It’s the best place for open-ended feedback and product conversations.
                    </p>
                  </div>
                </div>

                <div className="mt-8 border-t border-[var(--border)] pt-5">
                  <span className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--muted)] transition-all duration-300 group-hover:translate-x-1 group-hover:text-[var(--text)]">
                      View GitHub Discussions<ArrowRight className="h-4 w-4" aria-hidden="true"/>
                  </span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
