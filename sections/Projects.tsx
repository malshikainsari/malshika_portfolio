import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

type Project = {
  title: string;
  type: string;
  role: string;
  image: string;
  description: string;
  tech: string[];
  github?: string;
  featured?: boolean;
};

const projects: Project[] = [
  {
    title: "LuxeLoom Events",
    type: "Featured Project",
    role: "Full-Stack Developer",
    image: "/projects/luxeloom.png",
    description:
      "A modern event planning website with AI-powered theme generator, vendor marketplace, and budget tracker with live cost updates.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/malshikainsari/LuxeLoom-Events",
    featured: true,
  },
  {
    title: "DE Silver Bar",
    type: "Featured Project",
    role: "Full-Stack Developer",
    image: "/projects/desilverbar.png",
    description:
      "Bar website with admin panel for stock management and seamless user experience for purchasing liquor with online payment.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/ZNilakshi/Capstone-Project",
    featured: true,
  },
  {
    title: "LYLU",
    type: "Marketplace",
    role: "Full-Stack Developer",
    image: "/projects/lylu.png",
    description:
      "A sustainable second-hand marketplace featuring Google OAuth login, dynamic listings with image uploads, and WhatsApp integration.",
    tech: ["React", "Express", "MongoDB"],
    github: "https://github.com/ZNilakshi/OLY.git",
  },
  {
    title: "OrionAI",
    type: "AI Platform",
    role: "Frontend Developer",
    image: "/projects/orionai.png",
    description:
      "An AI skill development platform offering interactive tutorials and challenges across writing, art, music, and programming.",
    tech: ["React", "Node.js", "AI"],
    github: "https://github.com/DulSamindika/OrionAi-frontend",
  },
  {
    title: "EpicReads",
    type: "E-Library",
    role: "Full-Stack Developer",
    image: "/projects/epicreads.png",
    description:
      "An innovative e-library management system developed to streamline digital library operations with intuitive book management features.",
    tech: ["PHP", "MySQL", "HTML", "CSS"],
    github: "https://github.com/HiruniWijerathna/LMS_Group8",
  },
  {
    title: "BeastBuddy",
    type: "Web Platform",
    role: "Full-Stack Developer",
    image: "/projects/beastbuddy.png",
    description:
      "A global platform addressing animal welfare, providing a user-friendly interface for reporting animal distress and facilitating rescue efforts.",
    tech: ["PHP", "MySQL", "HTML", "CSS"],
    github: "https://github.com/HiruniWijerathna/Web-Mini-Project",
  },
];

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

import Reveal from "@/components/Reveal";
export default function Projects() {
  return (
    <section id="projects" className="px-6 py-24 sm:px-10 lg:px-16 xl:px-24">
      <div className="mx-auto max-w-7xl">
        <Reveal>
        <div className="mb-14 max-w-2xl">
          <p className="mb-4 text-sm uppercase tracking-[0.32em] text-[#D8CFBC]/70">
            Selected Work
          </p>

          <h2 className="mt-10 max-w-2xl text-3xl font-semibold tracking-[-0.02em] leading-[1.08] text-[#FFFBF4] md:text-[40px]">
            Projects that reflect my design thinking and engineering approach.
          </h2>

          <p className="mt-8 max-w-2xl text-[18px] leading-8 text-[#FFFBF4]/65">
            A curated collection of full-stack applications, AI-focused platforms,
            and modern digital experiences built with performance, usability, and
            clean architecture in mind.
          </p>

          <div className="mt-6 h-px w-24 bg-gradient-to-r from-[#565449]/80 to-transparent" />
        </div>
        </Reveal>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <Reveal key={project.title} delay={index * 0.06}>

            <article
              key={project.title}
              className={[
                "group flex h-full flex-col overflow-hidden rounded-[1.8rem]",
                "border border-white/8 bg-white/[0.03] backdrop-blur-md",
                "transition duration-300 hover:-translate-y-1",
                "hover:border-[#565449]/60 hover:bg-white/[0.05]",
                "hover:shadow-[0_18px_50px_rgba(0,0,0,0.22)]",
                project.featured
                  ? "border-[#565449]/35 bg-white/[0.045] hover:border-[#565449]/70"
                  : "",
              ].join(" ")}
            >
              <div
                className={[
                  "relative overflow-hidden",
                  project.featured ? "h-[200px] sm:h-[220px] md:h-[260px]" : "h-[220px]",
                ].join(" ")}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover object-center transition duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#11120D] via-transparent to-transparent" />

                <div className="absolute left-5 top-5 rounded-full border border-white/10 bg-black/40 px-3 py-1 text-xs uppercase tracking-[0.2em] text-[#FFFBF4]/70 backdrop-blur-md">
                  {project.type}
                </div>

                <div className="absolute bottom-5 left-5 h-1 w-16 rounded-full bg-[#565449] opacity-80" />
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-semibold text-[#FFFBF4]">
                  {project.title}
                </h3>

                <p className="mt-2 text-[11px] uppercase tracking-[0.22em] text-[#D8CFBC]/55">
                  Role — {project.role}
                </p>

                <p className="mt-4 text-[15px] leading-7 text-[#FFFBF4]/62">
                  {project.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tech.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 bg-[#11120D] px-3 py-1 text-[13px] text-[#FFFBF4]/75 transition group-hover:border-[#565449]/40 group-hover:bg-[#565449]/10"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <a
                  href={project.github || "#"}
                  className="mt-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-5 py-2.5 text-sm font-medium text-[#FFFBF4] transition hover:border-[#565449]/40 hover:bg-[#565449]/10"
                >
                  Code
                  <GitHubMark className="h-4 w-4" />
                </a>
              </div>
            </article>
             </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}