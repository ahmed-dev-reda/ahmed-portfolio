export type ProjectCategory = "Web Design" | "Applications" | "Web Development";

export interface Project {
  id: string;
  title: string;
  description: string;
  category: ProjectCategory;
  label: string;
  image: string;
  fallbackGradient: string;
}

export const portfolioFilters: Array<"All Works" | ProjectCategory> = [
  "All Works",
  "Web Design",
  "Applications",
  "Web Development",
];

export const projects: Project[] = [
  {
    id: "aurora-commerce",
    title: "Aurora Commerce Suite",
    description:
      "End-to-end commerce experience with a modular design system, real-time inventory and a checkout flow tuned for conversion.",
    category: "Web Design",
    label: "PRODUCT ARCHITECTURE",
    image: "/now-cv.png",
    fallbackGradient: "from-[#3a2f12] via-[#201f1f] to-[#0e0e0e]",
  },
  {
    id: "pulse-analytics",
    title: "Pulse Analytics Platform",
    description:
      "Executive dashboard for 4.2M+ daily users with live telemetry, anomaly alerts and boardroom-ready reporting views.",
    category: "Applications",
    label: "DATA VISUALIZATION",
    image: "/dev-path.png",
    fallbackGradient: "from-[#2a2a2a] via-[#1c1b1b] to-[#0e0e0e]",
  },
  {
    id: "obsidian-ds",
    title: "Obsidian Design System",
    description:
      "120+ token-driven components, theming engine and docs site adopted across 14 product squads in under a quarter.",
    category: "Web Development",
    label: "DESIGN ENGINEERING",
    image: "/now-cv.png",
    fallbackGradient: "from-[#4d4637] via-[#2a2a2a] to-[#131313]",
  },
  {
    id: "meridian-bank",
    title: "Meridian Private Banking",
    description:
      "Luxury private-banking portal with biometric auth, concierge scheduling and archival-grade transaction histories.",
    category: "Web Design",
    label: "FINTECH EXPERIENCE",
    image: "/dev-path.png",
    fallbackGradient: "from-[#353534] via-[#201f1f] to-[#0e0e0e]",
  },
  {
    id: "orbit-mobile",
    title: "Orbit Field Operations",
    description:
      "Offline-first mobile product for field teams with route planning, capture flows and one-tap executive sync.",
    category: "Applications",
    label: "MOBILE ARCHITECTURE",
    image: "/now-cv.png",
    fallbackGradient: "from-[#2f2a1a] via-[#1c1b1b] to-[#0e0e0e]",
  },
  {
    id: "atelier-3d",
    title: "Atelier Configurator 3D",
    description:
      "Real-time 3D product configurator with cinematic lighting, material variants and instant quote generation.",
    category: "Web Development",
    label: "CREATIVE TECHNOLOGY",
    image: "/dev-path.png",
    fallbackGradient: "from-[#1c1b1b] via-[#2a2a2a] to-[#0e0e0e]",
  },
];

export const portfolioMetrics = [
  { value: "48+", label: "SHIPPED ENGAGEMENTS" },
  { value: "14", label: "FORTUNE 500 CLIENTS" },
  { value: "100%", label: "ON-TIME DELIVERY" },
  { value: "99.8%", label: "UPTIME ACROSS LAUNCHES" },
];
