import { useEffect, useState } from "react";
import { BorderBeam } from "../ui/border-beam";


const CursorEffect = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setCursorPosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      className={`cursor-follower `}
      style={{
        left: `${cursorPosition.x}px`,
        top: `${cursorPosition.y}px`,
        
      }}
     
    >
        <BorderBeam  duration={2}/>

        <div className=" relative top-4 left-4 w-3 h-3 bg-indigo-500  rounded-full  ">

        </div>
    </div>
  );
};

export default CursorEffect;
