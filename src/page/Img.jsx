import React from "react";
import bennar from "../assets/banner.jpg";

const ImgD = () => {
  return (
    <>
      <div className="-top-36 absolute outline outline-2 rounded-lg outline-slate-50 p-1">
        <img className="w-full rounded-lg " src={bennar} alt="" />
      </div>
    </>
  );
};

export default ImgD;
