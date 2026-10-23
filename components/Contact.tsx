"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { DATA } from "@/data/resume";
import {
  ArrowUpRight,
  Check,
  MessageCircle,
  MessageSquare,
  Send,
} from "lucide-react";

export function Contact() {
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    projectType: "Full Web Application Build",
    timeline: "1-3 Months",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(DATA.contactEmail);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.email || !formState.message) return;

    const subject = encodeURIComponent(
      `Project Inquiry: ${formState.projectType} [via Portfolio]`,
    );
    const body = encodeURIComponent(
      `Hi Rdxbuilds,\n\nName: ${formState.name}\nEmail: ${formState.email}\nScope: ${formState.projectType}\nTimeline: ${formState.timeline}\n\nProject Overview:\n${formState.message}\n`,
    );

    window.location.href = `mailto:${DATA.contactEmail}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="py-20 md:py-28 border-t border-slate-200/80 dark:border-slate-800/80"
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Direct Invitation & Contact Info */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-electric-600 dark:text-electric-400">
                <span className="h-px w-6 bg-electric-600 dark:bg-electric-400" />
                <span>Get In Touch</span>
              </div>
              <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white text-balance">
                Let&apos;s build something exceptional together.
              </h2>
              <p className="mt-4 text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                Whether you need to prototype a high-stakes MVP, overhaul an
                existing product for speed, or build out an investor-ready web
                architecture, I am open to discussing select new opportunities.
              </p>

              {/* Direct WhatsApp Contact Card */}
              <div className="mt-8 rounded-2xl glass-panel p-5 shadow-sm">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Direct Inquiries
                </p>

                <div className="mt-3 flex items-center justify-between gap-3">
                  <a
                    href={`https://wa.me/${DATA.whatsappNumber.replace(/\D/g, "")}?text=${encodeURIComponent(
                      "Hello, I came across your portfolio and would like to discuss a project with you."
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Contact via WhatsApp"
                    className="hidden min-w-0 items-center gap-2 font-mono text-sm font-semibold text-emerald-600 hover:underline dark:text-emerald-400"
                  >
                    <MessageCircle className="size-4 shrink-0" />
                    <span className="hiddentruncate">{DATA.whatsappNumber}</span>
                  </a>

                  <a
                    href={`https://wa.me/${DATA.whatsappNumber.replace(/\D/g, "")}?text=${encodeURIComponent(
                      "Hello, I came across your portfolio and would like to discuss a project with you."
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex shrink-0 items-center gap-1.5 rounded-lg bg-[#25D366] px-3 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-[#1EBE5D] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2"
                  >
                    <MessageCircle className="size-3.5" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>

              {/* Social Channels */}
              <div className="mt-8 space-y-3">
                <p className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                  Connect & Verify
                </p>

                <div className="flex flex-wrap gap-x-5 gap-y-3">
                  {Object.entries(DATA.contact.social).map(([name, social]) => {
                    const isWhatsApp = name.toLowerCase() === "whatsapp";

                    const href = isWhatsApp
                      ? `https://wa.me/${DATA.whatsappNumber.replace(/\D/g, "")}?text=${encodeURIComponent(
                        "Hello, I came across your portfolio and would like to discuss a project with you.",
                      )}`
                      : social.url;

                    return (
                      <a
                        key={name}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={
                          isWhatsApp ? "Contact via WhatsApp" : `Visit ${name} profile`
                        }
                        className={`inline-flex items-center gap-1.5 text-xs font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric-500 ${isWhatsApp
                            ? "text-[#25D366] hover:text-[#1EBE5D]"
                            : "text-slate-700 hover:text-electric-600 dark:text-slate-300 dark:hover:text-electric-400"
                          }`}
                      >
                        <social.icon className="size-3.5" />
                        <span>{name}</span>
                        <ArrowUpRight className="size-3 text-slate-400" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Availability Notice */}
            <div className="mt-8 pt-6 border-t border-slate-200/80 dark:border-slate-800/80 text-xs text-slate-500 dark:text-slate-400">
              <span className="font-semibold text-slate-800 dark:text-slate-200">
                Current Status:{" "}
              </span>
              <span>
                Accepting freelance and contract engineering engagements.
                Typical turnaround for initial discovery is within 24 hours.
              </span>
            </div>
          </div>

          {/* Right Column: Structured Inquiry Form with glass-panel */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl glass-panel p-6 sm:p-8 shadow-sm">
              <div className="flex items-center justify-between pb-6 border-b border-slate-200/60 dark:border-slate-800">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    Project Scope & Inquiry
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Fill out the brief below to start the conversation directly.
                  </p>
                </div>
                <MessageSquare className="size-5 text-electric-600 dark:text-electric-400" />
              </div>

              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="size-12 rounded-full bg-electric-100 dark:bg-electric-950/60 text-electric-600 dark:text-electric-400 flex items-center justify-center mx-auto">
                    <Check className="size-6" />
                  </div>
                  <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                    Inquiry Prepared!
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-slate-300 max-w-md mx-auto">
                    Your email client has been opened with your structured
                    brief. If it didn&apos;t open automatically, you can email
                    me directly at{" "}
                    <span className="font-mono font-semibold text-electric-600 dark:text-electric-400">
                      {DATA.contactEmail}
                    </span>
                    .
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="text-xs font-semibold text-electric-600 dark:text-electric-400 hover:underline pt-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric-500"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-6 space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Alex Rivera"
                        value={formState.name}
                        onChange={(e) =>
                          setFormState({ ...formState, name: e.target.value })
                        }
                        className="w-full rounded-lg border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-950/60 px-3.5 py-2 text-xs text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-electric-500"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                        Email Address
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="alex@company.com"
                        value={formState.email}
                        onChange={(e) =>
                          setFormState({ ...formState, email: e.target.value })
                        }
                        className="w-full rounded-lg border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-950/60 px-3.5 py-2 text-xs text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-electric-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                        Engagement Scope
                      </label>
                      <select
                        value={formState.projectType}
                        onChange={(e) =>
                          setFormState({
                            ...formState,
                            projectType: e.target.value,
                          })
                        }
                        className="w-full rounded-lg border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-950/60 px-3 py-2 text-xs text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-electric-500"
                      >
                        <option value="Full Web Application Build">
                          Full Web Application Build
                        </option>
                        <option value="Rapid MVP Prototyping">
                          Rapid MVP Prototyping
                        </option>
                        <option value="Frontend Architecture & UI Overhaul">
                          Frontend Architecture & UI Overhaul
                        </option>
                        <option value="Performance & Core Web Vitals Optimization">
                          Performance Optimization
                        </option>
                        <option value="Technical Advisory & Code Review">
                          Technical Advisory & Code Review
                        </option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                        Target Timeline
                      </label>
                      <select
                        value={formState.timeline}
                        onChange={(e) =>
                          setFormState({
                            ...formState,
                            timeline: e.target.value,
                          })
                        }
                        className="w-full rounded-lg border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-950/60 px-3 py-2 text-xs text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-electric-500"
                      >
                        <option value="Urgent (Under 1 Month)">
                          Urgent (Under 1 Month)
                        </option>
                        <option value="1-3 Months">1-3 Months</option>
                        <option value="Quarterly / Long-term">
                          Quarterly / Long-term
                        </option>
                        <option value="Flexible / Exploration">
                          Flexible / Exploration
                        </option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                      Project Details & Goals
                    </label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Briefly describe what you are building, existing stack or assets, and your primary target outcome..."
                      value={formState.message}
                      onChange={(e) =>
                        setFormState({ ...formState, message: e.target.value })
                      }
                      className="w-full rounded-lg border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-950/60 p-3 text-xs text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-electric-500 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-electric-600 px-6 py-3 text-xs font-semibold text-white shadow-sm hover:bg-electric-500 active:scale-[0.98] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric-500"
                  >
                    <span>Send Project Inquiry</span>
                    <Send className="size-3.5" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
