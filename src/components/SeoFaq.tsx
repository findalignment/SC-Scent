'use client';

import { useState } from 'react';

interface FaqItem {
  q: string;
  a: string;
}

interface SeoFaqProps {
  faqs: FaqItem[];
}

export default function SeoFaq({ faqs }: SeoFaqProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-16 bg-[#0a1628]">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif font-light text-white mb-12 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-gradient-to-b from-[#1a2f4a] to-[#0d1b2a] border border-amber-900/20 overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full text-left p-6 flex justify-between items-center hover:bg-white/5 transition-colors"
                >
                  <span className="text-lg font-medium text-white pr-8">{faq.q}</span>
                  <span className="text-amber-400 text-2xl flex-shrink-0">
                    {openIndex === index ? '−' : '+'}
                  </span>
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-6">
                    <p className="text-gray-300 font-light leading-relaxed">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
