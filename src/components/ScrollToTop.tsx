import React, { useState, useEffect } from 'react';
import { IoChevronUpOutline } from 'react-icons/io5';

// Basic Scroll to Top Component
const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled up to given distance
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Add scroll event listener
  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    
    // Cleanup listener
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <>
      {isVisible && (
        <button 
          onClick={scrollToTop}
          className="fixed bottom-20 right-4 z-50 bg-ubun text-white 
                     p-2 rounded-full shadow-lg hover:bg-ubun 
                     transition-all duration-300 ease-in-out 
                     animate-bounce"
        >
          <IoChevronUpOutline className="w-6 h-6" />
        </button>
      )}
    </>
  );
};

// Advanced Version with More Options
interface ScrollToTopProps {
  showAt?: number;
  style?: React.CSSProperties;
  className?: string;
}

const AdvancedScrollToTop: React.FC<ScrollToTopProps> = ({
  showAt = 300,
  style,
  className
}) => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(window.pageYOffset > showAt);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, [showAt]);

  return (
    <>
      {isVisible && (
        <button 
          onClick={scrollToTop}
          style={style}
          className={`
            fixed bottom-20 right-4 z-50 
            bg-blue-500 text-white 
            p-3 rounded-full 
            shadow-lg hover:bg-ubun 
            transition-all duration-300 
            ${className || ''}`
          }
        >
          <IoChevronUpOutline className="w-6 h-6" />
        </button>
      )}
    </>
  );
};

// Hook Version (Reusable Scroll Logic)
const useScrollToTop = (threshold = 300) => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(window.pageYOffset > threshold);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, [threshold]);

  return { isVisible, scrollToTop };
};



export { 
  ScrollToTop, 
  AdvancedScrollToTop, 
  useScrollToTop 
};