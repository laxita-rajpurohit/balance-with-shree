import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // instant, GSAP-safe, no animation conflicts
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
