import type { Metadata } from "next";
import { Suspense } from "react";
import Script from "next/script";
import { Inter, Fraunces } from "next/font/google";
import "@/styles/globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SchemaInjector from "@/components/shared/SchemaInjector";
import TabTitleHandler from "@/components/shared/TabTitleHandler";
import ReviewModal from "@/components/reviews/ReviewModal";
import {
  organizationSchema,
  websiteSchema,
  localBusinessSchema,
} from "@/data/schema";
import { createMetadata } from "@/data/metadata";
import { RESTAURANT } from "@/data/restaurant";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-inter",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-fraunces",
});

export const metadata: Metadata = createMetadata({
  title: `${RESTAURANT.name} | ${RESTAURANT.tagline}`,
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
    <html lang="en" className={`${inter.variable} ${fraunces.variable}`}>
      <head>
        <Script id="gtm-head" strategy="beforeInteractive">{`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-NT4P77JT');`}</Script>
        <meta name="theme-color" content="#8B1A1A" />
        <meta name="format-detection" content="telephone=yes" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/favicon-192.webp" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body>
        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NT4P77JT" height="0" width="0" style={{display:'none',visibility:'hidden'}}></iframe></noscript>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-45CDCLQ387"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-45CDCLQ387');
          `}
        </Script>
        <SchemaInjector
          schema={[organizationSchema(), websiteSchema(), localBusinessSchema()]}
        />
        <TabTitleHandler />
        <Header />
        <main>{children}</main>
        <Footer />
        <Suspense fallback={null}>
          <ReviewModal />
        </Suspense>
      </body>
    </html>
  );
}
