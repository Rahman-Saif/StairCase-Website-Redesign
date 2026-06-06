"use client";

import { useState } from "react";

const faqs = [
  "What services do you provide?",
  "How long does a project take?",
  "Do you work outside Dhaka?",
  "Can I request a custom quotation?",
  "Do you provide post-installation support?",
];

export default function FAQ() {
  const [active, setActive] = useState<number | null>(0);

  return (
    <section className="py-28">
      <div className="max-w-4xl mx-auto px-6">

        <h2 className="text-center text-5xl font-light mb-16">
          Frequently Asked Questions
        </h2>

        {faqs.map((item, i) => (
          <div
            key={i}
            className="border-b border-black/10"
          >
            <button
              onClick={() => setActive(active === i ? null : i)}
              className="w-full flex justify-between py-7 text-left"
            >
              <span>{item}</span>
              <span>{active === i ? "−" : "+"}</span>
            </button>

            {active === i && (
              <div className="pb-6 text-neutral-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}