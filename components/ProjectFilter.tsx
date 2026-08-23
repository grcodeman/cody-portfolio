"use client";

import { motion } from "framer-motion";
import { CATEGORIES, type Category } from "@/lib/projects";

interface ProjectFilterProps {
  active: Category;
  onChange: (category: Category) => void;
}

export default function ProjectFilter({ active, onChange }: ProjectFilterProps) {
  return (
    <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
      {CATEGORIES.map((category) => {
        const isActive = active === category;
        return (
          <button
            key={category}
            onClick={() => onChange(category)}
            aria-pressed={isActive}
            className={`relative whitespace-nowrap rounded-full px-4 py-1.5 text-sm font-medium transition-colors duration-200 ${
              isActive
                ? "z-10 text-white"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-zinc-800 dark:text-gray-400 dark:hover:bg-zinc-700"
            }`}
          >
            {/* one shared element across all pills, so it slides between them */}
            {isActive && (
              <motion.span
                layoutId="filter-blob"
                className="absolute inset-0 rounded-full bg-gradient-to-r from-rose-600 to-indigo-600"
                transition={{ type: "spring", stiffness: 380, damping: 32 }}
              />
            )}
            <span className="relative z-10">{category}</span>
          </button>
        );
      })}
    </div>
  );
}
