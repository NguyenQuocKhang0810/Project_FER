import React, { useState } from 'react';

import Sidebar from '../partials/Sidebar';
import Header from '../partials/Header';
const Information = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className='flex h-screen overflow-hidden'>
            {/* Sidebar */}
            <Sidebar
                sidebarOpen={sidebarOpen}
                setSidebarOpen={setSidebarOpen}
            />

            {/* Content area */}
            <div className='relative flex flex-col flex-1 overflow-x-hidden overflow-y-auto'>
                {/*  Site header */}
                <Header
                    sidebarOpen={sidebarOpen}
                    setSidebarOpen={setSidebarOpen}
                />

                <main className='grow'>
                    <div className='w-full px-4 py-8 mx-auto sm:px-6 lg:px-8 max-w-9xl'>
                        {/* Dashboard actions */}
                        <div className='mb-8 sm:flex sm:justify-between sm:items-center'>
                            {/* Left: Title */}
                            <div className='mb-4 text-center sm:mb-0'>
                                <h1 className='text-2xl font-bold text-gray-800 md:text-3xl dark:text-gray-100'>
                                    Account
                                </h1>
                            </div>
                        </div>

                        {/* Cards */}
                        <div className='max-w-6xl mx-auto p-6 bg-white shadow-lg rounded-lg dark:bg-gray-800'>
                            {/* Information Section */}
                            <div className='mb-6'>
                                <h2 className='text-xl font-semibold mb-4 dark:text-gray-100'>
                                    Information
                                </h2>
                                <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                                    <div>
                                        <label
                                            className='block text-sm font-medium mb-2 dark:text-gray-100'
                                            htmlFor='firstName'
                                        >
                                            First Name
                                        </label>
                                        <input
                                            type='text'
                                            id='firstName'
                                            className='w-full p-2 border border-gray-300 rounded'
                                            placeholder='Enter first name'
                                        />
                                    </div>
                                    <div>
                                        <label
                                            className='block text-sm font-medium mb-2 dark:text-gray-100'
                                            htmlFor='lastName'
                                        >
                                            Last Name
                                        </label>
                                        <input
                                            type='text'
                                            id='lastName'
                                            className='w-full p-2 border border-gray-300 rounded'
                                            placeholder='Enter last name'
                                        />
                                    </div>
                                    <div>
                                        <label
                                            className='block text-sm font-medium mb-2 dark:text-gray-100'
                                            htmlFor='email'
                                        >
                                            Email Address
                                        </label>
                                        <input
                                            type='email'
                                            id='email'
                                            className='w-full p-2 border border-gray-300 rounded'
                                            placeholder='Enter email'
                                        />
                                    </div>
                                    <div>
                                        <label
                                            className='block text-sm font-medium mb-2 dark:text-gray-100'
                                            htmlFor='phoneNumber'
                                        >
                                            Phone Number
                                        </label>
                                        <input
                                            type='text'
                                            id='phoneNumber'
                                            className='w-full p-2 border border-gray-300 rounded'
                                            placeholder='Enter phone number'
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Customer Address Section */}
                            <div>
                                <h2 className='text-xl font-semibold mb-4 dark:text-gray-100'>
                                    Customer Address
                                </h2>
                                <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                                    <div>
                                        <label
                                            className='block text-sm font-medium mb-2 dark:text-gray-100'
                                            htmlFor='address'
                                        >
                                            Address
                                        </label>
                                        <input
                                            type='text'
                                            id='address'
                                            className='w-full p-2 border border-gray-300 rounded'
                                            placeholder='Enter address'
                                        />
                                    </div>
                                    <div>
                                        <label
                                            className='block text-sm font-medium mb-2 dark:text-gray-100'
                                            htmlFor='apartment'
                                        >
                                            Apartment
                                        </label>
                                        <input
                                            type='text'
                                            id='apartment'
                                            className='w-full p-2 border border-gray-300 rounded'
                                            placeholder='Enter apartment'
                                        />
                                    </div>
                                    <div>
                                        <label
                                            className='block text-sm font-medium mb-2 dark:text-gray-100'
                                            htmlFor='city'
                                        >
                                            City
                                        </label>
                                        <input
                                            type='text'
                                            id='city'
                                            className='w-full p-2 border border-gray-300 rounded'
                                            placeholder='Enter city'
                                        />
                                    </div>
                                    <div>
                                        <label
                                            className='block text-sm font-medium mb-2 dark:text-gray-100'
                                            htmlFor='country'
                                        >
                                            Country
                                        </label>
                                        <select
                                            id='country'
                                            className='w-full p-2 border border-gray-300 rounded'
                                        >
                                            <option>Choose</option>
                                            <option value='US'>
                                                United States
                                            </option>
                                            <option value='CA'>Canada</option>
                                            <option value='UK'>
                                                United Kingdom
                                            </option>
                                            {/* Add more countries as needed */}
                                        </select>
                                    </div>
                                    <div>
                                        <label
                                            className='block text-sm font-medium mb-2 dark:text-gray-100'
                                            htmlFor='phone'
                                        >
                                            Phone
                                        </label>
                                        <input
                                            type='text'
                                            id='phone'
                                            className='w-full p-2 border border-gray-300 rounded'
                                            placeholder='Enter phone number'
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className='flex justify-end space-x-4'>
                                <button className='px-4 py-2 text-gray-600 bg-gray-100 rounded-md'>
                                    Cancel
                                </button>
                                <button className='px-4 py-2 text-white bg-blue-600 rounded-md'>
                                    Save
                                </button>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default Information;
