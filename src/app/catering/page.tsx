import type { Metadata } from "next";
import Link from "next/link";
import { Check } from "lucide-react";
import { createMetadata } from "@/data/metadata";
import {
  breadcrumbSchema,
  cateringServiceSchema,
  faqSchema,
  webPageSchema,
} from "@/data/schema";
import SchemaInjector from "@/components/shared/SchemaInjector";
import BreadcrumbNav from "@/components/layout/BreadcrumbNav";
import CateringForm from "@/components/catering/CateringForm";
import FAQSection from "@/components/home/FAQSection";

export const metadata: Metadata = createMetadata({
  title: "Iraqi Catering Dallas, Halal Weddings, Eid | Al-Baghdady",
  description:
    "Authentic Iraqi dessert catering across DFW, baklava trays, kunafa platters, fatayer boxes, ladyfingers, samoon, and full sweets spreads for Eid, weddings, Ramadan iftars and corporate events. Halal certified. 48-hour notice for large events.",
  path: "/catering/",
  keywords: [
    "iraqi catering dallas",
    "halal catering richardson",
    "halal catering near me",
    "wedding catering dallas halal",
    "eid catering dallas",
    "ramadan iftar catering dallas",
    "office lunch catering richardson",
    "middle eastern catering dallas",
    "arabic catering dallas",
    "baklava catering dallas",
    "kunafa catering dallas",
    "dessert catering dallas",
    "arabic dessert tray dallas",
    "iraqi sweets tray catering",
  ],
});

const SERVICES = [
  "Eid celebrations, assorted baklava and kunafa trays, full sweets spreads",
  "Weddings & engagements, custom dessert tables, ladyfingers, burma, mabrouma",
  "Ramadan iftars, full Iraqi spread ready at sunset, samoon, fatayer, manakish",
  "Corporate lunches, breakfast catering, dessert boxes, halal-friendly options",
  "Family gatherings, baklava trays, kunafa platters, fatayer boxes (cheese, spinach, meat)",
  "Delivery across Richardson, Plano, Garland, Addison, Carrollton, Frisco, and greater DFW",
];

const STEPS = [
  {
    n: "1",
    title: "Submit your inquiry",
    body: "Fill out the form below or call us. Tell us your date, guest count and event type.",
  },
  {
    n: "2",
    title: "We design your menu",
    body: "Our team builds a halal Iraqi spread that fits your event, dietary needs and budget.",
  },
  {
    n: "3",
    title: "We deliver and set up",
    body: "Drop-off or full-service catering with warming trays, serving ware and our team on site.",
  },
];

// Catering FAQs, FAQPage schema + featured snippets.
const CATERING_FAQS = [
  {
    question: "How far in advance should I place a catering order?",
    answer:
      "As early as you can. For sweets trays and dessert boxes we ask for at least 48 hours' notice; for large weddings or corporate events, a week or more helps us plan. Smaller last-minute orders are sometimes possible, just call and ask.",
  },
  {
    question: "Do you cater savory food, or only sweets?",
    answer:
      "Both. Alongside our baklava, kunafa and ladyfinger trays, we cater savory [fatayer](/specialties/fatayer/) and [manakish](/specialties/manakish/), fresh [samoon](/specialties/bread/), samosas, and urns of [karak chai](/specialties/chai/), a full Iraqi spread.",
  },
  {
    question: "Can you accommodate dietary needs like vegetarian or nut-free?",
    answer:
      "Yes, we have vegetarian options (spinach and cheese fatayer, cheese manakish, samoon) and can flag nut-free items. Tell us your needs when you inquire and we'll build the spread around them. Everything is 100% halal and Zabihah-verified.",
  },
];

export default function CateringPage() {
  return (
    <>
      <SchemaInjector
        schema={[
          breadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Catering", url: "/catering/" },
          ]),
          cateringServiceSchema(),
          webPageSchema({
            url: "/catering/",
            name: "Iraqi Catering Dallas, Halal Weddings, Eid | Al-Baghdady",
            description:
              "Authentic Iraqi dessert and savory catering across DFW, baklava trays, kunafa platters, fatayer boxes, manakish, ladyfingers, samoon and full Iraqi sweets spreads for Eid, weddings, Ramadan iftars and corporate events. Halal certified.",
            primaryImage: "/Images/gallery/sweets-platter-lamps.webp",
          }),
          faqSchema(CATERING_FAQS),
        ]}
      />
      <BreadcrumbNav
        items={[
          { name: "Home", url: "/" },
          { name: "Catering", url: "/catering/" },
        ]}
      />

      <section className="container-pad py-10 md:py-16 max-w-3xl">
        <div className="eyebrow">Catering</div>
        <h1 className="mb-6">Iraqi Dessert Catering in Dallas, Authentic Kunafa, Baklava Trays and More</h1>
        <p className="text-lg text-[var(--color-text-muted)] mb-5 leading-relaxed">
          Sweets, savories, and trays that make the event. For over a decade, Albaghdady has catered Middle Eastern desserts and Iraqi savories all across Richardson, Texas, Eid celebrations, weddings, engagement parties, Ramadan iftars, corporate lunches, and family gatherings of every size. If it&apos;s worth celebrating, it&apos;s worth doing right.
        </p>
        <p className="text-lg text-[var(--color-text-muted)] leading-relaxed">
          Our catering menu spans the full range of what we bake fresh in-house: assorted baklava trays, kunafa platters, ladyfingers, burma, fatayer (cheese, spinach, meat), manakish, samoon, and full Iraqi sweets spreads with mabrouma, awama, and the rest of our family menu. Everything is made the day of your event. Nothing is frozen, nothing is pre-packed, nothing tastes like it sat on a shelf.
        </p>
      </section>

      <section className="container-pad pb-12">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="mb-6">Iraqi Sweets &amp; Savories We Cater</h2>
            <ul className="space-y-3">
              {SERVICES.map((s) => (
                <li key={s} className="flex items-start gap-3">
                  <Check size={20} className="text-[var(--color-primary)] shrink-0 mt-0.5" />
                  <span className="text-[var(--color-text)]">{s}</span>
                </li>
              ))}
            </ul>

            <h2 className="!mt-12 !mb-6">How Our Iraqi Catering Works</h2>
            <div className="space-y-5">
              {STEPS.map((step) => (
                <div key={step.n} className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-[var(--color-primary)] text-white flex items-center justify-center font-bold shrink-0">
                    {step.n}
                  </div>
                  <div>
                    <div className="font-semibold mb-1" style={{ fontFamily: "var(--font-display)" }}>
                      {step.title}
                    </div>
                    <p className="text-sm text-[var(--color-text-muted)]">{step.body}</p>
                  </div>
                </div>
              ))}
            </div>

            <p className="mt-8 text-sm italic text-[var(--color-text-muted)]">
              Catering minimums apply. Please order at least 48 hours in advance for large events.
            </p>
          </div>

          <div>
            <CateringForm />
          </div>
        </div>
      </section>

      {/* Topical SEO content + internal links for the catering page. */}
      <section className="container-pad pb-16 max-w-3xl">
        <div className="eyebrow">Catering Across DFW</div>
        <h2 className="mb-5">Halal Iraqi &amp; Middle Eastern Catering for Every Occasion</h2>
        <div className="space-y-4 text-[var(--color-text-muted)] leading-relaxed">
          <p>
            From intimate family gatherings to weddings of several hundred guests, Al-Baghdady caters
            authentic Iraqi and Middle Eastern food across Richardson, Plano, Garland, Allen, Frisco,
            Carrollton and the wider Dallas–Fort Worth area. Our most-requested trays are assorted{" "}
            <Link href="/specialties/baklava/" className="link-underline text-[var(--color-text)]">baklava</Link>, hot{" "}
            <Link href="/specialties/kunafa/" className="link-underline text-[var(--color-text)]">kunafa</Link>, {" "}
            <Link href="/specialties/burma/" className="link-underline text-[var(--color-text)]">burma</Link> and{" "}
            <Link href="/specialties/lady-fingers/" className="link-underline text-[var(--color-text)]">ladyfingers</Link>, but we
            build the full spread to fit your event.
          </p>
          <p>
            Planning an Eid celebration, Ramadan iftar or engagement party? Pair a sweets tray with savory{" "}
            <Link href="/specialties/fatayer/" className="link-underline text-[var(--color-text)]">fatayer</Link> and{" "}
            <Link href="/specialties/manakish/" className="link-underline text-[var(--color-text)]">manakish</Link>, fresh{" "}
            <Link href="/specialties/bread/" className="link-underline text-[var(--color-text)]">samoon</Link>, and urns of cardamom{" "}
            <Link href="/specialties/chai/" className="link-underline text-[var(--color-text)]">karak chai</Link>. Browse the full{" "}
            <Link href="/menu/" className="link-underline text-[var(--color-text)]">menu</Link> for ideas, then send your date and
            guest count above, everything is baked the day of your event and is 100% halal and Zabihah-verified.
          </p>
          <p>
            We deliver and set up catering across the metroplex, including{" "}
            <Link href="/near/mckinney-tx/" className="link-underline text-[var(--color-text)]">McKinney</Link>, {" "}
            <Link href="/near/irving-tx/" className="link-underline text-[var(--color-text)]">Irving</Link> and{" "}
            <Link href="/near/addison-tx/" className="link-underline text-[var(--color-text)]">Addison</Link>. See all the{" "}
            <Link href="/near/" className="link-underline text-[var(--color-text)]">DFW areas we serve</Link>.
          </p>
        </div>
      </section>

      <FAQSection
        faqs={CATERING_FAQS}
        eyebrow="Catering Questions"
        title="Frequently Asked Questions About Catering"
      />
    </>
  );
}
