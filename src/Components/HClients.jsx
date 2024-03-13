import React, { useEffect } from "react";
import ScrollReveal from "scrollreveal";
import { clientData } from "../data";
const HClients = () => {
  useEffect(() => {
    // Initialize ScrollReveal
    const sr = ScrollReveal();

    // Configure ScrollReveal
    sr.reveal(".h2", {
      origin: "top",
      distance: "20px",
      duration: 1000,
      delay: 200,
      easing: "ease-in-out",
      reset: true, // Reset on every reveal
    });
    sr.reveal(".clients", {
      origin: "left",
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
      <h2 className="h2 text-center">Happy Clients says</h2>
      <div className="mb-4 md:flex items-center justify-between text-center gap-[40px] py-12 lg:space-y-0 space-y-6">
        {clientData.map((item, index) => (
          <div key={index} className="shadow-2xl px-12 py-8 clients">
            <h3 className="h4 text-[16px] tracking-wider mb-2">{item.title}</h3>
            <div className="flex items-center justify-center  mb-4">
              <img src={item.image} alt="img" />
            </div>
            <h3 className="mb-2 text-[16px] font-semibold text-[#0C1920]">{item.name}</h3>
            <p className="mb-2 text-[#747474] font-semibold">{item.occupation}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HClients;
