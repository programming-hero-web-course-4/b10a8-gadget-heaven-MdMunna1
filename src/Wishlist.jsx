import React, { useEffect, useState } from "react";
import { getItemW, removeW } from "./component/Utility/whish";
import WishCard from "./WishCard";

const Wishlist = () => {
  let [value, setValue] = useState([]);
  useEffect(() => {
    let data = getItemW();
    setValue(data);
  }, []);
  function hendlremove(id) {
    removeW(id);
    let data = getItemW();
    setValue(data);
  }

  return (
    <>
      <div className="w-full py-6">
        <h1 className="font-bold">Wishlist</h1>
      </div>
      {value.map((all, i) => (
        <WishCard key={i} hendlremove={hendlremove} data={all} />
      ))}
    </>
  );
};

export default Wishlist;
