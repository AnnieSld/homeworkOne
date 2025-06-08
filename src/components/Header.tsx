import React, { useEffect, useState } from "react";
import { Moon, Sun, User, Clock } from "lucide-react";
import InsertTask from "./InsertTask";

interface HeaderProps {
  themeDark?: boolean;
  onToggleTheme?: () => void;
}

function Header({ themeDark = false, onToggleTheme }: HeaderProps) {
  const [hora, setHora] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const interval = setInterval(() => {
      setHora(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const headerStyles = {
    backgroundColor: themeDark ? "#1e293b" : "#edf5fb", 
    color: themeDark ? "#f8fafc" : "#0f172a",          
  };

  return (
    <header
      style={headerStyles}
        className="flex justify-between items-start p-4 rounded-xl shadow transition-colors duration-300"
    >
      <div className="flex items-center gap-3">
        <User className="w-6 h-6" />
        <div>
          <h1 className="text-xl font-bold">¡Hola, Estudiante!</h1>
          <p className="text-sm opacity-70">Laboratorio de React Hooks</p>
        </div>
      </div>

      <div className="flex flex-col items-end gap-2">
        <div className="flex items-center text-sm opacity-70">
          <Clock className="w-4 h-4 mr-1" />
          <span className="font-mono">{hora}</span>
        </div>
        <button
          className={`mt-2 flex items-center gap-1 text-sm px-2 py-1 rounded ${
            themeDark
              ? "bg-gray-950 text-white" 
              : "bg-gray-200 text-gray-900"
          }`}
          onClick={onToggleTheme}
        >
          {themeDark ? (
            <>
              <Sun className="w-4 h-4" />
              Claro
            </>
          ) : (
            <>
              <Moon className="w-4 h-4" />
              Oscuro
            </>
          )}
        </button>
        
        

      </div>
    </header>
    
  );
}

export default Header;
