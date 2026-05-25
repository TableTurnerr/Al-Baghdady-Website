import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, MapPin, Star, Sparkles } from "lucide-react";
import { createMetadata } from "@/data/metadata";
import {
  breadcrumbSchema,
  webPageSchema,
  restaurantSchema,
  dishProductSchema,
  faqSchema,
} from "@/data/schema";
import {
  MATRIX_ALLOWLIST,
  meshSlug,
  resolveMeshEntry,
  priceFromMenu,
  pickHeroImage,
  composeLocalDelivery,
  dishCityFaqs,
  dishesInCity,
  sameDishOtherCities,
} from "@/data/matrix";
import { DISHES } from "@/data/dishes";
import { NEIGHBORHOODS } from "@/data/neighborhoods";
import { MENU, type MenuItem, type MenuCategory } from "@/data/menu";
import { RESTAURANT } from "@/data/restaurant";
import SchemaInjector from "@/components/shared/SchemaInjector";
import BreadcrumbNav from "@/components/layout/BreadcrumbNav";
import SmartImage from "@/components/shared/SmartImage";
import ThemeBtn from "@/components/shared/ThemeBtn";
import QRHover from "@/components/shared/QRHover";
import TrustPills from "@/components/shared/TrustPills";
import LocalMap from "@/components/shared/LocalMap";
import DishCityCard from "@/components/shared/DishCityCard";
import MenuItemCard from "@/components/menu/MenuItemCard";
import FAQSection from "@/components/home/FAQSection";

export const dynamic = "error";
export const dynamicParams = false;

export function generateStaticParams() {
  return MATRIX_ALLOWLIST.map((e) => ({ meshSlug: meshSlug(e.dishSlug, e.citySlug) }));
}

function lookup(slug: string) {
  const entry = MATRIX_ALLOWLIST.find((e) => meshSlug(e.dishSlug, e.citySlug) === slug);
  const resolved = resolveMeshEntry(slug);
  if (!entry || !resolved) return null;
  return { entry, dish: resolved.dish, n: resolved.neighborhood };
}

type ResolvedRelatedItem = { item: MenuItem; category: MenuCategory };

function resolveRelatedItems(names: string[] | undefined): ResolvedRelatedItem[] {
  if (!names || names.length === 0) return [];
  const out: ResolvedRelatedItem[] = [];
  for (const category of MENU) {
    for (const item of category.items) {
      if (names.includes(item.name)) out.push({ item, category });
    }
  }
  return out;
}

export async function generateMetadata(
  { params }: { params: Promise<{ meshSlug: string }> }
): Promise<Metadata> {
  const { meshSlug: slug } = await params;
  const found = lookup(slug);
  if (!found) return { robots: { index: false, follow: false } };
  const { entry, dish, n } = found;
  return createMetadata({
    title: `${dish.name} in ${n.city}, TX | Al-Baghdady`,
    description: entry.local.length > 155 ? entry.local.slice(0, 152) + "…" : entry.local,
    path: `/${slug}/`,
    ogImage: pickHeroImage(dish, n.slug),
    keywords: [
      `${dish.name.toLowerCase()} ${n.city.toLowerCase()}`,
      `${dish.name.toLowerCase()} in ${n.city.toLowerCase()}`,
      `${dish.name.toLowerCase()} ${n.city.toLowerCase()} tx`,
      `${dish.name.toLowerCase()} delivery ${n.city.toLowerCase()}`,
      ...dish.keywords,
    ],
  });
}

export default async function MeshLeafPage(
  { params }: { params: Promise<{ meshSlug: string }> }
) {
  const { meshSlug: slug } = await params;
  const found = lookup(slug);
  if (!found) notFound();
  const { entry, dish, n } = found;

  const dishLower = dish.name.toLowerCase();
  const heroImage = pickHeroImage(dish, n.slug);
  const price = priceFromMenu(dish);
  const faqs = dishCityFaqs(dish, n);
  const related = resolveRelatedItems(dish.relatedMenuItemNames);
  const localDelivery = composeLocalDelivery(dish, n);
  const moreInCity = dishesInCity(n.slug, dish.slug);
  const inOtherCities = sameDishOtherCities(dish.slug, n.slug);

  const pills = [
    "100% Halal",
    "Zabihah-verified",
    "Baked fresh in Richardson",
    ...(dish.dietary?.includes("Vegetarian") ? ["Vegetarian"] : []),
  ];

  // Pairs-with: link to the same-city mesh page when it exists, else the specialty page.
  const pairs = (dish.pairsWith ?? [])
    .map((s) => DISHES.find((d) => d.slug === s))
    .filter((d): d is NonNullable<typeof d> => Boolean(d))
    .map((d) => {
      const inThisCity = MATRIX_ALLOWLIST.some(
        (e) => e.dishSlug === d.slug && e.citySlug === n.slug
      );
      const href = inThisCity
        ? `/${meshSlug(d.slug, n.slug)}/`
        : d.relatedSpecialtySlug
          ? `/specialties/${d.relatedSpecialtySlug}/`
          : "/menu/";
      return { name: d.name, href, inThisCity };
    });

  return (
    <>
      <SchemaInjector
        schema={[
          breadcrumbSchema([
            { name: "Home", url: "/" },
            { name: `${n.city}, ${n.state}`, url: `/near/${n.slug}/` },
            { name: `${dish.name} in ${n.city}`, url: `/${slug}/` },
          ]),
          webPageSchema({
            url: `/${slug}/`,
            name: `${dish.name} in ${n.city}, TX | Al-Baghdady`,
            description: entry.local,
            primaryImage: heroImage,
          }),
          restaurantSchema(),
          dishProductSchema({
            url: `/${slug}/`,
            name: dish.name,
            cityName: n.city,
            description: dish.intro,
            image: heroImage,
            aliases: dish.aliases,
            ingredients: dish.ingredients,
            priceFrom: price,
          }),
          faqSchema(faqs),
        ]}
      />
      <BreadcrumbNav
        items={[
          { name: "Home", url: "/" },
          { name: n.city, url: `/near/${n.slug}/` },
          { name: dish.name, url: `/${slug}/` },
        ]}
      />

      {/* Hero */}
      <section className="container-pad py-12 md:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="eyebrow">{n.city}, {n.state}</div>
            <h1 className="mb-5">{dish.name} in {n.city}, TX</h1>
            <p className="text-lg text-[var(--color-text-muted)] mb-6">{entry.local}</p>

            <TrustPills items={pills} className="mb-6" />

            <div className="flex flex-wrap items-center gap-x-6 gap-y-3 mb-8">
              {price && (
                <div className="text-sm">
                  <span className="text-[var(--color-text-muted)]">from </span>
                  <span className="font-semibold text-[var(--color-text)]">{price}</span>
                </div>
              )}
              <div className="flex items-center gap-2 text-sm">
                <Star size={16} className="fill-[var(--color-gold)] text-[var(--color-gold)]" />
                <span className="font-medium">
                  {RESTAURANT.ratingValue} ({RESTAURANT.reviewCount.toLocaleString()} reviews)
                </span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <MapPin size={16} className="text-[var(--color-primary)]" />
                <span className="font-medium">{n.driveTime}</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <QRHover value={RESTAURANT.orderOnline}>
                <ThemeBtn href={RESTAURANT.orderOnline} external variant="primary">Order Delivery</ThemeBtn>
              </QRHover>
              <ThemeBtn href="/menu/" variant="secondary">View Full Menu</ThemeBtn>
            </div>
          </div>

          <SmartImage
            src={heroImage}
            alt={`${dish.name} from Al-Baghdady, halal Iraqi bakery, delivered to ${n.city}, ${n.state}`}
            priority
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="aspect-[4/5] rounded-[var(--radius-section)] shadow-[0_30px_80px_-30px_rgba(26, 20, 16, 0.35)]"
          />
        </div>
      </section>

      {/* About the dish */}
      <section className="bg-[var(--color-warm-white)] section-pad">
        <div className="container-pad max-w-3xl">
          <div className="eyebrow">About Our {dish.name}</div>
          <h2 className="mb-5">Authentic {dish.name}, Baked Fresh in Richardson</h2>
          <p className="text-[var(--color-text-muted)] leading-relaxed mb-6">{dish.intro}</p>

          {dish.variants && dish.variants.length > 0 && (
            <div className="mb-6">
              <div className="text-xs font-semibold uppercase tracking-[0.15em] text-[var(--color-text-muted)] mb-3">
                Available in
              </div>
              <div className="flex flex-wrap gap-2">
                {dish.variants.map((v) => (
                  <span
                    key={v}
                    className="inline-flex items-center gap-1.5 text-sm font-medium px-3 py-1.5 rounded-full border border-[var(--color-border)] bg-white capitalize"
                  >
                    <Sparkles size={12} className="text-[var(--color-gold)]" />
                    {v}
                  </span>
                ))}
              </div>
            </div>
          )}

          {dish.prepNote && (
            <p className="text-[var(--color-text-muted)] leading-relaxed mb-4">{dish.prepNote}</p>
          )}

          {dish.ingredients && dish.ingredients.length > 0 && (
            <p className="text-sm text-[var(--color-text-muted)] mb-4">
              <span className="font-semibold text-[var(--color-text)]">Made with: </span>
              {dish.ingredients.join(", ")}.
            </p>
          )}

          {pairs.length > 0 && (
            <p className="text-sm text-[var(--color-text-muted)]">
              <span className="font-semibold text-[var(--color-text)]">Goes well with: </span>
              {pairs.map((p, i) => (
                <span key={p.name}>
                  {i > 0 ? ", " : ""}
                  <Link href={p.href} className="link-underline text-[var(--color-text)]">{p.name}</Link>
                </span>
              ))}
              .
            </p>
          )}
        </div>
      </section>

      {/* Closer look gallery (only when the dish has extra real photos) */}
      {dish.gallery && dish.gallery.length >= 2 && (
        <section className="container-pad section-pad">
          <div className="max-w-5xl mx-auto">
            <h2 className="mb-8 text-center">A Closer Look</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {dish.gallery.slice(0, 6).map((src, i) => (
                <SmartImage
                  key={src}
                  src={src}
                  alt={`${dish.name} at Al-Baghdady, Richardson TX (${i + 1})`}
                  sizes="(min-width: 768px) 33vw, 50vw"
                  className="aspect-square rounded-2xl"
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Local delivery + map */}
      <section className="bg-[var(--color-warm-white)] section-pad">
        <div className="container-pad max-w-5xl">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <div className="eyebrow">Delivery & Pickup</div>
              <h2 className="mb-5">{dish.name} Across {n.city}</h2>
              <p className="text-[var(--color-text-muted)] leading-relaxed mb-6">{localDelivery}</p>
              {n.landmarks && n.landmarks.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-6">
                  {n.landmarks.map((lm) => (
                    <span
                      key={lm}
                      className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-full border border-[var(--color-border)] bg-white text-[var(--color-text-muted)]"
                    >
                      <MapPin size={12} className="text-[var(--color-primary)]" />
                      {lm}
                    </span>
                  ))}
                </div>
              )}
              <div className="flex flex-wrap gap-3">
                <ThemeBtn href={RESTAURANT.orderOnline} external variant="primary">Order Delivery</ThemeBtn>
                <Link
                  href={`/near/${n.slug}/`}
                  className="link-underline text-[var(--color-text)] font-medium text-sm inline-flex items-center gap-1 self-center"
                >
                  Everything we serve {n.city} <ArrowRight size={14} />
                </Link>
              </div>
            </div>
            <LocalMap
              query={RESTAURANT.address.full}
              title={`Map to Al-Baghdady from ${n.city}, TX`}
              className="h-full min-h-[300px]"
            />
          </div>
        </div>
      </section>

      {/* Related menu items */}
      {related.length > 0 && (
        <section className="bg-[var(--color-warm-white)] section-pad">
          <div className="container-pad max-w-5xl mx-auto">
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

      {/* Interlinking grids */}
      {(moreInCity.length > 0 || inOtherCities.length > 0) && (
        <section className="container-pad section-pad">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10">
            {moreInCity.length > 0 && (
              <div>
                <h2 className="text-xl mb-5">More to Order in {n.city}</h2>
                <div className="grid gap-3">
                  {moreInCity.map((e) => {
                    const d = DISHES.find((x) => x.slug === e.dishSlug);
                    if (!d) return null;
                    return (
                      <DishCityCard
                        key={e.dishSlug}
                        href={`/${meshSlug(e.dishSlug, e.citySlug)}/`}
                        title={`${d.name} in ${n.city}`}
                        subtitle={`Delivered across ${n.city}`}
                        image={d.heroImage}
                      />
                    );
                  })}
                </div>
              </div>
            )}
            {inOtherCities.length > 0 && (
              <div>
                <h2 className="text-xl mb-5">{dish.name} in Nearby Cities</h2>
                <div className="grid gap-3">
                  {inOtherCities.slice(0, 8).map((e) => {
                    const c = NEIGHBORHOODS.find((x) => x.slug === e.citySlug);
                    if (!c) return null;
                    return (
                      <DishCityCard
                        key={e.citySlug}
                        href={`/${meshSlug(e.dishSlug, e.citySlug)}/`}
                        title={`${dish.name} in ${c.city}`}
                        subtitle={c.driveTime}
                        image={dish.heroImage}
                      />
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </section>
      )}

      {/* FAQ */}
      <FAQSection
        faqs={faqs}
        eyebrow={`Ordering ${dishLower} in ${n.city}`}
        title="Frequently asked questions."
      />

      {/* Final CTA */}
      <section className="container-pad section-pad text-center max-w-2xl mx-auto">
        <h2 className="mb-4">Order {dish.name} to {n.city} Today</h2>
        <p className="text-[var(--color-text-muted)] mb-8">
          Baked fresh every morning in Richardson, {n.driveTime}. 100% halal and Zabihah-verified.
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <ThemeBtn href={RESTAURANT.orderOnline} external variant="primary">Order Delivery</ThemeBtn>
          <ThemeBtn href="/catering/" variant="secondary">Catering Inquiries</ThemeBtn>
          <ThemeBtn href={`tel:${RESTAURANT.phoneRaw}`} variant="secondary">Call Us</ThemeBtn>
        </div>
      </section>
    </>
  );
}
