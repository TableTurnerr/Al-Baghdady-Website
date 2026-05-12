import type { Metadata } from "next";
import { createMetadata } from "@/data/metadata";
import { breadcrumbSchema } from "@/data/schema";
import SchemaInjector from "@/components/shared/SchemaInjector";
import BreadcrumbNav from "@/components/layout/BreadcrumbNav";
import ThemeBtn from "@/components/shared/ThemeBtn";
import SmartImage from "@/components/shared/SmartImage";

export const metadata: Metadata = createMetadata({
  title: "Our Story — 100 Years of Iraqi Baking, From Baghdad to Richardson | Al-Baghdady",
  description:
    "Our family's bakery began in Baghdad in 1919. Master baker Salah Hassan brought four generations of Iraqi tradition to Richardson, TX in 2009. The 100-year story behind every loaf.",
  path: "/our-story/",
  keywords: ["al-baghdady restaurant story", "iraqi family restaurant dallas", "authentic iraqi cuisine richardson"],
});

export default function OurStoryPage() {
  return (
    <>
      <SchemaInjector
        schema={breadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Our Story", url: "/our-story/" },
        ])}
      />
      <BreadcrumbNav
        items={[
          { name: "Home", url: "/" },
          { name: "Our Story", url: "/our-story/" },
        ]}
      />

      <section className="container-pad py-12 md:py-20 max-w-3xl">
        <div className="eyebrow">Our Story</div>
        <h1 className="mb-8">The 100-Year Story of Dallas&apos;s BEST Iraqi Bakery and Breakfast Café</h1>

        <SmartImage
          src="/Images/hero.webp"
          alt="Al-Baghdady Restaurant family kitchen"
          priority
          sizes="(min-width: 768px) 768px, 100vw"
          className="aspect-[16/9] rounded-[var(--radius-section)] mb-12 shadow-[0_30px_80px_-30px_rgba(26,20,16,0.35)]"
        />

        <div className="prose-content space-y-6 text-[var(--color-text)] text-lg leading-relaxed">
          <h2 className="!mt-0 !mb-4">It All Started in Baghdad, 1919</h2>
          <p>
            Our story begins not in Texas, but in Baghdad — in 1919 — where our family first opened a bakery. <em>Albaghdady</em> — البغدادي — simply means <em>the one from Baghdad</em>, and for over a century, that name has meant the same thing wherever we&apos;ve stood: hand-made breads, Iraqi sweets, and delicious Iraqi dishes.
          </p>

          <h2 className="!mt-12 !mb-4">Authentic Traditional Iraqi Sweets</h2>
          <p>
            The recipes have passed from one generation to the next — same techniques, same standards, same insistence that bread is sacred. The breads, the baklava, the ladyfingers stuffed with cream — these aren&apos;t recipes we found. They&apos;ve been in our family since 1919, kept alive through war, migration, and the patience of teaching the next pair of hands.
          </p>

          <h2 className="!mt-12 !mb-4">Representing Iraqi Heritage and Family Recipes in Texas</h2>
          <p>
            Our father and master baker Salah Hassan, grew up learning about our traditional recipes and has been perfecting his craft for 50 years, following in the footsteps of his father. As D Magazine noted, he &lsquo;quietly turns out his wares&rsquo; with a skill that only comes from a lifetime of tradition. When you visit, you aren&apos;t just getting bread; you&apos;re getting a century of expertise from a true professional.
          </p>
          <p>
            In 2009, he brought the family trade to Texas, opening a small storefront on Greenville Avenue in Richardson — two parking spots and a counter — and began to bake the way our family has always baked.
          </p>

          <h2 className="!mt-12 !mb-4">ضيافة — The Reason We Bake</h2>
          <p>
            For our father, this was never just about selling bread. It was about <em>ḍiyāfa</em> — Iraqi hospitality. The belief that no one should leave your table hungry, that bread is sacred, that guests are a gift. He wanted his customers in Texas to taste what he tasted growing up in Baghdad — the warmth of a kitchen where everything is made by hand.
          </p>

          <h2 className="!mt-12 !mb-4">Taste of Iraq in the Heart of Dallas, Texas</h2>
          <p>
            For over fifteen years now, our small breakfast place beside the barber shop has been a quiet landmark — a place loyal customers drive across Greenville Ave for, and where new neighbors discover their first bite of real Iraqi baking.
          </p>

          <h2 className="!mt-12 !mb-4">Come See Us in the Morning, When the Bread is Hottest</h2>
          <p>
            The best time to find us is early, when the bread is freshest and the trays are just out. Come in for breakfast — a warm <em>samoon</em>, a piece of <em>baklava</em>, a <em>ladyfinger</em> with your chai — and let the day start the way it should and end your day with delicious kunafa in the evening.
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
