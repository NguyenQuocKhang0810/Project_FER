import React, { useState } from 'react';


import { Link } from 'react-router-dom';

const Setting = () => {

    return (
        <div className='w-full px-4 py-8 mx-auto sm:px-6 lg:px-8 max-w-9xl'>
            {/* Dashboard actions */}
            <div className='mb-8 sm:flex sm:justify-between sm:items-center'>
                {/* Left: Title */}
                <div className='mb-4 text-center sm:mb-0'>
                    <h1 className='text-2xl font-bold text-gray-800 md:text-3xl dark:text-gray-100'>
                        Settings
                    </h1>
                </div>

                {/* Right: Actions */}
                <div className='grid justify-start grid-flow-col gap-2 sm:auto-cols-max sm:justify-end'>
                    <button className='px-4 py-2 text-gray-600 border border-solid rounded-md dark:text-gray-100'>
                        Cancle
                    </button>
                    <button className='px-4 py-2 text-white bg-blue-600 rounded-md'>
                        Save
                    </button>
                </div>
            </div>

            {/* Cards */}
            <div className='max-w-6xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800'>
                <h2 className='mb-4 text-xl font-semibold dark:text-gray-100'>
                    Settings
                </h2>

                <div className='flex mb-6 space-x-4 border-b'>
                    <button className='px-4 py-2 text-blue-600 border-b-2 border-blue-600'>
                        Notifications
                    </button>
                    <Link to='/information'>
                        <button className='px-4 py-2 text-gray-600 dark:text-gray-100'>
                            Account
                        </button>
                    </Link>
                    <button className='px-4 py-2 text-gray-600 dark:text-gray-100'>
                        Security
                    </button>
                </div>

                <div className='flex items-center justify-between mb-4'>
                    <div>
                        <p className='text-sm font-medium dark:text-gray-100'>
                            Personalized Offers
                        </p>
                        <p className='text-xs text-gray-500'>
                            Receive offers made special for you
                        </p>
                    </div>
                    <label className='relative inline-flex items-center cursor-pointer'>
                        <input type='checkbox' className='sr-only peer' />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                    </label>
                </div>

                <div className='flex items-center justify-between mb-4'>
                    <div>
                        <p className='text-sm font-medium dark:text-gray-100'>
                            Online Webinars
                        </p>
                        <p className='text-xs text-gray-500'>
                            Get notified about upcoming webinars
                        </p>
                    </div>
                    <label className='relative inline-flex items-center cursor-pointer'>
                        <input type='checkbox' className='sr-only peer' />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                    </label>
                </div>

                <div className='flex items-center justify-between mb-4'>
                    <div>
                        <p className='text-sm font-medium dark:text-gray-100'>
                            New Features
                        </p>
                        <p className='text-xs text-gray-500'>
                            Updates about new features and product releases
                        </p>
                    </div>
                    <label className='relative inline-flex items-center cursor-pointer'>
                        <input type='checkbox' className='sr-only peer' />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                    </label>
                </div>

                <div className='flex items-center justify-between mb-4'>
                    <div>
                        <p className='text-sm font-medium dark:text-gray-100'>
                            Security and Billing
                        </p>
                        <p className='text-xs text-gray-500'>
                            Account security and notifications about billing
                        </p>
                    </div>
                    <label className='relative inline-flex items-center cursor-pointer'>
                        <input type='checkbox' className='sr-only peer' />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                    </label>
                </div>

                <div className='flex items-center justify-between mb-6'>
                    <div>
                        <p className='text-sm font-medium dark:text-gray-100'>
                            Marketing
                        </p>
                        <p className='text-xs text-gray-500'>
                            Receive marketing newsletters about our new products
                        </p>
                    </div>
                    <label className='relative inline-flex items-center cursor-pointer'>
                        <input type='checkbox' className='sr-only peer' />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                    </label>
                </div>
            </div>
        </div>
    );
};

export default Setting;
