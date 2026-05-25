// -----------------------------------------------------------------------------
// Review data
//
// Add new reviews here. No database needed — this file is the source of truth.
// Each review is statically typed so TypeScript catches any missing fields.
// -----------------------------------------------------------------------------

export interface Review {
  id: number;
  name: string;
  location: string;
  rating: number; // 1–5
  quote: string;
  event?: string; // optional: e.g. "Corporate Team Building, April 2024"
}

export const reviews: Review[] = [
  {
    id: 1,
    name: "Sarah M.",
    location: "San Jose, CA",
    rating: 5,
    quote:
      "Absolutely the most thrilling experience at our company picnic. Everyone was lining up for a second turn — we couldn't get them off it!",
    event: "Corporate Event, June 2024",
  }
];
