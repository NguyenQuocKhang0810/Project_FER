import React, { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import FilterButton from '../components/DropdownFilter';
import Datepicker from '../components/Datepicker';
import TabListTeacher from '../components/TabListTeacher';
import TabTeacherInfo from '../components/TabTeacherInfo';
const Teachers = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const navigate = useNavigate(); // Define navigate here
    const [activeTab, setActiveTab] = useState('teacher');
    const handleTabChange = (tab) => {
        setActiveTab(tab);
        navigate(`/teacher${tab}`); // Use navigate to change route
    };

    const handleModalOpen = () => {
        setIsModalOpen(true);
    };

    const handleModalClose = () => {
        setIsModalOpen(false);
    };
    const optionsSelect = [
        { value: 'Huy', label: 'Huy' },
        { value: 'PC', label: 'Huy đẹp trai' },
        { value: 'Huy1', label: 'Huy lã lướt' },
        { value: 'Huy2', label: 'Huy kute123' }
    ];

    return (
        <div className='w-full px-4 py-8 mx-auto sm:px-6 lg:px-8 max-w-9xl'>
            {/* Dashboard actions */}
            <div className='mb-8 sm:flex sm:justify-between sm:items-center'>
                {/* Left: Title */}
                <div className='mb-4 text-center sm:mb-0'>
                    <h1 className='text-2xl font-bold text-gray-800 md:text-3xl dark:text-gray-100'>
                        Teachers
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

            {/* Cards */}
            <div className='p-8'>
                <Routes>
                    <Route
                        path='/'
                        element={
                            <TabListTeacher
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
                            />
                        }
                    />
                </Routes>
            </div>
        </div>
    );
};

export default Teachers;
