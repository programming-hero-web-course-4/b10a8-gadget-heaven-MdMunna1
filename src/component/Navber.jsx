
import { NavLink } from "react-router-dom";
import { GiRoyalLove } from "react-icons/gi";
import { TbBabyCarriage } from "react-icons/tb";



const Navber = () => {


  return (
    <>
      <nav className="flex justify-between items-center ">
        <h1 className="font-semibold text-xs sm:text-xl">Gadget Heaven</h1>
        <ul className="flex sm:flex-row flex-col sm:text-sm text-xs  gap-5">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-blue-500 font-bold" : "text-gray-700"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/statik"
            className={({ isActive }) =>
              isActive ? "text-blue-500 font-bold" : "text-gray-700"
            }
          >
            Statistics
          </NavLink>
          <NavLink
            to="/dash"
            className={({ isActive }) =>
              isActive ? "text-blue-500 font-bold" : "text-gray-700"
            }
          >
            Dashboard
          </NavLink>
          <NavLink
            to="/smart"
            className={({ isActive }) =>
              isActive ? "text-blue-500 font-bold" : "text-gray-700"
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
