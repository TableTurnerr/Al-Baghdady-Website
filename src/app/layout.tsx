import type { Metadata } from "next";
import "@/styles/globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SchemaInjector from "@/components/shared/SchemaInjector";
import TabTitleHandler from "@/components/shared/TabTitleHandler";
import {
  organizationSchema,
  websiteSchema,
  localBusinessSchema,
} from "@/data/schema";
import { createMetadata } from "@/data/metadata";
import { RESTAURANT } from "@/data/restaurant";

export const metadata: Metadata = createMetadata({
  title: `${RESTAURANT.name} | Authentic Iraqi Cuisine & Bakery in Richardson, TX`,
  description: RESTAURANT.shortDescription,
  path: "/",
  keywords: [
    "iraqi restaurant richardson",
    "halal restaurant richardson",
    "best iraqi food dallas",
    "samoon bread dallas",
    "kanafa dallas",
    "middle eastern food richardson",
    "al-baghdady restaurant",
    "iraqi catering dallas",
  ],
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,500;1,9..144,400;1,9..144,500&display=swap"
          rel="stylesheet"
        />
        <meta name="theme-color" content="#8B1A1A" />
        <meta name="format-detection" content="telephone=yes" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/favicon-192.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body>
        <SchemaInjector
          schema={[organizationSchema(), websiteSchema(), localBusinessSchema()]}
        />
        <TabTitleHandler />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
