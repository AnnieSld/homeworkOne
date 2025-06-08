import { useState, useEffect } from "react";
import Header from "./components/Header";
import TaskStats from "./components/TaskStats";
import InsertTask from "./components/InsertTask";
import TaskList from "./components/TaskList";
import Concepts from "./components/Concepts";
import { TaskProvider } from "./context/TaskContext";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    setDarkMode(stored === "dark");
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", darkMode ? "dark" : "light");
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  return (
    <TaskProvider>
      <main className="max-w-3xl mx-auto p-4 min-h-screen transition-all">
      
        <button
          className="mb-4 px-4 py-2 rounded bg-blue-600 text-white"
          onClick={() => setDarkMode((prev) => !prev)}
        >
          {darkMode ? "Modo Claro" : "Modo Oscuro"}
        </button>
        <Header themeDark={darkMode} />
        <TaskStats darkMode={darkMode} />
        <InsertTask darkMode={darkMode} />
        <TaskList darkMode={darkMode} />
        <Concepts dark={darkMode} />
      </main>
    </TaskProvider>
  );
}