"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";

export default function Intro() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 1800);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <motion.div
      className="fixed inset-0 z-[9999] pointer-events-none"
      initial={{
        clipPath: "circle(0% at 50% 50%)",
      }}
      animate={{
        clipPath: "circle(150% at 50% 50%)",
      }}
      transition={{
        duration: 1.5,
        ease: [0.76, 0, 0.24, 1],
      }}
    >
      <div className="absolute inset-0 bg-black" />
    </motion.div>
  );
}
