// store/cookieConsentStore.ts
import { create } from "zustand";
import { cookieManager } from "@/utils/cookieManager";

interface CookieConsentState {
  essential: boolean;   // จำเป็น ต้องเปิดตลอด
  analytics: boolean;
  marketing: boolean;
  setConsent: (type: "essential" | "analytics" | "marketing", value: boolean) => void;
  loadFromStorage: () => void;
  initializeCookieBlocking: () => void;
}

export const useCookieConsentStore = create<CookieConsentState>((set) => ({
  essential: true, // จำเป็นต้องเปิดเสมอ
  analytics: false,
  marketing: false,
  setConsent: (type, value) => {
    set((state) => {
      const newState = { ...state, [type]: value };
      
      // Handle cookie blocking/unblocking
      if (type === "analytics") {
        if (value) {
          cookieManager.unblockAnalytics();
        } else {
          cookieManager.blockAnalytics();
        }
      }
      
      if (type === "marketing") {
        if (value) {
          cookieManager.unblockMarketing();
        } else {
          cookieManager.blockMarketing();
        }
      }
      
      // save all to localStorage
      localStorage.setItem("cookieConsent", JSON.stringify({
        essential: newState.essential,
        analytics: newState.analytics,
        marketing: newState.marketing,
      }));
      return newState;
    });
  },
  loadFromStorage: () => {
    const stored = localStorage.getItem("cookieConsent");
    if (stored) {
      const parsed = JSON.parse(stored);
      set({
        essential: parsed.essential ?? true,
        analytics: parsed.analytics ?? false,
        marketing: parsed.marketing ?? false,
      });
    }
  },
  initializeCookieBlocking: () => {
    const { analytics, marketing } = useCookieConsentStore.getState();
    
    // Initialize cookie blocking based on current consent
    if (!analytics) {
      cookieManager.blockAnalytics();
    }
    
    if (!marketing) {
      cookieManager.blockMarketing();
    }
  },
}));
