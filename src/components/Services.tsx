import React, { useState } from "react";
import { TranslationDict } from "../types";
import {
  Building2,
  Maximize2,
  Briefcase,
  Home,
  Hammer,
  Grid,
  ShieldAlert,
  UserCheck,
  Hospital,
  Plane,
  X,
  ArrowUpRight,
  Sparkles
} from "lucide-react";

interface ServicesProps {
  lang: "ar" | "en";
  t: TranslationDict;
  onRequestQuoteWithService: (serviceName: string) => void;
}

export const Services: React.FC<ServicesProps> = ({
  lang,
  t,
  onRequestQuoteWithService,
}) => {
  const [activeModalId, setActiveModalId] = useState<number | null>(null);

  // Match icon dynamically to service ids (1 to 10)
  const getServiceIcon = (id: number) => {
    switch (id) {
      case 1:
        return <Building2 className="h-7 w-7 text-brand-blue" />;
      case 2:
        return <Maximize2 className="h-7 w-7 text-brand-blue" />;
      case 3:
        return <Briefcase className="h-7 w-7 text-brand-blue" />;
      case 4:
        return <Home className="h-7 w-7 text-brand-blue" />;
      case 5:
        return <Hammer className="h-7 w-7 text-brand-blue" />;
      case 6:
        return <Grid className="h-7 w-7 text-brand-blue" />;
      case 7:
        return <Sparkles className="h-7 w-7 text-brand-blue" />;
      case 8:
        return <UserCheck className="h-7 w-7 text-brand-blue" />;
      case 9:
        return <Hospital className="h-7 w-7 text-brand-blue" />;
      case 10:
        return <Plane className="h-7 w-7 text-brand-blue" />;
      default:
        return <Sparkles className="h-7 w-7 text-brand-blue" />;
    }
  };

  const activeService = t.servicesList.find((s) => s.id === activeModalId);

  return (
    <section
      id="services"
      className="py-24 bg-brand-light relative overflow-hidden"
      dir={lang === "ar" ? "rtl" : "ltr"}
    >
      {/* Visual Accents */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-brand-cyan/5 rounded-full blur-3xl -translate-x-1/2" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-brand-blue/5 rounded-full blur-3xl translate-x-1/3" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" id="services-container">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16" id="services-header">
          <span
            className="text-brand-blue uppercase font-bold tracking-widest text-xs px-3 py-1 bg-brand-blue/5 rounded-full w-fit mb-3 inline-block"
            id="services-tag"
          >
            {lang === "ar" ? "خدمات النخبة" : "Our Service Suite"}
          </span>
          <h2
            className="text-3xl sm:text-4xl font-extrabold text-brand-dark tracking-tight"
            id="services-main-heading"
          >
            {t.servicesTitle}
          </h2>
          <p
            className="mt-4 text-base text-brand-dark/70 font-light"
            id="services-supporting"
          >
            {t.servicesSubtitle}
          </p>
        </div>

        {/* Services Master Grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6"
          id="services-grid"
        >
          {t.servicesList.map((service) => (
            <div
              key={service.id}
              onClick={() => setActiveModalId(service.id)}
              className="bg-white rounded-2xl p-6 border border-brand-dark/5 shadow-sm hover:shadow-xl transition-all duration-300 transform scale-100 hover:scale-[1.03] cursor-pointer group flex flex-col justify-between relative overflow-hidden"
              id={`service-card-${service.id}`}
            >
              {/* Dynamic Bottom Accent Line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-brand-blue transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center" />

              <div>
                {/* Icon Container */}
                <div className="h-14 w-14 rounded-2xl bg-brand-blue/5 flex items-center justify-center mb-6 group-hover:bg-brand-blue group-hover:text-white transition-all duration-300">
                  <div className="group-hover:filter group-hover:brightness-0 group-hover:invert transition-all duration-300">
                    {getServiceIcon(service.id)}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-base font-bold text-brand-dark leading-snug group-hover:text-brand-blue transition-colors duration-200">
                  {service.title}
                </h3>

                {/* Short Brief */}
                <p className="mt-3 text-xs text-brand-dark/65 leading-relaxed font-light line-clamp-3">
                  {service.description}
                </p>
              </div>

              {/* Action trigger label */}
              <div
                className={`mt-6 flex items-center text-xs font-bold text-brand-blue hover:text-brand-cyan transition-colors duration-200 ${
                  lang === "ar" ? "space-x-reverse" : ""
                } space-x-1.5`}
                id={`service-card-action-${service.id}`}
              >
                <span>{lang === "ar" ? "تفاصيل وطلب" : "Details & Quote"}</span>
                <ArrowUpRight className="h-3.5 w-3.5 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Floating Modal for Service Details */}
      {activeModalId !== null && activeService && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          dir={lang === "ar" ? "rtl" : "ltr"}
          id="service-modal-root"
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-brand-dark/60 backdrop-blur-md"
            onClick={() => setActiveModalId(null)}
            id="service-modal-backdrop"
          />

          {/* Modal Container */}
          <div
            className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 relative z-10 shadow-2xl border border-brand-dark/10 transform transition-all animate-in fade-in zoom-in-95 duration-200"
            id="service-modal-box"
          >
            {/* Close Button */}
            <button
              onClick={() => setActiveModalId(null)}
              className="absolute top-4 right-4 text-brand-dark hover:text-brand-blue bg-brand-dark/5 p-1.5 rounded-full transition-colors"
              type="button"
              id="close-service-modal-btn"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Modal Content */}
            <div className="mt-2 flex flex-col" id="service-modal-contents">
              
              {/* Icon & Title Accent */}
              <div className="flex items-center space-x-4 mb-4" id="service-modal-badge">
                <div className="h-12 w-12 rounded-xl bg-brand-blue/5 flex items-center justify-center">
                  {getServiceIcon(activeService.id)}
                </div>
                <div className={lang === "ar" ? "pr-3 text-right" : "pl-3 text-left"}>
                  <span className="text-[10px] uppercase font-bold tracking-widest text-brand-blue">
                    {lang === "ar" ? "قسم خدمات أربيل" : "Erbil Service Suite"}
                  </span>
                  <h3 className="text-lg font-bold text-brand-dark mt-0.5">
                    {activeService.title}
                  </h3>
                </div>
              </div>

              {/* Detailed Breakdown Text */}
              <div className="mt-4 border-t border-brand-dark/5 pt-4" id="service-modal-text-block">
                <h4 className="text-xs uppercase font-extrabold text-brand-blue tracking-wider mb-2">
                  {lang === "ar" ? "وصف الخدمة الشامل" : "Comprehensive Description"}
                </h4>
                <p className="text-sm text-brand-dark/80 leading-relaxed font-light">
                  {activeService.detailedDescription}
                </p>
              </div>

              {/* Quick Quality Check points */}
              <div className="mt-5 bg-brand-light p-4 rounded-xl border border-brand-dark/5" id="service-modal-checklist">
                <h5 className="text-[11px] font-extrabold text-brand-blue mb-2.5">
                  {lang === "ar" ? "ميزات نلتزم بها في هذه الخدمة" : "What is guaranteed in this service:"}
                </h5>
                <ul className="text-xs text-brand-dark/75 space-y-2 font-light">
                  <li className="flex items-center space-x-1.5" id="checklist-item-1">
                    <span className="text-brand-cyan">✔</span>
                    <span className={lang === "ar" ? "pr-1 text-right" : "pl-1 text-left"}>
                      {lang === "ar" ? "مواد معقمة ومطهرة صديقة للبيئة." : "Strictly biodegradable and child-friendly chemicals."}
                    </span>
                  </li>
                  <li className="flex items-center space-x-1.5" id="checklist-item-2">
                    <span className="text-brand-cyan">✔</span>
                    <span className={lang === "ar" ? "pr-1 text-right" : "pl-1 text-left"}>
                      {lang === "ar" ? "طاقم فني خاضع للأمان ومجهّز بالكامل." : "Background-vetted, insured, and uniforms-clad crew."}
                    </span>
                  </li>
                  <li className="flex items-center space-x-1.5" id="checklist-item-3">
                    <span className="text-brand-cyan">✔</span>
                    <span className={lang === "ar" ? "pr-1 text-right" : "pl-1 text-left"}>
                      {lang === "ar" ? "مشرف جودة مخصص لمعاينة تسليم الموقع." : "Dedicated supervisor checks for every single handoff."}
                    </span>
                  </li>
                </ul>
              </div>

              {/* Action Buttons inside Modal */}
              <div className="mt-6 grid grid-cols-2 gap-4" id="service-modal-actions">
                <button
                  onClick={() => {
                    onRequestQuoteWithService(activeService.title);
                    setActiveModalId(null);
                  }}
                  className="bg-brand-blue hover:bg-brand-blue/90 text-white font-bold py-3 px-4 rounded-xl text-center text-xs shadow-md transition-all scale-100 hover:scale-[1.03]"
                  type="button"
                  id="modal-order-service-btn"
                >
                  {t.heroBtnQuote}
                </button>
                <button
                  onClick={() => setActiveModalId(null)}
                  className="bg-brand-dark/5 hover:bg-brand-dark/10 text-brand-dark font-semibold py-3 px-4 rounded-xl text-center text-xs transition-all"
                  type="button"
                  id="modal-cancel-service-btn"
                >
                  {lang === "ar" ? "إغلاق" : "Back to Services"}
                </button>
              </div>

            </div>
          </div>
        </div>
      )}

    </section>
  );
};
