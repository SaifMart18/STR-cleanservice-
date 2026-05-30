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
    sm: { img: "h-8 w-8", text: "text-lg", sub: "text-[8px]" },
    md: { img: "h-14 w-14", text: "text-2xl", sub: "text-[10px]" },
    lg: { img: "h-24 w-24", text: "text-4xl", sub: "text-xs" },
    xl: { img: "h-36 w-36", text: "text-5xl", sub: "text-sm" },
  };

  const currentSize = logoSizes[size];

  return (
    <div className={`flex flex-col items-center justify-center ${className}`} id="str-logo-container">
      {/* Dynamic Vector SVG Shield for STR Monogram */}
      <svg
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`${currentSize.img} transform transition-transform duration-500 hover:scale-105`}
        aria-hidden="true"
        id="str-logo-svg"
      >
        {/* Modern Hexagonal Shield Structure */}
        {/* Background Subtle Sparkle Effect */}
        <path
          d="M100 20 L160 50 L160 115 C160 150 100 180 100 180 C100 180 40 150 40 115 L40 50 Z"
          fill="none"
          stroke="#0D4EA6"
          strokeWidth="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* The 'S' flow inside the left area of the shield */}
        <path
          d="M80 55 C58 55 58 85 80 88 C102 91 102 118 80 121 C58 121 58 110 58 110"
          stroke="#0D4EA6"
          strokeWidth="11"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* The 'R' leg structure on the right side of the shield */}
        <path
          d="M120 54 H138 C148 54 148 85 138 85 H120 V122 M135 85 L146 120"
          stroke="#0D4EA6"
          strokeWidth="11"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* The Cyan 'T' centerpiece of the logo */}
        <path
          d="M100 54 V145"
          stroke="#28D7E5"
          strokeWidth="13"
          strokeLinecap="round"
        />
        <path
          d="M78 54 H122"
          stroke="#28D7E5"
          strokeWidth="13"
          strokeLinecap="round"
        />
        <path
          d="M78 54 L100 35 L122 54"
          stroke="#28D7E5"
          strokeWidth="11"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

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
