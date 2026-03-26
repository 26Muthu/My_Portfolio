"use client";
import { useState } from "react";

const TABS = [
  {
    id: "jetz",
    company: "Jetz ERP Pvt. Ltd",
    role: "Software Developer — Intern",
    period: "Jun 2025 – Jul 2025",
    location: "Karaikudi, TamilNadu, India",
    bullets: [
      "Built full-stack modules using Node.js, React.js, Express.js, and MS SQL Server for a live ERP platform.",
      "Developed dynamic, data-driven UI components and integrated them with backend REST APIs.",
      "Gained hands-on exposure to the .NET Framework while contributing to production features in a fast-paced team.",
      "Maintained seamless API-to-database connectivity and supported data backup, recovery, and security measures.",
    ],
    stack: ["Node.js", "React.js", "Express.js", "MS SQL Server", "RESTful APIs", ".NET"],
  },
  {
    id: "nsic",
    company: "NSIC",
    role: "Web Developer — Intern",
    period: "Jun 2024 – Jul 2024",
    location: "Chennai, TamilNadu, India",
    bullets: [
      "Completed a one-month internship building websites using HTML, CSS, and JavaScript.",
      "Gained foundational understanding of responsive webpage structure, layout, and front-end development practices.",
      "Collaborated with senior developers to implement design mockups into functional web pages.",
    ],
    stack: ["HTML", "CSS", "JavaScript"],
  },
  {
    id: "edu",
    company: "ACGCET",
    role: "B.E. Computer Science Engineering",
    period: "Oct 2021 – May 2025",
    location: "Karaikudi, TamilNadu, India",
    bullets: [
      "Graduated with CGPA 7.231 from Alagappa Chettiar Government College of Engineering and Technology.",
      "HSC: 88.5% | SSLC: 86.2%",
      "Key coursework: Data Structures, DBMS, Operating Systems, Networks, Software Engineering, Cyber Security.",
      "Shortlisted for APEEN'25, Portugal for the project on Blockchain-Based Identity Authentication.",
    ],
    stack: [],
  },
];

const CERTS = [
  { name: "Programming in Java — NPTEL", detail: "Score: 70% · Jul–Oct 2022" },
  { name: "Foundations of Cyber Security — Coursera", detail: "Completed Mar 7, 2024" },
  { name: "TCS National Qualifier Test (NQT)", detail: "Score: 67.85% · Sep 2024" },
];

export default function Experience() {
  const [active, setActive] = useState(0);

  return (
    <section id="experience" className="border-t border-border py-32 px-8">
      <div className="max-w-5xl mx-auto">
        {/* Label */}
        <div className="flex items-center gap-3 font-mono text-[0.72rem] text-accent tracking-[0.1em] mb-16">
          <span className="opacity-60">03.</span>
          <span>experience & education</span>
          <div className="flex-1 h-px bg-border max-w-[200px]" />
        </div>

        {/* Tabbed panel */}
        <div className="reveal grid grid-cols-1 md:grid-cols-[180px_1fr] gap-8 mb-20">
          {/* Tabs */}
          <div className="relative flex md:flex-col border-b md:border-b-0 md:border-l border-border overflow-x-auto md:overflow-visible">
            {TABS.map((t, i) => (
              <button
                key={t.id}
                onClick={() => setActive(i)}
                className={`font-mono text-[0.75rem] tracking-wide px-4 py-3 text-left whitespace-nowrap md:whitespace-normal transition-all duration-200 cursor-none border-b-2 md:border-b-0 md:border-l-2 -mb-px md:-mb-0 md:-ml-px ${
                  active === i
                    ? "text-accent border-accent"
                    : "text-text-3 border-transparent hover:text-text-2 hover:bg-bg-3"
                }`}
              >
                {t.company}
              </button>
            ))}
          </div>

          {/* Detail */}
          <div className="pt-1">
            <div className="mb-6">
              <h3 className="font-display font-semibold text-[1.3rem] text-text tracking-tight leading-snug mb-1">
                {TABS[active].role}{" "}
                <span className="text-text-3">@ </span>
                <span className="text-accent">{TABS[active].company}</span>
              </h3>
              <p className="font-mono text-[0.7rem] text-text-3 tracking-widest">
                {TABS[active].period} · {TABS[active].location}
              </p>
            </div>

            <ul className="flex flex-col gap-4 mb-6">
              {TABS[active].bullets.map((b, i) => (
                <li key={i} className="flex gap-3 font-mono text-sm text-text-2 leading-[1.8]">
                  <span className="text-accent flex-shrink-0 mt-0.5 text-xs">▹</span>
                  {b}
                </li>
              ))}
            </ul>

            {TABS[active].stack.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {TABS[active].stack.map(s => (
                  <span key={s} className="font-mono text-[0.62rem] text-text-3 border border-border px-2.5 py-0.5 rounded tracking-wide">
                    {s}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Certifications */}
        <div className="reveal reveal-d1">
          <p className="font-mono text-[0.68rem] text-text-3 tracking-[0.12em] mb-6">
            certifications & achievements
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {CERTS.map(c => (
              <div
                key={c.name}
                className="bg-bg-2 border border-border rounded-lg p-4 flex flex-col gap-1.5 hover:border-border-2 transition-all"
              >
                <span className="w-1.5 h-1.5 bg-accent rounded-full mb-1" />
                <p className="font-mono text-xs text-text leading-snug">{c.name}</p>
                <p className="font-mono text-[0.65rem] text-text-3">{c.detail}</p>
              </div>
            ))}
          </div>

          {/* Achievement highlight */}
          <div className="mt-4 bg-accent/5 border border-accent/20 rounded-lg p-4 flex items-start gap-3">
            <span className="text-accent text-base flex-shrink-0">★</span>
            <div>
              <p className="font-mono text-xs text-text leading-relaxed">
                Shortlisted for final review at <span className="text-accent">APEEN&apos;25, Portugal</span> — &ldquo;Blockchain-Based Identity Authentication: A Solution to the Proliferation of Fake Social Media Profiles (2025)&rdquo;
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
