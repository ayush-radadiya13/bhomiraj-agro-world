"use client";

import { motion } from "framer-motion";

const variants = {
  up: { hidden: { opacity: 0, y: 48 }, show: { opacity: 1, y: 0 } },
  down: { hidden: { opacity: 0, y: -48 }, show: { opacity: 1, y: 0 } },
  left: { hidden: { opacity: 0, x: -64 }, show: { opacity: 1, x: 0 } },
  right: { hidden: { opacity: 0, x: 64 }, show: { opacity: 1, x: 0 } },
  scale: { hidden: { opacity: 0, scale: 0.86 }, show: { opacity: 1, scale: 1 } },
  blur: {
    hidden: { opacity: 0, y: 32, filter: "blur(10px)" },
    show: { opacity: 1, y: 0, filter: "blur(0px)" },
  },
};

export default function Reveal({
  children,
  direction = "up",
  delay = 0,
  duration = 0.7,
  className = "",
  once = true,
  amount = 0.25,
  as = "div",
}) {
  const MotionTag = motion[as] || motion.div;
  return (
    <MotionTag
      className={className}
      variants={variants[direction]}
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </MotionTag>
  );
}

export function StaggerGroup({
  children,
  className = "",
  stagger = 0.1,
  delayChildren = 0,
  once = true,
  amount = 0.2,
}) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount }}
      variants={{
        hidden: {},
        show: {
          transition: { staggerChildren: stagger, delayChildren },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className = "", direction = "up" }) {
  return (
    <motion.div
      className={className}
      variants={variants[direction]}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
