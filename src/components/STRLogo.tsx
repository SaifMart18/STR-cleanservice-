import React from "react";

interface STRLogoProps {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
  showText?: boolean;
  lightMode?: boolean;
}

export const STRLogo: React.FC<STRLogoProps> = ({
  className = "",
  size = "md",
  showText = true,
  lightMode = false,
}) => {
  // Dimensions based on size
  const logoSizes = {
    sm: { img: "h-14 md:h-16 w-auto max-w-[180px]", text: "text-xl", sub: "text-[10px]" },
    md: { img: "h-24 md:h-28 w-auto max-w-[240px]", text: "text-2xl", sub: "text-[11px]" },
    lg: { img: "h-36 md:h-44 w-auto max-w-[320px]", text: "text-4xl", sub: "text-xs" },
    xl: { img: "h-48 md:h-56 w-auto max-w-[400px]", text: "text-5xl", sub: "text-sm" },
  };

  const currentSize = logoSizes[size];

  return (
    <div className={`flex flex-col items-center justify-center ${className}`} id="str-logo-container">
      {/* Dynamic Company Logo Image from Google Drive */}
      <img
        src="https://lh3.googleusercontent.com/d/1ESf0ndT4EyJwDN_AbOVKa9AZwuow6oHn"
        alt="STR Cleanservice Logo"
        className={`${currentSize.img} object-contain rounded-lg transform transition-transform duration-500 hover:scale-105`}
        referrerPolicy="no-referrer"
        id="str-logo-img"
      />

      {showText && (
        <div className="text-center mt-2 font-cairo tracking-wide flex flex-col items-center">
          {/* Main "STR" title */}
          <span
            className={`font-extrabold tracking-widest leading-none ${currentSize.text} ${
              lightMode ? "text-white" : "text-brand-blue"
            }`}
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            STR
          </span>
          
          {/* "CLEANSERVICE" sub text */}
          <span
            className={`font-semibold tracking-[0.2em] leading-tight mt-1 text-[11px] uppercase ${
              lightMode ? "text-brand-cyan" : "text-brand-dark/80"
            }`}
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            CLEANSERVICE
          </span>

          {/* Location & Slogan tagline */}
          <span
            className={`font-light leading-none mt-1 tracking-wider whitespace-nowrap text-[8px] uppercase opacity-75 ${
              lightMode ? "text-white/80" : "text-brand-dark/60"
            }`}
             style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Professional Home Cleaning • Erbil
          </span>
        </div>
      )}
    </div>
  );
};
