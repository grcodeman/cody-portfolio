import type { Project } from "@/lib/projects";

export default function ProjectsJsonLd({ projects }: { projects: Project[] }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: projects.map((project, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "CreativeWork",
        name: project.title,
        description: project.description,
        keywords: project.tech.join(", "),
        creator: { "@type": "Person", name: "Cody Thornell" },
        ...(project.award ? { award: project.award } : {}),
        ...(project.links[0] ? { url: project.links[0].url } : {}),
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
