import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { createMetadata } from "@/data/metadata";
import {
  articleSchema,
  breadcrumbSchema,
  faqSchema,
  webPageSchema,
} from "@/data/schema";
import { SPECIALTIES, type Specialty } from "@/data/specialties";
import { MENU, type MenuItem, type MenuCategory } from "@/data/menu";
import { RESTAURANT } from "@/data/restaurant";
import SchemaInjector from "@/components/shared/SchemaInjector";
import BreadcrumbNav from "@/components/layout/BreadcrumbNav";
import ThemeBtn from "@/components/shared/ThemeBtn";
import SmartImage from "@/components/shared/SmartImage";
import FAQSection from "@/components/home/FAQSection";
import MenuItemCard from "@/components/menu/MenuItemCard";

type ResolvedRelatedItem = { item: MenuItem; category: MenuCategory };

function resolveRelatedItems(names: string[] | undefined): ResolvedRelatedItem[] {
  if (!names || names.length === 0) return [];
  const lookup = new Map<string, ResolvedRelatedItem>();
  for (const category of MENU) {
    for (const item of category.items) {
      lookup.set(item.name, { item, category });
    }
  }
  return names
    .map((name) => lookup.get(name))
    .filter((entry): entry is ResolvedRelatedItem => Boolean(entry));
}

function absoluteUrl(path: string) {
  return path.startsWith("http") ? path : `${RESTAURANT.url}${path}`;
}

function relatedItemsSchema(specialty: Specialty, related: ResolvedRelatedItem[]) {
  if (related.length === 0) return null;
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `${specialty.name} items on the menu`,
    itemListElement: related.map(({ item }, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "MenuItem",
        name: item.name,
        description: item.description,
        offers: {
          "@type": "Offer",
          price: item.price.replace(/[^0-9.]/g, ""),
          priceCurrency: "USD",
        },
      },
    })),
  };
}

export function generateStaticParams() {
  return SPECIALTIES.map((s) => ({ topic: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ topic: string }>;
}): Promise<Metadata> {
  const { topic } = await params;
  const specialty = SPECIALTIES.find((s) => s.slug === topic);
  if (!specialty) return {};
  return createMetadata({
    title: specialty.metaTitle,
    description: specialty.metaDescription,
    path: `/specialties/${specialty.slug}/`,
    keywords: specialty.keywords,
    ogImage: specialty.image ? absoluteUrl(specialty.image) : undefined,
  });
}

export default async function SpecialtyPage({
  params,
}: {
  params: Promise<{ topic: string }>;
}) {
  const { topic } = await params;
  const specialty = SPECIALTIES.find((s) => s.slug === topic);
  if (!specialty) notFound();

  const related = resolveRelatedItems(specialty.relatedMenuItemNames);
  const itemList = relatedItemsSchema(specialty, related);
  const url = `/specialties/${specialty.slug}/`;
  const image = specialty.image ?? "/Images/hero.webp";
  const schemas = [
    breadcrumbSchema([
      { name: "Home", url: "/" },
      { name: "Specialties", url: "/specialties/" },
      { name: specialty.name, url },
    ]),
    webPageSchema({
      url,
      name: specialty.metaTitle,
      description: specialty.metaDescription,
      primaryImage: image,
    }),
    articleSchema({
      url,
      headline: specialty.heroHeadline,
      description: specialty.primaryBlock.body,
      image,
    }),
    ...(itemList ? [itemList] : []),
    ...(specialty.faqs && specialty.faqs.length > 0 ? [faqSchema(specialty.faqs)] : []),
  ];

  return (
    <>
      <SchemaInjector schema={schemas} />
      <BreadcrumbNav
        items={[
          { name: "Home", url: "/" },
          { name: "Specialties", url: "/specialties/" },
          { name: specialty.name, url: `/specialties/${specialty.slug}/` },
        ]}
      />

      <section className="container-pad py-12 md:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            {specialty.heroEyebrow && (
              <div className="eyebrow">{specialty.heroEyebrow}</div>
            )}
            <h1 className="mb-6">{specialty.heroHeadline}</h1>
            {specialty.heroSubheadline && (
              <p className="text-lg text-[var(--color-text-muted)] mb-6">
                {specialty.heroSubheadline}
              </p>
            )}
            <div className="flex flex-wrap gap-3">
              <ThemeBtn href="/menu/" variant="primary">View Full Menu</ThemeBtn>
              <ThemeBtn href={RESTAURANT.orderOnline} external variant="secondary">
                Order Online
              </ThemeBtn>
            </div>
          </div>

          {specialty.image && (
            <SmartImage
              src={specialty.image}
              alt={`${specialty.name} at ${RESTAURANT.name}`}
              priority
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="aspect-[4/5] rounded-[var(--radius-section)] shadow-[0_30px_80px_-30px_rgba(26,20,16,0.35)]"
            />
          )}
        </div>
      </section>

      <section className="bg-[var(--color-warm-white)] section-pad">
        <div className="container-pad max-w-3xl">
          <h2 className="mb-6">{specialty.primaryBlock.heading}</h2>
          <p className="text-lg text-[var(--color-text-muted)] leading-relaxed">
            {specialty.primaryBlock.body}
          </p>
        </div>
      </section>

      {related.length > 0 && (
        <section className="container-pad section-pad">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-end justify-between mb-8 flex-wrap gap-4">
              <h2>On the menu</h2>
              <Link
                href="/menu/"
                className="link-underline text-[var(--color-text)] font-medium text-sm"
              >
                View Full Menu
              </Link>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {related.map(({ item, category }) => (
                <MenuItemCard
                  key={item.name}
                  item={item}
                  categoryLabel={category.name}
                  href="/menu/"
                />
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="bg-[var(--color-warm-white)] section-pad">
        <div className="container-pad max-w-3xl">
          <h2 className="mb-6">{specialty.pickupBlock.heading}</h2>
          <p className="text-lg text-[var(--color-text-muted)] leading-relaxed">
            {specialty.pickupBlock.body}
          </p>
        </div>
      </section>

      {specialty.faqs && specialty.faqs.length > 0 && (
        <FAQSection
          faqs={specialty.faqs}
          eyebrow={`Common questions about ${specialty.name.toLowerCase()}`}
          title="Frequently asked questions."
        />
      )}

      <section className="container-pad section-pad text-center max-w-2xl mx-auto">
        <div className="flex flex-wrap gap-3 justify-center">
          <ThemeBtn href="/menu/" variant="primary">View Full Menu</ThemeBtn>
          <ThemeBtn href={RESTAURANT.orderOnline} external variant="secondary">
            Order Online
          </ThemeBtn>
          <ThemeBtn href={`tel:${RESTAURANT.phoneRaw}`} variant="secondary">
            Call Us
          </ThemeBtn>
        </div>
      </section>
    </>
  );
}