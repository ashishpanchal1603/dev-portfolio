"use client";

import { motion } from "framer-motion";
import { GraduationCap, MapPin, Briefcase, Calendar } from "lucide-react";
import { portfolioData } from "../data/portfolio";

export default function About() {
  const stats = [
    { number: "3.5+", label: "Years Experience" },
    { number: "Next.js / React", label: "Core Specialty" },
    { number: "30%", label: "UI Dev Time Cut" },
    { number: "90+", label: "Performance Targets" },
  ];

  const highlights = [
    "Developed reusable React & Tailwind components, reducing UI development times by 30% at Nimblechapps.",
    "Led complete migrations of complex application state from Redux to React Query.",
    "B.E. in Information Technology with a strong academic background (CGPA: 8.09).",
    "Expertise in integrating real-time services including WebSockets and Sendbird SDK.",
  ];

  return (
    <section id="about" className="py-24 bg-[#050505] relative overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-primary/3 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Title */}
        <div className="flex flex-col mb-16">
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="text-primary text-sm font-semibold tracking-widest uppercase mb-2"
          >
            01 . Profile
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold tracking-tight text-white"
          >
            About Me
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Summary Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col gap-6"
          >
            <h3 className="text-xl md:text-2xl font-bold text-zinc-100 leading-snug">
              Designing scalable frontend architectures & modern user experiences.
            </h3>
            <p className="text-text-muted text-base sm:text-lg leading-relaxed">
              {portfolioData.summary}
            </p>

            {/* Quick stats grid */}
            <div className="grid grid-cols-2 gap-4 mt-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="p-6 rounded-2xl bg-zinc-900/40 border border-white/5 flex flex-col gap-1.5"
                >
                  <span className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                    {stat.number}
                  </span>
                  <span className="text-xs sm:text-sm text-text-muted font-medium">{stat.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Details / Highlights Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 flex flex-col gap-8 lg:pl-6"
          >
            <div className="p-6 rounded-2xl bg-zinc-900/20 border border-white/5 flex flex-col gap-4">
              <h4 className="text-sm font-semibold text-zinc-200 uppercase tracking-wider mb-2">
                Quick Facts
              </h4>
              
              <div className="flex items-center gap-3.5 text-zinc-300">
                <div className="p-2.5 rounded-lg bg-zinc-900 border border-white/5 text-primary">
                  <MapPin size={18} />
                </div>
                <div>
                  <div className="text-xs text-text-muted">Location</div>
                  <div className="text-sm font-semibold">{portfolioData.location}</div>
                </div>
              </div>

              <div className="flex items-center gap-3.5 text-zinc-300">
                <div className="p-2.5 rounded-lg bg-zinc-900 border border-white/5 text-primary">
                  <Briefcase size={18} />
                </div>
                <div>
                  <div className="text-xs text-text-muted">Current Role</div>
                  <div className="text-sm font-semibold">
                    Jr Software Engineer at Nimblechapps
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3.5 text-zinc-300">
                <div className="p-2.5 rounded-lg bg-zinc-900 border border-white/5 text-primary">
                  <GraduationCap size={18} />
                </div>
                <div>
                  <div className="text-xs text-text-muted">Education</div>
                  <div className="text-sm font-semibold">
                    {portfolioData.education.degree}
                  </div>
                  <div className="text-xs text-text-muted">
                    {portfolioData.education.institution} (CGPA: 8.09)
                  </div>
                </div>
              </div>
            </div>

            {/* Career highlights list */}
            <div>
              <h4 className="text-sm font-semibold text-zinc-200 uppercase tracking-wider mb-4">
                Career Highlights
              </h4>
              <ul className="flex flex-col gap-3">
                {highlights.map((highlight, index) => (
                  <li key={index} className="flex items-start gap-2.5 text-sm text-text-muted">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
