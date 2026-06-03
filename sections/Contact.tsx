"use client";

import { useRef, useState, type FormEvent, type ReactNode } from "react";
import emailjs from "@emailjs/browser";
import { Mail, ArrowUpRight, Send } from "lucide-react";

function GitHubMark({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={className}
      fill="currentColor"
    >
      <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.54 2.87 8.39 6.84 9.75.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.37-3.37-1.37-.46-1.21-1.11-1.53-1.11-1.53-.91-.63.07-.62.07-.62 1.01.07 1.54 1.06 1.54 1.06.9 1.59 2.35 1.13 2.92.87.09-.67.35-1.13.63-1.39-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.74-.1-.26-.45-1.3.1-2.7 0 0 .84-.27 2.75 1.04a9.2 9.2 0 0 1 5 0c1.9-1.31 2.75-1.04 2.75-1.04.55 1.4.2 2.44.1 2.7.64.71 1.03 1.62 1.03 2.74 0 3.94-2.35 4.8-4.58 5.06.36.31.68.92.68 1.86 0 1.34-.01 2.42-.01 2.75 0 .27.18.58.69.48A10.27 10.27 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z" />
    </svg>
  );
}

function LinkedInMark({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={className}
      fill="currentColor"
    >
      <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5ZM.2 8.2H4.8V24H.2V8.2ZM8.4 8.2h4.4v2.2h.06c.61-1.16 2.12-2.38 4.36-2.38 4.66 0 5.52 3.06 5.52 7.04V24h-4.6v-7.65c0-1.82-.03-4.16-2.54-4.16-2.55 0-2.94 1.99-2.94 4.03V24H8.4V8.2Z" />
    </svg>
  );
}

function ContactCard({
  label,
  title,
  href,
  icon,
}: {
  label: string;
  title: string;
  href: string;
  icon: ReactNode;
}) {
  const external = href.startsWith("http");

  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      className="group relative flex min-h-[120px] flex-col justify-between overflow-hidden rounded-[1.45rem] border border-white/8 bg-gradient-to-b from-[#1a1a16] via-[#151513] to-[#11120D] px-5 py-4 backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-[#565449]/70 hover:shadow-[0_16px_45px_rgba(0,0,0,0.26)]"
    >
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.05)_0%,rgba(255,255,255,0.02)_35%,rgba(17,18,13,0.18)_100%)] opacity-80 transition duration-300 group-hover:opacity-100" />

      <div className="relative flex items-start justify-between gap-3">
        <div className="min-w-0">
          <p className="text-[11px] uppercase tracking-[0.28em] text-[#D8CFBC]/50">
            {label}
          </p>
          <h3 className="mt-2 text-[18px] font-semibold leading-snug text-[#FFFBF4]">
            {title}
          </h3>
        </div>

        <div className="mt-0.5 text-[#D8CFBC]">{icon}</div>
      </div>

      <div className="relative mt-4 flex items-center justify-end">
        <span className="inline-flex items-center justify-center rounded-full border border-white/10 bg-[#11120D] p-3 text-[#FFFBF4]/75 transition group-hover:border-[#565449]/40 group-hover:bg-[#565449]/10">
          <ArrowUpRight size={15} />
        </span>
      </div>
    </a>
  );
}

export default function Contact() {
  const form = useRef<HTMLFormElement>(null);

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const sendEmail = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) return;

    try {
      setLoading(true);
      setSuccess(false);

      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        form.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      setSuccess(true);
      form.current.reset();

      window.setTimeout(() => {
        setSuccess(false);
      }, 4000);
    } catch (error) {
      console.error("EmailJS send failed:", error);
      alert("Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="scroll-mt-32 px-6 py-24 sm:px-10 lg:px-16 xl:px-24"
    >
      <div className="mx-auto max-w-7xl">
        {/* TOP CONTENT */}
        <div className="w-full">
          <p className="text-sm uppercase tracking-[0.35em] text-[#8D8773]">
            Contact
          </p>

          <h2 className="mt-10 max-w-2xl text-3xl font-semibold tracking-[-0.02em] leading-[1.08] text-[#FFFBF4] md:text-[40px]">
            Let’s build something meaningful together.
          </h2>

          <p className="mt-6 max-w-2xl text-[18px] leading-8 text-[#FFFBF4]/65">
            I’m currently open to full-time opportunities and collaborations
            where I can contribute with clean design thinking, solid full-stack
            development, and a strong focus on user experience.
          </p>
        </div>

        {/* BOTTOM SECTION */}
        <div className="mt-14 grid gap-6 lg:grid-cols-[1.5fr_1fr] lg:items-stretch">
          {/* LEFT FORM */}
          <form
            ref={form}
            onSubmit={sendEmail}
            className="h-full rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl shadow-[0_18px_50px_rgba(0,0,0,0.16)]"
          >
            <p className="mb-1 text-2xl font-semibold text-[#FFFBF4]">
              Send a Message
            </p>
            <p className="mb-8 text-sm text-[#CFC6B4]/75">
              I typically respond within 24 hours.
            </p>

            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label className="mb-2 block text-[11px] uppercase tracking-[0.28em] text-[#8D8773]">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Your name"
                  className="w-full rounded-2xl border border-white/10 bg-black/20 px-5 py-4 text-[#FFFBF4] outline-none transition focus:border-[#565449]"
                />
              </div>

              <div>
                <label className="mb-2 block text-[11px] uppercase tracking-[0.28em] text-[#8D8773]">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="your@email.com"
                  className="w-full rounded-2xl border border-white/10 bg-black/20 px-5 py-4 text-[#FFFBF4] outline-none transition focus:border-[#565449]"
                />
              </div>
            </div>

            <div className="mt-5">
              <label className="mb-2 block text-[11px] uppercase tracking-[0.28em] text-[#8D8773]">
                Subject
              </label>
              <input
                type="text"
                name="subject"
                required
                placeholder="What's this about?"
                className="w-full rounded-2xl border border-white/10 bg-black/20 px-5 py-4 text-[#FFFBF4] outline-none transition focus:border-[#565449]"
              />
            </div>

            <div className="mt-5">
              <label className="mb-2 block text-[11px] uppercase tracking-[0.28em] text-[#8D8773]">
                Message
              </label>
              <textarea
                name="message"
                required
                rows={8}
                placeholder="Tell me about your project, idea, or just say hi..."
                className="w-full resize-none rounded-2xl border border-white/10 bg-black/20 px-5 py-4 text-[#FFFBF4] outline-none transition focus:border-[#565449]"
              />
            </div>

            <div className="mt-6 flex items-center justify-between gap-4">
              <button
                type="submit"
                disabled={loading}
                className="inline-flex items-center gap-3 rounded-full bg-[#D8CFBC] px-6 py-3 text-sm font-medium text-[#11120D] transition hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-70"
              >
                {loading ? "Sending..." : "Send Message"}
                <Send size={16} />
              </button>

              {success && (
                <p className="text-sm text-green-400">
                  Message sent successfully.
                </p>
              )}
            </div>
          </form>

          {/* RIGHT SIDE */}
          <div className="flex h-full flex-col justify-between gap-4 lg:w-full">
            <div className="relative overflow-hidden rounded-[1.45rem] border border-[#565449]/35 bg-gradient-to-r from-[#565449]/18 via-[#2b2a23]/45 to-[#11120D] px-6 py-5 shadow-[0_0_28px_rgba(86,84,73,0.10)]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(216,207,188,0.14),transparent_60%)]" />

              <div className="relative flex items-center gap-3">
                <span className="h-3 w-3 rounded-full bg-[#D8CFBC] shadow-[0_0_14px_rgba(216,207,188,0.8)]" />

                <div>
                  <p className="text-[10px] uppercase tracking-[0.24em] text-[#D8CFBC]/55">
                    Status
                  </p>
                  <h3 className="mt-1 text-[18px] font-medium leading-tight text-[#FFFBF4]">
                    Available for opportunities
                  </h3>
                </div>
              </div>
            </div>

            <ContactCard
              label="Email"
              title="Send me an email"
              href="mailto:malshikainsari89@gmail.com"
              icon={<Mail size={17} />}
            />

            <ContactCard
              label="LinkedIn"
              title="Connect with me"
              href="https://www.linkedin.com/"
              icon={<LinkedInMark className="h-[17px] w-[17px]" />}
            />

            <ContactCard
              label="GitHub"
              title="Check out my code"
              href="https://github.com/"
              icon={<GitHubMark className="h-[17px] w-[17px]" />}
            />

            <div className="rounded-[1.45rem] border border-white/8 bg-white/[0.03] px-5 py-5 backdrop-blur-md">
              <p className="text-[10px] uppercase tracking-[0.28em] text-[#D8CFBC]/50">
                Quick Response
              </p>
              <p className="mt-1 text-[14px] leading-6 text-[#FFFBF4]/72">
                I usually reply within 24 hours.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
