"use client";
import { motion, type MotionProps } from "framer-motion";
import { fadeUp, stagger, viewport } from "@/lib/utils";

interface RevealProps extends MotionProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
}

/** Single element fade-up reveal */
export function Reveal({ children, delay = 0, className, as = "div", ...rest }: RevealProps) {
  const Tag = motion[as as "div"];
  return (
    <Tag
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      transition={{ duration: .6, ease: [.22, 1, .36, 1], delay }}
      className={className}
      {...rest}
    >
      {children}
    </Tag>
  );
}

interface StaggerProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

/** Container that staggers children */
export function StaggerGroup({ children, className, delay = .06 }: StaggerProps) {
  return (
    <motion.div
      variants={stagger(delay)}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      className={className}
    >
      {children}
    </motion.div>
  );
}
