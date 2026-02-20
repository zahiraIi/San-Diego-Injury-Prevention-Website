"use client";

import { useState } from "react";

const FALLBACK_SRCS = [
  "/images/board/wholeboard.webp",
  "/images/vitals-training/IMG_7695.webp",
  "/images/volunteering/volunteer1.webp",
];

export default function IntroSectionImage() {
  const [srcIndex, setSrcIndex] = useState(0);
  const [showPlaceholder, setShowPlaceholder] = useState(false);
  const src = FALLBACK_SRCS[srcIndex] ?? FALLBACK_SRCS[0];

  const handleError = () => {
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
        /* eslint-disable-next-line @next/next/no-img-element */
        <img
          src={src}
          alt="SDIPP board members"
          className="absolute inset-0 h-full w-full object-cover"
          onError={handleError}
          loading="eager"
        />
      )}
    </div>
  );
}
