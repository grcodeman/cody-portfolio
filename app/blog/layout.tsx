import type { Metadata } from "next";

const description =
  "Writing by Cody Thornell on software development, IT operations, and side projects.";

export const metadata: Metadata = {
  title: "Blog",
  description,
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Blog | Cody Thornell",
    description,
    url: "/blog",
  },
  twitter: { title: "Blog | Cody Thornell", description },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
