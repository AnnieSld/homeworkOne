import React from 'react';
import { useTasks } from '../context/TaskContext';

const priorityColors = {
  alta: 'bg-red-100 border-red-500',
  media: 'bg-yellow-100 border-yellow-500',
  baja: 'bg-green-100 border-green-500',
};

const darkPriorityColors = {
  alta: 'bg-red-900 border-red-700',
  media: 'bg-yellow-900 border-yellow-700',
  baja: 'bg-green-900 border-green-700',
};

interface TaskListProps {
  darkMode?: boolean;
}

function TaskList({ darkMode = false }: TaskListProps) {
  const { tasks, toggleTask, removeTask } = useTasks();

  const themeBg = darkMode ? 'bg-gray-800 text-white' : 'bg-gray-50 text-black';
  const themeShadow = darkMode ? 'shadow-lg' : 'shadow';
  const themePriorityColors = darkMode ? darkPriorityColors : priorityColors;

  return (
    <div className={`${themeBg} ${themeShadow} rounded-lg p-4 mb-6`}>
      <div className="flex justify-between items-center mb-2">
        <h2 className="font-bold">Mis Tareas ({tasks.length})</h2>
      </div>
      <ul>
        {tasks.map((task) => (
          <li
            key={task.id}
            className={`flex items-center justify-between border-l-4 p-3 mb-2 rounded ${themePriorityColors[task.priority]} ${
              task.completed ? (darkMode ? 'bg-green-700' : 'bg-green-200') : ''
            }`}
          >
            <button
              className={`h-6 w-6 border-2 rounded-full mr-3 ${
                task.completed
                  ? (darkMode ? 'bg-green-500' : 'bg-green-600')
                  : (darkMode ? 'bg-gray-700 border-gray-500' : 'bg-white border-gray-400')
              }`}
              onClick={() => toggleTask(task.id)}
            />
            <span className={`flex-1 ${task.completed ? 'line-through text-gray-400' : ''}`}>
              {task.title}
            </span>
            <span className={`text-xs ${darkMode ? 'bg-gray-900 border-gray-600' : 'bg-white border'} px-2 py-1 rounded capitalize`}>
              {task.priority}
            </span>
            <button
              className="text-red-500 ml-2 hover:text-red-700"
              onClick={() => removeTask(task.id)}
            >
              🗑
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
