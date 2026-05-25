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
          The Human Gyroscope started as a fun ride to bring to Burning Man and has since become the centerpiece attraction at hundreds
          of events. Our operators are trained, safety-certified, and
          experienced with riders of all ages.
        </p>
        <p>
          Every rental includes professional setup and teardown, a dedicated
          operator for the duration of your event, and all required safety
          equipment. We handle everything — you just enjoy the crowd reaction.
        </p>
      </div>
    </div>
  );
}
