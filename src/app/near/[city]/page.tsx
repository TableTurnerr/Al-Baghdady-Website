import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MapPin, Clock, Star } from "lucide-react";
import { createMetadata } from "@/data/metadata";
import { breadcrumbSchema, restaurantSchema, webPageSchema } from "@/data/schema";
import { NEIGHBORHOODS } from "@/data/neighborhoods";
import { RESTAURANT } from "@/data/restaurant";
import SchemaInjector from "@/components/shared/SchemaInjector";
import BreadcrumbNav from "@/components/layout/BreadcrumbNav";
import ThemeBtn from "@/components/shared/ThemeBtn";
import QRHover from "@/components/shared/QRHover";
import SmartImage from "@/components/shared/SmartImage";

export function generateStaticParams() {
  return NEIGHBORHOODS.map((n) => ({ city: n.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ city: string }>;
}): Promise<Metadata> {
  const { city } = await params;
  const n = NEIGHBORHOODS.find((x) => x.slug === city);
  if (!n) return {};
  return createMetadata({
    title: n.metaTitle,
    description: n.metaDescription,
    path: `/near/${n.slug}/`,
    keywords: n.keywords,
  });
}

export default async function NeighborhoodPage({
  params,
}: {
  params: Promise<{ city: string }>;
}) {
  const { city } = await params;
  const n = NEIGHBORHOODS.find((x) => x.slug === city);
  if (!n) notFound();

  return (
    <>
      <SchemaInjector
        schema={[
          restaurantSchema(),
          breadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Service Areas", url: "/near/" },
            { name: n.city, url: `/near/${n.slug}/` },
          ]),
          webPageSchema({
            url: `/near/${n.slug}/`,
            name: n.metaTitle,
            description: n.metaDescription,
            primaryImage: "/Images/hero.webp",
          }),
        ]}
      />
      <BreadcrumbNav
        items={[
          { name: "Home", url: "/" },
          { name: "Service Areas", url: "/near/" },
          { name: n.city, url: `/near/${n.slug}/` },
        ]}
      />

      <section className="container-pad py-12 md:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="eyebrow">Serving {n.city}, {n.state}</div>
            <h1 className="mb-6">{n.heroHeadline}</h1>
            <p className="text-lg text-[var(--color-text-muted)] mb-6">{n.heroSubheadline}</p>
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
              <ThemeBtn href="/menu/" variant="primary">View Menu</ThemeBtn>
              <QRHover value={RESTAURANT.orderOnline}>
                <ThemeBtn href={RESTAURANT.orderOnline} external variant="secondary">Order Delivery</ThemeBtn>
              </QRHover>
            </div>
          </div>

          <SmartImage
            src="/Images/hero.webp"
            alt={`Iraqi bakery and sweets at ${RESTAURANT.name}, serving ${n.city}, ${n.state}`}
            priority
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="aspect-[4/5] rounded-[var(--radius-section)] shadow-[0_30px_80px_-30px_rgba(26,20,16,0.35)]"
          />
        </div>
      </section>

      <section className="bg-[var(--color-warm-white)] section-pad">
        <div className="container-pad max-w-3xl">
          <h2 className="mb-6">Iraqi Food for {n.city}</h2>
          <p className="text-lg text-[var(--color-text-muted)] mb-6">{n.intro}</p>
          <p className="text-base text-[var(--color-text-muted)] mb-8">{n.body}</p>

          <h3 className="mb-4">Popular Dishes for {n.city} Diners</h3>
          <ul className="grid sm:grid-cols-2 gap-3 mb-8">
            {n.popularDishes.map((dish) => (
              <li key={dish} className="card p-4 flex items-center gap-3">
                <Clock size={18} className="text-[var(--color-primary)]" />
                <span className="font-medium">{dish}</span>
              </li>
            ))}
          </ul>

          <ThemeBtn href="/menu/" variant="primary">See Full Menu</ThemeBtn>
        </div>
      </section>

      <section className="container-pad section-pad text-center max-w-2xl mx-auto">
        <h2 className="mb-4">Visit Us From {n.city}</h2>
        <p className="text-[var(--color-text-muted)] mb-8">
          We&apos;re at {RESTAURANT.address.full} — {n.driveTime.toLowerCase()}. Free parking, halal across the
          menu, and an in-house bakery for fresh samoon, kanafa and dessert trays.
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <ThemeBtn
            href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(RESTAURANT.address.full)}`}
            external
            variant="primary"
          >
            Get Directions
          </ThemeBtn>
          <ThemeBtn href="/catering/" variant="secondary">Catering for {n.city}</ThemeBtn>
        </div>
      </section>

      <section className="bg-[var(--color-warm-white)] section-pad">
        <div className="container-pad max-w-5xl">
          <h2 className="mb-3 text-center">Other DFW Neighborhoods We Serve</h2>
          <p className="text-center text-[var(--color-text-muted)] mb-8">
            Authentic Iraqi food, halal bakery and catering — across the metroplex.
          </p>
          <div className="flex flex-wrap gap-2 justify-center">
            {NEIGHBORHOODS.filter((other) => other.slug !== n.slug).map((other) => (
              <Link
                key={other.slug}
                href={`/near/${other.slug}/`}
                className="px-4 py-2 rounded-full border border-[var(--color-border)] bg-white text-sm font-medium text-[var(--color-text)] hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] transition-colors"
              >
                Iraqi food in {other.city}
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/near/"
              className="text-sm font-medium text-[var(--color-primary)] hover:underline"
            >
              View all service areas →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
