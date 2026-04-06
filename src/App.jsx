import { useState } from "react";
import { AppProvider } from "./context/AppContext";
import Dashboard from "./pages/Dashboard";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TransactionsPage from "./pages/Transactions";
import Insights from "./pages/Insights";

function App() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  return (
    <AppProvider>
      <Router>
        <Sidebar collapsed={sidebarCollapsed} setCollapsed={setSidebarCollapsed} />
        <div className={`main-content ${sidebarCollapsed ? "collapsed" : ""}`}>
          <Navbar />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/transactions" element={<TransactionsPage />} />
            <Route path="/insights" element={<Insights />} />
          </Routes>
        </div>
      </Router>
    </AppProvider>
  );
}

export default App;