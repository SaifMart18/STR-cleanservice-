import React, { useEffect, useState } from "react";
import { TranslationDict } from "../types";
import { Sparkles, Calendar, Heart, FileCheck2, ArrowUpRight } from "lucide-react";

interface HeroProps {
  lang: "ar" | "en";
  t: TranslationDict;
  onRequestQuote: () => void;
  onContactUs: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  lang,
  t,
  onRequestQuote,
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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Text Left Column */}
          <div
            className={`lg:col-span-7 flex flex-col justify-center ${
              lang === "ar" ? "text-right" : "text-left"
            }`}
            id="hero-left-col"
          >
            {/* Sparkle Experience micro-badge */}
            <div
              className={`inline-flex items-center space-x-2 bg-brand-cyan/25 border border-brand-cyan/30 px-4 py-1.5 rounded-full text-brand-cyan text-sm font-semibold mb-6 w-fit ${
                lang === "ar" ? "ml-auto" : "mr-auto"
              }`}
              id="hero-micro-badge"
            >
              <Sparkles className="h-4 w-4 text-brand-cyan animate-pulse" />
              <span className={lang === "ar" ? "mr-1.5" : "ml-1.5"}>
                {lang === "ar" ? "أكثر من 30 عاماً من الخبرة السويسرية والوطنية" : "Over 30 Years of Premium Trustworthy Experience"}
              </span>
            </div>

            {/* Giant Visual Headings */}
            <h1
              className="text-4xl sm:text-5xl xl:text-6xl font-extrabold tracking-tight text-white leading-tight"
              id="hero-main-title"
            >
              <span className="block text-brand-cyan font-inter font-black mb-1">{t.heroTitleCompany}</span>
              <span className="block font-cairo font-extrabold text-2xl sm:text-4xl xl:text-5xl mt-2 leading-snug">
                {t.heroTitleSub}
              </span>
            </h1>

            {/* Supporting Copy */}
            <p
              className="mt-6 text-base sm:text-lg text-white/80 max-w-2xl leading-relaxed font-light"
              id="hero-supporting-text"
            >
              {t.heroSubHeading}
            </p>

            {/* Action Buttons Frame */}
            <div
              className="mt-8 flex flex-wrap gap-4"
              id="hero-action-buttons-wrap"
            >
              
              {/* Primary - Quote */}
              <button
                onClick={onRequestQuote}
                className="bg-brand-cyan hover:bg-brand-cyan/90 text-brand-dark font-extrabold px-8 py-4 rounded-xl shadow-lg shadow-brand-cyan/20 hover:shadow-brand-cyan/30 transition-all duration-300 transform scale-100 hover:scale-[1.03] select-none text-sm sm:text-base flex items-center space-x-2 group cursor-pointer"
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

          {/* Luxury Floating Card Column */}
          <div className="lg:col-span-5 flex justify-center py-4" id="hero-right-col">
            <div
              className="w-full max-w-sm rounded-3xl p-6 relative overflow-hidden shadow-2xl border border-white/10"
              style={{
                background: "linear-gradient(135deg, rgba(23, 37, 84, 0.45) 0%, rgba(13, 78, 166, 0.45) 100%)",
                backdropFilter: "blur(16px)",
                WebkitBackdropFilter: "blur(16px)"
              }}
              id="hero-badge-card"
            >
              <div className="absolute top-0 right-0 p-8 w-24 h-24 bg-brand-cyan/10 blur-2xl rounded-full" />
              <div className="absolute bottom-0 left-0 p-8 w-24 h-24 bg-brand-blue/20 blur-2xl rounded-full" />

              {/* Header inside card */}
              <div className="text-center pb-4 mb-4 border-b border-white/15" id="hero-badge-card-top">
                <span className="text-brand-cyan text-xs font-bold tracking-widest uppercase block" style={{ fontFamily: "'Inter', sans-serif" }}>
                  STR CLEANSERVICE
                </span>
                <span className="text-white font-extrabold text-sm block mt-1">
                  {lang === "ar" ? "نظافة تفوق التوقعات" : "Cleanliness Redefined"}
                </span>
              </div>

              {/* Features bullets inside card */}
              <div className="space-y-4" id="hero-badge-card-bullets">
                <div className="flex items-center space-x-3" id="badge-card-bullet-1">
                  <div className="h-8 w-8 bg-brand-cyan/20 text-brand-cyan flex items-center justify-center rounded-lg">
                    <Calendar className="h-4.5 w-4.5" />
                  </div>
                  <div className={lang === "ar" ? "pr-3 text-right" : "pl-3 text-left"}>
                    <h4 className="text-white text-xs font-bold">{lang === "ar" ? "تأسست عام 1996" : "Established since 1996"}</h4>
                    <span className="text-white/60 text-[10px]">{lang === "ar" ? "خبرة تاريخية ممتدة" : "Decades of verified services"}</span>
                  </div>
                </div>

                <div className="flex items-center space-x-3" id="badge-card-bullet-2">
                  <div className="h-8 w-8 bg-brand-cyan/20 text-brand-cyan flex items-center justify-center rounded-lg">
                    <Heart className="h-4.5 w-4.5" />
                  </div>
                  <div className={lang === "ar" ? "pr-3 text-right" : "pl-3 text-left"}>
                    <h4 className="text-white text-xs font-bold">{lang === "ar" ? "صديقة للبيئة والصحة" : "Odorless & Bio-safe"}</h4>
                    <span className="text-white/60 text-[10px]">{lang === "ar" ? "مواد سويسرية معقمة" : "100% Kid & Pet Safe"}</span>
                  </div>
                </div>

                <div className="flex items-center space-x-3" id="badge-card-bullet-3">
                  <div className="h-8 w-8 bg-brand-cyan/20 text-brand-cyan flex items-center justify-center rounded-lg">
                    <FileCheck2 className="h-4.5 w-4.5" />
                  </div>
                  <div className={lang === "ar" ? "pr-3 text-right" : "pl-3 text-left"}>
                    <h4 className="text-white text-xs font-bold">{lang === "ar" ? "عقد خدمة مضمون" : "Service Assurance contract"}</h4>
                    <span className="text-white/60 text-[10px]">{lang === "ar" ? "إعادة التنظيف فوراً مجاناً" : "Free re-clean guarantee"}</span>
                  </div>
                </div>
              </div>

              {/* Tag bottom */}
              <div className="mt-5 pt-4 border-t border-white/10 text-center text-white/50 text-[10px]" id="hero-badge-card-tag">
                {lang === "ar" ? "• نسعد بخدمتكم في عموم أربيل ونواحيها •" : "• Serving all neighborhoods of Erbil 24/7 •"}
              </div>

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
