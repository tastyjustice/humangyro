"use client";

interface VideoEmbedProps {
    src: string;
    title: string;
}

export function VideoEmbed({ src, title }: VideoEmbedProps) {
    return (
        <div className="flex justify-center" aria-label={title}>
            <video
                src={src}
                controls
                playsInline
                preload="metadata"
                style={{ display: "block", maxWidth: "400px", width: "100%" }}
            />
        </div>
    );
}