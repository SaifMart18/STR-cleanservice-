import React from "react";
import { TranslationDict } from "../types";
import { Award, ShieldCheck, Users, Milestone, Trash2 } from "lucide-react";
import { STRLogo } from "./STRLogo";

interface AboutProps {
  lang: "ar" | "en";
  t: TranslationDict;
}

export const About: React.FC<AboutProps> = ({ lang, t }) => {
  return (
    <section
      id="about"
      className="py-24 bg-white relative overflow-hidden"
      dir={lang === "ar" ? "rtl" : "ltr"}
    >
      {/* Decorative Backdrops */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-blue/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-cyan/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" id="about-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Images Column: Overlapping Luxury Layout */}
          <div className="lg:col-span-5 relative" id="about-image-col">
            <div className="relative mx-auto max-w-md lg:max-w-none" id="about-image-stack">
              {/* Primary Large Image */}
              <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-brand-light transform -rotate-2 hover:rotate-0 transition-transform duration-500 relative z-10">
                <img
                  src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=80"
                  alt="STR Cleanservice Premium House Cleaning"
                  className="w-full object-cover h-[450px]"
                  referrerPolicy="no-referrer"
                  id="about-img-primary"
                />
              </div>

              {/* Overlapping Small Badge Card */}
              <div
                className={`absolute bottom-6 bg-brand-blue text-white rounded-2xl p-6 shadow-xl z-20 max-w-[220px] transform ${
                  lang === "ar" ? "-left-6 rotate-3" : "-right-6 -rotate-3"
                } hover:rotate-0 transition-transform duration-300`}
                id="about-experience-badge"
              >
                <div className="flex items-center space-x-2" style={{ direction: "ltr" }}>
                  <Award className="h-8 w-8 text-brand-cyan shrink-0" />
                  <span className="text-3xl font-black text-brand-cyan">30+</span>
                </div>
                <p className="mt-2 text-xs font-bold leading-relaxed">
                  {lang === "ar"
                    ? "عاماً من التميز والنظافة الفائقة في عموم العراق"
                    : "Years of Verified Clean Excellence in Iraq"}
                </p>
              </div>
            </div>
          </div>

          {/* Text and Statistics Column */}
          <div
            className={`lg:col-span-7 flex flex-col justify-center ${
              lang === "ar" ? "text-right" : "text-left"
            }`}
            id="about-text-col"
          >
            {/* Section Tag */}
            <span
              className="text-brand-blue uppercase font-bold tracking-widest text-xs px-3 py-1 bg-brand-blue/5 rounded-full w-fit mb-4"
              id="about-title-tag"
            >
              {t.aboutTitle}
            </span>

            {/* Title */}
            <h2
              className="text-3xl sm:text-4xl font-extrabold text-brand-dark leading-tight mt-1"
              id="about-section-heading"
            >
              {t.aboutHeading}
            </h2>

            {/* Description lines */}
            <div className="mt-6 space-y-4 text-base text-brand-dark/80 leading-relaxed" id="about-paragraphs">
              <p className="font-semibold text-brand-blue text-lg" id="about-p1">
                {t.aboutP1}
              </p>
              <p id="about-p2">
                {t.aboutP2}
              </p>
              <p id="about-p3" className="font-light">
                {t.aboutP3}
              </p>
            </div>

            {/* Highlights Columns */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-brand-dark/5 pt-8" id="about-highlights-grid">
              
              {/* Highlight 1 - Safe materials */}
              <div
                className={`flex items-start ${lang === "ar" ? "space-x-reverse" : ""} space-x-3`}
                id="about-hl-1"
              >
                <div className="h-10 w-10 rounded-xl bg-brand-cyan/15 text-brand-blue flex items-center justify-center shrink-0">
                  <ShieldCheck className="h-5.5 w-5.5" />
                </div>
                <div>
                  <h4 className="text-brand-blue font-bold text-sm">
                    {t.aboutStatMaterials}
                  </h4>
                  <p className="text-[11px] text-brand-dark/60 mt-1">
                    {t.aboutStatMaterialsLbl}
                  </p>
                </div>
              </div>

              {/* Highlight 2 - Vetted Experts */}
              <div
                className={`flex items-start ${lang === "ar" ? "space-x-reverse" : ""} space-x-3`}
                id="about-hl-2"
              >
                <div className="h-10 w-10 rounded-xl bg-brand-cyan/15 text-brand-blue flex items-center justify-center shrink-0">
                  <Users className="h-5.5 w-5.5" />
                </div>
                <div>
                  <h4 className="text-brand-blue font-bold text-sm">
                    {t.aboutStatStaff}
                  </h4>
                  <p className="text-[11px] text-brand-dark/60 mt-1">
                    {t.aboutStatStaffLbl}
                  </p>
                </div>
              </div>

            </div>

            {/* Quality Statement Block */}
            <div
              className={`mt-8 p-4 rounded-2xl bg-brand-light border-l-4 border-brand-blue flex items-center ${
                lang === "ar" ? "space-x-reverse border-l-0 border-r-4" : ""
              } space-x-4`}
              id="about-quality-quote"
            >
              <span className="text-2xl" id="about-sparkle-emoji">✨</span>
              <p className="text-xs font-semibold text-brand-dark/85 leading-relaxed">
                {lang === "ar"
                  ? "نسعى لرفع مستوى الرفاهية والسلامة الصحية لجميع ساكني وقاصدي أربيل عبر بيئات خالية من البكتريا والغبار."
                  : "We strive to raise wellness and health safety across Erbil with environment-friendly anti-viral cleanliness protocols."}
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
