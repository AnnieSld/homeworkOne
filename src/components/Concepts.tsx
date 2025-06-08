import React from 'react';

const concepts = [
  'Componentes funcionales y props',
  'useState para manejo de estado',
  'useEffect para efectos secundarios',
  'useRef para referencias DOM',
  'useContext para estado global',
  'createContext para crear contextos',
];

const lightTheme = {
  '--background': '#fff',
  '--text-primary': '#222',
  '--accent': '#0070f3',
};

const darkTheme = {
  '--background': '#222',
  '--text-primary': '#fff',
  '--accent': '#79ffe1',
};

type ConceptsProps = {
  dark?: boolean;
};

function Concepts({ dark = false }: ConceptsProps) {
  const theme = dark ? darkTheme : lightTheme;

  return (
    <div
      style={{
        backgroundColor: theme['--background'],
        color: theme['--text-primary'],
        borderRadius: '0.5rem',
        padding: '1rem',
        transition: 'background 0.3s, color 0.3s',
      }}
    >
      <h2 className="font-semibold mb-2">🧪 Conceptos implementados en este laboratorio:</h2>
      <ul className="list-disc pl-6 space-y-1">
        {concepts.map((c, index) => (
          <li key={index} style={{ color: theme['--accent'] }}>✅ {c}</li>
        ))}
      </ul>
    </div>
  );
}

export default Concepts;
