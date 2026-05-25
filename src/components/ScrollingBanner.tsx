// -----------------------------------------------------------------------------
// ScrollingBanner
//
// CSS-only infinite marquee. The content is duplicated so the loop is seamless.
// Hover pauses the animation (see globals.css .marquee-track utility).
//
// Props:
//   items  — the words/phrases to scroll
//   speed  — Tailwind animation duration class (default: "animate-marquee")
// -----------------------------------------------------------------------------

interface ScrollingBannerProps {
  items: string[];
}

export function ScrollingBanner({ items }: ScrollingBannerProps) {
  // Duplicate items to create a seamless loop
  const repeated = [...items, ...items];

  return (
    <div
      className="marquee-track overflow-hidden border-y border-white/10 py-4"
      aria-hidden="true" // decorative — screen readers skip it
    >
      <ul className="marquee-content flex animate-marquee gap-12 whitespace-nowrap">
        {repeated.map((item, index) => (
          <li
            key={index}
            className="flex items-center gap-12 font-display text-3xl tracking-widest text-brand-orange"
          >
            {item}
            <span className="text-brand-gray" aria-hidden="true">
              ✦
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
