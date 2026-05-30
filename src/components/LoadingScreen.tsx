import React, { useEffect, useState } from "react";
import { STRLogo } from "./STRLogo";

interface LoadingScreenProps {
  onComplete: () => void;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [percent, setPercent] = useState(1);

  useEffect(() => {
    // Increment percent progress simulating assets loading
    const timer = setInterval(() => {
      setPercent((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          // Let visible element fade out
          setTimeout(() => {
            setIsVisible(false);
            onComplete();
          }, 300);
          return 100;
        }
        return prev + 6;
      });
    }, 45);

    return () => clearInterval(timer);
  }, [onComplete]);

  if (!isVisible) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 bg-brand-light z-[1000] flex flex-col items-center justify-center transition-all duration-500 ease-out p-6"
      style={{
        opacity: percent === 100 ? 0 : 1,
        pointerEvents: percent === 100 ? "none" : "auto",
      }}
      id="pre-loader-root"
    >
      <div className="flex flex-col items-center max-w-sm text-center" id="loader-content-center">
        {/* Pulsing Shield Logo */}
        <div className="animate-pulse relative" id="loader-shield-pulse">
          <STRLogo size="lg" showText={false} />
          {/* Circular halo shine */}
          <div className="absolute inset-0 border-2 border-brand-cyan/20 rounded-full scale-125 animate-ping opacity-35" />
        </div>

        {/* Corporate branding identifier */}
        <div className="mt-8 font-inter flex flex-col items-center" id="loader-captions">
          <span className="font-extrabold text-2xl tracking-widest text-brand-blue uppercase">
            STR
          </span>
          <span className="font-semibold text-xs text-brand-dark/60 tracking-[0.25em] uppercase mt-1">
            CLEANSERVICE
          </span>
          <span className="font-light text-[9px] tracking-widest text-brand-blue/70 uppercase mt-0.5" style={{ fontFamily: "Inter, sans-serif" }}>
            Erbil Professional Sanitation
          </span>
        </div>

        {/* Linear progress bar */}
        <div className="w-48 h-1 bg-brand-dark/5 rounded-full overflow-hidden mt-8 relative" id="loader-progress-track">
          <div
            className="absolute top-0 bottom-0 left-0 bg-brand-blue transition-all duration-100 ease-out rounded-full"
            style={{ width: `${percent}%` }}
            id="loader-progress-bar"
          />
        </div>

        {/* Localized percentage indicator */}
        <span className="mt-2.5 font-mono text-[10px] text-brand-dark/55 block" id="loader-percent-badge">
          {percent}%
        </span>
      </div>
    </div>
  );
};
