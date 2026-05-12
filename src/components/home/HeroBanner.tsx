import { Star, Sunrise } from "lucide-react";
import ThemeBtn from "../shared/ThemeBtn";
import SmartImage from "../shared/SmartImage";
import QRHover from "../shared/QRHover";
import { RESTAURANT } from "@/data/restaurant";

function fmtTime(t: string) {
  const [h, m] = t.split(":").map(Number);
  const period = h >= 12 ? "PM" : "AM";
  const hour = h % 12 || 12;
  return m ? `${hour}:${String(m).padStart(2, "0")} ${period}` : `${hour} ${period}`;
}

const BREAKFAST_RANGE = `${fmtTime(RESTAURANT.breakfastHours.open)} – ${fmtTime(RESTAURANT.breakfastHours.close)}`;

const DAY_NAMES = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"] as const;
const TODAY_HOURS = RESTAURANT.hours.find((h) => h.day === DAY_NAMES[new Date().getDay()]) ?? RESTAURANT.hours[0];
const TODAY_RANGE = `${fmtTime(TODAY_HOURS.open)} – ${fmtTime(TODAY_HOURS.close)}`;

export default function HeroBanner() {
  return (
    <section className="relative bg-white">
      <div className="container-pad relative grid gap-12 lg:grid-cols-2 lg:gap-20 items-center pt-12 pb-16 md:pt-24 md:pb-28">
        <div className="animate-fade-up">
          <div className="eyebrow">Iraqi Bakery &amp; Café · Halal · Family-Owned Since 2009</div>
          <h1 className="mb-7">
            The most{" "}
            <em
              className="text-[var(--color-primary)]"
              style={{ fontFamily: "var(--font-accent)", fontStyle: "italic", fontWeight: 400, letterSpacing: "-0.02em" }}
            >
              Authentic
            </em>{" "}
            Baklava<br />in All of Richardson, Texas
          </h1>
          <p className="text-lg text-[var(--color-text-muted)] max-w-xl mb-10 leading-relaxed">
            Located in the heart of Richardson, TX, Albaghdady has been a family-run Iraqi bakery and cafe since 2009 — serving authentic Iraqi sweets, like our authentic baklava, our family has perfected since 1919.
          </p>

          <div className="flex flex-wrap gap-3 mb-10">
            <ThemeBtn href="/menu/" variant="primary">View Menu</ThemeBtn>
            <QRHover value={RESTAURANT.orderOnline}>
              <ThemeBtn href={RESTAURANT.orderOnline} external variant="secondary">
                Order Online
              </ThemeBtn>
            </QRHover>
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

          <div className="mt-6 inline-flex items-center gap-2 text-sm">
            <Sunrise size={16} className="text-[var(--color-gold-dark)]" aria-hidden="true" />
            <span className="font-semibold text-[var(--color-text)]">{RESTAURANT.breakfastHours.note}</span>
            <span className="text-[var(--color-text-muted)]">· {BREAKFAST_RANGE}</span>
          </div>
        </div>

        <div className="relative animate-fade-in">
          <SmartImage
            src="/Images/hero.webp"
            alt="Iraqi mixed grill platter at Al-Baghdady Restaurant"
            priority
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="aspect-[4/5] rounded-[28px] shadow-[0_30px_80px_-30px_rgba(26,20,16,0.35)]"
          />

          <div className="hidden md:block absolute -bottom-8 -left-8 bg-white border border-[var(--color-border)] rounded-2xl px-5 py-4 shadow-[var(--shadow-lift)]">
            <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--color-text-muted)] mb-1">
              Open Today
            </div>
            <div className="font-semibold text-[var(--color-text)] text-[1.05rem]">
              {TODAY_RANGE}
            </div>
          </div>

          <div className="hidden md:flex absolute -top-6 -right-6 bg-[var(--color-primary)] text-white rounded-full w-28 h-28 items-center justify-center text-center px-4 shadow-[var(--shadow-lift)]">
            <div>
              <div className="text-[10px] uppercase tracking-[0.2em] opacity-90">Since</div>
              <div
                className="text-sm mt-1 italic"
                style={{ fontFamily: "var(--font-accent)", fontWeight: 500 }}
              >
                1919
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
