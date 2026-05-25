import Link from "next/link";
import { ScrollingBanner } from "@/components/ScrollingBanner";
import { ReviewCard } from "@/components/ReviewCard";
import { SectionHeading } from "@/components/SectionHeading";
import { reviews } from "@/data/reviews";
import { VideoEmbed } from "@/components/VideoEmbed";

// -----------------------------------------------------------------------------
// Home page
//
// Sections:
//   1. Hero           — full-height intro with CTA
//   2. ScrollingBanner — moving word ticker
//   3. Video          — YouTube embed of the gyroscope in action
//   4. Reviews        — grid of ReviewCards
//   5. CTA strip      — book now prompt
// -----------------------------------------------------------------------------

// Words that scroll across the banner — edit freely
const bannerItems = [
  "ZERO GRAVITY",
  "HEART-POUNDING",
  "360° ROTATION",
  "BOOK YOUR EVENT",
  "THE CROWD PLEASER",
  "BAY AREA",
];

export default function HomePage() {
  return (
    <>
      {/* ── 1. Hero ─────────────────────────────────────────────────────── */}
      <section className="relative flex min-h-[90vh] flex-col items-center justify-center px-6 text-center">

        {/* Hexagon parallax photo */}
        <div
            style={{
              clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
              backgroundImage: "url('/images/hero.webp')",
              backgroundAttachment: "fixed",
              backgroundSize: "cover",
              backgroundPosition: "center",
              position: "absolute",
              inset: 0,
              zIndex: -2,
            }}
        />

        {/* Dark overlay — adjust opacity to taste (0.55 = 55% grey) */}
        <div
            style={{
              clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
              backgroundColor: "rgba(0,0,0,0.55)",
              position: "absolute",
              inset: 0,
              zIndex: -1,
            }}
        />

        <p className="mb-4 text-xs font-medium tracking-widest uppercase text-brand-orange">
          Available for events across the Bay Area
        </p>

        <h1 className="font-display text-6xl leading-none tracking-widest text-white md:text-8xl lg:text-9xl">
          HUMAN
          <br />
          GYROSCOPE
        </h1>

        <p className="mt-6 max-w-lg text-base leading-relaxed text-white/80">
          A full 360° human gyroscope ride that turns any event into an
          unforgettable experience.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link
              href="/book"
              className="rounded bg-brand-orange px-8 py-3 text-sm font-medium tracking-wider uppercase text-white transition-colors hover:bg-brand-orange-light"
          >
            Book for Your Event
          </Link>
          <Link
              href="/gallery"
              className="rounded border border-white/40 px-8 py-3 text-sm font-medium tracking-wider uppercase text-white transition-colors hover:border-white/70"
          >
            See It in Action
          </Link>
        </div>
      </section>

      {/* ── 2. Scrolling banner ─────────────────────────────────────────── */}
      <ScrollingBanner items={bannerItems} />

      {/* ── 3. Video ────────────────────────────────────────────────────── */}
        <section className="px-6 py-24">
        <SectionHeading
          eyebrow="See it in action"
          heading=""
          centered
        />
          <div className="px-6 py-24">
              <VideoEmbed
                  src="/videos/parkRide.mp4"
                  title="Human Gyroscope in action at a live event"
              />
          </div>
      </section>

      {/* ── 4. Reviews ──────────────────────────────────────────────────── */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <SectionHeading
          eyebrow="What people say"
          heading="CROWD APPROVED"
          subheading="Don't just take our word for it."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {reviews.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>
      </section>

      {/* ── 5. CTA strip ────────────────────────────────────────────────── */}
      <section className="border-t border-white/10 px-6 py-24 text-center">
        <h2 className="font-display text-4xl tracking-wide text-brand-black md:text-6xl">
          READY TO BOOK?
        </h2>
        <p className="mx-auto mt-4 max-w-md text-base text-brand-gray">
          Fill out our booking form and we&apos;ll get back to you within 24 hours.
        </p>
        <Link
          href="/book"
          className="mt-8 inline-block rounded bg-brand-orange px-10 py-4 text-sm font-medium tracking-wider uppercase text-brand-black transition-colors hover:bg-brand-orange-light"
        >
          Book the Human Gyroscope
        </Link>
      </section>
    </>
  );
}
