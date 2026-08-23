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
  copyOnly = false,
  size = "sm",
}: {
  project: Project;
  className?: string;
  /** icon-only, for the cards where there is no room for labels */
  compact?: boolean;
  /** on the project's own page the "Page" link would point at itself */
  copyOnly?: boolean;
  /** "md" matches the pill buttons in the detail page's action row */
  size?: "sm" | "md";
}) {
  const [copied, setCopied] = useState(false);
  const href = `/projects/${project.slug}`;

  const control =
    size === "md"
      ? "inline-flex items-center gap-1.5 rounded-full border border-gray-200 px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:border-indigo-500/60 hover:text-black dark:border-zinc-800 dark:text-gray-300 dark:hover:border-indigo-400/60 dark:hover:text-white"
      : "inline-flex items-center gap-1 rounded-md px-2 py-1 text-[11px] text-gray-600 transition-colors hover:bg-gray-200/70 hover:text-black dark:text-gray-400 dark:hover:bg-zinc-800 dark:hover:text-white";
  const icon = size === "md" ? "size-4" : "size-3.5";

  const copy = async (e: React.MouseEvent) => {
    // these sit inside a clickable card; don't let the click open the modal
    e.stopPropagation();
    e.preventDefault();
    try {
      await navigator.clipboard.writeText(`${SITE_URL}${href}`);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // clipboard blocked (insecure origin, denied permission) - leave the label alone
    }
  };

  return (
    <div className={`flex items-center gap-1 ${className}`}>
      {!copyOnly && (
        <Link
          href={href}
          onClick={(e) => e.stopPropagation()}
          title="Open project page"
          aria-label={`Open the ${project.title} page`}
          className={control}
        >
          <ArrowUpRight className={icon} aria-hidden="true" />
          {!compact && "Page"}
        </Link>
      )}
      <button
        type="button"
        onClick={copy}
        title="Copy link"
        aria-label={compact ? `Copy a link to ${project.title}` : undefined}
        className={control}
      >
        {copied ? (
          <Check className={`${icon} text-emerald-600 dark:text-emerald-400`} aria-hidden="true" />
        ) : (
          <Link2 className={icon} aria-hidden="true" />
        )}
        {!compact && (
          <span aria-live="polite">
            {copied ? "Copied" : size === "md" ? "Copy link" : "Copy"}
          </span>
        )}
        {compact && <span className="sr-only" aria-live="polite">{copied ? "Copied" : ""}</span>}
      </button>
    </div>
  );
}
