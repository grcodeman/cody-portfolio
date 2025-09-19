import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";


const inter = Inter({subsets: ["latin"]})

export const metadata: Metadata = {
  title: "Cody Thornell Portfolio",
  description: "Portfolio site for Cody Thornell showcasing experience, education and projects.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){
                  c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                  t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                  y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "tdd94hwaep");
            `,
          }}
        />
      </head>
      <body
        className={`${inter.className}  antialiased`}
      >
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
