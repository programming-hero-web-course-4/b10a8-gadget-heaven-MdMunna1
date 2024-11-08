import toast from "react-hot-toast";

//  get item
let getItem = () => {
  let getData = localStorage.getItem("card");
  if (getData) {
    let parsData = JSON.parse(getData);
    return parsData;
  } else {
    return [];
  }
};
//  set item

let setItem = (item) => {
  let data = getItem();
  let chak = data.find((all) => all.product_id == item.product_id);
  if (chak) {
    return toast.error("Alredy Adedd");
  }
  toast.success("Successfully created!");
  data.push(item);
  localStorage.setItem("card", JSON.stringify(data));
};
//  remove item
let remove = (id) => {
  let data = getItem();
  let remaining = data.filter((all) => all.product_id != id);
  localStorage.setItem("card", JSON.stringify(remaining));
  toast.success("Successfully Remove!");
};

export { setItem, getItem, remove };
