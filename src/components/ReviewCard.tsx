import type { Review } from "@/data/reviews";

// -----------------------------------------------------------------------------
// ReviewCard
//
// Renders a single review. Receives a strongly-typed Review object.
// The star rating is rendered as filled/empty Unicode stars for simplicity
// (swap for an SVG icon if you want more control over appearance).
// -----------------------------------------------------------------------------

interface ReviewCardProps {
  review: Review;
}

export function ReviewCard({ review }: ReviewCardProps) {
  const stars = Array.from({ length: 5 }, (_, i) => i < review.rating);

  return (
    <article className="flex flex-col gap-4 rounded-lg border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
      {/* Stars */}
      <div className="flex gap-1" aria-label={`${review.rating} out of 5 stars`}>
        {stars.map((filled, i) => (
          <span
            key={i}
            className={filled ? "text-brand-orange" : "text-brand-gray"}
            aria-hidden="true"
          >
            ★
          </span>
        ))}
      </div>

      {/* Quote */}
      <blockquote className="flex-1 text-sm leading-relaxed text-brand-gray-light">
        &ldquo;{review.quote}&rdquo;
      </blockquote>

      {/* Attribution */}
      <footer className="border-t border-white/10 pt-4">
        <p className="text-sm font-medium text-brand-black">{review.name}</p>
        <p className="text-xs text-brand-gray">{review.location}</p>
        {review.event && (
          <p className="mt-1 text-xs text-brand-orange">{review.event}</p>
        )}
      </footer>
    </article>
  );
}
