import {
  FaCode,
  FaGithub,
  FaGaugeHigh,
  FaInstagram,
  FaLayerGroup,
  FaLinkedinIn,
  FaMobileScreenButton,
  FaPlug,
  FaTiktok,
  FaWrench,
  FaYoutube,
} from "react-icons/fa6";
import type { IconType } from "react-icons";

export type FeaturedProject = {
  id: string;
  title: string;
  description: string;
  /** Arabic description (project titles always stay English). */
  descriptionAr?: string;
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
    descriptionAr:
      "أداة حديثة لإنشاء السيرة الذاتية تساعد المستخدمين على إنشاء وتعديل ومعاينة وتصدير سِيَر ذاتية متوافقة مع أنظمة ATS كملفات PDF.",
    category: "Featured Project",
    year: "2026",
    role: "Full Stack Developer",
    image: "/projects_images/myatscv.png",
    technologies: [
      "Next.js",
      "React",
      "Prisma ORM",
      "TypeScript",
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
    descriptionAr:
      "لوحة تحكم حديثة بواجهة نظيفة وتخطيطات متجاوبة ومكونات قابلة لإعادة الاستخدام لإدارة البيانات بكفاءة.",
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
    descriptionAr:
      "منصة تجارة إلكترونية حديثة للتسوق عبر عدة فئات من المنتجات، مع تصفح المنتجات وصفحات تفصيلية وإدارة سلة الشراء وتجربة استخدام سلسة.",
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
    descriptionAr:
      "تطبيق ويب لتنزيل الفيديوهات بواجهة بسيطة وسير عمل تنزيل يعتمد على API.",
    year: "2026",
    role: "Frontend Developer",
    image: "/projects_images/video-downloader.png",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    liveUrl: "https://ssdown.vercel.app",
    githubUrl: "https://github.com/ahmed-dev-reda/video-downloader",
    featured: true,
  },
];

export type Service = {
  id: string;
  title: string;
  titleAr: string;
  description: string;
  descriptionAr: string;
  icon: IconType;
};

export const services: Service[] = [
  {
    id: "front-end",
    title: "Front-End Development",
    titleAr: "تطوير واجهات المستخدم",
    description:
      "Pixel-perfect, accessible interfaces built with React, Next.js, and TypeScript — fast, reusable, and crafted to convert.",
    descriptionAr:
      "تطوير واجهات مستخدم احترافية وسريعة باستخدام React وNext.js وTypeScript، مع الاهتمام بدقة التصميم وسهولة الاستخدام وإمكانية إعادة استخدام المكونات.",
    icon: FaCode,
  },
  {
    id: "full-stack",
    title: "Full-Stack Web Development",
    titleAr: "تطوير مواقع الويب المتكاملة",
    description:
      "End-to-end web products with a polished front-end and a robust back-end — APIs, databases, auth, and deployment included.",
    descriptionAr:
      "تطوير مواقع وتطبيقات ويب متكاملة تشمل الواجهات الأمامية والخلفية، وربط قواعد البيانات وواجهات API، وتأمين تسجيل الدخول، وتجهيز المشروع للنشر.",
    icon: FaLayerGroup,
  },
  {
    id: "responsive",
    title: "Responsive Web Design",
    titleAr: "تصميم مواقع متجاوبة",
    description:
      "Layouts that adapt beautifully from large screens to small phones, with a mobile-first approach and fluid grids.",
    descriptionAr:
      "تصميم مواقع متجاوبة تعمل بكفاءة على جميع الأجهزة، من الشاشات الكبيرة إلى الهواتف المحمولة، مع تجربة استخدام سلسة وتصميم يبدأ من الموبايل.",
    icon: FaMobileScreenButton,
  },
  {
    id: "api",
    title: "API Integration",
    titleAr: "تكامل وربط واجهات API",
    description:
      "Clean integration of third-party and custom REST/GraphQL APIs into your product, with typed clients and smooth error handling.",
    descriptionAr:
      "ربط موقعك بواجهات API الخارجية أو المخصصة باستخدام REST وGraphQL، مع تنظيم البيانات ومعالجة الأخطاء لضمان تكامل سلس وموثوق.",
    icon: FaPlug,
  },
  {
    id: "performance",
    title: "Website Performance Optimization",
    titleAr: "تحسين أداء المواقع",
    description:
      "Speed audits, bundle tuning, caching strategies, and Core Web Vitals improvements to make your site load in a blink.",
    descriptionAr:
      "تحسين سرعة وأداء المواقع من خلال تحليل الأداء، وتقليل أحجام الملفات، وتحسين التخزين المؤقت، ورفع كفاءة مؤشرات Core Web Vitals لتوفير تجربة أسرع.",
    icon: FaGaugeHigh,
  },
  {
    id: "maintenance",
    title: "Website Maintenance",
    titleAr: "صيانة وتطوير المواقع",
    description:
      "Ongoing support, updates, security patches, and continuous improvements to keep your product healthy and evolving.",
    descriptionAr:
      "توفير الدعم الفني المستمر وتحديث الموقع وإصلاح المشكلات الأمنية والتقنية، مع تطويرات دورية للحفاظ على استقرار الموقع وتحسين أدائه.",
    icon: FaWrench,
  },
];

export const portfolio = {
  name: "Ahmed Reda",
  /** Arabic display name (used when the site's locale is Arabic). */
  nameAr: "أحمد رضا",
  role: "Frontend Developer",
  location: "Egypt",
  email: "ahmed.dev.reda@gmail.com",

  intro:
    "I'm a Frontend Developer from Egypt passionate about building modern, responsive, and user-friendly web experiences.",
  introAr:
    "أنا مطوّر واجهات أمامية من مصر، شغوف ببناء تجارب ويب حديثة ومتجاوبة وسهلة الاستخدام.",

  about:
    "I'm Ahmed Reda, a Frontend Developer focused on React, Next.js, TypeScript, and Tailwind CSS. I enjoy turning ideas into real products, solving problems, and building accessible and high-performance interfaces. I continuously improve my skills by building practical projects and exploring modern web technologies.",
  aboutAr:
    "أنا أحمد رضا، مطوّر واجهات أمامية مركّز على React و Next.js و TypeScript و Tailwind CSS. أحب تحويل الأفكار إلى منتجات حقيقية، وحل المشكلات، وبناء واجهات عالية الأداء ومتاحة للجميع. وأطوّر مهاراتي باستمرار عبر بناء مشاريع عملية واستكشاف تقنيات الويب الحديثة.",

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
