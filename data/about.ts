export interface Service {
  id: string;
  icon: "pen" | "code" | "phone" | "sparkle";
  title: string;
  description: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  role: string;
  initials: string;
}

export const services: Service[] = [
  {
    id: "web-interaction",
    icon: "pen",
    title: "Web & Interaction Design",
    description:
      "Cinematic marketing sites and product flows with obsessive typography, motion and archival attention to detail.",
  },
  {
    id: "ds-fe",
    icon: "code",
    title: "Design Systems & Front-End",
    description:
      "Token-driven systems in React and Next.js — documented, tested and built to scale across global teams.",
  },
  {
    id: "mobile",
    icon: "phone",
    title: "Mobile Product Architecture",
    description:
      "Offline-first mobile suites with rigorous information architecture and executive-grade polish.",
  },
  {
    id: "creative-3d",
    icon: "sparkle",
    title: "Creative Direction & 3D",
    description:
      "Art direction, lighting and real-time 3D that turn configurators and launches into luxury showcases.",
  },
];

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    quote:
      "Richard turned a sprawling dashboard into an executive instrument. Board meetings finally start with our product on screen.",
    name: "Elena Marsh",
    role: "CPO · Meridian Bank",
    initials: "EM",
  },
  {
    id: "t2",
    quote:
      "The design system paid for itself in one quarter. Velocity doubled and every release finally feels like one brand.",
    name: "David Okafor",
    role: "VP Engineering · Northwind",
    initials: "DO",
  },
  {
    id: "t3",
    quote:
      "A rare mix of taste and rigor. He directs like a filmmaker and ships like an engineer — our launch broke records.",
    name: "Sofia Lindqvist",
    role: "Founder · Atelier Nord",
    initials: "SL",
  },
];

export const clients: string[] = [
  "MERIDIAN",
  "NORTHWIND",
  "ATELIER NORD",
  "OBSIDIAN & CO",
  "VANTA",
  "LUMIÈRE",
  "HALCYON",
  "ARCHIVE",
];
