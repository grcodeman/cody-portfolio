"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import ProjectCard from "./ProjectCard";
import type { Project } from "@/lib/projects";

interface ProjectCarouselProps {
  projects: Project[];
}

export default function ProjectCarousel({ projects }: ProjectCarouselProps) {
  // Split projects into pairs for 2-row layout (1-row on mobile handled via CSS)
  const pairs: [Project, Project?][] = [];
  for (let i = 0; i < projects.length; i += 2) {
    pairs.push([projects[i], projects[i + 1]]);
  }

  const shouldAutoplay = projects.length > 6;

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: shouldAutoplay,
      align: "start",
      slidesToScroll: 1,
    },
    shouldAutoplay
      ? [Autoplay({ delay: 4500, stopOnInteraction: false, stopOnMouseEnter: true })]
      : []
  );

  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  // If few projects, show static grid
  if (projects.length <= 6) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    );
  }

  return (
    <div className="relative group">
      {/* Navigation Arrows */}
      <button
        onClick={scrollPrev}
        disabled={!canScrollPrev && !shouldAutoplay}
        className="absolute -left-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 dark:bg-zinc-800/80 backdrop-blur-sm p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 disabled:hidden"
        aria-label="Previous"
      >
        <FaChevronLeft className="w-4 h-4" />
      </button>

      <button
        onClick={scrollNext}
        disabled={!canScrollNext && !shouldAutoplay}
        className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 dark:bg-zinc-800/80 backdrop-blur-sm p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 disabled:hidden"
        aria-label="Next"
      >
        <FaChevronRight className="w-4 h-4" />
      </button>

      {/* Carousel */}
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-4">
          {pairs.map(([top, bottom], index) => (
            <div
              key={index}
              className="flex-none w-[85%] sm:w-[45%] lg:w-[32%] min-w-0"
            >
              <div className="flex flex-col gap-4">
                <ProjectCard project={top} />
                {bottom && (
                  <div className="hidden sm:block">
                    <ProjectCard project={bottom} />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
