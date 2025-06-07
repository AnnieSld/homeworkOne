import React, { useState } from 'react';
import { useTasks } from '../context/TaskContext';
import type { Task } from '../types/Task';

const InsertTask: React.FC = () => {
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
    <div className="flex items-center gap-2 mb-4">
      <input
        className="flex-grow p-2 border rounded"
        placeholder="¿Qué necesitas hacer?"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <select
        className="border rounded p-2"
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
  );
};

export default InsertTask;
