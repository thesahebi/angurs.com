import React, { useEffect, useState } from "react";

const CookieConsent: React.FC = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem("cookieConsent", "all");
    setShowBanner(false);
  };

  const handleNecessaryOnly = () => {
    localStorage.setItem("cookieConsent", "necessary");
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-900 text-white p-4 shadow-lg z-50 flex flex-col md:flex-row items-center justify-between gap-3">
      <p className="text-sm">
        By clicking “Accept all cookies”, you agree we can store cookies on your
        device and disclose information in accordance with our{" "}
        <a href="/cookie-policy" className="underline">
          Cookie Policy
        </a>
        .
      </p>
      <div className="flex gap-2">
        <button
          onClick={handleAcceptAll}
          className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded-lg"
        >
          Accept all cookies
        </button>
        <button
          onClick={handleNecessaryOnly}
          className="bg-gray-700 hover:bg-gray-800 text-white px-3 py-1 rounded-lg"
        >
          Necessary cookies only
        </button>
      </div>
    </div>
  );
};

export default CookieConsent;
