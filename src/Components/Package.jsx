import React, { useEffect } from "react";
import { FaAngleDown } from "react-icons/fa";
import { packageSubItem1, packageSubItem2, packageSubItem3, packageSubItem4 } from "../data";
import ScrollReveal from "scrollreveal";

const Package = () => {
    useEffect(() => {
        // Initialize ScrollReveal
        const sr = ScrollReveal();
    
        // Configure ScrollReveal
        // sr.reveal(".h2", {
        //   origin: "top",
        //   distance: "20px",
        //   duration: 1000,
        //   delay: 200,
        //   easing: "ease-in-out",
        //   reset: true, // Reset on every reveal
        // });
        sr.reveal(".card", {
          origin: "top",
          distance: "20px",
          interval: 500,
          delay: 300,
          easing: "ease-in-out",
          reset: true, // Reset on every reveal
        });
    
        // Cleanup
        return () => {
          sr.destroy();
        };
      }, []);
  return (
    <section className="container mx-auto md:mt-[100px] mt-12">
      <h2 className="h2 text-center">Our package</h2>
      <div className="flex lg:flex-row flex-col gap-12 items-center justify-between mt-20">
        {/* first card   */}
        <div className="max-w-[320px] w-full hover:scale-110  hover:border-[1px] border-primary p-4 rounded-lg transition-all duration-300 ease-in-out card">
          <h2 className="h2 text-[36px] mb-3">$300</h2>
          <h3 className="h3 mb-2">Business fair</h3>
          <h4 className="h4 mb-2">
            For most businesses event like book fair, craft fair.
          </h4>
          <div className="flex flex-col gap-3 mb-6">
            {packageSubItem1.map((item, index) => (
              <div key={index} className="flex items-center gap-[10px] ">
                <FaAngleDown className="bg-[#5243C2]/10 rounded-full text-[#5243C2] text-3xl p-1 flex items-center justify-center" />
                <h4 className="h4">{item.name}</h4>
              </div>
            ))}
          </div>
          <button className="md:max-w-[207px] w-full h-[45px] bg-[#F496D1]/20 rounded-full text-primary font-bold mx-auto">
            Choose plan
          </button>
        </div>
        {/* second card   */}
        <div className="max-w-[320px] w-full hover:scale-110  hover:border-[1px] border-primary p-4 rounded-lg transition-all duration-300 ease-in-out card">
          <h2 className="h2 text-[36px] mb-3">$500</h2>
          <h3 className="h3 mb-2">wedding basic</h3>
          <h4 className="h4 mb-2">
            For most businesses event like book fair, craft fair.
          </h4>
          <div className="flex flex-col gap-3 mb-6">
            {packageSubItem2.map((item, index) => (
              <div key={index} className="flex items-center gap-[10px] ">
                <FaAngleDown className="bg-[#5243C2]/10 rounded-full text-[#5243C2] text-3xl p-1 flex items-center justify-center" />
                <h4 className="h4">{item.name}</h4>
              </div>
            ))}
          </div>
          <button className="md:max-w-[207px] w-full h-[45px] bg-[#F496D1]/20 rounded-full text-primary font-bold mx-auto">
            Choose plan
          </button>
        </div>
        {/* third card   */}
        <div className="max-w-[320px] w-full hover:scale-110  hover:border-[1px] border-primary p-4 rounded-lg transition-all duration-300 ease-in-out relative card">
          <h2 className="h2 text-[36px] mb-3">$800</h2>
          <h3 className="h3 mb-2">Wedding plus</h3>
          <h4 className="h4 mb-2">
            For most businesses event like book fair, craft fair.
          </h4>
          <div className="flex flex-col gap-3 mb-6">
            {packageSubItem3.map((item, index) => (
              <div key={index} className="flex items-center gap-[10px] ">
                <FaAngleDown className="bg-[#5243C2]/10 rounded-full text-[#5243C2] text-3xl p-1 flex items-center justify-center" />
                <h4 className="h4">{item.name}</h4>
              </div>
            ))}
          </div>
          <button className="md:max-w-[207px] w-full h-[45px] bg-[#F496D1]/20 rounded-full text-primary font-bold mx-auto">
            Choose plan
          </button>
        </div>
        {/* four card   */}
        <div className="max-w-[320px] w-full hover:scale-110  hover:border-[1px] border-primary p-4 rounded-lg transition-all duration-300 ease-in-out card">
          <h2 className="h2 text-[36px] mb-3">$1200</h2>
          <h3 className="h3 mb-2">Corporate event</h3>
          <h4 className="h4 mb-2">
            For most businesses event like book fair, craft fair.
          </h4>
          <div className="flex flex-col gap-3 mb-6">
            {packageSubItem4.map((item, index) => (
              <div key={index} className="flex items-center gap-[10px] ">
                <FaAngleDown className="bg-[#5243C2]/10 rounded-full text-[#5243C2] text-3xl p-1 flex items-center justify-center" />
                <h4 className="h4">{item.name}</h4>
              </div>
            ))}
          </div>
          <button className="md:max-w-[207px] w-full h-[45px] bg-[#F496D1]/20 rounded-full text-primary font-bold mx-auto">
            Choose plan
          </button>
        </div>
      </div>
    </section>
  );
};

export default Package;
