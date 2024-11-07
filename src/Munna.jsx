import React from "react";
import DashborDeta from "./component/DashborDeta";

const Munna = () => {
  let deta = localStorage.getItem("card");
  let value = deta ? JSON.parse(deta) : [];
  return (
    <>
    <div>
      <h1>Card</h1>
      <div>
        <h1>Total Cost:</h1>
        <button>Sort By Priche</button>
        <button>Purchase</button>
      </div>
    </div>
      <div>
        {value.map((all, i) => (
          <DashborDeta key={i} data={all} />
        ))}
      </div>
    </>
  );
};

export default Munna;
