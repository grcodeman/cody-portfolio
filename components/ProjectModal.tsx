"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import ProjectShareActions from "@/components/ProjectShareActions";
import type { Project } from "@/lib/projects";

// direction: 1 = moving forward (new image enters from the right), -1 = backward
const slideVariants = {
  enter: (d: number) => ({ x: d === 0 ? "0%" : d > 0 ? "100%" : "-100%" }),
  center: { x: "0%" },
  exit: (d: number) => ({ x: d > 0 ? "-100%" : "100%" }),
};

export default function ProjectModal({
  project,
  onClose,
}: {
  project: Project | null;
  onClose: () => void;
}) {
  // [index, direction] - direction drives which side the next image slides in from
  const [[currentIndex, direction], setSlide] = useState<[number, number]>([0, 0]);

  // The shared-element image starts at the card's rect, outside the panel box.
  // overflow-y-auto would clip that, so scrolling is only enabled once it lands.
  const [settled, setSettled] = useState(false);

  const reduceMotion = useReducedMotion();

  useEffect(() => {
    setSlide([0, 0]);
    if (!project) {
      setSettled(false);
      return;
    }
    const t = setTimeout(() => setSettled(true), 450);
    return () => clearTimeout(t);
  }, [project]);

  const hasMultiple = project ? project.images.length > 1 : false;
  const count = project?.images.length ?? 0;

  const goTo = (next: number, dir: number) => setSlide([(next + count) % count, dir]);

  return (
    <Dialog open={!!project} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className={`bg-white dark:bg-zinc-900 border-gray-200 dark:border-zinc-800 sm:max-w-xl max-h-[90vh] p-0 ${settled ? "overflow-y-auto" : "overflow-visible"}`}>
        {project && (
          <>
            {/* layoutId matches the card thumbnail, so the modal grows out of the card */}
            <motion.div
              layoutId={reduceMotion ? undefined : `project-thumb-${project.slug}`}
              className="relative aspect-[940/788] w-full overflow-hidden"
              transition={{ type: "spring", stiffness: 300, damping: 34 }}
            >
              <AnimatePresence initial={false} custom={direction}>
                <motion.div
                  key={currentIndex}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ type: "spring", stiffness: 320, damping: 34 }}
                  className="absolute inset-0"
                >
                  <Image
                    src={project.images[currentIndex]}
                    alt={project.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, 560px"
                  />
                </motion.div>
              </AnimatePresence>
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white dark:from-zinc-900 to-transparent" />
              {project.award && (
                <p className="absolute top-3 left-3 bg-yellow-500/90 text-black text-xs font-semibold px-2 py-1 rounded-full">
                  <span aria-hidden="true">🏆 </span>
                  <span className="sr-only">Award: </span>
                  {project.award}
                </p>
              )}
              {hasMultiple && (
                <>
                  <button
                    onClick={() => goTo(currentIndex - 1, -1)}
                    className="absolute left-2 top-1/2 z-10 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-1.5 transition-colors"
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="size-5" />
                  </button>
                  <button
                    onClick={() => goTo(currentIndex + 1, 1)}
                    className="absolute right-2 top-1/2 z-10 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-1.5 transition-colors"
                    aria-label="Next image"
                  >
                    <ChevronRight className="size-5" />
                  </button>
                </>
              )}
              <DialogTitle className="absolute bottom-2 left-6 z-10 text-2xl font-bold text-black dark:text-white">
                {project.title}
              </DialogTitle>
              <DialogDescription className="sr-only">{project.description}</DialogDescription>
            </motion.div>

            {hasMultiple && (
              <div className="flex justify-center gap-1.5 -mt-2 mb-1">
                {project.images.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => goTo(i, i > currentIndex ? 1 : -1)}
                    className={`size-2 rounded-full transition-colors ${
                      i === currentIndex
                        ? "bg-gray-800 dark:bg-gray-200"
                        : "bg-gray-300 dark:bg-gray-600"
                    }`}
                    aria-label={`Go to image ${i + 1}`}
                  />
                ))}
              </div>
            )}

            <div className="px-6 pb-6 space-y-4">

              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-2.5 py-1 rounded-full bg-gray-100 dark:bg-zinc-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-zinc-700"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap items-center gap-2 pt-2">
                  {project.links.map((link) => (
                    <a
                      key={link.url}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm px-4 py-2 rounded-md bg-gray-100 dark:bg-zinc-800 text-gray-800 dark:text-gray-200 border border-gray-200 dark:border-zinc-700 hover:bg-gray-200 dark:hover:bg-zinc-700 transition-colors"
                    >
                      <ExternalLink className="size-3.5" />
                      {link.label}
                    </a>
                ))}
                <ProjectShareActions project={project} className="ml-auto" />
              </div>
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
