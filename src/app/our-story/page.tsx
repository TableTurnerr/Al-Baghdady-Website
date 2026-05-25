import type { Metadata } from "next";
import { createMetadata } from "@/data/metadata";
import { articleSchema, breadcrumbSchema, webPageSchema } from "@/data/schema";
import SchemaInjector from "@/components/shared/SchemaInjector";
import BreadcrumbNav from "@/components/layout/BreadcrumbNav";
import ThemeBtn from "@/components/shared/ThemeBtn";
import SmartImage from "@/components/shared/SmartImage";

export const metadata: Metadata = createMetadata({
  title: "Our Story: From Baghdad, 1919 to Richardson | Al-Baghdady",
  description:
    "Our family's bakery began in Baghdad in 1919. Master baker Salah Hassan brought four generations of Iraqi tradition to Richardson, TX in 2012. The 100-year story behind every loaf.",
  path: "/our-story/",
  keywords: ["al-baghdady restaurant story", "iraqi family restaurant dallas", "authentic iraqi cuisine richardson"],
});

const STATS = [
  { value: "1919", label: "Baghdad origins" },
  { value: "50+ yrs", label: "Master baker Salah Hassan" },
  { value: "4", label: "Generations of recipes" },
  { value: "2012", label: "Serving Richardson, TX" },
];

export default function OurStoryPage() {
  return (
    <>
      <SchemaInjector
        schema={[
          breadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Our Story", url: "/our-story/" },
          ]),
          webPageSchema({
            url: "/our-story/",
            name: "Our Story: From Baghdad, 1919 to Richardson | Al-Baghdady",
            description:
              "Our family's bakery began in Baghdad in 1919. Master baker Salah Hassan brought four generations of Iraqi tradition to Richardson, TX in 2012. The 100-year story behind every loaf.",
            primaryImage: "/Images/storefront.webp",
          }),
          articleSchema({
            url: "/our-story/",
            headline:
              "100 Years of Iraqi Baking: From Baghdad, 1919 to Richardson, Texas",
            description:
              "The story of Al-Baghdady, a family bakery that began in Baghdad in 1919 and came to Richardson, TX in 2012 with master baker Salah Hassan, carrying four generations of Iraqi recipes for samoon, baklava, kunafa, and ladyfingers.",
            image: "/Images/storefront.webp",
            datePublished: "2012-01-01",
            authorName: "Salah Hassan",
          }),
        ]}
      />
      <BreadcrumbNav
        items={[
          { name: "Home", url: "/" },
          { name: "Our Story", url: "/our-story/" },
        ]}
      />

      {/* Hero */}
      <section className="container-pad pt-12 md:pt-20 max-w-4xl">
        <div className="eyebrow">Our Story</div>
        <h1 className="mb-5 max-w-3xl">A Hundred-Year Iraqi Baking Story, From Baghdad to Richardson</h1>
        <p className="text-lg text-[var(--color-text-muted)] leading-relaxed max-w-2xl mb-10">
          The same family. The same recipes. The same insistence that bread is sacred, carried from a
          1919 Baghdad bakery to a Greenville Avenue storefront in Richardson, Texas.
        </p>
        <SmartImage
          src="/Images/storefront.webp"
          alt="Al-Baghdady, the family-owned Iraqi bakery and breakfast café on Greenville Avenue in Richardson, TX"
          priority
          sizes="(min-width: 1024px) 896px, 100vw"
          className="aspect-[16/9] rounded-[var(--radius-section)] shadow-[0_30px_80px_-30px_rgba(26,20,16,0.35)]"
        />
      </section>

      {/* Stat strip */}
      <section className="container-pad py-10 md:py-14">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-[var(--color-border)] rounded-2xl overflow-hidden border border-[var(--color-border)]">
          {STATS.map((s) => (
            <div key={s.label} className="bg-[var(--color-warm-white)] px-5 py-7 text-center">
              <div className="text-3xl md:text-4xl font-semibold text-[var(--color-primary)]" style={{ fontFamily: "var(--font-display)" }}>
                {s.value}
              </div>
              <div className="text-xs text-[var(--color-text-muted)] mt-2 leading-snug">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Story body */}
      <section className="container-pad pb-6 max-w-3xl">
        <div className="prose-content space-y-6 text-[var(--color-text)] text-lg leading-relaxed">
          <h2 className="!mt-0 !mb-4">It All Started in Baghdad, 1919</h2>
          <p>
            Our story begins not in Texas, but in Baghdad, in 1919, where our family first opened a
            bakery. <em>Albaghdady</em> (البغدادي) simply means <em>the one from Baghdad</em>, and for
            over a century that name has meant the same thing wherever we&apos;ve stood: hand-made
            breads, Iraqi sweets, and traditional Iraqi dishes.
          </p>

          <h2 className="!mt-12 !mb-4">Recipes Passed Down Four Generations</h2>
          <p>
            The recipes have passed from one generation to the next, with the same techniques, the
            same standards, the same insistence that bread is sacred. The breads, the baklava, the
            ladyfingers stuffed with cream: these aren&apos;t recipes we found. They&apos;ve been in
            our family since 1919, kept alive through war, migration, and the patience of teaching the
            next pair of hands.
          </p>
        </div>

        {/* D Magazine pull-quote */}
        <figure className="my-12 border-l-4 border-[var(--color-gold)] bg-[var(--color-sand)] rounded-r-2xl px-7 py-6">
          <blockquote className="text-2xl md:text-3xl leading-snug text-[var(--color-text)]" style={{ fontFamily: "var(--font-accent)", fontStyle: "italic" }}>
            &ldquo;He quietly turns out his wares.&rdquo;
          </blockquote>
          <figcaption className="mt-3 text-sm font-semibold uppercase tracking-[0.12em] text-[var(--color-gold-dark)]">
            D Magazine
          </figcaption>
        </figure>

        <div className="prose-content space-y-6 text-[var(--color-text)] text-lg leading-relaxed">
          <h2 className="!mt-0 !mb-4">From Baghdad to Richardson, 2012</h2>
          <p>
            Our father and master baker Salah Hassan grew up learning these recipes and has spent 50
            years perfecting his craft, following in his own father&apos;s footsteps. When you visit,
            you aren&apos;t just getting bread; you&apos;re getting a century of expertise from a true
            professional. In 2012 he brought the family trade to Texas, opening a small storefront on
            Greenville Avenue in Richardson, two parking spots and a counter, and began to bake the way
            our family always has.
          </p>
        </div>

        {/* Mid-page image */}
        <SmartImage
          src="/Images/gallery/sweets-platter-lamps.webp"
          alt="A spread of Al-Baghdady Iraqi sweets, baklava, mabrouma and pistachio pastries, on a copper tray"
          sizes="(min-width: 768px) 768px, 100vw"
          className="aspect-[16/9] rounded-[var(--radius-section)] my-12 shadow-[0_30px_80px_-30px_rgba(26,20,16,0.35)]"
        />

        {/* Hospitality callout */}
        <figure className="my-12 text-center">
          <div className="text-5xl md:text-6xl mb-4 text-[var(--color-primary)]" style={{ fontFamily: "var(--font-accent)" }}>ضيافة</div>
          <blockquote className="text-xl md:text-2xl leading-relaxed text-[var(--color-text)] max-w-2xl mx-auto">
            <em>Ḍiyāfa</em>, Iraqi hospitality: the belief that no one should leave your table hungry,
            that bread is sacred, and that every guest is a gift.
          </blockquote>
        </figure>

        <div className="prose-content space-y-6 text-[var(--color-text)] text-lg leading-relaxed">
          <h2 className="!mt-0 !mb-4">A Quiet Richardson Landmark</h2>
          <p>
            For over a decade, our small breakfast place beside the barber shop has been a quiet
            landmark: a place loyal customers drive across Greenville Avenue for, and where new
            neighbors discover their first bite of real Iraqi baking.
          </p>

          <h2 className="!mt-12 !mb-4">Come See Us in the Morning, When the Bread Is Hottest</h2>
          <p>
            The best time to find us is early, when the bread is freshest and the trays are just out.
            Come in for breakfast, a warm <em>samoon</em>, a piece of <em>baklava</em>, a{" "}
            <em>ladyfinger</em> with your chai, and let the day start the way it should. End it with
            warm kunafa in the evening.
          </p>
        </div>

        <div className="flex flex-wrap gap-3 mt-12">
          <ThemeBtn href="/menu/" variant="primary">See the Menu</ThemeBtn>
          <ThemeBtn href="/catering/" variant="secondary">Catering Inquiries</ThemeBtn>
        </div>
      </section>
    </>
  );
}
