// -----------------------------------------------------------------------------
// SectionHeading
//
// Consistent section title treatment across all pages.
// Keeps heading styles in one place — change once, applies everywhere.
// -----------------------------------------------------------------------------

interface SectionHeadingProps {
  eyebrow?: string; // small label above the heading, e.g. "What people say"
  heading: string;
  subheading?: string;
  centered?: boolean;
}

export function SectionHeading({
  eyebrow,
  heading,
  subheading,
  centered = true,
}: SectionHeadingProps) {
  const alignment = centered ? "text-center" : "text-left";

  return (
    <div className={`flex flex-col gap-2 ${alignment}`}>
      {eyebrow && (
        <p className="text-xs font-medium tracking-widest uppercase text-brand-orange">
          {eyebrow}
        </p>
      )}
      <h2 className="font-display text-4xl tracking-wide text-brand-black md:text-5xl">
        {heading}
      </h2>
      {subheading && (
        <p className="mt-2 max-w-xl text-base leading-relaxed text-brand-gray">
          {subheading}
        </p>
      )}
    </div>
  );
}
