import { FaHome, FaChartPie, FaList } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Sidebar({ collapsed, setCollapsed }) {
  return (
    <div className={`sidebar ${collapsed ? "collapsed" : ""}`}>
      <h2 onClick={() => setCollapsed(!collapsed)}>
        {collapsed ? "💰" : "Finance"}
      </h2>

      <div className="menu-item">
        <Link to="/"><FaHome /> {!collapsed && "Dashboard"}</Link>
      </div>

      <div className="menu-item">
        <Link to="/transactions"><FaList /> {!collapsed && "Transactions"}</Link>
      </div>

      <div className="menu-item">
        <Link to="/insights"><FaChartPie /> {!collapsed && "Insights"}</Link>
      </div>
    </div>
  );
}