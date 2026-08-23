"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import type { Project } from "@/lib/projects";

export default function ProjectCard({
  project,
  onClick,
}: {
  project: Project;
  onClick?: () => void;
}) {
  const headingId = `project-${project.slug}-title`;
  const awardId = `project-${project.slug}-award`;

  return (
    <article
      className="block h-full"
      onClick={onClick}
      aria-labelledby={project.award ? `${headingId} ${awardId}` : headingId}
    >
      <Card className="bg-gray-50 dark:bg-zinc-900 border-gray-200 dark:border-zinc-800 transition-transform duration-300 hover:scale-105 cursor-pointer h-full relative overflow-hidden">
        {project.award && (
          <p
            id={awardId}
            className="absolute top-1.5 right-1.5 z-10 bg-yellow-500/90 text-black text-[10px] font-semibold px-1.5 py-0.5 rounded-full"
          >
            <span aria-hidden="true">🏆 </span>
            <span className="sr-only">Award: </span>
            {project.award}
          </p>
        )}
        <CardContent className="p-4">
          <Image
            src={project.images[0]}
            alt={project.title}
            width={600}
            height={400}
            className="rounded-lg mb-4 w-full aspect-video object-cover"
            sizes="(max-width: 640px) 100vw, 280px"
          />
          <div>
            <h3 id={headingId} className="font-medium">{project.title}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {project.tech.join(", ")}
            </p>
          </div>
        </CardContent>
      </Card>
    </article>
  );
}
