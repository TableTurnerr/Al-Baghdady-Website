import type { Metadata } from "next";
import Link from "next/link";
import { Sunrise } from "lucide-react";
import { createMetadata } from "@/data/metadata";
import { MENU } from "@/data/menu";
import { menuSchema, breadcrumbSchema, webPageSchema, faqSchema } from "@/data/schema";
import SchemaInjector from "@/components/shared/SchemaInjector";
import BreadcrumbNav from "@/components/layout/BreadcrumbNav";
import ThemeBtn from "@/components/shared/ThemeBtn";
import QRHover from "@/components/shared/QRHover";
import CategoryNav from "@/components/menu/CategoryNav";
import MenuItemCard from "@/components/menu/MenuItemCard";
import FAQSection from "@/components/home/FAQSection";
import { RESTAURANT } from "@/data/restaurant";

function fmtTime(t: string) {
  const [h, m] = t.split(":").map(Number);
  const period = h >= 12 ? "PM" : "AM";
  const hour = h % 12 || 12;
  return m ? `${hour}:${String(m).padStart(2, "0")} ${period}` : `${hour} ${period}`;
}

const BREAKFAST_RANGE = `${fmtTime(RESTAURANT.breakfastHours.open)} – ${fmtTime(RESTAURANT.breakfastHours.close)}`;

// Menu FAQs, FAQPage schema + featured snippets.
const MENU_FAQS = [
  {
    question: "What's on the menu at Al-Baghdady?",
    answer:
      "Our menu spans the full Iraqi bakery and breakfast tradition: fresh samoon and tandoor bread, savory fatayer and manakish, a daily case of baklava, kunafa, burma and ladyfingers, plus a sit-down Iraqi breakfast every morning except Monday. Browse the categories above or explore our [specialties](/specialties/).",
  },
  {
    question: "Can I order from the menu for pickup or delivery?",
    answer:
      "Yes, order online for same-day pickup at our Richardson store or delivery across the Dallas–Fort Worth area. You can also call us to place an order or ask about a specific dish.",
  },
  {
    question: "Do you serve Iraqi breakfast all day, or only in the morning?",
    answer: `Iraqi breakfast is a morning service, every day except Monday, ${BREAKFAST_RANGE}. The bakery case of baklava, kunafa, samoon and Iraqi sweets is available all day, every day we're open.`,
  },
];

export const metadata: Metadata = createMetadata({
  title: "Menu, Iraqi Bakery, Breakfast & Sweets | Al-Baghdady",
  description:
    "Browse the Al-Baghdady menu, traditional Iraqi breakfast, fresh samoon and tandoor bread, manakish and fatayer, baklava, kunafa, mabrouma and Iraqi sweets. 100% halal, Richardson TX.",
  path: "/menu/",
  keywords: [
    "al baghdady menu",
    "iraqi bakery menu dallas",
    "iraqi breakfast menu richardson",
    "halal bakery menu",
    "baklava menu",
    "kanafa menu",
    "kunafa menu",
    "fatayer menu",
    "manakish menu",
    "samoon bread",
    "iraqi sweets menu",
    "arabic bakery menu dallas",
  ],
});

export default function MenuPage() {
  return (
    <>
      <SchemaInjector
        schema={[
          menuSchema(),
          breadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Menu", url: "/menu/" },
          ]),
          webPageSchema({
            url: "/menu/",
            name: "Menu, Iraqi Bakery, Breakfast & Sweets | Al-Baghdady",
            description:
              "Browse the Al-Baghdady menu, traditional Iraqi breakfast, fresh samoon and tandoor bread, manakish and fatayer, baklava, kunafa, mabrouma and Iraqi sweets. 100% halal, Richardson TX.",
            primaryImage: "/Images/menu/bakery-sweets.webp",
          }),
          faqSchema(MENU_FAQS),
        ]}
      />
      <BreadcrumbNav
        items={[
          { name: "Home", url: "/" },
          { name: "Menu", url: "/menu/" },
        ]}
      />

      <section className="container-pad py-10 md:py-16">
        <div className="max-w-3xl">
          <div className="eyebrow">Our Menu</div>
          <h1 className="mb-5">Authentic Iraqi Cuisine & Bakery</h1>
          <p className="text-lg text-[var(--color-text-muted)]">
            Every dish is made with traditional Iraqi spices and family recipes. Halal across the
            entire menu, with fresh samoon bread baked throughout the day in our in-house bakery.
          </p>
          <div className="flex flex-wrap gap-3 mt-6">
            <QRHover value={RESTAURANT.orderOnline}>
              <ThemeBtn href={RESTAURANT.orderOnline} external variant="primary">
                Order Online
              </ThemeBtn>
            </QRHover>
            <ThemeBtn href="/catering/" variant="secondary">Catering Inquiries</ThemeBtn>
          </div>

          <div className="mt-8 inline-flex items-start gap-3 rounded-xl border border-[var(--color-gold)]/30 bg-[var(--color-gold)]/[0.07] px-4 py-3">
            <Sunrise size={18} className="text-[var(--color-gold-dark)] mt-0.5 shrink-0" aria-hidden="true" />
            <div>
              <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--color-gold-dark)]">
                Breakfast Service · {BREAKFAST_RANGE}
              </div>
              <div className="text-sm text-[var(--color-text)] mt-1 font-medium">
                {RESTAURANT.breakfastHours.note}
              </div>
            </div>
          </div>
        </div>
      </section>

      <CategoryNav categories={MENU.map(({ id, name }) => ({ id, name }))} />

      {MENU.map((category) => (
        <section key={category.id} id={category.id} className="container-pad section-pad scroll-mt-[152px]">
          <header className="mb-10 max-w-2xl">
            <h2 className="mb-3">{category.name}</h2>
            <p className="text-[var(--color-text-muted)]">{category.description}</p>
          </header>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {category.items.map((item) => (
              <MenuItemCard key={item.name} item={item} />
            ))}
          </div>
        </section>
      ))}

      {/* Topical SEO content + internal links to specialty pages. */}
      <section className="container-pad section-pad border-t border-[var(--color-border)]">
        <div className="max-w-3xl">
          <div className="eyebrow">More About Our Kitchen</div>
          <h2 className="mb-5">Authentic Iraqi Bakery &amp; Breakfast in Richardson, TX</h2>
          <div className="space-y-4 text-[var(--color-text-muted)] leading-relaxed">
            <p>
              Al-Baghdady is a family-run halal Iraqi bakery and breakfast café in Richardson, serving
              the Dallas–Fort Worth area with recipes carried from Baghdad. Every morning our bakers fire
              fresh{" "}
              <Link href="/specialties/bread/" className="link-underline text-[var(--color-text)]">samoon and tandoor bread</Link>, hand-fold{" "}
              <Link href="/specialties/fatayer/" className="link-underline text-[var(--color-text)]">fatayer</Link>, and stretch{" "}
              <Link href="/specialties/manakish/" className="link-underline text-[var(--color-text)]">manakish</Link>, the savory
              backbone of a traditional Iraqi breakfast.
            </p>
            <p>
              Our in-house bakery is best known for Iraqi sweets: paper-thin{" "}
              <Link href="/specialties/baklava/" className="link-underline text-[var(--color-text)]">baklava</Link> layered with
              pistachios and walnuts, hot{" "}
              <Link href="/specialties/kunafa/" className="link-underline text-[var(--color-text)]">kunafa</Link> with melted cheese
              and syrup, cigar-rolled{" "}
              <Link href="/specialties/burma/" className="link-underline text-[var(--color-text)]">burma</Link>, and cream-filled{" "}
              <Link href="/specialties/lady-fingers/" className="link-underline text-[var(--color-text)]">ladyfingers (znood al sit)</Link>.
              Pair any of them with a glass of cardamom{" "}
              <Link href="/specialties/chai/" className="link-underline text-[var(--color-text)]">karak chai</Link>.
            </p>
            <p>
              Come in for a sit-down{" "}
              <Link href="/specialties/breakfast/" className="link-underline text-[var(--color-text)]">Iraqi breakfast</Link>, Kahi
              &amp; Qeimar, Baqila, Kubba and the signature Albaghdady Plate, or order baklava and kunafa
              trays for pickup, delivery and{" "}
              <Link href="/catering/" className="link-underline text-[var(--color-text)]">catering</Link> across Richardson, Plano,
              Garland and the wider DFW area. Every item on our menu is 100% halal and Zabihah-verified.
            </p>
          </div>
        </div>
      </section>

      <FAQSection
        faqs={MENU_FAQS}
        eyebrow="Menu Questions"
        title="Frequently Asked Questions About Our Menu"
      />
    </>
  );
}
