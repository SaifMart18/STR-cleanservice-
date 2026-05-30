import React from "react";

interface LanguageSwitchProps {
  currentLang: "ar" | "en";
  onToggle: (lang: "ar" | "en") => void;
}

export const LanguageSwitch: React.FC<LanguageSwitchProps> = ({
  currentLang,
  onToggle,
}) => {
  return (
    <div
      className="flex items-center bg-brand-dark/10 p-1 rounded-full relative border border-brand-dark/5 shadow-inner"
      id="lang-switch-container"
    >
      {/* Sliding Active Background */}
      <div
        className={`absolute top-1 bottom-1 w-[80px] bg-brand-blue rounded-full transition-all duration-300 shadow-md ${
          currentLang === "ar" ? "right-1" : "left-1"
        }`}
        style={{
          transform: currentLang === "ar" ? "translateX(0)" : "translateX(0)",
        }}
        id="lang-switch-active-bg"
      />

      {/* English Selector Option */}
      <button
        onClick={() => onToggle("en")}
        className={`w-[80px] py-1.5 text-xs font-semibold rounded-full z-10 text-center transition-colors duration-300 select-none ${
          currentLang === "en" ? "text-white font-bold" : "text-brand-dark/70 hover:text-brand-dark"
        }`}
        style={{ fontFamily: "'Inter', sans-serif" }}
        type="button"
        id="toggle-lang-en"
      >
        English
      </button>

      {/* Arabic Selector Option */}
      <button
        onClick={() => onToggle("ar")}
        className={`w-[80px] py-1.5 text-xs font-semibold rounded-full z-10 text-center transition-colors duration-300 select-none ${
          currentLang === "ar" ? "text-white font-bold" : "text-brand-dark/70 hover:text-brand-dark"
        }`}
        style={{ fontFamily: "'Cairo', sans-serif" }}
        type="button"
        id="toggle-lang-ar"
      >
        العربية
      </button>
    </div>
  );
};
