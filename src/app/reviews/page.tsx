import type { Metadata } from "next";
import { Star, Quote } from "lucide-react";
import { createMetadata } from "@/data/metadata";
import { breadcrumbSchema } from "@/data/schema";
import SchemaInjector from "@/components/shared/SchemaInjector";
import BreadcrumbNav from "@/components/layout/BreadcrumbNav";
import ThemeBtn from "@/components/shared/ThemeBtn";
import { REVIEWS, PRESS_QUOTES } from "@/data/reviews";
import { RESTAURANT } from "@/data/restaurant";

export const metadata: Metadata = createMetadata({
  title: "Reviews — 1,892 Five-Star Reviews | Al-Baghdady Iraqi Restaurant",
  description:
    "Al-Baghdady has 1,892 reviews at 4.4 stars on Google — the most-reviewed Iraqi restaurant in DFW. Read what diners are saying about our kabobs, kanafa, samoon and catering.",
  path: "/reviews/",
  keywords: ["al-baghdady reviews", "best iraqi food dallas reviews", "iraqi restaurant richardson reviews"],
});

export default function ReviewsPage() {
  return (
    <>
      <SchemaInjector
        schema={breadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Reviews", url: "/reviews/" },
        ])}
      />
      <BreadcrumbNav
        items={[
          { name: "Home", url: "/" },
          { name: "Reviews", url: "/reviews/" },
        ]}
      />

      <section className="container-pad py-10 md:py-16">
        <div className="max-w-3xl">
          <div className="eyebrow">Customer Reviews</div>
          <h1 className="mb-6">{RESTAURANT.reviewCount.toLocaleString()} Reviews. {RESTAURANT.ratingValue} Stars.</h1>
          <p className="text-lg text-[var(--color-text-muted)]">
            Al-Baghdady is the most-reviewed Iraqi restaurant in DFW. Here&apos;s what our guests are
            saying — across Google, Yelp, Zabihah and Tripadvisor.
          </p>
          <div className="flex items-center gap-3 mt-6">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star key={s} size={22} className="fill-[var(--color-gold)] text-[var(--color-gold)]" />
              ))}
            </div>
            <span className="font-bold text-2xl">{RESTAURANT.ratingValue}</span>
            <span className="text-[var(--color-text-muted)]">on Google</span>
          </div>
        </div>
      </section>

      <section className="container-pad pb-16 md:pb-24">
        <h2 className="mb-8">Featured Quotes</h2>
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {PRESS_QUOTES.map((p) => (
            <article key={p.quote} className="card p-7">
              <Quote size={28} className="text-[var(--color-primary)] mb-3" />
              <blockquote
                className="text-xl mb-3 italic leading-snug"
                style={{ fontFamily: "var(--font-accent)", fontWeight: 400 }}
              >
                &ldquo;{p.quote}&rdquo;
              </blockquote>
              <cite className="text-xs not-italic text-[var(--color-text-muted)] uppercase tracking-wider">
                {p.source}
              </cite>
            </article>
          ))}
        </div>

        <h2 className="mb-8">Recent Reviews</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {REVIEWS.map((r) => (
            <article key={r.author} className="card p-6">
              <div className="flex mb-3">
                {Array.from({ length: r.rating }).map((_, i) => (
                  <Star key={i} size={16} className="fill-[var(--color-gold)] text-[var(--color-gold)]" />
                ))}
              </div>
              <blockquote className="mb-4 italic">&ldquo;{r.text}&rdquo;</blockquote>
              <div className="flex items-center justify-between">
                <cite className="not-italic font-semibold text-sm">— {r.author}</cite>
                <span className="text-xs text-[var(--color-text-muted)]">{r.source}</span>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <ThemeBtn href={RESTAURANT.socials.googleBusinessProfile} external variant="primary">
            Read All Reviews on Google
          </ThemeBtn>
        </div>
      </section>
    </>
  );
}
