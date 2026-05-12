import type { Metadata } from "next";
import { Star, Leaf, Sunrise } from "lucide-react";
import { createMetadata } from "@/data/metadata";
import { MENU } from "@/data/menu";
import { menuSchema, breadcrumbSchema } from "@/data/schema";
import SchemaInjector from "@/components/shared/SchemaInjector";
import BreadcrumbNav from "@/components/layout/BreadcrumbNav";
import ThemeBtn from "@/components/shared/ThemeBtn";
import QRHover from "@/components/shared/QRHover";
import CategoryNav from "@/components/menu/CategoryNav";
import { RESTAURANT } from "@/data/restaurant";

function fmtTime(t: string) {
  const [h, m] = t.split(":").map(Number);
  const period = h >= 12 ? "PM" : "AM";
  const hour = h % 12 || 12;
  return m ? `${hour}:${String(m).padStart(2, "0")} ${period}` : `${hour} ${period}`;
}

const BREAKFAST_RANGE = `${fmtTime(RESTAURANT.breakfastHours.open)} – ${fmtTime(RESTAURANT.breakfastHours.close)}`;

export const metadata: Metadata = createMetadata({
  title: "Menu — Iraqi Kabobs, Shawarma, Bakery & More | Al-Baghdady",
  description:
    "Browse the full Al-Baghdady menu — char-grilled kabob platters, shawarma, traditional Iraqi specialties, mezze, fresh samoon bread and Iraqi sweets. Halal certified, Richardson TX.",
  path: "/menu/",
  keywords: [
    "al baghdady menu",
    "iraqi food menu dallas",
    "halal kabob menu richardson",
    "iraqi restaurant menu",
    "samoon bread",
    "kanafa menu",
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
              <article
                key={item.name}
                className="rounded-2xl border border-[var(--color-border)] bg-white p-6 transition-all duration-500 hover:border-transparent hover:shadow-[var(--shadow-lift)] hover:-translate-y-0.5"
              >
                <h3 className="text-lg mb-3" style={{ fontFamily: "var(--font-display)", fontWeight: 500 }}>
                  {item.name}
                </h3>
                <p className="text-sm text-[var(--color-text-muted)] leading-relaxed mb-2">
                  {item.description}
                </p>
                <div className="text-sm font-semibold text-[var(--color-text)] mb-4">{item.price}</div>
                <div className="flex items-center gap-1.5 flex-wrap">
                  {item.popular && (
                    <span className="inline-flex items-center gap-1 text-[10px] font-semibold px-2.5 py-1 rounded-full bg-[var(--color-gold)]/15 text-[var(--color-gold-dark)] uppercase tracking-wider">
                      <Star size={10} className="fill-current" /> Popular
                    </span>
                  )}
                  {item.vegetarian && (
                    <span className="inline-flex items-center gap-1 text-[10px] font-semibold px-2.5 py-1 rounded-full bg-green-50 text-green-800 uppercase tracking-wider">
                      <Leaf size={10} /> Vegetarian
                    </span>
                  )}
                  <span className="text-[10px] font-semibold text-[var(--color-text-muted)] uppercase tracking-wider px-2.5 py-1">
                    Halal
                  </span>
                </div>
              </article>
            ))}
          </div>
        </section>
      ))}
    </>
  );
}
