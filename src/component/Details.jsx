import React, { useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { GiEternalLove } from "react-icons/gi";
import { FaBabyCarriage } from "react-icons/fa6";
import { setItem } from "./Utility";
import { setItemW } from "./Utility/whish";

const Details = () => {
  let data = useLoaderData();

  let { id } = useParams();
  //   let [find, setFind] = useState({});
  let findDeta = data.find((all) => id == all.product_id);

  let {
    rating,
    description,
    Specification,
    product_title,
    product_image,
    price,
  } = findDeta;
  function hndladdFunction(value) {
    setItem(value);
  }
  function hendlwish(value) {
    setItemW(value);
  }

  return (
    <>
      <div className="w-full  bg-[#9538E2] text-center">
        <h1 className="font-bold text-white py-5 text-2xl">Product Details</h1>
        <p className="text-white px-5">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
        <div className="w-9/12 gap-2 bg-white p-2 mx-auto relative rounded-lg -bottom-10 border-2 border-black grid sm:grid-cols-5">
          <div className="col-span-2 border rounded-md w-full h-full">
            <img
              className=" rounded-md w-full h-full"
              src={product_image}
              alt=""
            />
          </div>
          <div className="col-span-3 border text-left ">
            <h1 className="font-semibold py-1">{product_title}</h1>
            <p className="py-1 text-xs">Price: ${price}</p>
            <button className="border text-green-400 border-green-300 rounded-md font-semibold">
              In Stoks
            </button>
            <p className="text-xs py-1">{description}</p>
            <h5 className="font-semibold py-1">Specification:</h5>

            {Specification.map((all) => (
              <p className="text-xs">{all}</p>
            ))}
            <h2 className="text-sm font-semibold">Rating:</h2>
            <div className="flex items-center py-1">
              <div className="rating text-xs">
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                  defaultChecked
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
              </div>
              <p>{rating}</p>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => {
                  hndladdFunction(findDeta);
                }}
                className="flex py-1 rounded-lg text-white bg-[#9538E2] gap-2 items-center"
              >
                Add To Card <FaBabyCarriage />
              </button>
              <button
                onClick={() => hendlwish(findDeta)}
                className="border p-2 rounded-full"
              >
                {" "}
                <GiEternalLove />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;
