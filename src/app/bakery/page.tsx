import type { Metadata } from "next";
import { createMetadata } from "@/data/metadata";
import { breadcrumbSchema } from "@/data/schema";
import SchemaInjector from "@/components/shared/SchemaInjector";
import BreadcrumbNav from "@/components/layout/BreadcrumbNav";
import ThemeBtn from "@/components/shared/ThemeBtn";
import QRHover from "@/components/shared/QRHover";
import SmartImage from "@/components/shared/SmartImage";
import { RESTAURANT } from "@/data/restaurant";

export const metadata: Metadata = createMetadata({
  title: "The Bakery — Fresh Samoon, Kanafa, Baklava & Iraqi Sweets | Al-Baghdady",
  description:
    "In-house Arabic bakery in Richardson TX — fresh samoon bread, kanafa, baklava, ladyfingers (znood al sit), ma'amoul and custom dessert trays for weddings, Eid and parties.",
  path: "/bakery/",
  keywords: [
    "kanafa dallas",
    "baklava dallas",
    "iraqi sweets dallas",
    "arabic bakery dallas",
    "samoon bread dallas",
    "custom dessert tray dallas",
  ],
});

const ITEMS = [
  {
    name: "Samoon Bread",
    desc: "Iraq's traditional oval-shaped bread, baked fresh in our stone oven throughout the day. Crisp crust, pillowy interior. Sold by the piece or in bulk for parties.",
    image: "/Images/bakery.webp",
  },
  {
    name: "Kanafa",
    desc: "Shredded phyllo, melted cheese, rose-water syrup, crushed pistachios. The dessert reviewers call the best in Dallas. Made fresh daily — order whole or by the slice.",
    image: "/Images/dish-1.webp",
  },
  {
    name: "Baklava",
    desc: "Layers of paper-thin phyllo with walnut, pistachio and honey-syrup. Available by the piece or in mixed trays. A traditional showstopper for Eid, weddings and gifts.",
    image: "/Images/dish-2.webp",
  },
  {
    name: "Ladyfingers (Znood Al Sit)",
    desc: "Crispy phyllo rolls filled with sweet cream and dipped in fragrant syrup. A bakery favorite for desserts and dessert trays.",
    image: "/Images/dish-3.webp",
  },
  {
    name: "Ma'amoul",
    desc: "Buttery semolina cookies stuffed with date paste, walnut or pistachio. A traditional cookie for Eid and special occasions.",
    image: "/Images/dish-4.webp",
  },
  {
    name: "Custom Dessert Trays",
    desc: "Mixed trays of our signature sweets — perfect for parties, weddings, Eid, Ramadan iftar and corporate events. Trays start at $45. Order at least 24 hours ahead.",
    image: "/Images/hero.webp",
  },
];

export default function BakeryPage() {
  return (
    <>
      <SchemaInjector
        schema={breadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Bakery", url: "/bakery/" },
        ])}
      />
      <BreadcrumbNav
        items={[
          { name: "Home", url: "/" },
          { name: "Bakery", url: "/bakery/" },
        ]}
      />

      <section className="container-pad py-10 md:py-16 max-w-3xl">
        <div className="eyebrow">In-House Arabic Bakery</div>
        <h1 className="mb-6">The Bakery — Fresh Iraqi Sweets, Daily</h1>
        <p className="text-lg text-[var(--color-text-muted)] mb-4">
          Our bakery is open every day, turning out fresh samoon bread, sticky-cheese kanafa, layered
          baklava, ladyfingers and ma&apos;amoul cookies. Everything is made on site using traditional
          Iraqi recipes — no shortcuts, no shipped-in trays.
        </p>
        <p className="text-base text-[var(--color-text-muted)]">
          We&apos;re one of the few restaurants in Dallas with a full Arabic bakery under the same
          roof. Stop in to grab a fresh loaf of samoon, a slice of kanafa, or order a custom tray
          for your next celebration.
        </p>
      </section>

      <section className="container-pad pb-16 md:pb-24">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ITEMS.map((item) => (
            <article key={item.name} className="card p-0">
              <div className="card-img aspect-[4/3]">
                <SmartImage
                  src={item.image}
                  alt={item.name}
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  className="w-full h-full"
                />
              </div>
              <div className="p-6">
                <h2 className="!text-xl mb-2">{item.name}</h2>
                <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">{item.desc}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="bg-[var(--color-warm-white)] rounded-[var(--radius-section)] p-10 md:p-16 mt-16 text-center border border-[var(--color-border)]">
          <h2 className="mb-4">Custom dessert trays for your celebration.</h2>
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
    </>
  );
}
