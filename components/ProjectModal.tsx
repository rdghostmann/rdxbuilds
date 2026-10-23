"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { ProjectItem } from "@/data/resume";
import { CheckCircle2, ExternalLink, X } from "lucide-react";
import { GithubLogo, XLogo, LinkedinLogo } from "@phosphor-icons/react";

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
    >
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-slate-950/75 backdrop-blur-sm transition-opacity"
      />

      {/* Modal Dialog Content with glass-panel */}
      <div className="relative w-full max-w-3xl rounded-2xl glass-panel shadow-2xl overflow-hidden z-10 max-h-[90vh] flex flex-col my-auto border border-slate-200 dark:border-electric-500/20">
        {/* Top Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200/80 dark:border-slate-800/80 bg-slate-50/50 dark:bg-slate-950/50">
          <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
            <span className="font-medium text-electric-600 dark:text-electric-400">
              {project.category}
            </span>
            <span aria-hidden="true">·</span>
            <span>{project.role}</span>
          </div>
          <button
            onClick={onClose}
            aria-label="Close project modal"
            className="rounded-lg p-1 text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white hover:bg-slate-200/60 dark:hover:bg-slate-800 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric-500"
          >
            <X className="size-5" />
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          {/* Main Title & Context */}
          <div>
            <h3
              id="modal-project-title"
              className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white"
            >
              {project.title}
            </h3>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Full Preview Image */}
          <div className=" relative aspect-video rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-slate-950">
            <Image
              src={project.image}
              alt={project.title}
              fill
              sizes="(max-width: 768px) 100vw, 768px"
              className="object-cover"
            />
          </div>

          {/* Architectural Highlights */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Key Engineering Highlights
            </h4>
            <div className="space-y-2">
              {project.highlights.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300"
                >
                  <CheckCircle2 className="size-4 text-electric-600 dark:text-electric-400 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Unboxed Tech Stack */}
          <div className="pt-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
              Technology Stack
            </h4>
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-mono text-slate-600 dark:text-slate-300">
              {project.tags.map((tag, idx) => (
                <React.Fragment key={tag}>
                  <span>{tag}</span>
                  {idx < project.tags.length - 1 && (
                    <span className="text-slate-400" aria-hidden="true">
                      ·
                    </span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Performance & Benchmark Context */}
          <div className="p-4 rounded-xl bg-slate-50/70 dark:bg-slate-950/60 border border-slate-200 dark:border-electric-500/15 text-xs text-slate-600 dark:text-slate-400">
            <span className="font-semibold text-slate-800 dark:text-slate-200">
              Engineering Benchmark:{" "}
            </span>
            <span>{project.metricsContext}</span>
          </div>

          {/* Action Links */}
          <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-slate-200/80 dark:border-slate-800/80">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-electric-600 px-5 py-2.5 text-xs font-semibold text-white shadow-sm hover:bg-electric-500 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric-500"
              >
                <span>Launch Live Project</span>
                <ExternalLink className="size-3.5" />
              </a>
            )}
            {project.repoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-5 py-2.5 text-xs font-semibold text-slate-800 dark:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric-500"
              >
                <GithubLogo className="size-3.5" />
                <span>Source Code / Architecture</span>
              </a>
            )}
            <button
              onClick={onClose}
              className="ml-auto text-xs font-medium text-slate-500 hover:text-slate-800 dark:hover:text-slate-200"
            >
              Close viewer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
