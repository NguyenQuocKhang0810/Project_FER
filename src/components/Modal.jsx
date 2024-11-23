import React from 'react';

const Modal = ({ isOpen, onClose, title, name, type, idSelect, options }) => {
    return (
        <>
            {isOpen && (
                <div className='fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-75'>
                    {/* Backdrop */}
                    <div
                        className='fixed inset-0 transition-opacity duration-300 bg-gray-800 bg-opacity-75'
                        onClick={onClose}
                    />
                    {/* Modal */}
                    <div
                        id='crud-modal'
                        tabIndex='-1'
                        aria-hidden='true'
                        className={`relative w-full max-w-md max-h-full p-4 transition-transform duration-300 transform ${
                            isOpen
                                ? 'translate-y-0 opacity-100'
                                : 'translate-y-4 opacity-0'
                        }`}
                    >
                        <div className='relative bg-white rounded-lg shadow dark:bg-gray-700'>
                            {/* Modal header */}
                            <div className='flex items-center justify-between p-4 border-b rounded-t md:p-5 dark:border-gray-600'>
                                <h3 className='text-lg font-semibold text-gray-900 dark:text-white'>
                                    {title}
                                </h3>
                                <button
                                    type='button'
                                    className='inline-flex items-center justify-center w-8 h-8 text-sm text-gray-400 bg-transparent rounded-lg hover:bg-gray-200 hover:text-gray-900 ms-auto dark:hover:bg-gray-600 dark:hover:text-white'
                                    onClick={onClose}
                                >
                                    <svg
                                        className='w-3 h-3'
                                        aria-hidden='true'
                                        xmlns='http://www.w3.org/2000/svg'
                                        fill='none'
                                        viewBox='0 0 14 14'
                                    >
                                        <path
                                            stroke='currentColor'
                                            strokeLinecap='round'
                                            strokeLinejoin='round'
                                            strokeWidth='2'
                                            d='M1 1l6 6m0 0l6 6M7 7l6-6M7 7L1 13'
                                        />
                                    </svg>
                                    <span className='sr-only'>Close modal</span>
                                </button>
                            </div>
                            {/* Modal body */}
                            <form className='p-4 md:p-5'>
                                <div className='grid grid-cols-2 gap-4 mb-4'>
                                    <div className='col-span-2'>
                                        <label
                                            htmlFor='name'
                                            className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                                        >
                                            {name}
                                        </label>
                                        <input
                                            type='text'
                                            name='name'
                                            id='name'
                                            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500'
                                            placeholder='Class name'
                                            required
                                        />
                                    </div>

                                    <div className=' sm:col-span-2'>
                                        <label
                                            htmlFor='category'
                                            className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                                        >
                                            {type}
                                        </label>

                                        <select
                                            id={idSelect || 'category'}
                                            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500'
                                        >
                                            {/* <option value=''>{`Choose ${type}`}</option> */}
                                            {(Array.isArray(options)
                                                ? options
                                                : []
                                            ).map((option, index) => (
                                                <option
                                                    key={index}
                                                    value={option.value}
                                                >
                                                    {option.label}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                    <div className='col-span-2'>
                                        <label
                                            htmlFor='description'
                                            className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                                        >
                                            Description
                                        </label>
                                        <textarea
                                            id='description'
                                            rows='4'
                                            className='block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                                            placeholder='Write description here'
                                        ></textarea>
                                    </div>
                                </div>
                                <div className='flex justify-end gap-2'>
                                    <button
                                        type='button' // Change type to "button" to prevent form submission
                                        className='inline-flex items-center justify-center w-full sm:w-auto px-5 py-2.5 text-sm font-medium text-white bg-gray-500 hover:bg-gray-600 focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-lg transition duration-200'
                                        onClick={onClose}
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        type='submit'
                                        className='inline-flex items-center justify-center w-full sm:w-auto px-5 py-2.5 text-sm font-medium text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg transition duration-200'
                                    >
                                        Add Class
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Modal;
