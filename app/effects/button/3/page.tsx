import Link from "next/link";
import React from "react";

const Page = () => {
  return (
    <div className="min-h-screen">
      <h2 className="pb-12">Some buttons</h2>

      <div className=" flex flex-col items-center justify-center gap-2">
        <Link
          href="#"
          className='
            text-[yellow]
            before:hover:translate-x-0 hover:text-black
            before:translate-x-[-100%] before:z-[-1] before:content-[""] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-[yellow] before:transition-all before:duration-1000 before:ease-in-out
            text-[40px] overflow-hidden border-[3px] border-[yellow] px-[80px] py-[40px] relative transition-all duration-1000'
        >
          Hover me
        </Link>

        <Link
          href="#"
          className='
            text-[yellow] hover:text-black 
            before:hover:rotate-x-0  after:hover:rotate-y-0
            before:rotate-x-90 after:rotate-y-90 before:z-[-1] before:content-[""] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-[yellow] before:transition-all before:duration-1000 before:ease-in-out
            after:z-[-1] after:content-[""] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-[yellow] after:transition-all after:duration-1000 after:ease-in-out
            text-[40px] overflow-hidden border-[3px] border-[yellow] px-[80px] py-[40px] relative transition-all duration-1000'
        >
          Hover me
        </Link>
      </div>
    </div>
  );
};

export default Page;
