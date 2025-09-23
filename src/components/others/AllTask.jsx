import React, { useContext} from 'react';
import { AuthContext } from '../../context/AuthProvider';
import { toast, Toaster } from 'react-hot-toast';

const AllTask = () => {
  const [userData] = useContext(AuthContext);

  // Handle click to show number of tasks
  const handleClick = (employee, type) => {
    const count = employee.taskCounts[type];
    toast.custom(
      t => (
        <div
          className={`${
            t.visible ? 'animate-enter' : 'animate-leave'
          } w-60 p-3 bg-gradient-to-r from-purple-500 via-indigo-500 to-emerald-400 text-white rounded-xl shadow-[0_0_15px_rgba(0,255,200,0.7)] font-bold text-center`}
        >
          {employee.firstName} has {count} {type.replace(/([A-Z])/g, ' $1').toLowerCase()} task(s)
        </div>
      ),
      { duration: 2500 }
    );
  };

  return (
    <div className="relative bg-[#1c1c1c] p-5 rounded-xl mt-5 overflow-x-auto shadow-2xl animate-fadeIn">
      {/* Toaster for showing clicked task counts */}
      <Toaster position="top-right" reverseOrder={false} />

      {/* Header Row */}
      <div className="min-w-[700px] w-full mb-4 py-3 px-4 grid grid-cols-5 gap-4 rounded-xl text-center text-white text-sm md:text-base font-semibold">
        <div className="bg-pink-500 py-2 rounded-2xl border-2 border-black shadow-lg">Employee Name</div>
        <div className="bg-blue-500 py-2 rounded-2xl border-2 border-black shadow-lg">New Task</div>
        <div className="bg-yellow-500 py-2 rounded-2xl border-2 border-black shadow-lg">Active Task</div>
        <div className="bg-green-900 py-2 rounded-2xl border-2 border-black shadow-lg">Completed Task</div>
        <div className="bg-red-500 py-2 rounded-2xl border-2 border-black shadow-lg">Failed Task</div>
      </div>

      {/* Task Rows */}
      <div className="min-w-[700px] w-full space-y-3">
        {userData.map((employee, idx) => (
          <div
            key={idx}
            className="grid grid-cols-5 gap-4 py-3 px-4 border-2 border-emerald-500 rounded-xl text-center text-sm md:text-base text-white backdrop-blur-md bg-white/5 hover:bg-white/10 transition-all duration-300 hover:scale-[1.02] shadow-md cursor-pointer"
          >
            <div className="font-semibold">{employee.firstName}</div>
            <div
              className="text-blue-400 font-bold hover:text-blue-300 transition-colors duration-300"
              onClick={() => handleClick(employee, 'newTask')}
            >
              {employee.taskCounts.newTask}
            </div>
            <div
              className="text-yellow-400 font-bold hover:text-yellow-300 transition-colors duration-300"
              onClick={() => handleClick(employee, 'active')}
            >
              {employee.taskCounts.active}
            </div>
            <div
              className="text-green-400 font-bold hover:text-green-300 transition-colors duration-300"
              onClick={() => handleClick(employee, 'completed')}
            >
              {employee.taskCounts.completed}
            </div>
            <div
              className="text-red-500 font-bold hover:text-red-400 transition-colors duration-300"
              onClick={() => handleClick(employee, 'failed')}
            >
              {employee.taskCounts.failed}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllTask;
