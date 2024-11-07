import React, { useEffect, useState } from "react";
import DashborDeta from "./component/DashborDeta";
import { getItem, remove } from "./component/Utility";
import { useNavigate } from "react-router-dom";
import grupeImg from './assets/Group.png';


const Munna = () => {
  const navigate = useNavigate();
  let [value, setValue] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  useEffect(() => {
    let data = getItem();
    setValue(data);
    calculateTotalPrice(data);
  }, []);
  function calculateTotalPrice(items) {
    const total = items.reduce((sum, item) => sum + item.price, 0);
    setTotalPrice(total);
  }
  function hendlremove(id) {
    remove(id);
    let data = getItem();
    setValue(data);
    calculateTotalPrice(data);
  }
  function hendlSort() {
    let sortData = [...value].sort((a, b) => b.price - a.price);
    setValue(sortData);
  }
  function hendlall() {
    openModal();
    setValue([]);
    // setTotalPrice(0);
    localStorage.clear();

  }
  function openModal() {
    document.getElementById("my_modal_4").showModal();
  }

  return (
    <>
      <div className="sm:flex justify-between mt-5">
        <h1 className="font-bold">Card</h1>
        <div className="sm:flex gap-2 items-center">
          <h1 className="font-bold">Total Cost: {totalPrice.toFixed(2)}</h1>
          <button
            onClick={hendlSort}
            className="border py-1 px-2 text-[#9538E2] font-semibold border-[#9538E2] rounded-md"
          >
            Sort By Priche
          </button>
          <button
            onClick={hendlall}
            className="py-1 px-2 bg-[#9538E2] rounded-md rounded-md font-semibold text-white"
          >
            Purchase
          </button>
        </div>
      </div>
      <div>
        {value.map((all, i) => (
          <DashborDeta hendlremove={hendlremove} key={i} data={all} />
        ))}
      </div>
      {/* modal */}
      {/* You can open the modal using document.getElementById('ID').showModal() method */}
      {/* <button className="btn" onClick={()=>document.getElementById('my_modal_4').showModal()}>open modal</button> */}
      <dialog id="my_modal_4" className="modal w-8/12 mx-auto">
        <div className="modal-box w-11/12 max-w-3xl">
        <div className="w-11 mx-auto">
        <img src={grupeImg} alt="" />
        </div>
          <h3 className="py-3 border-b font-bold text-lg text-center ">Payment Successfully</h3>
          <p className="text-center py-4">Thanks for purchasing.</p>
          <h2 className="font-bold text-center">
          Total: {totalPrice.toFixed(2)}</h2>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button, it will close the modal */}
              <button onClick={()=>navigate("/")} className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default Munna;
