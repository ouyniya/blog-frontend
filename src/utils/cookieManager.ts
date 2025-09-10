import { useCookieConsentStore } from "@/stores/cookieConsentStore";

// Cookie blocking utilities
export class CookieManager {
  private static instance: CookieManager;
  private analyticsBlocked = false;
  private marketingBlocked = false;

  static getInstance(): CookieManager {
    if (!CookieManager.instance) {
      CookieManager.instance = new CookieManager();
    }
    return CookieManager.instance;
  }

  // Initialize cookie blocking based on consent
  initialize() {
    try {
      const { analytics, marketing } = useCookieConsentStore.getState();
      
      if (!analytics) {
        this.blockAnalytics();
      }
      
      if (!marketing) {
        this.blockMarketing();
      }
    } catch (error) {
      console.warn('Cookie manager initialization failed:', error);
    }
  }

  // Block Analytics cookies
  blockAnalytics() {
    this.analyticsBlocked = true;
    
    // Block Google Analytics
    this.blockScript('google-analytics');
    this.blockScript('gtag');
    this.blockScript('ga');
    
    // Block other analytics scripts
    this.blockScript('mixpanel');
    this.blockScript('amplitude');
    this.blockScript('hotjar');
    
    console.log('Analytics cookies blocked');
  }

  // Block Marketing cookies
  blockMarketing() {
    this.marketingBlocked = true;
    
    // Block Facebook Pixel
    this.blockScript('facebook');
    this.blockScript('fbq');
    
    // Block Google Ads
    this.blockScript('google-ads');
    this.blockScript('gtag');
    
    // Block other marketing scripts
    this.blockScript('linkedin');
    this.blockScript('twitter');
    
    console.log('Marketing cookies blocked');
  }

  // Unblock Analytics cookies
  unblockAnalytics() {
    this.analyticsBlocked = false;
    console.log('Analytics cookies unblocked');
  }

  // Unblock Marketing cookies
  unblockMarketing() {
    this.marketingBlocked = false;
    console.log('Marketing cookies unblocked');
  }

  // Block specific script by identifier
  private blockScript(identifier: string) {
    try {
      // Block scripts by intercepting script tags
      const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
          mutation.addedNodes.forEach((node) => {
            if (node.nodeType === Node.ELEMENT_NODE) {
              const element = node as Element;
              if (element.tagName.toLowerCase() === 'script') {
                const script = element as HTMLScriptElement;
                if (script.src && this.shouldBlockScript(script.src, identifier)) {
                  console.log(`Blocked script: ${script.src}`);
                  script.remove();
                }
              }
            }
          });
        });
      });

      // Only observe if document.body exists
      if (document.body) {
        observer.observe(document.body, {
          childList: true,
          subtree: true
        });
      } else {
        // Wait for DOM to be ready
        document.addEventListener('DOMContentLoaded', () => {
          if (document.body) {
            observer.observe(document.body, {
              childList: true,
              subtree: true
            });
          }
        });
      }
    } catch (error) {
      console.warn('Script blocking failed:', error);
    }
  }

  // Check if script should be blocked
  private shouldBlockScript(src: string, identifier: string): boolean {
    const srcLower = src.toLowerCase();
    
    if (identifier === 'google-analytics' || identifier === 'gtag' || identifier === 'ga') {
      return this.analyticsBlocked && (
        srcLower.includes('google-analytics') ||
        srcLower.includes('googletagmanager') ||
        srcLower.includes('gtag') ||
        srcLower.includes('analytics')
      );
    }
    
    if (identifier === 'facebook' || identifier === 'fbq') {
      return this.marketingBlocked && (
        srcLower.includes('facebook') ||
        srcLower.includes('fbq') ||
        srcLower.includes('connect.facebook.net')
      );
    }
    
    if (identifier === 'google-ads') {
      return this.marketingBlocked && (
        srcLower.includes('googleads') ||
        srcLower.includes('doubleclick')
      );
    }
    
    return false;
  }

  // Get blocking status
  getStatus() {
    return {
      analyticsBlocked: this.analyticsBlocked,
      marketingBlocked: this.marketingBlocked
    };
  }
}

// Export singleton instance
export const cookieManager = CookieManager.getInstance();
