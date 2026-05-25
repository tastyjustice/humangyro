import type { Metadata } from "next";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about the Human Gyroscope — who we are, what we do, and why every event deserves a moment of zero gravity.",
};

// -----------------------------------------------------------------------------
// About page
// Replace the placeholder copy below with your real story.
// -----------------------------------------------------------------------------
export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-24">
      <SectionHeading
        eyebrow="Our story"
        heading="ABOUT THE HUMAN GYROSCOPE"
      />

      <div className="mt-10 space-y-6 text-base leading-relaxed text-brand-gray-light">
        <p>
          The Human Gyroscope is a full 360° multi-axis ride that simulates the
          sensation of weightlessness. We bring it to events across the Bay
          Area — from Fortune 500 company picnics to backyard birthday parties.
        </p>
        <p>
          {/* Replace with your real origin story */}
          Founded by [Your Name], the Human Gyroscope started as a passion
          project and has since become the centerpiece attraction at hundreds
          of events. Our operators are trained, safety-certified, and
          experienced with riders of all ages.
        </p>
        <p>
          Every rental includes professional setup and teardown, a dedicated
          operator for the duration of your event, and all required safety
          equipment. We handle everything — you just enjoy the crowd reaction.
        </p>
      </div>

      {/* Stats strip */}
      <div className="mt-16 grid grid-cols-3 gap-6 border-t border-white/10 pt-12 text-center">
        {[
          { value: "500+", label: "Events Hosted" },
          { value: "10k+", label: "Riders" },
          { value: "5★", label: "Average Rating" },
        ].map((stat) => (
          <div key={stat.label}>
            <p className="font-display text-4xl text-brand-orange">{stat.value}</p>
            <p className="mt-1 text-xs tracking-widest uppercase text-brand-gray">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
