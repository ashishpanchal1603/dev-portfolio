"use client";

import { motion } from "framer-motion";
import {
  Layers,
  Code,
  Sparkles,
  Server,
  Workflow,
  Share2,
} from "lucide-react";
import { portfolioData } from "../data/portfolio";

export default function Skills() {
  // Map icons to categories
  const getCategoryIcon = (category: string) => {
    switch (category.toLowerCase()) {
      case "frontend":
        return <Layers className="w-5 h-5" />;
      case "languages":
        return <Code className="w-5 h-5" />;
      case "styling":
        return <Sparkles className="w-5 h-5" />;
      case "backend":
        return <Server className="w-5 h-5" />;
      case "api & data":
        return <Share2 className="w-5 h-5" />;
      case "tools & workflow":
        return <Workflow className="w-5 h-5" />;
      default:
        return <Code className="w-5 h-5" />;
    }
  };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring" as const, stiffness: 100, damping: 20 },
    },
  };

  return (
    <section id="skills" className="py-24 bg-black relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute left-0 bottom-1/4 w-[400px] h-[400px] rounded-full bg-secondary/3 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col mb-16">
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="text-primary text-sm font-semibold tracking-widest uppercase mb-2"
          >
            02 . Expertise
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold tracking-tight text-white"
          >
            Skills &amp; Technologies
          </motion.h2>
        </div>

        {/* Skill Groups Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {portfolioData.skills.map((skillGroup, index) => (
            <motion.div
              key={skillGroup.category}
              variants={cardVariants}
              className="group p-8 rounded-2xl bg-zinc-900/30 border border-white/5 hover:border-primary/45 transition-all duration-300 relative overflow-hidden interactive-card"
            >
              {/* Card Hover Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              {/* Group Title Area */}
              <div className="flex items-center gap-3.5 mb-8">
                <div className="p-3 rounded-xl bg-zinc-900 border border-white/5 text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  {getCategoryIcon(skillGroup.category)}
                </div>
                <h3 className="text-lg font-bold text-zinc-100 tracking-tight">
                  {skillGroup.category}
                </h3>
              </div>

              {/* Skill Items List */}
              <div className="flex flex-wrap gap-2.5">
                {skillGroup.items.map((skill) => (
                  <motion.span
                    key={skill}
                    whileHover={{ y: -3, scale: 1.03 }}
                    className="px-4 py-2 text-sm font-medium text-zinc-300 bg-zinc-950/60 border border-white/5 hover:border-white/20 hover:text-white rounded-xl cursor-default transition-all duration-200 hover:shadow-md hover:shadow-primary/5"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
