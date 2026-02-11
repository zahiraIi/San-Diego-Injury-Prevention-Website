"use client";
import React, { useEffect, useRef, useState } from "react";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  return (
    <div className="w-full font-sans md:px-10">
      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-start pt-10 md:pt-40 md:gap-10"
          >
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-md md:w-full">
              <div className="h-12 absolute left-3 md:left-3 w-12 rounded-full bg-accent-blue flex items-center justify-center border-2 border-white shadow-lg">
                <div className="h-5 w-5 rounded-full bg-white border-2 border-accent-blue" />
              </div>
              <h3 className="hidden md:block text-2xl md:pl-20 md:text-5xl font-sans text-[#1a3a5c]">
                {item.title}
              </h3>
            </div>

            <div className="relative pl-20 pr-4 md:pl-4 w-full">
              <h3 className="md:hidden block text-3xl mb-6 text-left font-sans text-[#1a3a5c]">
                {item.title}
              </h3>
              {item.content}
            </div>
          </div>
        ))}
        {/* Static timeline line - no scroll animation */}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-8 left-8 top-0 w-[3px] bg-gradient-to-b from-transparent via-accent-blue/30 to-transparent"
        />
      </div>
    </div>
  );
};
