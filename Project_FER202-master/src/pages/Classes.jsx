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
