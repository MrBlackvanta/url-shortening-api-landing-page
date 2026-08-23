import { Footer } from "@/components/layout";
import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["500", "700"],
  subsets: ["latin"],
  display: "swap",
});

const title = "Shortly | More than just shorter links";
const description =
  "Shorten any link, then track how it performs. Branded short links with click analytics, so you can see which content earns attention.";
const siteUrl =
  "https://url-shortening-api-landing-page.abdelrhman-ahmed8881.workers.dev";
const card = {
  url: "/opengraph-image.jpg",
  width: 1200,
  height: 630,
  alt: "Shortly, link shortening with detailed click analytics",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  alternates: { canonical: "/" },
  openGraph: {
    title,
    description,
    url: "/",
    siteName: "Shortly",
    locale: "en_US",
    type: "website",
    images: [card],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [card],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} antialiased`}>
      <body className="flex min-h-dvh flex-col">
        {children}
        <Footer />
      </body>
    </html>
  );
}
