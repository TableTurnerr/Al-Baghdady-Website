import type { Metadata } from "next";
import { createMetadata } from "@/data/metadata";
import { breadcrumbSchema, faqSchema } from "@/data/schema";
import SchemaInjector from "@/components/shared/SchemaInjector";
import BreadcrumbNav from "@/components/layout/BreadcrumbNav";
import FAQSection from "@/components/home/FAQSection";
import { FAQS } from "@/data/faqs";
import { RESTAURANT } from "@/data/restaurant";

export const metadata: Metadata = createMetadata({
  title: "FAQ — Halal, Catering, Bakery & More | Al-Baghdady Restaurant",
  description:
    "Frequently asked questions about Al-Baghdady Restaurant — halal certification, catering, bakery, hours, delivery, traditional Iraqi dishes and more.",
  path: "/faq/",
  keywords: [
    "al-baghdady faq",
    "iraqi restaurant questions",
    "is al-baghdady halal",
    "al-baghdady catering",
  ],
});

export default function FAQPage() {
  return (
    <>
      <SchemaInjector
        schema={[
          breadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "FAQ", url: "/faq/" },
          ]),
          faqSchema(FAQS),
        ]}
      />
      <BreadcrumbNav
        items={[
          { name: "Home", url: "/" },
          { name: "FAQ", url: "/faq/" },
        ]}
      />

      <section className="container-pad py-10 md:py-16 max-w-3xl">
        <div className="eyebrow">Help &amp; Info</div>
        <h1 className="mb-6">Frequently Asked Questions</h1>
        <p className="text-lg text-[var(--color-text-muted)]">
          Everything you might want to know about Al-Baghdady — halal certification, catering, the
          bakery, traditional Iraqi dishes, hours and more. Can&apos;t find your question? Call us at{" "}
          <a href={`tel:${RESTAURANT.phoneRaw}`} className="text-[var(--color-primary)] underline">
            {RESTAURANT.phone}
          </a>.
        </p>
      </section>

      <FAQSection faqs={FAQS} title="All Questions" eyebrow="Browse" />
    </>
  );
}
