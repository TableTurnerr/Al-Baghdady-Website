import type { Metadata } from "next";
import { RESTAURANT } from "./restaurant";

const BASE_URL = RESTAURANT.url;
const DEFAULT_OG = `${BASE_URL}/Images/og-default.jpg`;

export type PageMetaInput = {
  title: string;
  description: string;
  path: string;
  ogImage?: string;
  keywords?: string[];
  noindex?: boolean;
};

const BASE_KEYWORDS = [
  "iraqi restaurant Richardson TX",
  "halal restaurant Richardson TX",
  "iraqi bakery Dallas",
  "arabic bakery Richardson",
  "samoon bread Dallas",
  "kanafa Dallas",
  "iraqi breakfast Richardson",
  "albaghdady",
  "al-baghdady bakery",
  "iraqi cafe Richardson TX",
  "middle eastern cafe Dallas",
  "arabic cafe Richardson",
  "halal cafe near me",
  "iraqi breakfast cafe DFW",
  "baghdadi cafe Texas",
];

export function createMetadata({
  title,
  description,
  path,
  ogImage = DEFAULT_OG,
  keywords,
  noindex = false,
}: PageMetaInput): Metadata {
  const url = path.startsWith("http") ? path : `${BASE_URL}${path}`;
  const fullTitle =
    title.includes(RESTAURANT.name) || title.includes("Al-Baghdady")
      ? title
      : `${title} | ${RESTAURANT.name}`;

  return {
    metadataBase: new URL(BASE_URL),
    title: fullTitle,
    description,
    keywords: [...BASE_KEYWORDS, ...(keywords ?? [])],
    alternates: { canonical: url },
    robots: noindex
      ? { index: false, follow: false }
      : {
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
    openGraph: {
      type: "website",
      locale: "en_US",
      url,
      siteName: RESTAURANT.name,
      title: fullTitle,
      description,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: `${RESTAURANT.name} in Richardson, TX — halal Iraqi bakery & breakfast`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [ogImage],
    },
    icons: {
      icon: "/favicon.ico",
      apple: "/apple-touch-icon.png",
    },
    manifest: "/manifest.json",
    other: {
      "theme-color": "#8B1A1A",
    },
  };
}
