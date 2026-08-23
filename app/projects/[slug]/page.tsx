import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProjectGallery from "@/components/ProjectGallery";
import ProjectJsonLd from "@/components/ProjectJsonLd";
import ProjectShareActions from "@/components/ProjectShareActions";
import { projects, type Project } from "@/lib/projects";
import { SITE_NAME } from "@/lib/site";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};

  const url = `/projects/${project.slug}`;
  const title = `${project.title} | ${SITE_NAME}`;

  return {
    // app/projects/layout.tsx sets a plain string title, which clears the root
    // "%s | Cody Thornell" template for its children - so apply the suffix here.
    title: { absolute: title },
    description: project.description,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      title,
      description: project.description,
      url,
    },
    twitter: { title, description: project.description },
  };
}

// Same-category projects first, then anything else, so every project gets three.
function relatedProjects(current: Project) {
  const rest = projects.filter((p) => p.slug !== current.slug);
  const sameCategory = rest.filter((p) =>
    p.categories.some((c) => current.categories.includes(c))
  );
  const seen = new Set(sameCategory.map((p) => p.slug));
  return [...sameCategory, ...rest.filter((p) => !seen.has(p.slug))].slice(0, 3);
}

const LABEL = "text-[11px] font-semibold tracking-[0.14em] text-gray-600 uppercase dark:text-gray-400";

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  const [primaryLink, ...otherLinks] = project.links;
  const related = relatedProjects(project);

  return (
    <div className="min-h-screen bg-white text-black transition-colors duration-300 dark:bg-black dark:text-white">
      <ProjectJsonLd project={project} />
      <div className="mx-auto max-w-xl px-4 py-20">
        <Header />

        <main>
          {/* The screenshots are the point of this page, so the whole article
              widens out of the prose column on md+ (contained: 100vw - 3rem). */}
          <div className="space-y-14 md:relative md:left-1/2 md:w-[min(40rem,calc(100vw-3rem))] md:-translate-x-1/2">
            <article className="space-y-8">
              {/* ---------- masthead: everything resolved before the stage ---------- */}
              <div className="space-y-5">
                {/* Its own block on its own line - a `flex` container can never
                    share a line box with the h1 below it, which is the bug that
                    made the old back link collide with the title. */}
                <nav aria-label="Breadcrumb">
                  <Link
                    href="/projects"
                    className="inline-flex w-fit items-center gap-1.5 text-[11px] font-semibold tracking-[0.14em] text-gray-600 uppercase transition-colors hover:text-black dark:text-gray-400 dark:hover:text-white"
                  >
                    <ArrowLeft className="size-3.5" aria-hidden="true" />
                    All projects
                  </Link>
                </nav>

                <ul className="flex flex-wrap items-center gap-2">
                  {project.award && (
                    <li className="rounded-full bg-yellow-400/95 px-2.5 py-1 text-xs font-semibold text-black">
                      <span aria-hidden="true">🏆 </span>
                      <span className="sr-only">Award: </span>
                      {project.award}
                    </li>
                  )}
                  {project.categories.map((category) => (
                    <li
                      key={category}
                      className="rounded-full border border-gray-200 px-2.5 py-1 text-xs font-medium text-gray-600 dark:border-zinc-800 dark:text-gray-400"
                    >
                      {category}
                    </li>
                  ))}
                </ul>

                {/* faded in rather than transformed - a moving bg-clip-text
                    gradient shimmers on this site. */}
                <h1 className="animate-in fade-in max-w-3xl pb-1 text-4xl font-bold tracking-tight text-balance duration-700 motion-reduce:animate-none sm:text-5xl">
                  <span className="bg-gradient-to-r from-rose-600 via-indigo-500 to-sky-500 bg-clip-text text-transparent">
                    {project.title}
                  </span>
                </h1>

                <p className="max-w-2xl text-lg leading-relaxed text-gray-600 dark:text-gray-400">
                  {project.description}
                </p>

                {/* Always renders: the copy-link action stands in for projects
                    with no external links, so there is never an empty section. */}
                <div className="flex flex-wrap items-center gap-2 pt-1">
                  {primaryLink && (
                    <a
                      href={primaryLink.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-rose-600 via-indigo-500 to-sky-500 px-4 py-2 text-sm font-medium text-white shadow-sm transition-opacity hover:opacity-90"
                    >
                      {primaryLink.label}
                      <ArrowUpRight className="size-4" aria-hidden="true" />
                    </a>
                  )}
                  {otherLinks.map((link) => (
                    <a
                      key={link.url}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-full border border-gray-200 px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:border-indigo-500/60 hover:text-black dark:border-zinc-800 dark:text-gray-300 dark:hover:border-indigo-400/60 dark:hover:text-white"
                    >
                      {link.label}
                      <ArrowUpRight className="size-4" aria-hidden="true" />
                    </a>
                  ))}
                  <ProjectShareActions project={project} copyOnly size="md" />
                </div>

                <div
                  aria-hidden="true"
                  className="h-0.5 w-full rounded-full bg-gradient-to-r from-rose-600 via-indigo-500 to-sky-500"
                />

                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-2">
                  <h2 className={LABEL}>Built with</h2>
                  <ul className="flex flex-wrap gap-1.5">
                    {project.tech.map((tech) => (
                      <li
                        key={tech}
                        className="rounded-full bg-gray-100 px-2.5 py-1 text-xs text-gray-700 dark:bg-zinc-900 dark:text-gray-300"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* ---------- the stage ----------
                  Deliberately narrower than the text column: the screenshots are
                  940x788 (portrait-ish), so a full-width stage swallows the fold. */}
              <ProjectGallery title={project.title} images={project.images} />
            </article>

            <section aria-labelledby="more-projects" className="space-y-5">
              <div className="flex items-baseline justify-between gap-4 border-t border-gray-200 pt-6 dark:border-zinc-800">
                {/* quiet register, so the h1 keeps the page's only gradient heading */}
                <h2 id="more-projects" className={LABEL}>
                  More projects
                </h2>
                <Link
                  href="/projects"
                  className="shrink-0 text-sm font-medium text-indigo-600 transition-colors hover:text-indigo-500 dark:text-indigo-400"
                >
                  View all <span aria-hidden="true">&rarr;</span>
                </Link>
              </div>

              <ul className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                {related.map((item) => (
                  <li key={item.slug}>
                    <Link
                      href={`/projects/${item.slug}`}
                      className="group block overflow-hidden rounded-xl border border-gray-200 bg-gray-50 transition-colors hover:border-indigo-500/60 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-indigo-400/60"
                    >
                      <div className="relative aspect-[940/788] w-full overflow-hidden bg-gray-100 dark:bg-zinc-950">
                        <Image
                          src={item.images[0]}
                          alt=""
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                          sizes="(max-width: 640px) 100vw, 300px"
                        />
                      </div>
                      <div className="space-y-1 p-3">
                        <p className="text-sm font-medium">{item.title}</p>
                        <p className="truncate text-xs text-gray-600 dark:text-gray-400">
                          {item.tech.slice(0, 2).join(", ")}
                        </p>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </section>

            <Footer />
          </div>
        </main>
      </div>
    </div>
  );
}
