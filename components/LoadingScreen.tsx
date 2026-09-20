"use client";

import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let value = 0;

    const interval = setInterval(() => {
      value += Math.floor(Math.random() * 8) + 2;

      if (value >= 100) {
        value = 100;
        clearInterval(interval);

        setTimeout(() => {
          setLoading(false);
        }, 500);
      }

      setProgress(value);
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: {
              duration: 0.5,
              ease: [0.22, 1, 0.36, 1],
            },
          }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#111111]"
        >
          <div className="relative w-full max-w-2xl px-6">
            {/* Top */}
            <div className="mb-8 flex items-center justify-between">
              <motion.span
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-xs uppercase tracking-[0.25em] text-white/30"
              >
                Portfolio
              </motion.span>

              <motion.span className="font-mono text-xs text-white/30">
                {String(progress).padStart(3, "0")}%
              </motion.span>
            </div>

            {/* Name */}
            <div className="overflow-hidden">
              <motion.h1
                initial={{
                  y: 100,
                  opacity: 0,
                  filter: "blur(12px)",
                }}
                animate={{
                  y: 0,
                  opacity: 1,
                  filter: "blur(0px)",
                }}
                transition={{
                  duration: 1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="
                  text-5xl
                  font-light
                  tracking-[-0.06em]
                  text-white
                  sm:text-7xl
                  lg:text-8xl
                "
              >
                Ahmed Reda<span className="text-white/20">.</span>
              </motion.h1>
            </div>

            {/* Progress line */}
            <div className="mt-8 h-px w-full overflow-hidden bg-white/10">
              <motion.div
                className="h-full bg-white"
                animate={{
                  width: `${progress}%`,
                }}
                transition={{
                  ease: "linear",
                  duration: 0.15,
                }}
              />
            </div>

            {/* Bottom */}
            <div className="mt-4 flex items-center justify-between">
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-xs text-white/30"
              >
                Building digital experiences
              </motion.p>

              <motion.div
                animate={{
                  opacity: [0.3, 1, 0.3],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                }}
                className="size-1.5 rounded-full bg-white"
              />
            </div>
          </div>

          {/* Corner number */}
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="absolute bottom-6 left-6 font-mono text-[10px] tracking-widest text-white/20"
          >
            01 / 01
          </motion.span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
