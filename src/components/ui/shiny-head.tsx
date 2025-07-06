"use client";

import React from "react";
import { motion, type MotionProps, type HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

// ✅ Updated from AnimationProps → MotionProps
const animationProps: MotionProps = {
  initial: { "--x": "100%", scale: 0.8 },
  animate: { "--x": "-100%", scale: 1 },
  transition: {
    repeat: Infinity,
    repeatType: "loop",
    repeatDelay: 1,
    type: "spring",
    stiffness: 20,
    mass: 2,
    scale: {
      type: "spring",
      stiffness: 200,
      damping: 5,
      mass: 0.5,
    },
  },
};

interface ShinyHeadingProps extends Omit<HTMLMotionProps<"h1">, "ref"> {
  children: React.ReactNode;
  className?: string;
}

export const ShinyHeading = React.forwardRef<HTMLHeadingElement, ShinyHeadingProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <motion.h1
        ref={ref}
        className={cn(
          "relative text-center text-4xl md:text-5xl font-bold tracking-tight py-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500",
          className
        )}
        {...animationProps}
        {...props}
      >
        <span
          className="relative inline-block"
          style={{
            maskImage:
              "linear-gradient(-75deg,hsl(var(--primary)) calc(var(--x) + 20%),transparent calc(var(--x) + 30%),hsl(var(--primary)) calc(var(--x) + 100%))",
          }}
        >
          {children}
        </span>
      </motion.h1>
    );
  }
);

ShinyHeading.displayName = "ShinyHeading";
