"use client";

import Grainient from "@/components/ui/Grainient";

/** Blue/white Grainient for use in any section (no animation). Renders absolute inset-0 by default. */
export default function GrainientBlueSection({ className = "" }: { className?: string }) {
  return (
    <div className={`absolute inset-0 ${className}`.trim()}>
      <Grainient
        color1="#8FBFD9"
        color2="#1a5a8a"
        color3="#001a3a"
        timeSpeed={0}
        grainAnimated={false}
        className="w-full h-full"
      />
    </div>
  );
}
