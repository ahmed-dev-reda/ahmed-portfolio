"use client";

import { useEffect, useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "motion/react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import Image from "next/image";
import { links } from "@/data/data";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 50);
  });

  const closeMenu = () => setIsOpen(false);
  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 824px)");

    const handleChange = () => {
      setIsDesktop(mediaQuery.matches);
    };

    handleChange();
    mediaQuery.addEventListener("change", handleChange);

    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);
  return (
    <motion.header
      animate={{
        maxWidth: scrolled && isDesktop ? "48rem" : "100%",
        borderRadius: scrolled && isDesktop ? "9999px" : "0px",
        top: scrolled && isDesktop ? 20 : 0,
      }}
      transition={{
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="fixed left-1/2 z-50 w-full -translate-x-1/2 border-b rounded max-w-[48rem]
       border-white/[0.06] bg-[#111111]/90 backdrop-blur-xl "
    >
      <div
        className={`mx-auto flex h-20 max-w-[1200px] items-center justify-between px-6 transition-all duration-600 ${
          scrolled ? "px-5" : ""
        }`}
      >
        {/* Logo */}
        <a href="#" onClick={closeMenu} className="flex items-center gap-3">
          <div className="size-12 overflow-hidden rounded-full bg-[#222]">
            <Image
              src="/profile.ico"
              alt="Ahmed Reda"
              width={80}
              height={80}
              className="h-full w-full object-cover"
            />
          </div>

          <span className="text-xl font-bold text-white">Ahmed Reda</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-7 md:flex">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm text-white/60 transition hover:text-white"
            >
              {link.label}
            </a>
          ))}

          <motion.a
            href="#contact"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-medium text-black"
          >
            Contact Me
            <ArrowUpRight size={16} />
          </motion.a>
        </nav>

        {/* Mobile Button */}
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          className="rounded-full border border-white/10 p-2 text-white md:hidden"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-white/[0.06] md:hidden"
          >
            <nav className="flex flex-col px-6 py-6">
              {links.map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  onClick={closeMenu}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="border-b border-white/[0.06] py-4 text-sm text-white/60 transition hover:text-white"
                >
                  {link.label}
                </motion.a>
              ))}

              <motion.a
                href="#contact"
                onClick={closeMenu}
                whileTap={{ scale: 0.97 }}
                className="mt-5 flex items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-medium text-black"
              >
                Contact Me
                <ArrowUpRight size={16} />
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
