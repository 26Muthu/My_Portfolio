const PROJECTS = [
  {
    num: "01",
    title: "Blockchain Based Chat Application",
    desc: "Secure chat app with Aadhar-based authentication. User data stored on-chain using Ethereum and Solidity smart contracts. Private messages are end-to-end encrypted with a fully decentralized architecture for maximum security and data integrity.",
    tags: ["React.js", "Firebase", "Ethereum", "Solidity", "MetaMask", "Sepolia"],
    links: { github: "https://github.com/26Muthu/My_Works" },
    featured: true,
    highlight: "Shortlisted at APEEN'25, Portugal",
  },
  {
    num: "02",
    title: "Gesture Talk AI",
    desc: "AI-powered speech-to-sign language converter with real-time 3D animated gesture output. Uses NLP to translate spoken or typed language into sign language animations — designed to improve communication for the hearing impaired.",
    tags: ["React.js", "Firebase", "NLP", "Speech Recognition", "3D Animation"],
    links: { github: "https://github.com/26Muthu/My_Works" },
    featured: true,
    highlight: null,
  },
];

const OTHER = [
  {
    title: "ERP Full-Stack Modules",
    desc: "Built dynamic data-driven interfaces and RESTful API integrations for live ERP systems at Jetz ERP using Node.js, React.js, Express.js, and MS SQL Server.",
    tags: ["Node.js", "React.js", "Express.js", "MS SQL Server", ".NET"],
    github: "https://github.com/26Muthu/My_Works",
  },
  {
    title: "Static Web Projects (NSIC)",
    desc: "Built websites using HTML, CSS, and JavaScript during internship at NSIC. Focused on responsive layouts, accessibility, and front-end best practices.",
    tags: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/26Muthu/My_Works",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="border-t border-border py-32 px-8">
      <div className="max-w-5xl mx-auto">
        {/* Label */}
        <div className="flex items-center gap-3 font-mono text-[0.72rem] text-accent tracking-[0.1em] mb-16">
          <span className="opacity-60">02.</span>
          <span>projects</span>
          <div className="flex-1 h-px bg-border max-w-[240px]" />
        </div>

        {/* Featured */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-16">
          {PROJECTS.map((p, i) => (
            <article
              key={p.num}
              className={`reveal reveal-d${i + 1} group relative bg-bg-2 border border-border rounded-xl p-7 flex flex-col gap-4 transition-all duration-300 hover:-translate-y-1 hover:border-border-2`}
            >
              {/* Top line accent on hover */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-xl" />

              <div className="flex justify-between items-start">
                <span className="font-mono text-[0.65rem] text-accent opacity-60 tracking-widest">{p.num}</span>
                <div className="flex gap-3">
                  <a
                    href={p.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-text-3 hover:text-accent transition-colors"
                  >
                    <GithubIcon />
                  </a>
                </div>
              </div>

              {p.highlight && (
                <div className="inline-flex items-center gap-1.5 font-mono text-[0.62rem] text-accent border border-accent/30 bg-accent/5 px-2.5 py-1 rounded-full tracking-wide w-fit">
                  <span>★</span>
                  {p.highlight}
                </div>
              )}

              <h3 className="font-display font-semibold text-xl text-text tracking-tight leading-snug">
                {p.title}
              </h3>
              <p className="font-mono text-xs text-text-2 leading-[1.9] flex-1">{p.desc}</p>
              <ul className="flex flex-wrap gap-2 mt-auto">
                {p.tags.map(t => (
                  <li key={t} className="font-mono text-[0.62rem] text-gray-400 border border-border px-2 py-0.5 rounded tracking-wide">
                    {t}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        {/* Other projects */}
        <h4 className="reveal font-display text-sm font-medium text-text-2 tracking-tight text-center mb-6">
          other things i&apos;ve built
        </h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {OTHER.map((p, i) => (
            <article
              key={p.title}
              className={`reveal reveal-d${i + 1} bg-bg-2 border border-border rounded-lg p-5 flex flex-col gap-3 transition-all duration-200 hover:border-border-2 hover:-translate-y-0.5`}
            >
              <div className="flex justify-between items-start gap-2">
                <h3 className="font-display font-semibold text-base text-text leading-snug">{p.title}</h3>
                <a href={p.github} target="_blank" rel="noopener noreferrer" className="text-text-3 hover:text-accent transition-colors flex-shrink-0">
                  <GithubIcon />
                </a>
              </div>
              <p className="font-mono text-xs text-text-2 leading-[1.8] flex-1">{p.desc}</p>
              <ul className="flex flex-wrap gap-1.5">
                {p.tags.map(t => (
                  <li key={t} className="font-mono text-[0.6rem] text-gray-400 border border-border px-2 py-0.5 rounded">
                    {t}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function GithubIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
    </svg>
  );
}
