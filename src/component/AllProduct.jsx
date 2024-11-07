import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import ShowData from "./ShowData";

const AllProduct = () => {
  let { category } = useParams();
  let data=useLoaderData()
  let [mainData, setMainData] = useState(data);
 
  useEffect(() => {
    if (category) {
      const filteredData =data.filter(
        (item) => item.category == category
      );
      setMainData(filteredData);
    }else{
      setMainData(data)
    }
  }, [category, data]);


  return (
    <>
      <div className="w-full grid gap-3 sm:grid-cols-3">
        {mainData.map((all,i) => (
          <ShowData key={i} data={all} />
        ))}
      </div>
    </>
  );
};

export default AllProduct;
