import type { Metadata } from "next";

const description =
  "Projects by Cody Thornell — web, mobile, AI/ML, AR/VR, and IT tooling, including VolleyNet, BroncoNav, Cultivate269, Shelf Inventory, and hackathon winners.";

export const metadata: Metadata = {
  title: "Projects",
  description,
  alternates: { canonical: "/projects" },
  openGraph: {
    title: "Projects | Cody Thornell",
    description,
    url: "/projects",
  },
  twitter: { title: "Projects | Cody Thornell", description },
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
