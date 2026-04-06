import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import TransactionList from "../components/TransactionList";

export default function Transactions() {
  const { transactions } = useContext(AppContext);

  return (
    <div>
      <h2>All Transactions</h2>
      <TransactionList transactions={transactions} />
    </div>
  );
}