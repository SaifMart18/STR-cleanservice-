import React from "react";
import { TranslationDict } from "../types";
import {
  Award,
  Users,
  Settings,
  CircleDollarSign,
  Clock,
  Leaf,
  CheckCircle,
  Headphones,
  Zap,
  ThumbsUp
} from "lucide-react";

interface WhyChooseUsProps {
  lang: "ar" | "en";
  t: TranslationDict;
}

export const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ lang, t }) => {
  // Connect icons to 10 why-choose-us elements
  const getFeatureIcon = (id: number) => {
    switch (id) {
      case 1:
        return <Award className="h-6 w-6 text-brand-blue" />;
      case 2:
        return <Users className="h-6 w-6 text-brand-blue" />;
      case 3:
        return <Settings className="h-6 w-6 text-brand-blue" />;
      case 4:
        return <CircleDollarSign className="h-6 w-6 text-brand-blue" />;
      case 5:
        return <Clock className="h-6 w-6 text-brand-blue" />;
      case 6:
        return <Leaf className="h-6 w-6 text-brand-blue" />;
      case 7:
        return <CheckCircle className="h-6 w-6 text-brand-blue" />;
      case 8:
        return <Headphones className="h-6 w-6 text-brand-blue" />;
      case 9:
        return <Zap className="h-6 w-6 text-brand-blue" />;
      case 10:
        return <ThumbsUp className="h-6 w-6 text-brand-blue" />;
      default:
        return <CheckCircle className="h-6 w-6 text-brand-blue" />;
    }
  };

  return (
    <section
      id="why-us"
      className="py-24 bg-white relative overflow-hidden"
      dir={lang === "ar" ? "rtl" : "ltr"}
    >
      {/* Visual background lines / vector blur */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#0D4EA605_1px,transparent_1px)] [background-size:16px_16px]" />
      <div className="absolute top-10 right-10 w-96 h-96 bg-brand-blue/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" id="why-us-container">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16" id="why-us-header">
          <span
            className="text-brand-blue uppercase font-bold tracking-widest text-xs px-3 py-1 bg-brand-blue/5 rounded-full w-fit mb-3 inline-block"
            id="why-us-tag"
          >
            {lang === "ar" ? "لماذا نتميز؟" : "Our Advantages"}
          </span>
          <h2
            className="text-3xl sm:text-4xl font-extrabold text-brand-dark tracking-tight"
            id="why-us-main-heading"
          >
            {t.whyTitle}
          </h2>
          <p
            className="mt-4 text-base text-brand-dark/70 font-light"
            id="why-us-supporting"
          >
            {t.whySubtitle}
          </p>
        </div>

        {/* Bento Grid layout representing 10 features */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6"
          id="why-us-features-grid"
        >
          {t.whyFeatures.map((feat) => (
            <div
              key={feat.id}
              className="bg-brand-light hover:bg-white rounded-2xl p-6 border border-brand-dark/5 hover:border-brand-blue/20 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              id={`why-card-${feat.id}`}
            >
              <div>
                {/* Outlined Icon frame with brand color */}
                <div className="h-12 w-12 rounded-xl bg-white border border-brand-dark/5 flex items-center justify-center mb-5 group-hover:bg-brand-blue/5 group-hover:border-brand-blue/30 transition-all duration-300 shadow-sm">
                  {getFeatureIcon(feat.id)}
                </div>

                {/* Title */}
                <h3 className="text-sm font-extrabold text-brand-dark tracking-tight group-hover:text-brand-blue transition-colors">
                  {feat.title}
                </h3>

                {/* Description lines */}
                <p className="mt-3 text-xs text-brand-dark/65 leading-relaxed font-light">
                  {feat.description}
                </p>
              </div>

              {/* Verified check indicator badge */}
              <div className="mt-4 flex items-center justify-end" id={`why-card-check-${feat.id}`}>
                <span className="text-[9px] uppercase font-bold tracking-widest text-brand-cyan bg-brand-cyan/10 px-2 py-0.5 rounded-full opacity-60 group-hover:opacity-100 transition-opacity">
                  {lang === "ar" ? "مؤكد" : "Verified"}
                </span>
              </div>

            </div>
          ))}
        </div>

        {/* Dynamic Service Promise Block */}
        <div
          className="mt-16 bg-gradient-to-r from-brand-blue to-blue-900 rounded-3xl p-8 text-white relative overflow-hidden shadow-2xl"
          id="why-us-promise-banner"
        >
          {/* Decorative shine filter */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-brand-cyan/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
          <div className="absolute inset-0 bg-brand-dark/20" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center" id="promise-banner-content">
            <div className="lg:col-span-8 text-center lg:text-right" dir={lang === "ar" ? "rtl" : "ltr"}>
              <h3 className="text-xl sm:text-2xl font-extrabold">
                {lang === "ar"
                  ? "هل تود تجربة خدماتنا المعقمة والاستمتاع ببيئة نظيفة آمنة؟"
                  : "Ready to obtain pristine cleanliness and safe breathable spaces?"}
              </h3>
              <p className="mt-2 text-sm text-white/80 font-light">
                {lang === "ar"
                  ? "احصل على استشارة وتخطيط معاينة مجاني مع مشرف جودة معتمد في أربيل دون أي التزام."
                  : "Schedule a fully complimentary layout assessment with our quality inspector at no obligation today."}
              </p>
            </div>
            
            <div className={`lg:col-span-4 flex justify-center ${lang === "ar" ? "lg:justify-start" : "lg:justify-end"}`} id="promise-banner-action">
              <a
                href="#contact"
                className="bg-brand-cyan hover:bg-brand-cyan/95 text-brand-dark font-extrabold px-8 py-3.5 rounded-xl shadow-lg shadow-brand-cyan/20 transition-all duration-300 transform scale-100 hover:scale-[1.03] select-none text-sm inline-block"
                id="promise-cta-btn"
              >
                {lang === "ar" ? "احجز معاينة مجانية" : "Schedule My Assessment"}
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
