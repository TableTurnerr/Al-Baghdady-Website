type Props = {
  /** Place or address to center the map on. */
  query: string;
  title?: string;
  className?: string;
};

/**
 * Lightweight Google Maps embed. Uses the keyless `output=embed` endpoint so it
 * works in the static export, and lazy-loads to keep it off the critical path.
 */
export default function LocalMap({ query, title = "Map", className = "" }: Props) {
  const src = `https://maps.google.com/maps?q=${encodeURIComponent(query)}&z=13&output=embed`;
  return (
    <div
      className={`overflow-hidden rounded-[var(--radius-section)] border border-[var(--color-border)] ${className}`}
    >
      <iframe
        title={title}
        src={src}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="block w-full h-full"
        style={{ border: 0, minHeight: 300 }}
      />
    </div>
  );
}
