import type { Metadata } from "next";
import { Check } from "lucide-react";
import { createMetadata } from "@/data/metadata";
import {
  breadcrumbSchema,
  cateringServiceSchema,
  webPageSchema,
} from "@/data/schema";
import SchemaInjector from "@/components/shared/SchemaInjector";
import BreadcrumbNav from "@/components/layout/BreadcrumbNav";
import CateringForm from "@/components/catering/CateringForm";

export const metadata: Metadata = createMetadata({
  title: "Iraqi Catering Dallas — Halal Weddings, Eid | Al-Baghdady",
  description:
    "Authentic Iraqi dessert catering across DFW — baklava trays, kunafa platters, fatayer boxes, ladyfingers, samoon, and full sweets spreads for Eid, weddings, Ramadan iftars and corporate events. Halal certified. 48-hour notice for large events.",
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
  "Eid celebrations — assorted baklava and kunafa trays, full sweets spreads",
  "Weddings & engagements — custom dessert tables, ladyfingers, burma, mabrouma",
  "Ramadan iftars — full Iraqi spread ready at sunset, samoon, fatayer, manakish",
  "Corporate lunches — breakfast catering, dessert boxes, halal-friendly options",
  "Family gatherings — baklava trays, kunafa platters, fatayer boxes (cheese, spinach, meat)",
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
            name: "Iraqi Catering Dallas — Halal Weddings, Eid | Al-Baghdady",
            description:
              "Authentic Iraqi dessert and savory catering across DFW — baklava trays, kunafa platters, fatayer boxes, manakish, ladyfingers, samoon and full Iraqi sweets spreads for Eid, weddings, Ramadan iftars and corporate events. Halal certified.",
            primaryImage: "/Images/gallery/sweets-platter-lamps.webp",
          }),
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
        <h1 className="mb-6">Iraqi Dessert Catering in Dallas — Authentic Kunafa, Baklava Trays and More</h1>
        <p className="text-lg text-[var(--color-text-muted)] mb-5 leading-relaxed">
          Sweets, savories, and trays that make the event. For over a decade, Albaghdady has catered Middle Eastern desserts and Iraqi savories all across Richardson, Texas — Eid celebrations, weddings, engagement parties, Ramadan iftars, corporate lunches, and family gatherings of every size. If it&apos;s worth celebrating, it&apos;s worth doing right.
        </p>
        <p className="text-lg text-[var(--color-text-muted)] leading-relaxed">
          Our catering menu spans the full range of what we bake fresh in-house: assorted baklava trays, kunafa platters, ladyfingers, burma, fatayer (cheese, spinach, meat), manakish, samoon, and full Iraqi sweets spreads with mabrouma, awama, and the rest of our family menu. Everything is made the day of your event. Nothing is frozen, nothing is pre-packed, nothing tastes like it sat on a shelf.
        </p>
      </section>

      <section className="container-pad pb-12">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="mb-6">What We Cater</h2>
            <ul className="space-y-3">
              {SERVICES.map((s) => (
                <li key={s} className="flex items-start gap-3">
                  <Check size={20} className="text-[var(--color-primary)] shrink-0 mt-0.5" />
                  <span className="text-[var(--color-text)]">{s}</span>
                </li>
              ))}
            </ul>

            <h2 className="!mt-12 !mb-6">How It Works</h2>
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
    </>
  );
}
