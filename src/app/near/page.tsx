import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, Clock } from "lucide-react";
import { createMetadata } from "@/data/metadata";
import { breadcrumbSchema, webPageSchema } from "@/data/schema";
import { NEIGHBORHOODS } from "@/data/neighborhoods";
import { RESTAURANT } from "@/data/restaurant";
import SchemaInjector from "@/components/shared/SchemaInjector";
import BreadcrumbNav from "@/components/layout/BreadcrumbNav";
import ThemeBtn from "@/components/shared/ThemeBtn";

export const metadata: Metadata = createMetadata({
  title: "DFW Service Areas — Iraqi Food & Catering | Al-Baghdady",
  description:
    "Al-Baghdady serves authentic Iraqi food, halal bakery, and catering across the Dallas-Fort Worth metroplex — Richardson, Plano, Garland, Addison, Carrollton, Frisco, Allen, McKinney, Irving, Far North Dallas. Delivery and dine-in.",
  path: "/near/",
  keywords: [
    "iraqi food dfw service areas",
    "halal restaurant near me dfw",
    "iraqi bakery dallas service area",
    "iraqi catering dfw",
    "middle eastern food dfw service area",
  ],
});

function serviceAreasItemListSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Service Areas",
    itemListElement: NEIGHBORHOODS.map((n, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: `${n.city}, ${n.state}`,
      url: `${RESTAURANT.url}/near/${n.slug}/`,
    })),
  };
}

export default function ServiceAreasIndex() {
  return (
    <>
      <SchemaInjector
        schema={[
          breadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Service Areas", url: "/near/" },
          ]),
          serviceAreasItemListSchema(),
          webPageSchema({
            url: "/near/",
            name: "DFW Service Areas — Iraqi Food & Catering | Al-Baghdady",
            description:
              "Al-Baghdady serves authentic Iraqi food, halal bakery, and catering across the Dallas-Fort Worth metroplex.",
            primaryImage: "/Images/hero.webp",
          }),
        ]}
      />
      <BreadcrumbNav
        items={[
          { name: "Home", url: "/" },
          { name: "Service Areas", url: "/near/" },
        ]}
      />

      <section className="container-pad py-10 md:py-16 max-w-3xl">
        <div className="eyebrow">Across the DFW Metroplex</div>
        <h1 className="mb-6">Iraqi Food, Halal Bakery &amp; Catering — Serving DFW</h1>
        <p className="text-lg text-[var(--color-text-muted)] leading-relaxed">
          From our home in Richardson, we serve authentic Iraqi food, fresh-baked bakery items,
          and full catering across the Dallas-Fort Worth metroplex. Click your city for the
          neighborhood&apos;s dedicated page — drive times, popular dishes, and delivery info.
        </p>
        <div className="flex flex-wrap gap-3 mt-6">
          <ThemeBtn href="/menu/" variant="primary">View Full Menu</ThemeBtn>
          <ThemeBtn href="/catering/" variant="secondary">Catering Inquiries</ThemeBtn>
        </div>
      </section>

      <section className="container-pad pb-16 md:pb-24">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {NEIGHBORHOODS.map((n) => (
            <Link
              key={n.slug}
              href={`/near/${n.slug}/`}
              className="card p-6 transition-all duration-500 hover:-translate-y-0.5 hover:shadow-[var(--shadow-lift)]"
            >
              <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] font-semibold text-[var(--color-text-muted)] mb-3">
                <MapPin size={12} className="text-[var(--color-primary)]" />
                {n.state}
              </div>
              <h2
                className="!text-xl !mb-2"
                style={{ fontFamily: "var(--font-display)", fontWeight: 500 }}
              >
                {n.city}
              </h2>
              <div className="flex items-center gap-1.5 text-xs text-[var(--color-text-muted)] mb-3">
                <Clock size={12} />
                <span>{n.driveTime}</span>
              </div>
              <p className="text-sm text-[var(--color-text-muted)] line-clamp-3 leading-relaxed mb-3">
                {n.intro}
              </p>
              <span className="text-sm font-medium text-[var(--color-primary)]">
                Visit page →
              </span>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
