import { motion } from "framer-motion";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";

export default function SummaryCards() {
  const { transactions } = useContext(AppContext);

  const income = transactions.filter(t => t.type === "income")
    .reduce((a, b) => a + b.amount, 0);

  const expense = transactions.filter(t => t.type === "expense")
    .reduce((a, b) => a + b.amount, 0);

  const balance = income - expense;

  const data = [
    { title: "Balance", value: balance },
    { title: "Income", value: income },
    { title: "Expense", value: expense }
  ];

  return (
    <div className="cards">
      {data.map((item, i) => (
        <motion.div
          key={i}
          className="card"
          whileHover={{ scale: 1.05 }}
        >
          <h3>{item.title}</h3>
          <p>₹{item.value}</p>
        </motion.div>
      ))}
    </div>
  );
}