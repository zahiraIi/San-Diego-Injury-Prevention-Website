"use client";

import { useScroll, useTransform, motion } from "framer-motion";
import React, { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";

/** Distance from `el`'s top border to `ancestor`'s top border, using offsetParent chain (stable for sticky). */
function offsetTopToAncestor(el: HTMLElement, ancestor: HTMLElement): number | null {
  let top = 0;
  let n: HTMLElement | null = el;
  while (n && n !== ancestor) {
    top += n.offsetTop;
    n = n.offsetParent as HTMLElement | null;
  }
  return n === ancestor ? top : null;
}

/** Vertical center of the timeline dot relative to the timeline content root (scroll-independent). */
function measureLineEndToDotCenter(refEl: HTMLElement): number | null {
  const dots = refEl.querySelectorAll<HTMLElement>("[data-timeline-dot]");
  const lastDot = dots[dots.length - 1];
  if (!lastDot) return null;

  const fromRefTop = offsetTopToAncestor(lastDot, refEl);
  if (fromRefTop !== null) {
    return fromRefTop + lastDot.offsetHeight / 2;
  }

  const cr = refEl.getBoundingClientRect();
  const dr = lastDot.getBoundingClientRect();
  return dr.top - cr.top + dr.height / 2;
}

export interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

interface TimelineProps {
  data: TimelineEntry[];
  /** Optional section title (e.g. "Committees") */
  title?: string;
  /** Optional section subtitle */
  subtitle?: string;
}

export const Timeline = ({ data, title, subtitle }: TimelineProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  const updateHeight = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    const end = measureLineEndToDotCenter(el);
    if (end !== null && end > 0) {
      setHeight(end);
    } else {
      setHeight(el.getBoundingClientRect().height);
    }
  }, []);

  useLayoutEffect(() => {
    updateHeight();
    requestAnimationFrame(() => updateHeight());
  }, [data, updateHeight]);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new ResizeObserver(() => {
      requestAnimationFrame(() => updateHeight());
    });
    observer.observe(el);
    window.addEventListener("load", updateHeight);
    return () => {
      observer.disconnect();
      window.removeEventListener("load", updateHeight);
    };
  }, [data, updateHeight]);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 10%", "end end"],
  });

  const heightTransform = useTransform(scrollYProgress, (v) => v * height);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      className="w-full bg-transparent font-sans md:px-10"
      ref={containerRef}
    >
      {(title ?? subtitle) && (
        <div className="max-w-7xl mx-auto py-12 md:py-20 px-4 md:px-8 lg:px-10">
          {title && (
            <h2 className="text-lg md:text-4xl mb-4 text-[#1B2A53] max-w-4xl font-bold">
              {title}
            </h2>
          )}
          {subtitle && (
            <p className="text-[#0f172a]/80 text-sm md:text-base max-w-xl">
              {subtitle}
            </p>
          )}
        </div>
      )}

      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {data.map((item, index) => (
          <div
            key={index}
            data-timeline-row
            className="flex justify-start pt-10 md:pt-40 md:gap-10"
          >
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <div data-timeline-dot className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-white flex items-center justify-center border-2 border-[#1B2A53]/20 shadow-md">
                <div className="h-4 w-4 rounded-full bg-accent-blue/10 border-2 border-accent-blue" />
              </div>
              <h3 className="hidden md:block text-xl md:pl-20 md:text-5xl font-bold text-[#1B2A53]">
                {item.title}
              </h3>
            </div>

            <div className="relative pl-20 pr-4 md:pl-4 w-full">
              <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-[#1B2A53]">
                {item.title}
              </h3>
              {item.content}
            </div>
          </div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-[#1B2A53]/20 to-[#1B2A53]/20 [mask-image:linear-gradient(to_bottom,transparent_0%,black_8%,black_100%)]"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-accent-red via-accent-blue to-transparent rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
