"use client";
import React, { useRef } from "react";
import { motion, useInView, Variants } from "motion/react";
import { cn } from "@/lib/utils";

interface TimelineContentProps {
  as?: keyof React.JSX.IntrinsicElements;
  children: React.ReactNode;
  animationNum: number;
  timelineRef: React.RefObject<HTMLElement | null>;
  customVariants?: Variants;
  className?: string;
}

export function TimelineContent({
  as = "div",
  children,
  animationNum,
  timelineRef,
  customVariants,
  className,
}: TimelineContentProps) {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px",
  });

  const Component = motion[as as keyof typeof motion] as any;

  const defaultVariants: Variants = {
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
    },
    hidden: {
      opacity: 0,
      y: 20,
      filter: "blur(10px)",
    },
  };

  const variants = customVariants || defaultVariants;

  return (
    <Component
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      custom={animationNum}
      className={cn(className)}
    >
      {children}
    </Component>
  );
}

