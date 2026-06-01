import React from "react";
import { STRLogo } from "./STRLogo";
import { TranslationDict } from "../types";
import {
  Facebook,
  Phone,
  MapPin,
  Clock,
  ArrowUp,
  ExternalLink
} from "lucide-react";

interface FooterProps {
  lang: "ar" | "en";
  t: TranslationDict;
}

export const Footer: React.FC<FooterProps> = ({ lang, t }) => {
  const handleScrollToSegment = (elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      const offset = 90;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <footer
      className="bg-brand-dark text-white pt-20 pb-10 relative overflow-hidden"
      dir={lang === "ar" ? "rtl" : "ltr"}
      id="app-footer"
    >
      {/* Visual glowing effects */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-brand-blue/10 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/3" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-brand-cyan/10 rounded-full blur-3xl translate-y-1/2 translate-x-1/3" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" id="footer-container">
        
        {/* Core Links & Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 border-b border-white/10 pb-16" id="footer-top-grid">
          
          {/* Col 1: Brand Info Column */}
          <div className="lg:col-span-4 space-y-6" id="footer-brand-column">
            
            <div className="flex justify-start" id="footer-logo">
              <STRLogo size="sm" showText={true} lightMode={true} />
            </div>

            <p className="text-white/60 text-xs leading-relaxed font-light">
              {t.footerAboutText}
            </p>

            {/* Social channels block */}
            <div className={`flex items-center ${lang === "ar" ? "space-x-reverse" : ""} space-x-3`} id="footer-social-panel">
              <a
                href="https://www.facebook.com/profile.php?id=100064161367319"
                target="_blank"
                rel="noopener noreferrer"
                className="h-9 w-9 bg-white/5 hover:bg-brand-blue text-white rounded-xl flex items-center justify-center transition-all duration-300 border border-white/5"
                aria-label="Follow us on Facebook"
              >
                <Facebook className="h-4.5 w-4.5" />
              </a>
              <a
                href="https://wa.me/9647507120332"
                target="_blank"
                rel="noopener noreferrer"
                className="h-9 w-9 bg-white/5 hover:bg-green-500 text-white rounded-xl flex items-center justify-center transition-all duration-300 border border-white/5"
                aria-label="WhatsApp Helpline"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12.004 2c-5.523 0-10 4.477-10 10 0 1.776.462 3.447 1.272 4.908l-1.272 4.67 4.795-1.258a9.96 9.96 0 0 0 5.205 1.458c5.523 0 10-4.477 10-10s-4.477-10-10-10zm5.12 13.916c-.24.636-1.18 1.173-1.63 1.25-.41.071-.94.131-2.92-.656-2.535-1.004-4.14-3.553-4.267-3.722-.127-.169-.958-1.275-.958-2.433 0-1.157.608-1.724.823-1.95.215-.226.47-.282.628-.282.158 0 .316.002.454.009.146.007.34-.029.533.435.197.474.675 1.637.733 1.751.058.114.097.247.02.404-.077.157-.154.254-.25.367-.097.113-.203.253-.29.345-.1.106-.205.221-.088.421.117.199.52 1.01 1.457 1.848.824.736 1.558.98 1.78 1.104.22.124.348.106.477-.029.13-.135.53-.615.67-.824.14-.21.28-.175.474-.105.194.07 1.23.58 1.442.686.212.106.353.159.404.247.051.088.051.512-.138 1.148z" />
                </svg>
              </a>
            </div>

          </div>

          {/* Col 2: Quick Links Links */}
          <div className="lg:col-span-2 space-y-6" id="footer-links-column">
            <h3 className="text-sm font-extrabold uppercase tracking-widest text-[#28D7E5]">
              {t.footerQuickLinks}
            </h3>
            <ul className="space-y-3 text-xs text-white/70 font-light" id="footer-links-list">
              <li>
                <button
                  onClick={() => handleScrollToSegment("home")}
                  className="hover:text-brand-cyan transition-colors"
                  type="button"
                >
                  {t.navHome}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleScrollToSegment("about")}
                  className="hover:text-brand-cyan transition-colors"
                  type="button"
                >
                  {t.navAbout}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleScrollToSegment("services")}
                  className="hover:text-brand-cyan transition-colors"
                  type="button"
                >
                  {t.navServices}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleScrollToSegment("why-us")}
                  className="hover:text-brand-cyan transition-colors"
                  type="button"
                >
                  {t.navWhyUs}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleScrollToSegment("gallery")}
                  className="hover:text-brand-cyan transition-colors"
                  type="button"
                >
                  {t.navGallery}
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Services shortcuts list */}
          <div className="lg:col-span-3 space-y-6" id="footer-services-column">
            <h3 className="text-sm font-extrabold uppercase tracking-widest text-[#28D7E5]">
              {t.footerOurServices}
            </h3>
            <ul className="space-y-3 text-xs text-white/70 font-light" id="footer-services-list">
              {t.servicesList.slice(0, 5).map((service) => (
                <li key={service.id}>
                  <button
                    onClick={() => handleScrollToSegment("services")}
                    className="hover:text-brand-cyan transition-colors flex items-center justify-start text-right"
                    type="button"
                  >
                    <span>{service.title}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Reach Contacts details */}
          <div className="lg:col-span-3 space-y-6" id="footer-contact-column">
            <h3 className="text-sm font-extrabold uppercase tracking-widest text-[#28D7E5]">
              {t.footerContactUs}
            </h3>
            <ul className="space-y-4 text-xs text-white/70 font-light" id="footer-contact-items">
              
              <li className="flex items-start space-x-2.5">
                <MapPin className={`h-4.5 w-4.5 text-brand-cyan shrink-0 ${lang === "ar" ? "ml-2.5" : "mr-2.5"}`} />
                <span className="leading-snug">{t.contactAddress}</span>
              </li>

              <li className="flex items-center space-x-2.5">
                <Phone className={`h-4.5 w-4.5 text-brand-cyan shrink-0 ${lang === "ar" ? "ml-2.5" : "mr-2.5"}`} />
                <a href="tel:+9647507120332" className="hover:text-brand-cyan transition-colors" style={{ direction: "ltr" }}>
                  0750 712 0332
                </a>
              </li>

              <li className="flex items-start space-x-2.5">
                <Clock className={`h-4.5 w-4.5 text-brand-cyan shrink-0 ${lang === "ar" ? "ml-2.5" : "mr-2.5"}`} />
                <span>{t.contactHoursVal}</span>
              </li>

            </ul>
          </div>

        </div>

        {/* Footer Bottom copyright notes */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-white/50 space-y-4 md:space-y-0" id="footer-bottom">
          <div className="text-center md:text-right" id="copyright-text">
            {t.footerRights}
          </div>

          {/* Swiss Standards / Tech Tag */}
          <div className="flex items-center space-x-1.5" style={{ direction: "ltr" }} id="footer-cred">
            <span className="h-2 w-2 rounded-full bg-brand-cyan animate-pulse" />
            <span className="font-mono text-[10px] tracking-widest text-brand-cyan block">
              30+ YEARS EXPERIENCE
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
};
