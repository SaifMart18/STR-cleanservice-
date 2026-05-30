import React, { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

interface FloatingActionsProps {
  lang: "ar" | "en";
}

export const FloatingActions: React.FC<FloatingActionsProps> = ({ lang }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      className={`fixed bottom-6 z-40 flex flex-col space-y-3 transition-opacity duration-300 ${
        isVisible ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      } ${lang === "ar" ? "left-6" : "right-6"}`}
      id="floating-action-widgets"
    >
      
      {/* Floating WhatsApp Action Button */}
      <a
        href="https://wa.me/9647507120332"
        target="_blank"
        rel="noopener noreferrer"
        className="w-13 h-13 bg-green-500 text-white rounded-full flex items-center justify-center shadow-xl hover:bg-green-600 transition-all duration-300 hover:scale-110 active:scale-95 group relative"
        aria-label="Direct WhatsApp Message"
        id="floating-whatsapp-widget"
      >
        <svg className="w-6.5 h-6.5 fill-current" viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.73-1.458L0 24zm11.954-2.038c1.776-.001 3.51-.476 5.015-1.376l.36-.214 3.73.977-.994-3.634.234-.373c.955-1.52 1.458-3.278 1.457-5.086.002-5.512-4.483-10-10-10C6.483 2.222 2 6.707 2 12.217c0 1.83.484 3.618 1.4 5.128l.244.4-.97 3.541 3.633-.953.379.225c1.474.876 3.154 1.339 4.875 1.339zm5.076-7.067c-.278-.139-1.644-.81-1.9-.904-.256-.093-.443-.14-.629.14-.187.279-.722.905-.884 1.09-.163.18-.326.204-.604.064-.277-.14-1.173-.432-2.235-1.379-.824-.736-1.38-1.645-1.542-1.925-.163-.28-.017-.431.121-.57.125-.124.278-.326.417-.489.14-.163.186-.279.278-.465.093-.186.046-.35-.023-.49-.07-.139-.629-1.517-.862-2.079-.227-.547-.457-.472-.629-.481-.162-.008-.349-.01-.536-.01s-.488.07-.743.349c-.256.279-.978.956-.978 2.332 0 1.377 1.002 2.705 1.142 2.89.14.187 1.973 3.012 4.779 4.22.668.288 1.19.46 1.597.59.672.212 1.284.182 1.768.11.54-.08 1.644-.672 1.877-1.321.233-.648.233-1.203.163-1.321-.07-.118-.256-.188-.535-.327z" />
        </svg>
        <span className="absolute right-15 bg-brand-dark/95 border border-white/10 text-white font-bold text-xs px-3 py-1.5 rounded-xl whitespace-nowrap shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          {lang === "ar" ? "راسلنا على واتساب" : "WhatsApp Helpline"}
        </span>
      </a>

      {/* Floating Back To Top Arrow Button */}
      <button
        onClick={handleScrollToTop}
        className="w-13 h-13 bg-white text-brand-blue rounded-full border border-brand-blue/15 flex items-center justify-center shadow-xl hover:bg-brand-blue hover:text-white transition-all duration-300 hover:scale-110 active:scale-95 group relative"
        aria-label="Back to Absolute Top"
        type="button"
        id="floating-totop-widget"
      >
        <ArrowUp className="h-6 w-6 group-hover:animate-bounce shrink-0" />
        <span className="absolute right-15 bg-brand-dark/95 border border-white/10 text-white font-bold text-xs px-3 py-1.5 rounded-xl whitespace-nowrap shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          {lang === "ar" ? "العودة للأعلى" : "Scroll to Top"}
        </span>
      </button>

    </div>
  );
};
