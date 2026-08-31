"use client";

import { motion } from "framer-motion";
import { Code2, Layers, Gauge, Search, Network } from "lucide-react";
import { portfolioData } from "../data/portfolio";

export default function Services() {
  // Map icon string name to actual Lucide component
  const getIconComponent = (iconName: string) => {
    switch (iconName) {
      case "Code2":
        return <Code2 className="w-6 h-6" />;
      case "Layers":
        return <Layers className="w-6 h-6" />;
      case "Gauge":
        return <Gauge className="w-6 h-6" />;
      case "Search":
        return <Search className="w-6 h-6" />;
      case "Network":
        return <Network className="w-6 h-6" />;
      default:
        return <Code2 className="w-6 h-6" />;
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
    <section id="services" className="py-24 bg-[#050505] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-primary/3 blur-[120px] pointer-events-none" />

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
            05 . Capabilities
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold tracking-tight text-white"
          >
            Services &amp; Solutions
          </motion.h2>
        </div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {portfolioData.services.map((service, idx) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              whileHover={{ y: -6 }}
              className="group p-8 rounded-2xl bg-zinc-900/35 border border-white/5 hover:border-secondary/40 transition-all duration-350 overflow-hidden relative interactive-card"
            >
              {/* Radial gradient shine on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

              {/* Icon component indicator */}
              <div className="p-3.5 rounded-xl bg-zinc-900 border border-white/5 text-secondary group-hover:text-white group-hover:bg-secondary transition-all duration-300 w-fit mb-6 group-hover:scale-105">
                {getIconComponent(service.iconName)}
              </div>

              {/* Title and details */}
              <h3 className="text-xl font-bold text-zinc-100 mb-3 group-hover:text-white tracking-tight">
                {service.title}
              </h3>
              
              <p className="text-sm sm:text-base text-text-muted leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
