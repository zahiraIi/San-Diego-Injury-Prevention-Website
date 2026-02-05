'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface ShadowProps {
  className?: string;
}

export function Shadow({ className }: ShadowProps) {
  const [points, setPoints] = useState("152,4 170,38 204,56 170,74 152,108 134,74 100,56 134,38");

  useEffect(() => {
    const interval = setInterval(() => {
      setPoints(generatePoints());
    }, 800);

    return () => clearInterval(interval);
  }, []);

  // A function to generate random points
  function generatePoints(): string {
    const total = Math.floor(Math.random() * 60) + 4; // 4-64
    const r1 = Math.floor(Math.random() * 52) + 4; // 4-56
    const r2 = 56;
    const isOdd = (n: number): boolean => n % 2 === 1;
    let newPoints = '';
    
    const l = isOdd(total) ? total + 1 : total;
    for (let i = 0; i < l; i++) {
      const r = isOdd(i) ? r1 : r2;
      const a = (2 * Math.PI * i) / l - Math.PI / 2;
      const x = 152 + Math.round(r * Math.cos(a));
      const y = 56 + Math.round(r * Math.sin(a));
      newPoints += `${x},${y} `;
    }
    return newPoints.trim();
  }

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
            duration: 0.5, 
            ease: "easeInOut"
          }}
          points={points}
        />
      </g>
    </svg>
  );
}
