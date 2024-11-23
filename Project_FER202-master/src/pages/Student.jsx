import React, { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import FilterButton from '../components/DropdownFilter';
import Datepicker from '../components/Datepicker';
import TabListStudent from '../components/TabListStudent';
import TabInfoStudent from '../components/TabInfoStudent';

const Student = () => {
    const navigate = useNavigate(); // Define navigate here
    const [activeTab, setActiveTab] = useState('student');
    const handleTabChange = (tab) => {
        setActiveTab(tab);
        navigate(`/student${tab}`); // Use navigate to change route
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
                        Students
                    </h1>
                </div>
            </div>

            <div className='p-8'>
                <Routes>
                    <Route
                        path='/'
                        element={
                            <TabListStudent onTabChange={handleTabChange} />
                        }
                    />
                    <Route
                        path='/studentInfo'
                        element={
                            <TabInfoStudent
                                onTabChange={handleTabChange}
                                showAllCenter={false}
                                studentActive={false}
                            />
                        }
                    />
                </Routes>
            </div>
        </div>
    );
};

export default Student;
