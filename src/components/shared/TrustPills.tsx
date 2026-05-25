import { Check } from "lucide-react";

type Props = {
  items: string[];
  className?: string;
};

/** Small reusable trust/feature chips (e.g. Halal · Made to order · Fresh daily). */
export default function TrustPills({ items, className = "" }: Props) {
  if (items.length === 0) return null;
  return (
    <div className={`flex flex-wrap gap-2 ${className}`}>
      {items.map((item) => (
        <span
          key={item}
          className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full bg-[var(--color-primary)]/8 text-[var(--color-primary)]"
        >
          <Check size={12} className="shrink-0" />
          {item}
        </span>
      ))}
    </div>
  );
}
