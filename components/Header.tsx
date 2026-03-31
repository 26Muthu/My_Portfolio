"use client";
import { useEffect, useState } from "react";

const NAV = ["about", "projects", "experience", "contact"];

export default function Header() {
  const [active, setActive] = useState("about");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      const current = NAV.map(id => document.getElementById(id))
        .findLast(s => s && s.getBoundingClientRect().top <= 120);
      if (current) setActive(current.id);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${scrolled
          ? "bg-bg/90 backdrop-blur-xl border-b border-border py-3"
          : "py-5"
        }`}
    >
      <div className="max-w-5xl mx-auto px-8 flex items-center gap-6">
        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center gap-2 font-display font-extrabold text-xl tracking-tight text-text cursor-none"
        >
          <span className="w-2 h-2 bg-accent rounded-full inline-block" />
          GM<span className="text-accent">.</span>
        </button>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1 ml-auto">
          {NAV.map((id, i) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className={`font-mono text-xs px-3 py-2 rounded tracking-widest transition-all duration-200 cursor-none ${active === id
                  ? "text-accent"
                  : "text-text-2 hover:text-text hover:bg-bg-3"
                }`}
            >
              <span className="text-accent opacity-60 mr-1">0{i + 1}.</span>
              {id}
            </button>
          ))}
        </nav>

        <a
          href="/Muthumani_Resume.pdf"
          className="hidden md:inline-block font-mono text-[0.72rem] text-accent border border-accent px-4 py-2 rounded tracking-widest hover:bg-accent hover:text-black transition-all duration-200"
          download
        >
          Download CV
        </a>

        {/* Hamburger */}
        <button
          className="md:hidden ml-auto flex flex-col gap-1.5 cursor-none p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="menu"
        >
          <span
            className={`block w-5 h-px bg-text transition-transform duration-200 ${menuOpen ? "translate-y-[7px] rotate-45" : ""
              }`}
          />
          <span
            className={`block w-5 h-px bg-text transition-transform duration-200 ${menuOpen ? "-translate-y-[7px] -rotate-45" : ""
              }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-bg-2 border-b border-border px-8 py-4 flex flex-col gap-3">
          {NAV.map((id, i) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className="font-mono text-sm text-text-2 text-left py-1 cursor-none"
            >
              <span className="text-accent mr-2">0{i + 1}.</span>
              {id}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}
