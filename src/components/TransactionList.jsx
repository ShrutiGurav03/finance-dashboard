import { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";

export default function TransactionList() {
  const { transactions, deleteTransaction, role } = useContext(AppContext);
  const [filter, setFilter] = useState("all");

  const filtered = transactions.filter((t) =>
    filter === "all" ? true : t.type === filter
  );

  if (filtered.length === 0) {
    return <p>No transactions yet 🚀</p>;
  }

  return (
    <div>
      <select onChange={(e) => setFilter(e.target.value)}>
        <option value="all">All</option>
        <option value="income">Income</option>
        <option value="expense">Expense</option>
      </select>

      {filtered.map((t, i) => (
        <div key={i} className="tx">
          {t.title} - ₹{t.amount} ({t.category})
          {role === "admin" && (
            <button onClick={() => deleteTransaction(i)}>❌</button>
          )}
        </div>
      ))}
    </div>
  );
}