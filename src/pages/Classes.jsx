import React, { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import FilterButton from '../components/DropdownFilter';
import Datepicker from '../components/Datepicker';
import TabClass from '../components/TabClass';
import TabWalterGibson from '../components/TabWalterGibson';
import TabInfoStudent from '../components/TabInfoStudent';
import TabTeacherInfo from '../components/TabTeacherInfo';

const Classes = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const navigate = useNavigate(); // Define navigate here
    const [activeTab, setActiveTab] = useState('walterGibson');

    const handleTabChange = (tab) => {
        setActiveTab(tab);
        navigate(`/classes${tab}`); // Use navigate to change route
    };

    return (
        <div className='w-full px-4 py-8 mx-auto sm:px-6 lg:px-8 max-w-9xl'>
            {/* Dashboard actions */}
            <div className='mb-8 sm:flex sm:justify-between sm:items-center'>
                {/* Left: Title */}
                <div className='mb-4 text-center sm:mb-0'>
                    <h1 className='text-2xl font-bold text-gray-800 md:text-3xl dark:text-gray-100'>
                        Classes
                    </h1>
                </div>

                {/* Right: Actions */}
                <div className='grid justify-start grid-flow-col gap-2 sm:auto-cols-max sm:justify-end'>
                    <FilterButton align='right' />
                    <Datepicker align='right' />
                    <button className='flex items-center justify-center px-4 py-2 text-gray-100 bg-gray-900 rounded-md hover:bg-gray-800 dark:bg-gray-100 dark:text-gray-800 dark:hover:bg-gray-200'>
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

            {/* Tab content based on routes */}
            <div className='p-8'>
                <Routes>
                    <Route
                        path=''
                        element={
                            <TabWalterGibson
                                onTabChange={handleTabChange}
                                showAllCenter={false}
                            />
                        }
                    />
                    <Route
                        path='/class'
                        element={
                            <TabClass
                                onTabChange={handleTabChange}
                                showAllCenter={false}
                                clickActive={false}
                            />
                        }
                    />
                    <Route
                        path='/studentInfo'
                        element={
                            <TabInfoStudent
                                onTabChange={handleTabChange}
                                showAllCenter={false}
                            />
                        }
                    />
                    <Route
                        path='/teacherInfo'
                        element={
                            <TabTeacherInfo
                                onTabChange={handleTabChange}
                                showAllCenter={false}
                                teacherActive={false}
                            />
                        }
                    />
                </Routes>
            </div>
        </div>
    );
};

export default Classes;
