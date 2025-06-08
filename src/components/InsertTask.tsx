import React, { useState } from 'react';
import { useTasks } from '../context/TaskContext';
import type { Task } from '../types/Task';

interface InsertTaskProps {
  darkMode?: boolean;
}

const InsertTask: React.FC<InsertTaskProps> = ({ darkMode = false }) => {
  const [title, setTitle] = useState('');
  const [priority, setPriority] = useState<'alta' | 'media' | 'baja'>('media');
  const { addTask } = useTasks();

  const handleAdd = () => {
    if (!title.trim()) return;

    const newTask: Task = {
      id: Date.now(),
      title,
      priority,
      completed: false,
    };
    addTask(newTask);
    setTitle('');
    setPriority('media');
  };

  return (
    <div
      className={
        (darkMode ? 'bg-slate-800 text-white' : 'bg-white text-black') +
        ' p-4 rounded-lg mb-4'
      }
    >
      <div className="flex items-center gap-2 mb-4">
        <input
          className={
            'flex-grow p-2 border-[0.1px] rounded placeholder-gray-400 ' +
            (darkMode ? 'bg-gray-900 text-gray-100' : 'bg-gray-100 text-gray-900')
          }
          placeholder="¿Qué necesitas hacer?"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <select
          className="border-[0.5px] rounded p-2"
          value={priority}
          onChange={(e) => setPriority(e.target.value as any)}
        >
          <option value="alta">Alta</option>
          <option value="media">Media</option>
          <option value="baja">Baja</option>
        </select>
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          onClick={handleAdd}
        >
          + Agregar
        </button>
      </div>
    </div>
  );
};

export default InsertTask;
