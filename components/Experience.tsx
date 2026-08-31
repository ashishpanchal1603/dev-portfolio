"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { Briefcase, Calendar, MapPin } from "lucide-react";
import { portfolioData } from "../data/portfolio";

export default function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <section
      id="experience"
      ref={containerRef}
      className="py-24 bg-[#050505] relative overflow-hidden"
    >
      {/* Background glow effects */}
      <div className="absolute right-0 top-1/4 w-[400px] h-[400px] rounded-full bg-primary/3 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Title */}
        <div className="flex flex-col mb-20">
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="text-primary text-sm font-semibold tracking-widest uppercase mb-2"
          >
            03 . Journey
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold tracking-tight text-white"
          >
            Work Experience
          </motion.h2>
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-4xl mx-auto mt-12">
          {/* Static Track Line */}
          <div className="absolute top-0 bottom-0 left-4 md:left-1/2 -translate-x-[0.5px] w-[1px] bg-zinc-800" />

          {/* Scrolling Draw Line */}
          <motion.div
            style={{ scaleY }}
            className="absolute top-0 bottom-0 left-4 md:left-1/2 -translate-x-[1px] w-[2px] bg-gradient-to-b from-primary via-secondary to-accent origin-top"
          />

          {/* Timeline Items */}
          <div className="flex flex-col gap-16 md:gap-20">
            {portfolioData.experience.map((exp, index) => {
              const isEven = index % 2 === 0;

              return (
                <div
                  key={index}
                  className={`relative flex flex-col md:flex-row ${
                    isEven ? "md:flex-row-reverse" : ""
                  } items-start`}
                >
                  {/* Timeline node dot */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 top-1.5 z-20 flex items-center justify-center">
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.4, delay: 0.2 }}
                      className="w-4 h-4 rounded-full bg-black border-[3px] border-primary group-hover:border-white transition-colors duration-300"
                    />
                  </div>

                  {/* Card Section */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? 40 : -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ type: "spring", stiffness: 100, damping: 20 }}
                    className={`w-full md:w-[calc(50%-2rem)] ml-10 md:ml-0 ${
                      isEven ? "md:pr-8" : "md:pl-8"
                    }`}
                  >
                    <div className="p-6 rounded-2xl bg-zinc-900/40 border border-white/5 hover:border-white/10 transition-all duration-300 relative group">
                      {/* Hover glow */}
                      <div className="absolute inset-0 bg-gradient-to-br from-white/1 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl" />

                      {/* Header details */}
                      <div className="flex flex-col mb-4">
                        <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5">
                          <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-primary transition-colors duration-300">
                            {exp.position}
                          </h3>
                          <span className="px-3 py-1 rounded-full text-xs font-medium bg-zinc-800 text-zinc-300 border border-zinc-700/50 flex items-center gap-1.5">
                            <Calendar size={12} />
                            {exp.duration}
                          </span>
                        </div>

                        <div className="flex flex-wrap items-center gap-3 text-sm text-text-muted">
                          <span className="font-semibold text-zinc-300">{exp.company}</span>
                          <span className="w-1.5 h-1.5 rounded-full bg-zinc-800" />
                          <span className="flex items-center gap-1">
                            <MapPin size={12} />
                            {exp.location}
                          </span>
                        </div>
                      </div>

                      {/* Job responsibilities list */}
                      <ul className="flex flex-col gap-2.5 mb-6 text-sm text-text-muted leading-relaxed">
                        {exp.responsibilities.map((resp, idx) => (
                          <li key={idx} className="flex items-start gap-2.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Technology Pills */}
                      <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/5">
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 text-xs font-semibold bg-white/5 text-zinc-300 rounded-lg border border-white/5"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
