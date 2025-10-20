// Google Analytics 4 Configuration
export const initGA = () => {
  if (typeof window !== 'undefined') {
    // Placeholder para GA4 - será configurado com ID real
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag("config", "G-MVQ89NXDMN");
  }
};

// Custom events tracking
export const trackEvent = (eventName, eventParams = {}) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, eventParams);
  }
};

// Track page views
export const trackPageView = (pagePath) => {
  trackEvent('page_view', { page_path: pagePath });
};

// Track conversions
export const trackConversion = (conversionType, value = null) => {
  trackEvent('conversion', {
    conversion_type: conversionType,
    value: value,
    timestamp: new Date().toISOString()
  });
};

// Track button clicks
export const trackButtonClick = (buttonName) => {
  trackEvent('button_click', { button_name: buttonName });
};

// Track form submissions
export const trackFormSubmit = (formName) => {
  trackEvent('form_submit', { form_name: formName });
};

export default { initGA, trackEvent, trackPageView, trackConversion, trackButtonClick, trackFormSubmit };
