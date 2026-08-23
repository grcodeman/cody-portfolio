import type { Metadata } from "next";

const description =
  "Get in touch with Cody Thornell — IT and software developer based in Kalamazoo, MI.";

export const metadata: Metadata = {
  title: "Contact",
  description,
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact | Cody Thornell",
    description,
    url: "/contact",
  },
  twitter: { title: "Contact | Cody Thornell", description },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
