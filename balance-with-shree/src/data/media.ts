import homeHeroWatercolorDesktop from "../assets/home/home-hero-watercolor-desktop.png";
import homeHeroWatercolorMobile from "../assets/home/home-hero-watercolor-mobile.png";
import homeAboutDhanashree from "../assets/home/home-about-dhanashree.png";
import homeYogaServiceWatercolor from "../assets/home/home-yoga-service-watercolor-2.png";
import homeNutritionBowlWatercolor from "../assets/home/home-nutrition-bowl-watercolor.png";
import homeAyurvedaMortarWatercolor from "../assets/home/home-ayurveda-mortar-watercolor.png";
import aboutJourneyBeginning from "../assets/about/about-journey-beginning-watercolor.png";
import aboutJourneyWakeup from "../assets/about/about-journey-wakeup-watercolor.png";
import aboutJourneyHealing from "../assets/about/about-journey-healing-watercolor.png";
import aboutJourneyAwareness from "../assets/about/about-journey-awareness-watercolor.png";
import aboutJourneyPurpose from "../assets/about/about-journey-purpose-watercolor.png";
import yogaHeroWatercolorMobile from "../assets/yoga/yoga-hero-watercolor-mobile.png";
import yogaHeroWatercolorDesktop from "../assets/yoga/yoga-hero-watercolor-desktop.png";

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
    },
    homeAboutDhanashree: {
      src: homeAboutDhanashree,
      alt: "Dhanashree seated in meditation outdoors",
    },
    homeYogaServiceWatercolor: {
      src: homeYogaServiceWatercolor,
      alt: "Watercolor illustration representing yoga practice in nature",
    },
    homeNutritionBowlWatercolor: {
      src: homeNutritionBowlWatercolor,
      alt: "Watercolor illustration of a nourishing bowl with fresh vegetables and grains",
    },
    homeAyurvedaMortarWatercolor: {
      src: homeAyurvedaMortarWatercolor,
      alt: "Watercolor illustration of Ayurvedic herbs, oil, and mortar and pestle",
    },
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
    },
    journeyBeginning: {
      src: aboutJourneyBeginning,
      alt: "Watercolor illustration for the beginning of Dhanashree's healing journey",
    },
    journeyWakeup: {
      src: aboutJourneyWakeup,
      alt: "Watercolor illustration for the wake-up call phase of Dhanashree's health journey",
    },
    journeyHealing: {
      src: aboutJourneyHealing,
      alt: "Watercolor illustration for healing through food, yoga, and belief",
    },
    journeyAwareness: {
      src: aboutJourneyAwareness,
      alt: "Watercolor illustration for choosing awareness over neglect",
    },
    journeyPurpose: {
      src: aboutJourneyPurpose,
      alt: "Watercolor illustration for turning a personal journey into a purpose",
    },
    journeyTimeline: {
      step1:
        "https://res.cloudinary.com/drjzugsyo/image/upload/f_auto,q_auto,w_600/self1_uguqlb.jpg",
      step2:
        "https://res.cloudinary.com/drjzugsyo/image/upload/f_auto,q_auto,w_600/self2_e2xknl.jpg",
      step3:
        "https://res.cloudinary.com/drjzugsyo/image/upload/f_auto,q_auto,w_600/self3_ml3idz.jpg",
    },
    certifications: [
      "https://res.cloudinary.com/drjzugsyo/image/upload/v1771263583/certificate_carousel_1_bsfcoq.jpg",
      "https://res.cloudinary.com/drjzugsyo/image/upload/v1771263574/certificate2_wl3vy9.jpg",
      "https://res.cloudinary.com/drjzugsyo/image/upload/v1771263573/certificate3_lkbzmr.jpg",
    ],
  },
  yoga: {
    illustration: null,
    heroWatercolor: {
      mobile: yogaHeroWatercolorMobile,
      desktop: yogaHeroWatercolorDesktop,
      alt: "Watercolor illustration of a woman practicing yoga in a calm natural setting",
    },
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
      "https://res.cloudinary.com/drjzugsyo/video/upload/v1770745584/IMG_7633_1_qooflf.mp4",
      "https://res.cloudinary.com/drjzugsyo/video/upload/v1770745298/IMG_7634_kapmzh.mp4",
    ],
  },
  nutrition: {
    illustration: null,
    hero: "https://res.cloudinary.com/drjzugsyo/image/upload/v1771263545/shree1_bxjnwa.jpg",
    bio: "https://res.cloudinary.com/drjzugsyo/image/upload/v1771263597/journey_jcc4im.jpg",
  },
  ayurveda: {
    illustration: null,
  },
  testimonials: {
    defaultProfile: "/reviews/mander.jpeg",
  },
} as const;
