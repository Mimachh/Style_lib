"use client"
import { ReactLenis, useLenis } from "@studio-freight/react-lenis";
import { useEffect, useRef } from "react";

const SmoothScroll = ({ children }) => {
  const lenis = useLenis(({ scroll }) => {});
  // Pour scroller a une ancre : 
  //<button onClick={() => lenis.scrollTo('#id', {lerp: 0.01})}>

  //</button>

  //const lenisRef = useRef()
  //useEffect(() => {
  // 
  //  function raf(time) {
  //    lenisRef.raf(time)
  //    requestAnimationFrame(raf)
  //  }
  //  
  //  requestAnimationFrame(raf)
  //}, [])
  return <ReactLenis root>{children}</ReactLenis>;
};

export default SmoothScroll;
