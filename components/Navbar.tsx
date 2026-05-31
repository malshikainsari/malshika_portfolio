"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [active, setActive] = useState("home");

  useEffect(() => {
  const sectionIds = navItems.map((item) => item.href.replace("#", ""));

  const handleScroll = () => {
    const triggerPoint = window.scrollY + window.innerHeight * 0.35;
    let current = "home";

    for (const id of sectionIds) {
      const el = document.getElementById(id);
      if (!el) continue;

      if (el.offsetTop <= triggerPoint) {
        current = id;
      }
    }

    setActive(current);
  };

  handleScroll();
  window.addEventListener("scroll", handleScroll, { passive: true });
  window.addEventListener("resize", handleScroll);

  return () => {
    window.removeEventListener("scroll", handleScroll);
    window.removeEventListener("resize", handleScroll);
  };
}, []);

  return (
    <header className="fixed top-4 left-0 z-50 w-full px-4">
      <div className="mx-auto flex max-w-6xl items-center justify-center">
        <nav className="flex w-full items-center justify-between rounded-full border border-white/10 bg-white/[0.03] px-4 py-3 shadow-2xl shadow-black/30 backdrop-blur-xl md:px-6">
          <a
            href="#home"
            className="flex items-center gap-3 rounded-full px-3 py-2 transition hover:bg-white/5"
            onClick={() => setActive("home")}
          >
            <div className="relative flex items-center justify-center">
              <div
                className="absolute h-16 w-16 rounded-full bg-[#565449] opacity-40 blur-[18px]
                animate-[pulse_4s_ease-in-out_infinite]"
              />

              <div
                className="relative h-14 w-14 overflow-hidden rounded-full border-2 border-[#565449]
                shadow-[0_0_30px_rgba(86,84,73,0.55)]
                transition duration-300 hover:scale-105 hover:border-[#D8CFBC]"
              >
                <Image
                  src="/profile.jpg"
                  alt="Malshika"
                  fill
                  sizes="56px"
                  className="object-cover"
                />
              </div>
            </div>

            <div className="hidden flex-col leading-tight sm:flex">
              <span className="text-sm font-semibold tracking-[0.18em] text-[#FFFBF4]">
                MALS HIKA
              </span>
            </div>
          </a>

          <div className="flex items-center gap-1 rounded-full border border-white/10 bg-black/20 px-2 py-1 backdrop-blur-md">
            {navItems.map((item) => {
              const isActive = active === item.href.replace("#", "");

              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setActive(item.href.replace("#", ""))}
                  className={`rounded-full px-4 py-2 text-sm transition-all duration-300 ${
                    isActive
                      ? "bg-[#D8CFBC] text-[#11120D] shadow-lg shadow-[#D8CFBC]/20"
                      : "text-[#FFFBF4]/70 hover:bg-white/5 hover:text-[#FFFBF4]"
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </div>
        </nav>
      </div>
    </header>
  );
}