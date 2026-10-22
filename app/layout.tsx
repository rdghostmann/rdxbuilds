// /app/layout.tsx
import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import { Inter as FontSans } from "next/font/google";

import "./globals.css";
import { cn } from "@/lib/utils";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navbar from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { DATA } from "@/data/resume";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  // metadataBase: new URL(DATA.url),
  title: {
    default: "RdxBuilds",
    // default: DATA.name,
    template: `%s | ${DATA.name}`,
  },
  description: DATA.description,
  openGraph: {
    title: `${DATA.name}`,
    description: DATA.description,
    url: DATA.url,
    siteName: `${DATA.name}`,
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: `${DATA.name}`,
    card: "summary_large_image",
  },
  verification: {
    google: "",
    yandex: "",
  },
   icons: {
    icon: [
      { url: "/rdxbuilds-favicon.jpg", media: "(prefers-color-scheme: light)" },
      { url: "/rdxbuilds-favicon.jpg", media: "(prefers-color-scheme: dark)" },
      { url: "/rdxbuilds-favicon.jpg", type: "image/svg+xml" },
    ],
       apple: "/rdxbuilds-favicon.jpg",

  },
};


export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
    suppressHydrationWarning
    >
      <body className={cn("min-h-full flex flex-col", fontSans.variable)}>
       <ThemeProvider attribute="class" defaultTheme="light">
          <TooltipProvider delayDuration={0}>
            {children}
            <Navbar />
          </TooltipProvider>
        </ThemeProvider>    
        </body>
    </html>
  );
}
