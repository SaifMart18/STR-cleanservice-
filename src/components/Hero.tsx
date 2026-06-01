import React, { useEffect, useState } from "react";
import { TranslationDict } from "../types";
import { Sparkles, Calendar, Heart, FileCheck2, ArrowUpRight } from "lucide-react";

interface HeroProps {
  lang: "ar" | "en";
  t: TranslationDict;
  onViewServices: () => void;
  onContactUs: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  lang,
  t,
  onViewServices,
  onContactUs,
}) => {
  // Stats auto-incrementing simulation trigger
  const [experienceVal, setExperienceVal] = useState(1);
  const [projectsVal, setProjectsVal] = useState(10);
  const [clientsVal, setClientsVal] = useState(5);

  useEffect(() => {
    // Experience Count
    const expTimer = setInterval(() => {
      setExperienceVal((prev) => {
        if (prev >= 30) {
          clearInterval(expTimer);
          return 30;
        }
        return prev + 1;
      });
    }, 45);

    // Projects Count
    const projTimer = setInterval(() => {
      setProjectsVal((prev) => {
        if (prev >= 300) {
          clearInterval(projTimer);
          return 300;
        }
        return prev + 10;
      });
    }, 25);

    // Clients Count
    const clientTimer = setInterval(() => {
      setClientsVal((prev) => {
        if (prev >= 100) {
          clearInterval(clientTimer);
          return 100;
        }
        return prev + 3;
      });
    }, 30);

    return () => {
      clearInterval(expTimer);
      clearInterval(projTimer);
      clearInterval(clientTimer);
    };
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen pt-24 pb-16 flex items-center justify-center overflow-hidden"
      dir={lang === "ar" ? "rtl" : "ltr"}
    >
      {/* Spectacular Hero Background Unsplash - Luxury interior with soft light */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1920&q=80"
          alt="STR Cleanservice Erbil Clean Space"
          className="w-full h-full object-cover object-center scale-105"
          referrerPolicy="no-referrer"
          id="hero-bg-img"
        />
        {/* Dynamic Dark Gradient Overlays for High Luxury Feel */}
        <div className="absolute inset-0 bg-gradient-to-b from-brand-blue/95 via-brand-dark/90 to-brand-dark" id="hero-bg-gradient-b" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-brand-light to-transparent" id="hero-bg-gradient-t" />
      </div>

      {/* Hero Core Content Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full mt-8" id="hero-core-content">
        <div className="text-center flex flex-col items-center justify-center max-w-4xl mx-auto" id="hero-main-layout">
          
          {/* Sparkle Experience micro-badge */}
          <div
            className="inline-flex items-center space-x-2 bg-brand-cyan/25 border border-brand-cyan/30 px-5 py-2 rounded-full text-brand-cyan text-xs sm:text-sm font-semibold mb-8 backdrop-blur-sm"
            id="hero-micro-badge"
          >
            <Sparkles className="h-4 w-4 text-brand-cyan animate-pulse shrink-0" />
            <span className={lang === "ar" ? "mr-2" : "ml-2"}>
              {lang === "ar" ? "أكثر من 30 عاماً من الخبرة السويسرية والوطنية" : "Over 30 Years of Premium Trustworthy Experience"}
            </span>
          </div>

          {/* Giant Visual Headings */}
          <h1
            className="text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight text-white leading-tight text-center"
            id="hero-main-title"
          >
            <span className="block text-brand-cyan font-inter font-black mb-2 sm:mb-3">{t.heroTitleCompany}</span>
            <span className="block font-cairo font-extrabold text-2xl sm:text-4xl lg:text-5xl mt-3 leading-snug">
              {t.heroTitleSub}
            </span>
          </h1>

          {/* Supporting Copy */}
          <p
            className="mt-6 text-base sm:text-lg text-white/90 max-w-2xl leading-relaxed font-light text-center"
            id="hero-supporting-text"
          >
            {t.heroSubHeading}
          </p>

          {/* Action Buttons Frame */}
          <div
            className="mt-8 flex flex-wrap justify-center gap-4"
            id="hero-action-buttons-wrap"
          >
            {/* Primary - Services */}
            <button
              onClick={onViewServices}
              className="bg-brand-cyan hover:bg-brand-cyan/90 text-brand-dark font-extrabold px-8 py-4 rounded-xl shadow-lg shadow-brand-cyan/20 hover:shadow-brand-cyan/30 transition-all duration-300 transform scale-100 hover:scale-[1.03] select-none text-sm sm:text-base flex items-center space-x-2 gap-1 group cursor-pointer"
              type="button"
              id="hero-quote-action-btn"
            >
              <span>{t.heroBtnQuote}</span>
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>

            {/* Secondary - Contact */}
            <button
              onClick={onContactUs}
              className="bg-white/10 hover:bg-white/15 text-white font-bold px-8 py-4 rounded-xl border border-white/20 transition-all duration-300 scale-100 hover:scale-[1.03] select-none text-sm sm:text-base cursor-pointer"
              type="button"
              id="hero-contact-action-btn"
            >
              {t.heroBtnContact}
            </button>
          </div>

        </div>

        {/* Repositioned trust badges in an elegant horizontal row below the main headings */}
        <div
          className="mt-16 flex justify-center max-w-sm mx-auto"
          id="hero-badge-row"
        >
          {/* Badge 2 */}
          <div
            className="flex items-center p-4 bg-brand-dark/40 backdrop-blur-md rounded-2xl border border-white/10 w-full"
            id="badge-card-bullet-2"
          >
            <div className="h-9 w-9 bg-brand-cyan/20 text-brand-cyan flex items-center justify-center rounded-xl shrink-0">
              <Heart className="h-5 w-5" />
            </div>
            <div className={lang === "ar" ? "pr-3 text-right" : "pl-3 text-left"}>
              <h4 className="text-white text-xs font-bold">{lang === "ar" ? "صديقة للبيئة والصحة" : "Odorless & Bio-safe"}</h4>
              <span className="text-white/60 text-[10px] block mt-0.5">{lang === "ar" ? "مواد سويسرية معقمة" : "100% Kid & Pet Safe"}</span>
            </div>
          </div>
        </div>

        {/* Dynamic Statistics Grid */}
        <div
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6"
          id="hero-statistics-grid"
        >
          {/* Stat 1 */}
          <div
            className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 flex flex-col items-center justify-center text-center transition-all duration-300 hover:bg-white/10 group"
            id="stat-box-1"
          >
            <span
              className="text-4xl sm:text-5xl font-black text-brand-cyan tracking-tight transition-transform duration-300 group-hover:scale-105"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              +{experienceVal}
            </span>
            <span className="mt-2 text-white/80 text-sm font-semibold whitespace-nowrap">
              {t.statExperienceLbl}
            </span>
          </div>

          {/* Stat 2 */}
          <div
            className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 flex flex-col items-center justify-center text-center transition-all duration-300 hover:bg-white/10 group"
            id="stat-box-2"
          >
            <span
              className="text-4xl sm:text-5xl font-black text-brand-cyan tracking-tight transition-transform duration-300 group-hover:scale-105"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              +{projectsVal}
            </span>
            <span className="mt-2 text-white/80 text-sm font-semibold whitespace-nowrap">
              {t.statProjectsLbl}
            </span>
          </div>

          {/* Stat 3 */}
          <div
            className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 flex flex-col items-center justify-center text-center transition-all duration-300 hover:bg-white/10 group"
            id="stat-box-3"
          >
            <span
              className="text-4xl sm:text-5xl font-black text-brand-cyan tracking-tight transition-transform duration-300 group-hover:scale-105"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              +{clientsVal}
            </span>
            <span className="mt-2 text-white/80 text-sm font-semibold whitespace-nowrap">
              {t.statClientsLbl}
            </span>
          </div>

          {/* Stat 4 */}
          <div
            className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 flex flex-col items-center justify-center text-center transition-all duration-300 hover:bg-white/10 group"
            id="stat-box-4"
          >
            <span
              className="text-4xl sm:text-5xl font-black text-brand-cyan tracking-tight transition-transform duration-300 group-hover:scale-105"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              {t.statSatisfactionVal}
            </span>
            <span className="mt-2 text-white/80 text-sm font-semibold whitespace-nowrap">
              {t.statSatisfactionLbl}
            </span>
          </div>
        </div>

      </div>

    </section>
  );
};
