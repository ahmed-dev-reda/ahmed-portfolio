import {
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaTiktok,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";

export type FeaturedProject = {
  id: string;
  title: string;
  description: string;
  category?: string;
  year: string;
  role: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
};

export const featuredProjects: FeaturedProject[] = [
  {
    id: "now-cv",
    title: "MY ATS CV — ATS Resume Builder",
    description:
      "A modern CV builder that helps users create, customize, preview, and export professional ATS-friendly resumes as PDF files.",
    category: "Featured Project",
    year: "2026",
    role: "Full Stack Developer",
    image: "/projects_images/myatscv.png",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Prisma ORM",
      "Auth.js",
      "Tailwind CSS",
      "Redux Toolkit",
    ],
    liveUrl: "https://myatscv.vercel.app/",
    githubUrl: "https://github.com/ahmed-dev-reda/cv-builder",
    featured: true,
  },

  {
    id: "admin-panel",
    title: "Admin Dashboard",
    description:
      "A modern admin dashboard featuring a clean interface, responsive layouts, and reusable UI components for efficient data management.",
    year: "2026",
    role: "Frontend Developer",
    image: "/projects_images/admin.png",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "shadcn/ui",
    ],
    liveUrl: "https://admin-devtrend.vercel.app",
    githubUrl: "https://github.com/ahmed-dev-reda/admin",
    featured: true,
  },

  {
    id: "store",
    title: "Store — E-commerce Platform",
    description:
      "A modern e-commerce platform designed for shopping across multiple product categories, featuring product browsing, detailed product pages, shopping cart management, and a seamless user experience.",
    category: "Featured Project",
    year: "2026",
    role: "Frontend Developer",
    image: "/projects_images/store.png",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Redux Toolkit",
    ],
    liveUrl: "https://store-devtrend.vercel.app",
    githubUrl: "#",
    featured: true,
  },

  {
    id: "video-downloader",
    title: "Video Downloader",
    description:
      "A web-based video downloading application with an API-driven download workflow and a simple user interface.",
    year: "2026",
    role: "Frontend Developer",
    image: "/projects_images/video-downloader.png",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    liveUrl: "https://medo-dev-00s-projects-video-downloader.vercel.app/",
    githubUrl: "https://github.com/ahmed-dev-reda/video-downloader",
    featured: true,
  },
];

export const portfolio = {
  name: "Ahmed Reda",
  role: "Frontend Developer",
  location: "Egypt",
  email: "ahmed.dev.reda@gmail.com",

  intro:
    "I'm a Frontend Developer from Egypt passionate about building modern, responsive, and user-friendly web experiences.",

  about:
    "I'm Ahmed Reda, a Frontend Developer focused on React, Next.js, TypeScript, and Tailwind CSS. I enjoy turning ideas into real products, solving problems, and building accessible and high-performance interfaces. I continuously improve my skills by building practical projects and exploring modern web technologies.",

  profileImage: "/profile.jpg",
  resume: "/files/resume.pdf",

  socials: {
    linkedin: "https://www.linkedin.com/in/ahmed-reda-a41b49435/",
    github: "https://github.com/ahmed-dev-reda",
    youtube: "https://www.youtube.com/@ahmed-dev-reda",
  },

  capabilities: [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Redux Toolkit",
    "Tailwind CSS",
    "Prisma",
    "Git & GitHub",
    "Responsive Design",
    "REST APIs",
  ],

  experience: [
    {
      role: "Frontend Developer",
      company: "Personal & Freelance Projects",
      period: "2025 — Present",
      description:
        "Building responsive web applications using React, Next.js, TypeScript, and Tailwind CSS. Working on reusable components, API integration, application performance, and user experience.",
    },
    {
      role: "Frontend Developer",
      company: "Independent Projects",
      period: "2025 — Present",
      description:
        "Developing practical projects including an ATS resume builder, a course catalog, and an Arabic developer roadmap platform while continuously improving frontend development skills.",
    },
  ],
};

export const socials = [
  {
    label: "LinkedIn",
    icon: FaLinkedinIn,
    url: portfolio.socials.linkedin,
  },
  {
    label: "GitHub",
    icon: FaGithub,
    url: portfolio.socials.github,
  },
  {
    label: "Tik Tok",
    icon: FaTiktok,
    url: "https://www.tiktok.com/@ahmed.dev.reda",
  },
  {
    label: "Instagram",
    icon: FaInstagram,
    url: "https://www.instagram.com/ahmed.dev.reda",
  },
  {
    label: "Youtube",
    icon: FaYoutube,
    url: "https://www.youtube.com/@ahmed-dev-reda",
  },
];
