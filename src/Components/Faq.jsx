import React, { useEffect, useState } from "react";
import faqImg from "../assets/image/faq-r-img.png";
import FaqItem from "./FaqItem";
import ScrollReveal from "scrollreveal";

const Faq = () => {
    useEffect(() => {
        // Initialize ScrollReveal
        const sr = ScrollReveal();
    
        // Configure ScrollReveal
        sr.reveal(".faq", {
          origin: "left",
          distance: "20px",
          duration: 1000,
          delay: 200,
          easing: "ease-in-out",
          reset: true, // Reset on every reveal
        });
        sr.reveal(".f-img", {
          origin: "right",
          distance: "20px",
          interval: 1000,
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
    <section className="container mx-auto md:mt-[100px] mt-12 md:mb-32 mb-4">
      <div className="md:flex items-center gap-8">
        {/* faq item  */}
        <div className="md:w-1/2 w-full faq">
          <FaqItem />
        </div>
        <div className="md:w-1/2 w-full md:mt-0 mt-6 f-img">
          <img src={faqImg} alt="faqImg" />
        </div>
      </div>
    </section>
  );
};

export default Faq;
