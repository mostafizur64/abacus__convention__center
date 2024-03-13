import React from "react";
import { navItem } from "../data";
const Nav = ({ setOpen, open }) => {
  return (
    <nav>
      <ul
        className={`lg:flex lg:items-center lg:pb-0 pb-12 absolute lg:static  text-dark gap-5 lg:z-auto z-[-1] left-0 w-full lg:w-auto lg:pl-0 pl-9 transition-all duration-500 ease-in ${
          open ? "top-20  bg-white py-2" : "top-[-490px] "
        }`}
      >
        {navItem.map((item, index) => {
          return (
            <li key={index}>
              <a
                className="text-xl font-medium capitalize hover:text-red-500 hover:border-b-2 py-2 transition-all origin-left"
                href={item.href}
              >
                {item.name}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Nav;
