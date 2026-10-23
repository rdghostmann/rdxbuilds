"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight, ExternalLink, Info } from "lucide-react";
import { GithubLogo } from "@phosphor-icons/react";

import type { ProjectItem, ProjectSpeciality } from "@/data/resume";
import { DATA } from "@/data/resume";
import { ProjectModal } from "@/components/ProjectModal";
import Link from "next/link";

type ProjectFilter = "All" | ProjectSpeciality;

const SPECIALITY_ORDER: ProjectSpeciality[] = [
  "Full-Stack",
  "Web-Design",
  "E-commerce",
  "Software",
];

export function Projects() {
  const [selectedFilter, setSelectedFilter] = useState<ProjectFilter>("All");

  const [activeModalProject, setActiveModalProject] =
    useState<ProjectItem | null>(null);

  const filterOptions = useMemo<ProjectFilter[]>(() => {
    const availableSpecialities = new Set<ProjectSpeciality>(
      DATA.projects.flatMap((project) => project.speciality),
    );

    return [
      "All",
      ...SPECIALITY_ORDER.filter((speciality) =>
        availableSpecialities.has(speciality),
      ),
    ];
  }, []);

  const filteredProjects = useMemo(() => {
    if (selectedFilter === "All") {
      return DATA.projects;
    }

    return DATA.projects.filter((project) =>
      project.speciality.some((speciality) => speciality === selectedFilter),
    );
  }, [selectedFilter]);

  return (
    <motion.section
      id="projects"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="border-t border-slate-200/80 py-20 dark:border-slate-800/80 md:py-28"
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col justify-between gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-electric-600 dark:text-electric-400">
              <span className="h-px w-6 bg-electric-600 dark:bg-electric-400" />
              <span>Selected Work</span>
            </div>

            <h2 className="mt-3 text-balance text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
              Digital products built to solve real problems.
            </h2>

            <p className="mt-3 text-base leading-7 text-slate-600 dark:text-slate-300">
              Explore a selection of web experiences, business applications,
              e-commerce platforms, and software solutions designed around
              usability, functionality, and business needs.
            </p>
          </div>

          {/* Project Filters */}
          <div
            className="flex w-fit max-w-full flex-wrap rounded-xl border border-slate-200 bg-slate-100/70 p-1 dark:border-slate-800 dark:bg-slate-900/60"
            aria-label="Filter projects by speciality"
          >
            {filterOptions.map((option) => (
              <button
                key={option}
                type="button"
                onClick={() => setSelectedFilter(option)}
                aria-pressed={selectedFilter === option}
                className={`shrink-0 whitespace-nowrap rounded-lg px-3 py-2 text-xs font-semibold transition-all ${
                  selectedFilter === option
                    ? "bg-electric-600 text-white shadow-sm"
                    : "text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
                }`}
              >
                {option === "All" ? "All" : option}
              </button>
            ))}
          </div>
        </div>

        {/* Results Count */}
        <div className="mt-8 flex items-center justify-between">
          <p
            className="text-xs text-slate-500 dark:text-slate-400"
            aria-live="polite"
          >
            Showing{" "}
            <span className="font-semibold text-slate-700 dark:text-slate-200">
              {filteredProjects.length}
            </span>{" "}
            {filteredProjects.length === 1 ? "project" : "projects"}
            {selectedFilter !== "All" && (
              <>
                {" "}
                in{" "}
                <span className="font-semibold text-slate-700 dark:text-slate-200">
                  {selectedFilter}
                </span>
              </>
            )}
          </p>
        </div>

        {/* Project Cards */}
        <div className="mt-5 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.5,
                delay: index * 0.06,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200/70 shadow-sm transition-all duration-300 hover:border-electric-500/40 hover:shadow-xl hover:shadow-electric-600/10 dark:border-slate-800/80"
            >
              {/* Project Header */}
              <div className="flex items-start gap-4 p-5 pb-0">
                <button
                  type="button"
                  onClick={() => setActiveModalProject(project)}
                  aria-label={`View ${project.title} case details`}
                  className="relative flex size-14 shrink-0 items-center justify-center overflow-hidden rounded-full border border-slate-200/80 bg-white transition-transform duration-300 group-hover:scale-[1.03] dark:border-slate-700 dark:bg-slate-900"
                >
                  <Image
                    src={project.image}
                    alt={`${project.title} logo`}
                    fill
                    sizes="56px"
                    draggable={false}
                    className="pointer-events-none select-none object-contain p-1.5"
                  />
                </button>

                <div className="min-w-0 flex-1 pt-0.5">
                  <span className="inline-block text-[10px] font-semibold uppercase tracking-wider text-electric-600 dark:text-electric-400">
                    {project.category}
                  </span>

                  <button
                    type="button"
                    onClick={() => setActiveModalProject(project)}
                    className="mt-1 block text-left"
                  >
                    <h3 className="text-base font-bold leading-snug text-slate-900 transition-colors group-hover:text-electric-600 dark:text-white dark:group-hover:text-electric-400">
                      {project.title}
                    </h3>
                  </button>

                  <p className="mt-1 line-clamp-1 text-xs text-slate-500 dark:text-slate-400">
                    {project.role}
                  </p>
                </div>
              </div>

              {/* Project Content */}
              <div className="flex flex-1 flex-col p-5">
                <p className="flex-1 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                  {project.summary}
                </p>

                {/* Specialities */}
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {project.speciality.map((speciality) => (
                    <button
                      key={speciality}
                      type="button"
                      onClick={() => setSelectedFilter(speciality)}
                      aria-label={`Filter projects by ${speciality}`}
                      className="rounded-full border border-electric-600/20 bg-electric-600/5 px-2.5 py-1 text-[10px] font-semibold text-electric-700 transition-colors hover:bg-electric-600/10 dark:text-electric-400"
                    >
                      {speciality}
                    </button>
                  ))}
                </div>

                {/* Technology Tags */}
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md border border-slate-200/80 bg-slate-100/70 px-2 py-1 text-[10px] font-medium text-slate-600 dark:border-slate-800 dark:bg-slate-900/70 dark:text-slate-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Card Actions */}
                <div className="mt-5 flex items-center justify-between border-t border-slate-200/70 pt-4 text-xs dark:border-slate-800/80">
                  <button
                    type="button"
                    onClick={() => setActiveModalProject(project)}
                    className="inline-flex items-center gap-1.5 font-semibold text-electric-600 transition-colors hover:text-electric-700 dark:text-electric-400 dark:hover:text-electric-300"
                  >
                    View Case Details
                    <ArrowUpRight className="size-3.5" />
                  </button>

                  <div className="flex items-center gap-3">
                    {project.repoUrl && (
                      <Link
                        href={project.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View ${project.title} source code`}
                        className="text-slate-400 transition-colors hover:text-slate-900 dark:hover:text-white"
                      >
                        <GithubLogo className="size-4" />
                      </Link>
                    )}

                    {project.liveUrl && (
                      <Link
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Visit live demo for ${project.title}`}
                        className="hidden text-slate-400 transition-colors hover:text-electric-600 dark:hover:text-electric-400"
                      >
                        <ExternalLink className="size-4" />
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="mt-8 rounded-2xl border border-dashed border-slate-300 px-6 py-12 text-center dark:border-slate-700">
            <p className="text-sm font-semibold text-slate-800 dark:text-slate-200">
              No projects found.
            </p>
            <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
              Try another speciality or view all projects.
            </p>
            <button
              type="button"
              onClick={() => setSelectedFilter("All")}
              className="mt-4 rounded-lg bg-electric-600 px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-electric-700"
            >
              View All Projects
            </button>
          </div>
        )}

        {/* Showcase Notice */}
        <div className="mt-12 hidden items-start gap-3 rounded-xl border border-dashed border-slate-300 bg-slate-50/50 p-4 text-xs text-slate-500 dark:border-slate-700 dark:bg-slate-900/30 dark:text-slate-400">
          <Info className="mt-0.5 size-4 shrink-0 text-electric-500" />

          <p className="leading-relaxed">
            <span className="font-semibold text-slate-700 dark:text-slate-300">
              Portfolio configuration:{" "}
            </span>
            Manage project descriptions, specialities, logos, technology stacks,
            live URLs, and repository links in{" "}
            <code className="rounded bg-slate-200/70 px-1.5 py-0.5 font-mono text-slate-800 dark:bg-slate-800 dark:text-slate-200">
              src/data/resume.tsx
            </code>
            .
          </p>
        </div>
      </div>

      {/* Project Details Modal */}
      <ProjectModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />
    </motion.section>
  );
}
