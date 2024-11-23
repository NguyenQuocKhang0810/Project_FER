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
