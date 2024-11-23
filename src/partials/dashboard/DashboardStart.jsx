import React from 'react';

function DashboardStart() {
  return (
    <div className='grid grid-cols-4 gap-4'>
      <div className='bg-white dark:bg-gray-800 shadow-md rounded-lg p-4'>
        <h3 className='text-sm font-medium text-gray-600 dark:text-gray-400'>
          Total Students
        </h3>
        <div className='text-2xl font-bold text-gray-800 dark:text-gray-100'>
          7,653
        </div>
        <div className='flex items-center text-sm text-green-500 mt-1'>
          <span>22.45%</span>
          <svg className='w-4 h-4 fill-current ml-1' viewBox='0 0 20 20'>
            <path d='M10 0l5 10H5l5-10z'></path>
          </svg>
        </div>
      </div>

      {/* Card 2 */}
      <div className='bg-white dark:bg-gray-800 shadow-md rounded-lg p-4'>
        <h3 className='text-sm font-medium text-gray-600 dark:text-gray-400'>
          Total Teachers
        </h3>
        <div className='text-2xl font-bold text-gray-800 dark:text-gray-100'>
          427
        </div>
        <div className='flex items-center text-sm text-green-500 mt-1'>
          <span>22.45%</span>
          <svg className='w-4 h-4 fill-current ml-1' viewBox='0 0 20 20'>
            <path d='M10 0l5 10H5l5-10z'></path>
          </svg>
        </div>
      </div>

      {/* Card 3 */}
      <div className='bg-white dark:bg-gray-800 shadow-md rounded-lg p-4'>
        <h3 className='text-sm font-medium text-gray-600 dark:text-gray-400'>
          Students Present
        </h3>
        <div className='text-2xl font-bold text-gray-800 dark:text-gray-100'>
          7,237
        </div>
        <div className='flex items-center text-sm text-red-500 mt-1'>
          <span>5.4%</span>
          <svg className='w-4 h-4 fill-current ml-1' viewBox='0 0 20 20'>
            <path d='M10 20l5-10H5l5 10z'></path>
          </svg>
        </div>
      </div>

      {/* Card 4 */}
      <div className='bg-white dark:bg-gray-800 shadow-md rounded-lg p-4'>
        <h3 className='text-sm font-medium text-gray-600 dark:text-gray-400'>
          Teachers Present
        </h3>
        <div className='text-2xl font-bold text-gray-800 dark:text-gray-100'>
          423
        </div>
        <div className='flex items-center text-sm text-red-500 mt-1'>
          <span>1%</span>
          <svg className='w-4 h-4 fill-current ml-1' viewBox='0 0 20 20'>
            <path d='M10 20l5-10H5l5 10z'></path>
          </svg>
        </div>
      </div>
    </div>
  );
}

export default DashboardStart;
