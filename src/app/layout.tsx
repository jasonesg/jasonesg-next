import { CMS_NAME, HOME_OG_IMAGE_URL } from "@/lib/constants";
import type { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import { NavClient } from "./_components/nav-client";
import { GeistSans } from 'geist/font/sans';

import "./globals.css";

export const metadata: Metadata = {
  title: "Jason Esguerra",
  description: "Personal portfolio and blog of Jason Esguerra.",
  openGraph: {
    images: ["/images/jason-irl.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="theme-color" content="#000" />
        <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var savedTheme = localStorage.getItem('theme');
                  var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  var activeTheme = savedTheme || (prefersDark ? 'dark' : 'light');
                  if (activeTheme === 'dark') {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className={`bg-background text-foreground transition-colors duration-300 min-h-screen relative ${GeistSans.className}`}>
        {/* Core Layout Texture (Halftone) */}
        <div className="vignette-container" />
        
        <NavClient />
        {children}
      </body>
      <GoogleAnalytics gaId="G-F4EXNB5M6V" />
    </html>
  );
}