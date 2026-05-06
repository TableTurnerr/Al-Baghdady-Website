import { CheckCircle2, Wheat, Users, ChefHat } from "lucide-react";

const ITEMS = [
  { icon: CheckCircle2, label: "Zabihah Halal", sub: "Verified" },
  { icon: Wheat, label: "In-House Bakery", sub: "Daily fresh samoon" },
  { icon: ChefHat, label: "Authentic Iraqi", sub: "Traditional recipes" },
  { icon: Users, label: "Family Owned", sub: "Since 2012" },
];

export default function TrustBar() {
  return (
    <section className="container-pad py-14 md:py-20 border-t border-b border-[var(--color-border)]">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6">
        {ITEMS.map(({ icon: Icon, label, sub }) => (
          <div key={label} className="flex flex-col items-center text-center gap-3 group">
            <div className="w-12 h-12 rounded-full flex items-center justify-center text-[var(--color-text)] transition-transform duration-300 group-hover:scale-110">
              <Icon size={26} strokeWidth={1.5} aria-hidden="true" />
            </div>
            <div className="font-semibold text-[var(--color-text)]" style={{ fontFamily: "var(--font-display)", fontSize: "1.05rem" }}>
              {label}
            </div>
            <div className="text-[11px] text-[var(--color-text-muted)] uppercase tracking-[0.18em]">
              {sub}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
