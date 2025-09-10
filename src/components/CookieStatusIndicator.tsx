// components/CookieStatusIndicator.tsx
import { useCookieConsentStore } from "@/stores/cookieConsentStore";

const CookieStatusIndicator = () => {
  const { analytics, marketing } = useCookieConsentStore();

  // Only show if any cookies are blocked
  if (analytics && marketing) return null;

  return (
    <div className="fixed top-4 right-4 z-40 bg-yellow-100 border border-yellow-300 rounded-lg p-3 shadow-lg max-w-xs">
      <div className="flex items-start gap-2">
        <div className="text-yellow-600">🔒</div>
        <div className="text-sm">
          <div className="font-medium text-yellow-800">Cookies Blocked</div>
          <div className="text-yellow-700 mt-1">
            {!analytics && <div>• Analytics cookies blocked</div>}
            {!marketing && <div>• Marketing cookies blocked</div>}
          </div>
          <div className="text-xs text-yellow-600 mt-2">
            Click "Cookie Settings" to manage preferences
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieStatusIndicator;
