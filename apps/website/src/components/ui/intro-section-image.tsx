"use client";

import Image from "next/image";
import { useState } from "react";

const FALLBACK_SRCS = [
  "/images/board/wholeboard.webp",
  "/images/Fall Prevention Classes at Atria La Jolla/1.webp",
  "/images/Health Fairs/DSC04455.webp",
];

export default function IntroSectionImage() {
  const [srcIndex, setSrcIndex] = useState(0);
  const [showPlaceholder, setShowPlaceholder] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const src = FALLBACK_SRCS[srcIndex] ?? FALLBACK_SRCS[0];

  const handleError = () => {
    setIsLoaded(false);
    if (srcIndex < FALLBACK_SRCS.length - 1) {
      setSrcIndex((i) => i + 1);
    } else {
      setShowPlaceholder(true);
    }
  };

  return (
    <div
      data-reveal="right"
      data-delay=""
      className="relative aspect-[4/3] min-h-[200px] w-full rounded-2xl overflow-hidden shadow-2xl mt-6 md:mt-0 bg-muted"
    >
      {showPlaceholder ? (
        <div
          className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#1a5a8a]/20 to-[#001a3a]/30 text-[#1a5a8a] font-sans text-sm font-medium"
          aria-hidden
        >
          SDIPP board
        </div>
      ) : (
        <>
          {!isLoaded ? (
            <div
              className="absolute inset-0 animate-pulse bg-gradient-to-br from-slate-200 via-slate-100 to-slate-200"
              aria-hidden
            />
          ) : null}
          <Image
          src={src}
          alt="SDIPP community programs and outreach"
          fill
          className={`absolute inset-0 object-cover transition-opacity duration-500 ${
            isLoaded ? "opacity-100" : "opacity-0"
          }`}
          onError={handleError}
          onLoadingComplete={() => setIsLoaded(true)}
          priority
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        </>
      )}
    </div>
  );
}
