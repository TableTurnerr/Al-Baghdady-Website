import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata } from "@/data/metadata";
import { breadcrumbSchema, webPageSchema, faqSchema } from "@/data/schema";
import SchemaInjector from "@/components/shared/SchemaInjector";
import BreadcrumbNav from "@/components/layout/BreadcrumbNav";
import ThemeBtn from "@/components/shared/ThemeBtn";
import QRHover from "@/components/shared/QRHover";
import SmartImage from "@/components/shared/SmartImage";
import FAQSection from "@/components/home/FAQSection";
import { RESTAURANT } from "@/data/restaurant";
import { MENU } from "@/data/menu";
import { SPECIALTIES } from "@/data/specialties";

const BAKERY_CATEGORY_IMAGE = "/Images/gallery/baklava-tiered-tray.webp";

const featuredBakeryItems = (
  MENU.find((c) => c.id === "bakery-sweets")?.items.filter((i) => i.popular) ?? []
).slice(0, 6);

const BAKERY_SPECIALTY_SLUGS = [
  "baklava",
  "kunafa",
  "burma",
  "lady-fingers",
  "manakish",
  "fatayer",
  "bread",
] as const;

const bakerySpecialties = BAKERY_SPECIALTY_SLUGS
  .map((slug) => SPECIALTIES.find((s) => s.slug === slug))
  .filter((s): s is NonNullable<typeof s> => s !== undefined);

// Bakery FAQs, FAQPage schema + featured snippets.
const BAKERY_FAQS = [
  {
    question: "Are your Iraqi sweets baked fresh in-house?",
    answer:
      "Yes, everything is baked in-house, daily. Our bakers fire the tandoor for fresh samoon each morning, layer phyllo by hand for baklava and burma, and make kunafa to order. Nothing is frozen or shipped in.",
  },
  {
    question: "Can I order a custom dessert tray for an event?",
    answer:
      "Yes, custom Iraqi sweets trays are one of our specialties for Eid, weddings, baby showers and corporate events. Mix baklava, kunafa, ladyfingers, burma and mabrouma, sized to your guest count. Order ahead through our [catering page](/catering/).",
  },
  {
    question: "Can I walk in, or should I order ahead?",
    answer:
      "Walk in any time for whatever's in the case that day. For large orders, custom trays or a specific sweet, we recommend ordering a day ahead so we can have it ready and fresh.",
  },
];

export const metadata: Metadata = createMetadata({
  title: "Iraqi Bakery Richardson TX, Fresh Sweets & Bread | Al-Baghdady",
  description:
    "In-house Arabic bakery in Richardson, TX. Fresh samoon from the tandoor, kunafa, baklava, ladyfingers (znood al sit), burma, fatayer, manakish, baked daily using family recipes from Baghdad since 1919.",
  path: "/bakery/",
  keywords: [
    "kanafa dallas",
    "kunafa dallas",
    "knafeh dallas",
    "baklava dallas",
    "baklava near me",
    "baklava bakery dallas",
    "pistachio baklava richardson",
    "turkish baklava dallas",
    "fatayer dallas",
    "manakish dallas",
    "zaatar bread",
    "spinach pie dallas",
    "burma dallas",
    "mabrouma dallas",
    "lady fingers dallas",
    "iraqi sweets dallas",
    "arabic sweets dallas",
    "arabic bakery dallas",
    "halal bakery near me",
    "halal cake shop near me",
    "samoon bread dallas",
    "custom dessert tray dallas",
  ],
});

export default function BakeryPage() {
  return (
    <>
      <SchemaInjector
        schema={[
          breadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Bakery", url: "/bakery/" },
          ]),
          webPageSchema({
            url: "/bakery/",
            name: "Iraqi Bakery Richardson TX, Fresh Sweets & Bread | Al-Baghdady",
            description:
              "In-house Arabic bakery in Richardson, TX. Fresh samoon from the tandoor, kunafa, baklava, ladyfingers (znood al sit), burma, fatayer, manakish, baked daily using family recipes from Baghdad since 1919.",
            primaryImage: "/Images/gallery/baklava-pistachio-copper.webp",
          }),
          faqSchema(BAKERY_FAQS),
        ]}
      />
      <BreadcrumbNav
        items={[
          { name: "Home", url: "/" },
          { name: "Bakery", url: "/bakery/" },
        ]}
      />

      <section className="container-pad py-10 md:py-16 max-w-3xl">
        <div className="eyebrow">Four Generations · Since 1919</div>
        <h1 className="mb-6">Our Bakery, Fresh Iraqi Sweets, Bread &amp; Breakfast</h1>
        <p className="text-lg text-[var(--color-text-muted)] mb-4 leading-relaxed">
          Our in-house bakery is the heart of Albaghdady. Every morning we fire up the tandoor for fresh samoon, layer phyllo for kunafa and baklava, hand-roll burma and ladyfingers, and hand-fold fatayer and manakish, all from the recipes our family has been baking since 1919.
        </p>
        <p className="text-base text-[var(--color-text-muted)] leading-relaxed">
          Stop in for a warm samoon, pick up a tray of mixed sweets, or order ahead for your next celebration. Everything is baked the day you eat it.
        </p>
      </section>

      <section className="container-pad pb-16 md:pb-24">
        <h2 className="mb-8">Fresh Iraqi Sweets in the Case Today</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredBakeryItems.map((item) => (
            <article key={item.name} className="card p-0">
              <div className="card-img aspect-[4/3]">
                <SmartImage
                  src={item.image ?? BAKERY_CATEGORY_IMAGE}
                  alt={`${item.name}, fresh-baked Iraqi bakery sweets at Al-Baghdady in Richardson, TX`}
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  className="w-full h-full"
                />
              </div>
              <div className="p-6">
                <h3
                  className="text-xl mb-2"
                  style={{ fontFamily: "var(--font-display)", fontWeight: 500 }}
                >
                  {item.name}
                </h3>
                <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-20 max-w-3xl">
          <h2 className="mb-3">Browse Our Iraqi Bakery Specialties</h2>
          <p className="text-[var(--color-text-muted)] mb-8 leading-relaxed">
            Each one has its own page, story, recipe, and how to order.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {bakerySpecialties.map((s) => (
            <Link
              key={s.slug}
              href={`/specialties/${s.slug}/`}
              className="card p-6 transition-all duration-500 hover:-translate-y-0.5 hover:shadow-[var(--shadow-lift)]"
            >
              <h3
                className="text-lg mb-2"
                style={{ fontFamily: "var(--font-display)", fontWeight: 500 }}
              >
                {s.name}
              </h3>
              <p className="text-sm text-[var(--color-text-muted)] line-clamp-2 leading-relaxed mb-3">
                {s.primaryBlock.body}
              </p>
              <span className="text-sm font-medium text-[var(--color-primary)]">
                View →
              </span>
            </Link>
          ))}
        </div>

        {/* Topical SEO content for the bakery page. */}
        <div className="mt-20 max-w-3xl">
          <div className="eyebrow">Our Bakery</div>
          <h2 className="mb-5">An Authentic Iraqi &amp; Arabic Bakery in Richardson, TX</h2>
          <div className="space-y-4 text-[var(--color-text-muted)] leading-relaxed">
            <p>
              At Al-Baghdady, every tray of{" "}
              <Link href="/specialties/baklava/" className="link-underline text-[var(--color-text)]">baklava</Link>, {" "}
              <Link href="/specialties/kunafa/" className="link-underline text-[var(--color-text)]">kunafa</Link> and{" "}
              <Link href="/specialties/burma/" className="link-underline text-[var(--color-text)]">burma</Link> is baked in-house from
              recipes our family has carried from Baghdad since 1919. Master baker Salah Hassan layers
              paper-thin phyllo by hand, grinds fresh pistachios and walnuts daily, and finishes each batch
              with our signature honey syrup, the way an Iraqi bakery is meant to.
            </p>
            <p>
              Looking for a halal cake shop or Arabic bakery near you in the Dallas–Fort Worth area? Our case
              is stocked fresh every day with pistachio and walnut baklava, cream-filled mabrouma, {" "}
              <Link href="/specialties/lady-fingers/" className="link-underline text-[var(--color-text)]">znood al sit ladyfingers</Link>,
              bird&apos;s nest, awama and dehena, alongside fresh-baked{" "}
              <Link href="/specialties/bread/" className="link-underline text-[var(--color-text)]">samoon and tandoor bread</Link>.
              Whether you want a single piece with your chai or a full sweets tray for Eid, a wedding or a
              Ramadan iftar, everything is 100% halal and Zabihah-verified.
            </p>
            <p>
              Can&apos;t make it to Richardson? We deliver fresh Iraqi sweets and bread to{" "}
              <Link href="/near/plano-tx/" className="link-underline text-[var(--color-text)]">Plano</Link>, {" "}
              <Link href="/near/frisco-tx/" className="link-underline text-[var(--color-text)]">Frisco</Link>, {" "}
              <Link href="/near/garland-tx/" className="link-underline text-[var(--color-text)]">Garland</Link> and{" "}
              <Link href="/near/" className="link-underline text-[var(--color-text)]">neighborhoods across DFW</Link>, order online for pickup or doorstep delivery.
            </p>
          </div>
        </div>

        <div className="bg-[var(--color-warm-white)] rounded-[var(--radius-section)] p-10 md:p-16 mt-16 text-center border border-[var(--color-border)]">
          <h2 className="mb-4">Custom Iraqi Dessert Trays for Your Celebration</h2>
          <p className="text-[var(--color-text-muted)] max-w-2xl mx-auto mb-8 leading-relaxed">
            Hosting an Eid party, wedding, baby shower or corporate event? Our custom trays make
            beautiful, traditional centerpieces. Mix kanafa, baklava, ladyfingers and ma&apos;amoul,
            sized for any guest count.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <ThemeBtn href="/catering/" variant="primary">Request a Tray</ThemeBtn>
            <QRHover value={`tel:${RESTAURANT.phoneRaw}`}>
              <ThemeBtn href={`tel:${RESTAURANT.phoneRaw}`} variant="secondary">Call Us</ThemeBtn>
            </QRHover>
          </div>
        </div>
      </section>

      <FAQSection
        faqs={BAKERY_FAQS}
        eyebrow="Bakery Questions"
        title="Frequently Asked Questions About Our Bakery"
      />
    </>
  );
}
