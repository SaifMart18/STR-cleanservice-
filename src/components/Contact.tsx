import React, { useState, useEffect } from "react";
import { TranslationDict } from "../types";
import {
  MapPin,
  PhoneCall,
  Mail,
  Clock,
  CheckCircle2,
  Send,
  Sparkles,
  ArrowUpRight
} from "lucide-react";

interface ContactProps {
  lang: "ar" | "en";
  t: TranslationDict;
  prefilledService?: string;
}

export const Contact: React.FC<ContactProps> = ({
  lang,
  t,
  prefilledService = "",
}) => {
  // Form State
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    serviceType: "",
    message: ""
  });

  const [isSubmitSuccess, setIsSubmitSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Prefill service selector if selected from other parts of the site
  useEffect(() => {
    if (prefilledService) {
      setFormData((prev) => ({
        ...prev,
        serviceType: prefilledService
      }));
    }
  }, [prefilledService]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      return;
    }

    setIsSubmitting(true);

    // Simulate reliable API endpoint submission response
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitSuccess(true);
      setFormData({
        name: "",
        phone: "",
        email: "",
        serviceType: "",
        message: ""
      });

      // Clear success badge after 8 seconds
      setTimeout(() => setIsSubmitSuccess(false), 9000);
    }, 1200);
  };

  return (
    <section
      id="contact"
      className="py-24 bg-brand-light relative overflow-hidden"
      dir={lang === "ar" ? "rtl" : "ltr"}
    >
      {/* Visual background element */}
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-brand-blue/5 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-brand-cyan/5 rounded-full blur-3xl translate-y-1/3" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" id="contact-container">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16" id="contact-header">
          <span
            className="text-brand-blue uppercase font-bold tracking-widest text-xs px-3 py-1 bg-brand-blue/5 rounded-full w-fit mb-3 inline-block"
            id="contact-tag"
          >
            {t.navContact}
          </span>
          <h2
            className="text-3xl sm:text-4xl font-extrabold text-brand-dark tracking-tight"
            id="contact-main-heading"
          >
            {t.contactTitle}
          </h2>
          <p
            className="mt-4 text-base text-brand-dark/70 font-light"
            id="contact-supporting"
          >
            {t.contactSubtitle}
          </p>
        </div>

        {/* Contact info + Form Double Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12" id="contact-cols-grid">
          
          {/* Left: Company details & Fast channels (WhatsApp/Call) */}
          <div className="lg:col-span-5 space-y-6" id="contact-info-col">
            
            <div className="bg-white rounded-3xl p-8 border border-brand-dark/5 shadow-lg space-y-6" id="contact-info-sheet">
              <h3 className="text-lg font-extrabold text-[#222222] border-b border-brand-dark/5 pb-4">
                {t.contactInfoTitle}
              </h3>

              <div className="space-y-5" id="contact-items-list">
                
                {/* Physical Company Address Location */}
                <div className={`flex items-start ${lang === "ar" ? "space-x-reverse" : ""} space-x-4`} id="contact-item-address">
                  <div className="h-10 w-10 bg-brand-blue/5 text-brand-blue rounded-xl flex items-center justify-center shrink-0">
                    <MapPin className="h-5.5 w-5.5" />
                  </div>
                  <div className={lang === "ar" ? "pr-1 text-right" : "pl-1 text-left"}>
                    <h4 className="text-xs font-bold text-brand-dark/50 uppercase tracking-widest leading-none">
                      {lang === "ar" ? "قسط المعاينة والفرع الرئيسي" : "Headquarters Address"}
                    </h4>
                    <p className="text-sm font-extrabold text-brand-dark mt-1.5 leading-snug">
                      {t.contactAddress}
                    </p>
                  </div>
                </div>

                {/* Direct Dial numbers */}
                <div className={`flex items-start ${lang === "ar" ? "space-x-reverse" : ""} space-x-4`} id="contact-item-phone">
                  <div className="h-10 w-10 bg-brand-blue/5 text-brand-blue rounded-xl flex items-center justify-center shrink-0">
                    <PhoneCall className="h-5.5 w-5.5" />
                  </div>
                  <div className={lang === "ar" ? "pr-1 text-right" : "pl-1 text-left"}>
                    <h4 className="text-xs font-bold text-brand-dark/50 uppercase tracking-widest leading-none">
                      {t.contactPhoneLbl}
                    </h4>
                    <a
                      href="tel:+9647507120332"
                      className="text-sm font-extrabold text-brand-blue hover:text-brand-cyan transition-colors mt-1.5 inline-block"
                      style={{ direction: "ltr" }}
                    >
                      0750 712 0332
                    </a>
                  </div>
                </div>

                {/* Email Address */}
                <div className={`flex items-start ${lang === "ar" ? "space-x-reverse" : ""} space-x-4`} id="contact-item-email">
                  <div className="h-10 w-10 bg-brand-blue/5 text-brand-blue rounded-xl flex items-center justify-center shrink-0">
                    <Mail className="h-5.5 w-5.5" />
                  </div>
                  <div className={lang === "ar" ? "pr-1 text-right" : "pl-1 text-left"}>
                    <h4 className="text-xs font-bold text-brand-dark/50 uppercase tracking-widest leading-none">
                      {t.contactEmailLbl}
                    </h4>
                    <a
                      href="mailto:info@str-cleanservice.com"
                      className="text-sm font-extrabold text-brand-dark hover:text-brand-blue transition-colors mt-1.5 inline-block"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      info@str-cleanservice.com
                    </a>
                  </div>
                </div>

                {/* Operational hours */}
                <div className={`flex items-start ${lang === "ar" ? "space-x-reverse" : ""} space-x-4`} id="contact-item-hours">
                  <div className="h-10 w-10 bg-brand-blue/5 text-brand-blue rounded-xl flex items-center justify-center shrink-0">
                    <Clock className="h-5.5 w-5.5" />
                  </div>
                  <div className={lang === "ar" ? "pr-1 text-right" : "pl-1 text-left"}>
                    <h4 className="text-xs font-bold text-brand-dark/50 uppercase tracking-widest leading-none">
                      {t.contactHours}
                    </h4>
                    <p className="text-sm font-extrabold text-brand-dark mt-1.5 leading-none">
                      {t.contactHoursVal}
                    </p>
                  </div>
                </div>

              </div>

              {/* Direct Hot Actions: Call now & WhatsApp channels with real triggers */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-brand-dark/5 pt-6" id="contact-fast-ctas">
                {/* Voice hotline */}
                <a
                  href="tel:+9647507120332"
                  className="bg-brand-blue hover:bg-brand-blue/90 text-white font-extrabold text-xs py-3.5 px-4 rounded-xl text-center shadow-md flex items-center justify-center space-x-1.5 transition-all scale-100 active:scale-95"
                  id="contact-call-now"
                >
                  <PhoneCall className="h-4 w-4 shrink-0" />
                  <span>{lang === "ar" ? "اتصل بمستشارنا" : "Call Our Advisor"}</span>
                </a>

                {/* Mobile WhatsApp message channel */}
                <a
                  href="https://wa.me/9647507120332"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 hover:bg-green-600 text-white font-extrabold text-xs py-3.5 px-4 rounded-xl text-center shadow-md flex items-center justify-center space-x-1.5 transition-all scale-100 active:scale-95"
                  id="contact-whatsapp"
                >
                  <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.73-1.458L0 24zm11.954-2.038c1.776-.001 3.51-.476 5.015-1.376l.36-.214 3.73.977-.994-3.634.234-.373c.955-1.52 1.458-3.278 1.457-5.086.002-5.512-4.483-10-10-10C6.483 2.222 2 6.707 2 12.217c0 1.83.484 3.618 1.4 5.128l.244.4-.97 3.541 3.633-.953.379.225c1.474.876 3.154 1.339 4.875 1.339zm5.076-7.067c-.278-.139-1.644-.81-1.9-.904-.256-.093-.443-.14-.629.14-.187.279-.722.905-.884 1.09-.163.18-.326.204-.604.064-.277-.14-1.173-.432-2.235-1.379-.824-.736-1.38-1.645-1.542-1.925-.163-.28-.017-.431.121-.57.125-.124.278-.326.417-.489.14-.163.186-.279.278-.465.093-.186.046-.35-.023-.49-.07-.139-.629-1.517-.862-2.079-.227-.547-.457-.472-.629-.481-.162-.008-.349-.01-.536-.01s-.488.07-.743.349c-.256.279-.978.956-.978 2.332 0 1.377 1.002 2.705 1.142 2.89.14.187 1.973 3.012 4.779 4.22.668.288 1.19.46 1.597.59.672.212 1.284.182 1.768.11.54-.08 1.644-.672 1.877-1.321.233-.648.233-1.203.163-1.321-.07-.118-.256-.188-.535-.327z" />
                  </svg>
                  <span>{lang === "ar" ? "واتساب مباشر" : "WhatsApp Chat"}</span>
                </a>
              </div>

            </div>

          </div>

          {/* Right: Rich pricing/booking submit form */}
          <div className="lg:col-span-7" id="contact-form-col">
            <div className="bg-white rounded-3xl p-8 border border-brand-dark/5 shadow-lg relative overflow-hidden" id="contact-form-card">
              
              {/* Success Overlay Panel */}
              {isSubmitSuccess && (
                <div
                  className="absolute inset-0 bg-white/95 backdrop-blur-sm z-30 flex flex-col items-center justify-center p-8 text-center animate-in fade-in zoom-in-95 duration-300"
                  id="contact-success-frame"
                >
                  <div className="h-16 w-16 bg-green-100 text-green-500 rounded-full flex items-center justify-center mb-6 shadow-md border-2 border-green-200">
                    <CheckCircle2 className="h-9 w-9 text-green-600 animate-bounce" />
                  </div>
                  <h3 className="text-xl font-extrabold text-[#222222]">
                    {lang === "ar" ? "شكرًا لثقتكم بنا!" : "Quotation Request Filed!"}
                  </h3>
                  <p className="mt-4 text-sm text-brand-dark/75 leading-relaxed max-w-md font-light">
                    {t.contactSuccessMsg}
                  </p>
                  <button
                    onClick={() => setIsSubmitSuccess(false)}
                    className="mt-8 bg-brand-blue hover:bg-brand-blue/90 text-white text-xs font-bold py-3 px-6 rounded-xl transition-all"
                    type="button"
                    id="contact-success-back"
                  >
                    {lang === "ar" ? "تقديم طلب آخر" : "New Estimate Request"}
                  </button>
                </div>
              )}

              {/* Booking estimate form wrapper */}
              <form onSubmit={handleFormSubmit} className="space-y-5" id="estimate-form">
                
                <h3 className="text-lg font-extrabold text-[#222222] border-b border-brand-dark/5 pb-4">
                  {lang === "ar" ? "أرسل كشف معاينة وعرض سعر" : "Request a Premium Inspection & Quote"}
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4" id="form-top-row">
                  {/* Name field */}
                  <div className="flex flex-col" id="form-name-field">
                    <label className="text-xs font-bold text-brand-dark/70 mb-1.5">
                      {t.contactName} <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder={lang === "ar" ? "مثال: سيروان جلال" : "e.g. Sirwan Jalal"}
                      className="w-full bg-brand-light border border-brand-dark/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue transition-all"
                    />
                  </div>

                  {/* Phone field */}
                  <div className="flex flex-col" id="form-phone-field">
                    <label className="text-xs font-bold text-brand-dark/70 mb-1.5">
                      {t.contactPhone} <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="e.g. 0750 712 0332"
                      className="w-full bg-brand-light border border-brand-dark/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue transition-all text-left"
                      style={{ direction: "ltr" }}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4" id="form-mid-row">
                  {/* Email address field */}
                  <div className="flex flex-col" id="form-email-field">
                    <label className="text-xs font-bold text-brand-dark/70 mb-1.5">
                      {t.contactEmail}
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="e.g. office@example.com"
                      className="w-full bg-brand-light border border-brand-dark/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue transition-all text-left"
                      style={{ direction: "ltr", fontFamily: "'Inter', sans-serif" }}
                    />
                  </div>

                  {/* Dropdown service selector field */}
                  <div className="flex flex-col" id="form-service-field">
                    <label className="text-xs font-bold text-brand-dark/70 mb-1.5">
                      {t.contactServiceType}
                    </label>
                    <select
                      name="serviceType"
                      value={formData.serviceType}
                      onChange={handleInputChange}
                      className="w-full bg-brand-light border border-brand-dark/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue transition-all"
                    >
                      <option value="">{t.contactServiceSelect}</option>
                      {t.servicesList.map((service) => (
                        <option key={service.id} value={service.title}>
                          {service.title}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Message field */}
                <div className="flex flex-col" id="form-message-field">
                  <label className="text-xs font-bold text-brand-dark/70 mb-1.5">
                    {t.contactMessage}
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder={
                      lang === "ar"
                        ? "مثال: أريد تنظيف فيلا مكونة من طابقين بمساحة 400 متر مربع بعد انتهاء أعمال تشطيب الأصباغ..."
                        : "e.g. I want to request deep post-paint washing of a 400m² dual-floor villa..."
                    }
                    className="w-full bg-brand-light border border-brand-dark/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue transition-all resize-y"
                  />
                </div>

                {/* Action submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-brand-blue hover:bg-brand-blue/90 disabled:bg-brand-blue/50 text-white font-extrabold py-4 px-6 rounded-xl shadow-lg shadow-brand-blue/15 hover:shadow-brand-blue/25 scale-100 hover:scale-[1.01] active:scale-95 transition-all flex items-center justify-center space-x-2 text-sm sm:text-base select-none cursor-pointer"
                  id="submit-estimate-btn"
                >
                  <Send className={`h-4.5 w-4.5 ${lang === "ar" ? "rotate-180" : ""}`} />
                  <span className={lang === "ar" ? "mr-2" : "ml-2"}>
                    {isSubmitting
                      ? lang === "ar" ? "جاري الإرسال وتأكيد الطلب..." : "Submitting to Helpline..."
                      : t.contactBtnSend}
                  </span>
                </button>

              </form>
            </div>
          </div>

        </div>

        {/* Location Map Frame Block */}
        <div className="mt-16 bg-white p-4 rounded-3xl border border-brand-dark/5 shadow-lg" id="contact-map-block">
          <div className="mb-4 pr-3 text-right flex items-center" dir={lang === "ar" ? "rtl" : "ltr"} id="map-header">
            <span className="text-xs font-extrabold uppercase bg-brand-blue/5 border border-brand-blue/10 text-brand-blue px-3 py-1 rounded-full flex items-center space-x-1.5" style={{ direction: "ltr" }}>
              <div className="w-2 h-2 rounded-full bg-green-500 animate-ping inline-block" />
              <span>{lang === "ar" ? "تغطية أربيل" : "Erbil Operations Loop"}</span>
            </span>
            <span className={`text-xs text-brand-dark/60 font-bold block ${lang === "ar" ? "mr-3" : "ml-3"}`}>
              {t.contactMapTitle}
            </span>
          </div>

          {/* Interactive Google Map iframe */}
          <div className="w-full h-[350px] rounded-2xl overflow-hidden relative border border-brand-dark/5" id="real-google-map-iframe">
            <iframe
              src="https://maps.google.com/maps?q=STR%20Cleanservice%20Erbil&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="STR Cleanservice Erbil HQ Map Location"
              id="google-iframe-embed"
            />
          </div>

          {/* Button CTA to open Google Maps link directly */}
          <div className="mt-5 flex justify-center" id="open-gmaps-cta">
            <a
              href="https://maps.app.goo.gl/C1YHhxGWYCF7qbBq9"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 gap-2 bg-brand-blue hover:bg-brand-blue/90 text-white font-extrabold text-xs py-3.5 px-6 rounded-2xl shadow-md transition-all scale-100 hover:scale-[1.02] active:scale-95"
              id="gmaps-direct-link"
            >
              <MapPin className="h-4.5 w-4.5 shrink-0" />
              <span>
                {lang === "ar" ? "افتح الموقع الجغرافي بالكامل على خرائط Google" : "Open Full Location on Google Maps"}
              </span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
