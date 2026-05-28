const focusAreas = [
  {
    title: "DevOps",
    description: "Cloud, automation, scalability, and deployment workflows.",
  },
  {
    title: "AI / ML",
    description: "Exploring machine learning and intelligent systems.",
  },
  {
    title: "Deep Learning",
    description: "Interested in neural networks and advanced AI technologies.",
  },
  {
    title: "Full Stack Web & Mobile",
    description:
      "Building responsive web apps and mobile-ready solutions end to end.",
  },
];
import Reveal from "@/components/Reveal";

export default function About() {
  return (
    <section
      id="about"
      className="scroll-mt-32 px-6 py-24 sm:px-10 lg:px-16 xl:px-24"
    >
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
         <Reveal>
          <div>
          <p className="mb-4 text-sm uppercase tracking-[0.32em] text-[#D8CFBC]/70">
            About Me
          </p>

          <h2 className="mt-10 max-w-2xl text-3xl font-semibold tracking-[-0.02em] leading-[1.08] text-[#FFFBF4] md:text-[40px]">
            Building modern systems with clean design and scalable thinking.
          </h2>

          <p className="mt-12 max-w-2xl text-[18px] leading-8 text-[#FFFBF4]/65">
            I am a Software Engineer focused on building scalable, responsive,
            and modern digital experiences. My interests span full-stack
            development, cloud technologies, DevOps, and intelligent systems,
            with a strong focus on clean architecture and user-centered design.
          </p>

          <p className="mt-8 max-w-2xl text-[18px] leading-8 text-[#FFFBF4]/65">
            Currently, I am focused on growing as a full-time software engineer
            through real-world product development and modern technologies.
          </p>
          
        </div>
        </Reveal>

        <Reveal delay={0.12}>
        <div className="grid gap-4 sm:grid-cols-2">
          {focusAreas.map((item, index) => (
            <article
              key={item.title}
              className="group rounded-[1.5rem] border border-white/8 bg-white/[0.03] p-5 backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:bg-white/[0.05]"
            >
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#D8CFBC] text-sm font-bold text-[#11120D] shadow-lg shadow-black/20">
                0{index + 1}
              </div>

              <h3 className="text-xl font-medium text-[#FFFBF4]">
                {item.title}
              </h3>

              <p className="mt-2 text-sm leading-6 text-[#FFFBF4]/65">
                {item.description}
              </p>

              <div className="mt-5 h-px w-full bg-gradient-to-r from-[#D8CFBC]/50 to-transparent" />
            </article>
          ))}
        </div>
        </Reveal>
      </div>
    </section>
  );
}