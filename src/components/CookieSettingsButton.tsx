import { useState } from "react";
import CookieConsentBanner from "./CookieConsentBanner";
import { Cookie } from "lucide-react";

const CookieSettingsButton = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-4 right-4 z-50 bg-sky-200/30 text-white px-4 py-4 rounded-full shadow-lg hover:bg-sky-500/30 transition hover:cursor-pointer backdrop-blur-md"
      >
        <Cookie size={45} className="text-sky-500/75" />
      </button>
      {open && <CookieConsentBanner closeModal={() => setOpen(false)} />}
    </>
  );
};

export default CookieSettingsButton;
