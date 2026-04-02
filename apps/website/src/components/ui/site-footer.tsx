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
    <footer className="relative overflow-hidden bg-[#1B2A53] pt-12 pb-8">
      <div className="container mx-auto max-w-6xl px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between gap-10 md:gap-16">
          {/* Brand + Description */}
          <div className="flex flex-col gap-4 max-w-sm">
            <div className="flex items-center gap-3">
              <Asterisk className="w-8 h-8 text-white" aria-hidden />
              <span className="text-white font-heading font-bold text-2xl uppercase tracking-wide">
                SDIPP
              </span>
            </div>
            <p className="text-white/80 text-sm leading-relaxed">
              San Diego Injury Prevention Program is a student-run organization empowering the local community through education, outreach, and evidence-based injury prevention.
            </p>
            <div className="mt-2 text-white/60 text-xs">
              © {new Date().getFullYear()} SDIPP. All rights reserved.
            </div>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-wrap gap-x-12 gap-y-8 md:justify-end flex-1">
            {NAV_COLUMNS.map((col) => (
              <div key={col.heading} className="flex flex-col gap-4">
                <h3 className="text-white font-heading font-bold text-sm uppercase tracking-widest border-b border-white/20 pb-2">
                  {col.heading}
                </h3>
                <ul className="space-y-2">
                  {col.links.map((link) => (
                    <li key={link.href}>
                      <Link href={link.href} className="text-white/80 hover:text-white text-sm transition-colors">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
