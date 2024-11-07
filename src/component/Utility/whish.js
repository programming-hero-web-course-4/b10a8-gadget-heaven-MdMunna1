import toast from "react-hot-toast";

//  get item
let getItemW = () => {
  let getData = localStorage.getItem("wish");
  if (getData) {
    let parsData = JSON.parse(getData);
    return parsData;
  } else {
    return [];
  }
};
//  set item

let setItemW = (item) => {
  let data = getItemW();
  let chak = data.find((all) => all.product_id == item.product_id);
  if (chak) {
    return toast.error("Alredy Adedd");
  }
  toast.success("Successfully created!");
  data.push(item);
  localStorage.setItem("wish", JSON.stringify(data));
};
//  remove item
let removeW = (id) => {
  let data = getItemW();
  let remaining = data.filter((all) => all.product_id != id);
  localStorage.setItem("wish", JSON.stringify(remaining));
  toast.success("Successfully Remove!");
};

export { setItemW, getItemW, removeW };
