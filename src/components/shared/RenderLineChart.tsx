"use client";

import { useLayoutEffect, useState } from "react";
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  { name: "4/3/2023", uv: 144460, pv: 0, amt: 2400 },
  { name: "18/3/2023", uv: 144460, pv: 2400, amt: 2400 },
  { name: "1/4/2023", uv: 13460, pv: 2400, amt: 2400 },
  { name: "15/4/2023", uv: 13460, pv: 0, amt: 2400 },
];

const RenderLineChart = () => {
  const [height, setHeight] = useState(238);

  useLayoutEffect(() => {
    function updateHeight() {
      const chart = document.getElementById("chart-container");
      if (chart) {
        const { height } = chart.getBoundingClientRect();
        setHeight(height);
      }
    }

    updateHeight();
    window.addEventListener("resize", updateHeight);

    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  return (
    <ResponsiveContainer width="100%" height={height}>
      <LineChart data={data}>
        <Line type="monotone" dataKey="uv" stroke="#8884d8" strokeWidth={4} />
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="name" />
        <YAxis />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default RenderLineChart;
