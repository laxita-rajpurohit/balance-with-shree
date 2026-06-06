import type { Testimonial } from "../types/reviews";
import { siteMedia } from "./media";

export const nutritionTestimonials: readonly Testimonial[] = [
  {
    name: "Harshada Deo",
    handle: "",
    image: siteMedia.reviews.clientPhotos.harshadaDeo.src,
    alt: siteMedia.reviews.clientPhotos.harshadaDeo.alt,
    text: "Dhanashree’s sessions feel very calm and personal. She explains everything in a simple way and helped me become more consistent with my yoga practice.",
  },
  {
    name: "Mohini Sonak",
    handle: "",
    image: siteMedia.reviews.clientPhotos.mohiniSonak.src,
    alt: siteMedia.reviews.clientPhotos.mohiniSonak.alt,
    text: "Her approach is gentle, patient, and very supportive. I felt comfortable asking questions and slowly building healthier habits.",
  },
  {
    name: "Kavita Patel",
    handle: "",
    image: siteMedia.reviews.clientPhotos.kavitaPatel.src,
    alt: siteMedia.reviews.clientPhotos.kavitaPatel.alt,
    text: "I really liked how practical her guidance was. The yoga and lifestyle suggestions felt easy to follow and suited my daily routine.",
  },
  {
    name: "Mandar Athavale",
    handle: "@athavalemandar",
    image: siteMedia.testimonials.defaultProfile,
    alt: "Client review photo of Mandar Athavale",
    text: "Everyday yoga practice for the last 03 months has improved my body flexibility and concentration. Dhanashree guides well and helps improve each asana. I highly recommend her yoga sessions.",
  },
];
