const skillGroups = [
  {
    id: "01",
    title: "Languages",
    items: ["HTML5", "CSS3", "JavaScript", "TypeScript", "Java", "Python", "PHP"],
  },
  {
    id: "02",
    title: "Frontend & Mobile",
    items: ["React", "Next.js", "React Native", "Flutter", "Tailwind CSS"],
  },
  {
    id: "03",
    title: "Backend",
    items: ["Node.js", "Express.js", "REST APIs"],
  },
  {
    id: "04",
    title: "Database",
    items: ["MongoDB", "MySQL", "PostgreSQL", "Firebase"],
  },
  {
    id: "05",
    title: "DevOps & Tools",
    items: [
      "Git",
      "GitHub",
      "AWS",
      "Kubernetes",
      "Postman",
      "Android Studio",
      "IntelliJ IDEA",
      "Figma",
    ],
  },
  {
    id: "06",
    title: "AI / ML",
    items: ["Machine Learning", "Deep Learning", "TensorFlow", "PyTorch"],
  },
];

import Reveal from "@/components/Reveal";
export default function Skills() {
  return (
    <section
      id="skills"
      className="px-6 py-24 sm:px-10 lg:px-16 xl:px-24"
    >
      <div className="mx-auto max-w-7xl">
        <Reveal>
        <div className="mb-12 max-w-2xl">
          <p className="mb-4 text-sm uppercase tracking-[0.32em] text-[#D8CFBC]/70">
            Skills & Tools
          </p>

          <h2 className="mt-10 max-w-2xl text-3xl font-semibold tracking-[-0.02em] leading-[1.08] text-[#FFFBF4] md:text-[40px]">
            The technologies I use to build modern products.
          </h2>

          <p className="mt-8 max-w-2xl text-[18px] leading-8 text-[#FFFBF4]/65">
            A focused stack across web, mobile, backend, databases, DevOps, and AI.
            Structured to show what I can build today and where I am growing next.
          </p>

          <div className="mt-6 h-px w-24 bg-gradient-to-r from-[#565449]/80 to-transparent" />
        </div>
        </Reveal>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
         {skillGroups.map((group, index) => (
            <Reveal key={group.id} delay={index * 0.06}>
            <article
              key={group.id}
  
              className="group relative flex min-h-[340px] flex-col overflow-hidden rounded-[1.75rem]
              border border-white/8 bg-white/[0.03] p-8 backdrop-blur-md
              transition duration-300 hover:-translate-y-1
              hover:border-[#565449]/60
              hover:bg-white/[0.05]
              hover:shadow-[0_18px_50px_rgba(0,0,0,0.22)]"
            >
              <div className="absolute left-6 top-0 h-px w-20 bg-gradient-to-r from-transparent via-[#565449]/80 to-transparent opacity-0 transition group-hover:opacity-100" />

              <div className="flex items-start justify-between gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#D8CFBC] text-sm font-bold text-[#11120D] shadow-lg shadow-black/20 transition group-hover:bg-[#565449] group-hover:text-[#FFFBF4]">
                  {group.id}
                </div>
              </div>

              <h3 className="mt-6 text-xl font-semibold text-[#FFFBF4]">
                {group.title}
              </h3>

              <div className="mt-5 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-[#11120D] px-3 py-1 text-[13px] text-[#FFFBF4]/75 transition duration-300 group-hover:border-[#565449]/40 group-hover:bg-[#565449]/10 group-hover:text-[#FFFBF4]"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="mt-6 h-px w-full bg-gradient-to-r from-[#565449]/45 to-transparent" />
            </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}