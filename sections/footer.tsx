"use client";


import { links, socials } from "@/data/data";
import { motion, Variants } from "motion/react";
import { useState, useEffect } from "react";


const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 25,
    filter: "blur(6px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function Footer() {
    const [show, setShow] = useState(false);
  
    useEffect(() => {
      setTimeout(() => {
        setShow(true);
      }, 2400);
    }, []);
    if (show)
  return (
    <footer className="border-t border-white/[0.06] bg-[#111111]">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={containerVariants}
          className="flex flex-col gap-12 py-16 md:flex-row md:items-end md:justify-between"
        >
          {/* Brand */}
          <motion.div variants={itemVariants} className="max-w-md">
            <a
              href="#"
              className="text-2xl font-medium tracking-tight text-white"
            >
              Ahmed Reda<span className="text-white/30">.</span>
            </a>

            <p className="mt-4 max-w-sm text-sm leading-7 text-white/40">
              Frontend developer focused on building modern, fast, and scalable
              web experiences with React and Next.js.
            </p>

            <a
              href="mailto:ahmedreda.dev@gmail.com"
              className="mt-6 inline-block text-sm text-white/60 underline-offset-4 transition hover:text-white hover:underline"
            >
              Let&apos;s work together →
            </a>
          </motion.div>

          {/* Navigation */}
          <motion.div variants={itemVariants}>
            <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.2em] text-white/30">
              Navigation
            </p>

            <nav className="flex flex-col gap-3">
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm text-white/50 transition hover:translate-x-1 hover:text-white"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </motion.div>

          {/* Socials */}
          <motion.div variants={itemVariants}>
            <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.2em] text-white/30">
              Connect
            </p>

            <div className="flex items-center gap-2">
              {socials.map((social) => {
                const Icon = social.icon;

                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="
                      flex size-10 items-center justify-center
                      rounded-full
                      border border-white/10
                      bg-white/[0.02]
                      text-white/40
                      transition-all duration-300
                      hover:-translate-y-1
                      hover:border-white/20
                      hover:bg-white
                      hover:text-black
                    "
                  >
                    <Icon size={16} />
                  </a>
                );
              })}
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-3 border-t border-white/[0.06] py-6 text-xs text-white/30 sm:flex-row sm:items-center sm:justify-between"
        >
          <p>© {new Date().getFullYear()} Ahmed Reda. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
}
