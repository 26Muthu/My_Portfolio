"use client";
import { useEffect, useRef } from "react";

export default function Hero() {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      if (!gridRef.current) return;
      const x = (e.clientX / window.innerWidth - 0.5) * 18;
      const y = (e.clientY / window.innerHeight - 0.5) * 18;
      gridRef.current.style.transform = `translate(${x}px, ${y}px)`;
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden px-8 pt-28 pb-16">
      {/* Parallax grid */}
      <div
        ref={gridRef}
        className="absolute inset-[-40px] grid-bg opacity-40 transition-transform duration-75 will-change-transform pointer-events-none"
        aria-hidden
      />

      {/* Glow */}
      <div
        className="absolute w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(200,245,66,0.07) 0%, transparent 70%)",
          top: "50%", left: "50%", transform: "translate(-50%, -50%)",
        }}
        aria-hidden
      />

      <div className="max-w-5xl mx-auto w-full relative z-10">
        {/* Greeting */}
        <p
          className="flex items-center gap-3 font-mono text-xs text-text-2 tracking-[0.12em] mb-5"
          style={{ animation: "fadeUp 0.9s 0.05s cubic-bezier(.16,1,.3,1) both" }}
        >
          <span className="inline-block w-10 h-px bg-accent" />
          based in singapore
        </p>

        {/* Name */}
        <h1
          className="font-display font-extrabold leading-[0.88] tracking-tighter mb-4"
          style={{
            fontSize: "clamp(3.2rem, 10vw, 7.5rem)",
            animation: "fadeUp 0.9s 0.12s cubic-bezier(.16,1,.3,1) both",
          }}
        >
          Ganesan<br />
          <span className="text-stroke">Muthumani</span>
        </h1>

        {/* Role */}
        <p
          className="font-mono text-accent tracking-[0.12em] mb-6"
          style={{
            fontSize: "clamp(0.75rem, 1.8vw, 1rem)",
            animation: "fadeUp 0.9s 0.18s cubic-bezier(.16,1,.3,1) both",
          }}
        >
          Full-Stack Developer · Java & React.js
          <span className="animate-blink">_</span>
        </p>

        {/* Tagline */}
        <p
          className="font-mono text-text-2 leading-[1.9] max-w-md mb-10"
          style={{
            fontSize: "clamp(0.82rem, 1.4vw, 0.95rem)",
            animation: "fadeUp 0.9s 0.24s cubic-bezier(.16,1,.3,1) both",
          }}
        >
          CS grad passionate about building{" "}
          <span className="text-accent italic">scalable</span> systems and
          thoughtful user experiences. Open to full-time roles.
        </p>

        {/* CTA */}
        <div
          className="flex flex-wrap gap-4 mb-14"
          style={{ animation: "fadeUp 0.9s 0.3s cubic-bezier(.16,1,.3,1) both" }}
        >
          <button
            onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
            className="font-mono text-xs tracking-widest bg-accent text-black px-7 py-3 rounded transition-all duration-200 hover:opacity-80 hover:-translate-y-px cursor-none"
          >
            view my work
          </button>
          <a
            href="mailto:gmuthumani2004@gmail.com"
            className="font-mono text-xs tracking-widest text-text-2 border border-border-2 px-7 py-3 rounded transition-all duration-200 hover:text-text hover:border-text-3 hover:-translate-y-px"
          >
            get in touch →
          </a>
        </div>

        {/* Stats */}
        <div
          className="flex gap-10 flex-wrap"
          style={{ animation: "fadeUp 0.9s 0.38s cubic-bezier(.16,1,.3,1) both" }}
        >
          {[
            { val: "2+", label: "internships" },
            { val: "2+", label: "projects" },
            { val: "10+", label: "technologies" },
          ].map(s => (
            <div key={s.label} className="flex flex-col gap-0.5">
              <span className="font-display font-bold text-2xl tracking-tight text-text">{s.val}</span>
              <span className="font-mono text-[0.68rem] text-text-3 tracking-widest">{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 right-8 hidden sm:flex flex-col items-center gap-2 font-mono text-[0.62rem] text-text-3 tracking-[0.14em] [writing-mode:vertical-rl]">
        scroll
        <div className="w-px h-14 bg-border-2 relative overflow-hidden">
          <div
            className="absolute left-1/2 -translate-x-1/2 w-0.5 h-1.5 bg-accent rounded-sm"
            style={{ animation: "scrollDot 1.8s ease-in-out infinite" }}
          />
        </div>
      </div>
    </section>
  );
}
