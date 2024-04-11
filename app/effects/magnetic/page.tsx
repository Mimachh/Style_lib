import FramerMagnetic from "@/components/magnetic/FramerMagnetic";
import {
  FacebookLogo,
  TiktokLogo,
  TwitterLogo,
  YoutubeLogo,
} from "@/components/svg";
import React from "react";

const Page = () => {
  return (
    <main className="flex flex-col justify-center items-center min-h-screen">
      <div className="flex items-center">
        <FramerMagnetic>
          <FacebookLogo
            className=" 
            text-[#c8bdb0] hover:text-[#ec4e39] transition-fill duration-[0.2s] cursor-pointer w-[150px] h-[150px] 
            p-[30px]
            "
          />
        </FramerMagnetic>
        <FramerMagnetic>
          <TwitterLogo
            className=" 
  text-[#c8bdb0] hover:text-[#ec4e39] transition-fill duration-[0.2s] cursor-pointer w-[150px] h-[150px] 
  p-[30px]"
          />
        </FramerMagnetic>

        <FramerMagnetic>
          <YoutubeLogo
        className=" 
        text-[#c8bdb0] hover:text-[#ec4e39] transition-fill duration-[0.2s] cursor-pointer w-[150px] h-[150px] 
        p-[30px]"
          />
        </FramerMagnetic>

        <FramerMagnetic>
          <TiktokLogo
       className=" 
       text-[#c8bdb0] hover:text-[#ec4e39] transition-fill duration-[0.2s] cursor-pointer w-[150px] h-[150px] 
       p-[30px]"
          />
        </FramerMagnetic>
      </div>
    </main>
  );
};

export default Page;
