// /data/resume.tsx
"use client";
import { FolderGit2, Home, Mail } from "lucide-react";
import { GithubLogo, LinkedinLogo, WhatsappLogoIcon } from "@phosphor-icons/react";

import heroImg from "/public/images/rdx_hero_product_preview_1792658862900.jpg";

export type ProjectSpeciality =
  "Full-Stack" | "Web-Design" | "ERP Software" | "E-commerce" | "Software" | "Mobile" | "AI" | "AI Integration" | "Web3" | "Blockchain" | "FinTech" | "Healthcare" | "Education" | "Enterprise SaaS" | "Digital Media" | "Content Management" | "Multi-Tenant" | "SaaS" | "Administration" | "Dashboard" | "Data Visualization" | "Responsive UI" | "Nonprofit" | "Agriculture" | "Professional Development" | "Lifestyle";

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  speciality: ProjectSpeciality[];
  summary: string;
  description: string;
  tags: string[];
  image: string;
  screenshot: string;
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
  whatsappNumber: "2349032374880",

  description:
    "Engineering high-performance web applications, scalable client interfaces, and robust full-stack architectures. Focused on turning complex ideas into reliable, useful, polished digital products.",
  url: "https://rdxbuilds.app",
  contactEmail: "RandalChukzWilson@gmail.com",
  brandAvatar: "/images/rdxbuilds-favicon.png",
  heroImage: heroImg,
  avatarUrl: "/1768559048664.jpg",

  navbar: [
    { href: "#hero", icon: Home, label: "Home" },
    { href: "#projects", icon: FolderGit2, label: "Projects" },
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
    LinkedIn: {
      name: "LinkedIn",
      url: "https://linkedin.com",
      icon: LinkedinLogo,
      navbar: true,
    },
    WhatsApp: {
      name: "WhatsApp",
      url: "https://wa.me/",
      icon: WhatsappLogoIcon ,
      navbar: false,
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
    "At RdxBuilds, we turn ideas into reliable, easy-to-use digital products that help businesses grow. We focus on what matters most: solving real problems, creating great user experiences, and building solutions that are ready for the future. From the first idea to launch and beyond, every detail is designed with your goals in mind.",

  pillars: [
    {
      title: "Built with Care",
      text: "We create fast, reliable, and easy-to-use websites and applications that work smoothly across phones, tablets, and computers. Every detail is thoughtfully designed to give your users a better experience.",
    },
    {
      title: "Solutions That Matter",
      text: "We focus on solving real business problems, saving time, and making everyday tasks easier. Every feature has a purpose: helping your business serve customers better and achieve its goals.",
    },
    {
      title: "Clear Communication",
      text: "You stay informed at every stage of your project. We agree on clear goals, share progress regularly, and work with you to turn your vision into a product you can confidently launch.",
    },
  ],
},

projects: [
  {
    id: "schoolpilot",
    title: "SchoolPilot Management Platform",
    category: "Education & Administration",
    speciality: ["Full-Stack", "Web-Design", "SaaS" ],
    role: "Frontend Developer & UI/UX Designer",
    summary:
      "A school management platform designed to streamline academic and administrative operations.",
    description:
      "A digital school operations platform focused on improving administrative workflows and productivity. The recorded technology stack includes Laravel, JavaScript, Bootstrap, and MySQL.",
    tags: ["Laravel", "HTML5", "JavaScript", "CSS3", "Bootstrap", "MySQL"],
    image: "/schoolpilot.png",
    screenshot: "/screenshot/schoolpilot.png",
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
    speciality: ["Web-Design", "Software", "Full-Stack"],
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
    image: "/medsupply.png",
    screenshot: "/screenshot/medsupply.png",
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
    id: "roomfind",
    title: "RoomFind — Find Flatmates You'll Actually Get Along With",
    category: "Lifestyle & SaaS Platforms",
    speciality: ["Web-Design", "Software", "SaaS"],
    role: "Full-Stack Developer & UI/UX Designer",
    summary:
      "A flatmate-matching platform designed to help people find compatible roommates based on lifestyle, preferences, and shared living expectations.",
    description:
      "A SaaS platform focused on simplifying the flatmate discovery process by helping users explore accommodation opportunities and connect with people they are more likely to get along with. The product emphasizes user-friendly discovery, compatibility-focused matching, and a streamlined digital experience for shared living.",
    tags: [
      "SaaS",
      "Next.js",
      "TypeScript",
      "UI/UX Design",
      "Responsive Web Design",
      "Flatmate Matching",
      "Marketplace",
    ],
    image: "/roomfind.png",
    screenshot: "/screenshot/roomfind.png",
    liveUrl: "https://www.roomfind.ie/",
    repoUrl: "",
    highlights: [
      "Designed around compatibility-focused flatmate discovery",
      "Simplifies the process of finding suitable shared accommodation",
      "Emphasizes intuitive navigation and a responsive user experience",
      "Built around the needs of people seeking better shared-living arrangements",
    ],
    metricsContext:
      "Focused on making flatmate discovery more convenient and compatibility-driven",
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
    screenshot: "/screenshot/emilyagros.png",
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
    screenshot: "/screenshot/speak10xbetter.png",
    liveUrl: "https://www.speak10xbetter.com/",
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
    id: "nexxro",
    title: "Nexxro - Web3",
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
    screenshot: "/screenshot/2sweet.png",
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
    screenshot: "/screenshot/usemoos.png",
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
    screenshot: "/screenshot/ecc.png",
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
  {
    id: "bunloop",
    title: "Bunloop — Collaborative Workspace",
    category: "Productivity & Collaboration SaaS",
    speciality: ["Web-Design", "Full-Stack", "AI Integration"],
    role: "Full-Stack Developer & UI/UX Designer",
    summary:
      "An AI-powered customer support platform concept combining customer messaging, automated journeys, broadcasts, and a shared inbox to help businesses manage customer interactions from one unified workspace.",
    description:
      "A unified customer engagement platform concept featuring a trainable AI support agent, shared team inbox, help center, customer journeys, broadcast messaging, and transactional communications. Designed around a unified customer data model to help businesses coordinate support and customer communication more efficiently.",
    tags: [
      "AI",
      "SaaS",
      "Customer Support",
      "AI Agents",
      "Automation",
      "Messaging",
      "Shared Inbox",
      "Customer Experience",
    ],
    image: "/bunloop.png",
    screenshot: "/screenshot/bunloop.png",
    liveUrl: "https://bunloop.com/",
    repoUrl: "",
    highlights: [
      "Trainable AI agent for customer support workflows",
      "Shared inbox for coordinated customer conversations",
      "Customer journeys, broadcasts, and transactional messaging",
      "Help center and unified customer data experience",
    ],
    metricsContext:
      "Designed to unify AI-powered support, customer communication, and engagement workflows",
  },
  {
  id: "titanpos",
  title: "TitanPOS — Multi-Tenant Business Management System",
  category: "Enterprise SaaS & Business Management",
  speciality: ["Full-Stack", "Web-Design", "Software"],
  role: "Full-Stack Developer & UI/UX Designer",
  summary:
    "A multi-tenant business management platform that helps organizations manage inventory, sales, financial audits, users, and multiple business operations from one centralized dashboard.",
  description:
    "TitanPOS is a web-based business management system designed to bring different operational workflows into one platform. Its modules cover dashboard analytics, store inventory, provision retail sales, cooking gas plant operations, car wash management, financial audits, Excel integration, user administration, and system settings. The multi-tenant approach supports organizing business operations and access around different tenants.",
  tags: [
    "Multi-Tenant SaaS",
    "POS",
    "Business Management",
    "Inventory Management",
    "Sales Tracking",
    "Financial Auditing",
    "User Management",
    "Excel Integration",
    "Admin Dashboard",
  ],
  image: "/blueflamepos.png",
  screenshot: "/screenshot/blueflame.png",
  liveUrl: "#",
  repoUrl: "",
  highlights: [
    "Centralized dashboard for business operations",
    "Inventory management and provision retail sales",
    "Specialized modules for cooking gas plants and car wash centers",
    "Financial auditing and reporting workflows",
    "Excel integration for business data management",
    "User management and centralized system settings",
  ],
  metricsContext:
    "Designed to centralize inventory, sales, financial oversight, and day-to-day operations across multiple business units",
},
] satisfies ProjectItem[],

approach: [
  {
    step: "01",
    title: "Understand & Plan",
    lead: "We start by understanding your business, your goals, and the people you want to reach. Then we agree on what to build, how it should work, and what success looks like.",
    points: [
      "Discuss your goals, needs, and expectations",
      "Plan the features, timeline, and project budget",
      "Agree on the design and delivery milestones",
    ],
  },
  {
    step: "02",
    title: "Design & Build",
    lead: "We turn the plan into a practical digital product with a clear design, useful features, and an experience your customers can navigate easily.",
    points: [
      "Create a clean, user-friendly design",
      "Build the website or application around your needs",
      "Keep you updated as the project takes shape",
    ],
  },
  {
    step: "03",
    title: "Test & Improve",
    lead: "Before launch, we check that everything works as expected, fix issues, and make improvements so your product feels polished and works reliably across devices.",
    points: [
      "Test key features and everyday user journeys",
      "Check mobile, tablet, and desktop experiences",
      "Fix issues and improve speed and usability",
    ],
  },
  {
    step: "04",
    title: "Launch & Support",
    lead: "We prepare your product for launch, help get it online, and provide a clear handover so you know how to use and manage what has been built.",
    points: [
      "Deploy the finished product",
      "Provide project files and usage guidance",
      "Discuss maintenance and future improvements",
    ],
  },
],
};
