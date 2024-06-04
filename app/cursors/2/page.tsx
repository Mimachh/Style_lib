"use client"
import React, { useRef } from "react";
import Header from "./_components/header/Index";
import StickyCursor from "./_components/stickyCursor/Index";

const page = () => {
  const stickyElement = useRef(null);

  return (
    <div className="h-[200vh] bg-white">
      <Header ref={stickyElement} />
      <StickyCursor stickyElement={stickyElement} />
    </div>
  );
};

export default page;
