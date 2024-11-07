import { NavLink, Outlet, useLoaderData } from "react-router-dom";
import Hero from "./Hero";
import ImgD from "./Img";
import Bigcpmponent from "../component/Bigcpmponent";
import { Helmet } from "react-helmet";


const Home = () => {
  let data = useLoaderData();

  return (
    <>
    <Helmet><title>HOME</title></Helmet>
      <Hero />
      <div className="relative h-60 w-9/12 mx-auto">
        <ImgD />
      </div>
      <div className="w-full mt-32 text-center">
        <h2 className="font-bold text-xl py-5">Explore Cutting-Edge Gadgets</h2>
      </div>
      <div className="grid sm:grid-cols-12 gap-2 ">
        <div className="col-span-2 flex flex-col gap-2">
          <NavLink
            className={({ isActive }) =>
              `px-3 py-2 font-bold text-left ${isActive ? "bg-[#9538E2]" : ""}`
            }
            to={``}
          >
            {" "}
            All Product
          </NavLink>
          {data.map((all,i) => (
            <Bigcpmponent key={i} data={all} />
          ))}
        </div>
        <div className="col-span-10">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Home;
