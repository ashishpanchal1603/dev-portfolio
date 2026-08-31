"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { ArrowRight, ArrowDown, Mail, ArrowUpRight } from "lucide-react";
import { portfolioData } from "../data/portfolio";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      // Calculate relative coordinates in pixels
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      setMousePosition({ x, y });
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("mousemove", handleMouseMove);
    }
    return () => {
      if (container) {
        container.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, []);

  const handleScrollTo = (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const navbarHeight = 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - navbarHeight;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring" as const, stiffness: 100, damping: 20 },
    },
  };

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center pt-24 pb-12 overflow-hidden bg-black"
      style={
        {
          "--x": `${mousePosition.x}px`,
          "--y": `${mousePosition.y}px`,
        } as React.CSSProperties
      }
    >
      {/* Background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#111_1px,transparent_1px),linear-gradient(to_bottom,#111_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-35" />

      {/* Dynamic Cursor Reactive Glow */}
      <div className="absolute inset-0 pointer-events-none radial-glow transition-opacity duration-300 hidden md:block" />

      {/* Ambient static glows */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-primary/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-96 h-96 rounded-full bg-secondary/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 text-center flex flex-col items-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center max-w-4xl"
        >
          {/* Badge Indicator */}
          <motion.div
            variants={itemVariants}
            className="mb-8 flex items-center gap-2 px-4 py-1.5 rounded-full bg-zinc-900/80 border border-zinc-800 backdrop-blur-sm"
          >
            <span className="w-2 h-2 rounded-full bg-accent animate-ping" />
            <span className="text-xs font-semibold text-zinc-300">
              Available for Frontend / React Opportunities
            </span>
          </motion.div>

          {/* Title */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight mb-6 leading-[1.1] text-gradient-primary"
          >
            {portfolioData.subtitle}
          </motion.h1>

          {/* Subtitle Tech Pills */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center justify-center gap-3 mb-8"
          >
            {["React.js", "Next.js", "TypeScript", "Tailwind CSS"].map((tech, i) => (
              <span
                key={tech}
                className="px-4 py-1 rounded-full text-sm font-medium bg-white/5 border border-white/10 text-zinc-200"
              >
                {tech}
              </span>
            ))}
          </motion.div>

          {/* Professional summary text */}
          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg md:text-xl text-text-muted max-w-2xl mb-12 leading-relaxed"
          >
            I&apos;m a <span className="text-white font-semibold">{portfolioData.title}</span> with 4+ years of
            professional experience. I specialize in crafting performant server-side rendered interfaces, fluid UI
            architectures, and robust application flows.
          </motion.p>

          {/* Call to Actions */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full sm:w-auto"
          >
            <button
              onClick={(e) => handleScrollTo(e, "projects")}
              className="group flex items-center justify-center gap-2 px-8 py-4 bg-white text-black hover:bg-zinc-200 font-semibold rounded-full w-full sm:w-auto transition-all duration-300 cursor-pointer shadow-lg shadow-white/5"
            >
              View My Work
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
            </button>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-8 py-4 bg-zinc-900 border border-zinc-800 hover:border-zinc-700 text-white font-semibold rounded-full w-full sm:w-auto transition-all duration-300 hover:bg-zinc-800/80 cursor-pointer"
            >
              Download Resume
              <ArrowUpRight size={18} />
            </a>

            <button
              onClick={(e) => handleScrollTo(e, "contact")}
              className="flex items-center justify-center gap-1.5 text-zinc-400 hover:text-white px-4 py-2 text-sm font-semibold transition-colors duration-300 cursor-pointer"
            >
              <Mail size={16} />
              Let&apos;s Talk
            </button>
          </motion.div>
        </motion.div>

        {/* Floating chevron at bottom */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 1.2,
            duration: 0.8,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="absolute bottom-8 cursor-pointer text-zinc-500 hover:text-white transition-colors duration-300 hidden md:block"
          onClick={(e) => handleScrollTo(e as any, "about")}
        >
          <ArrowDown size={24} />
        </motion.div>
      </div>
    </section>
  );
}
