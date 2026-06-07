import type { ImageAsset, ResponsiveImageAsset, VideoAsset, CertificateAsset } from "../types/media";

import homeHeroWatercolorDesktop from "../../assets/home/home-hero-watercolor-desktop.webp";
import homeHeroWatercolorMobile from "../../assets/home/home-hero-watercolor-mobile.webp";
import homeAboutDhanashree from "../../assets/home/home-about-dhanashree.webp";
import homeYogaServiceWatercolor from "../../assets/home/home-yoga-service-watercolor-2.webp";
import homeNutritionBowlWatercolor from "../../assets/home/home-nutrition-bowl-watercolor.webp";
import homeAyurvedaMortarWatercolor from "../../assets/home/home-ayurveda-mortar-watercolor.webp";
import aboutJourneyBeginning from "../../assets/about/about-journey-beginning-watercolor.webp";
import aboutJourneyWakeup from "../../assets/about/about-journey-wakeup-watercolor.webp";
import aboutJourneyHealing from "../../assets/about/about-journey-healing-watercolor.webp";
import aboutJourneyAwareness from "../../assets/about/about-journey-awareness-watercolor.webp";
import aboutJourneyPurpose from "../../assets/about/about-journey-purpose-watercolor.webp";
import yogaHeroNew from "../../assets/yoga/IMG_2522.PNG";
import nutritionHeroWatercolorMobile from "../../assets/nutrition/nutrition-hero-watercolor-mobile.webp";
import nutritionHeroWatercolorDesktop from "../../assets/nutrition/nutrition-hero-watercolor-desktop.webp";
import ayurvedaHeroWatercolorMobile from "../../assets/Ayurveda/ayurveda-hero-watercolor-mobile.webp";
import ayurvedaHeroWatercolorDesktop from "../../assets/Ayurveda/ayurveda-hero-watercolor-desktop.webp";
import reviewHarshadaDeo from "../../assets/reviews/review-harshada-deo.JPG";
import reviewKavitaPatel from "../../assets/reviews/review-kavita-patel.JPG";
import reviewMohiniSonak from "../../assets/reviews/review-mohini-sonak.JPG";
import degreeCertificateDhanashree from "../../assets/certificates/degree-certificate-dhanashree.webp";

const clientReviewVideo1: VideoAsset = {
  id: "client-review-video-1",
  title: "Client Review",
  type: "video",
  src: "https://res.cloudinary.com/drjzugsyo/video/upload/v1780652409/new_client-review-video-1_c24p5j.mp4",
  poster:
    "https://res.cloudinary.com/drjzugsyo/video/upload/so_0/v1780652409/new_client-review-video-1_c24p5j.jpg",
  alt: "Client video review for Balance with Shree",
};

/*
 * Centralized media map for the current production-safe assets.
 * TODO: Replace selected image slots with approved watercolor illustrations in Phase 3.
 */
export const siteMedia = {
  brand: {
    logo: "https://res.cloudinary.com/drjzugsyo/image/upload/v1771263278/logo_aiaixs.png",
  },
  home: {
    homeHeroWatercolorIllustration: {
      mobile: homeHeroWatercolorMobile,
      desktop: homeHeroWatercolorDesktop,
      alt: "Watercolor illustration of a woman meditating in front of mountains and a glowing moon",
    } as ResponsiveImageAsset,
    homeAboutDhanashree: {
      src: homeAboutDhanashree,
      alt: "Dhanashree seated in meditation outdoors",
    } as ImageAsset,
    homeYogaServiceWatercolor: {
      src: homeYogaServiceWatercolor,
      alt: "Watercolor illustration representing yoga practice in nature",
    } as ImageAsset,
    homeNutritionBowlWatercolor: {
      src: homeNutritionBowlWatercolor,
      alt: "Watercolor illustration of a nourishing bowl with fresh vegetables and grains",
    } as ImageAsset,
    homeAyurvedaMortarWatercolor: {
      src: homeAyurvedaMortarWatercolor,
      alt: "Watercolor illustration of Ayurvedic herbs, oil, and mortar and pestle",
    } as ImageAsset,
    heroSlides: [
      "https://res.cloudinary.com/drjzugsyo/image/upload/f_auto,q_auto,w_1200/shree5_doyho6.webp",
      "https://res.cloudinary.com/drjzugsyo/image/upload/f_auto,q_auto,w_1200/shree4_rnpdvt.webp",
    ],
    journeyPortrait:
      "https://res.cloudinary.com/drjzugsyo/image/upload/v1771263067/shree7_nq8mg9.jpg",
    yogaPreview:
      "https://res.cloudinary.com/drjzugsyo/image/upload/v1771263209/shree8_navizo.jpg",
    heroIllustration: null,
  },
  about: {
    illustration: null,
    aboutHeroDhanashree: {
      src: homeAboutDhanashree,
      alt: "Dhanashree seated in meditation outdoors",
    } as ImageAsset,
    journeyBeginning: {
      src: aboutJourneyBeginning,
      alt: "Watercolor illustration for the beginning of Dhanashree's healing journey",
    } as ImageAsset,
    journeyWakeup: {
      src: aboutJourneyWakeup,
      alt: "Watercolor illustration for the wake-up call phase of Dhanashree's health journey",
    } as ImageAsset,
    journeyHealing: {
      src: aboutJourneyHealing,
      alt: "Watercolor illustration for healing through food, yoga, and belief",
    } as ImageAsset,
    journeyAwareness: {
      src: aboutJourneyAwareness,
      alt: "Watercolor illustration for choosing awareness over neglect",
    } as ImageAsset,
    journeyPurpose: {
      src: aboutJourneyPurpose,
      alt: "Watercolor illustration for turning a personal journey into a purpose",
    } as ImageAsset,
    journeyTimeline: {
      step1:
        "https://res.cloudinary.com/drjzugsyo/image/upload/f_auto,q_auto,w_600/self1_uguqlb.jpg",
      step2:
        "https://res.cloudinary.com/drjzugsyo/image/upload/f_auto,q_auto,w_600/self2_e2xknl.jpg",
      step3:
        "https://res.cloudinary.com/drjzugsyo/image/upload/f_auto,q_auto,w_600/self3_ml3idz.jpg",
    },
    certifications: [
      {
        src: "https://res.cloudinary.com/drjzugsyo/image/upload/v1771263583/certificate_carousel_1_bsfcoq.jpg",
        title: "Medical Yoga Teacher Certification",
        alt: "Medical yoga teacher certification for Balance with Shree",
      },
      {
        src: "https://res.cloudinary.com/drjzugsyo/image/upload/v1771263574/certificate2_wl3vy9.jpg",
        title: "Parental Yoga Certification",
        alt: "Parental yoga certification for Balance with Shree",
      },
      {
        src: "https://res.cloudinary.com/drjzugsyo/image/upload/v1771263573/certificate3_lkbzmr.jpg",
        title: "Hatha and Ashtanga Yoga Certification",
        alt: "Hatha and Ashtanga Yoga certification for Balance with Shree",
      },
      {
        src: degreeCertificateDhanashree,
        title: "Master of Science in Nutrition and Dietetics",
        alt: "Degree certificate for Master of Science in Nutrition and Dietetics",
      },
    ] as CertificateAsset[],
  },
  yoga: {
    illustration: null,
    heroWatercolor: {
      mobile: yogaHeroNew,
      desktop: yogaHeroNew,
      alt: "Yoga practice in a calm setting",
    } as ResponsiveImageAsset,
    hero: "https://res.cloudinary.com/drjzugsyo/image/upload/v1771264109/yogaimage2_vid0yc.jpg",
    gallery: [
      "https://res.cloudinary.com/drjzugsyo/image/upload/v1771263837/yogaimage1_t1hgpj.jpg",
      "https://res.cloudinary.com/drjzugsyo/image/upload/v1771264338/shree2_i3c9mu.jpg",
      "https://res.cloudinary.com/drjzugsyo/image/upload/v1771263548/shree3_gveuvh.jpg",
    ],
    transformations: [
      "https://res.cloudinary.com/drjzugsyo/image/upload/v1771263544/transform4_uqtnrd.jpg",
      "https://res.cloudinary.com/drjzugsyo/image/upload/v1771263547/transform2_zlouig.jpg",
      "https://res.cloudinary.com/drjzugsyo/image/upload/v1771263573/transform3_bzxtx8.jpg",
    ],
    videos: [
      clientReviewVideo1,
      {
        id: "client-review-video-2",
        title: "Client Story",
        type: "video",
        src: "https://res.cloudinary.com/drjzugsyo/video/upload/v1770745584/IMG_7633_1_qooflf.mp4",
        poster:
          "https://res.cloudinary.com/drjzugsyo/video/upload/so_0/v1770745584/IMG_7633_1_qooflf.jpg",
        alt: "Client story video for Balance with Shree",
      },
      {
        id: "client-review-video-3",
        title: "Client Story",
        type: "video",
        src: "https://res.cloudinary.com/drjzugsyo/video/upload/v1770745298/IMG_7634_kapmzh.mp4",
        poster:
          "https://res.cloudinary.com/drjzugsyo/video/upload/so_0/v1770745298/IMG_7634_kapmzh.jpg",
        alt: "Client story video for Balance with Shree",
      },
    ] as VideoAsset[],
  },
  nutrition: {
    illustration: null,
    heroWatercolor: {
      mobile: nutritionHeroWatercolorMobile,
      desktop: nutritionHeroWatercolorDesktop,
      alt: "Watercolor illustration of mindful nutrition with a food bowl and meditative figure",
    } as ResponsiveImageAsset,
    hero: "https://res.cloudinary.com/drjzugsyo/image/upload/v1771263545/shree1_bxjnwa.jpg",
    bio: "https://res.cloudinary.com/drjzugsyo/image/upload/v1771263597/journey_jcc4im.jpg",
  },
  ayurveda: {
    illustration: null,
    heroWatercolor: {
      mobile: ayurvedaHeroWatercolorMobile,
      desktop: ayurvedaHeroWatercolorDesktop,
      alt: "Watercolor illustration of Ayurvedic herbs, oils, and traditional wellness elements in a calm natural setting",
    } as ResponsiveImageAsset,
  },
  reviews: {
    clientReviewVideo1,
    clientPhotos: {
      harshadaDeo: {
        src: reviewHarshadaDeo,
        alt: "Client review photo of Harshada Deo",
      } as ImageAsset,
      kavitaPatel: {
        src: reviewKavitaPatel,
        alt: "Client review photo of Kavita Patel",
      } as ImageAsset,
      mohiniSonak: {
        src: reviewMohiniSonak,
        alt: "Client review photo of Mohini Sonak",
      } as ImageAsset,
    },
  },
  testimonials: {
    defaultProfile: "/reviews/mander.jpeg",
  },
} as const;
