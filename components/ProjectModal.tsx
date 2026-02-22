"use client";

import Image from "next/image";
import { ExternalLink } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";
import type { Project } from "@/lib/projects";

export default function ProjectModal({
  project,
  onClose,
}: {
  project: Project | null;
  onClose: () => void;
}) {
  return (
    <Dialog open={!!project} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="bg-white dark:bg-zinc-900 border-gray-200 dark:border-zinc-800 sm:max-w-xl max-h-[90vh] overflow-y-auto p-0">
        {project && (
          <>
            <div className="relative w-full">
              <Image
                src={project.image}
                alt={project.title}
                width={600}
                height={400}
                className="w-full h-auto"
                sizes="(max-width: 640px) 100vw, 560px"
              />
              <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white dark:from-zinc-900 to-transparent" />
              {project.award && (
                <div className="absolute top-3 right-3 bg-yellow-500/90 text-black text-xs font-semibold px-2 py-1 rounded-full">
                  {"🏆 " + project.award}
                </div>
              )}
              <DialogTitle className="absolute bottom-2 left-6 text-2xl font-bold text-black dark:text-white">
                {project.title}
              </DialogTitle>
            </div>

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

              {project.links.length > 0 && (
                <div className="flex flex-wrap gap-2 pt-2">
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
                </div>
              )}
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
