export const EMAILJS_CONFIG = {
  SERVICE_ID: import.meta.env.VITE_EMAILJS_SERVICE_ID ?? "",
  TEMPLATE_ID: import.meta.env.VITE_EMAILJS_TEMPLATE_ID ?? "",
  PUBLIC_KEY: import.meta.env.VITE_EMAILJS_PUBLIC_KEY ?? "",
  RECEIVER_EMAIL:
    import.meta.env.VITE_EMAIL_RECEIVER ?? "balancewithshree@gmail.com",
} as const;

export const isEmailJsConfigured =
  Boolean(EMAILJS_CONFIG.SERVICE_ID) &&
  Boolean(EMAILJS_CONFIG.TEMPLATE_ID) &&
  Boolean(EMAILJS_CONFIG.PUBLIC_KEY);
