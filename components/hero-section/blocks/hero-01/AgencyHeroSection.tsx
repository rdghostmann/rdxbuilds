// HeroSection.tsx
"use client";

import {
  CSS,
  Figma,
  HTML5,
  JavaScript,
  MongoDB,
  NextJs,
  NodeJs,
  React,
  Python,
  Supabase,
  TailwindCSS,
  TypeScript,
  VercelDark,
  PostgreSQL,
  Postman,
} from "developer-icons";

import BrandSlider, {
  type BrandList,
} from "@/components/hero-section/blocks/hero-01/brand-slider";
import Header, {
  NavigationSection,
} from "@/components/hero-section/blocks/hero-01/header";
import Hero, {
  AvatarList,
} from "@/components/hero-section/blocks/hero-01/hero";

const navigationData: NavigationSection[] = [
  { title: "Home", href: "#", isActive: true },
  { title: "About", href: "#about" },
  { title: "Projects", href: "#projects" },
  { title: "Contact", href: "#contact" },
];

const avatarList: AvatarList[] = [
  {
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=faces",
  },
  {
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=faces",
  },
  {
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=faces",
  },
  {
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=faces",
  },
];

const brandList: BrandList[] = [
  { name: "React", Icon: React },
  { name: "TypeScript", Icon: TypeScript },
  { name: "Python", Icon: Python },
  { name: "JavaScript", Icon: JavaScript },
  { name: "Tailwind CSS", Icon: TailwindCSS },
  { name: "PostgreSQL", Icon: PostgreSQL },
  { name: "Node.js", Icon: NodeJs },
  { name: "MongoDB", Icon: MongoDB },
  { name: "Next.js", Icon: NextJs },
  { name: "Supabase", Icon: Supabase },
  { name: "Vercel", Icon: VercelDark },
  { name: "HTML5", Icon: HTML5 },
  { name: "CSS", Icon: CSS },
  { name: "Figma", Icon: Figma },
  { name: "Postman", Icon: Postman },
];

const AgencyHeroSection = () => {
  return (
    <div className="relative overflow-hidden pointer-none  bg-[radial-gradient(#2563eb_1px,transparent_1px)] ">
      
      {/* Background ambient electric blue glow */}
      <div
        className="pointer-events-none absolute -top-40 right-0 h-[480px] w-[480px] rounded-full bg-blue-500/10 blur-[120px] dark:bg-blue-600/15"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute top-1/2 -left-32 h-[380px] w-[380px] rounded-full bg-indigo-500/5 blur-[100px] dark:bg-indigo-600/10"
        aria-hidden="true"
      />
      <Header navigationData={navigationData} />
      <Hero avatarList={avatarList} />
      <BrandSlider brandList={brandList} />
    </div>
  );
};

export default AgencyHeroSection;
export { navigationData, avatarList, brandList };
