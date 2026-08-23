import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import SmoothScroll from "@/components/SmoothScroll";
import PersonJsonLd from "@/components/PersonJsonLd";
import { SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "@/lib/site";


const inter = Inter({subsets: ["latin"]})

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Cody Thornell | IT and Software Developer",
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "Cody Thornell",
    "software developer",
    "IT",
    "portfolio",
    "Kalamazoo",
    "Western Michigan University",
    "Next.js",
    "Flutter",
    "Python",
  ],
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: `${SITE_NAME} Portfolio`,
    title: "Cody Thornell | IT and Software Developer",
    description: SITE_DESCRIPTION,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cody Thornell | IT and Software Developer",
    description: SITE_DESCRIPTION,
    creator: "@codythornell",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className}  antialiased`}
      >
        <PersonJsonLd />
        <Script id="ms-clarity" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "tdd94hwaep");
          `}
        </Script>
        <SmoothScroll />
        <ThemeProvider
        attribute="class"
        enableSystem
        defaultTheme="system"
        >
          {children}
        </ThemeProvider>
        
      </body>
    </html>
  );
}
