// Sentry Configuration for Error Tracking
export const initSentry = () => {
  if (typeof window !== 'undefined') {
    // Placeholder para Sentry - será configurado com DSN real
    console.log('Sentry initialized (placeholder)');
    // import * as Sentry from "@sentry/react";
    // Sentry.init({
    //   dsn: "YOUR_SENTRY_DSN",
    //   environment: process.env.NODE_ENV,
    //   tracesSampleRate: 1.0,
    // });
  }
};

export const captureException = (error, context = {}) => {
  console.error('Error captured:', error, context);
  // Sentry.captureException(error, { contexts: { custom: context } });
};

export const captureMessage = (message, level = 'info') => {
  console.log(`[${level}] ${message}`);
  // Sentry.captureMessage(message, level);
};

export default { initSentry, captureException, captureMessage };
