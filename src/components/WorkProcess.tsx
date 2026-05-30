import React from "react";
import { TranslationDict } from "../types";
import {
  PhoneCall,
  Eye,
  FileText,
  Sparkles,
  ClipboardCheck,
  ChevronRight
} from "lucide-react";

interface WorkProcessProps {
  lang: "ar" | "en";
  t: TranslationDict;
}

export const WorkProcess: React.FC<WorkProcessProps> = ({ lang, t }) => {
  // Connect icons for the 5-step workflow
  const getStepIcon = (id: number) => {
    switch (id) {
      case 1:
        return <PhoneCall className="h-6 w-6 text-brand-blue" />;
      case 2:
        return <Eye className="h-6 w-6 text-brand-blue" />;
      case 3:
        return <FileText className="h-6 w-6 text-brand-blue" />;
      case 4:
        return <Sparkles className="h-6 w-6 text-brand-blue" />;
      case 5:
        return <ClipboardCheck className="h-6 w-6 text-brand-blue" />;
      default:
        return <Sparkles className="h-6 w-6 text-brand-blue" />;
    }
  };

  return (
    <section
      className="py-24 bg-brand-light relative overflow-hidden"
      dir={lang === "ar" ? "rtl" : "ltr"}
      id="work-process-section"
    >
      {/* Decorative Blur elements */}
      <div className="absolute top-1/2 left-10 w-72 h-72 bg-brand-blue/5 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-brand-cyan/5 rounded-full blur-3xl translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" id="work-process-container">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16" id="work-process-header">
          <span
            className="text-brand-blue uppercase font-bold tracking-widest text-xs px-3 py-1 bg-brand-blue/5 rounded-full w-fit mb-3 inline-block"
            id="work-process-tag"
          >
            {lang === "ar" ? "دليل العمل" : "Workflow Blueprint"}
          </span>
          <h2
            className="text-3xl sm:text-4xl font-extrabold text-brand-dark tracking-tight"
            id="work-process-main-heading"
          >
            {t.processTitle}
          </h2>
          <p
            className="mt-4 text-base text-brand-dark/70 font-light"
            id="work-process-supporting"
          >
            {t.processSubtitle}
          </p>
        </div>

        {/* Horizontal Road Map for Large Screens, Vertical Timeline for Mobile */}
        <div className="relative" id="process-timeline-wrapper">
          
          {/* Connecting line for desktop */}
          <div
            className="hidden lg:block absolute top-[43px] left-8 right-8 h-[2px] bg-brand-blue/15 z-0"
            id="desktop-timeline-line"
          />

          {/* Steps Grid */}
          <div
            className="grid grid-cols-1 lg:grid-cols-5 gap-8 relative z-10"
            id="process-steps-grid"
          >
            {t.processSteps.map((step) => (
              <div
                key={step.id}
                className="flex flex-col items-center text-center group"
                id={`process-step-container-${step.id}`}
              >
                {/* Step Circle Badge with Icon */}
                <div
                  className="h-16 w-16 rounded-full bg-white border-2 border-brand-blue/10 flex items-center justify-center relative z-10 group-hover:bg-brand-blue group-hover:border-transparent group-hover:text-white transition-all duration-300 shadow-md group-hover:shadow-brand-blue/20"
                  id={`process-step-circle-${step.id}`}
                >
                  <div className="group-hover:filter group-hover:brightness-0 group-hover:invert transition-all duration-300">
                    {getStepIcon(step.id)}
                  </div>

                  {/* Tiny floating step count label */}
                  <span
                    className={`absolute -top-1.5 -right-1.5 bg-brand-cyan text-brand-dark font-mono text-[10px] font-bold h-6 w-6 rounded-full flex items-center justify-center shadow-sm ${
                      lang === "ar" ? "-right-1.5 -left-auto" : ""
                    }`}
                  >
                    {step.stepNum}
                  </span>
                </div>

                {/* Content Box */}
                <div
                  className="mt-6 bg-white hover:bg-white rounded-2xl p-5 border border-brand-dark/5 shadow-sm hover:shadow-lg transition-shadow duration-300 w-full min-h-[160px] flex flex-col justify-between"
                  id={`process-step-card-${step.id}`}
                >
                  <div>
                    {/* Title */}
                    <h3 className="text-sm font-extrabold text-brand-dark tracking-tight leading-tight group-hover:text-brand-blue transition-colors">
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p className="mt-3 text-[11px] text-brand-dark/70 leading-relaxed font-light">
                      {step.description}
                    </p>
                  </div>

                  {/* Indicator Arrow footer for next flow */}
                  <div
                    className={`mt-4 hidden lg:flex items-center justify-center ${
                      lang === "ar" ? "rotate-180" : ""
                    }`}
                    id={`process-step-flow-arrow-${step.id}`}
                  >
                    {step.id < 5 && (
                      <ChevronRight className="h-4 w-4 text-brand-blue/35 transition-transform duration-300 group-hover:translate-x-0.5" />
                    )}
                  </div>

                </div>

              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
