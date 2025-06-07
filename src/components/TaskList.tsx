import React from 'react';
import { useTasks } from '../context/TaskContext';

const priorityColors = {
  alta: 'bg-red-100 border-red-500',
  media: 'bg-yellow-100 border-yellow-500',
  baja: 'bg-green-100 border-green-500',
};

const TaskList: React.FC = () => {
  const { tasks } = useTasks();

  return (
    <div className="bg-white shadow rounded-lg p-4 mb-6">
      <h2 className="font-bold mb-2">Mis Tareas ({tasks.length})</h2>
      <ul>
        {tasks.map((task) => (
          <li
            key={task.id}
            className={`flex items-center justify-between border-l-4 p-3 mb-2 rounded ${priorityColors[task.priority]}`}
          >
            <span className="flex-1">{task.title}</span>
            <span className="text-xs bg-white border px-2 py-1 rounded capitalize">
              {task.priority}
            </span>
            <button className="text-red-500 ml-2 hover:text-red-700">🗑</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
