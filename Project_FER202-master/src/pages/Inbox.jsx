import React, { useState } from 'react';

import Sidebar from '../partials/Sidebar';
import Header from '../partials/Header';
import FilterButton from '../components/DropdownFilter';
import Datepicker from '../components/Datepicker';

const Inbox = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [message, setMessage] = useState('');

  const sendMessage = () => {
    // Xử lý logic gửi tin nhắn tại đây
    console.log('Sent message:', message);
    setMessage('');
  };
  return (
    <div className='flex h-screen overflow-hidden'>
      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Content area */}
      <div className='relative flex flex-col flex-1 overflow-x-hidden overflow-y-auto'>
        {/* Site header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <main className='grow'>
          <div className='w-full px-4 py-8 mx-auto sm:px-6 lg:px-8 max-w-9xl'>
            {/* Dashboard actions */}
            <div className='mb-8 sm:flex sm:justify-between sm:items-center'>
              {/* Left: Title */}
              <div className='mb-4 sm:mb-0'>
                <h1 className='text-2xl font-bold text-center text-gray-800 dark:text-gray-100 md:text-3xl sm:text-left'>
                  Inbox
                </h1>
              </div>

              {/* Right: Actions */}
              <div className='grid justify-start grid-flow-col gap-2 sm:auto-cols-max sm:justify-end'>
                <FilterButton align='right' />
                <Datepicker align='right' />
                <button className='text-gray-100 bg-gray-900 btn hover:bg-gray-800'>
                  <svg
                    className='fill-current shrink-0 xs:hidden'
                    width='16'
                    height='16'
                    viewBox='0 0 16 16'
                  >
                    <path d='M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1z' />
                  </svg>
                  <span className='hidden xs:block'>Add View</span>
                </button>
              </div>
            </div>

            {/* Chat Container */}
            <div className='container px-4 mx-auto lg:px-8'>
              {/* New Message Button */}
              <div className='flex justify-end mb-4'>
                <button className='flex items-center justify-center px-4 py-2 space-x-2 text-white transition-colors duration-200 bg-blue-600 rounded-lg hover:bg-blue-700 sm:w-auto'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='w-5 h-5'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M12 4.5v15m7.5-7.5h-15'
                    />
                  </svg>
                  <span>New Message</span>
                </button>
              </div>

              {/* Chat Interface */}
              <div className='rounded-lg bg-gray-50 dark:bg-gray-800 '>
                <div className='flex flex-col lg:flex-row h-[calc(100vh-300px)] '>
                  {/* Sidebar - Hidden on mobile, shown on larger screens */}
                  <div className='hidden w-full p-4 border-r border-gray-200 rounded-l-lg bg-gray-50 dark:bg-gray-800 lg:block lg:w-80 dark:border-r-gray-700'>
                    <div className='mb-4'>
                      <input
                        type='text'
                        placeholder='Search...'
                        className='w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                      />
                    </div>

                    {/* Contact List */}
                    <div className='space-y-4'>
                      <div className='flex items-center p-2 space-x-3 rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700'>
                        <img
                          src='https://randomuser.me/api/portraits/men/1.jpg'
                          alt=''
                          className='w-12 h-12 rounded-full'
                        />
                        <div>
                          <h3 className='font-medium dark:text-gray-100'>
                            Tom Anderson
                          </h3>
                          <div className='flex items-center'>
                            <span className='w-1.5 h-1.5 bg-green-500 rounded-full'></span>{' '}
                            <p className='ml-1 text-sm font-bold text-green-600'>
                              Online
                            </p>
                          </div>
                        </div>
                      </div>
                      {/* Add more contacts here */}
                    </div>
                  </div>

                  {/* Chat Area */}
                  <div className='flex flex-col flex-1'>
                    {/* Chat Header */}
                    <div className='flex items-center justify-between p-4 border-b dark:border-b-gray-700'>
                      <div className='flex items-center space-x-2'>
                        {/* Mobile menu button - Only shown on mobile */}
                        <button className='p-2 rounded-lg lg:hidden hover:bg-gray-100 dark:hover:bg-gray-700'>
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            className='w-6 h-6'
                            fill='none'
                            viewBox='0 0 24 24'
                            stroke='currentColor'
                          >
                            <path
                              strokeLinecap='round'
                              strokeLinejoin='round'
                              strokeWidth={2}
                              d='M4 6h16M4 12h16m-7 6h7'
                            />
                          </svg>
                        </button>
                        <div className='flex items-center space-x-2'>
                          <h3 className='font-semibold dark:text-gray-100'>
                            Tom Anderson
                          </h3>
                          <span className='w-2 h-2 bg-green-500 rounded-full'></span>
                        </div>
                      </div>

                      <div className='flex items-center space-x-3'>
                        <button className='p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700'>
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            className='w-6 h-6'
                            fill='none'
                            viewBox='0 0 24 24'
                            stroke='currentColor'
                          >
                            <path
                              strokeLinecap='round'
                              strokeLinejoin='round'
                              strokeWidth={1.5}
                              d='M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z'
                            />
                          </svg>
                        </button>
                        <button className='p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700'>
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            className='w-6 h-6'
                            fill='none'
                            viewBox='0 0 24 24'
                            stroke='currentColor'
                          >
                            <path
                              strokeLinecap='round'
                              strokeLinejoin='round'
                              strokeWidth={1.5}
                              d='m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z'
                            />
                          </svg>
                        </button>
                        <button className='p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700'>
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            className='w-6 h-6'
                            fill='none'
                            viewBox='0 0 24 24'
                            stroke='currentColor'
                          >
                            <path
                              strokeLinecap='round'
                              strokeLinejoin='round'
                              strokeWidth={1.5}
                              d='M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z'
                            />
                            <path
                              strokeLinecap='round'
                              strokeLinejoin='round'
                              strokeWidth={1.5}
                              d='M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z'
                            />
                          </svg>
                        </button>
                      </div>
                    </div>

                    {/* Messages Area */}
                    <div className='flex-1 p-4 space-y-4 overflow-y-auto bg-gray-50 dark:bg-gray-900'>
                      {/* Received Message */}
                      <div className='flex items-start space-x-3'>
                        <img
                          src='https://randomuser.me/api/portraits/men/1.jpg'
                          alt=''
                          className='w-8 h-8 rounded-full sm:w-10 sm:h-10'
                        />
                        <div className='bg-gray-100 rounded-2xl py-2 px-4 max-w-[75%] sm:max-w-[70%]'>
                          <p className='text-sm text-gray-800 sm:text-base'>
                            Hi, I wonder when if there is going to be anyt?
                          </p>
                        </div>
                      </div>

                      {/* Sent Message */}
                      <div className='flex items-start justify-end space-x-3'>
                        <div className='bg-blue-500 rounded-2xl py-2 px-4 max-w-[75%] sm:max-w-[70%]'>
                          <p className='text-sm text-white sm:text-base'>
                            Sure, I want to know when the new sp ?
                          </p>
                        </div>
                        <img
                          src='https://randomuser.me/api/portraits/men/2.jpg'
                          alt=''
                          className='w-8 h-8 rounded-full sm:w-10 sm:h-10'
                        />
                      </div>
                    </div>

                    {/* Input Area */}
                    <div className='p-4 border-t border-gray-200 dark:border-t-gray-700'>
                      <div className='flex items-center space-x-2'>
                        <input
                          type='text'
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          className='flex-1 px-4 py-2 text-sm bg-gray-100 rounded-full sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-500'
                          placeholder='Type your message...'
                        />
                        <button
                          onClick={sendMessage}
                          className='p-2 text-white transition-colors duration-200 bg-blue-500 rounded-full sm:p-3 hover:bg-blue-600'
                        >
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            className='w-5 h-5 rotate-45 sm:h-6 sm:w-6'
                            fill='none'
                            viewBox='0 0 24 24'
                            stroke='currentColor'
                          >
                            <path
                              strokeLinecap='round'
                              strokeLinejoin='round'
                              strokeWidth={2}
                              d='M12 19l9 2-9-18-9 18 9-2zm0 0v-8'
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Inbox;
