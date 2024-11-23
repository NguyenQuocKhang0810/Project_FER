import React from 'react';

const TabInfoStudent = ({
    onTabChange,
    showAllCenter = true,
    studentActive = true
}) => {
    return (
        <div className='p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800'>
            <h1 className='flex mb-4 space-x-2 text-xl'>
                {/* Breadcrumb navigation */}
                {showAllCenter && (
                    <span
                        className='flex items-center cursor-pointer'
                        onClick={() => onTabChange('')}
                    >
                        All Centers
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            className='w-6 h-6 text-gray-500'
                            fill='none'
                            viewBox='0 0 24 24'
                            stroke='currentColor'
                            strokeWidth='2'
                        >
                            <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                d='M9 5l7 7-7 7'
                            />
                        </svg>
                    </span>
                )}

                {studentActive ? (
                    <>
                        <span
                            className='flex items-center cursor-pointer'
                            onClick={() => onTabChange('/walterGibson')}
                        >
                            Walter Gibson
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                className='w-6 h-6 text-gray-500'
                                fill='none'
                                viewBox='0 0 24 24'
                                stroke='currentColor'
                                strokeWidth='2'
                            >
                                <path
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    d='M9 5l7 7-7 7'
                                />
                            </svg>
                        </span>

                        <span
                            className='flex items-center cursor-pointer'
                            onClick={() => onTabChange('/class')}
                        >
                            SE18A
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                className='w-6 h-6 text-gray-500'
                                fill='none'
                                viewBox='0 0 24 24'
                                stroke='currentColor'
                                strokeWidth='2'
                            >
                                <path
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    d='M9 5l7 7-7 7'
                                />
                            </svg>
                        </span>
                    </>
                ) : (
                    <>
                        <span
                            className='flex items-center cursor-pointer'
                            onClick={() => onTabChange('')}
                        >
                            List Student
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                className='w-6 h-6 text-gray-500'
                                fill='none'
                                viewBox='0 0 24 24'
                                stroke='currentColor'
                                strokeWidth='2'
                            >
                                <path
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    d='M9 5l7 7-7 7'
                                />
                            </svg>
                        </span>
                    </>
                )}

                <span className='font-bold text-blue-600 cursor-pointer'>
                    Nguyễn Quốc Khang
                </span>
            </h1>

            <div className='min-h-screen p-6 bg-gray-100 dark:bg-gray-700'>
                {/* Fee Section */}
                <div className='mb-10'>
                    <h2 className='mb-4 text-xl font-semibold dark:text-gray-100'>
                        Fee
                    </h2>
                    <table className='min-w-full border border-collapse border-gray-300 table-auto'>
                        <thead>
                            <tr>
                                <th className='px-4 py-2 text-left border border-gray-300 dark:text-gray-100'>
                                    Fee Description
                                </th>
                                <th className='py-2 text-left border border-gray-300 px-7 dark:text-gray-100'>
                                    Amount (USD)
                                </th>
                                <th className='px-4 py-2 text-left border border-gray-300 dark:text-gray-100'>
                                    Note
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className='px-4 py-2 border border-gray-300'>
                                    Parking Fee
                                </td>
                                <td className='px-4 py-2 border border-gray-300'>
                                    $5
                                </td>
                                <td className='px-4 py-2 border border-gray-300'>
                                    Per month
                                </td>
                            </tr>
                            <tr>
                                <td className='px-4 py-2 border border-gray-300'>
                                    Tuition Fee (Per Term)
                                </td>
                                <td className='px-4 py-2 border border-gray-300'>
                                    $5000
                                </td>
                                <td className='px-4 py-2 border border-gray-300'>
                                    1 term = 3 months
                                </td>
                            </tr>
                            <tr>
                                <td className='px-4 py-2 font-semibold border border-gray-300'>
                                    Total
                                </td>
                                <td
                                    className='px-4 py-2 font-semibold text-center border border-gray-300'
                                    colSpan='2'
                                >
                                    $5005
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                {/* Status Section */}
                <div>
                    <h2 className='mb-4 text-xl font-semibold'>Status</h2>
                    <div className='grid grid-cols-3 gap-4'>
                        <div className='p-4 text-center bg-white rounded-lg shadow-md dark:bg-gray-800'>
                            <p className='text-gray-500 dark:text-gray-100'>
                                Class today
                            </p>
                            <p className='text-2xl font-bold'>2</p>
                        </div>
                        <div className='p-4 text-center bg-white rounded-lg shadow-md dark:bg-gray-800'>
                            <p className='text-gray-500 dark:text-gray-100'>
                                Present
                            </p>
                            <p className='text-2xl font-bold'>2</p>
                        </div>
                        <div className='p-4 text-center bg-white rounded-lg shadow-md dark:bg-gray-800'>
                            <p className='text-gray-500 dark:text-gray-100'>
                                Absent
                            </p>
                            <p className='text-2xl font-bold'>0</p>
                        </div>
                    </div>
                </div>
                {/* Information Section */}
                <div className='mt-6 mb-6'>
                    <h2 className='mb-4 text-xl font-semibold dark:text-gray-100'>
                        Information
                    </h2>
                    <div className='grid grid-cols-1 gap-4 sm:grid-cols-2'>
                        <div>
                            <label
                                className='block mb-2 text-sm font-medium dark:text-gray-100'
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
                                className='block mb-2 text-sm font-medium dark:text-gray-100'
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
                                className='block mb-2 text-sm font-medium dark:text-gray-100'
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
                                className='block mb-2 text-sm font-medium dark:text-gray-100'
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
                    <h2 className='mb-4 text-xl font-semibold dark:text-gray-100'>
                        Address
                    </h2>
                    <div className='grid grid-cols-1 gap-4 sm:grid-cols-2'>
                        <div>
                            <label
                                className='block mb-2 text-sm font-medium dark:text-gray-100'
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
                                className='block mb-2 text-sm font-medium dark:text-gray-100'
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
                                className='block mb-2 text-sm font-medium dark:text-gray-100'
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
                                className='block mb-2 text-sm font-medium dark:text-gray-100'
                                htmlFor='country'
                            >
                                Country
                            </label>
                            <select
                                id='country'
                                className='w-full p-2 border border-gray-300 rounded'
                            >
                                <option>Choose</option>
                                <option value='US'>United States</option>
                                <option value='CA'>Canada</option>
                                <option value='UK'>United Kingdom</option>
                                {/* Add more countries as needed */}
                            </select>
                        </div>
                        <div>
                            <label
                                className='block mb-2 text-sm font-medium dark:text-gray-100'
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
                        <div>
                            <label
                                className='block mb-2 text-sm font-medium dark:text-gray-100'
                                htmlFor='phone'
                            >
                                Postal Code
                            </label>
                            <input
                                type='text'
                                id='phone'
                                className='w-full p-2 border border-gray-300 rounded'
                                placeholder='Enter Poster Code'
                            />
                        </div>
                    </div>
                </div>
                <div className='flex justify-end space-x-4 mt-6'>
                    <button className='px-4 py-2 text-gray-600 bg-gray-100 rounded-md'>
                        Cancel
                    </button>
                    <button className='px-4 py-2 text-white bg-blue-600 rounded-md'>
                        Save
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TabInfoStudent;
