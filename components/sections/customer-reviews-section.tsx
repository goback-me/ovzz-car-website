"use client";

import { useState } from "react";
import { ReviewCard } from "@/components/home/review-card";

const REVIEWS = [
  {
    name: "Maria Konstantinou",
    role: "Verified buyer",
    avatar: "M",
    quote:
      "I've bought three used cars over the years and every time I've driven off the lot wondering what I'd missed. Not this time. Knowing that their own mechanics had gone through the car before I saw it completely changed how I felt about the purchase. Three months in — not a single issue.",
  },
  {
    name: "Daniel Foster",
    role: "Bought a 2022 VW Tiguan",
    avatar: "D",
    quote:
      "I've bought three used cars over the years and every time I've driven off the lot wondering what I'd missed. Not this time. Knowing that their own mechanics had gone through the car before I saw it completely changed how I felt about the purchase. Three months in — not a single issue.",
  },
  {
    name: "Sofia Papadakis",
    role: "Bought a 2020 BMW 3 Series",
    avatar: "S",
    quote:
      "I was a first-time buyer and genuinely terrified of making a $25,000 mistake. The team walked me through the full inspection report and explained everything in plain language. No pressure, no rush, no upsells. I felt like I was buying from someone honest.",
  },
  {
    name: "Elena Mikhailova",
    role: "Bought a 2020 BMW 3 Series",
    avatar: "E",
    quote:
      "Got the car serviced at Car-One last month. The same mechanic who inspected it before I bought it is the one who services it now. That continuity is worth a lot — they know the car's full history. It's not something you get anywhere else.",
  },
  {
    name: "Mark Leon",
    role: "Bought a 2021 Audi A4",
    avatar: "M",
    quote:
      "I've bought three used cars over the years and every time I've driven off the lot wondering what I'd missed. Not this time. Knowing that their own mechanics had gone through the car before I saw it completely changed how I felt about the purchase. Three months in — not a single issue.",
  },
  {
    name: "Anita Sharma",
    role: "Verified buyer",
    avatar: "A",
    quote:
      "I've bought three used cars over the years and every time I've driven off the lot wondering what I'd missed. Not this time. Knowing that their own mechanics had gone through the car before I saw it completely changed how I felt about the purchase. Three months in — not a single issue.",
  },
];

export function CustomerReviewsSection() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const expandedReview = expandedIndex !== null ? REVIEWS[expandedIndex] : null;

  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6">
      <div className="overflow-hidden rounded-[28px] bg-[#0E1015] py-10 text-white">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between px-6 lg:px-10">
          <h2 className="text-3xl font-bold sm:text-4xl">Real buyers. Real stories.</h2>
          <button className="shrink-0 rounded-xl bg-white px-5 py-2.5 text-sm text-black transition hover:bg-white/90">
            Read all 84 reviews on Google
          </button>
        </div>

        <div className="mt-8 space-y-6 reviews-marquee-container">
          {/* Marquee track 1 - moves left */}
          <div className="marquee-track marquee-left">
            <div className="marquee-group">
              {REVIEWS.concat(REVIEWS).map((review, i) => (
                <div key={`left-${i}`} className="marquee-item min-w-[520px]">
                  <ReviewCard {...review} onReadMore={() => setExpandedIndex(REVIEWS.indexOf(review))} />
                </div>
              ))}
            </div>
          </div>

          {/* Marquee track 2 - moves right (reverse) */}
          <div className="marquee-track marquee-right">
            <div className="marquee-group">
              {REVIEWS.concat(REVIEWS).reverse().map((review, i) => (
                <div key={`right-${i}`} className="marquee-item min-w-[520px]">
                  <ReviewCard {...review} onReadMore={() => setExpandedIndex(REVIEWS.indexOf(review))} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Full review modal */}
      {expandedReview && (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4" onClick={() => setExpandedIndex(null)}>
          <div className="bg-[#1A1D24] rounded-2xl p-8 max-w-2xl w-full text-white" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center gap-4 mb-4">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[rgba(249,116,21,0.12)] text-lg font-bold text-[var(--accent)] border border-[rgba(255,255,255,0.03)]">
                {expandedReview.avatar}
              </div>
              <div>
                <p className="font-semibold text-white">{expandedReview.name}</p>
                <p className="text-sm text-white/50">{expandedReview.role}</p>
              </div>
              <div className="ml-auto text-sm text-[var(--accent)]">★★★★★</div>
            </div>
            <hr className="my-4 border-white/8" />
            <p className="text-base leading-7 text-white/70 mb-6">{expandedReview.quote}</p>
            <button
              onClick={() => setExpandedIndex(null)}
              className="bg-[var(--accent)] text-white px-6 py-2 rounded-lg font-semibold hover:bg-[var(--accent-strong)] transition"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}