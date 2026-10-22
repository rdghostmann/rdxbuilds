'use client';
import { useState } from "react";
import { motion } from "framer-motion";
import { DATA, ProjectItem } from "@/data/resume";
import { ProjectModal } from "@/components/ProjectModal";
import { ArrowUpRight, ExternalLink, Info } from "lucide-react";
import {
  GithubLogo,
  XLogo,
  LinkedinLogo,
} from "@phosphor-icons/react";
import Image from "next/image";


export function Projects() {
  const [selectedFilter, setSelectedFilter] = useState<string>("All");
  const [activeModalProject, setActiveModalProject] = useState<ProjectItem | null>(null);

  const filterOptions = ["All", "Full-Stack Web Application", "E-Commerce Architecture", "Developer Tooling"];

  const filteredProjects = selectedFilter === "All"
    ? DATA.projects
    : DATA.projects.filter((p) => p.category === selectedFilter);

  return (
    <motion.section
      id="projects"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="py-20 md:py-28 border-t border-slate-200/80 dark:border-slate-800/80"
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-electric-600 dark:text-electric-400">
              <span className="h-px w-6 bg-electric-600 dark:bg-electric-400" />
              <span>Selected Work</span>
            </div>
            <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white text-balance">
              Architected for performance & scale.
            </h2>
            <p className="mt-3 text-base text-slate-600 dark:text-slate-300">
              A curated selection of digital products, developer tooling, and modern web applications.
            </p>
          </div>

          {/* Interactive Filter Segmented Control */}
          <div className="flex flex-wrap gap-1 p-1 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-100/70 dark:bg-slate-900/60 w-fit shrink-0">
            {filterOptions.map((opt) => (
              <button
                key={opt}
                type="button"
                onClick={() => setSelectedFilter(opt)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all whitespace-nowrap shrink-0 ${
                  selectedFilter === opt
                    ? "bg-electric-600 text-white shadow-sm"
                    : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                }`}
              >
                {opt === "All" ? "All Projects" : opt.replace(" Architecture", "").replace(" Web Application", "")}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid with Staggered Scroll Animation */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, idx) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col rounded-2xl glass-panel shadow-sm hover:shadow-xl hover:shadow-electric-600/10 hover:border-electric-500/40 transition-all overflow-hidden group"
            >
              {/* Media Container */}
              <div
                onClick={() => setActiveModalProject(project)}
                className="relative aspect-video w-full overflow-hidden bg-slate-950 cursor-pointer"
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />
                <div className="absolute inset-0 bg-slate-900/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="rounded-lg bg-white/95 dark:bg-slate-900/95 px-3 py-1.5 text-xs font-semibold text-slate-900 dark:text-white shadow-md backdrop-blur-sm border border-slate-200/50 dark:border-electric-500/20">
                    Inspect Architecture
                  </span>
                </div>
              </div>

              {/* Content Body */}
              <div className="flex flex-col flex-1 p-6">
                {/* Zero-Pill Clean Metadata */}
                <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                  <span className="font-medium text-electric-600 dark:text-electric-400">
                    {project.category}
                  </span>
                  <span aria-hidden="true">·</span>
                  <span>{project.role}</span>
                </div>

                <h3
                  onClick={() => setActiveModalProject(project)}
                  className="mt-3 text-lg font-bold text-slate-900 dark:text-white group-hover:text-electric-600 dark:group-hover:text-electric-400 transition-colors cursor-pointer"
                >
                  {project.title}
                </h3>

                <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed flex-1">
                  {project.summary}
                </p>

                {/* Tech Tags */}
                <div className="mt-4 pt-4 border-t border-slate-200/60 dark:border-slate-800/80 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs font-mono text-slate-500 dark:text-slate-400">
                  {project.tags.map((tag, tIdx) => (
                    <span key={tag} className="whitespace-nowrap">
                      {tag}
                      {tIdx < project.tags.length - 1 ? " ·" : ""}
                    </span>
                  ))}
                </div>

                {/* Card Actions */}
                <div className="mt-5 pt-3 flex items-center justify-between text-xs">
                  <button
                    type="button"
                    onClick={() => setActiveModalProject(project)}
                    className="font-semibold text-electric-600 dark:text-electric-400 hover:underline inline-flex items-center gap-1"
                  >
                    <span>View Case Details</span>
                    <ArrowUpRight className="size-3.5" />
                  </button>

                  <div className="flex items-center gap-3">
                    {project.repoUrl && (
                      <a
                        href={project.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View ${project.title} source code`}
                        className="text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
                      >
                        <GithubLogo className="size-4" />
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Visit live demo for ${project.title}`}
                        className="text-slate-400 hover:text-electric-600 dark:hover:text-electric-400 transition-colors"
                      >
                        <ExternalLink className="size-4" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Clear Editable Placeholder Notice */}
        <div className="mt-12 p-4 rounded-xl border border-dashed border-slate-300 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-900/30 text-xs text-slate-500 dark:text-slate-400 flex items-start gap-3">
          <Info className="size-4 text-electric-500 shrink-0 mt-0.5" />
          <p>
            <span className="font-semibold text-slate-700 dark:text-slate-300">Editable Showcase Notice: </span>
            The project entries above reflect verifiable engineering patterns and architecture models. You can easily connect your private GitHub repositories, production domains, and client case studies inside <code className="px-1.5 py-0.5 rounded bg-slate-200/70 dark:bg-slate-800 text-slate-800 dark:text-slate-200 font-mono">src/data/resume.tsx</code>.
          </p>
        </div>
      </div>

      {/* Project Lightbox Modal */}
      <ProjectModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />
    </motion.section>
  );
}
