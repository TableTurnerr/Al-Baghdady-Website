import type { Metadata } from "next";
import { createMetadata } from "@/data/metadata";
import { breadcrumbSchema, faqSchema, webPageSchema } from "@/data/schema";
import { FAQS } from "@/data/faqs";
import { RESTAURANT } from "@/data/restaurant";
import SchemaInjector from "@/components/shared/SchemaInjector";
import BreadcrumbNav from "@/components/layout/BreadcrumbNav";
import FAQSection from "@/components/home/FAQSection";

export const metadata: Metadata = createMetadata({
  title: "FAQ — Iraqi Bakery, Breakfast & Catering | Al-Baghdady",
  description:
    "Answers about Al-Baghdady — halal sourcing, hours, Iraqi breakfast, baklava and knafeh orders, catering, pickup and delivery across Richardson and Dallas.",
  path: "/faq/",
  keywords: [
    "al-baghdady faq",
    "iraqi bakery richardson faq",
    "halal bakery questions",
    "iraqi breakfast hours richardson",
    "baklava catering questions",
    "knafeh order richardson",
  ],
});

export default function FaqPage() {
  return (
    <>
      <SchemaInjector
        schema={[
          breadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "FAQ", url: "/faq/" },
          ]),
          faqSchema(FAQS),
          webPageSchema({
            url: "/faq/",
            name: "FAQ — Iraqi Bakery, Breakfast & Catering | Al-Baghdady",
            description:
              "Answers about Al-Baghdady — halal sourcing, hours, Iraqi breakfast, baklava and knafeh orders, catering, pickup and delivery across Richardson and Dallas.",
            primaryImage: "/Images/hero.webp",
          }),
        ]}
      />
      <BreadcrumbNav
        items={[
          { name: "Home", url: "/" },
          { name: "FAQ", url: "/faq/" },
        ]}
      />

      <section className="container-pad py-12 md:py-16 max-w-3xl">
        <div className="eyebrow">Got Questions?</div>
        <h1 className="mb-5">Frequently Asked Questions</h1>
        <p className="text-lg text-[var(--color-text-muted)] leading-relaxed">
          Everything you might want to know about {RESTAURANT.name} — our halal Iraqi bakery and
          breakfast café in {RESTAURANT.address.city}, {RESTAURANT.address.state}. Hours, catering,
          delivery, and the sweets and breakfast we&apos;re known for. Can&apos;t find your answer?{" "}
          <a href={`tel:${RESTAURANT.phoneRaw}`} className="faq-link">Call us at {RESTAURANT.phone}</a>.
        </p>
      </section>

      <FAQSection faqs={FAQS} title="All your questions, answered." eyebrow="Full FAQ" />
    </>
  );
}
