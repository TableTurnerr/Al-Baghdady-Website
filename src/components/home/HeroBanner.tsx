import { Star } from "lucide-react";
import ThemeBtn from "../shared/ThemeBtn";
import { RESTAURANT } from "@/data/restaurant";

export default function HeroBanner() {
  return (
    <section className="relative bg-white">
      <div className="container-pad relative grid gap-12 lg:grid-cols-2 lg:gap-20 items-center pt-12 pb-16 md:pt-24 md:pb-28">
        <div className="animate-fade-up">
          <div className="eyebrow">Authentic Iraqi · Halal · Family-Owned</div>
          <h1 className="mb-7">
            The taste of{" "}
            <em
              className="text-[var(--color-primary)]"
              style={{ fontFamily: "var(--font-accent)", fontStyle: "italic", fontWeight: 400, letterSpacing: "-0.02em" }}
            >
              Baghdad
            </em>
            ,<br />right here in Dallas.
          </h1>
          <p className="text-lg text-[var(--color-text-muted)] max-w-xl mb-10 leading-relaxed">
            Char-grilled kabob platters, fresh-baked samoon, traditional masgoof and the
            best kanafa in DFW — from our family-owned kitchen and bakery in Richardson, TX.
          </p>

          <div className="flex flex-wrap gap-3 mb-10">
            <ThemeBtn href="/menu/" variant="primary">View Menu</ThemeBtn>
            <ThemeBtn href={RESTAURANT.orderOnline} external variant="secondary">
              Order Online
            </ThemeBtn>
          </div>

          <div className="flex items-center gap-6 flex-wrap text-sm">
            <div className="flex items-center gap-2">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star
                    key={s}
                    size={16}
                    className="fill-[var(--color-gold)] text-[var(--color-gold)]"
                  />
                ))}
              </div>
              <span className="font-semibold">{RESTAURANT.ratingValue}</span>
              <span className="text-[var(--color-text-muted)]">
                · {RESTAURANT.reviewCount.toLocaleString()} reviews
              </span>
            </div>
            <div className="font-medium text-[var(--color-text-muted)]">
              ✓ Zabihah Verified Halal
            </div>
          </div>
        </div>

        <div className="relative animate-fade-in">
          <div
            className="aspect-[4/5] rounded-[28px] overflow-hidden bg-cover-center shadow-[0_30px_80px_-30px_rgba(26,20,16,0.35)]"
            style={{ backgroundImage: "url('/Images/hero.jpg')" }}
            role="img"
            aria-label="Iraqi mixed grill platter at Al-Baghdady Restaurant"
          />

          <div className="hidden md:block absolute -bottom-8 -left-8 bg-white border border-[var(--color-border)] rounded-2xl px-5 py-4 shadow-[var(--shadow-lift)]">
            <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--color-text-muted)] mb-1">
              Open Today
            </div>
            <div className="font-semibold text-[var(--color-text)] text-[1.05rem]">
              11 AM – 10 PM
            </div>
          </div>

          <div className="hidden md:flex absolute -top-6 -right-6 bg-[var(--color-primary)] text-white rounded-full w-28 h-28 items-center justify-center text-center px-4 shadow-[var(--shadow-lift)]">
            <div>
              <div className="text-[10px] uppercase tracking-[0.2em] opacity-90">Best Iraqi</div>
              <div
                className="text-sm mt-1 italic"
                style={{ fontFamily: "var(--font-accent)", fontWeight: 500 }}
              >
                in Dallas
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
