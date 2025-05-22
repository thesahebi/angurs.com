"use client";

import  { useEffect, useMemo, useState } from "react";
import { cn } from "@/lib/utils";

interface MeteorsProps {
  number?: number;
  top?: number;
}

export const Meteors = ({ number = 20, top = -5 }: MeteorsProps) => {
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);

  // Update window width on resize
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Generate meteor styles dynamically based on window size
  const meteorStyles = useMemo(() => {
    return [...new Array(number)].map(() => ({
      top: `${top}px`,
      left: `${Math.floor(Math.random() * windowWidth)}px`,
      animationDelay: `${Math.random() * 1 + 0.2}s`,
      animationDuration: `${Math.floor(Math.random() * 8 + 2)}s`,
    }));
  }, [number, top, windowWidth]);

  return (
    <>
      {meteorStyles.map((style, idx) => (
        // Meteor Head
        <span
          key={idx}
          className={cn(
            "pointer-events-none absolute left-0 top-1/2 size-5.5 rotate-[215deg] animate-meteor rounded-full bg-slate-500 shadow-[0_0_0_1px_#ffffff10]"
          )}
          style={style}
        >
          {/* Meteor Tail */}
          <div className="pointer-events-none absolute top-1/2 -z-10 h-px w-[150px] -translate-y-1/2 bg-gradient-to-r from-slate-500 to-transparent" />
        </span>
      ))}
    </>
  );
};

export default Meteors;
