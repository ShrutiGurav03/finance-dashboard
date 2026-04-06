import { useContext } from "react";
import { AppContext } from "../context/AppContext";

export default function ThemeToggle() {
  const { darkMode, setDarkMode } = useContext(AppContext);

  return (
    <button onClick={() => setDarkMode(!darkMode)}>
      {darkMode ? "☀️ Light" : "🌙 Dark"}
    </button>
  );
}