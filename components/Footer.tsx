"use client";

import { Mail } from "lucide-react";
import { Github, Linkedin } from "./Icons";
import { portfolioData } from "../data/portfolio";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-black border-t border-white/5 relative z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Name and Title */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left gap-1">
          <span className="text-base font-bold text-white tracking-tight">
            {portfolioData.name}
          </span>
          <span className="text-xs text-text-muted">
            Frontend Developer &bull; React &bull; Next.js
          </span>
        </div>

        {/* Dynamic copyright year */}
        <div className="text-xs text-text-muted order-last md:order-none">
          &copy; {currentYear} {portfolioData.name}. All rights reserved.
        </div>

        {/* Social Icons list */}
        <div className="flex items-center gap-4">
          <a
            href={portfolioData.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-500 hover:text-white transition-colors cursor-pointer"
            aria-label="LinkedIn"
          >
            <Linkedin size={18} />
          </a>
          <a
            href={portfolioData.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-500 hover:text-white transition-colors cursor-pointer"
            aria-label="GitHub"
          >
            <Github size={18} />
          </a>
          <a
            href={`mailto:${portfolioData.email}`}
            className="text-zinc-500 hover:text-white transition-colors cursor-pointer"
            aria-label="Email"
          >
            <Mail size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
