import React, { useContext, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider';
import { toast, Toaster } from 'react-hot-toast';

const CreateTask = () => {
  const [userData, setUserData] = useContext(AuthContext);

  const [taskTitle, setTaskTitle] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [taskDate, setTaskDate] = useState('');
  const [asignTo, setAsignTo] = useState('');
  const [category, setCategory] = useState('');

  const [newTask, setNewTask] = useState({});

  const submitHandler = (e) => {
    e.preventDefault();
    setNewTask({
      taskTitle,
      taskDescription,
      taskDate,
      category,
      active: false,
      newTask: true,
      failed: false,
      completed: false,
    });

    const data = userData;
    let assigned = false;
    data.forEach((elem) => {
      if (asignTo === elem.firstName) {
        elem.tasks.push(newTask);
        elem.taskCounts.newTask += 1;
        assigned = true;
      }
    });
    setUserData(data);

    // Reset form
    setTaskTitle('');
    setCategory('');
    setAsignTo('');
    setTaskDate('');
    setTaskDescription('');

    // Show neon toast
    if (assigned) {
      toast.custom(
        t => (
          <div
            className={`${
              t.visible ? 'animate-enter' : 'animate-leave'
            } w-80 p-4 bg-gradient-to-r from-emerald-400 via-indigo-500 to-pink-500 text-white rounded-xl shadow-[0_0_15px_rgba(0,255,200,0.7)] font-bold text-center`}
          >
            ✅ Task successfully assigned!
          </div>
        ),
        { duration: 3000 }
      );
    } else {
      toast.custom(
        t => (
          <div
            className={`${
              t.visible ? 'animate-enter' : 'animate-leave'
            } w-80 p-4 bg-gradient-to-r from-red-500 via-pink-600 to-purple-700 text-white rounded-xl shadow-[0_0_15px_rgba(255,0,50,0.7)] font-bold text-center`}
          >
            ⚠️ Employee not found. Task not assigned.
          </div>
        ),
        { duration: 3000 }
      );
    }
  };

  const inputFields = [
    { placeholder: 'Task Title', type: 'text', value: taskTitle, setter: setTaskTitle },
    { placeholder: 'Task Date', type: 'date', value: taskDate, setter: setTaskDate },
    { placeholder: 'Assign To', type: 'text', value: asignTo, setter: setAsignTo },
    { placeholder: 'Category', type: 'text', value: category, setter: setCategory },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 p-6">
      {/* Toaster for custom neon popups */}
      <Toaster
        position="top-right"
        reverseOrder={false}
        toastOptions={{
          duration: 3000,
        }}
      />

      <div className="relative w-full max-w-3xl bg-white/10 backdrop-blur-xl rounded-3xl shadow-2xl p-10 hover:scale-105 transition-transform duration-500">
        <h1 className="text-4xl text-white font-extrabold mb-10 text-center animate-bounce">Create Task</h1>

        <form onSubmit={submitHandler} className="flex flex-col gap-6">
          {inputFields.map((field, idx) => (
            <div key={idx} className="relative group">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-emerald-400 via-indigo-500 to-pink-500 opacity-0 group-focus-within:opacity-100 transition-all duration-300 blur-xl"></div>

              <input
                type={field.type}
                value={field.value}
                onChange={(e) => field.setter(e.target.value)}
                required
                placeholder={field.placeholder}
                className="relative w-full py-5 px-5 rounded-2xl bg-gradient-to-r from-gray-800 via-gray-900 to-gray-800 text-white border-2 border-gray-600 outline-none focus:border-transparent focus:ring-0 transition-all duration-300 z-10 placeholder:text-gray-400 placeholder:italic placeholder:text-base"
              />
            </div>
          ))}

          <div className="relative group">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-emerald-400 via-indigo-500 to-pink-500 opacity-0 group-focus-within:opacity-100 transition-all duration-300 blur-xl"></div>
            <textarea
              value={taskDescription}
              onChange={(e) => setTaskDescription(e.target.value)}
              required
              placeholder="Task Description"
              className="relative w-full h-44 py-5 px-5 rounded-2xl bg-gradient-to-r from-gray-800 via-gray-900 to-gray-800 text-white border-2 border-gray-600 outline-none focus:border-transparent focus:ring-0 transition-all duration-300 resize-none z-10 placeholder:text-gray-400 placeholder:italic placeholder:text-base"
            ></textarea>
          </div>

          <button className="w-full py-4 rounded-2xl bg-gradient-to-r from-emerald-400 to-emerald-600 text-white font-bold text-lg shadow-lg hover:shadow-emerald-500/50 transform hover:scale-105 transition-all duration-300 animate-pulse">
            Create Task
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateTask;

