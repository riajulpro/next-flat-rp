"use client";

import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts";

const data = [
  { name: "4/3/2023", uv: 144460, pv: 0, amt: 2400 },
  { name: "18/3/2023", uv: 144460, pv: 2400, amt: 2400 },
  { name: "1/4/2023", uv: 13460, pv: 2400, amt: 2400 },
  { name: "15/4/2023", uv: 13460, pv: 0, amt: 2400 },
];

const RenderLineChart = () => {
  return (
    <LineChart width={746} height={238} data={data}>
      <Line type="monotone" dataKey="uv" stroke="#8884d8" strokeWidth={4} />
      <CartesianGrid stroke="#ccc" />
      <XAxis dataKey="name" />
      <YAxis />
    </LineChart>
  );
};

export default RenderLineChart;
