import { useEffect, useRef } from "react";
import { Navbar } from "../shared/layout/Navbar";
import AppRoutes from "../Routes/AppRoutes";
import gsap from "gsap";
import Footer from "../shared/layout/Footer";
import WhatsAppFloating from "../shared/layout/WhatsAppFloating";

const leafMotionConfig = {
  desktop: {
    entranceDistance: 120,
    leftOpacity: 0.22,
    rightOpacity: 0.18,
    leftParallaxIntensity: 0.036,
    rightParallaxIntensity: 0.06,
  },
  mobile: {
    entranceDistance: 56,
    opacity: 0.16,
    leftParallaxIntensity: 0.022,
    rightParallaxIntensity: 0.03,
  },
} as const;

const App = () => {
  const leafRightRef = useRef<HTMLDivElement>(null);
  const leafLeftRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) return;

    const right = leafRightRef.current;
    const left = leafLeftRef.current;

    if (!right || !left) return;

    const isMobile = window.innerWidth < 768;
    const entranceX = isMobile
      ? leafMotionConfig.mobile.entranceDistance
      : leafMotionConfig.desktop.entranceDistance;
    const rightOpacity = isMobile
      ? leafMotionConfig.mobile.opacity
      : leafMotionConfig.desktop.rightOpacity;
    const leftOpacity = isMobile
      ? leafMotionConfig.mobile.opacity
      : leafMotionConfig.desktop.leftOpacity;
    const rightParallax = isMobile
      ? leafMotionConfig.mobile.rightParallaxIntensity
      : leafMotionConfig.desktop.rightParallaxIntensity;
    const leftParallax = isMobile
      ? leafMotionConfig.mobile.leftParallaxIntensity
      : leafMotionConfig.desktop.leftParallaxIntensity;

    const entranceDuration = isMobile ? 1.1 : 1.4;
    const scrollEaseDuration = isMobile ? 1.6 : 2.2;

    gsap.set(right, { x: entranceX, opacity: 0 });
    gsap.set(left, { x: -entranceX, opacity: 0 });

    const intro = gsap.timeline({ delay: 0.6 });

    intro
      .to(
        right,
        {
          x: 0,
          opacity: rightOpacity,
          duration: entranceDuration,
          ease: "power3.out",
        },
        0,
      )
      .to(
        left,
        {
          x: 0,
          opacity: leftOpacity,
          duration: entranceDuration,
          ease: "power3.out",
        },
        0.08,
      );

    const moveRight = gsap.quickTo(right, "y", {
      duration: scrollEaseDuration,
      ease: "power3.out",
    });

    const moveLeft = gsap.quickTo(left, "y", {
      duration: scrollEaseDuration,
      ease: "power3.out",
    });

    const onScroll = () => {
      moveRight(window.scrollY * rightParallax);
      moveLeft(window.scrollY * leftParallax);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      intro.kill();
    };
  }, []);

  return (
    <div className="site-wrapper">
      {/* 🌿 Background layers */}
      <div ref={leafRightRef} className="leaf-background leaf-right">
        <div className="leaf-inner" />
      </div>

      <div ref={leafLeftRef} className="leaf-background leaf-left">
        <div className="leaf-inner" />
      </div>

      {/* 🌱 Main content */}
      <div className="content">
        <Navbar />
        <AppRoutes />

        <Footer />
        <WhatsAppFloating />
      </div>
    </div>
  );
};

export default App;
