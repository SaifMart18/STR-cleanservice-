import React, { useState, useEffect } from "react";
import { STRLogo } from "./STRLogo";
import { LanguageSwitch } from "./LanguageSwitch";
import { TranslationDict } from "../types";
import { Phone, ChevronRight, Menu, X, ArrowUpRight } from "lucide-react";

interface HeaderProps {
  lang: "ar" | "en";
  t: TranslationDict;
  setLang: (lang: "ar" | "en") => void;
  onRequestQuote: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  lang,
  t,
  setLang,
  onRequestQuote,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Monitor Scroll for Glassmorphic Class Triggering
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll helper matching RTL/LTR context
  const handleScrollToSegment = (elementId: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(elementId);
    if (element) {
      const offset = 90; // account for sticky header height
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const navMenuItems = [
    { label: t.navHome, id: "home" },
    { label: t.navAbout, id: "about" },
    { label: t.navServices, id: "services" },
    { label: t.navWhyUs, id: "why-us" },
    { label: t.navGallery, id: "gallery" },
    { label: t.navContact, id: "contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/90 backdrop-blur-md shadow-md py-2 border-b border-brand-blue/10"
            : "bg-transparent py-4"
        }`}
        dir={lang === "ar" ? "rtl" : "ltr"}
        id="app-header"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Logo Brand Frame */}
          <button
            onClick={() => handleScrollToSegment("home")}
            className="flex items-center space-x-2 translate-y-0.5"
            type="button"
            id="header-logo-btn"
          >
            <STRLogo size="sm" showText={true} />
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-4 mx-4" id="desktop-nav">
            {navMenuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleScrollToSegment(item.id)}
                className={`text-sm font-semibold transition-all duration-200 px-3 py-2 rounded-lg hover:bg-brand-blue/5 hover:text-brand-blue ${
                  lang === "ar" ? "ml-1" : "mr-1"
                } text-brand-dark/90`}
                type="button"
                id={`nav-${item.id}`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Actions Block: Lang, Call, WhatsApp, Quote */}
          <div className="hidden lg:flex items-center space-x-2 xl:space-x-3" id="header-action-group">
            
            {/* Language Selection */}
            <LanguageSwitch currentLang={lang} onToggle={setLang} />

            {/* Helpline Click Call */}
            <a
              href="tel:+9647507120332"
              className="flex items-center space-x-1.5 text-brand-blue hover:text-brand-cyan transition-colors duration-200 text-xs font-bold border border-brand-blue/20 bg-brand-blue/5 px-3 py-2 rounded-full"
              style={{ direction: "ltr" }}
              id="header-call-btn"
            >
              <Phone className="h-3.5 w-3.5" />
              <span>0750 712 0332</span>
            </a>

            {/* Direct Message WhatsApp */}
            <a
              href="https://wa.me/9647507120332"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-1 h-9 bg-green-500 hover:bg-green-600 text-white rounded-full px-3 text-xs font-bold shadow-md shadow-green-500/10 transition-colors duration-200"
              style={{ direction: "ltr" }}
              id="header-whatsapp-btn"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.73-1.458L0 24zm11.954-2.038c1.776-.001 3.51-.476 5.015-1.376l.36-.214 3.73.977-.994-3.634.234-.373c.955-1.52 1.458-3.278 1.457-5.086.002-5.512-4.483-10-10-10C6.483 2.222 2 6.707 2 12.217c0 1.83.484 3.618 1.4 5.128l.244.4-.97 3.541 3.633-.953.379.225c1.474.876 3.154 1.339 4.875 1.339zm5.076-7.067c-.278-.139-1.644-.81-1.9-.904-.256-.093-.443-.14-.629.14-.187.279-.722.905-.884 1.09-.163.18-.326.204-.604.064-.277-.14-1.173-.432-2.235-1.379-.824-.736-1.38-1.645-1.542-1.925-.163-.28-.017-.431.121-.57.125-.124.278-.326.417-.489.14-.163.186-.279.278-.465.093-.186.046-.35-.023-.49-.07-.139-.629-1.517-.862-2.079-.227-.547-.457-.472-.629-.481-.162-.008-.349-.01-.536-.01s-.488.07-.743.349c-.256.279-.978.956-.978 2.332 0 1.377 1.002 2.705 1.142 2.89.14.187 1.973 3.012 4.779 4.22.668.288 1.19.46 1.597.59.672.212 1.284.182 1.768.11.54-.08 1.644-.672 1.877-1.321.233-.648.233-1.203.163-1.321-.07-.118-.256-.188-.535-.327z" />
              </svg>
              <span>{t.whatsappUs}</span>
            </a>

            {/* Request Quote Button */}
            <button
              onClick={onRequestQuote}
              className="bg-brand-blue hover:bg-brand-blue/90 text-white text-xs font-bold px-4 py-2.5 rounded-full transition-all duration-300 shadow-md shadow-brand-blue/20 hover:shadow-brand-blue/30 scale-100 hover:scale-[1.03] flex items-center space-x-1 group"
              type="button"
              id="header-quote-btn"
            >
              <span>{t.requestQuote}</span>
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>

          {/* Tablet/Mobile Action Panel Bar */}
          <div className="flex lg:hidden items-center space-x-2" id="header-mobile-right">
            {/* Quick Locale Swap Icon */}
            <button
              onClick={() => setLang(lang === "ar" ? "en" : "ar")}
              className="text-xs font-extrabold border border-brand-blue/20 text-brand-blue bg-white hover:bg-brand-blue/5 h-9 px-3 rounded-full flex items-center justify-center transition-colors duration-200"
              style={{ fontFamily: lang === "ar" ? "'Inter', sans-serif" : "'Cairo', sans-serif" }}
              type="button"
              id="quick-lang-swap"
            >
              {lang === "ar" ? "EN" : "عربي"}
            </button>

            {/* Emergency Mobile Dial */}
            <a
              href="tel:+9647507120332"
              className="bg-brand-blue text-white hover:bg-brand-blue/90 w-9 h-9 flex items-center justify-center rounded-full shadow-md shadow-brand-blue/10"
              id="mobile-quick-call"
            >
              <Phone className="h-4 w-4" />
            </a>

            {/* Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-brand-dark hover:text-brand-blue focus:outline-none bg-white p-1.5 rounded-lg border border-brand-dark/10 h-9 w-9 flex items-center justify-center"
              aria-label="Toggle Menu"
              type="button"
              id="menu-toggle-btn"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>

        </div>
      </header>

      {/* Mobile Glassmorphic Drawer Menu Navigation Overlay */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transform transition-all duration-300 ${
          mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        dir={lang === "ar" ? "rtl" : "ltr"}
        id="mobile-nav-root"
      >
        {/* Backdrop overlay */}
        <div
          className="absolute inset-0 bg-brand-dark/40 backdrop-blur-sm"
          onClick={() => setMobileMenuOpen(false)}
          id="mobile-nav-backdrop"
        />

        {/* Sidebar Frame container slide effect based on dir */}
        <div
          className={`absolute top-0 bottom-0 w-4/5 max-w-sm bg-white shadow-2xl p-6 flex flex-col justify-between transition-transform duration-300 z-50 ${
            lang === "ar"
              ? mobileMenuOpen ? "left-0 translate-x-0" : "left-0 -translate-x-full"
              : mobileMenuOpen ? "right-0 translate-x-0" : "right-0 translate-x-full"
          }`}
          id="mobile-nav-sidebar"
        >
          {/* Top Panel brand elements */}
          <div className="flex flex-col space-y-6" id="mobile-sidebar-top">
            <div className="flex items-center justify-between border-b border-brand-dark/5 pb-4" id="mobile-sidebar-head">
              <STRLogo size="sm" showText={true} />
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="text-brand-dark hover:text-brand-blue p-1 rounded-lg bg-brand-dark/5 focus:outline-none"
                type="button"
                id="close-mobile-menu-btn"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Navigation options list */}
            <nav className="flex flex-col space-y-3" id="mobile-sidebar-links">
              {navMenuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleScrollToSegment(item.id)}
                  className="text-right flex items-center justify-between text-base font-bold text-brand-dark px-4 py-3 rounded-xl hover:bg-brand-blue/5 hover:text-brand-blue transition-all"
                  dir={lang === "ar" ? "rtl" : "ltr"}
                  type="button"
                  id={`mobile-nav-${item.id}`}
                >
                  <span>{item.label}</span>
                  <ChevronRight
                    className={`h-4 w-4 text-brand-blue/50 ${lang === "ar" ? "rotate-180" : ""}`}
                  />
                </button>
              ))}
            </nav>
          </div>

          {/* Bottom Action frame containing social & phone direct links */}
          <div className="flex flex-col space-y-4 border-t border-brand-dark/5 pt-6" id="mobile-sidebar-foot">
            <div className="flex justify-center" id="mobile-sidebar-lang-container">
              <LanguageSwitch currentLang={lang} onToggle={setLang} />
            </div>

            <a
              href="tel:+9647507120332"
              className="flex items-center justify-center space-x-2 w-full py-3 bg-brand-blue/5 text-brand-blue hover:bg-brand-blue/10 rounded-xl font-bold transition-all text-sm"
              dir="ltr"
              id="mobile-sidebar-call"
            >
              <Phone className="h-4 w-4" />
              <span>0750 712 0332</span>
            </a>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onRequestQuote();
              }}
              className="w-full py-3 bg-brand-blue hover:bg-brand-blue/95 text-white font-bold rounded-xl shadow-lg shadow-brand-blue/20 transition-all text-sm"
              type="button"
              id="mobile-sidebar-quote"
            >
              {t.requestQuote}
            </button>
          </div>

        </div>

      </div>
    </>
  );
};
