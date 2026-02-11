"use client";

import { Asterisk, Instagram, Link as LinkIcon } from "lucide-react";

export default function SiteFooter() {
  return (
    <footer className="relative py-12 md:py-16 px-6 overflow-hidden">
      {/* Dark blue gradient background to frame the site */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#2774ae] via-[#002E5D] to-[#002E5D]" />
      
      <div className="relative z-10 container mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between gap-12 md:gap-16">
        {/* Left: Logo & Text */}
        <div className="flex flex-col items-center md:items-start gap-6 md:gap-7">
          <div className="w-20 h-20 md:w-24 md:h-24 relative">
            <Asterisk className="w-full h-full text-white" />
          </div>
          <div className="text-white font-bold text-2xl md:text-3xl lg:text-4xl uppercase tracking-widest leading-tight font-sans text-center md:text-left">
            San Diego<br/>Injury<br/>Prevention
          </div>
        </div>
        
        {/* Right: Social Links */}
        <div className="flex items-center justify-center md:justify-start gap-6 md:gap-7 text-white/90 text-lg md:text-xl font-medium font-sans">
          <span>let's connect</span>
          <a 
            href="https://www.instagram.com/sd__ipp/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-white transition-colors"
            aria-label="Instagram"
          >
            <Instagram className="w-7 h-7 md:w-8 md:h-8" />
          </a>
          <a 
            href="https://linktr.ee/sdinjurypreventionprogram" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-white transition-colors"
            aria-label="Linktree"
          >
            <LinkIcon className="w-7 h-7 md:w-8 md:h-8" />
          </a>
        </div>
      </div>
    </footer>
  );
}
