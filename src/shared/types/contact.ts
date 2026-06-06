export interface ContactInfo {
  publicEmail: string;
  receiverEmail: string;
  phoneDisplay: string;
  phoneHref: string;
  whatsappNumber: string;
  instagramUrl: string;
  sessionsLabel: string;
}

export type ContactMessageKey =
  | "general"
  | "contactIntro"
  | "nutritionDiscovery"
  | "ayurvedaDiscovery";
