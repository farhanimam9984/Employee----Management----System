import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';
import { toast } from 'react-hot-toast';

const AcceptTask = ({ data }) => {
  const [userData, setUserData] = useContext(AuthContext);

  const handleStatus = (status) => {
    // Find the user
    const updatedData = userData.map(user => {
      return {
        ...user,
        tasks: user.tasks.map(task => {
          if (task === data) {
            return { ...task, completed: status === 'completed', failed: status === 'failed', active: status === 'active' };
          }
          return task;
        })
      };
    });

    setUserData(updatedData);
    toast.success(`Task marked as ${status}`);
  };

  return (
    <div className='flex-shrink-0 h-full w-[300px] p-5 bg-red-400 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300'>
      <div className='flex justify-between items-center'>
        <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>{data.category}</h3>
        <h4 className='text-sm'>{data.taskDate}</h4>
      </div>
      <h2 className='mt-5 text-2xl font-semibold'>{data.taskTitle}</h2>
      <p className='text-sm mt-2'>{data.taskDescription}</p>
      <div className='flex justify-between mt-6'>
        <button
          onClick={() => handleStatus('completed')}
          className='bg-green-500 rounded font-medium py-1 px-2 text-xs hover:bg-green-600 transition-all duration-300'
        >
          Mark as Completed
        </button>
        <button
          onClick={() => handleStatus('failed')}
          className='bg-red-500 rounded font-medium py-1 px-2 text-xs hover:bg-red-600 transition-all duration-300'
        >
          Mark as Failed
        </button>
      </div>
    </div>
  );
};

export default AcceptTask;