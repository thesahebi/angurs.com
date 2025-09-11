import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTopAl = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to account for fixed header height (4rem = 64px)
    window.scrollTo({
      top: 64,
      behavior: 'smooth'
    });
  }, [pathname]);

  return null;
};

export default ScrollToTopAl;
