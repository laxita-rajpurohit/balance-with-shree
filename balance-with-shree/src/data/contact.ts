export const contactMessages = {
  general:
    "Hi Shree, I’d love to connect regarding your wellness offerings.",
  contactIntro:
    "Hi Shree, I feel drawn to your work and would love to begin my wellness journey with you.",
  nutritionDiscovery:
    "Hi! I’d like to book a Discovery Call session.",
  ayurvedaDiscovery:
    "Hi Shree, I’d like to book an Ayurveda Discovery Call for ₹300. Please let me know the next steps.",
} as const;

export const contactData = {
  publicEmail: "balancewithshree@gmail.com",
  receiverEmail: "balancewithshree@gmail.com",
  phoneDisplay: "+91 80870 48659",
  phoneHref: "tel:+918087048659",
  whatsappNumber: "918087048659",
  instagramUrl: "https://www.instagram.com/balancewithshree",
  sessionsLabel: "Online • One-on-One • Worldwide",
} as const;

export const buildWhatsAppUrl = (message = contactMessages.general) =>
  `https://wa.me/${contactData.whatsappNumber}?text=${encodeURIComponent(message)}`;

