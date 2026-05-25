import Link from "next/link";

// -----------------------------------------------------------------------------
// 404 page — Next.js picks this up automatically for unmatched routes
// -----------------------------------------------------------------------------
export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-6 text-center">
      <p className="font-display text-8xl text-brand-orange">404</p>
      <h1 className="mt-4 font-display text-3xl tracking-wide text-brand-black">
        PAGE NOT FOUND
      </h1>
      <p className="mt-4 text-sm text-brand-gray">
        Looks like you spun out of bounds.
      </p>
      <Link
        href="/"
        className="mt-8 rounded border border-brand-orange px-6 py-3 text-sm tracking-wider uppercase text-brand-orange transition-colors hover:bg-brand-orange hover:text-brand-black"
      >
        Back to Home
      </Link>
    </div>
  );
}
