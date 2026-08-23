"use client";

import { useState } from "react";
import Image from "next/image";

export default function ProjectGallery({
  title,
  images,
}: {
  title: string;
  images: string[];
}) {
  const [active, setActive] = useState(0);
  const many = images.length > 1;

  return (
    <section
      aria-label={`${title} screenshots`}
      className="mx-auto flex w-full max-w-[32rem] flex-col items-center gap-3 sm:flex-row sm:items-start"
    >
      {/* every screenshot is exported at 940x788, so matching that ratio crops nothing */}
      <div className="relative w-full min-w-0 flex-1">
        {/* signature gradient, as a soft halo under the plate rather than on text */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-6 -bottom-3 -z-10 h-16 rounded-[50%] bg-gradient-to-r from-rose-600/25 via-indigo-500/25 to-sky-500/25 blur-2xl dark:from-rose-600/40 dark:via-indigo-500/40 dark:to-sky-500/40"
        />
        {/* The images are stacked and cross-dissolved with opacity alone: every
            frame has an image at full opacity, so the container never shows
            through mid-swap and nothing re-mounts (no reload, no flash). */}
        <div className="relative aspect-[940/788] w-full overflow-hidden rounded-xl border border-gray-200 bg-gray-100 shadow-lg shadow-indigo-950/10 dark:border-zinc-800 dark:bg-zinc-950 dark:shadow-black/50">
          {images.map((src, i) => (
            <Image
              key={src}
              src={src}
              alt={
                i !== active
                  ? ""
                  : many
                    ? `${title} screenshot ${i + 1} of ${images.length}`
                    : `${title} screenshot`
              }
              aria-hidden={i !== active ? true : undefined}
              fill
              priority={i === 0}
              className={`object-cover transition-opacity duration-300 ease-out motion-reduce:transition-none ${
                i === active ? "opacity-100" : "opacity-0"
              }`}
              sizes="(max-width: 639px) 100vw, 420px"
            />
          ))}
        </div>
      </div>

      {many && (
        // vertical rail beside the plate on sm+, horizontal under it on mobile.
        // `self-stretch` + `overflow-y-auto` keeps it from ever growing taller
        // than the plate; on mobile it scrolls sideways inside itself instead.
        <ul
          className="flex shrink-0 gap-3 overflow-x-auto sm:w-20 sm:flex-col sm:self-stretch sm:overflow-x-visible sm:overflow-y-auto"
          onKeyDown={(e) => {
            const delta =
              e.key === "ArrowDown" || e.key === "ArrowRight"
                ? 1
                : e.key === "ArrowUp" || e.key === "ArrowLeft"
                  ? -1
                  : 0;
            if (!delta) return;
            e.preventDefault();
            setActive((i) => (i + delta + images.length) % images.length);
          }}
        >
          {images.map((src, i) => (
            <li key={src} className="w-16 shrink-0 sm:w-full">
              <button
                type="button"
                onClick={() => setActive(i)}
                aria-label={`Show ${title} screenshot ${i + 1} of ${images.length}`}
                aria-current={i === active ? "true" : undefined}
                className={`relative block aspect-[940/788] w-full overflow-hidden rounded-md border bg-gray-100 transition-opacity duration-200 dark:bg-zinc-950 ${
                  i === active
                    ? "border-indigo-500 opacity-100 dark:border-indigo-400"
                    : "border-gray-200 opacity-55 hover:opacity-100 dark:border-zinc-800"
                }`}
              >
                <Image src={src} alt="" fill className="object-cover" sizes="80px" />
              </button>
            </li>
          ))}
        </ul>
      )}

      <p aria-live="polite" className="sr-only">
        {many ? `Screenshot ${active + 1} of ${images.length}` : ""}
      </p>
    </section>
  );
}
