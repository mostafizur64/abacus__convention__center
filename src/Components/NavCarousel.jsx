import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import ScrollReveal from "scrollreveal";
import { useEffect } from "react";

const NavCarousel = () => {
  useEffect(() => {
    // Initialize ScrollReveal
    const sr = ScrollReveal();

    // Configure ScrollReveal
    sr.reveal(".h__title", {
      origin: "top",
      distance: "20px",
      delay: 500,
      easing: "ease-in-out",
      reset: true, // Reset on every reveal
    });
    sr.reveal(".h__subtitle", {
      origin: "top",
      distance: "20px",
      delay: 1000,
      easing: "ease-in-out",
      reset: true, // Reset on every reveal
    });
    sr.reveal(".h__btn", {
      origin: "top",
      distance: "20px",
      delay: 1500,
      easing: "ease-in-out",
      reset: true, // Reset on every reveal
    });

    // Cleanup
    return () => {
      sr.destroy();
    };
  }, []);

  return (
    <>
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="max-w-[659px] mx-auto text-center ">
            <h1 className="h__title text-white font-bold lg:text-[58px] text-[34px] mb-2">
              The perfect venue for your next event
            </h1>
            <p className="h__subtitle lg:text-[16px] text-[12px] max-w-[456px] mx-auto text-white leading-8 mb-[17px]">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit{" "}
            </p>
            <button className="bg-white w-[168px] py-4 rounded-md text-primary font-bold h__btn">
              Book Now
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="max-w-[659px] mx-auto text-center ">
            <h1 className="text-white font-bold lg:text-[58px] text-[34px] mb-2">
              The Genius adventure for your next Program
            </h1>
            <p className="mb lg:text-[16px] text-[12px] max-w-[456px] mx-auto text-white leading-8 mb-[17px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe,
              maxime?
            </p>
            <button className="bg-white w-[168px] py-4 rounded-md text-primary font-bold ">
              Book Now
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="max-w-[659px] mx-auto text-center ">
            <h1 className="text-white font-bold lg:text-[58px] text-[34px] mb-2">
              The New Item are got to venue for your Next Event
            </h1>
            <p className="mb lg:text-[16px] text-[12px] max-w-[456px] mx-auto text-white leading-8 mb-[17px]">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit{" "}
            </p>
            <button className="bg-white w-[168px] py-4 rounded-md text-primary font-bold ">
              Book Now
            </button>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default NavCarousel;
