import React, { useEffect } from "react";
import appStore from "../assets/image/App Store Badge.png";
import googlePlay from "../assets/image/Google Play Badge.png";
import ScrollReveal from "scrollreveal";

const Footer = () => {
    useEffect(() => {
        // Initialize ScrollReveal
        const sr = ScrollReveal();
    
        // Configure ScrollReveal
        sr.reveal(".left", {
          origin: "bottom",
          distance: "20px",
          duration: 1000,
          delay: 200,
          easing: "ease-in-out",
          reset: true, // Reset on every reveal
        });
        sr.reveal(".right", {
          origin: "bottom",
          distance: "20px",
          duration: 1000,
          delay: 200,
          easing: "ease-in-out",
          reset: true, // Reset on every reveal
        });
    
        // Cleanup
        return () => {
          sr.destroy();
        };
      }, []);
    
  return (
    <section className="bg-[#0B0D17] ">
      <div className="container mx-auto py-20">
        <div className="flex flex-col lg:flex-row justify-between items-center ">
          <div className="left">
            <h3 className="text-white h4">© 2020 bike. All rights reserved</h3>
          </div>
          <div className="flex flex-col items-start gap-4 justify-center right">
            <h2 className="text-white text-xl">Get the App</h2>
            <img src={appStore} alt="appStore" />
            <img src={googlePlay} alt="appStore" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
