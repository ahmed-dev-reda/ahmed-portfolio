"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#111111] px-6">
      <motion.div
        initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{
          duration: 0.8,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="relative z-10 text-center"
      >
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.15, duration: 0.5 }}
          className="mb-5 font-mono text-xs uppercase tracking-[0.25em] text-white/30"
        >
          Error 404
        </motion.p>

        <h1 className="text-[clamp(6rem,20vw,14rem)] font-light leading-none tracking-[-0.08em] text-white">
          404<span className="text-white/15">.</span>
        </h1>

        <p className="mx-auto mt-6 max-w-md text-sm leading-7 text-white/40 sm:text-base">
          The page you&apos;re looking for doesn&apos;t exist or may have been
          moved.
        </p>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.35,
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mt-8"
        >
          <Link
            href="/"
            className="group inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-medium text-black transition-all duration-300 hover:-translate-y-1 hover:bg-white/90"
          >
            <ArrowLeft
              size={16}
              className="transition-transform duration-300 group-hover:-translate-x-1"
            />
            Back to home
          </Link>
        </motion.div>
      </motion.div>
    </main>
  );
}
