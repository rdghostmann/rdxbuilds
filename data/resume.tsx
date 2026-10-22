// /data/resume.tsx
'use client';
import {
  Compass,
  FolderGit2,
  Home,
  Mail,
  ShieldCheck,
  User,
  Wrench,
} from "lucide-react";
import {
  GithubLogo,
  XLogo,
  LinkedinLogo,
} from "@phosphor-icons/react";
import type { StaticImageData } from "next/image";

import brandAvatarImg from "/public/images/rdxbuilds-favicon.png";
// import brandAvatarImg from "/public/images/rdx_brand_avatar_1792658864789.jpg";
import heroImg from "/public/images/rdx_hero_product_preview_1792658862900.jpg";
import analyticsImg from "/public/images/rdx_project_analytics_1792658864113.jpg";
import commerceImg from "/public/images/rdx_project_commerce_1792658865063.jpg";
import workflowImg from "/public/images/rdx_project_workflow_1792658866772.jpg";

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  summary: string;
  description: string;
  tags: string[];
  image: StaticImageData;
  liveUrl?: string;
  repoUrl?: string;
  highlights: string[];
  metricsContext: string;
  role: string;
}

export interface SkillCategory {
  title: string;
  lead: string;
  skills: {
    name: string;
    description: string;
    level: string;
  }[];
}

export const DATA = {
  name: "Rdxbuilds",
  initials: "RD",
  title: "Web Developer & Digital Product Builder",
  location: "Global / Remote",
  description:
    "Engineering high-performance web applications, scalable client interfaces, and robust full-stack architectures. Focused on turning complex ideas into reliable, useful, polished digital products.",
  url: "https://rdxbuilds.app",
  contactEmail: "RandalChukzWilson@gmail.com",
  brandAvatar: brandAvatarImg,
  heroImage: heroImg,
  
  navbar: [
    { href: "#hero", icon: Home, label: "Home" },
    // { href: "#about", icon: User, label: "About" },
    // { href: "#hand-over", icon: ShieldCheck, label: "What You Hand Over" },
    // { href: "#toolkit", icon: Wrench, label: "The Toolkit" },
    { href: "#projects", icon: FolderGit2, label: "Projects" },
    // { href: "#approach", icon: Compass, label: "Approach" },
    { href: "#contact", icon: Mail, label: "Contact" },
  ],

 contact: {
  email: "RandalChukzWilson@gmail.com",
  social: {
    GitHub: {
      name: "GitHub",
      url: "https://github.com",
      icon: GithubLogo,
      navbar: true,
    },
    // X: {
    //   name: "X (Twitter)",
    //   url: "https://x.com",
    //   icon: XLogo,
    //   navbar: true,
    // },
    LinkedIn: {
      name: "LinkedIn",
      url: "https://linkedin.com",
      icon: LinkedinLogo,
      navbar: true,
    },
  },
},

  about: {
    philosophy:
      "Modern software value is realized at the intersection of architectural discipline and user-centric craftsmanship. Rather than prioritizing superficial novelty or unmaintainable bloat, Rdxbuilds engineers solutions that are clean, resilient, and built to scale.",
    pillars: [
      {
        title: "Rigorous Craftsmanship",
        text: "Clean code structure, strict TypeScript types, deterministic state management, and accessible responsive layouts that work seamlessly across every viewport.",
      },
      {
        title: "Pragmatic Problem-Solving",
        text: "Direct alignment with business objectives. We build features that solve actual bottlenecks for users and founders, not unnecessary architectural complexity.",
      },
      {
        title: "Transparent Collaboration",
        text: "Clear documentation, predictable milestones, proactive risk mitigation, and continuous communication throughout the entire product lifecycle.",
      },
    ],
  },

  projects: [
    {
      id: "project-analytics",
      title: "Real-Time Streaming Analytics Dashboard",
      category: "Full-Stack Web Application",
      role: "Lead Frontend & Architecture Builder",
      summary:
        "High-throughput data visualization console engineered to monitor multi-node service health, streaming throughput, and latency in real time.",
      description:
        "An enterprise-ready telemetry dashboard built for operational monitoring teams. Features interactive time-series charting, customizable timeline ranges, live ingestion indicators, and a clean dark-canvas layout designed for long sessions without eye fatigue.",
      tags: ["React 19", "TypeScript", "Tailwind CSS", "Data Streams", "Modular UI"],
      image: analyticsImg,
      liveUrl: "https://example.com/demo/analytics",
      repoUrl: "https://github.com/example/analytics-dashboard",
      highlights: [
        "Architected high-frequency canvas and SVG telemetry visualization with 60fps rendering",
        "Configured robust client-side state caching with zero redundant network repaints",
        "Engineered full responsive viewport scaling from ultra-wide displays to mobile devices",
      ],
      metricsContext: "Engineered for sub-100ms UI response times during active data updates",
    },
    {
      id: "project-commerce",
      title: "Architectural Commerce & Modern Storefront",
      category: "E-Commerce Architecture",
      role: "Full-Stack Developer",
      summary:
        "A minimalist, content-first headless storefront engineered with precision grid mathematics, instant catalog filtering, and frictionless checkout flow.",
      description:
        "Designed and implemented for modern digital brands requiring editorial elegance and speed. Eliminates sluggish monolith store frontends through client-side catalog navigation, dynamic product variant pickers, and optimized imagery.",
      tags: ["TypeScript", "Next.js / React", "Tailwind CSS", "Headless Cart", "Accessible UI"],
      image: commerceImg,
      liveUrl: "https://example.com/demo/commerce",
      repoUrl: "https://github.com/example/modern-storefront",
      highlights: [
        "Engineered sub-second client-side facet and tag filtering with zero layout shifts",
        "Built resilient local shopping cart synchronization with persistent storage backups",
        "Implemented strict WCAG AA contrast, touch target math, and screen reader labels",
      ],
      metricsContext: "Optimized for 99+ Core Web Vitals score and rapid catalog load",
    },
    {
      id: "project-workflow",
      title: "Visual Node Automation & Pipeline Studio",
      category: "Developer Tooling",
      role: "Frontend Engineer & Interaction Designer",
      summary:
        "Interactive node-based automation workspace allowing engineers to visually chain webhooks, data transformers, and notification endpoints.",
      description:
        "A developer-first automation workbench providing intuitive drag-and-drop orchestration of asynchronous tasks. Includes connection wire rendering, live payload inspection, node validation, and execution logging.",
      tags: ["React", "TypeScript", "Framer Motion", "Interactive Canvas", "Node Graph"],
      image: workflowImg,
      liveUrl: "https://example.com/demo/workflow-studio",
      repoUrl: "https://github.com/example/workflow-automation-studio",
      highlights: [
        "Implemented interactive SVG connection bezier curve calculations and snap points",
        "Engineered live JSON payload validator with real-time error pinpoints",
        "Integrated dock-style tool palette and keyboard shortcuts for rapid node creation",
      ],
      metricsContext: "Smooth panning and zoom handling with 100+ concurrent interactive nodes",
    },
  ],

  approach: [
    {
      step: "01",
      title: "Deconstruct & Define",
      lead: "Aligning on core objectives, user requirements, and technical constraints before writing a single line of code.",
      points: [
        "Clarifying product requirements, edge cases, and success benchmarks",
        "Evaluating tech stack trade-offs for longevity, maintainability, and delivery speed",
        "Defining strict data contracts, type interfaces, and architecture wireframes",
      ],
    },
    {
      step: "02",
      title: "Agile & Resilient Build",
      lead: "Iterative development with clean component boundaries, strict typing, and constant verification.",
      points: [
        "Developing modular, reusable component systems with high testability",
        "Implementing clean API integrations with comprehensive error boundaries",
        "Conducting frequent milestone reviews to ensure complete alignment with vision",
      ],
    },
    {
      step: "03",
      title: "Refine, Optimize & Deliver",
      lead: "Polishing every detail to ensure high performance, rock-solid accessibility, and seamless handoff.",
      points: [
        "Auditing Core Web Vitals, asset compression, and rendering performance",
        "Verifying full keyboard accessibility, dark/light contrast, and cross-browser stability",
        "Delivering organized code repositories with exhaustive documentation and zero tech debt",
      ],
    },
  ],
};
