import { NavLink, useLocation } from "react-router-dom";
import { GiRoyalLove } from "react-icons/gi";
import { TbBabyCarriage } from "react-icons/tb";

const Navber = () => {
  let { pathname } = useLocation();

  return (
    <>
      <nav
        className={`flex justify-between items-center p-4 ${
          pathname === "/" ? "bg-[#9538E2] text-white" : "bg-white text-black"
        }`}
      >
        <h1 className="font-semibold text-xs sm:text-xl">Gadget Heaven</h1>
        <ul className="flex sm:flex-row flex-col sm:text-sm text-xs  gap-5">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-white font-bold" : "text-gray-400"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/statik"
            className={({ isActive }) =>
              isActive ? "text-[#9538E2] font-bold" : "text-gray-400"
            }
          >
            Statistics
          </NavLink>
          <NavLink
            to="/dash"
            className={({ isActive }) =>
              isActive ? "text-[#9538E2] font-bold" : "text-gray-400"
            }
          >
            Dashboard
          </NavLink>
          <NavLink
            to="/smart"
            className={({ isActive }) =>
              isActive ? "text-[#9538E2] font-bold" : "text-gray-400"
            }
          >
            Smart GZ
          </NavLink>
        </ul>
        <div className="flex gap-3">
          <div>
            <GiRoyalLove />
          </div>
          <div>
            <TbBabyCarriage />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navber;
