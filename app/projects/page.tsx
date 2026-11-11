"use client";

import { useState } from "react";
import Header from "@/components/Header";
import ProjectFilter from "@/components/ProjectFilter";
import ProjectCard from "@/components/ProjectCard";
import ProjectModal from "@/components/ProjectModal";
import ProjectsJsonLd from "@/components/ProjectsJsonLd";
import { projects, type Category, type Project } from "@/lib/projects";

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filtered =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.categories.includes(activeCategory));

  return (
    <div className="text-black dark:text-white transition-colors duration-300">
      <ProjectsJsonLd projects={projects} />
      <div className="mx-auto max-w-xl px-4 py-20">
        <Header />

        <main className="space-y-10">
          <section className="space-y-8">
            <h1 className="text-4xl font-bold">Projects</h1>
            <p className="text-gray-600 dark:text-gray-400">
              Stuff I&apos;ve built, for work and for fun.
            </p>

            <ProjectFilter
              active={activeCategory}
              onChange={(cat) => setActiveCategory(cat)}
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:relative md:left-1/2 md:-translate-x-1/2 md:w-[min(56rem,calc(100vw-3rem))]">
              {filtered.map((project, i) => (
                <ProjectCard
                  key={project.slug}
                  project={project}
                  priority={i === 0}
                  onClick={() => setSelectedProject(project)}
                />
              ))}
            </div>

          </section>
        </main>
      </div>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}
