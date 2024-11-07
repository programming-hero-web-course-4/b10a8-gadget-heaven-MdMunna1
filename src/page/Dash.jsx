import { Helmet } from "react-helmet";
import { NavLink, Outlet } from "react-router-dom";

const Dash = () => {
  return (
    <>
    <Helmet><title>DASHBORD</title></Helmet>
      <div className="bg-[#9538E2] w-full text-center text-white">
        <h1 className="font-bold text-sm py-3 sm:text-2xl">Dashboard</h1>
        <p className="px-4 py-1">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
        <div className="py-5 flex gap-5 text-white justify-center">
          <NavLink
            className={({ isActive }) =>
              `${
                isActive ? "bg-white text-[#9538E2]" : ""
              } py-1 px-2 rounded-md font-bold border `
            }
            to={"/dash/munna"}
          >
            Card
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              `${
                isActive ? "bg-white text-[#9538E2]" : ""
              } py-1 px-2 rounded-md font-bold border `
            }
            to={"/dash/wish"}
          >
            Wishlist
          </NavLink>
        </div>
      </div>
      <div>
        <Outlet />
      </div>
    </>
  );
};

export default Dash;
