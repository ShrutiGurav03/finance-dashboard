import SummaryCards from "../components/SummaryCards";
import AddTransaction from "../components/AddTransaction";
import TransactionList from "../components/TransactionList";

export default function Dashboard() {
  return (
    <div>
      <SummaryCards />
      <AddTransaction />
      <TransactionList />
    </div>
  );
}