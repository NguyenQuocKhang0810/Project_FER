import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import FilterButton from '../components/DropdownFilter';
import Datepicker from '../components/Datepicker';
import TabAllCenters from '../components/TabAllCenter';
import TabWalterGibson from '../components/TabWalterGibson';
import TabClass from '../components/TabClass';
import TabInfoStudent from '../components/TabInfoStudent';
import TabTeacherInfo from '../components/TabTeacherInfo';

const Center = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const [activeTab, setActiveTab] = useState('allCenters');

    // Update active tab based on URL
    useEffect(() => {
        const path = location.pathname.split('/').pop() || 'allCenters'; // Default to 'allCenters' if path is empty
        setActiveTab(path);
    }, [location]);

    const handleTabChange = (tab) => {
        setActiveTab(tab);
        navigate(`/center${tab}`); // Adjusted path to match routes
    };

    return (
        <div className='w-full px-4 py-8 mx-auto sm:px-6 lg:px-8 max-w-9xl'>
            <div className='mb-8 sm:flex sm:justify-between sm:items-center'>
                <div className='mb-4 text-center sm:mb-0'>
                    <h1 className='text-2xl font-bold text-gray-800 md:text-3xl dark:text-gray-100'>
                        Center
                    </h1>
                </div>
                <div className='grid justify-start grid-flow-col gap-2 sm:auto-cols-max sm:justify-end'>
                    <FilterButton align='right' />
                    <Datepicker align='right' />
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

            <div className='p-8'>
                <Routes>
                    <Route
                        path=''
                        element={
                            <TabAllCenters onTabChange={handleTabChange} />
                        }
                    />
                    <Route
                        path='walterGibson'
                        element={
                            <TabWalterGibson
                                onTabChange={handleTabChange}
                                showAllCenter={true}
                            />
                        }
                    />
                    <Route
                        path='class'
                        element={<TabClass onTabChange={handleTabChange} />}
                    />
                    <Route
                        path='studentInfo'
                        element={
                            <TabInfoStudent onTabChange={handleTabChange} />
                        }
                    />
                    <Route
                        path='teacherInfo'
                        element={
                            <TabTeacherInfo
                                onTabChange={handleTabChange}
                                teacherActive={false}
                            />
                        }
                    />
                </Routes>
            </div>
        </div>
    );
};

export default Center;
