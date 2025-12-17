import { useEffect, useRef } from "react";
import { Navbar } from "./components/Navbar";
import AppRoutes from "./Routes/AppRoutes";

const App = () => {
  const leafRightRef = useRef<HTMLDivElement>(null);
  const leafLeftRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.innerWidth < 768) return;

    const onScroll = () => {
      const offset = window.scrollY * 0.25;

      if (leafRightRef.current) {
        leafRightRef.current.style.transform = `translateY(${offset}px)`;
      }

      if (leafLeftRef.current) {
        leafLeftRef.current.style.transform = `translateY(${offset}px)`;
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="site-wrapper">
      <div ref={leafRightRef} className="leaf-background leaf-right" />
      <div ref={leafLeftRef} className="leaf-background leaf-left" />

      <div className="content">
        <Navbar />
        <AppRoutes />
      </div>
    </div>
  );
};

export default App;
