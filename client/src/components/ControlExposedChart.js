import {
  ResponsiveContainer,
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar
} from "recharts";
import React from "react";

const ControlExposedChart = ({ data }) => (
  <ResponsiveContainer width="95%" height={300}>
    <BarChart data={data} margin={{ top: 0, right: 20, left: 30, bottom: 0 }}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="PRODUCT" fontFamily="sans-serif" tickSize={10} dy={5} />
      <YAxis type="number" domain={["dataMin", "dataMax"]} />
      <Tooltip />
      <Legend verticalAlign="top" />
      <Bar dataKey="EXPOSED" stackId="a" fill="#F63107" />
      <Bar dataKey="CONTROL" stackId="b" fill="#074AF6" />
    </BarChart>
  </ResponsiveContainer>
);

export default ControlExposedChart;
