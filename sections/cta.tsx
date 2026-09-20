"use client";

import Image from "next/image";
import ContactForm from "../components/contact-form";
import { motion, type Variants } from "motion/react";
import { useState, useEffect } from "react";

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 25,
    filter: "blur(7px)",
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

export default function CTA() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShow(true);
    }, 2400);
  }, []);
  if (show)
    return (
      <section id="contact" className="bg-[#111111]">
        <div className="mx-auto max-w-[1200px] px-6 py-28">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.2 }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
            relative overflow-hidden
            rounded-[32px]
            border border-white/[0.08]
            bg-[#181818]
            px-7 py-16
            sm:px-12 sm:py-20
            lg:px-20 lg:py-24
          "
          >
            {/* Background */}
            <motion.div
              initial={{ scale: 1.12 }}
              whileInView={{ scale: 1 }}
              transition={{
                duration: 1.5,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="absolute inset-0"
            >
              <Image
                src="/footer.avif"
                alt=""
                fill
                priority
                className="object-cover"
              />
            </motion.div>

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/80" />

            {/* Content */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ amount: 0.2 }}
              variants={containerVariants}
              className="relative z-10 max-w-3xl mx-auto"
            >
              {/* Label */}
              <motion.p
                variants={itemVariants}
                className="
                mb-5 text-xs font-medium uppercase
                tracking-[0.2em] text-white/50
              "
              >
                Get in touch
              </motion.p>

              <motion.h2
                initial="hidden"
                animate="visible"
                className="max-w-xl text-3xl font-medium leading-[1.05] wrap-break-word
               tracking-[-0.05em] text-white sm:text-5xl lg:text-6xl lg:text-nowrap max-sm:text-3xl"
                variants={{
                  hidden: {},
                  visible: {
                    transition: {
                      staggerChildren: 0.04,
                    },
                  },
                }}
              >
                {"Let’s build something great."
                  .split("")
                  .map((char, index) => (
                    <motion.span
                      key={index}
                      variants={{
                        hidden: {
                          opacity: 0,
                          y: 30,
                          filter: "blur(8px)",
                        },
                        visible: {
                          opacity: 1,
                          y: 0,
                          filter: "blur(0px)",
                          transition: {
                            duration: 0.5,
                            ease: [0.22, 1, 0.36, 1],
                          },
                        },
                      }}
                      className="inline-block"
                    >
                      {char === " " ? "\u00A0" : char}
                    </motion.span>
                  ))}
              </motion.h2>

              {/* Description */}
              <motion.p
                variants={itemVariants}
                className="
                mt-7 max-w-xl
                text-sm leading-7
                text-white/45
                sm:text-lg
                lg:text-nowrap
              "
              >
                Have an idea, project, or opportunity? Let’s talk and build
                something useful together.
              </motion.p>

              {/* Form */}
              <motion.div variants={itemVariants}>
                <ContactForm />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    );
}
