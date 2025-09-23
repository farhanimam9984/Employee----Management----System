import React from 'react';

const FailedTask = ({ data }) => {
  return (
    <div className="flex-shrink-0 h-full w-[300px] p-5 bg-yellow-400 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300">
      <div className="flex justify-between items-center">
        <h3 className="bg-red-600 text-sm px-3 py-1 rounded">{data.category}</h3>
        <h4 className="text-sm">{data.taskDate}</h4>
      </div>
      <h2 className="mt-5 text-2xl font-semibold">{data.taskTitle}</h2>
      <p className="text-sm mt-2">{data.taskDescription}</p>
      <div className="mt-6">
        <button className="w-full bg-red-500 rounded font-medium py-1 px-2 text-xs hover:bg-red-600 transition-all duration-300">
          Failed
        </button>
      </div>
    </div>
  );
};

export default FailedTask;