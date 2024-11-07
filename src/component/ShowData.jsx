import React from "react";
import { Link } from "react-router-dom";

const ShowData = ({ data }) => {
  let { product_image, price, product_title, product_id } = data || {};
  console.log(data);
  return (
    <div className="p-2 shadow-md shadow-[#9538E2]">
      <img
        className="p-2 w-full h-48 object-cover"
        src={product_image}
        alt=""
      />
      <div>
        <h1 className="font-bold py-2">{product_title}</h1>
        <p className="">Price: {price}</p>
        <button className="my-4">
          <Link
            className="p-2 text-white font-semibold rounded-lg  bg-[#9538E2]"
            to={`/details/${product_id}`}
          >
            {""}
            Show Detailes
          </Link>
        </button>
      </div>
    </div>
  );
};

export default ShowData;
