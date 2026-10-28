"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  /** Seconds to wait before the animation starts. */
  delay?: number;
  /** Vertical distance the element travels while fading in (px). */
  y?: number;
  /** Horizontal distance the element travels while fading in (px). */
  x?: number;
  className?: string;
  amount?: number;
};

export default function Reveal({
  children,
  delay = 0,
  y = 32,
  x = 0,
  amount,
  className,
}: RevealProps) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y, x }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, margin: "-60px", amount }}
      transition={{ duration: 2, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
