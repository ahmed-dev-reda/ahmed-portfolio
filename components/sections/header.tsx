"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import { portfolio } from "@/components/data";
import ThemeToggle from "@/components/sections/theme-toggle";
import LanguageToggle from "@/components/sections/language-toggle";
import { useI18n } from "@/components/providers/i18n";

const menuVariants = {
  hidden: { opacity: 0, y: -24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, ease: "easeOut" as const },
  },
  exit: {
    opacity: 0,
    y: -24,
    transition: { duration: 0.2, ease: "easeIn" as const },
  },
};

const linkVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.12 + index * 0.08,
      duration: 0.35,
      ease: "easeOut" as const,
    },
  }),
  exit: { opacity: 0, y: 12, transition: { duration: 0.12 } },
};

const footerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { delay: 0.45, duration: 0.3 },
  },
  exit: { opacity: 0, transition: { duration: 0.1 } },
};

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t, locale } = useI18n();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: t("nav_work"), href: "#work" },
    { label: t("nav_about"), href: "#about" },
    { label: t("nav_contact"), href: "#contact" },
  ];
  const displayName = locale === "ar" ? portfolio.nameAr : portfolio.name;

  // lock page scroll while the full-screen menu is open
  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "px-4 top-4" : ""
      }`}
    >
      {/* Full-screen mobile menu (small screens only) */}
      <div className="sm:hidden">
        <AnimatePresence>
          {open && (
            <motion.div
              key="mobile-menu"
              variants={menuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed inset-0 z-[1] flex h-dvh flex-col bg-background/95 px-6 pb-10 pt-24 backdrop-blur-md"
              aria-label="Mobile navigation"
            >
              <nav className="flex flex-1 flex-col justify-center">
                {links.map((link, index) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    variants={linkVariants}
                    custom={index}
                    className="display-heading border-b border-border py-5 text-4xl text-foreground transition-colors last:border-b-0 hover:text-lime-text"
                  >
                    {link.label}
                  </motion.a>
                ))}
              </nav>

              <motion.div
                variants={footerVariants}
                className="mt-auto flex items-center justify-center gap-10 border-t border-border pt-6"
              >
                <div className="flex items-center gap-3">
                  <span className="text-xs font-semibold uppercase tracking-widest text-secondary">
                    {t("theme_label")}
                  </span>
                  <ThemeToggle />
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-xs font-semibold uppercase tracking-widest text-secondary">
                    {t("language_label")}
                  </span>
                  <LanguageToggle />
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Top bar — must stay above the full-screen menu so the logo and
          close button remain reachable */}
      <div
        className={`relative z-[2] mx-auto flex items-center justify-between transition-all duration-300 ${
          scrolled
            ? "max-w-[1200px] rounded-full border border-border bg-background/70 px-5 py-2.5 shadow-md shadow-black/40 backdrop-blur-md sm:px-6"
            : "max-w-[1200px] bg-transparent px-6 py-5 sm:px-10 lg:px-[3%]"
        }`}
      >
        <a
          href="#"
          className={`display-heading text-foreground transition-all duration-300 ${
            scrolled ? "text-xl" : "text-lg sm:text-3xl"
          }`}
          onClick={() => setOpen(false)}
        >
          {displayName}
        </a>

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

        {/* toggles in the bar are desktop-only; on mobile they live
            inside the full-screen menu */}
        <div className="hidden items-center sm:flex gap-4">
          <LanguageToggle />
          <ThemeToggle />
        </div>

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
