import React from 'react';
import { useTasks } from '../context/TaskContext';

const TaskStats: React.FC = () => {
  const { tasks } = useTasks();
  const total = tasks.length;
  const completed = tasks.filter((t) => t.completed).length;
  const progress = total > 0 ? Math.round((completed / total) * 100) : 0;

  return (
    <div className="flex justify-around text-center p-4 mb-4 bg-blue-100 rounded-lg shadow">
      <div>
        <p className="text-gray-600 text-sm">Total de tareas</p>
        <p className="text-xl font-bold">{total}</p>
      </div>
      <div>
        <p className="text-gray-600 text-sm">Completadas</p>
        <p className="text-xl font-bold text-green-600">{completed}</p>
      </div>
      <div>
        <p className="text-gray-600 text-sm">Progreso</p>
        <p className="text-xl font-bold">{progress}%</p>
      </div>
    </div>
  );
};

export default TaskStats;
