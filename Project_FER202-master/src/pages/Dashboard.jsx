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
