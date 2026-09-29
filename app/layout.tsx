import type { Metadata, Viewport } from "next";
import {
  Fraunces,
  Cormorant_Garamond,
  Plus_Jakarta_Sans,
} from "next/font/google";

import "./globals.css";

/* =========================================================
   FONTS
========================================================= */

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-jakarta",
  display: "swap",
});

/* =========================================================
   WEBSITE INFORMATION
========================================================= */

const websiteUrl =
  "https://the-weddingzaenal-rahma.vercel.app";

const previewImage =
  "https://the-weddingzaenal-rahma.vercel.app/images/foto-pasangan.jpeg";

/* =========================================================
   METADATA
========================================================= */

export const metadata: Metadata = {
  metadataBase: new URL(websiteUrl),

  title:
    "The Wedding of Zaenal & Rahma",

  description:
    "Dengan penuh syukur, kami mengundang Anda untuk hadir dan menjadi bagian dari hari bahagia pernikahan Zaenal & Rahma.",

  applicationName:
    "The Wedding of Zaenal & Rahma",

  authors: [
    {
      name: "Zaenal & Rahma",
    },
  ],

  creator:
    "Zaenal & Rahma",

  publisher:
    "Zaenal & Rahma",

  keywords: [
    "Zaenal",
    "Rahma",
    "Wedding",
    "Wedding Invitation",
    "Undangan Pernikahan",
    "The Wedding Zaenal Rahma",
  ],
  
  /* =======================================================
     OPEN GRAPH
  ======================================================= */

  openGraph: {
    type: "website",

    url: websiteUrl,

    title:
      "The Wedding of Zaenal & Rahma",

    description:
      "Sabtu, 5 September 2026 — Kolaka Timur, Sulawesi Tenggara",

    siteName:
      "The Wedding of Zaenal & Rahma",

    locale:
      "id_ID",

    images: [
      {
        url: previewImage,

        width: 800,

        height: 600,

        alt:
          "The Wedding of Zaenal & Rahma",
      },
    ],
  },

  /* =======================================================
     TWITTER / X
  ======================================================= */

  twitter: {
    card:
      "summary_large_image",

    title:
      "The Wedding of Zaenal & Rahma",

    description:
      "Sabtu, 5 September 2026 — Kolaka Timur, Sulawesi Tenggara",

    images: [
      previewImage,
    ],
  },

  /* =======================================================
     ROBOTS
  ======================================================= */

  robots: {
    index: true,

    follow: true,

    googleBot: {
      index: true,

      follow: true,

      "max-image-preview":
        "large",

      "max-snippet":
        -1,

      "max-video-preview":
        -1,
    },
  },

  /* =======================================================
     ICON
  ======================================================= */

  icons: {
    icon:
      "/images/foto-pasangan.jpeg",
  },
};
/* =========================================================
   VIEWPORT — FORCE LIGHT THEME
========================================================= */

export const viewport: Viewport = {
  colorScheme: "light",
  themeColor: "#fffdf7",
};
/* =========================================================
   ROOT LAYOUT
========================================================= */

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`
        ${fraunces.variable}
        ${cormorant.variable}
        ${jakarta.variable}
      `}
      style={{
        colorScheme: "light",
      }}
    >
      <body
        className="
          bg-paper
          text-ink
          font-body
          antialiased
          selection:bg-gold/30
        "
        style={{
          colorScheme: "light",
        }}
      >
        {children}
      </body>
    </html>
  );
}
