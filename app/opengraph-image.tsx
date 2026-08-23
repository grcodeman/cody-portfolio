import { ImageResponse } from "next/og";

export const alt = "Cody Thornell — IT and Software Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const GRADIENT = "linear-gradient(90deg, #e11d48 0%, #6366f1 50%, #0ea5e9 100%)";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          background: "#000000",
          padding: "80px",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 96,
            fontWeight: 700,
            letterSpacing: "-0.02em",
            backgroundImage: GRADIENT,
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          Cody Thornell
        </div>
        <div style={{ display: "flex", fontSize: 44, color: "#e5e7eb", marginTop: 16 }}>
          IT and Software Developer
        </div>
        <div style={{ display: "flex", fontSize: 30, color: "#9ca3af", marginTop: 12 }}>
          MBA/CS Student · Kalamazoo, MI
        </div>
        <div style={{ display: "flex", height: 8, width: 320, marginTop: 48, background: GRADIENT }} />
        <div style={{ display: "flex", fontSize: 28, color: "#6b7280", marginTop: 48 }}>
          codythornell.com
        </div>
      </div>
    ),
    size
  );
}
