import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <div className="navbar">
      <h2>Dashboard</h2>

      <div className="nav-right">
        <ThemeToggle />
        <div className="profile">👤 Shruti</div>
      </div>
    </div>
  );
}