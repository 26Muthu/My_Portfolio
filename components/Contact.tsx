const SOCIAL = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/muthumani-g/", handle: "muthumani-g" },
  { label: "GitHub", href: "https://github.com/26Muthu/My_Works", handle: "26Muthu" },
  { label: "Email", href: "mailto:gmuthumani2004@gmail.com", handle: "gmuthumani2004" },
];

export default function Contact() {
  return (
    <section id="contact" className="border-t border-border">
      <div className="max-w-5xl mx-auto px-8">
        {/* Label */}
        <div className="flex items-center gap-3 font-mono text-[0.72rem] text-accent tracking-[0.1em] pt-32 mb-16">
          <span className="opacity-60">04.</span>
          <span>contact</span>
          <div className="flex-1 h-px bg-border max-w-[240px]" />
        </div>

        <div className="reveal grid grid-cols-1 lg:grid-cols-[1fr_260px] gap-16 items-start pb-32">
          {/* Left */}
          <div>
            <h2
              className="font-display font-extrabold tracking-tight leading-[0.9] text-text mb-7"
              style={{ fontSize: "clamp(2.6rem, 6vw, 4.2rem)" }}
            >
              Let&apos;s build<br />
              <span className="text-stroke">something</span><br />
              together.
            </h2>
            <p className="font-mono text-sm text-text-2 leading-[1.9] max-w-[420px] mb-10">
              I&apos;m actively seeking full-time software engineering roles in Singapore or remotely.
              Whether you have a role, a project, or just want to chat tech — I&apos;d love to hear from you.
            </p>
            <div className="flex gap-4 mt-6">
              <a
                href="/Muthumani_Resume.pdf"
                className="inline-block font-mono text-sm tracking-widest bg-accent text-black px-8 py-3.5 rounded transition-all duration-200 hover:opacity-85 hover:-translate-y-0.5"
                download
              >
                Download CV
              </a>

              <a
                href="mailto:gmuthumani2004@gmail.com"
                className="inline-block font-mono text-sm tracking-widest bg-accent text-black px-8 py-3.5 rounded transition-all duration-200 hover:opacity-85 hover:-translate-y-0.5"
              >
                say hello →
              </a>
            </div>

            <div className="flex items-center gap-3 font-mono text-xs text-gray-400 mt-8">
              <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
              Available for full-time roles · Singapore-based
            </div>
          </div>

          {/* Right — socials */}
          <div>
            <p className="font-mono text-[0.65rem] text-text-3 tracking-[0.14em] mb-5">
              find me elsewhere
            </p>
            <ul className="flex flex-col gap-2.5">
              {SOCIAL.map(s => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 border border-border rounded-lg px-4 py-3.5 text-text-2 hover:border-accent hover:bg-accent/5 transition-all duration-200 group"
                  >
                    <span className="font-mono text-xs text-text flex-1">{s.label}</span>
                    <span className="font-mono text-[0.65rem] text-text-3">{s.handle}</span>
                    <span className="text-accent opacity-0 group-hover:opacity-100 transition-opacity text-sm">↗</span>
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-6 bg-bg-2 border border-border rounded-lg p-4">
              <p className="font-mono text-[0.65rem] text-text-3 tracking-widest mb-2">phone</p>
              <p className="font-mono text-sm text-text">+65 8315 3727</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-border px-8 py-5">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <p className="font-mono text-[0.68rem] text-text-3">
            designed & built by <span className="text-text-2">Ganesan Muthumani</span>
          </p>
          <p className="font-mono text-[0.66rem] text-text-3">
            © {new Date().getFullYear()} · made with curiosity
          </p>
        </div>
      </div>
    </section>
  );
}
