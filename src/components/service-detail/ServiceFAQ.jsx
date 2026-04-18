"use client";

import { useState } from "react";
export default function ServiceFAQ({ faqs = [] }) {
  const [openIndex, setOpenIndex] = useState(null);

  if (!faqs.length) return null;

  return (
    <section className="mt-32 max-w-4xl mx-auto">
      <h2 className="text-4xl font-bold text-primary text-center mb-16">
        Frequently Asked Questions
      </h2>

      <div className="space-y-4">
        {faqs.map((faq, i) => {
          const isOpen = openIndex === i;
          return (
            <div
              key={i}
              className="bg-base-100 rounded-lg overflow-hidden transition-all"
            >
              <button
                onClick={() => setOpenIndex(isOpen ? null : i)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-base-200 transition-colors"
                aria-expanded={isOpen}
              >
                <span className="font-bold text-primary text-lg">{faq.q}</span>
                <span
                  className={`material-symbols-outlined text-primary transition-transform duration-300 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                >
                  expand_more
                </span>
              </button>

              <div
                className={`px-6 overflow-hidden transition-all duration-300 ${
                  isOpen ? "max-h-96 pb-6 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-neutral leading-relaxed">{faq.a}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
