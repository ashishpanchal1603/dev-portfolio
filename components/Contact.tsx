"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle, AlertTriangle } from "lucide-react";
import { Github, Linkedin } from "./Icons";
import { portfolioData } from "../data/portfolio";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const validate = () => {
    let isValid = true;
    const tempErrors = { name: "", email: "", message: "" };

    if (!formData.name.trim()) {
      tempErrors.name = "Name is required";
      isValid = false;
    }

    if (!formData.email.trim()) {
      tempErrors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Please enter a valid email address";
      isValid = false;
    }

    if (!formData.message.trim()) {
      tempErrors.message = "Message is required";
      isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-[#050505] relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute right-0 bottom-0 w-[500px] h-[500px] rounded-full bg-primary/3 blur-[140px] pointer-events-none" />
      <div className="absolute left-1/4 top-1/4 w-[350px] h-[350px] rounded-full bg-secondary/3 blur-[120px] pointer-events-none" />

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
            06 . Connection
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold tracking-tight text-white"
          >
            Get In Touch
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          {/* Contact Details Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-6 tracking-tight">
                Let&apos;s build something great together.
              </h3>
              <p className="text-text-muted text-base leading-relaxed mb-8 max-w-md">
                I am open to new professional frontend developer roles and interesting projects.
                Feel free to drop a message, send an email, or reach out on my socials!
              </p>

              {/* Direct Details list */}
              <div className="flex flex-col gap-6">
                <a
                  href={`mailto:${portfolioData.email}`}
                  className="flex items-center gap-4 text-zinc-300 hover:text-white transition-colors group cursor-pointer"
                >
                  <div className="p-3.5 rounded-xl bg-zinc-900 border border-white/5 text-primary group-hover:scale-105 transition-transform duration-300">
                    <Mail size={18} />
                  </div>
                  <div>
                    <div className="text-xs text-text-muted">Email</div>
                    <div className="text-sm font-semibold group-hover:underline">{portfolioData.email}</div>
                  </div>
                </a>

                <a
                  href={`tel:${portfolioData.phone}`}
                  className="flex items-center gap-4 text-zinc-300 hover:text-white transition-colors group cursor-pointer"
                >
                  <div className="p-3.5 rounded-xl bg-zinc-900 border border-white/5 text-primary group-hover:scale-105 transition-transform duration-300">
                    <Phone size={18} />
                  </div>
                  <div>
                    <div className="text-xs text-text-muted">Phone</div>
                    <div className="text-sm font-semibold group-hover:underline">{portfolioData.phone}</div>
                  </div>
                </a>

                <div className="flex items-center gap-4 text-zinc-300">
                  <div className="p-3.5 rounded-xl bg-zinc-900 border border-white/5 text-primary">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <div className="text-xs text-text-muted">Location</div>
                    <div className="text-sm font-semibold">{portfolioData.location}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-3 mt-12">
              <a
                href={portfolioData.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 rounded-xl bg-zinc-900 border border-white/5 hover:border-primary/30 text-zinc-400 hover:text-white transition-all duration-300 cursor-pointer hover:shadow-lg hover:shadow-primary/5"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={20} />
              </a>
              <a
                href={portfolioData.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 rounded-xl bg-zinc-900 border border-white/5 hover:border-primary/30 text-zinc-400 hover:text-white transition-all duration-300 cursor-pointer hover:shadow-lg hover:shadow-primary/5"
                aria-label="GitHub Profile"
              >
                <Github size={20} />
              </a>
            </div>
          </motion.div>

          {/* Contact Form Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-7"
          >
            <div className="p-8 rounded-3xl bg-zinc-900/30 border border-white/5 relative overflow-hidden h-full">
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                {/* Form Row Name */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-xs font-semibold text-zinc-300 uppercase tracking-wider">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className={`px-4 py-3 bg-zinc-950/60 rounded-xl border ${
                      errors.name ? "border-red-500/50" : "border-white/5 focus:border-primary/60"
                    } text-sm text-white placeholder-zinc-600 focus:outline-none transition-colors w-full`}
                  />
                  {errors.name && <span className="text-xs text-red-500 font-medium">{errors.name}</span>}
                </div>

                {/* Form Row Email */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-xs font-semibold text-zinc-300 uppercase tracking-wider">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    className={`px-4 py-3 bg-zinc-950/60 rounded-xl border ${
                      errors.email ? "border-red-500/50" : "border-white/5 focus:border-primary/60"
                    } text-sm text-white placeholder-zinc-600 focus:outline-none transition-colors w-full`}
                  />
                  {errors.email && <span className="text-xs text-red-500 font-medium">{errors.email}</span>}
                </div>

                {/* Form Row Message */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="text-xs font-semibold text-zinc-300 uppercase tracking-wider">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Describe your project or opportunities..."
                    className={`px-4 py-3 bg-zinc-950/60 rounded-xl border ${
                      errors.message ? "border-red-500/50" : "border-white/5 focus:border-primary/60"
                    } text-sm text-white placeholder-zinc-600 focus:outline-none transition-colors w-full resize-none`}
                  />
                  {errors.message && <span className="text-xs text-red-500 font-medium">{errors.message}</span>}
                </div>

                {/* Submit Action */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex items-center justify-center gap-2 px-6 py-3.5 bg-white hover:bg-zinc-200 disabled:bg-zinc-800 text-black disabled:text-zinc-500 font-semibold rounded-full w-full sm:w-fit transition-colors duration-300 cursor-pointer disabled:cursor-not-allowed text-sm shadow-md"
                >
                  {isSubmitting ? (
                    "Sending Message..."
                  ) : (
                    <>
                      Send Message
                      <Send size={14} />
                    </>
                  )}
                </button>

                {/* Message status outputs */}
                {submitStatus === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2.5 p-4 rounded-xl bg-accent/10 border border-accent/20 text-accent text-sm font-semibold"
                  >
                    <CheckCircle size={16} />
                    Thank you! Your message has been sent successfully.
                  </motion.div>
                )}

                {submitStatus === "error" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2.5 p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm font-semibold"
                  >
                    <AlertTriangle size={16} />
                    Failed to send message. Please try again.
                  </motion.div>
                )}
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
