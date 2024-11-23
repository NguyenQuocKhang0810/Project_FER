import React from 'react';

const TabTeacherInfo = ({
    onTabChange,
    showAllCenter = true,
    teacherActive = true
}) => {
    return (
        <div className='p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800'>
            <h1 className='flex mb-4 space-x-2 text-xl'>
                {showAllCenter && (
                    <span
                        className='flex items-center cursor-pointer'
                        onClick={() => onTabChange('allCenters')}
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

                {teacherActive ? (
                    <>
                        <span
                            className='flex items-center cursor-pointer'
                            onClick={() => onTabChange('')}
                        >
                            List teacher
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
                )}

                <span className='font-bold text-blue-600 cursor-pointer'>
                    Teacher Karina
                </span>
            </h1>

            <div className='min-h-screen p-6 bg-gray-100 dark:bg-gray-700'>
                <div className='grid grid-cols-2 gap-6 '>
                    <div className='p-6 bg-white rounded-lg shadow-md dark:bg-gray-800'>
                        <div className='flex items-center mb-4'>
                            <div className='flex items-center justify-center w-16 h-16 bg-gray-300 rounded-full'>
                                <span className='text-2xl font-bold text-white'>
                                    K
                                </span>
                            </div>
                            <div className='ml-4'>
                                <h2 className='text-lg font-semibold dark:text-gray-100'>
                                    Karina
                                </h2>
                                <p className='text-gray-500'>Ireland</p>
                                <p className='text-gray-500'>5 Orders</p>
                                <p className='text-gray-500'>
                                    Customer for 2 years
                                </p>
                            </div>
                        </div>

                        <div className='flex items-center mb-4'>
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                fill='currentColor'
                                viewBox='0 0 24 24'
                                strokeWidth='1.5'
                                stroke='currentColor'
                                className='w-6 h-6 text-yellow-400'
                            >
                                <path
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    d='M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z'
                                />
                            </svg>
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                fill='currentColor'
                                viewBox='0 0 24 24'
                                strokeWidth='1.5'
                                stroke='currentColor'
                                className='w-6 h-6 text-yellow-400'
                            >
                                <path
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    d='M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z'
                                />
                            </svg>
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                fill='currentColor'
                                viewBox='0 0 24 24'
                                strokeWidth='1.5'
                                stroke='currentColor'
                                className='w-6 h-6 text-yellow-400'
                            >
                                <path
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    d='M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z'
                                />
                            </svg>
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                fill='currentColor'
                                viewBox='0 0 24 24'
                                strokeWidth='1.5'
                                stroke='currentColor'
                                className='w-6 h-6 text-yellow-400'
                            >
                                <path
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    d='M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z'
                                />
                            </svg>
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                fill='currentColor'
                                viewBox='0 0 24 24'
                                strokeWidth='1.5'
                                stroke='currentColor'
                                className='w-6 h-6 text-yellow-400'
                            >
                                <path
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    d='M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z'
                                />
                            </svg>
                        </div>

                        <h3 className='mb-2 text-lg font-semibold'>Notes</h3>
                        <textarea
                            placeholder='Add notes about customer'
                            className='w-full p-3 border border-gray-300 rounded-lg dark:bg-gray-700'
                            rows='4'
                        />
                    </div>

                    <div className='p-6 bg-white rounded-lg shadow-md dark:bg-gray-800'>
                        <div className='flex items-center justify-between mb-4'>
                            <h3 className='text-lg font-semibold dark:text-gray-100'>
                                Overview
                            </h3>
                            <button className='font-semibold text-blue-500'>
                                Edit
                            </button>
                        </div>

                        <div className='mb-4'>
                            <p className='text-gray-500'>Address</p>
                            <p>831 Wilhelmine Glen</p>
                            <p>40583-2293</p>
                            <p>South Lelastad</p>
                            <p>Ireland</p>
                        </div>

                        <div className='mb-4'>
                            <p className='text-gray-500'>Email Address</p>
                            <p>lenora_rob@yahoo.com</p>
                        </div>

                        <div className='mb-4'>
                            <p className='text-gray-500'>Phone</p>
                            <p>636-458-4820</p>
                        </div>

                        {/* Delete Button */}
                        <button className='font-semibold text-red-500'>
                            Delete Teacher
                        </button>
                    </div>
                </div>
                {/* Fee Section */}
                <div className='mt-10 mb-10'>
                    <h2 className='mb-4 text-xl font-semibold dark:text-gray-100'>
                        Fee
                    </h2>
                    <table className='min-w-full border border-collapse border-gray-300 table-auto '>
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
            </div>
        </div>
    );
};

export default TabTeacherInfo;
