import Link from "next/link";
import { ChevronRight } from "lucide-react";
import SchemaInjector from "../shared/SchemaInjector";
import { breadcrumbSchema } from "@/data/schema";

export type BreadcrumbItem = { name: string; url: string };

type Props = { items: BreadcrumbItem[] };

export default function BreadcrumbNav({ items }: Props) {
  return (
    <>
      <nav aria-label="Breadcrumb" className="container-pad pt-8 pb-2">
        <ol className="flex flex-wrap items-center gap-1.5 text-xs text-[var(--color-text-muted)]">
          {items.map((item, i) => (
            <li key={item.url} className="flex items-center gap-1.5">
              {i < items.length - 1 ? (
                <Link href={item.url} className="hover:text-[var(--color-text)] transition-colors">
                  {item.name}
                </Link>
              ) : (
                <span aria-current="page" className="text-[var(--color-text)] font-medium">
                  {item.name}
                </span>
              )}
              {i < items.length - 1 && <ChevronRight size={12} aria-hidden="true" className="opacity-50" />}
            </li>
          ))}
        </ol>
      </nav>
      <SchemaInjector schema={breadcrumbSchema(items)} />
    </>
  );
}
