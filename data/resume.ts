export interface TimelineItem {
  id: string;
  date: string;
  type: string;
  title: string;
  company: string;
  description: string;
  tags: string[];
}

export interface Skill {
  name: string;
  level: number;
}

export const experience: TimelineItem[] = [
  {
    id: "exec-director",
    date: "2021 — Present",
    type: "Full-time",
    title: "Executive Design Director",
    company: "Meridian Studio · San Francisco",
    description:
      "Lead a 24-person design and front-end practice across fintech, commerce and AI platforms. Own portfolio P&L, executive storytelling and the gold-standard quality bar from pitch to launch.",
    tags: ["Leadership", "Design Systems", "Executive Advisory"],
  },
  {
    id: "senior-product",
    date: "2017 — 2021",
    type: "Full-time",
    title: "Senior Product Architect",
    company: "Northwind Digital · New York",
    description:
      "Architected dashboard and mobile suites impacting 4.2M daily users. Built the token pipeline, motion language and accessibility program adopted company-wide.",
    tags: ["React", "Design Ops", "Motion"],
  },
  {
    id: "ui-engineer",
    date: "2013 — 2017",
    type: "Full-time",
    title: "UI Engineer & Interaction Designer",
    company: "Atelier Form · London",
    description:
      "Shipped award-winning marketing sites, configurators and 3D showcases for luxury and cultural clients. Bridged design and engineering with rapid prototypes.",
    tags: ["Next.js", "WebGL", "Prototyping"],
  },
];

export const education: TimelineItem[] = [
  {
    id: "ma-interaction",
    date: "2011 — 2013",
    type: "M.A.",
    title: "M.A. Interaction Design",
    company: "Royal College of Art · London",
    description:
      "Thesis on archival interfaces and tactile luxury in digital products. Graduated with distinction and the Dean's prize for craft.",
    tags: ["Research", "Interaction", "Craft"],
  },
  {
    id: "bsc-cs",
    date: "2007 — 2011",
    type: "B.Sc.",
    title: "B.Sc. Computer Science",
    company: "UC Berkeley · California",
    description:
      "Focus on human-computer interaction, graphics and front-end engineering. Founded the student design collective.",
    tags: ["HCI", "Graphics", "Engineering"],
  },
];

export const skills: Skill[] = [
  { name: "Product Strategy", level: 96 },
  { name: "Design Systems", level: 94 },
  { name: "React / Next.js", level: 92 },
  { name: "Interaction & Motion", level: 90 },
  { name: "Design Engineering", level: 88 },
  { name: "Creative Direction", level: 86 },
];

export const coreTooling: string[] = [
  "Figma",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "Framer Motion",
  "Three.js",
  "Storybook",
  "FigJam",
];
