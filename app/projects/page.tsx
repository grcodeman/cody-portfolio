"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProjectFilter from "@/components/ProjectFilter";
import ProjectCard from "@/components/ProjectCard";
import ProjectModal from "@/components/ProjectModal";
import { projects, type Category, type Project } from "@/lib/projects";

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filtered =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.categories.includes(activeCategory));

  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white transition-colors duration-300">
      <div className="mx-auto max-w-4xl px-4 py-20">
        <Header />

        <main className="space-y-10">
          <motion.section
            initial={{opacity: 0, y: 100}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.8}}
            className="space-y-8"
          >
            <h1 className="text-4xl font-bold bg-gradient-to-r from-rose-600 via-indigo-500 to-sky-500 bg-clip-text text-transparent inline-block">
              Projects
            </h1>
            <p className="text-gray-600 dark:text-gray-400">
              A collection of things I&apos;ve built, hacked, and shipped.
            </p>

            <ProjectFilter
              active={activeCategory}
              onChange={(cat) => setActiveCategory(cat)}
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {filtered.map((project) => (
                <ProjectCard
                  key={project.slug}
                  project={project}
                  onClick={() => setSelectedProject(project)}
                />
              ))}
            </div>

          </motion.section>

          <Footer />
        </main>
      </div>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}
