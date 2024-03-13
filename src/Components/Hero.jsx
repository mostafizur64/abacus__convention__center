import React from "react";
import Header from "./Header";
import NavCarousel from "./NavCarousel";

const Hero = () => {
  return (
    <div className="bg-banner text-white bg-no-repeat w-full bg-cover bg-right">
      <Header />
      <div className="container mx-auto min-h-[780px]  relative z-40 text-red-500 flex items-center justify-center">
        <NavCarousel />
      </div>
    </div>
  );
};

export default Hero;
