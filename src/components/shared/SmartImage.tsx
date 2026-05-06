"use client";

import { useEffect, useRef, useState } from "react";

type SmartImageProps = {
  src: string;
  alt: string;
  priority?: boolean;
  className?: string;
  style?: React.CSSProperties;
  sizes?: string;
  imgClassName?: string;
};

export default function SmartImage({
  src,
  alt,
  priority = false,
  className = "",
  style,
  sizes = "100vw",
  imgClassName = "",
}: SmartImageProps) {
  const [loaded, setLoaded] = useState(false);
  const ref = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (el && el.complete && el.naturalWidth > 0) setLoaded(true);
  }, []);

  return (
    <div
      className={`relative overflow-hidden ${className}`}
      style={style}
      role="img"
      aria-label={alt}
    >
      <div
        aria-hidden="true"
        className={`absolute inset-0 skeleton-shimmer transition-opacity duration-500 ${
          loaded ? "opacity-0" : "opacity-100"
        }`}
      />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        ref={ref}
        src={src}
        alt={alt}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        fetchPriority={priority ? "high" : "auto"}
        sizes={sizes}
        onLoad={() => setLoaded(true)}
        onError={() => setLoaded(true)}
        className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-700 ${
          loaded ? "opacity-100" : "opacity-0"
        } ${imgClassName}`}
      />
    </div>
  );
}
