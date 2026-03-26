import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ganesan Muthumani — Full-Stack Developer",
  description:
    "Portfolio of Ganesan Muthumani — Full-Stack Developer, Software Programmer, Java & React.js Developer based in Singapore.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
