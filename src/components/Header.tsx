"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navLinks } from "@/data/nav";

// -----------------------------------------------------------------------------
// Header
//
// - Sticky at the top of every page (set in RootLayout)
// - Active link is highlighted using the current pathname
// - Hamburger menu collapses nav on mobile
// -----------------------------------------------------------------------------
export function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-brand-bg/90 backdrop-blur-sm">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link
          href="/"
          className="font-display text-2xl tracking-widest text-brand-orange hover:text-brand-orange-light transition-colors"
        >
          HUMAN GYROSCOPE
        </Link>

        {/* Desktop nav */}
        <ul className="hidden gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`text-sm font-medium tracking-wider uppercase transition-colors hover:text-brand-orange ${
                  pathname === link.href
                    ? "text-brand-orange"
                    : "text-brand-gray-light"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA button — desktop */}
        <Link
          href="/book"
          className="hidden rounded border border-brand-orange px-5 py-2 text-sm font-medium tracking-wider uppercase text-brand-orange transition-colors hover:bg-brand-orange hover:text-brand-black md:block"
        >
          Book Now
        </Link>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
          className="flex flex-col gap-1.5 md:hidden"
        >
          <span
            className={`h-0.5 w-6 bg-brand-white transition-transform ${menuOpen ? "translate-y-2 rotate-45" : ""}`}
          />
          <span
            className={`h-0.5 w-6 bg-brand-white transition-opacity ${menuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`h-0.5 w-6 bg-brand-white transition-transform ${menuOpen ? "-translate-y-2 -rotate-45" : ""}`}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="border-t border-white/10 px-6 pb-4 md:hidden">
          <ul className="flex flex-col gap-4 pt-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`text-sm font-medium tracking-wider uppercase transition-colors hover:text-brand-orange ${
                    pathname === link.href
                      ? "text-brand-orange"
                      : "text-brand-gray-light"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/book"
                onClick={() => setMenuOpen(false)}
                className="inline-block rounded border border-brand-orange px-5 py-2 text-sm font-medium tracking-wider uppercase text-brand-orange"
              >
                Book Now
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
