import type { NavigationCta, NavigationItem } from "../types/navigation";

export const navigationItems: readonly NavigationItem[] = [
  { label: "HOME", to: "/" },
  { label: "NUTRITION", to: "/nutrition" },
  { label: "YOGA", to: "/yoga" },
  { label: "AYURVEDA", to: "/ayurveda" },
  { label: "CONTACT", to: "/contact" },
  { label: "ABOUT", to: "/about" },
];

export const navigationCta: NavigationCta = {
  label: "Book Consultation",
  to: "/contact",
};

