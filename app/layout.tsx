import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import SmoothScroll from "@/components/SmoothScroll";
import PersonJsonLd from "@/components/PersonJsonLd";
import Starfield from "@/components/Starfield";
import LightSky from "@/components/LightSky";
import Footer from "@/components/Footer";
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
    site: "@codythornell",
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

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} antialiased flex min-h-screen flex-col overflow-x-clip bg-white dark:bg-black transition-colors duration-300`}
      >
        <PersonJsonLd />
        <Script id="ms-clarity" strategy="lazyOnload">
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
          {/* site-wide backgrounds: fixed at -z-10, behind every page */}
          <Starfield />
          <LightSky />
          {/* flex-1 pushes the footer to the bottom on short pages */}
          <div className="flex-1">{children}</div>
          <Footer />
        </ThemeProvider>
        
      </body>
    </html>
  );
}
