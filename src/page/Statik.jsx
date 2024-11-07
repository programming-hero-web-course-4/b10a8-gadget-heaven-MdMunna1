import {Helmet} from "react-helmet";

import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

let Statik = () => {
  const data = [
    { name: "G1", value: 100 },
    { name: "G2", value: 1900 },
    { name: "G3", value: 200 },
    { name: "G4", value: 1100 },
    { name: "G5", value: 400 },
    { name: "G6", value: 1900 },
    { name: "G7", value: 3000 },
    { name: "G7", value: 500 },
    { name: "G7", value: 1700 },
    { name: "G7", value: 1900 },
    { name: "G7", value: 500 },
    { name: "G7", value: 100 },
    { name: "G7", value: 1100 },
    { name: "G7", value: 300 },
    { name: "G7", value: 1700 },
  ];

  return (
    <>
    <Helmet>
      <title>STATIKS</title>
    </Helmet>
      <div className='bg-[#9538E2] text-white justify-center items-center w-full h-60 flex flex-col gap-5'>
        <h1 className='font-bold sm:text-4xl'>Statistics</h1>
        <p className='text-center sm:px-10'>
          Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
        </p>
      </div>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="value" stroke="#8884d8" activeDot={{ r: 8 }} />
        </LineChart>
      </ResponsiveContainer>
    </>
  );
};

export default Statik;

