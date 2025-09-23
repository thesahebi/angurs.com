import React, { useEffect, useState } from "react";

const CookieConsent: React.FC = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem("cookieConsent");
    const consentTimestamp = localStorage.getItem("cookieConsentTimestamp");
    
    // If no consent or consent is older than 1 year, show banner
    if (!consent || !consentTimestamp) {
      setShowBanner(true);
      // Add a small delay for smooth animation
      setTimeout(() => setIsVisible(true), 100);
    } else {
      // Check if consent is older than 1 year (365 days)
      const oneYearAgo = Date.now() - (365 * 24 * 60 * 60 * 1000);
      if (parseInt(consentTimestamp) < oneYearAgo) {
        setShowBanner(true);
        setTimeout(() => setIsVisible(true), 100);
      }
    }
  }, []);

  const handleAcceptAll = () => {
    const timestamp = Date.now().toString();
    localStorage.setItem("cookieConsent", "all");
    localStorage.setItem("cookieConsentTimestamp", timestamp);
    setIsVisible(false);
    setTimeout(() => setShowBanner(false), 300);
  };

  const handleNecessaryOnly = () => {
    const timestamp = Date.now().toString();
    localStorage.setItem("cookieConsent", "necessary");
    localStorage.setItem("cookieConsentTimestamp", timestamp);
    setIsVisible(false);
    setTimeout(() => setShowBanner(false), 300);
  };

  if (!showBanner) return null;

  return (
    <div 
      className={`fixed bottom-0 left-0 right-0 bg-[#0A0A0A]/95 backdrop-blur-md border-t border-[#1E293B]/50 text-[#e7e7e7] p-4 shadow-2xl z-50 transition-all duration-300 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
      }`}
      role="dialog"
      aria-labelledby="cookie-consent-title"
      aria-describedby="cookie-consent-description"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex-1">
          <h2 id="cookie-consent-title" className="sr-only">Cookie Consent</h2>
          <p id="cookie-consent-description" className="text-sm md:text-base text-[#e7e7e7] leading-relaxed">
            By clicking "Accept all cookies", you agree we can store cookies on your
            device and disclose information in accordance with our{" "}
            <a 
              href="/#/cookie-policy" 
              className="text-[#e95420] hover:text-[#ff6b35] underline transition-colors duration-200"
            >
              Cookie Policy
            </a>
            .
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3">
          <button
            onClick={handleAcceptAll}
            className="px-4 py-2 text-white text-sm font-semibold rounded-lg border border-white/20 transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white/80"
            style={{ backgroundColor: '#1e40af' }}
            aria-label="Accept all cookies and tracking"
          >
            Accept all cookies
          </button>
          <button
            onClick={handleNecessaryOnly}
            className="px-4 py-2 bg-[#1E293B] hover:bg-[#1E293B]/80 text-[#e7e7e7] text-sm font-semibold rounded-lg border border-[#1E293B] hover:border-[#e95420]/50 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#1E293B]/50"
            aria-label="Accept only necessary cookies"
          >
            Necessary cookies only
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
