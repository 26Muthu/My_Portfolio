/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["'Syne'", "sans-serif"],
        mono: ["'DM Mono'", "monospace"],
      },
      colors: {
        bg: "#090909",
        "bg-2": "#101010",
        "bg-3": "#181818",
        border: "#1e1e1e",
        "border-2": "#2a2a2a",
        text: "#e6e3dc",
        "text-2": "#7a7a7a",
        "text-3": "#3a3a3a",
        accent: "#c8f542",
        "accent-dim": "#8aaa2a",
      },
      animation: {
        blink: "blink 1s step-end infinite",
        scrollDot: "scrollDot 1.8s ease-in-out infinite",
        fadeUp: "fadeUp 0.9s cubic-bezier(.16,1,.3,1) both",
      },
      keyframes: {
        blink: { "0%,100%": { opacity: 1 }, "50%": { opacity: 0 } },
        scrollDot: {
          "0%": { top: "-6px", opacity: 1 },
          "100%": { top: "100%", opacity: 0 },
        },
        fadeUp: {
          from: { opacity: 0, transform: "translateY(32px)" },
          to: { opacity: 1, transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
