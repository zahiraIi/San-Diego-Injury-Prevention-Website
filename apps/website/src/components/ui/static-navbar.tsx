"use client";

import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";

type NavItem = {
  name: string;
  link?: string;
  children?: { name: string; link: string }[];
};

const navItems: NavItem[] = [
  { name: "Home", link: "/" },
  {
    name: "About",
    link: "/about",
    children: [
      { name: "Message from Presidents", link: "/message-from-presidents" },
      { name: "Staff", link: "/staff" },
      { name: "Committees", link: "/committees" },
    ],
  },
  {
    name: "Events",
    link: "/events",
    children: [
      { name: "Calendar", link: "/events" },
      { name: "Programs", link: "/programs" },
      { name: "Gallery", link: "/gallery" },
    ],
  },
  {
    name: "Resources",
    link: "/more",
    children: [
      { name: "For Community Members", link: "/more/community-members" },
      { name: "Partner With Us", link: "/more/partner-with-us" },
      { name: "For Volunteers", link: "/more/for-volunteers" },
    ],
  },
  { name: "FAQs", link: "/faqs" },
  { name: "Contact", link: "/contact" },
];

export default function StaticNavbar() {
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (ticking) return;
      ticking = true;

      requestAnimationFrame(() => {
        const currentY = window.scrollY;

        if (currentY < 10) {
          setIsVisible(true);
        } else if (currentY > lastScrollY.current + 5) {
          setIsVisible(false);
        } else if (currentY < lastScrollY.current - 5) {
          setIsVisible(true);
        }

        lastScrollY.current = currentY;
        ticking = false;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 md:px-12 transition-all duration-300",
          "bg-white border-b border-gray-200 py-3 shadow-sm",
          isVisible ? "translate-y-0" : "-translate-y-full"
        )}
      >
        {/* Left: Logo */}
        <Link href="/" className="relative h-14 w-14 md:h-16 md:w-16">
          <Image
            src="/logo.webp"
            alt="SDIPP Logo"
            fill
            className="object-contain"
            priority
            sizes="(max-width: 768px) 56px, 64px"
          />
        </Link>

        {/* Right: Navigation */}
        <div className="flex items-center gap-3 md:gap-8">
          {/* Links (desktop) */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) =>
              item.children ? (
                <div key={item.name} className="relative group">
                  <button
                    type="button"
                    onClick={() =>
                      setOpenDropdown(openDropdown === item.name ? null : item.name)
                    }
                    className="inline-flex items-center gap-1 font-heading text-[13px] md:text-[15px] uppercase tracking-wide font-bold text-[#1B2A53] hover:text-[#E2231A] transition-colors"
                  >
                    <span>{item.name}</span>
                    <ChevronDown
                      className={cn(
                        "w-4 h-4 transition-transform",
                        openDropdown === item.name && "-rotate-180",
                      )}
                    />
                  </button>
                  {openDropdown === item.name && (
                    <div className="absolute left-1/2 z-40 mt-3 w-48 -translate-x-1/2 bg-white border border-gray-200 py-2 shadow-lg">
                      {item.children.map((child) => (
                        <Link
                          key={child.name}
                          href={child.link}
                          onClick={() => setOpenDropdown(null)}
                          className="block px-4 py-2 text-left text-sm font-sans font-medium text-[#1B2A53] hover:bg-gray-50 hover:text-[#E2231A] transition-colors"
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.name}
                  href={item.link ?? "/"}
                  className="font-heading text-[13px] md:text-[15px] uppercase tracking-wide font-bold text-[#1B2A53] hover:text-[#E2231A] transition-colors"
                >
                  {item.name}
                </Link>
              ),
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-[#1B2A53] p-3 -m-1"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-8 h-8" />
            ) : (
              <Menu className="w-8 h-8" />
            )}
          </button>

          {/* Apply Button (desktop) */}
          <Link
            href="/apply"
            className="hidden md:flex items-center justify-center px-6 py-2.5 rounded-full border-2 border-[#1B2A53] text-[#1B2A53] font-heading font-bold uppercase tracking-wider text-sm hover:bg-[#1B2A53] hover:text-white transition-colors"
          >
            Apply
          </Link>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div
          className="md:hidden fixed top-[80px] left-0 right-0 z-40 h-[calc(100vh-80px)] overflow-y-auto bg-white flex flex-col px-6 py-8"
        >
          <div className="flex flex-col gap-6 w-full max-w-sm mx-auto">
            {navItems.map((item) =>
              item.children ? (
                <div key={item.name} className="flex flex-col w-full border-b border-gray-100 pb-4">
                  <button
                    type="button"
                    onClick={() =>
                      setOpenDropdown(openDropdown === item.name ? null : item.name)
                    }
                    className="flex items-center justify-between w-full font-heading text-lg font-bold uppercase tracking-wide text-[#1B2A53]"
                  >
                    <span>{item.name}</span>
                    <ChevronDown
                      className={cn(
                        "w-5 h-5 transition-transform",
                        openDropdown === item.name && "-rotate-180",
                      )}
                    />
                  </button>
                  {openDropdown === item.name && (
                    <div className="flex flex-col gap-3 pt-4 pl-4">
                      {item.children.map((child) => (
                        <Link
                          key={child.name}
                          href={child.link}
                          onClick={() => {
                            setOpenDropdown(null);
                            setMobileMenuOpen(false);
                          }}
                          className="font-sans text-base font-medium text-gray-600 hover:text-[#E2231A]"
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.name}
                  href={item.link ?? "/"}
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-heading text-lg font-bold uppercase tracking-wide text-[#1B2A53] border-b border-gray-100 pb-4 block"
                >
                  {item.name}
                </Link>
              ),
            )}
            <Link
              href="/apply"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-6 flex items-center justify-center px-6 py-3 rounded-full bg-[#1B2A53] text-white font-heading font-bold uppercase tracking-wider text-base text-center w-full shadow-md"
            >
              Apply Now
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
