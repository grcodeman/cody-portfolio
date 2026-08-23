import type { Project } from "@/lib/projects";
import { SITE_URL } from "@/lib/site";

export default function ProjectJsonLd({ project }: { project: Project }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    description: project.description,
    keywords: project.tech.join(", "),
    url: `${SITE_URL}/projects/${project.slug}`,
    creator: { "@type": "Person", "@id": `${SITE_URL}/#person`, name: "Cody Thornell" },
    image: project.images.map((image) => `${SITE_URL}${image}`),
    ...(project.award ? { award: project.award } : {}),
    ...(project.links.length ? { sameAs: project.links.map((link) => link.url) } : {}),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
