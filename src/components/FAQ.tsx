import React, { useState } from "react";
import { TranslationDict } from "../types";
import { ChevronDown, MessageCircleQuestion } from "lucide-react";

interface FAQProps {
  lang: "ar" | "en";
  t: TranslationDict;
}

export const FAQ: React.FC<FAQProps> = ({ lang, t }) => {
  const [openId, setOpenId] = useState<number | null>(1);

  const toggleAccordion = (id: number) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      className="py-24 bg-white relative overflow-hidden"
      dir={lang === "ar" ? "rtl" : "ltr"}
      id="faq-section"
    >
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#28D7E503_1px,transparent_1px)] [background-size:20px_20px]" />
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-brand-cyan/5 rounded-full blur-3xl" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10" id="faq-container">
        
        {/* Section Header */}
        <div className="text-center mb-16" id="faq-header">
          <span
            className="text-brand-blue uppercase font-bold tracking-widest text-xs px-3 py-1 bg-brand-blue/5 rounded-full w-fit mb-3 inline-block"
            id="faq-tag"
          >
            {lang === "ar" ? "حقائق واستفسارات" : "FAQ Helpdesk"}
          </span>
          <h2
            className="text-3xl sm:text-4xl font-extrabold text-[#222222] tracking-tight"
            id="faq-main-heading"
          >
            {t.faqTitle}
          </h2>
          <p
            className="mt-4 text-base text-brand-dark/70 font-light"
            id="faq-supporting"
          >
            {t.faqSubtitle}
          </p>
        </div>

        {/* FAQ Accordions Stack */}
        <div className="space-y-4" id="faq-accordion-stack">
          {t.faqs.map((faq) => {
            const isOpen = faq.id === openId;

            return (
              <div
                key={faq.id}
                className={`rounded-2xl border transition-all duration-300 bg-white ${
                  isOpen
                    ? "border-brand-blue/30 shadow-md ring-1 ring-brand-blue/5"
                    : "border-brand-dark/5 hover:border-brand-dark/15 shadow-sm"
                }`}
                id={`faq-item-${faq.id}`}
              >
                
                {/* Accordion Trigger Button Button */}
                <button
                  onClick={() => toggleAccordion(faq.id)}
                  className="w-full px-6 py-5 flex items-center justify-between text-right font-bold transition-colors duration-200 focus:outline-none"
                  type="button"
                  id={`faq-trigger-${faq.id}`}
                >
                  <div className={`flex items-center ${lang === "ar" ? "space-x-reverse" : ""} space-x-3`}>
                    <MessageCircleQuestion className={`h-5 w-5 shrink-0 ${isOpen ? "text-brand-blue" : "text-brand-dark/55"}`} />
                    <span className={`text-sm sm:text-base text-brand-dark leading-tight ${isOpen ? "text-brand-blue" : ""}`}>
                      {faq.question}
                    </span>
                  </div>

                  {/* Icon rotator */}
                  <ChevronDown
                    className={`h-4.5 w-4.5 text-brand-dark/40 transition-transform duration-300 shrink-0 ${
                      isOpen ? "rotate-180 text-brand-blue" : ""
                    } ${lang === "ar" ? "mr-4" : "ml-4"}`}
                  />
                </button>

                {/* Collapsible Answer */}
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? "max-h-[300px] border-t border-brand-dark/5 opacity-100" : "max-h-0 opacity-0"
                  }`}
                  id={`faq-answer-collapse-${faq.id}`}
                >
                  <div className="px-6 py-5 bg-brand-light">
                    <p className="text-xs sm:text-sm text-brand-dark/80 leading-relaxed font-light">
                      {faq.answer}
                    </p>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
