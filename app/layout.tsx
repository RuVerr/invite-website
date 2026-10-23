import type { Metadata, Viewport } from "next";
import "./globals.css";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "HRAVIRAT — Digital Invitations",
  description: "Premium digital invitations for weddings, birthdays, engagements, baby showers and special events.",

  keywords: [
    "digital invitations",
    "wedding invitation",
    "online invitation",
    "birthday invitation",
    "baby shower invitation",
    "event invitation",
    "wedding website",
    "HRAVIRAT",
    "հրավեր",
    "հարսանեկան հրավեր",
    "թվային հրավեր",
    "электронные приглашения",
    "свадебные приглашения",
    "онлайн приглашения"
  ],

  authors: [
    {
      name: "HRAVIRAT"
    }
  ],

  creator: "HRAVIRAT",

  metadataBase: new URL("https://hravirat.com"),

  openGraph: {
    title: "HRAVIRAT — Digital Invitations",
    description: "Elegant digital invitations for weddings and special occasions.",
    url: "https://hravirat.com",
    siteName: "HRAVIRAT",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/websiteImages/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "HRAVIRAT"
      }
    ]
  },

  twitter: {
    card: "summary_large_image",
    title: "HRAVIRAT — Digital Invitations",
    description: "Elegant digital invitations for weddings and special occasions.",
    images: ["/websiteImages/og-image.jpg"]
  },

  robots: {
    index: true,
    follow: true
  },

  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png"
  }
};

export const viewport = {
  themeColor: "#000000",
  viewportFit: "cover"
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-[#000]">{children}</body>
    </html>
  );
}
