import React, { useEffect, useState } from "react";
import { Moon, Sun, User, Clock } from "lucide-react";

interface HeaderProps {
  themeDark?: boolean;
}

function Header({ themeDark = false }: HeaderProps) {
  const [hora, setHora] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const interval = setInterval(() => {
      setHora(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header
      className={`${
        themeDark ? "bg-gray-800 text-white" : "bg-blue-100 text-black"
      } flex justify-between items-start p-4 rounded-xl mb-6 shadow relative`}
    >
      {/* Info usuario */}
      <div className="flex items-center gap-3">
        <User className="w-6 h-6" />
        <div>
          <h1 className="text-xl font-bold">¡Hola, Estudiante!</h1>
          <p className="text-sm opacity-70">Laboratorio de React Hooks</p>
        </div>
      </div>

      {/* Reloj y modo */}
      <div className="flex flex-col items-end gap-2">
        <div className="flex items-center text-sm opacity-70">
          <Clock className="w-4 h-4 mr-1" />
          <span className="font-mono">{hora}</span>
        </div>
        <span className="mt-2 flex items-center gap-1 text-sm">
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
        </span>
      </div>
    </header>

  );
}

export default Header;
