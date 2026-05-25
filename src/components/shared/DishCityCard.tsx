import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SmartImage from "./SmartImage";

type Props = {
  href: string;
  title: string;
  subtitle?: string;
  /** Optional thumbnail path under /public/. */
  image?: string;
};

/** Compact linked card used in the matrix interlinking grids (dish × city). */
export default function DishCityCard({ href, title, subtitle, image }: Props) {
  return (
    <Link
      href={href}
      className="group flex items-center gap-3 rounded-2xl border border-[var(--color-border)] bg-white p-3 transition-all duration-300 hover:border-transparent hover:shadow-[var(--shadow-lift)] hover:-translate-y-0.5"
    >
      {image && (
        <SmartImage
          src={image}
          alt={title}
          sizes="56px"
          className="w-14 h-14 rounded-xl shrink-0"
        />
      )}
      <span className="min-w-0 flex-1">
        <span
          className="block text-sm font-semibold text-[var(--color-text)] truncate"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {title}
        </span>
        {subtitle && (
          <span className="block text-xs text-[var(--color-text-muted)] truncate">{subtitle}</span>
        )}
      </span>
      <ArrowRight
        size={16}
        className="shrink-0 text-[var(--color-text-muted)] group-hover:text-[var(--color-primary)] transition-colors"
      />
    </Link>
  );
}
