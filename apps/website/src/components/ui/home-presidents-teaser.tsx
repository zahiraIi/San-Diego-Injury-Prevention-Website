"use client";

import Link from "next/link";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";

const TEASER_TEXT =
  "The San Diego Injury Prevention Program was founded on a simple realization: injuries are not inevitable. Our mission is to reduce preventable injuries and promote safer environments for individuals and families throughout San Diego.";

export default function HomePresidentsTeaser() {
  return (
    <div className="w-full py-12 lg:py-16">
      <div className="mx-auto w-full px-4 md:px-10 lg:px-16">
        <div className="grid border border-white/25 rounded-xl p-8 md:p-10 grid-cols-1 gap-8 items-center lg:grid-cols-2 w-full backdrop-blur-xl shadow-2xl shadow-black/10 bg-[#002E5D]/30">
          <div className="flex gap-10 flex-col">
            <div className="flex gap-4 flex-col">
              <Badge
                variant="outline"
                className="border-white/40 text-white/90 w-fit"
              >
                Message
              </Badge>
              <h2 className="text-4xl lg:text-5xl xl:text-6xl tracking-tighter max-w-xl text-left font-bold text-white">
                Message from the Presidents
              </h2>
            </div>
            <p className="text-white/80 text-base md:text-lg leading-relaxed max-w-xl">
              {TEASER_TEXT}
            </p>
            <Link
              href="/message-from-presidents"
              className="inline-flex items-center gap-2 font-sans text-base font-medium text-white hover:text-white/90 transition-colors w-fit"
            >
              <span>Read full message</span>
              <span aria-hidden>→</span>
            </Link>
          </div>
          <div className="relative w-full max-w-md mx-auto lg:max-w-sm xl:max-w-md min-w-0 bg-muted rounded-md aspect-[3/4] sm:aspect-[4/5] lg:aspect-square overflow-hidden self-center">
            <Image
              src="/images/team/Presidents.webp"
              alt="SDIPP Presidents"
              fill
              loading="lazy"
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
