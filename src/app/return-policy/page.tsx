import type { Metadata } from "next";
import { createMetadata } from "@/data/metadata";
import { breadcrumbSchema, webPageSchema } from "@/data/schema";
import SchemaInjector from "@/components/shared/SchemaInjector";
import BreadcrumbNav from "@/components/layout/BreadcrumbNav";
import { RESTAURANT } from "@/data/restaurant";

export const metadata: Metadata = createMetadata({
  title: "Return & Refund Policy | Al-Baghdady",
  description:
    "Our return, refund, and cancellation policy. Food orders, catering deposits, and how to reach us if something isn't right.",
  path: "/return-policy/",
  keywords: ["return policy", "refund policy", "catering cancellation"],
});

export default function ReturnPolicyPage() {
  return (
    <>
      <SchemaInjector
        schema={[
          breadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Return Policy", url: "/return-policy/" },
          ]),
          webPageSchema({
            url: "/return-policy/",
            name: "Return & Refund Policy | Al-Baghdady",
            description:
              "Our return, refund, and cancellation policy. Food orders, catering deposits, and how to reach us if something isn't right.",
            primaryImage: "/Images/hero.webp",
          }),
        ]}
      />
      <BreadcrumbNav
        items={[
          { name: "Home", url: "/" },
          { name: "Return Policy", url: "/return-policy/" },
        ]}
      />

      <section className="container-pad py-12 md:py-20 max-w-3xl">
        <div className="eyebrow">Policies</div>
        <h1 className="mb-6">Return &amp; Refund Policy</h1>
        <p className="text-[var(--color-text-muted)] mb-10">
          Last updated: May 2026
        </p>

        <div className="prose-content space-y-6 text-[var(--color-text)] leading-relaxed">
          <h2>Food &amp; bakery orders</h2>
          <p>
            All of our baked goods and prepared food are made fresh daily and are
            perishable. For food-safety reasons we cannot accept returns or
            exchanges on food items once they have left our store.
          </p>
          <p>
            If your order is incorrect, damaged in transit, or doesn&apos;t meet our
            quality standards, please contact us within{" "}
            <strong>24 hours of pickup or delivery</strong> and we will make it
            right — typically with a refund or a replacement, at our discretion.
          </p>

          <h2>Online orders &amp; third-party delivery</h2>
          <p>
            Orders placed through third-party platforms (such as our online
            ordering partner) are subject to that platform&apos;s refund policy
            for delivery-related issues (late delivery, missing items in transit,
            courier complaints). For issues with the food itself, contact us
            directly using the information below and we will work with you.
          </p>

          <h2>Catering orders &amp; deposits</h2>
          <p>
            Catering orders require advance notice and may involve a deposit.
            Our cancellation windows:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>72+ hours before the event:</strong> full refund of any
              deposit paid.
            </li>
            <li>
              <strong>24–72 hours before the event:</strong> 50% of any deposit
              is refundable; the remainder covers ingredients already
              committed to your order.
            </li>
            <li>
              <strong>Less than 24 hours before the event:</strong> deposits are
              non-refundable, as your order has already entered preparation.
            </li>
          </ul>
          <p>
            For changes to a catering order (head count, menu adjustments,
            timing), reach out as early as possible and we will accommodate
            where we can.
          </p>

          <h2>How to reach us</h2>
          <p>
            The fastest way to resolve any concern is to call or email us
            directly:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Phone:{" "}
              <a
                href={`tel:${RESTAURANT.phoneRaw}`}
                className="text-[var(--color-primary)] hover:underline"
              >
                {RESTAURANT.phone}
              </a>
            </li>
            <li>
              Email:{" "}
              <a
                href={`mailto:${RESTAURANT.email}`}
                className="text-[var(--color-primary)] hover:underline"
              >
                {RESTAURANT.email}
              </a>
            </li>
            <li>
              In person: {RESTAURANT.address.full} (during business hours)
            </li>
          </ul>

          <p className="text-sm text-[var(--color-text-muted)] mt-8">
            This policy applies to direct purchases from {RESTAURANT.legalName}
            . Orders fulfilled through third-party marketplaces may be
            additionally governed by that marketplace&apos;s terms.
          </p>
        </div>
      </section>
    </>
  );
}