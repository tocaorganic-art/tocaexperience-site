// Webhook Configuration for Critical Alerts
export const sendWebhook = async (event, data) => {
  try {
    // Placeholder para webhooks - será configurado com URLs reais
    const webhookUrl = process.env.REACT_APP_WEBHOOK_URL;
    
    if (!webhookUrl) {
      console.warn('Webhook URL not configured');
      return;
    }

    const payload = {
      event,
      data,
      timestamp: new Date().toISOString(),
      environment: process.env.NODE_ENV,
    };

    // Exemplo para Discord/Slack
    // await fetch(webhookUrl, {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({
    //     text: `[${event}] ${JSON.stringify(data)}`
    //   })
    // });

    console.log('Webhook sent:', payload);
  } catch (error) {
    console.error('Error sending webhook:', error);
  }
};

export const alertCriticalError = (error) => {
  sendWebhook('CRITICAL_ERROR', {
    message: error.message,
    stack: error.stack,
    url: window.location.href
  });
};

export const alertConversion = (conversionData) => {
  sendWebhook('CONVERSION', conversionData);
};

export default { sendWebhook, alertCriticalError, alertConversion };
