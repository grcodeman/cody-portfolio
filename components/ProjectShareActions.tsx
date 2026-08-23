"use client";

import { useState } from "react";
import Link from "next/link";
import { Check, Link2, ArrowUpRight } from "lucide-react";
import { SITE_URL } from "@/lib/site";
import type { Project } from "@/lib/projects";

export default function ProjectShareActions({
  project,
  className = "",
  compact = false,
}: {
  project: Project;
  className?: string;
  /** icon-only, for the cards where there is no room for labels */
  compact?: boolean;
}) {
  const [copied, setCopied] = useState(false);
  const href = `/projects/${project.slug}`;

  const copy = async (e: React.MouseEvent) => {
    // these sit inside a clickable card; don't let the click open the modal
    e.stopPropagation();
    e.preventDefault();
    try {
      await navigator.clipboard.writeText(`${SITE_URL}${href}`);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // clipboard blocked (insecure origin, denied permission) — leave the label alone
    }
  };

  return (
    <div className={`flex items-center gap-1 ${className}`}>
      <Link
        href={href}
        onClick={(e) => e.stopPropagation()}
        title="Open project page"
        aria-label={`Open the ${project.title} page`}
        className="inline-flex items-center gap-1 rounded-md px-2 py-1 text-[11px] text-gray-600 transition-colors hover:bg-gray-200/70 hover:text-black dark:text-gray-400 dark:hover:bg-zinc-800 dark:hover:text-white"
      >
        <ArrowUpRight className="size-3.5" aria-hidden="true" />
        {!compact && "Page"}
      </Link>
      <button
        type="button"
        onClick={copy}
        title="Copy link"
        aria-label={`Copy a link to ${project.title}`}
        className="inline-flex items-center gap-1 rounded-md px-2 py-1 text-[11px] text-gray-600 transition-colors hover:bg-gray-200/70 hover:text-black dark:text-gray-400 dark:hover:bg-zinc-800 dark:hover:text-white"
      >
        {copied ? (
          <Check className="size-3.5 text-emerald-600 dark:text-emerald-400" aria-hidden="true" />
        ) : (
          <Link2 className="size-3.5" aria-hidden="true" />
        )}
        {!compact && <span aria-live="polite">{copied ? "Copied" : "Copy"}</span>}
        {compact && <span className="sr-only" aria-live="polite">{copied ? "Copied" : ""}</span>}
      </button>
    </div>
  );
}
