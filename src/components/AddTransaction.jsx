import { useState, useContext } from "react";
import { AppContext } from "../context/AppContext";

export default function AddTransaction() {
  const { addTransaction, role } = useContext(AppContext);

  const [form, setForm] = useState({
    title: "",
    amount: "",
    type: "expense",
    category: "",
    date: "",
  });

  if (role !== "admin") return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    addTransaction({ ...form, amount: Number(form.amount) });
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <input placeholder="Title" onChange={(e) => setForm({ ...form, title: e.target.value })} />
      <input type="number" placeholder="Amount" onChange={(e) => setForm({ ...form, amount: e.target.value })} />
      <input placeholder="Category" onChange={(e) => setForm({ ...form, category: e.target.value })} />
      <input type="date" onChange={(e) => setForm({ ...form, date: e.target.value })} />

      <select onChange={(e) => setForm({ ...form, type: e.target.value })}>
        <option value="expense">Expense</option>
        <option value="income">Income</option>
      </select>

      <button>Add</button>
    </form>
  );
}