import { useEffect, useRef } from "react";
import { Navbar } from "./components/Navbar";
import AppRoutes from "./Routes/AppRoutes";
import gsap from "gsap";

const App = () => {
  const leafRightRef = useRef<HTMLDivElement>(null);
  const leafLeftRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    // ♿ Accessibility first
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) return;

    const right = leafRightRef.current;
    const left = leafLeftRef.current;

    if (!right || !left) return;

    // 📱 Detect mobile
    const isMobile = window.innerWidth < 768;

    // 🎛 Tuning values
    const entranceX = isMobile ? 60 : 120;
    const scrollMultiplier = isMobile ? 0.025 : 0.06;

    const entranceDuration = isMobile ? 1.1 : 1.4;
    const scrollEaseDuration = isMobile ? 1.6 : 2.2;

    // 🔒 Initial off-screen position
    gsap.set(right, { x: entranceX, opacity: 0 });
    gsap.set(left, { x: -entranceX, opacity: 0 });

    // 🌿 Entrance animation
    const intro = gsap.timeline({ delay: 0.6 });

    intro.to([right, left], {
      x: 0,
      opacity: 0.4,
      duration: entranceDuration,
      ease: "power3.out",
      stagger: 0.12,
    });

    // 🧘 Scroll smoothing
    const moveRight = gsap.quickTo(right, "y", {
      duration: scrollEaseDuration,
      ease: "power3.out",
    });

    const moveLeft = gsap.quickTo(left, "y", {
      duration: scrollEaseDuration,
      ease: "power3.out",
    });

    const onScroll = () => {
      const offset = window.scrollY * scrollMultiplier;
      moveRight(offset);
      moveLeft(offset);
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="site-wrapper">
      <div ref={leafRightRef} className="leaf-background leaf-right">
        <div className="leaf-inner" />
      </div>

      <div ref={leafLeftRef} className="leaf-background leaf-left">
        <div className="leaf-inner" />
      </div>

      <div className="content">
        <Navbar />
        <AppRoutes />
      </div>
    </div>
  );
};

export default App;
