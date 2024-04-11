import CardBolt from "@/components/survol1/CardBolt";
import HoverCard1 from "@/components/survol1/card";
import React from "react";

const Page = () => {
  return (
    <>
      <main className="bg-neutral-900 w-full h-screen flex place-items-center justify-center">
        <HoverCard1 />
      </main>
      <main className="bg-neutral-900 w-full h-screen flex place-items-center justify-center">
        <CardBolt />
      </main>
    </>
  );
};

export default Page;
