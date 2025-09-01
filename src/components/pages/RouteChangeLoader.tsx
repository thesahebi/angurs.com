import { useEffect, useState } from "react";
import ScreenLoaderV1 from "../reusable/ScreenLoaderV1";
import { useLocation } from "react-router-dom";

const RouteChangeLoader = ({ children }: { children: React.ReactNode }) => {
    const [isLoading, setIsLoading] = useState(false);
    const location = useLocation();
  
    useEffect(() => {
      setIsLoading(true);
      const timeout = setTimeout(() => {
        setIsLoading(false);
      }, 1000); // Adjust duration based on your loader animation
  
      return () => clearTimeout(timeout);
    }, [location]);
  
    return (
      <>
        {isLoading && (
          <div className="overlay">
            <ScreenLoaderV1 />
          </div>
        )}
        {children}
      </>
    );
  };

  export default RouteChangeLoader