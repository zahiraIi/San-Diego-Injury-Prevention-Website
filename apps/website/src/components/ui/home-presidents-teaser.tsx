"use client";

import Link from "next/link";
import Image from "next/image";

const TEASER_TEXT =
  "The San Diego Injury Prevention Program was founded on a simple realization: injuries are not inevitable. Our mission is to reduce preventable injuries and promote safer environments for individuals and families throughout San Diego.";

export default function HomePresidentsTeaser() {
  return (
    <div className="w-full py-12 lg:py-16">
      <div className="mx-auto w-full px-4 md:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center w-full">
          <div className="flex flex-col gap-6 order-2 lg:order-1">
            <span className="text-[#E2231A] uppercase font-bold text-sm tracking-widest">
              From Our Leadership
            </span>
            <h2 className="text-5xl lg:text-6xl xl:text-7xl font-heading font-bold text-white uppercase leading-none tracking-wide">
              MESSAGE FROM THE PRESIDENTS
            </h2>
            <p className="text-white text-lg md:text-xl leading-relaxed max-w-xl font-medium mt-4">
              {TEASER_TEXT}
            </p>
            <Link
              href="/message-from-presidents"
              className="mt-6 inline-flex items-center justify-center px-8 py-3 bg-[#E2231A] border-2 border-[#E2231A] text-white rounded-full font-heading font-bold uppercase tracking-wider hover:bg-transparent hover:text-[#E2231A] transition-colors w-fit"
            >
              Read full message
            </Link>
          </div>
          <div className="relative w-full aspect-square lg:aspect-[4/3] order-1 lg:order-2 overflow-hidden bg-gray-200">
            <Image
              src="/images/team/Presidents.webp"
              alt="SDIPP Presidents"
              fill
              loading="lazy"
              className="object-cover object-top"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
