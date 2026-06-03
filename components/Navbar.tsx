"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

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
      <div className="mx-auto max-w-6xl">
        <nav className="flex items-center justify-between rounded-full border border-white/10 bg-white/[0.03] px-4 py-3 shadow-2xl shadow-black/30 backdrop-blur-xl md:px-6">
          
          {/* Logo */}
          <a
            href="#home"
            className="flex items-center gap-3 rounded-full px-3 py-2 transition hover:bg-white/5"
            onClick={() => {
              setActive("home");
              setMenuOpen(false);
            }}
          >
            <div className="relative flex items-center justify-center">
              <div
                className="absolute h-16 w-16 rounded-full bg-[#565449] opacity-40 blur-[18px]
                animate-[pulse_4s_ease-in-out_infinite]"
              />

              <div
                className="relative h-12 w-12 overflow-hidden rounded-full border-2 border-[#565449]
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

            <div className="hidden md:flex flex-col leading-tight">
              <span className="text-sm font-semibold tracking-[0.18em] text-[#FFFBF4]">
                MALS HIKA
              </span>
            </div>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-1 rounded-full border border-white/10 bg-black/20 px-2 py-1 backdrop-blur-md">
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

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-black/20 text-[#FFFBF4] md:hidden"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>

        {/* Mobile Dropdown Menu */}
        {menuOpen && (
          <div className="mt-2 rounded-3xl border border-white/10 bg-[#11120D]/95 p-4 backdrop-blur-xl md:hidden">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => {
                const isActive = active === item.href.replace("#", "");

                return (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={() => {
                      setActive(item.href.replace("#", ""));
                      setMenuOpen(false);
                    }}
                    className={`rounded-xl px-4 py-3 transition ${
                      isActive
                        ? "bg-[#D8CFBC] text-[#11120D]"
                        : "text-[#FFFBF4]/80 hover:bg-white/5"
                    }`}
                  >
                    {item.label}
                  </a>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}