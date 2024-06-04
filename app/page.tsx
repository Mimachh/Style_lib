"use client";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { link } from "fs";

const projects = [
  {
    title: "Sliders",
    link: "/sliders",
  },
  {
    title: "Cards",
    link: "/cards",
  },
  {
    title: "Borders",
    link: "/border",
  },
  {
    title: "Some effects (button, border, hover, magnetic...)",
    link: "/effects",
  },
  {
    title: "Cursor",
    link: "/cursors",
  },
  {
    title: "Navbar",
    link: "/nav",
  },
  {
    title: "Scroll effect",
    link: "/scroll",
  },
  {
    title: "Landing",
    link: "/landings"
  },
  {
    title: "Page transition",
    link: "/page_transition"
  },
  {
    title: "Image",
    link: "/images"
  }
];

const Home = () => {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
  );
};

export default Home;
