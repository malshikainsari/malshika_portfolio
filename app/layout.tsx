import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Malshika | Software Engineer",
  description:
    "Malshika's personal portfolio showcasing full-stack development, AI/ML interests, and selected projects.",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Malshika | Software Engineer",
    description:
      "Personal portfolio showcasing full-stack development, AI/ML interests, and selected projects.",
    url: "https://your-domain.com",
    siteName: "Malshika Portfolio",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Malshika Portfolio Preview",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Malshika | Software Engineer",
    description:
      "Personal portfolio showcasing full-stack development, AI/ML interests, and selected projects.",
    images: ["/opengraph-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}