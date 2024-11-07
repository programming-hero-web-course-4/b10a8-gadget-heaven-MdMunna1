import React, { useEffect, useState } from "react";
import { MdDeleteForever } from "react-icons/md";

const DashborDeta = ({ data }) => {
  let [uData, setUData] = useState(data);
//   useEffect(() => {
//     setUData(data);
//   }, [data]);
  function hndlid(id) {
  
    let newData = uData.filter((all) => all.product_id != id);
    console.log(newData);
    setUData(newData);
  }
  let { product_title, price, product_image, description, product_id } =
    uData || {};
  return (
    <>
      <div className="w-full flex justify-between border bg-slate-200 p-2 h-32 my-3 ">
        <div className="broder flex gap-4 ">
          <img
            className="h-full object-cover w-40 border border-white rounded-md"
            src={product_image}
            alt=""
          />
          <div className="broder ">
            <h1 className="font-bold py-1">{product_title}</h1>
            <p className="py-1">{description}</p>
            <p className="font-semibold py-1">Price: {price}</p>
          </div>
        </div>
        <h1
          onClick={() => hndlid(product_id)}
          className="text-2xl p-4 font-bold"
        >
          <MdDeleteForever />
        </h1>
      </div>
    </>
  );
};

export default DashborDeta;
