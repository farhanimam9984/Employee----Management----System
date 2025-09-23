import React from 'react';
import TaskList from '../TaskList/TaskList';
import Header from '../others/Header';
import TaskListNumbers from '../others/TaskListNumbers';
import { Toaster } from 'react-hot-toast';

const EmployeeDashboard = (props) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 p-10 flex flex-col gap-8">
      {/* React Hot Toast Toaster */}
      <Toaster position="top-right" reverseOrder={false} />

      {/* Header with animated gradient shadow */}
      <div className="relative">
        <Header
          changeUser={props.changeUser}
          data={props.data}
          className="text-white text-2xl font-extrabold backdrop-blur-md bg-white/10 p-4 rounded-2xl shadow-lg animate-fadeIn"
        />
      </div>

      {/* Task summary numbers with futuristic design */}
      <div className="relative flex flex-wrap gap-6 justify-center">
        <TaskListNumbers
          data={props.data}
          className="backdrop-blur-lg bg-white/10 rounded-3xl p-6 shadow-2xl hover:scale-105 transition-transform duration-500 animate-slideUp"
        />
      </div>

      {/* Task list cards with scrollable futuristic layout */}
      <div className="overflow-x-auto py-4">
        <div className="flex gap-6 animate-fadeIn">
          <TaskList
            data={props.data}
            className="flex gap-6"
          />
        </div>
      </div>

      {/* Floating animated neon gradient circles for aesthetics */}
      <div className="pointer-events-none absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute -top-32 -left-32 w-72 h-72 rounded-full bg-gradient-to-r from-emerald-400 via-indigo-500 to-pink-500 opacity-30 animate-spin-slow"></div>
        <div className="absolute bottom-10 right-10 w-60 h-60 rounded-full bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-500 opacity-30 animate-spin-slow-reverse"></div>
      </div>
    </div>
  );
};

export default EmployeeDashboard;