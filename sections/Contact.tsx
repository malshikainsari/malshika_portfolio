import { ArrowUpRight, Mail } from "lucide-react";
import type { ReactNode } from "react";
import Reveal from "@/components/Reveal";

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
      className="group relative overflow-hidden rounded-[1.6rem] border border-white/8 bg-gradient-to-b from-[#565449]/18 via-[#2b2a23]/18 to-[#11120D] p-5 backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-[#565449]/70 hover:shadow-[0_18px_50px_rgba(0,0,0,0.28)] min-h-[118px] sm:min-h-[132px] flex flex-col justify-between"
    >
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.06)_0%,rgba(255,255,255,0.02)_30%,rgba(17,18,13,0.18)_100%)] opacity-80 transition duration-300 group-hover:opacity-100" />

      <div className="relative flex items-start justify-between gap-4">
        <div>
          <p className="text-[11px] uppercase tracking-[0.24em] text-[#D8CFBC]/55">
            {label}
          </p>
          <h3 className="mt-2 text-[18px] font-semibold leading-snug text-[#FFFBF4]">
            {title}
          </h3>
        </div>

        <div className="mt-1 text-[#D8CFBC]">{icon}</div>
      </div>

      <div className="relative mt-4 flex items-center justify-end">
        <span className="inline-flex items-center justify-center rounded-full border border-white/10 bg-[#11120D] p-3 text-[#FFFBF4]/75 transition group-hover:border-[#565449]/40 group-hover:bg-[#565449]/10">
        <ArrowUpRight size={16} />
        </span>
      </div>
    </a>
  );
}

export default function Contact() {
  return (
    <section id="contact" className="px-6 py-24 sm:px-10 lg:px-16 xl:px-24">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-stretch">
        {/* Left side */}
        <Reveal>
        <div className="flex h-full flex-col justify-center">
          <p className="mb-4 text-sm uppercase tracking-[0.32em] text-[#D8CFBC]/70">
            Contact
          </p>

          <h2 className="mt-8 max-w-2xl text-3xl font-semibold tracking-[-0.02em] leading-[1.08] text-[#FFFBF4] md:text-[40px]">
            Let’s build something meaningful together.
          </h2>

          <p className="mt-8 max-w-2xl text-[18px] leading-8 text-[#FFFBF4]/65">
            I’m currently open to full-time opportunities and collaborations
            where I can contribute with clean design thinking, solid full-stack
            development, and a strong focus on user experience.
          </p>

          <div className="mt-8 inline-flex w-fit items-center gap-3 rounded-full border border-[#565449]/40 bg-gradient-to-r from-[#565449]/30 to-[#2b2a23]/40 px-5 py-3 text-[18px] font-medium text-[#FFFBF4] shadow-[0_0_30px_rgba(86,84,73,0.18)] backdrop-blur-md">
            <span className="relative flex h-3 w-3">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#D8CFBC] opacity-75"></span>
                <span className="relative inline-flex h-3 w-3 rounded-full bg-[#D8CFBC]"></span>
            </span>

        Available for job opportunities
        </div>
       

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="mailto:malshikainsari89@gmail.com"
              className="inline-flex items-center gap-2 rounded-full bg-[#D8CFBC] px-6 py-3 text-[14px] font-semibold text-[#11120D] transition hover:scale-[1.03] hover:bg-[#e3dac7]"
            >
              <Mail size={16} />
              Email Me
            </a>

            <a
              href="http://www.linkedin.com/in/malshika-insari-b4833a2b7"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-[#565449]/40 bg-[#4d4b41] px-6 py-3 text-sm font-medium text-[#FFFBF4] shadow-[0_0_25px_rgba(86,84,73,0.16)] transition duration-300 hover:scale-[1.03] hover:bg-[#615f53]"
            >
              LinkedIn
              <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
        </Reveal>

        {/* Right side */}
         <Reveal delay={0.12}>
        <div className="grid gap-4 content-start self-start">
          <ContactCard
            label="Email"
            title="malshikainsari89@gmail.com"
            href="mailto:malshikainsari89@gmail.com"
            icon={<Mail size={18} />}
          />

          <ContactCard
            label="LinkedIn"
            title="Connect with me professionally"
            href="http://www.linkedin.com/in/malshika-insari-b4833a2b7"
            icon={<LinkedInMark className="h-[18px] w-[18px]" />}
          />

          <ContactCard
            label="GitHub"
            title="View my code and projects"
            href="https://github.com/malshikainsari"
            icon={<GitHubMark className="h-[18px] w-[18px]" />}
          />
        </div>
        </Reveal>
      </div>
    </section>
  );
}