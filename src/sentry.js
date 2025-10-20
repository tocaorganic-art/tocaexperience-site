import * as Sentry from "@sentry/react";

// Sentry Configuration for Error Tracking
export const initSentry = () => {
  if (typeof window !== 'undefined') {
    Sentry.init({
      dsn: "https://a3450fe4d6361063282f74856d57ee92@o4510220324372481.ingest.us.sentry.io/4510220332367872",
      environment: process.env.NODE_ENV,
      tracesSampleRate: 1.0,
    });
  }
};

export const captureException = (error, context = {}) => {
  Sentry.captureException(error, { contexts: { custom: context } });
};

export const captureMessage = (message, level = 'info') => {
  Sentry.captureMessage(message, level);
};

export default { initSentry, captureException, captureMessage };

