import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid
} from "recharts";

import { useContext } from "react";
import { AppContext } from "../context/AppContext";

export default function Insights() {
  const { transactions } = useContext(AppContext);

  const categoryData = {};

  transactions.forEach(t => {
    if (t.type === "expense") {
      categoryData[t.category] =
        (categoryData[t.category] || 0) + t.amount;
    }
  });

  const pieData = Object.keys(categoryData).map(key => ({
    name: key,
    value: categoryData[key]
  }));

  return (
    <div className="charts">

      <h2>Spending Breakdown</h2>

      <PieChart width={300} height={300}>
        <Pie data={pieData} dataKey="value">
          {pieData.map((_, i) => (
            <Cell key={i} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>

      <h2>Trend</h2>

      <LineChart width={400} height={300} data={transactions}>
        <XAxis dataKey="date" />
        <YAxis />
        <CartesianGrid />
        <Line type="monotone" dataKey="amount" />
        <Tooltip />
      </LineChart>

    </div>
  );
}