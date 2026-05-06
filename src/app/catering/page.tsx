import type { Metadata } from "next";
import { Check } from "lucide-react";
import { createMetadata } from "@/data/metadata";
import { breadcrumbSchema } from "@/data/schema";
import SchemaInjector from "@/components/shared/SchemaInjector";
import BreadcrumbNav from "@/components/layout/BreadcrumbNav";
import CateringForm from "@/components/catering/CateringForm";

export const metadata: Metadata = createMetadata({
  title: "Iraqi Catering Dallas — Halal Weddings, Corporate, Eid | Al-Baghdady",
  description:
    "Halal Iraqi catering across Dallas-Fort Worth. Weddings, corporate lunches, Ramadan iftars, Eid parties. Mixed grill, kabob, biryani, kanafa trays. 20-500+ guests.",
  path: "/catering/",
  keywords: [
    "iraqi catering dallas",
    "halal catering richardson",
    "wedding catering dallas halal",
    "office lunch catering richardson",
    "middle eastern catering dallas",
    "arabic dessert tray dallas",
  ],
});

const SERVICES = [
  "Wedding banquets — kabob, biryani, dolma, custom dessert trays",
  "Corporate lunches — boxed meals, buffet setups, healthy halal options",
  "Ramadan iftars — full traditional spread, ready at sunset",
  "Eid celebrations — sweets trays, full menu catering",
  "Baby showers, graduations & private events",
  "Drop-off and full-service options available",
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
        schema={breadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Catering", url: "/catering/" },
        ])}
      />
      <BreadcrumbNav
        items={[
          { name: "Home", url: "/" },
          { name: "Catering", url: "/catering/" },
        ]}
      />

      <section className="container-pad py-10 md:py-16 max-w-3xl">
        <div className="eyebrow">Catering</div>
        <h1 className="mb-6">Halal Iraqi Catering, From 20 to 500+ Guests</h1>
        <p className="text-lg text-[var(--color-text-muted)]">
          Al-Baghdady caters weddings, corporate lunches, Ramadan iftars, Eid celebrations and
          private events across Dallas-Fort Worth. Our menu is fully halal and Zabihah-verified —
          mixed grill platters, biryani, dolma, mezze spreads and bakery dessert trays.
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
          </div>

          <div>
            <CateringForm />
          </div>
        </div>
      </section>
    </>
  );
}
