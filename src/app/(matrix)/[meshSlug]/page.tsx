import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, MapPin, Star } from "lucide-react";
import { createMetadata } from "@/data/metadata";
import { breadcrumbSchema, webPageSchema } from "@/data/schema";
import { MATRIX_ALLOWLIST, meshSlug, resolveMeshEntry } from "@/data/matrix";
import { RESTAURANT } from "@/data/restaurant";
import SchemaInjector from "@/components/shared/SchemaInjector";
import BreadcrumbNav from "@/components/layout/BreadcrumbNav";
import SmartImage from "@/components/shared/SmartImage";
import ThemeBtn from "@/components/shared/ThemeBtn";
import QRHover from "@/components/shared/QRHover";

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
            primaryImage: dish.heroImage,
          }),
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
            <h1 className="mb-6">{dish.name} in {n.city}, TX</h1>
            <p className="text-lg text-[var(--color-text-muted)] mb-6">{entry.local}</p>
            <div className="flex flex-wrap items-center gap-6 mb-8">
              <div className="flex items-center gap-2 text-sm">
                <MapPin size={18} className="text-[var(--color-primary)]" />
                <span className="font-medium">{n.driveTime}</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Star size={18} className="fill-[var(--color-gold)] text-[var(--color-gold)]" />
                <span className="font-medium">
                  {RESTAURANT.ratingValue} ({RESTAURANT.reviewCount.toLocaleString()} reviews)
                </span>
              </div>
            </div>
            <div className="flex flex-wrap gap-3">
              <QRHover value={RESTAURANT.orderOnline}>
                <ThemeBtn href={RESTAURANT.orderOnline} external variant="primary">Order Delivery</ThemeBtn>
              </QRHover>
              <ThemeBtn href="/catering/" variant="secondary">Catering Inquiries</ThemeBtn>
            </div>
          </div>

          <SmartImage
            src={dish.heroImage}
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
          {dish.relatedMenuItemNames && dish.relatedMenuItemNames.length > 0 && (
            <p className="text-[var(--color-text-muted)] leading-relaxed">
              On the menu:{" "}
              {dish.relatedMenuItemNames.map((name, i) => (
                <span key={name}>
                  {i > 0 ? ", " : ""}
                  <Link href="/menu/" className="link-underline text-[var(--color-text)]">{name}</Link>
                </span>
              ))}
              .
            </p>
          )}
        </div>
      </section>

      {/* Internal links + CTA */}
      <section className="container-pad section-pad max-w-3xl">
        <h2 className="mb-5">Order {dish.name} to {n.city}</h2>
        <p className="text-[var(--color-text-muted)] leading-relaxed mb-6">
          We bake every morning in Richardson and deliver across {n.city} and the wider Dallas–Fort
          Worth area. Learn more about{" "}
          {dish.relatedSpecialtySlug && (
            <Link href={`/specialties/${dish.relatedSpecialtySlug}/`} className="link-underline text-[var(--color-text)]">
              our {dish.name.toLowerCase()}
            </Link>
          )}, see everything we serve {n.city} on our{" "}
          <Link href={`/near/${n.slug}/`} className="link-underline text-[var(--color-text)]">{n.city} page</Link>, or
          browse the full{" "}
          <Link href="/menu/" className="link-underline text-[var(--color-text)]">menu</Link>. Every item is 100% halal
          and Zabihah-verified.
        </p>
        <div className="flex flex-wrap gap-3">
          <ThemeBtn href="/menu/" variant="primary">View Full Menu</ThemeBtn>
          <Link href="/specialties/" className="link-underline text-[var(--color-text)] font-medium text-sm inline-flex items-center gap-1 self-center">
            All specialties <ArrowRight size={14} />
          </Link>
        </div>
      </section>
    </>
  );
}
