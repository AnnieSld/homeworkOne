import { Moon, User, Clock } from 'lucide-react';

const Header = () => {
  const hora = new Date().toLocaleTimeString();

  return (
    <header className="flex justify-between items-start bg-blue-50 p-4 rounded-xl mb-6">
      <div className="flex items-center gap-3">
        <User className="w-6 h-6 text-gray-600" />
        <div>
          <h1 className="text-xl font-bold">¡Hola, Estudiante!</h1>
          <p className="text-sm text-gray-500">Laboratorio de React Hooks</p>
        </div>
      </div>

      <div className="flex flex-col items-end gap-2">
        <div className="flex items-center text-sm text-gray-600">
          <Clock className="w-4 h-4 mr-1" />
          <span className="font-mono">{hora}</span>
        </div>
        <div className="flex items-center bg-gray-300 rounded-full px-3 py-1 text-sm text-gray-700 gap-1">
          <Moon className="w-4 h-4 text-yellow-500" />
          <span>Oscuro</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
