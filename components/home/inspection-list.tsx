"use client";

import { useState } from "react";

const items = [
  {
    title: "Mechanical assessment",
    detail:
      "Engine, transmission, brakes, steering, suspension, cooling system, and drivetrain.",
  },
  { title: "Electrical diagnostic scan" },
  { title: "Body and paint check" },
  { title: "Service history review" },
  { title: "Road test and sign-off" },
  { title: "Full written inspection report" },
];

export function InspectionList() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <div className="inspection-accordion">
      {items.map((item, index) => {
        const isOpen = index === openIndex;
        return (
          <div
            key={item.title}
            className={`inspection-item ${index < items.length - 1 ? "border-b" : ""}`}
          >
            <button
              type="button"
              aria-expanded={isOpen}
              aria-controls={`inspection-desc-${index}`}
              onClick={() => setOpenIndex(isOpen ? -1 : index)}
              className="flex w-full items-start gap-4 py-4 text-left"
            >
              <span className="inspection-number">{String(index + 1).padStart(2, "0")}</span>
              <div className="min-w-0">
                <p className={`inspection-title ${isOpen ? "text-accent" : "text-black"}`}>
                  {item.title}
                </p>
                {item.detail && (
                  <p
                    id={`inspection-desc-${index}`}
                    className={`inspection-desc ${isOpen ? "block" : "hidden"}`}
                  >
                    {item.detail}
                  </p>
                )}
              </div>

              <span className={`ml-auto shrink-0 transition-transform ${isOpen ? "rotate-180" : ""}`}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            </button>
          </div>
        );
      })}
    </div>
  );
}
