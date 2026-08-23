import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const alt = "Cody Thornell — IT and Software Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const GRADIENT = "linear-gradient(90deg, #e11d48 0%, #6366f1 50%, #0ea5e9 100%)";

export default async function OpengraphImage() {
  // Satori can't fetch relative URLs, so the avatar is inlined as a data URI.
  const pfp = await readFile(join(process.cwd(), "public/pfp.png"));
  const pfpSrc = `data:image/png;base64,${pfp.toString("base64")}`;

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
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <div
            style={{
              display: "flex",
              fontSize: 88,
              fontWeight: 700,
              letterSpacing: "-0.02em",
              backgroundImage: GRADIENT,
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            Cody Thornell
          </div>
          <div style={{ display: "flex", fontSize: 42, color: "#e5e7eb", marginTop: 16 }}>
            IT and Software Developer
          </div>
          <div style={{ display: "flex", fontSize: 28, color: "#9ca3af", marginTop: 12 }}>
            MBA/CS Student · Kalamazoo, MI
          </div>
          <div style={{ display: "flex", height: 8, width: 320, marginTop: 44, background: GRADIENT }} />
          <div style={{ display: "flex", fontSize: 26, color: "#6b7280", marginTop: 44 }}>
            codythornell.com
          </div>
        </div>

        {/* gradient ring echoes the site's headings */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 340,
            height: 340,
            borderRadius: "50%",
            background: GRADIENT,
            padding: 8,
            flexShrink: 0,
          }}
        >
          <img
            src={pfpSrc}
            width={324}
            height={324}
            style={{ width: 324, height: 324, borderRadius: "50%", objectFit: "cover" }}
            alt=""
          />
        </div>
      </div>
    ),
    size
  );
}
