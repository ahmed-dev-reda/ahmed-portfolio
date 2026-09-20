"use client";

import Image from "next/image";
import { motion, useAnimationFrame, useMotionValue } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { skills } from "@/data/data";

export default function InfiniteSlider() {
  const x = useMotionValue(0);

  const groupRef = useRef<HTMLDivElement>(null);

  const [groupWidth, setGroupWidth] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const normalSpeed = 50;

  const slowSpeed = 25;

  const currentSpeed = useRef(normalSpeed);

  useEffect(() => {
    const measure = () => {
      if (!groupRef.current) return;

      setGroupWidth(groupRef.current.offsetWidth);
    };

    measure();

    const observer = new ResizeObserver(measure);

    if (groupRef.current) {
      observer.observe(groupRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Animation loop
  useAnimationFrame((_, delta) => {
    if (!groupWidth) return;

    const targetSpeed = isHovered ? slowSpeed : normalSpeed;

    // تغيير السرعة تدريجيًا
    currentSpeed.current += (targetSpeed - currentSpeed.current) * 0.08;

    const move = (currentSpeed.current * delta) / 1000;

    let newX = x.get() - move;

    // لما نوصل لنهاية المجموعة الأولى
    // نرجع للبداية بدون أي jump
    if (newX <= -groupWidth) {
      newX += groupWidth;
    }

    x.set(newX);
  });

  return (
    <div
      className="slider-mask mt-14 w-full overflow-hidden xl:max-w-xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div style={{ x }} className="flex w-max gap-6">
        {/* Group 1 */}
        <div ref={groupRef} className="flex shrink-0 gap-6">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="flex size-18 shrink-0 items-center justify-center
               rounded-2xl border border-white/[0.06] bg-white/[0.05]"
            >
              <Image
                src={skill.icon}
                alt={skill.name}
                width={50}
                height={50}
                className="object-contain opacity-60"
              />
            </div>
          ))}
        </div>

        {/* Group 2 */}
        <div className="flex shrink-0 gap-6">
          {skills.map((skill) => (
            <div
              key={`duplicate-${skill.name}`}
              className="flex size-20 shrink-0 items-center justify-center rounded-2xl border border-white/[0.06] bg-white/[0.02]"
            >
              <Image
                src={skill.icon}
                alt={skill.name}
                width={40}
                height={40}
                className="object-contain opacity-60"
              />
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
