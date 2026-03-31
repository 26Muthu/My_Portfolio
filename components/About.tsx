"use client";
import { motion } from "framer-motion";
import Image from "next/image";

// import img1 from "../public/img/IMG_20260121_161606.jpg.jpeg";
// import img2 from "../img/IMG_20260121_161606.jpg.jpeg";
// import img3 from "../img/IMG_20260121_161606.jpg.jpeg";
// import img4 from "../img/IMG_20260121_161606.jpg.jpeg";
// import img5 from "../img/IMG_20260121_161606.jpg.jpeg";

const SKILLS = [
  { cat: "Languages", items: ["Java", "C", "JavaScript", "C#"] },
  { cat: "Frontend", items: ["React.js", "HTML", "CSS", "Figma"] },
  { cat: "Backend", items: ["Node.js", "Express.js", "Spring Boot", ".NET"] },
  { cat: "Databases", items: ["MS SQL Server", "MySQL", "Firebase"] },
  { cat: "Security", items: ["Bcrypt", "Burp Suite", "ZAP Tools", "Access Control"] },
  { cat: "Tools", items: ["Git", "Postman", "SSMS", "CI/CD"] },
];


<img 
    src="/img/IMG_20260121_161606.jpg.jpeg" 
    alt="GM" 
    className="w-full h-full object-cover rounded-md"
  />
export default function About() {
  return (
    <section id="about" className="border-t border-border py-32 px-8">
      <div className="max-w-5xl mx-auto">
        {/* Section label */}
        <div className="flex items-center gap-3 font-mono text-[0.72rem] text-accent tracking-[0.1em] mb-16">
          <span className="opacity-60">01.</span>
          <span>about me</span>
          <div className="flex-1 h-px bg-border max-w-[240px]" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-16 items-start">
          {/* Text */}
          <div>
            <h2 className="reveal font-display font-bold tracking-tight leading-[1.1] text-text mb-8"
              style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)" }}>
              Self-driven engineer who<br />
              <span className="text-accent">builds for real impact.</span>
            </h2>

            <div className="reveal reveal-d1 flex flex-col gap-5 font-mono text-sm text-text-2 leading-[1.9] max-w-[520px] mb-10">
              <p>
                I&apos;m a Computer Science graduate from Alagappa Chettiar Government College of Engineering and Technology (CGPA 7.231), with hands-on experience in full-stack web development through internships and personal projects.
              </p>
              <p>
                I&apos;ve worked at Jetz ERP Pvt. Ltd building production systems with Node.js, React.js, Express.js, and MS SQL Server — and I&apos;m passionate about solving real-world problems with clean, scalable code.
              </p>
              <p>
                Currently based in Singapore and actively looking for full-time software engineering roles. I bring fresh energy, a strong technical foundation, and a drive to keep learning.
              </p>
            </div>

            {/* Skills grid */}
            <div className="reveal reveal-d2">
              <p className="font-mono text-[0.68rem] text-text-3 tracking-[0.12em] mb-5">
                technologies i work with
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-5">
                {SKILLS.map(group => (
                  <div key={group.cat}>
                    <p className="font-mono text-[0.65rem] text-accent tracking-widest mb-2 opacity-70">
                      {group.cat}
                    </p>
                    <ul className="flex flex-col gap-1">
                      {group.items.map(item => (
                        <li key={item} className="flex items-center gap-2 font-mono text-xs text-text-2">
                          <span className="w-1 h-1 rounded-full bg-accent flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Profile card */}
          <div className="reveal reveal-d2 lg:sticky top-28">
            <div className="relative">
              {/* Card */}
              <div className="bg-bg-2 border border-border rounded-lg p-6 flex flex-col gap-5">
                {/* Avatar placeholder */}
                <div className="w-full aspect-square bg-bg-3 border border-border-2 rounded-md flex items-center justify-center font-display font-extrabold text-5xl text-text-3 tracking-tight">
                   <motion.div
        initial={{ scale: 1 }}
        animate={{ scale: 0, opacity: 0 }}
        transition={{ duration: 2 }}
        className="absolute grid grid-cols-2 gap-2"
      >
        <Image src="/img/IMG_20260121_161606.jpg.jpeg" alt="" width={500}
  height={300} className="w-24 h-24 object-cover"/>
        <Image src="/img/IMG_20260121_161606.jpg.jpeg" alt="" width={300}
  height={150} className="w-24 h-24 object-cover"/>
  <Image src="/img/IMG_20260121_161606.jpg.jpeg" alt="" width={150}
  height={300} className="w-24 h-24 object-cover"/>
        <Image src="/img/IMG_20260121_161606.jpg.jpeg" alt="" width={300}
  height={300} className="w-24 h-24 object-cover"/>
        <Image src="/img/IMG_20260121_161606.jpg.jpeg" alt="" width={300}
  height={300} className="w-24 h-24 object-cover"/>
  <Image src="/img/IMG_20260121_161606.jpg.jpeg" alt="" width={300}
  height={300} className="w-24 h-24 object-cover"/>
      </motion.div>

      {/* Final Single Image */}
      <motion.div
        initial={{ scale: 1 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, duration: 2 }}
        className="absolute"
      >
        <Image
          src="/img/IMG_20260121_161606.jpg.jpeg"
          alt="profile"
          width={300}
  height={300}
          className="w-48 h-48 object-cover rounded-md"
        />
      </motion.div>

                </div>

                <div>
                  <p className="font-display font-bold text-lg text-text tracking-tight">Ganesan Muthumani</p>
                  <p className="font-mono text-xs text-accent tracking-widest mt-0.5">Full-Stack Developer</p>
                </div>

                <div className="flex flex-col gap-2.5 font-mono text-xs text-text-2">
                  {[
                    { icon: "📍", val: "Singapore, 600055" },
                    { icon: "📧", val: "gmuthumani2004@gmail.com" },
                    { icon: "📞", val: "+65 8315 3727" },
                  ].map(i => (
                    <div key={i.icon} className="flex items-center gap-2">
                      <span>{i.icon}</span>
                      <span className="break-all">{i.val}</span>
                    </div>
                  ))}
                </div>

                <div className="flex gap-2">
                  <a
                    href="https://www.linkedin.com/in/muthumani-g/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center font-mono text-[0.68rem] border border-border-2 text-text-2 py-2 rounded transition-all hover:border-accent hover:text-accent"
                  >
                    LinkedIn
                  </a>
                  <a
                    href="https://github.com/26Muthu/My_Works"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center font-mono text-[0.68rem] border border-border-2 text-text-2 py-2 rounded transition-all hover:border-accent hover:text-accent"
                  >
                    GitHub
                  </a>
                </div>
              </div>
              {/* Offset border accent */}
              <div className="absolute inset-0 border border-accent rounded-lg translate-x-2.5 translate-y-2.5 -z-10 opacity-30" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


