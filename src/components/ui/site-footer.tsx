"use client";

import Link from "next/link";
import { Asterisk, Instagram, Link as LinkIcon, Mail } from "lucide-react";
import GrainientBlueSection from "@/components/ui/GrainientBlueSection";

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
    <footer className="relative overflow-hidden">
      <GrainientBlueSection />
      {/* Dark overlay for consistent contrast */}
      <div className="absolute inset-0 bg-[#001a2e]/60 z-[1]" />

      {/* Main footer content */}
      <div className="relative z-10 container mx-auto max-w-6xl px-6 pt-12 md:pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8">
          {/* Brand column */}
          <div className="md:col-span-4 flex flex-col items-center md:items-start gap-4">
            <div className="flex items-center gap-3">
              <Asterisk className="w-10 h-10 text-white" />
              <span className="text-white font-bold text-lg md:text-xl uppercase tracking-widest leading-tight font-sans">
                SDIPP
              </span>
            </div>
            <p className="text-white/85 text-sm leading-relaxed text-center md:text-left max-w-xs font-medium">
              Student-run organization empowering seniors in San Diego through
              fitness programs, community outreach, and fall prevention education.
            </p>

            {/* Social icons */}
            <div className="flex items-center gap-4 mt-2">
              <a
                href="https://www.instagram.com/sd__ipp/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/85 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://linktr.ee/sdinjurypreventionprogram"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/85 hover:text-white transition-colors"
                aria-label="Linktree"
              >
                <LinkIcon className="w-5 h-5" />
              </a>
              <a
                href="mailto:sdinjuryprevention@gmail.com"
                className="text-white/85 hover:text-white transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Nav columns */}
          {NAV_COLUMNS.map((col) => (
            <div
              key={col.heading}
              className="md:col-span-2 flex flex-col items-center md:items-start"
            >
              <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-3">
                {col.heading}
              </h3>
              <ul className="space-y-2 text-center md:text-left">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-white/85 hover:text-white text-sm font-medium transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider + copyright */}
        <div className="border-t border-white/25 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-white/70 text-xs font-medium">
          <span>&copy; {new Date().getFullYear()} San Diego Injury Prevention Program. All rights reserved.</span>
          <span className="hidden sm:inline">San Diego, California</span>
        </div>
      </div>
    </footer>
  );
}
