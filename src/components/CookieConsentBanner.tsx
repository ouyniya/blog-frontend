// components/CookieConsentBanner.tsx
import { useEffect, useState } from "react";
import { useCookieConsentStore } from "@/stores/cookieConsentStore";
import { Button } from "./ui/button";
import Topic from "./Topic";

interface CookieConsentBannerProps {
  closeModal?: () => void; // optional สำหรับเปิดจาก button อื่น
}

const CookieConsentBanner = ({ closeModal }: CookieConsentBannerProps) => {
  const {
    analytics,
    marketing,
    setConsent,
    loadFromStorage,
    initializeCookieBlocking,
  } = useCookieConsentStore();
  const [showBanner, setShowBanner] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    loadFromStorage();
    const stored = localStorage.getItem("cookieConsent");
    if (!stored) setShowBanner(true);

    // Initialize cookie blocking based on current consent
    initializeCookieBlocking();

    // If closeModal prop is provided, it means we're opening from external button
    if (closeModal) {
      setShowModal(true);
    }
  }, [closeModal, loadFromStorage, initializeCookieBlocking]);

  const handleAcceptAll = () => {
    setConsent("analytics", true);
    setConsent("marketing", true);
    setShowBanner(false);
  };

  const handleDeclineAll = () => {
    setConsent("analytics", false);
    setConsent("marketing", false);
    setShowBanner(false);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    if (closeModal) closeModal(); // ถ้าเปิดมาจาก Floating Button
  };

  return (
    <>
      {showBanner && (
        <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 max-w-3xl w-full bg-white/45 border border-white/30 shadow-sm rounded-full py-4 px-4 flex flex-col sm:flex-row items-center gap-4 backdrop-blur-sm">
          <p className="text-gray-700 text-sm flex-1 ml-4">
            We use cookies to improve your experience. Manage your settings or
            accept all.
          </p>
          <div className="flex gap-2">
            <Button
              onClick={handleAcceptAll}
              className="px-4 py-6 bg-sky-600 text-white rounded-full hover:bg-sky-700 transition hover:cursor-pointer duration-300"
            >
              Accept All
            </Button>
            <Button
              onClick={() => setShowModal(true)}
              className="px-4 py-6 rounded-full bg-sky-100 hover:bg-sky-200 text-sky-800 transition hover:cursor-pointer duration-300"
            >
              Settings
            </Button>
            <Button
              onClick={handleDeclineAll}
              className="px-4 py-6  rounded-full bg-sky-100 hover:bg-sky-200 text-sky-800 transition hover:cursor-pointer duration-300"
            >
              Decline All
            </Button>
          </div>
        </div>
      )}

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-sky-50/30 backdrop-blur-sm">
          <div className="bg-white border-2 border-sky-300/45 rounded-[50px] shadow-lg w-11/12 sm:w-120 p-12 flex flex-col gap-4">
            <Topic
              topic="Cookie Settings"
              desc="Adjust your cookie preferences below."
            />

            <div className="flex items-center justify-between">
              <span>Essential (Required)</span>
              <input type="checkbox" checked disabled />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex flex-col">
                <span>Analytics</span>
                {!analytics && (
                  <span className="text-xs text-red-600">🔒 Blocked</span>
                )}
              </div>
              <input
                type="checkbox"
                checked={analytics}
                onChange={(e) => setConsent("analytics", e.target.checked)}
              />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex flex-col">
                <span>Marketing</span>
                {!marketing && (
                  <span className="text-xs text-red-600">🔒 Blocked</span>
                )}
              </div>
              <input
                type="checkbox"
                checked={marketing}
                onChange={(e) => setConsent("marketing", e.target.checked)}
              />
            </div>

            <div className="flex justify-end gap-2 mt-4">
              <button
                onClick={handleCloseModal}
                className="px-4 py-2 border border-gray-300 rounded-full hover:bg-gray-100 transition hover:cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CookieConsentBanner;
