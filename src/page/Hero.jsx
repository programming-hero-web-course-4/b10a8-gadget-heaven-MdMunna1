import React from "react";
import { NavLink } from "react-router-dom";


const Hero = () => {
  return (
    <>
      <div className="bg-[#9538E2] relative text-center flex flex-col justify-start py-6 pb-48 gap-4">
        <h1 className="text-white text-4xl font-bold px-5">
          Upgrade Your Tech Accessorize with <br /> Gadget Heaven Accessories
        </h1>
        <p className="sm:px-32 text-white text-xs">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
          Shop Now
        </p>
        <div className="flex justify-center ">
          <NavLink
            className="bg-white py-2 rounded-lg px-4 text-[#9538E2]"
            to="/dash"
          >
            Shop Now
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Hero;
