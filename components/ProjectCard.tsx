"use client";

import { useRef } from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import type { Project } from "@/lib/projects";

const MAX_TILT = 7; // degrees at the card's edge

const MAX_TECH = 3;
const TECH_CHAR_BUDGET = 26;

// Pick whole tech labels that fit one line; the rest collapse into "+N".
// Budgeting by length beats flex-shrink, which ellipsises every pill at once.
function visibleTech(tech: string[]) {
  const shown: string[] = [];
  let budget = TECH_CHAR_BUDGET;
  for (const t of tech.slice(0, MAX_TECH)) {
    if (t.length > budget && shown.length > 0) break;
    shown.push(t);
    budget -= t.length + 2;
  }
  return shown;
}

export default function ProjectCard({
  project,
  onClick,
}: {
  project: Project;
  onClick?: () => void;
}) {
  const headingId = `project-${project.slug}-title`;
  const awardId = `project-${project.slug}-award`;
  const shownTech = visibleTech(project.tech);
  const extraTech = project.tech.length - shownTech.length;
  const tiltRef = useRef<HTMLElement>(null);

  // Written straight to the node: a state update per mousemove would re-render
  // every card in the grid.
  const handleTilt = (e: React.MouseEvent) => {
    const el = tiltRef.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    el.style.transform = `perspective(800px) rotateX(${(-py * MAX_TILT).toFixed(2)}deg) rotateY(${(px * MAX_TILT).toFixed(2)}deg) scale(1.02)`;
  };

  const resetTilt = () => {
    if (tiltRef.current) tiltRef.current.style.transform = "";
  };

  return (
    <article
      ref={tiltRef}
      className="block h-full [transform-style:preserve-3d] transition-transform duration-300 ease-out will-change-transform"
      onClick={onClick}
      onMouseMove={handleTilt}
      onMouseLeave={resetTilt}
      aria-labelledby={project.award ? `${headingId} ${awardId}` : headingId}
    >
      <Card className="group h-full gap-0 overflow-hidden py-0 bg-gray-50 dark:bg-zinc-900 border-gray-200 dark:border-zinc-800 cursor-pointer transition-colors duration-300 hover:border-indigo-500/60 dark:hover:border-indigo-400/60">
        {/* every screenshot is exported at 940x788, so matching that ratio crops nothing */}
        <div className="relative aspect-[940/788] w-full overflow-hidden bg-gray-100 dark:bg-zinc-950">
          <Image
            src={project.images[0]}
            alt={project.title}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 300px"
          />
          {project.award && (
            <p
              id={awardId}
              className="absolute top-2 right-2 rounded-full bg-yellow-400/95 px-2 py-0.5 text-[10px] font-semibold text-black shadow-sm"
            >
              <span aria-hidden="true">🏆 </span>
              <span className="sr-only">Award: </span>
              {project.award}
            </p>
          )}
        </div>

        <CardContent className="flex flex-col gap-2 p-4">
          <h2 id={headingId} className="font-medium leading-snug">
            {project.title}
          </h2>
          {/* budgeted above so this never wraps to a second row */}
          <ul className="flex gap-1.5 overflow-hidden">
            {shownTech.map((tech) => (
              <li
                key={tech}
                className="shrink-0 rounded-full bg-gray-200/70 px-2 py-0.5 text-[11px] whitespace-nowrap text-gray-700 dark:bg-zinc-800 dark:text-gray-300"
              >
                {tech}
              </li>
            ))}
            {extraTech > 0 && (
              <li className="shrink-0 px-1 py-0.5 text-[11px] whitespace-nowrap text-gray-500 dark:text-gray-400">
                +{extraTech}
              </li>
            )}
          </ul>
        </CardContent>
      </Card>
    </article>
  );
}
