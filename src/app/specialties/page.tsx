import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { createMetadata } from "@/data/metadata";
import { breadcrumbSchema, webPageSchema } from "@/data/schema";
import { SPECIALTIES } from "@/data/specialties";
import { RESTAURANT } from "@/data/restaurant";
import SchemaInjector from "@/components/shared/SchemaInjector";
import BreadcrumbNav from "@/components/layout/BreadcrumbNav";
import ThemeBtn from "@/components/shared/ThemeBtn";
import SmartImage from "@/components/shared/SmartImage";

export const metadata: Metadata = createMetadata({
  title: "Our Specialties — Iraqi Sweets, Breakfast & Halal Café",
  description: `Explore our specialties — baklava, kunafa, ladyfingers, fatayer, manakish, Iraqi breakfast and more. Hand-baked daily at ${RESTAURANT.name} in ${RESTAURANT.address.city}, ${RESTAURANT.address.state}.`,
  path: "/specialties/",
  keywords: [
    "iraqi specialties dallas",
    "iraqi sweets richardson",
    "iraqi bakery menu",
    "middle eastern bakery richardson",
    "halal sweets richardson",
    "iraqi food menu dallas",
  ],
});

function specialtiesListSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Specialties",
    itemListElement: SPECIALTIES.map((s, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: s.name,
      url: `${RESTAURANT.url}/specialties/${s.slug}/`,
    })),
  };
}

export default function SpecialtiesIndexPage() {
  return (
    <>
      <SchemaInjector
        schema={[
          breadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Specialties", url: "/specialties/" },
          ]),
          specialtiesListSchema(),
          webPageSchema({
            url: "/specialties/",
            name: "Our Specialties — Iraqi Sweets, Breakfast & Halal Café",
            description: `Explore our specialties — baklava, kunafa, ladyfingers, fatayer, manakish, Iraqi breakfast and more. Hand-baked daily at ${RESTAURANT.name} in ${RESTAURANT.address.city}, ${RESTAURANT.address.state}.`,
            primaryImage: "/Images/gallery/sweets-platter-lamps.webp",
          }),
        ]}
      />
      <BreadcrumbNav
        items={[
          { name: "Home", url: "/" },
          { name: "Specialties", url: "/specialties/" },
        ]}
      />

      <section className="container-pad py-12 md:py-20 max-w-3xl">
        <div className="eyebrow">Our Craft</div>
        <h1 className="mb-6">Our Specialties</h1>
        <p className="text-lg text-[var(--color-text-muted)] leading-relaxed">
          Hand-baked daily — the dishes our family has made since {RESTAURANT.familyRecipeSince}.
        </p>
      </section>

      <section className="container-pad pb-12 md:pb-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SPECIALTIES.map((s) => (
            <Link
              key={s.slug}
              href={`/specialties/${s.slug}/`}
              className="card overflow-hidden transition-all duration-500 hover:-translate-y-0.5 hover:shadow-[var(--shadow-lift)]"
            >
              {s.image && (
                <div className="card-img aspect-[4/3]">
                  <SmartImage
                    src={s.image}
                    alt={`${s.name} at ${RESTAURANT.name}`}
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="w-full h-full"
                  />
                </div>
              )}
              <div className="p-6">
                {s.heroEyebrow && (
                  <div className="text-[11px] font-semibold text-[var(--color-text-muted)] uppercase tracking-[0.15em] mb-2">
                    {s.heroEyebrow}
                  </div>
                )}
                <h3
                  className="text-xl mb-3"
                  style={{ fontFamily: "var(--font-display)", fontWeight: 500 }}
                >
                  {s.name}
                </h3>
                <p className="text-sm text-[var(--color-text-muted)] line-clamp-3 leading-relaxed mb-4">
                  {s.primaryBlock.body}
                </p>
                <span className="link-underline text-[var(--color-text)] font-medium text-sm inline-flex items-center gap-1">
                  Learn more <ArrowRight size={14} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="container-pad section-pad text-center max-w-2xl mx-auto">
        <div className="flex flex-wrap gap-3 justify-center">
          <ThemeBtn href="/menu/" variant="primary">View Full Menu</ThemeBtn>
          <ThemeBtn href={RESTAURANT.orderOnline} external variant="secondary">
            Order Online
          </ThemeBtn>
        </div>
      </section>
    </>
  );
}