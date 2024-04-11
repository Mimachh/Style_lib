"use client"
import { useEffect, useRef } from "react";

import Image from "next/image";

const Page = () => {
  const zoomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const zoom = zoomRef.current;
    if (!zoom) return;
  
    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
      
      zoom.style.setProperty('--zoom-show', 'block');
    let {clientX, clientY} = e;
      let positionPx = clientX - zoom.getBoundingClientRect().left;
      let positionPy = clientY - zoom.getBoundingClientRect().top;
  
      let positionX = 100 * positionPx / zoom.offsetWidth;
      let positionY = 100 * positionPy / zoom.offsetHeight;
  
      zoom.style.setProperty('--zoom-x', positionX + '%');
      zoom.style.setProperty('--zoom-y', positionY + '%');
    };
  
    const handleMouseOut = () => {
        zoom.style.setProperty('--zoom-show', 'none');
    };

    zoom.addEventListener('mousemove', (e: any) => handleMouseMove(e));
    zoom.addEventListener('mouseout', handleMouseOut);
  
    // Clean up the event listeners on unmount
    return () => {
      zoom.removeEventListener('mousemove', (e: any) => handleMouseMove(e));
      zoom.removeEventListener('mouseout', handleMouseOut);
    };
  }, []);



  return (
    <div className="w-full min-h-screen flex justify-center items-center">
      <div className="zoom" ref={zoomRef}>
        <Image
          src="/slider1/img1.jpg"
          alt="slider1"
          width={500}
          height={500}
          className="w-[500px] h-auto"
        />
        <Image
          src="/slider1/img1.jpg"
          alt="slider1"
          width={500}
          height={500}
          className="absolute left-0 top-0 scale-150"
        />
      </div>
    </div>
  );
};

export default Page;