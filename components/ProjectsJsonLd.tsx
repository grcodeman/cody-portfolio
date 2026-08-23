import type { Project } from "@/lib/projects";
import { SITE_URL } from "@/lib/site";

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
        creator: { "@type": "Person", "@id": `${SITE_URL}/#person`, name: "Cody Thornell" },
        ...(project.award ? { award: project.award } : {}),
        ...(project.links[0] ? { url: project.links[0].url } : {}),
        ...(project.links.length > 1
          ? { sameAs: project.links.slice(1).map((link) => link.url) }
          : {}),
        ...(project.images[0] ? { image: `${SITE_URL}${project.images[0]}` } : {}),
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
