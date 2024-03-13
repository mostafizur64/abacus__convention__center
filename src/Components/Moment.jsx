import React, { useEffect } from "react";
import momentImg from "../assets/image/E-momentImg.png";
import { FaArrowRight } from "react-icons/fa6";
import ScrollReveal from "scrollreveal";

const Moment = () => {
  useEffect(() => {
    // Initialize ScrollReveal
    const sr = ScrollReveal();

    // Configure ScrollReveal
    sr.reveal(".img", {
      origin: "top",
      distance: "20px",
      duration: 1000,
      delay: 200,
      easing: "ease-in-out",
      reset: true, // Reset on every reveal
    });
    sr.reveal(".text", {
      origin: "bottom",
      distance: "20px",
      duration: 1000,
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
      {/* image  && text wrapper  */}
      <div className="lg:flex flex-col lg:flex-row items-center gap-[35px] md:space-y-0 space-y-7">
        {/* image  */}
        <div className="flex-1 img">
          <img src={momentImg} alt="momentImg" />
        </div>
        {/* text  */}
        <div className="flex-1 text">
          <h2 className="h2 font-bold">Every moment is Precious </h2>
          <p className="p font-bold mb-4">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </p>
          <button className="bg-primary text-white flex items-center justify-center gap-4 py-[10px] px-6">
            Explore our album <FaArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Moment;
