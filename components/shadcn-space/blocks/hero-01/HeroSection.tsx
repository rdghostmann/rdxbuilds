import BrandSlider, {
  BrandList,
} from "@/components/shadcn-space/blocks/hero-01/brand-slider";
import Header, {
  NavigationSection,
} from "@/components/shadcn-space/blocks/hero-01/header";
import Hero, {
  AvatarList,
} from "@/components/shadcn-space/blocks/hero-01/hero";

const navigationData: NavigationSection[] = [
  { title: "Home", href: "#", isActive: true },
  { title: "About", href: "#about" },
  { title: "What You Hand Over", href: "#handover" },
  { title: "Toolkit", href: "#toolkit" },
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
  {
    name: "UseMoos",
    image: "https://images.shadcnspace.com/assets/svgs/brand-01.svg",
    lightimg: "https://images.shadcnspace.com/assets/svgs/brand-light-01.svg",
  },
  {
    name: "Kota AI",
    image: "https://images.shadcnspace.com/assets/svgs/brand-02.svg",
    lightimg: "https://images.shadcnspace.com/assets/svgs/brand-light-02.svg",
  },
  {
    name: "roomfind.ie",
    image: "https://images.shadcnspace.com/assets/svgs/brand-03.svg",
    lightimg: "https://images.shadcnspace.com/assets/svgs/brand-light-03.svg",
  },
  {
    name: "Vercel",
    image: "https://images.shadcnspace.com/assets/svgs/brand-04.svg",
    lightimg: "https://images.shadcnspace.com/assets/svgs/brand-light-04.svg",
  },
  {
    name: "Supabase",
    image: "https://images.shadcnspace.com/assets/svgs/brand-05.svg",
    lightimg: "https://images.shadcnspace.com/assets/svgs/brand-light-05.svg",
  },
];

const AgencyHeroSection = () => {
  return (
    <div className="relative overflow-hidden bg-background">
      <Header navigationData={navigationData} />
      <Hero avatarList={avatarList} />
      <BrandSlider brandList={brandList} />
    </div>
  );
};

export default AgencyHeroSection;
export { navigationData, avatarList, brandList };
