"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface AnimatedIconProps {
  icon: LucideIcon;
  className?: string;
  size?: number;
  animateOnHover?: boolean;
}

export function AnimatedIcon({ 
  icon: Icon, 
  className, 
  size = 128,
  animateOnHover = true 
}: AnimatedIconProps) {
  return (
    <motion.div
      className={cn("flex items-center justify-center", className)}
      whileHover={animateOnHover ? { 
        scale: 1.1, 
        rotate: [0, -5, 5, -5, 0],
        transition: { duration: 0.5 }
      } : {}}
      animate={{
        y: [0, -5, 0],
      }}
      transition={{
        y: {
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        },
      }}
    >
      <Icon size={size} strokeWidth={1.5} />
    </motion.div>
  );
}

