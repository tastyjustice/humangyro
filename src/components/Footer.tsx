import Link from "next/link";
import { navLinks } from "@/data/nav";

// -----------------------------------------------------------------------------
// Footer
// -----------------------------------------------------------------------------
export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-brand-bg">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          {/* Brand */}
          <div>
            <p className="font-display text-xl tracking-widest text-brand-orange">
              HUMAN GYROSCOPE
            </p>
            <p className="mt-3 text-sm leading-relaxed text-brand-gray">
              Bringing the thrill of zero gravity to events across the Bay Area.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="mb-4 text-xs font-medium tracking-widest uppercase text-brand-gray">
              Navigation
            </p>
            <ul className="flex flex-wrap gap-x-6 gap-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-brand-teal-light hover:text-brand-teal transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & social */}
          <div>
            <p className="mb-4 text-xs font-medium tracking-widest uppercase text-brand-gray">
              Connect
            </p>
            <a
              href="https://www.instagram.com/humangyroscope/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-brand-gray-light hover:text-brand-orange transition-colors"
            >
              @humangyroscope on Instagram
            </a>
            <p>
              <a target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-brand-gray-light"
              >
                Email: info@humangyro.com
              </a>
            </p>
            <div className="mt-4">
              <Link
                href="/book"
                className="inline-block rounded border border-brand-orange px-5 py-2 text-sm font-medium tracking-wider uppercase text-brand-orange transition-colors hover:bg-brand-orange hover:text-brand-black"
              >
                Book Now
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 border-t border-white/10 pt-6 text-center text-xs text-brand-gray">
          © {currentYear} Human Gyroscope. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
