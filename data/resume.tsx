// /data/resume.tsx
"use client";
import { FolderGit2, Home, Mail } from "lucide-react";
import { GithubLogo, LinkedinLogo } from "@phosphor-icons/react";

import heroImg from "/public/images/rdx_hero_product_preview_1792658862900.jpg";

export type ProjectSpeciality =
  "Full-Stack" | "Web-Design" | "E-commerce" | "Software" | "Mobile" | "AI Integration" | "Web3" | "Blockchain" | "FinTech" | "Healthcare" | "Education" | "Enterprise SaaS" | "Digital Media" | "Content Management" | "Multi-Tenant";

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  speciality: ProjectSpeciality[];
  summary: string;
  description: string;
  tags: string[];
  image: string;
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
  brandAvatar: "/images/rdxbuilds-favicon.png",
  heroImage: heroImg,
  avatarUrl: "/1768559048664.jpg",

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

  // Work Experience
  work: [
    {
      company: "DAAF NGO",
      href: "https://www.agapefoundationasaba.org",
      badges: ["Web Design", "Nonprofit", "Responsive UI"],
      location: "Remote",
      title: "NGO & Charity Website",
      logoUrl: "/DAAF_Logo-1.webp",
      start: "2024",
      end: "2024",
      description:
        "Designed and developed a responsive website for a nonprofit organization, presenting its mission, donation options, team, testimonials, and contact information. Focused on accessibility, usability, and SEO-friendly content structure.",
    },
    {
      company: "EmilyAgro",
      href: "https://www.emilyagros.com/",
      badges: ["Agriculture", "Mobile App", "Farm Management"],
      location: "Remote",
      title: "Farm Management Mobile App",
      logoUrl: "/emilyagros.png",
      start: "2024",
      end: "2024",
      description:
        "Worked on a mobile-focused agricultural application concept for tracking farm activities, managing expenses, monitoring crops, and reviewing yield information. Focused on practical workflows and an accessible mobile experience.",
    },
    {
      company: "Speak 10x Better",
      href: "https://www.speak10xbetter.com",
      badges: ["Education", "Coaching", "Responsive UI"],
      location: "Remote",
      title: "Public Speaking Coaching Platform",
      logoUrl: "/speaker10xbetter.png",
      start: "2024",
      end: "2024",
      description:
        "Developed a professional web presence for a public speaking coaching service, presenting its coaching offerings and helping professionals, entrepreneurs, and leaders explore opportunities to improve their communication and presentation skills.",
    },
    {
      company: "2Sweet",
      href: "https://nexxro.com/",
      badges: ["Web3", "Ethereum", "DeFi"],
      location: "Remote",
      title: "2Sweet DeFi",
      logoUrl: "/2sweet.webp",
      start: "2024",
      end: "2024",
      description:
        "Contributed to a Web3-oriented project associated with decentralized finance and Ethereum. The work focused on frontend development and user interface design for a decentralized application experience.",
    },
    {
      company: "EU Cultural Centre",
      href: "https://eu-cultural-centre.com/",
      badges: ["Culture", "Education", "International"],
      location: "Remote",
      title: "Cultural Exchange Platform",
      logoUrl: "/eucc.webp",
      start: "2024",
      end: "2024",
      description:
        "Developed a digital platform presenting cultural initiatives, educational activities, arts, and international exchange. Focused on communicating the organization's mission of strengthening cultural understanding and cooperation between Europe and Nigeria.",
    },
    {
      company: "Paragon Micro Data",
      href: "https://schoolpilot.ng/",
      badges: ["Education", "Administration", "ERP"],
      location: "Remote",
      title: "SchoolPilot Management Platform",
      logoUrl: "/schoolpilot.png",
      start: "2024",
      end: "2024",
      description:
        "Worked on a school management platform in conjunction with Paragon Micro Data, supporting digital school operations, fee management, invoices, transactions, and administrative workflows. The platform aims to simplify school payment processes and improve operational efficiency.",
    },
    {
      company: "Stella Maris Academy",
      href: "https://stellamarisschools.com",
      badges: ["School Website", "Education", "Responsive UI"],
      location: "Remote",
      title: "Official School Website",
      logoUrl: "/stellamaris.png",
      start: "2024",
      end: "2024",
      description:
        "Designed and developed a modern, responsive school website showcasing the institution's academic programs, educational values, and identity. Focused on clear information architecture, accessible navigation, and a professional online presence.",
    },
    {
      company: "Expense TrackerPRO",
      href: "https://expense-tracker-pro-flame.vercel.app",
      badges: ["FinTech", "Dashboard", "Data Visualization"],
      location: "Remote",
      title: "Expense Tracking Application",
      logoUrl: "/expense.png",
      start: "2024",
      end: "2024",
      description:
        "Built a personal finance dashboard featuring pie and line charts, monthly expense reviews, and visual summaries to help users examine spending patterns and organize financial information.",
    },
    {
      company: "Agrifarm",
      href: "https://agrifarm-farm-management-system.vercel.app",
      badges: ["Agriculture", "Dashboard", "Management"],
      location: "Remote",
      title: "Farm Management System",
      logoUrl: "/project-placeholder.png",
      start: "2024",
      end: "2024",
      description:
        "Developed a responsive farm management interface for organizing agricultural activities, expenses, income, crops, land, equipment, warehouses, livestock housing, and employee records. Focused on reusable interface components and streamlined operational workflows.",
    },
    {
      company: "Modern Digital Hub",
      href: "https://blogshop47app.vercel.app/",
      badges: ["E-Commerce", "Digital Media", "Blog"],
      location: "Remote",
      title: "Digital Media & Shop Platform",
      logoUrl: "/project-placeholder.png",
      start: "2024",
      end: "2024",
      description:
        "Developed a unified digital platform combining blog content, product discovery, online shopping, and featured video content. Designed to bring content publishing and commerce together in a responsive browsing experience.",
    },
    {
      company: "Chocolite Group",
      href: "https://www.chocolitegroup.com/",
      badges: ["Digital Media", "Content", "Web Development"],
      location: "Remote",
      title: "Digital Media Platform",
      logoUrl: "/chocolite.webp",
      start: "2024",
      end: "2024",
      description:
        "Worked on a digital media website focused on content presentation and online publishing. Applied modern frontend development practices to create a structured web experience for presenting editorial material.",
    },
    {
      company: "JelaConfectionaries",
      href: "https://jela-confectionaries.vercel.app/",
      badges: ["Restaurant", "Dashboard", "Multi-Tenant"],
      location: "Remote",
      title: "Two-Tenant Restaurant Management System",
      logoUrl: "/project-placeholder.png",
      start: "2025",
      end: "2025",
      description:
        "Developed a restaurant management interface designed for two-location operations, featuring order management, menu and inventory control, staff scheduling, and reporting dashboards to organize daily workflows and support restaurant operations.",
    },
  ],

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
      id: "schoolpilot",
      title: "SchoolPilot Management Platform",
      category: "Education & Administration",
      speciality: ["Full-Stack", "Web-Design", "Software"],
      role: "Frontend Developer & UI/UX Designer",
      summary:
        "A school management platform designed to streamline academic and administrative operations.",
      description:
        "A digital school operations platform focused on improving administrative workflows and productivity. The recorded technology stack includes Laravel, JavaScript, Bootstrap, and MySQL.",
      tags: ["Laravel", "HTML5", "JavaScript", "CSS3", "Bootstrap", "MySQL"],
      image: "/schoolpilot.png",
      liveUrl: "https://schoolpilot.ng/",
      repoUrl: "",
      highlights: [
        "Focused on school administration and academic workflows",
        "Used a server-backed web application stack",
        "Designed interfaces around operational usability",
      ],
      metricsContext: "Built around the digitization of school operations",
    },
    {
      id: "medisupply",
      title: "MediSupply — Pharmaceutical Procurement Platform",
      category: "Healthcare & B2B SaaS",
      speciality: ["Web-Design", "Software", "Full-Stack Development"],
      role: "Full-Stack Developer & UI/UX Designer",
      summary:
        "A B2B pharmaceutical procurement platform designed to connect healthcare institutions with verified medicine suppliers through a structured digital purchasing workflow.",
      description:
        "A healthcare procurement platform built to streamline pharmaceutical sourcing, supplier matching, order management, and payment workflows. The platform supports role-based access for buyers, suppliers, pharmacists, and administrators, with a focus on procurement transparency and operational efficiency.",
      tags: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "MongoDB",
        "Mongoose",
        "Paystack",
        "B2B SaaS",
        "Healthcare",
      ],
      image: "/medisupply.png",
      liveUrl: "https://www.medisupplyltd.com/",
      repoUrl: "",
      highlights: [
        "Structured pharmaceutical procurement and supplier-matching workflows",
        "Role-based dashboards for buyers, suppliers, pharmacists, and administrators",
        "Order tracking, payment integration, and procurement management",
        "Designed to improve transparency and efficiency in healthcare supply chains",
      ],
      metricsContext:
        "Built to support more organized pharmaceutical procurement and supplier coordination",
    },
    {
      id: "emilyagros",
      title: "Farm Management Mobile App",
      category: "Agriculture & Mobile Applications",
      speciality: ["Web-Design", "Software"],
      role: "Frontend Developer & UI/UX Designer",
      summary:
        "A mobile-first agricultural product concept focused on helping farmers organize farm activities, expenses, crop monitoring, and yield information.",
      description:
        "A farm management application concept designed to support agricultural workflows through activity tracking, expense management, crop monitoring, and yield analysis. The listed stack includes React Native, Expo, and Supabase.",
      tags: ["React Native", "Expo", "Supabase", "Mobile UI", "Agriculture"],
      image: "/emilyagros.png",
      liveUrl: "https://www.emilyagros.com/",
      repoUrl: "",
      highlights: [
        "Focused on mobile-first agricultural workflows",
        "Organized farm activity and expense management features",
        "Designed around practical information access for farmers",
      ],
      metricsContext:
        "Designed to support more organized digital farm management",
    },
    {
      id: "speak-10x-better",
      title: "Public Speaking Coaching Platform",
      category: "Education & Professional Development",
      speciality: ["Web-Design", "Full-Stack"],
      role: "Frontend Developer & UI/UX Designer",
      summary:
        "A professional coaching platform helping individuals communicate confidently and develop their public speaking skills.",
      description:
        "A web presence for a public speaking coaching service, presenting its value proposition to professionals, entrepreneurs, and leaders seeking to improve their communication and presentation skills.",
      tags: ["Next.js", "Tailwind CSS", "Framer Motion", "Responsive UI"],
      image: "/speaker10xbetter.png",
      liveUrl: "https://www.speak10xbetter.com",
      repoUrl: "",
      highlights: [
        "Presented coaching services through a clear digital experience",
        "Structured messaging around communication and professional growth",
        "Applied responsive frontend design principles",
      ],
      metricsContext:
        "Designed to communicate coaching services and encourage engagement",
    },
    {
      id: "2sweet-defi",
      title: "2Sweet DeFi",
      category: "Web3 & Decentralized Finance",
      speciality: ["Full-Stack", "Web-Design", "Software"],
      role: "Frontend Developer & UI/UX Designer",
      summary:
        "A decentralized finance project associated with Web3 and Ethereum technologies.",
      description:
        "A Web3-focused project listed in the RdxWorks portfolio. The original project record identifies decentralized finance, Ethereum, and DApp development as its core areas.",
      tags: [
        "Next.js",
        "Tailwind CSS",
        "Framer Motion",
        "Web3",
        "Ethereum",
        "DApp",
      ],
      image: "/2sweet.webp",
      liveUrl: "https://nexxro.com/",
      repoUrl: "",
      highlights: [
        "Worked within a Web3-oriented product context",
        "Focused on frontend presentation and interface design",
        "Explored decentralized application interface requirements",
      ],
      metricsContext:
        "Web3 project showcasing decentralized application interface work",
    },
    {
  id: "usemoos",
  title: "UseMoos — Enterprise Knowledge Layer",
  category: "Enterprise SaaS & AI",
  speciality: ["Web-Design", "Software", "AI Integration"],
  role: "Full-Stack Developer & UI/UX Designer",
  summary:
    "An enterprise knowledge layer that ensures employees only access information they're authorized to see.",
  description:
    "An enterprise knowledge platform concept focused on secure information retrieval, permission-aware AI, and multi-tenant data isolation. Designed to help organizations make internal knowledge accessible while enforcing existing access controls, protecting sensitive documents, and preventing unauthorized information disclosure.",
  tags: [
    "Next.js",
    "TypeScript",
    "AI Integration",
    "Enterprise SaaS",
    "RBAC",
    "Data Security",
    "Multi-Tenancy",
  ],
  image: "/usemoos.png",
  liveUrl: "https://www.usemoos.com/",
  repoUrl: "",
  highlights: [
    "Permission-aware enterprise knowledge access",
    "Designed around role-based authorization and data isolation",
    "Security-focused approach to AI-powered information retrieval",
    "Balances organizational knowledge discovery with access-control enforcement",
  ],
  metricsContext:
    "Focused on making enterprise knowledge discoverable without exposing unauthorized information",
},
    {
      id: "eu-cultural-centre",
      title: "EU Cultural Centre Website",
      category: "Culture & International Education",
      speciality: ["Web-Design", "Full-Stack"],
      role: "Frontend Developer & UI/UX Designer",
      summary:
        "A cultural platform promoting education, arts, cultural exchange, and cooperation between Europe and Nigeria.",
      description:
        "A website presenting cultural initiatives and institutional information, with an emphasis on connecting audiences through education, arts, and international cultural exchange.",
      tags: [
        "Next.js",
        "Tailwind CSS",
        "Framer Motion",
        "next-i18next",
        "Internationalization",
      ],
      image: "/eucc.webp",
      liveUrl: "https://eu-cultural-centre.com/",
      repoUrl: "",
      highlights: [
        "Presented institutional information and cultural initiatives",
        "Structured content for an international audience",
        "Used a modern frontend stack with internationalization support",
      ],
      metricsContext:
        "Designed to strengthen digital communication for cultural exchange",
    },
  ] satisfies ProjectItem[],

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
