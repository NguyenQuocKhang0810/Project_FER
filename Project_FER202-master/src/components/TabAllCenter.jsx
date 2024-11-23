import React from 'react';
import { DefaultPagination } from './Pagination';

const TabAllCenters = ({ onTabChange }) => {
    return (
        <div className='p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800'>
            <h1 className='mb-4 text-xl font-bold text-blue-600'>
                All Centers
            </h1>
            <div className='min-h-screen p-6 bg-gray-100 dark:bg-gray-700'>
                <div className='flex items-center justify-between mb-4'>
                    <div className='flex space-x-4'>
                        <button className='px-4 py-2 border border-gray-300 rounded-lg'>
                            Filter
                        </button>
                        <input
                            type='text'
                            placeholder='Search...'
                            className='px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600'
                        />
                    </div>
                </div>
                <table className='min-w-full bg-white border rounded-lg dark:bg-gray-800 '>
                    <thead>
                        <tr>
                            <th className='px-6 py-3 text-sm leading-4 text-left text-gray-600 border-b-2 border-gray-300 dark:text-gray-100'>
                                Name
                            </th>
                            <th className='px-6 py-3 text-sm leading-4 text-left text-gray-600 border-b-2 border-gray-300 dark:text-gray-100'>
                                Location
                            </th>
                            <th className='px-6 py-3 text-sm leading-4 text-left text-gray-600 border-b-2 border-gray-300 dark:text-gray-100'>
                                Orders
                            </th>
                            <th className='px-6 py-3 text-sm leading-4 text-left text-gray-600 border-b-2 border-gray-300 dark:text-gray-100'>
                                Spent
                            </th>
                        </tr>
                    </thead>
                    <tbody className='divide-y divide-gray-200'>
                        {Array(10)
                            .fill(0)
                            .map((_, index) => (
                                <tr
                                    key={index}
                                    className='transition-colors cursor-pointer '
                                    onClick={() => onTabChange('/walterGibson')}
                                >
                                    <td className='px-6 py-4'>
                                        <div className='flex items-center space-x-4'>
                                            <div className='flex items-center justify-center w-10 h-10 text-gray-700 bg-gray-200 rounded-full'>
                                                W
                                            </div>
                                            <span className='text-sm font-medium text-gray-900 dark:text-gray-100'>
                                                Walter Gibson
                                            </span>
                                        </div>
                                    </td>
                                    <td className='px-6 py-4 text-sm text-gray-600 dark:text-gray-300'>
                                        Sawaynchester
                                    </td>
                                    <td className='px-6 py-4 text-sm text-gray-600 dark:text-gray-300'>
                                        5
                                    </td>
                                    <td className='px-6 py-4 text-sm text-gray-600 dark:text-gray-300'>
                                        $96.14
                                    </td>
                                </tr>
                            ))}
                    </tbody>
                </table>
                <div className='flex items-center justify-between mt-4'>
                    <DefaultPagination />
                </div>
            </div>
        </div>
    );
};

export default TabAllCenters;
