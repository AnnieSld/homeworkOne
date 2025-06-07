import React from 'react';

const concepts = [
  'Componentes funcionales y props',
  'useState para manejo de estado',
  'useEffect para efectos secundarios',
  'useRef para referencias DOM',
  'useContext para estado global',
  'createContext para crear contextos',
];

const Concepts: React.FC = () => {
  return (
    <div className="bg-blue-50 rounded-lg p-4">
      <h2 className="font-semibold mb-2">🧪 Conceptos implementados en este laboratorio:</h2>
      <ul className="list-disc pl-6 space-y-1">
        {concepts.map((c, i) => (
          <li key={i} className="text-green-700">✅ {c}</li>
        ))}
      </ul>
    </div>
  );
};

export default Concepts;

