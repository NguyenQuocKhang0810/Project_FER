import React, { useState } from 'react';
import FilterButton from '../components/DropdownFilter';
import Datepicker from '../components/Datepicker';
import DashboardStart from '../partials/dashboard/DashboardStart';
import DasboardLineChart from '../partials/dashboard/DashboardLineChart';
import DashboardColChart from '../partials/dashboard/DashboardColChart';

function Dashboard() {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className='w-full px-4 py-8 mx-auto sm:px-6 lg:px-8 max-w-9xl'>
            {/* Dashboard actions */}
            <div className='mb-8 sm:flex sm:justify-between sm:items-center'>
                {/* Left: Title */}
                <div className='mb-4 sm:mb-0'>
                    <h1 className='text-2xl font-bold text-gray-800 md:text-3xl dark:text-gray-100'>
                        Dashboard
                    </h1>
                </div>

                {/* Right: Actions */}
                <div className='grid justify-start grid-flow-col gap-2 sm:auto-cols-max sm:justify-end'>
                    {/* Filter button */}
                    <FilterButton align='right' />
                    {/* Datepicker built with flatpickr */}
                    <Datepicker align='right' />
                    {/* Add view button */}
                    <button className='text-gray-100 bg-gray-900 btn hover:bg-gray-800 dark:bg-gray-100 dark:text-gray-800 dark:hover:bg-white'>
                        <svg
                            className='fill-current shrink-0 xs:hidden'
                            width='16'
                            height='16'
                            viewBox='0 0 16 16'
                        >
                            <path d='M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1z' />
                        </svg>
                        <span className='max-xs:sr-only'>Add View</span>
                    </button>
                </div>
            </div>

            <div className='flex flex-col gap-4'>
                <DashboardStart />
                <div className='flex flex-row w-full gap-4'>
                    <DasboardLineChart />
                    <DashboardColChart />
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
