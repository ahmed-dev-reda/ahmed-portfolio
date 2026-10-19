"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import { portfolio } from "@/components/data";
import ThemeToggle from "@/components/sections/theme-toggle";

const links = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const menuVariants = {
  hidden: { opacity: 0, height: 0, y: -8 },
  visible: {
    opacity: 1,
    height: "auto",
    y: 0,
    transition: { duration: 0.28, ease: "easeOut" as const },
  },
  exit: { opacity: 0, height: 0, y: -8, transition: { duration: 0.2, ease: "easeIn" as const } },
};

const linkVariants = {
  hidden: { opacity: 0, x: -16 },
  visible: (index: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: 0.1 + index * 0.07, duration: 0.3, ease: "easeOut" as const },
  }),
  exit: { opacity: 0, x: -12, transition: { duration: 0.12 } },
};

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "px-4 top-4" : ""
      }`}
    >
      <div
        className={`mx-auto flex items-center justify-between transition-all duration-300 ${
          scrolled
            ? "max-w-[1200px] rounded-full border border-border bg-background/70 px-5 py-2.5 shadow-lg shadow-black/40 backdrop-blur-md sm:px-6"
            : "max-w-[1200px] bg-transparent px-6 py-5 sm:px-10 lg:px-[3%]"
        }`}
      >
        <Link
          href="/"
          className={`display-heading text-foreground transition-all duration-300 ${
            scrolled ? "text-xl" : "text-lg sm:text-3xl"
          }`}
          onClick={() => setOpen(false)}
        >
          {portfolio.name}
        </Link>

        <nav className="hidden items-center gap-8 sm:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs font-semibold uppercase tracking-wide text-foreground transition hover:text-lime-text"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <ThemeToggle />

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
          className="flex h-9 w-9 items-center justify-center rounded-full bg-card text-foreground transition-colors duration-200 hover:bg-lime hover:text-[#1a2a00] sm:hidden"
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={open ? "close" : "open"}
              initial={{ rotate: -90, opacity: 0, scale: 0.6 }}
              animate={{ rotate: 0, opacity: 1, scale: 1 }}
              exit={{ rotate: 90, opacity: 0, scale: 0.6 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="flex"
            >
              {open ? <FiX size={18} /> : <FiMenu size={18} />}
            </motion.span>
          </AnimatePresence>
        </button>
      </div>

      {/* Animated mobile menu (small screens only) */}
      <div className="sm:hidden">
        <AnimatePresence>
          {open && (
            <motion.nav
              key="mobile-menu"
              variants={menuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="mt-2 overflow-hidden"
              aria-label="Mobile navigation"
            >
              <div className="flex flex-col rounded-2xl border border-border bg-background/95 px-5 py-3 shadow-lg shadow-black/40 backdrop-blur">
                {links.map((link, index) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    variants={linkVariants}
                    custom={index}
                    className="border-b border-[#222222] py-3 text-sm font-semibold uppercase tracking-wide text-foreground transition hover:text-lime-text last:border-b-0"
                  >
                    {link.label}
                  </motion.a>
                ))}
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
