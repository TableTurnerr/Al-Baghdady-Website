import type { Metadata } from "next";
import { createMetadata } from "@/data/metadata";
import { breadcrumbSchema, webPageSchema } from "@/data/schema";
import { RESTAURANT } from "@/data/restaurant";
import SchemaInjector from "@/components/shared/SchemaInjector";
import BreadcrumbNav from "@/components/layout/BreadcrumbNav";
import ThemeBtn from "@/components/shared/ThemeBtn";

export const metadata: Metadata = createMetadata({
  title: "Press & Recognition | Al-Baghdady Iraqi Bakery, Richardson",
  description:
    "Al-Baghdady in the press, featured by D Magazine for its tandoor samoon and 100-year Iraqi baking tradition, and reviewed 4.4 stars across 1,899+ guest reviews in Richardson, TX.",
  path: "/press/",
  keywords: [
    "al-baghdady press",
    "best iraqi bakery dallas",
    "d magazine iraqi bakery richardson",
    "iraqi bakery reviews richardson",
  ],
});

// Real, verifiable coverage only. Add new outlets here as links are confirmed.
const PRESS = [
  {
    outlet: "D Magazine",
    date: "July 2017",
    headline: "Albaghdady Makes Phenomenal Iraqi Bread",
    quote: "This hole-in-the-wall bakery in Richardson is a treasure.",
    excerpt:
      "D Magazine praised our fresh tandoor samoon and the 50-year craft of master baker Salah Hassan, who, in their words, “quietly turns out his wares.”",
    url: "https://www.dmagazine.com/food-drink/2017/07/albaghdady-makes-phenomenal-iraqi-bread/",
  },
  {
    outlet: "D Magazine Directory",
    date: "Featured listing",
    headline: "Albaghdady Bakery & Café, Middle Eastern, Richardson",
    quote: "",
    excerpt:
      "Listed in the D Magazine restaurant directory as a Richardson Middle Eastern bakery and café.",
    url: "https://directory.dmagazine.com/restaurants/al-baghdady-bakery-and-cafe/",
  },
];

const RECOGNITION = [
  { value: `${RESTAURANT.ratingValue}★`, label: `${RESTAURANT.reviewCount.toLocaleString()}+ guest reviews` },
  { value: "1919", label: "Family baking since" },
  { value: "50+ yrs", label: "Master baker Salah Hassan" },
  { value: "Zabihah", label: "Verified halal" },
];

export default function PressPage() {
  return (
    <>
      <SchemaInjector
        schema={[
          breadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Press", url: "/press/" },
          ]),
          webPageSchema({
            url: "/press/",
            name: "Press & Recognition | Al-Baghdady Iraqi Bakery, Richardson",
            description:
              "Al-Baghdady in the press, featured by D Magazine and reviewed 4.4 stars across 1,899+ guest reviews in Richardson, TX.",
            primaryImage: "/Images/gallery/sweets-platter-lamps.webp",
          }),
        ]}
      />
      <BreadcrumbNav
        items={[
          { name: "Home", url: "/" },
          { name: "Press", url: "/press/" },
        ]}
      />

      <section className="container-pad py-12 md:py-16 max-w-3xl">
        <div className="eyebrow">Press &amp; Recognition</div>
        <h1 className="mb-5">Al-Baghdady in the Press</h1>
        <p className="text-lg text-[var(--color-text-muted)] leading-relaxed">
          For over a decade, Richardson&apos;s little Iraqi bakery has drawn notice for one thing:
          doing the real thing. Here&apos;s where {RESTAURANT.name} has been featured, plus the guest
          recognition that keeps the line moving.
        </p>
      </section>

      {/* Recognition strip */}
      <section className="container-pad pb-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-[var(--color-border)] rounded-2xl overflow-hidden border border-[var(--color-border)] max-w-3xl">
          {RECOGNITION.map((r) => (
            <div key={r.label} className="bg-[var(--color-warm-white)] px-5 py-7 text-center">
              <div className="text-2xl md:text-3xl font-semibold text-[var(--color-primary)]" style={{ fontFamily: "var(--font-display)" }}>
                {r.value}
              </div>
              <div className="text-xs text-[var(--color-text-muted)] mt-2 leading-snug">{r.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Coverage */}
      <section className="container-pad pb-12 md:pb-20 max-w-3xl">
        <h2 className="mb-6">Featured Coverage</h2>
        <div className="space-y-5">
          {PRESS.map((p) => (
            <a
              key={p.url}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className="card block p-6 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[var(--shadow-lift)]"
            >
              <div className="flex items-baseline justify-between gap-4 flex-wrap">
                <span className="text-sm font-semibold uppercase tracking-[0.12em] text-[var(--color-gold-dark)]">{p.outlet}</span>
                <span className="text-xs text-[var(--color-text-muted)]">{p.date}</span>
              </div>
              <h3 className="text-xl mt-2 mb-2" style={{ fontFamily: "var(--font-display)" }}>{p.headline}</h3>
              {p.quote && (
                <blockquote className="text-lg leading-snug text-[var(--color-text)] mb-2" style={{ fontFamily: "var(--font-accent)", fontStyle: "italic" }}>
                  &ldquo;{p.quote}&rdquo;
                </blockquote>
              )}
              <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">{p.excerpt}</p>
              <span className="link-underline text-[var(--color-text)] font-medium text-sm inline-block mt-3">Read the article →</span>
            </a>
          ))}
        </div>

        <div className="flex flex-wrap gap-3 mt-12">
          <ThemeBtn href="/our-story/" variant="primary">Read Our Story</ThemeBtn>
          <ThemeBtn href="/menu/" variant="secondary">See the Menu</ThemeBtn>
        </div>
      </section>
    </>
  );
}
