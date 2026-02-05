'use client';

import { useEffect, useState, useCallback } from 'react';
import { motion } from 'framer-motion';

interface ShadowProps {
  className?: string;
}

// Fixed number of points for smooth interpolation
const POINT_COUNT = 12;

function generatePoints(): string {
  const r1 = Math.random() * 40 + 16; // inner radius 16-56
  const r2 = 56; // outer radius stays constant
  let points = '';

  for (let i = 0; i < POINT_COUNT; i++) {
    const r = i % 2 === 1 ? r1 : r2;
    const a = (2 * Math.PI * i) / POINT_COUNT - Math.PI / 2;
    const x = 152 + Math.round(r * Math.cos(a));
    const y = 56 + Math.round(r * Math.sin(a));
    points += `${x},${y} `;
  }
  return points.trim();
}

export function Shadow({ className }: ShadowProps) {
  const [points, setPoints] = useState(() => generatePoints());

  const updatePoints = useCallback(() => {
    setPoints(generatePoints());
  }, []);

  useEffect(() => {
    const interval = setInterval(updatePoints, 500);
    return () => clearInterval(interval);
  }, [updatePoints]);

  return (
    <svg viewBox="0 0 304 112" className={className}>
      <g
        strokeWidth="2"
        stroke="currentColor"
        strokeLinejoin="round"
        fill="none"
        fillRule="evenodd"
      >
        <motion.polygon
          animate={{ points }}
          transition={{
            duration: 0.4,
            ease: [0.4, 0, 0.2, 1],
          }}
        />
      </g>
    </svg>
  );
}
