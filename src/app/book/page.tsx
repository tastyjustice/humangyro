"use client";

import type { Metadata } from "next";
import { useState } from "react";
import { SectionHeading } from "@/components/SectionHeading";

// -----------------------------------------------------------------------------
// Book page
//
// Uses Formspree for form submission — no backend needed.
// Setup:
//   1. Create a free account at https://formspree.io
//   2. Create a new form and copy the form ID
//   3. Replace YOUR_FORMSPREE_ID below with that ID
//
// Formspree emails you the submission and handles spam filtering.
// -----------------------------------------------------------------------------

const FORMSPREE_ID = "mqejkkzj";

type FormStatus = "idle" | "submitting" | "success" | "error";

export default function BookPage() {
  const [status, setStatus] = useState<FormStatus>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="mx-auto max-w-2xl px-6 py-24">
      <SectionHeading
        eyebrow="Get in touch"
        heading="BOOK THE GYROSCOPE"
        subheading="Fill out the form and we'll get back to you within 24 hours to confirm availability and pricing."
      />

      {status === "success" ? (
        <div className="mt-10 rounded-lg border border-brand-orange/30 bg-brand-orange/10 p-8 text-center">
          <p className="font-display text-2xl text-brand-orange">REQUEST SENT!</p>
          <p className="mt-2 text-sm text-brand-gray-light">
            Thanks for reaching out. We'll be in touch shortly.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="mt-10 space-y-6">
          {/* Name */}
          <div>
            <label htmlFor="name" className="mb-2 block text-xs tracking-widest uppercase text-brand-gray">
              Your name *
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              className="w-full rounded border border-white/10 bg-white/5 px-4 py-3 text-sm text-brand-black placeholder-brand-gray outline-none transition-colors focus:border-brand-orange"
              placeholder="Jane Smith"
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="mb-2 block text-xs tracking-widest uppercase text-brand-gray">
              Email address *
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="w-full rounded border border-white/10 bg-white/5 px-4 py-3 text-sm text-brand-black placeholder-brand-gray outline-none transition-colors focus:border-brand-orange"
              placeholder="jane@example.com"
            />
          </div>

          {/* Event type */}
          <div>
            <label htmlFor="event_type" className="mb-2 block text-xs tracking-widest uppercase text-brand-gray">
              Event type *
            </label>
            <select
              id="event_type"
              name="event_type"
              required
              className="w-full rounded border border-white/10 bg-brand-bg px-4 py-3 text-sm text-brand-black outline-none transition-colors focus:border-brand-orange"
            >
              <option value="">Select one...</option>
              <option>Corporate / Team Building</option>
              <option>Birthday Party</option>
              <option>School / Community Event</option>
              <option>Festival / Fair</option>
              <option>Other</option>
            </select>
          </div>

          {/* Event date */}
          <div>
            <label htmlFor="event_date" className="mb-2 block text-xs tracking-widest uppercase text-brand-gray">
              Approximate event date *
            </label>
            <input
              id="event_date"
              name="event_date"
              type="date"
              required
              className="w-full rounded border border-white/10 bg-brand-bg px-4 py-3 text-sm text-brand-black outline-none transition-colors focus:border-brand-orange"
            />
          </div>

          {/* Location */}
          <div>
            <label htmlFor="location" className="mb-2 block text-xs tracking-widest uppercase text-brand-gray">
              Event location / city *
            </label>
            <input
              id="location"
              name="location"
              type="text"
              required
              className="w-full rounded border border-white/10 bg-white/5 px-4 py-3 text-sm text-brand-black placeholder-brand-gray outline-none transition-colors focus:border-brand-orange"
              placeholder="San Jose, CA"
            />
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="mb-2 block text-xs tracking-widest uppercase text-brand-gray">
              Anything else we should know?
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              className="w-full rounded border border-white/10 bg-white/5 px-4 py-3 text-sm text-brand-black placeholder-brand-gray outline-none transition-colors focus:border-brand-orange"
              placeholder="Expected attendance, space constraints, indoor/outdoor, etc."
            />
          </div>
          {/* Honeypot field — hidden from real users, bots fill it in, Formspree rejects those submissions */}
          <input type="text" name="_gotcha" style={{ display: "none" }} />

          {status === "error" && (
            <p className="text-sm text-red-400">
              Something went wrong. Please try again or email us directly.
            </p>
          )}

          <button
            type="submit"
            disabled={status === "submitting"}
            className="w-full rounded bg-brand-orange py-3 text-sm font-medium tracking-wider uppercase text-brand-black transition-colors hover:bg-brand-orange-light disabled:opacity-60"
          >
            {status === "submitting" ? "Sending..." : "Send Booking Request"}
          </button>
        </form>
      )}
    </div>
  );
}
