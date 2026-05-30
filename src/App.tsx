import React, { useState, useEffect } from "react";
import { AR_TRANSLATIONS, EN_TRANSLATIONS } from "./types";
import { LoadingScreen } from "./components/LoadingScreen";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Services } from "./components/Services";
import { WhyChooseUs } from "./components/WhyChooseUs";
import { WorkProcess } from "./components/WorkProcess";
import { WorkGallery } from "./components/WorkGallery";
import { Testimonials } from "./components/Testimonials";
import { FAQ} from "./components/FAQ";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { FloatingActions } from "./components/FloatingActions";

export default function App() {
  const [lang, setLang] = useState<"ar" | "en">("ar");
  const [isLoading, setIsLoading] = useState(true);
  const [prefilledService, setPrefilledService] = useState("");

  // Select dictionary according to active language state
  const t = lang === "ar" ? AR_TRANSLATIONS : EN_TRANSLATIONS;

  // React on language state to dynamically update page metadata and dir settings
  useEffect(() => {
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = lang;
    document.title = lang === "ar" 
      ? "شركة STR Cleanservice - خدمات تنظيف احترافية في أربيل" 
      : "STR Cleanservice - Professional Cleaning Services in Erbil";
  }, [lang]);

  // Handle CTA anchor navigation
  const navigateToContactWithService = (service: string = "") => {
    setPrefilledService(service);
    
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      const offset = 90;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = contactSection.getBoundingClientRect().top;
      const position = elementRect - bodyRect - offset;

      window.scrollTo({
        top: position,
        behavior: "smooth"
      });
    }
  };

  return (
    <>
      {/* 1. Loading Pre-Loader Overlay Screen */}
      <LoadingScreen onComplete={() => setIsLoading(false)} />

      {/* Main Container Frame - only renders if preloading completes safely */}
      {!isLoading && (
        <div
          className={`min-h-screen flex flex-col font-sans transition-all duration-300 ${
            lang === "ar" ? "direction-rtl font-cairo" : "direction-ltr font-inter"
          }`}
          style={{ direction: lang === "ar" ? "rtl" : "ltr" }}
          id="app-root-wrapper"
        >
          {/* 2. Sticky Glass Header with locale switcher */}
          <Header
            lang={lang}
            t={t}
            setLang={setLang}
            onRequestQuote={() => navigateToContactWithService("")}
          />

          {/* 3. Hero Section and Statistics */}
          <Hero
            lang={lang}
            t={t}
            onRequestQuote={() => navigateToContactWithService("")}
            onContactUs={() => navigateToContactWithService("")}
          />

          {/* Core Content sections */}
          <main className="flex-grow" id="main-content-flow">
            {/* 4. About Bio corporate section */}
            <About lang={lang} t={t} />

            {/* 5. Interactive 10 Services grid section */}
            <Services
              lang={lang}
              t={t}
              onRequestQuoteWithService={(svc) => navigateToContactWithService(svc)}
            />

            {/* 6. Why Choose Us advantages lists */}
            <WhyChooseUs lang={lang} t={t} />

            {/* 7. How We Work step-by-step blueprint horizontal map */}
            <WorkProcess lang={lang} t={t} />

            {/* 8. Fully Filterable Case Studies Gallery section with Before/After controls */}
            <WorkGallery lang={lang} t={t} />

            {/* 9. Verified Customer Testimonials Carousel */}
            <Testimonials lang={lang} t={t} />

            {/* 10. Operational FAQs accordion blocks */}
            <FAQ lang={lang} t={t} />

            {/* 11. Quote form, hotline card, and real Google map locator */}
            <Contact
              lang={lang}
              t={t}
              prefilledService={prefilledService}
            />
          </main>

          {/* 12. Corporate Footer & Copyright */}
          <Footer lang={lang} t={t} />

          {/* 13. WhatsApp and back to top widgets */}
          <FloatingActions lang={lang} />
        </div>
      )}
    </>
  );
}
