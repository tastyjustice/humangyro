import type { Metadata } from "next";
import { SectionHeading } from "@/components/SectionHeading";
import { VideoEmbed } from "@/components/VideoEmbed";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "See the Human Gyroscope in action — photos and videos from real events across the Bay Area.",
};

// -----------------------------------------------------------------------------
// Gallery page
//
// HOW TO ADD PHOTOS:
//   1. Drop images into /public/gallery/  (e.g. event-1.jpg)
//   2. Add entries to the `photos` array below
//   3. Use Next.js <Image> for automatic optimization (already imported)
//
// HOW TO ADD VIDEOS:
//   1. Upload to YouTube (unlisted is fine if you don't want them public)
//   2. Add the video ID to the `videos` array below
// -----------------------------------------------------------------------------

interface GalleryPhoto {
  src: string;
  alt: string;
}

interface GalleryVideo {
  src: string;
  title: string;
}

const photos: GalleryPhoto[] = [
  // Add your photos here, e.g.:
  // { src: "/gallery/event-1.jpg", alt: "Rider spinning at 2024 company picnic" },
];

const videos: GalleryVideo[] = [
  { src: "/videos/parkRide.mp4", title: "Human Gyroscope at summer festival 2024" }

];

export default function GalleryPage() {

  return (
    <div className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading
        eyebrow="Photos & videos"
        heading="THE GYROSCOPE IN ACTION"
        subheading="Real moments from real events."
      />

      {/* Videos */}
      {videos.length > 0 && (
        <section className="mt-16">
          <h3 className="mb-8 font-display text-2xl text-brand-black">Videos</h3>
          <div className="grid gap-8 md:grid-cols-2">

          </div>
        </section>
      )}

      {/* Photos */}
      {photos.length > 0 ? (
        <section className="mt-16">
          <h3 className="mb-8 font-display text-2xl text-brand-black">Photos</h3>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
            {photos.map((photo) => (
              <div
                key={photo.src}
                className="aspect-square overflow-hidden rounded-lg bg-white/5"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="h-full w-full object-cover transition-transform hover:scale-105"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </section>
      ) : (
        // Placeholder shown until real photos are added
        <div className="mt-16 rounded-lg border border-dashed border-white/20 py-24 text-center">
          <p className="text-brand-gray">
            Photos coming soon — check our{" "}
            <a
              href="https://www.instagram.com/humangyroscope/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-orange hover:underline"
            >
              Instagram
            </a>{" "}
            in the meantime.
          </p>
        </div>
      )}
    </div>
  );
}
