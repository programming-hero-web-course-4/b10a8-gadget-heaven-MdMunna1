import React from "react";
import { FaBabyCarriage } from "react-icons/fa6";
import { MdDeleteForever } from "react-icons/md";
import { setItemW } from "./component/Utility/whish";
import { setItem } from "./component/Utility";

const WishCard = ({ hendlremove, data }) => {
  let { product_title, price, product_image, description, product_id } =
    data || {};

  function hndladdFunction(value) {
    setItem(value);
  }
  return (
    <>
      <div className="w-full flex justify-between border bg-slate-200 p-2 sm:h-36 my-3 ">
        <div className="broder sm:flex gap-4 ">
          <img
            className="sm:h-full object-cover w-40 border border-white rounded-md"
            src={product_image}
            alt=""
          />
          <div className="broder ">
            <h1 className="font-bold py-1">{product_title}</h1>
            <p className=" text-xs">{description}</p>
            <p className="font-semibold py-1">Price: {price}</p>
            <button
              onClick={() => {
                hndladdFunction(data);
              }}
              className="flex py-1 rounded-lg text-white bg-[#9538E2] gap-2 items-center"
            >
              Add To Card <FaBabyCarriage />
            </button>
          </div>
        </div>
        <h1
          onClick={() => hendlremove(product_id)}
          className="text-2xl p-4 font-bold"
        >
          <MdDeleteForever />
        </h1>
      </div>
      
    </>
  );
};

export default WishCard;
