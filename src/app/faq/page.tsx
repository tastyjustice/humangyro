"use client";

import { useState } from "react";
import { SectionHeading } from "@/components/SectionHeading";

// -----------------------------------------------------------------------------
// FAQ page
//
// Data-driven accordion. To add/edit questions, just update the `faqs` array.
// No need to touch the Accordion component logic.
// -----------------------------------------------------------------------------

interface Faq {
  question: string;
  answer: string;
}

const faqs: Faq[] = [
  {
    question: "How long do I ride for?",
    answer:
        "We let the rider determine how long they would like to be on, but we give a time warning after 5 minutes for our very enthusiastic riders if there is a line.",
  },
  {
    question: "Will I get nauseous?",
    answer:
        "Nausea is very rare! Similar to driving vs riding in a car, when you're in the gyroscope you're the driver! People sometimes experience light dizziness that leaves quickly.",
  },
  {
    question: "How much space do you need?",
    answer:
      "The gyroscope needs approximately a 20×20 ft footprint with a minimum ceiling height of 13 ft for indoor events. Outdoor events are flexible, we'll assess the space with you. Generally we cannot go up stairs.",
  },
  {
    question: "How long does setup and teardown take?",
    answer:
      "Setup typically takes 60–90 minutes and teardown around 45 minutes. Factor this into your event timeline. We arrive early so the ride is ready when your guests are.",
  },
  {
    question: "What are the age and weight restrictions?",
    answer:
      "Riders must be at least 4 ft tall. All riders must be in good health. Pregnant riders and those with back or neck injuries should not use the gyroscope.",
  },
  {
    question: "Is it safe?",
    answer:
      "Yes. The Human Gyroscope is fully inspected and maintained to industry safety standards. A trained operator runs every session, and riders are secured with a full harness before each ride. We have a 0 incident/injury record for the 3 years of it's running.",
  },
  {
    question: "What areas do you serve?",
    answer:
      "We primarily serve the San Francisco Bay Area including San Jose, San Francisco, Oakland, and surrounding cities. Travel fees may apply for locations further out.",
  },
  {
    question: "How is pricing determined?",
    answer:
      "Pricing is based on duration, event location, and size of the event. Contact us via the booking form for a custom quote. We're flexible and will work with your budget!",
  },
  {
    question: "What if it rains?",
    answer:
      "The gyroscope can operate in light rain but not in heavy rain or high winds. We'll monitor the forecast and work with you on rescheduling if needed.",
  },
];

// ── Accordion item ──────────────────────────────────────────────────────────

interface AccordionItemProps {
  faq: Faq;
  isOpen: boolean;
  onToggle: () => void;
}

function AccordionItem({ faq, isOpen, onToggle }: AccordionItemProps) {
  return (
    <div className="border-b border-white/10">
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        className="flex w-full items-center justify-between py-5 text-left transition-colors hover:text-brand-orange"
      >
        <span className="text-sm font-medium text-brand-black">
          {faq.question}
        </span>
        <span
          className={`ml-4 shrink-0 text-brand-orange transition-transform ${isOpen ? "rotate-45" : ""}`}
          aria-hidden="true"
        >
          +
        </span>
      </button>

      {isOpen && (
        <div className="pb-5 text-sm leading-relaxed text-brand-gray">
          {faq.answer}
        </div>
      )}
    </div>
  );
}

// ── Page ────────────────────────────────────────────────────────────────────

export default function FaqPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  function toggle(index: number) {
    setOpenIndex((prev) => (prev === index ? null : index));
  }

  return (
    <div className="mx-auto max-w-2xl px-6 py-24">

      <SectionHeading
        heading="FAQ"
      />

      <div className="mt-12">
        {faqs.map((faq, index) => (
          <AccordionItem
            key={faq.question}
            faq={faq}
            isOpen={openIndex === index}
            onToggle={() => toggle(index)}
          />
        ))}
      </div>

      <div className="mt-16 rounded-lg border border-white/10 bg-white/5 p-6 text-center">
        <p className="text-sm text-brand-gray">
          Still have questions?{" "}
          <a href="/book" className="text-brand-orange hover:underline">
            Send us a message
          </a>{" "}
          and we'll get back to you within 24 hours.
        </p>
      </div>
    </div>
  );
}
