import { ArrowUpRight } from "lucide-react";

function GitHubMark({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.54 2.87 8.39 6.84 9.75.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.37-3.37-1.37-.46-1.21-1.11-1.53-1.11-1.53-.91-.63.07-.62.07-.62 1.01.07 1.54 1.06 1.54 1.06.9 1.59 2.35 1.13 2.92.87.09-.67.35-1.13.63-1.39-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.74-.1-.26-.45-1.3.1-2.7 0 0 .84-.27 2.75 1.04a9.2 9.2 0 0 1 5 0c1.9-1.31 2.75-1.04 2.75-1.04.55 1.4.2 2.44.1 2.7.64.71 1.03 1.62 1.03 2.74 0 3.94-2.35 4.8-4.58 5.06.36.31.68.92.68 1.86 0 1.34-.01 2.42-.01 2.75 0 .27.18.58.69.48A10.27 10.27 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z" />
    </svg>
  );
}

function LinkedInMark({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5ZM.2 8.2H4.8V24H.2V8.2ZM8.4 8.2h4.4v2.2h.06c.61-1.16 2.12-2.38 4.36-2.38 4.66 0 5.52 3.06 5.52 7.04V24h-4.6v-7.65c0-1.82-.03-4.16-2.54-4.16-2.55 0-2.94 1.99-2.94 4.03V24H8.4V8.2Z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="border-t border-white/6 px-6 py-10 sm:px-10 lg:px-16 xl:px-24">
      <div className="mx-auto flex max-w-7xl flex-col gap-10">
        
        {/* Top */}
        <div className="flex flex-col items-start justify-between gap-10 lg:flex-row lg:items-center">
          
          {/* Left */}
          <div>
            <h3 className="text-2xl font-semibold tracking-wide text-[#FFFBF4]">
              MalsHika
            </h3>

            <p className="mt-3 max-w-md text-sm leading-7 text-[#FFFBF4]/55">
              Building elegant digital experiences with modern full-stack
              technologies, clean UI systems, and scalable architecture.
            </p>
          </div>

          {/* Center */}
          <div className="flex flex-wrap items-center gap-5 text-sm text-[#FFFBF4]/55">
            {["Home", "About", "Skills", "Projects", "Contact"].map(
              (item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="transition duration-300 hover:text-[#D8CFBC]"
                >
                  {item}
                </a>
              )
            )}
          </div>

          {/* Right */}
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/malshikainsari"
              target="_blank"
              rel="noreferrer"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-[#FFFBF4]/70 transition duration-300 hover:border-[#565449]/40 hover:bg-[#565449]/10 hover:text-[#FFFBF4]"
            >
              <GitHubMark className="h-[18px] w-[18px]" />
            </a>

            <a
              href="http://www.linkedin.com/in/malshika-insari-b4833a2b7"
              target="_blank"
              rel="noreferrer"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[#565449]/40 bg-[#4d4b41] text-[#FFFBF4] shadow-[0_0_25px_rgba(86,84,73,0.14)] transition duration-300 hover:scale-[1.05] hover:bg-[#615f53]"
            >
              <LinkedInMark className="h-[18px] w-[18px]" />
            </a>

            <a
              href="mailto:malshikainsari89@gmail.com"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-[#FFFBF4]/70 transition duration-300 hover:border-[#565449]/40 hover:bg-[#565449]/10 hover:text-[#FFFBF4]"
            >
              <ArrowUpRight size={18} />
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col items-start justify-between gap-4 border-t border-white/6 pt-6 text-sm text-[#FFFBF4]/40 sm:flex-row sm:items-center">
          <p>© 2026 MalsHika. All rights reserved.</p>

          <p className="text-[#FFFBF4]/35">
            Designed & developed with attention to detail.
          </p>
        </div>
      </div>
    </footer>
  );
}