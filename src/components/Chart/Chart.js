import React, { PureComponent } from "react";
import "./Chart.css";
import {
  ResponsiveContainer,
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const data = [
  {
    name: "Primary Case",
    uv: 590,
    pv: 1000,
    amt: 1400,
  },
  {
    name: "Specialty Case",
    uv: 868,
    pv: 967,
    amt: 1506,
  },
  {
    name: "Emergency Case",
    uv: 1397,
    pv: 1098,
    amt: 989,
  },
  {
    name: "Urgent Case",
    uv: 1480,
    pv: 1200,
    amt: 1228,
  },
  {
    name: "Long-term Case",
    uv: 1520,
    pv: 1108,
    amt: 1100,
  },
  {
    name: "Hospice Case",
    uv: 1400,
    pv: 680,
    amt: 1700,
  },
];

const Chart = () => {
  return (
    <div className="chart-parent">
      <h3 className="case-study">
        {" "}
        Case Study Of Our Patient <span>2021</span>
      </h3>
      <div style={{ width: "80%", height: 400 }}>
        <ResponsiveContainer>
          <ComposedChart
            width={500}
            height={400}
            data={data}
            margin={{
              top: 20,
              right: 20,
              bottom: 20,
              left: 20,
            }}
          >
            <CartesianGrid stroke="#f5f5f5" />
            <XAxis dataKey="name" scale="band" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Area
              type="monotone"
              dataKey="amt"
              fill="#8884d8"
              stroke="#8884d8"
            />
            <Bar dataKey="pv" barSize={20} fill="#413ea0" />
            <Line type="monotone" dataKey="uv" stroke="#ff7300" />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Chart;
