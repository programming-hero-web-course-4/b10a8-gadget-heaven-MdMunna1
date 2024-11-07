import { NavLink } from "react-router-dom";

const Bigcpmponent = ({ data }) => {
  return (
    <>
      <NavLink
        className={({ isActive }) =>
          `px-3 py-2 font-bold text-left ${isActive ? "bg-[#9538E2]" : ""}`
        }
        to={`/category/${data.category_name}`}
      >
        {" "}
        {data.category_name}
      </NavLink>
    </>
  );
};

export default Bigcpmponent;
