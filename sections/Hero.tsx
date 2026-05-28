import Image from "next/image";
import { Download } from "lucide-react";
import Reveal from "@/components/Reveal";

export default function Hero() {
  return (
    <section
      id="home"
      className="scroll-mt-32 relative min-h-screen overflow-hidden px-6 pt-32 sm:px-10 lg:px-16 xl:px-24"
    >
      <div className="absolute inset-0 -z-20 bg-[#11120D]" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(216,207,188,0.07),transparent_22%),radial-gradient(circle_at_80%_30%,rgba(86,84,73,0.18),transparent_24%),radial-gradient(circle_at_70%_80%,rgba(255,251,244,0.04),transparent_20%)]" />

      <div className="mx-auto grid max-w-7xl items-center gap-16 grid gap-12 lg:grid-cols-2 lg:gap-24">
        <Reveal>
        <div className="max-w-2xl">

          <h1 className="max-w-xl text-5xl font-semibold leading-[1.02] tracking-tight text-[#FFFBF4] text-4xl sm:text-5xl md:text-7xl">
            Hi, I&apos;m <span className="text-[#D8CFBC]">Malshika</span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-8 text-[#FFFBF4]/65 md:text-lg">
            I build elegant, responsive, and modern web experiences with clean
            structure, smooth interactions, and a premium visual feel.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
            href="#projects"
            className="rounded-full bg-[#D8CFBC] px-6 py-3 text-sm font-semibold text-[#11120D] transition hover:scale-[1.03] hover:bg-[#e3dac7]"
            >
            View Projects
            </a>

            <a
              href="/cv.pdf"
              download
              className="inline-flex items-center gap-2 rounded-full bg-[#4d4b41] px-6 py-3 text-sm font-semibold text-[#FFFBF4] ring-1 ring-white/5 shadow-lg shadow-black/20 transition hover:scale-[1.03] hover:bg-[#615f53]"
            >
              <Download size={16} />
              Download CV
            </a>

            <a
              href="#contact"
              className="rounded-full border border-white/10 bg-white/[0.03] px-6 py-3 text-sm font-medium text-[#FFFBF4] backdrop-blur-md transition hover:bg-white/[0.06]"
            >
              Contact Me
            </a>
          </div>
        </div>
        </Reveal>

        <Reveal delay={0.15}>
        <div className="relative flex justify-center lg:justify-end lg:pr-6">
          <div className="absolute right-[-8%] top-[10%] h-[320px] w-[320px] rounded-full bg-[#D8CFBC]/8 blur-[140px]" />
          <div className="absolute bottom-[10%] left-[10%] h-[260px] w-[260px] rounded-full bg-[#565449]/18 blur-[120px]" />

          <div
            className="relative h-[440px] w-[290px] sm:h-[520px] sm:w-[350px] lg:h-[580px] lg:w-[400px]"
            style={{
              WebkitMaskImage:
                "linear-gradient(to right, rgba(0,0,0,0) 0%, black 18%, black 78%, rgba(0,0,0,0) 100%)",
              maskImage:
                "linear-gradient(to right, rgba(0,0,0,0) 0%, black 18%, black 78%, rgba(0,0,0,0) 100%)",
            }}
          >
            <Image
              src="/profile.jpg"
              alt="Malshika portrait"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover object-top"
            />

            <div className="absolute inset-0 bg-[linear-gradient(to_left,rgba(17,18,13,0)_0%,rgba(17,18,13,0.08)_45%,rgba(17,18,13,0.35)_70%,rgba(17,18,13,0.92)_100%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_35%,rgba(17,18,13,0.18)_62%,rgba(17,18,13,0.90)_100%)]" />
          </div>
        </div>
        </Reveal>
      </div>
    </section>
  );
}