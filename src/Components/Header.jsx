import React, { useEffect, useState } from "react";
import logo from "../assets/image/logo.png";
import { FaAlignRight, FaXmark } from "react-icons/fa6";
import Nav from "./Nav";
import ScrollReveal from "scrollreveal";

const Header = () => {
  useEffect(() => {
    // Initialize ScrollReveal
    const sr = ScrollReveal();

    // Configure ScrollReveal
    sr.reveal(".header__part", {
      origin: "top",
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

  const [open, setOpen] = useState(false);
  return (
    <section className="bg-body fixed top-0 shadow-lg  max-w-[2024px] w-full z-50 ">
      <div className="container mx-auto py-8 header__part">
        <div className="flex items-center justify-between">
          {/* logo  */}
          <div>
            <img src={logo} alt="logo" />
          </div>
          {/* nav items   */}
          <div>
            <Nav setOpen={setOpen} open={open} />
          </div>
          {/* menu item for mobile devices    */}
          <div onClick={() => setOpen(!open)} className="text-dark xl:hidden ">
            {open ? <FaXmark /> : <FaAlignRight />}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
