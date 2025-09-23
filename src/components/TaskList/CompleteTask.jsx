import React from 'react';

const CompleteTask = ({ data, onComplete }) => {
  return (
    <div className="flex-shrink-0 h-full w-[300px] p-5 bg-blue-400 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300">
      <div className="flex justify-between items-center">
        <h3 className="bg-red-600 text-sm px-3 py-1 rounded">{data.category}</h3>
        <h4 className="text-sm">{data.taskDate}</h4>
      </div>
      <h2 className="mt-5 text-2xl font-semibold">{data.taskTitle}</h2>
      <p className="text-sm mt-2">{data.taskDescription}</p>
      <div className="mt-6">
        <button
          onClick={() => onComplete && onComplete(data)}
          className="w-full bg-green-600 rounded font-medium py-1 px-2 text-xs hover:bg-green-700 transition-all duration-300"
        >
          Complete
        </button>
      </div>
    </div>
  );
};

export default CompleteTask;