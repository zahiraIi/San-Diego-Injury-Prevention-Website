"use client";

import Link from "next/link";
import { Asterisk } from "lucide-react";

const NAV_COLUMNS = [
  {
    heading: "Organization",
    links: [
      { label: "About", href: "/about" },
      { label: "Staff", href: "/staff" },
      { label: "Committees", href: "/committees" },
    ],
  },
  {
    heading: "Get Involved",
    links: [
      { label: "Apply", href: "/apply" },
      { label: "Events", href: "/events" },
      { label: "Programs", href: "/programs" },
      { label: "Gallery", href: "/gallery" },
    ],
  },
  {
    heading: "Resources",
    links: [
      { label: "More", href: "/more" },
      { label: "Contact", href: "/contact" },
    ],
  },
];

export default function SiteFooter() {
  return (
    <footer className="relative overflow-hidden bg-grainient-blue">
      {/* Mobile: compact strip — same gradient as hero; logo left / connect right */}
      <div className="md:hidden relative z-10">
        <div className="flex items-center justify-between gap-4 px-5 py-5 bg-grainient-blue">
          <div className="flex flex-col gap-1.5 min-w-0 flex-1">
            <div className="flex items-center gap-2">
              <Asterisk className="w-7 h-7 text-white flex-shrink-0" strokeWidth={2} aria-hidden />
              <span className="text-white font-bold text-xs uppercase tracking-widest font-sans">
                SDIPP
              </span>
            </div>
            <p className="text-white/90 text-[10px] uppercase tracking-wider leading-tight max-w-[140px]">
              San Diego Injury Prevention Program
            </p>
          </div>
          <div className="flex flex-col items-end gap-1.5 flex-shrink-0">
            <span className="text-white/80 text-[11px] font-medium">Let&apos;s connect</span>
          </div>
        </div>
      </div>

      {/* Desktop: compact single-row footer */}
      <div className="hidden md:block relative z-10 container mx-auto max-w-6xl px-6 pt-8 pb-6">
        <div className="flex flex-wrap items-start justify-between gap-x-10 gap-y-6">
          {/* Brand + social */}
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <Asterisk className="w-8 h-8 text-white" aria-hidden />
              <span className="text-white font-bold text-base uppercase tracking-widest font-sans">
                SDIPP
              </span>
            </div>
            <p className="text-white/80 text-xs max-w-xs leading-snug">
              Student-run organization empowering their San Diego community through education, outreach, and injury prevention.
            </p>
          </div>

          {/* Nav: one row of columns */}
          {NAV_COLUMNS.map((col) => (
            <div key={col.heading} className="flex flex-col gap-1.5">
              <h3 className="text-white font-semibold text-xs uppercase tracking-wider">
                {col.heading}
              </h3>
              <ul className="space-y-1 text-left">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-white/80 hover:text-white text-xs font-medium transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}
