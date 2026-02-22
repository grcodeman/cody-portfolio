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
  return (
    <div className="block h-full" onClick={onClick}>
      <Card className="bg-gray-50 dark:bg-zinc-900 border-gray-200 dark:border-zinc-800 transition-transform duration-300 hover:scale-105 cursor-pointer h-full relative overflow-hidden">
        {project.award && (
          <div className="absolute top-2 right-2 z-10 bg-yellow-500/90 text-black text-xs font-semibold px-2 py-1 rounded-full">
            {"🏆 " + project.award}
          </div>
        )}
        <CardContent className="p-4">
          <div className="relative w-full aspect-video mb-4 rounded-lg overflow-hidden bg-zinc-800">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover rounded-lg"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
          <div>
            <h3 className="font-medium">{project.title}</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1 line-clamp-2">
              {project.description}
            </p>
            <p className="text-xs text-gray-600 dark:text-gray-500 mt-2">
              {project.tech.join(", ")}
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
