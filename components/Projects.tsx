"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, X, Play } from "lucide-react";
import { Github } from "./Icons";
import Image from "next/image";
import { portfolioData, Project } from "../data/portfolio";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring" as const, stiffness: 100, damping: 22 },
    },
  };

  return (
    <section id="projects" className="py-24 bg-black relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute right-0 top-1/3 w-[500px] h-[500px] rounded-full bg-secondary/3 blur-[140px] pointer-events-none" />

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
            04 . Creations
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold tracking-tight text-white"
          >
            Featured Projects
          </motion.h2>
        </div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8"
        >
          {portfolioData.projects.map((project) => {
            const isFeatured = project.featured;

            return (
              <motion.div
                key={project.id}
                variants={cardVariants}
                onClick={() => setSelectedProject(project)}
                className={`group rounded-3xl bg-zinc-900/30 border border-white/5 hover:border-primary/40 transition-all duration-500 overflow-hidden cursor-pointer relative interactive-card ${
                  isFeatured ? "lg:col-span-12" : "lg:col-span-6"
                }`}
              >
                {/* Visual Grid Layout for cards */}
                <div
                  className={`flex flex-col ${
                    isFeatured ? "lg:flex-row lg:h-[400px]" : "h-full"
                  }`}
                >
                  {/* Card Image Area */}
                  <div
                    className={`relative overflow-hidden shrink-0 ${
                      isFeatured ? "lg:w-3/5 h-[240px] lg:h-full" : "h-[220px] w-full"
                    }`}
                  >
                    <Image
                      src={`/images/${project.image}.jpg`}
                      alt={project.name}
                      fill
                      priority={isFeatured}
                      sizes={isFeatured ? "(max-width: 1024px) 100vw, 60vw" : "(max-width: 1024px) 100vw, 40vw"}
                      className="object-cover object-top group-hover:scale-105 transition-transform duration-700 brightness-[0.8] group-hover:brightness-90"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-60" />
                  </div>

                  {/* Card Content Area */}
                  <div
                    className={`p-6 sm:p-8 flex flex-col justify-between flex-1 ${
                      isFeatured ? "lg:w-2/5" : ""
                    }`}
                  >
                    <div className="flex flex-col gap-4">
                      {/* Badge / Header */}
                      <div className="flex items-center gap-2">
                        {isFeatured && (
                          <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-primary text-white uppercase tracking-wider">
                            Featured Project
                          </span>
                        )}
                        <span className="text-xs text-text-muted">Case Study</span>
                      </div>

                      <h3 className="text-2xl font-bold text-white tracking-tight group-hover:text-primary transition-colors duration-300">
                        {project.name}
                      </h3>

                      <p className="text-sm sm:text-base text-text-muted leading-relaxed line-clamp-3">
                        {project.shortDescription}
                      </p>
                    </div>

                    <div className="mt-8 flex flex-col gap-4">
                      {/* Tech Pills */}
                      <div className="flex flex-wrap gap-1.5">
                        {project.technologies.slice(0, 4).map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-0.5 rounded-md text-xs font-semibold bg-white/5 border border-white/5 text-zinc-300"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 4 && (
                          <span className="text-xs text-text-muted self-center font-medium pl-1">
                            +{project.technologies.length - 4} more
                          </span>
                        )}
                      </div>

                      {/* View Action */}
                      <div className="flex items-center gap-2 text-xs font-semibold text-white tracking-wider uppercase group-hover:text-primary transition-colors duration-300 mt-2">
                        View Details
                        <ArrowUpRight
                          size={14}
                          className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* Case Study Modal Dialog */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 overflow-hidden">
            {/* Backdrop Blur overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-black/85 backdrop-blur-md"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="relative w-full max-w-4xl max-h-[85vh] bg-[#0c0c0e] border border-white/10 rounded-3xl overflow-y-auto z-10 shadow-2xl flex flex-col scrollbar-thin"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-zinc-900 border border-white/5 text-zinc-400 hover:text-white hover:border-white/10 transition-colors z-20 focus:outline-none"
                aria-label="Close modal"
              >
                <X size={18} />
              </button>

              {/* Cover Banner */}
              <div className="relative h-[220px] sm:h-[320px] w-full shrink-0">
                <Image
                  src={`/images/${selectedProject.image}.jpg`}
                  alt={selectedProject.name}
                  fill
                  className="object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0e] via-[#0c0c0e]/30 to-transparent" />
                <div className="absolute bottom-6 left-6 sm:left-8 right-6">
                  <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
                    {selectedProject.name}
                  </h3>
                </div>
              </div>

              {/* Modal Body Contents */}
              <div className="p-6 sm:p-8 flex flex-col gap-8">
                {/* Project Links / Badges */}
                <div className="flex flex-wrap items-center gap-3.5 pb-6 border-b border-white/5">
                  {selectedProject.liveUrl && (
                    <a
                      href={selectedProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold bg-white text-black hover:bg-zinc-200 transition-colors cursor-pointer"
                    >
                      <Play size={12} fill="black" />
                      Live Demo
                    </a>
                  )}
                  {selectedProject.githubUrl && (
                    <a
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold bg-zinc-950 border border-white/5 hover:border-white/15 text-white transition-colors cursor-pointer"
                    >
                      <Github size={14} />
                      Source Code
                    </a>
                  )}
                </div>

                {/* Grid Info */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {/* Left Column: Descriptions */}
                  <div className="md:col-span-2 flex flex-col gap-6">
                    <div>
                      <h4 className="text-sm font-semibold text-zinc-400 uppercase tracking-wider mb-2.5">
                        Overview
                      </h4>
                      <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
                        {selectedProject.description}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold text-zinc-400 uppercase tracking-wider mb-2.5">
                        The Challenge
                      </h4>
                      <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
                        {selectedProject.problemSolved}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold text-zinc-400 uppercase tracking-wider mb-2.5">
                        My Solution &amp; Contribution
                      </h4>
                      <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
                        {selectedProject.myContribution}
                      </p>
                    </div>
                  </div>

                  {/* Right Column: Meta details */}
                  <div className="flex flex-col gap-6">
                    <div>
                      <h4 className="text-sm font-semibold text-zinc-400 uppercase tracking-wider mb-3">
                        Technologies
                      </h4>
                      <div className="flex flex-wrap gap-1.5">
                        {selectedProject.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-zinc-900 border border-white/5 text-zinc-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold text-zinc-400 uppercase tracking-wider mb-3">
                        Key Features
                      </h4>
                      <ul className="flex flex-col gap-2 text-xs sm:text-sm text-zinc-300">
                        {selectedProject.keyFeatures.map((feat, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
