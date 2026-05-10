"use client";

import Image from "next/image";
import { useState } from "react";

import type { CarImage } from "@/types/car";

export function CarGallery({ images, title }: { images: CarImage[]; title: string }) {
  const [active, setActive] = useState(0);
  const fallback = images.length ? images : [{ url: "/placeholder-car.svg", alt: title }];
  const selected = fallback[Math.min(active, fallback.length - 1)]!;

  return (
    <div className="space-y-3">
      <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-white/10 bg-[#111822]">
        <Image
          src={selected.url}
          alt={selected.alt || title}
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 60vw"
        />
      </div>
      <div className="grid grid-cols-4 gap-2">
        {fallback.slice(0, 8).map((image, index) => (
          <button
            key={`${image.url}-${index}`}
            onClick={() => setActive(index)}
            type="button"
            className={`relative aspect-[4/3] overflow-hidden rounded-lg border ${
              index === active ? "border-[var(--accent)]" : "border-white/10"
            }`}
          >
            <Image
              src={image.url}
              alt={image.alt || `${title} view ${index + 1}`}
              fill
              className="object-cover"
              sizes="20vw"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
