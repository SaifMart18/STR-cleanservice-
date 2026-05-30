import React, { useState, useEffect } from "react";
import { TranslationDict } from "../types";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

interface TestimonialsProps {
  lang: "ar" | "en";
  t: TranslationDict;
}

export const Testimonials: React.FC<TestimonialsProps> = ({ lang, t }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-play slide loop
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % t.testimonialsList.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [t.testimonialsList.length]);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % t.testimonialsList.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + t.testimonialsList.length) % t.testimonialsList.length);
  };

  return (
    <section
      className="py-24 bg-brand-light relative overflow-hidden"
      dir={lang === "ar" ? "rtl" : "ltr"}
      id="testimonials-section"
    >
      <div className="absolute top-10 right-10 w-80 h-80 bg-brand-cyan/5 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-brand-blue/5 rounded-full blur-3xl" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10" id="testimonials-container">
        
        {/* Section Heading */}
        <div className="text-center mb-12" id="testimonials-header">
          <span
            className="text-brand-blue uppercase font-bold tracking-widest text-xs px-3 py-1 bg-brand-blue/5 rounded-full w-fit mb-3 inline-block"
            id="testimonials-tag"
          >
            {lang === "ar" ? "شهادات حية" : "Client Feedback"}
          </span>
          <h2
            className="text-3xl sm:text-4xl font-extrabold text-brand-dark tracking-tight"
            id="testimonials-main-heading"
          >
            {t.testiTitle}
          </h2>
          <p
            className="mt-4 text-base text-brand-dark/70 font-light"
            id="testimonials-supporting"
          >
            {t.testiSubtitle}
          </p>
        </div>

        {/* Carousel slide card Frame */}
        <div className="relative min-h-[300px] flex items-center justify-center mb-6" id="testimonials-swiper">
          
          {t.testimonialsList.map((testi, idx) => {
            const isActive = idx === activeIndex;
            return (
              <div
                key={testi.id}
                className={`absolute w-full transition-all duration-700 transform ${
                  isActive
                    ? "opacity-100 scale-100 pointer-events-auto"
                    : "opacity-0 scale-95 pointer-events-none translate-y-4"
                }`}
                id={`testimonial-slide-${testi.id}`}
              >
                <div
                  className="bg-white rounded-3xl p-8 sm:p-10 border border-brand-dark/5 shadow-xl relative overflow-hidden flex flex-col justify-between"
                  id={`testimonial-card-${testi.id}`}
                >
                  {/* Absolute Quote sign */}
                  <Quote className={`absolute top-6 text-brand-blue/5 h-24 w-24 shrink-0 ${
                    lang === "ar" ? "left-6" : "right-6"
                  }`} />

                  {/* Rating Stars list */}
                  <div className="flex items-center space-x-1 mb-6" style={{ direction: "ltr" }} id={`testimonial-rating-${testi.id}`}>
                    {[...Array(testi.rating)].map((_, i) => (
                      <Star key={i} className="h-5.5 w-5.5 fill-brand-cyan text-brand-cyan shrink-0" />
                    ))}
                  </div>

                  {/* Commentary text */}
                  <p className="text-base sm:text-lg text-brand-dark/85 italic leading-relaxed font-light mb-6 relative z-10">
                    "{testi.comment}"
                  </p>

                  {/* Client Bio line */}
                  <div className="flex items-center space-x-3 border-t border-brand-dark/5 pt-6" id={`testimonial-author-${testi.id}`}>
                    <div className="h-10 w-10 bg-brand-blue text-white font-extrabold flex items-center justify-center rounded-xl font-inter text-sm shadow-md shadow-brand-blue/15">
                      {testi.name[0]}
                    </div>
                    <div className={lang === "ar" ? "pr-3 text-right" : "pl-3 text-left"}>
                      <h4 className="text-sm font-bold text-brand-dark">{testi.name}</h4>
                      <span className="text-[11px] text-brand-dark/60 font-light mt-0.5 block">{testi.role}</span>
                    </div>
                  </div>

                </div>
              </div>
            );
          })}

        </div>

        {/* Carousel indicators & switch arrows */}
        <div className="flex items-center justify-between mt-4" id="testimonials-controls">
          {/* Dot Indicators */}
          <div className="flex items-center space-x-1.5" id="carousel-dots-list">
            {t.testimonialsList.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  idx === activeIndex ? "w-6 bg-brand-blue" : "w-2.5 bg-brand-dark/15 hover:bg-brand-dark/30"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
                type="button"
              />
            ))}
          </div>

          {/* Nav arrows */}
          <div className="flex items-center space-x-2" style={{ direction: "ltr" }} id="carousel-arrows">
            <button
              onClick={handlePrev}
              className="h-11 w-11 bg-white hover:bg-brand-blue hover:text-white text-brand-dark border border-brand-dark/10 flex items-center justify-center rounded-xl transition-all duration-300 shadow-sm"
              type="button"
              id="prev-slide-btn"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={handleNext}
              className="h-11 w-11 bg-white hover:bg-brand-blue hover:text-white text-brand-dark border border-brand-dark/10 flex items-center justify-center rounded-xl transition-all duration-300 shadow-sm"
              type="button"
              id="next-slide-btn"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
