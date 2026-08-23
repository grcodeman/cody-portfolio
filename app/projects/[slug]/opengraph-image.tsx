import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { projects } from "@/lib/projects";

export const alt = "Project by Cody Thornell";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const GRADIENT = "linear-gradient(90deg, #e11d48 0%, #6366f1 50%, #0ea5e9 100%)";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default async function OpengraphImage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug) ?? projects[0];

  // Satori can't fetch relative URLs, so the screenshot is inlined as a data URI.
  const shot = await readFile(join(process.cwd(), "public", project.images[0]));
  const shotSrc = `data:image/png;base64,${shot.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          background: "#000000",
          padding: "80px",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            width: 520,
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: 68,
              fontWeight: 700,
              letterSpacing: "-0.02em",
              lineHeight: 1.1,
              backgroundImage: GRADIENT,
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            {project.title}
          </div>
          {project.award ? (
            <div style={{ display: "flex", fontSize: 26, color: "#facc15", marginTop: 20 }}>
              {project.award}
            </div>
          ) : null}
          <div style={{ display: "flex", fontSize: 26, color: "#9ca3af", marginTop: 20 }}>
            {project.tech.slice(0, 4).join(" · ")}
          </div>
          <div style={{ display: "flex", height: 8, width: 260, marginTop: 36, background: GRADIENT }} />
          <div style={{ display: "flex", fontSize: 24, color: "#6b7280", marginTop: 36 }}>
            codythornell.com
          </div>
        </div>

        {/* gradient frame echoes the site's headings */}
        <div
          style={{
            display: "flex",
            width: 456,
            height: 384,
            borderRadius: 20,
            background: GRADIENT,
            padding: 6,
            flexShrink: 0,
          }}
        >
          <img
            src={shotSrc}
            width={444}
            height={372}
            style={{ width: 444, height: 372, borderRadius: 14, objectFit: "cover" }}
            alt=""
          />
        </div>
      </div>
    ),
    size
  );
}
