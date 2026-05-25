// -----------------------------------------------------------------------------
// Navigation links
//
// Defined once here, consumed by both Header and Footer.
// To add a page: add it here + create src/app/<slug>/page.tsx
// -----------------------------------------------------------------------------

export interface NavLink {
  label: string;
  href: string;
}

export const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Book", href: "/book" },
  { label: "FAQ", href: "/faq" },
];
