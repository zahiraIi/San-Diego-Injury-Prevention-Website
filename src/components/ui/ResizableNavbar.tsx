"use client";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import { useState } from "react";
import Link from "next/link";
import { IconChevronDown } from "@tabler/icons-react";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "Home", link: "/" },
  { 
    name: "About", 
    link: "/about",
    children: [
      { name: "Mission", link: "/mission" },
      { name: "Staff", link: "/staff" },
      { name: "Committees", link: "/committees" },
    ]
  },
  { name: "Events", link: "/events" },
  { name: "Gallery", link: "/gallery" },
  { name: "Apply", link: "/apply" },
  { name: "FAQ", link: "/faq" },
  { name: "More", link: "/more" },
  { name: "Contact", link: "/contact" },
];

export default function ResizableNavbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState<string | null>(null);

  return (
    <Navbar>
      {/* Desktop Navigation */}
      <NavBody>
        <NavbarLogo />
        <NavItems 
          items={navItems} 
          onItemClick={() => {}}
        />
      </NavBody>

      {/* Mobile Navigation */}
      <MobileNav>
        <MobileNavHeader>
          <NavbarLogo />
          <MobileNavToggle
            isOpen={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          />
        </MobileNavHeader>

        <MobileNavMenu
          isOpen={isMobileMenuOpen}
          onClose={() => setIsMobileMenuOpen(false)}
        >
          {navItems.map((item, idx) => (
            <div key={`mobile-link-${idx}`} className="w-full">
              {item.children ? (
                // Dropdown for mobile
                <div>
                  <button
                    onClick={() => setMobileDropdownOpen(
                      mobileDropdownOpen === item.name ? null : item.name
                    )}
                    className="flex items-center justify-between w-full text-neutral-600 dark:text-neutral-300 font-rosehot py-2"
                  >
                    <span>{item.name}</span>
                    <IconChevronDown className={cn(
                      "w-4 h-4 transition-transform",
                      mobileDropdownOpen === item.name && "rotate-180"
                    )} />
                  </button>
                  {mobileDropdownOpen === item.name && (
                    <div className="pl-4 space-y-2 mt-2">
                      {item.children.map((child, childIdx) => (
                        <Link
                          key={`mobile-child-${idx}-${childIdx}`}
                          href={child.link}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="block text-neutral-500 dark:text-neutral-400 font-rosehot py-1"
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  href={item.link}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="relative text-neutral-600 dark:text-neutral-300 font-rosehot block py-2"
                >
                  {item.name}
                </Link>
              )}
            </div>
          ))}
        </MobileNavMenu>
      </MobileNav>
    </Navbar>
  );
}
