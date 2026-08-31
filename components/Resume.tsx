"use client";

import { motion } from "framer-motion";
import { ArrowDownToLine, Eye, FileText } from "lucide-react";

export default function Resume() {
  return (
    <section className="py-20 bg-black relative overflow-hidden">
      {/* Dynamic backdrop glows */}
      <div className="absolute right-10 bottom-0 w-[300px] h-[300px] rounded-full bg-secondary/5 blur-[90px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, type: "spring", stiffness: 80 }}
          className="p-8 md:p-12 rounded-3xl bg-zinc-900/25 border border-white/5 backdrop-blur-sm flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden"
        >
          {/* Subtle glow border */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-50 pointer-events-none" />

          {/* Left Area: Text details */}
          <div className="flex items-start gap-4 md:gap-6 flex-1 text-center md:text-left flex-col md:flex-row">
            <div className="p-4 rounded-2xl bg-zinc-900 border border-white/10 text-primary self-center md:self-start shrink-0">
              <FileText size={32} />
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2.5 tracking-tight">
                Want to know more about my experience?
              </h3>
              <p className="text-sm sm:text-base text-text-muted max-w-xl leading-relaxed">
                Download my complete resume for a detailed view of my qualifications, achievements,
                technical skills, and project history, or view it directly in your browser.
              </p>
            </div>
          </div>

          {/* Right Area: Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3.5 w-full md:w-auto shrink-0">
            <a
              href="/resume.pdf"
              download="Ashish_Panchal_Resume.pdf"
              className="flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-semibold bg-white text-black hover:bg-zinc-200 transition-colors cursor-pointer w-full sm:w-auto"
            >
              <ArrowDownToLine size={16} />
              Download Resume
            </a>
            
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-semibold bg-zinc-950 border border-white/5 hover:border-white/15 text-white transition-colors cursor-pointer w-full sm:w-auto"
            >
              <Eye size={16} />
              View Resume
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
