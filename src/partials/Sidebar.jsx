import React, { useState, useEffect, useRef } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import SidebarLinkGroup from './SidebarLinkGroup';
import Center from '../pages/Center';
function Sidebar({ sidebarOpen, setSidebarOpen, variant = 'default' }) {
    const location = useLocation();
    const { pathname } = location;

    const trigger = useRef(null);
    const sidebar = useRef(null);

    const storedSidebarExpanded = localStorage.getItem('sidebar-expanded');
    const [sidebarExpanded, setSidebarExpanded] = useState(
        storedSidebarExpanded === null
            ? false
            : storedSidebarExpanded === 'true'
    );

    // close on click outside
    useEffect(() => {
        const clickHandler = ({ target }) => {
            if (!sidebar.current || !trigger.current) return;
            if (
                !sidebarOpen ||
                sidebar.current.contains(target) ||
                trigger.current.contains(target)
            )
                return;
            setSidebarOpen(false);
        };
        document.addEventListener('click', clickHandler);
        return () => document.removeEventListener('click', clickHandler);
    });

    // close if the esc key is pressed
    useEffect(() => {
        const keyHandler = ({ keyCode }) => {
            if (!sidebarOpen || keyCode !== 27) return;
            setSidebarOpen(false);
        };
        document.addEventListener('keydown', keyHandler);
        return () => document.removeEventListener('keydown', keyHandler);
    });

    useEffect(() => {
        localStorage.setItem('sidebar-expanded', sidebarExpanded);
        if (sidebarExpanded) {
            document.querySelector('body').classList.add('sidebar-expanded');
        } else {
            document.querySelector('body').classList.remove('sidebar-expanded');
        }
    }, [sidebarExpanded]);

    return (
        <div className='min-w-fit'>
            {/* Sidebar backdrop (mobile only) */}
            <div
                className={`fixed inset-0 bg-gray-900 bg-opacity-30 z-40 lg:hidden lg:z-auto transition-opacity duration-200 ${
                    sidebarOpen
                        ? 'opacity-100'
                        : 'opacity-0 pointer-events-none'
                }`}
                aria-hidden='true'
            ></div>

            {/* Sidebar */}
            <div
                id='sidebar'
                ref={sidebar}
                className={`flex lg:!flex flex-col absolute z-40 left-0 top-0 lg:static lg:left-auto lg:top-auto lg:translate-x-0 h-[100dvh] overflow-y-scroll lg:overflow-y-auto no-scrollbar w-64 lg:w-20 lg:sidebar-expanded:!w-64 2xl:!w-64 shrink-0 bg-white dark:bg-gray-800 p-4 transition-all duration-200 ease-in-out ${
                    sidebarOpen ? 'translate-x-0' : '-translate-x-64'
                } ${
                    variant === 'v2'
                        ? 'border-r border-gray-200 dark:border-gray-700/60'
                        : 'rounded-r-2xl shadow-sm'
                }`}
            >
                {/* Sidebar header */}
                <div className='flex justify-between pr-3 mb-10 sm:px-2'>
                    {/* Close button */}
                    <button
                        ref={trigger}
                        className='text-gray-500 lg:hidden hover:text-gray-400'
                        onClick={() => setSidebarOpen(!sidebarOpen)}
                        aria-controls='sidebar'
                        aria-expanded={sidebarOpen}
                    >
                        <span className='sr-only'>Close sidebar</span>
                        <svg
                            className='w-6 h-6 fill-current'
                            viewBox='0 0 24 24'
                            xmlns='http://www.w3.org/2000/svg'
                        >
                            <path d='M10.7 18.7l1.4-1.4L7.8 13H20v-2H7.8l4.3-4.3-1.4-1.4L4 12z' />
                        </svg>
                    </button>
                    {/* Logo */}
                    <NavLink end to='/' className='block'>
                        <svg
                            className='fill-violet-500'
                            xmlns='http://www.w3.org/2000/svg'
                            width={32}
                            height={32}
                        >
                            <path d='M31.956 14.8C31.372 6.92 25.08.628 17.2.044V5.76a9.04 9.04 0 0 0 9.04 9.04h5.716ZM14.8 26.24v5.716C6.92 31.372.63 25.08.044 17.2H5.76a9.04 9.04 0 0 1 9.04 9.04Zm11.44-9.04h5.716c-.584 7.88-6.876 14.172-14.756 14.756V26.24a9.04 9.04 0 0 1 9.04-9.04ZM.044 14.8C.63 6.92 6.92.628 14.8.044V5.76a9.04 9.04 0 0 1-9.04 9.04H.044Z' />
                        </svg>
                    </NavLink>
                </div>

                {/* Links */}
                <div className='space-y-8'>
                    {/* Pages group */}
                    <div>
                        <h3 className='pl-3 text-xs font-semibold text-gray-400 uppercase dark:text-gray-500'>
                            <span
                                className='hidden w-6 text-center lg:block lg:sidebar-expanded:hidden 2xl:hidden'
                                aria-hidden='true'
                            >
                                •••
                            </span>
                            <span className='lg:hidden lg:sidebar-expanded:block 2xl:block'>
                                Pages
                            </span>
                        </h3>
                        <ul className='mt-3'>
                            {/* Dashoboard  */}
                            <li
                                className={`pl-4 pr-3 py-2 rounded-lg mb-0.5 last:mb-0 bg-[linear-gradient(135deg,var(--tw-gradient-stops))] ${
                                    pathname.includes('messages') &&
                                    'from-violet-500/[0.12] dark:from-violet-500/[0.24] to-violet-500/[0.04]'
                                }`}
                            >
                                <NavLink
                                    end
                                    to='/'
                                    className={`block text-gray-800 dark:text-gray-100 truncate transition duration-150 ${
                                        pathname.includes('messages')
                                            ? ''
                                            : 'hover:bg-gray-300 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-gray-100'
                                    }  p-2 rounded-md`}
                                >
                                    <div className='flex items-center justify-between'>
                                        <div className='flex items-center grow'>
                                            <svg
                                                xmlns='http://www.w3.org/2000/svg'
                                                fill='none'
                                                viewBox='0 0 24 24'
                                                stroke-width='1.5'
                                                stroke='currentColor'
                                                class='size-6'
                                            >
                                                <path
                                                    stroke-linecap='round'
                                                    stroke-linejoin='round'
                                                    d='M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z'
                                                />
                                            </svg>

                                            <span className='ml-4 text-sm font-medium duration-200 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100'>
                                                Dashboard
                                            </span>
                                        </div>
                                        {/* Badge */}
                                        {/* <div className='flex flex-shrink-0 ml-2'>
                                            <span className='inline-flex items-center justify-center h-5 px-2 text-xs font-medium text-white rounded bg-violet-400'>
                                                4
                                            </span>
                                        </div> */}
                                    </div>
                                </NavLink>
                            </li>
                            {/* END Dashboard */}

                            {/* Center  */}
                            <li
                                className={`pl-4 pr-3 py-2 rounded-lg mb-0.5 last:mb-0 bg-[linear-gradient(135deg,var(--tw-gradient-stops))] ${
                                    pathname.includes('messages') &&
                                    'from-violet-500/[0.12] dark:from-violet-500/[0.24] to-violet-500/[0.04]'
                                }`}
                            >
                                <NavLink
                                    end
                                    to='/center'
                                    className={`block text-gray-800 dark:text-gray-100 truncate transition duration-150 ${
                                        pathname.includes('messages')
                                            ? ''
                                            : 'hover:bg-gray-300 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-gray-100'
                                    }  p-2 rounded-md`}
                                >
                                    <div className='flex items-center justify-between'>
                                        <div className='flex items-center grow'>
                                            <svg
                                                xmlns='http://www.w3.org/2000/svg'
                                                fill='none'
                                                viewBox='0 0 24 24'
                                                stroke-width='1.5'
                                                stroke='currentColor'
                                                class='size-6'
                                            >
                                                <path
                                                    stroke-linecap='round'
                                                    stroke-linejoin='round'
                                                    d='m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25'
                                                />
                                            </svg>

                                            <span className='ml-4 text-sm font-medium duration-200 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100'>
                                                Center
                                            </span>
                                        </div>
                                        {/* Badge */}
                                        {/* <div className='flex flex-shrink-0 ml-2'>
                                            <span className='inline-flex items-center justify-center h-5 px-2 text-xs font-medium text-white rounded bg-violet-400'>
                                                4
                                            </span>
                                        </div> */}
                                    </div>
                                </NavLink>
                            </li>
                            {/* END Center  */}

                            {/* Classes  */}
                            <li
                                className={`pl-4 pr-3 py-2 rounded-lg mb-0.5 last:mb-0 bg-[linear-gradient(135deg,var(--tw-gradient-stops))] ${
                                    pathname.includes('messages') &&
                                    'from-violet-500/[0.12] dark:from-violet-500/[0.24] to-violet-500/[0.04]'
                                }`}
                            >
                                <NavLink
                                    end
                                    to='/classes'
                                    className={`block text-gray-800 dark:text-gray-100 truncate transition duration-150 ${
                                        pathname.includes('messages')
                                            ? ''
                                            : 'hover:bg-gray-300 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-gray-100'
                                    }  p-2 rounded-md`}
                                >
                                    <div className='flex items-center justify-between'>
                                        <div className='flex items-center grow'>
                                            <svg
                                                xmlns='http://www.w3.org/2000/svg'
                                                fill='none'
                                                viewBox='0 0 24 24'
                                                stroke-width='1.5'
                                                stroke='currentColor'
                                                class='size-6'
                                            >
                                                <path
                                                    stroke-linecap='round'
                                                    stroke-linejoin='round'
                                                    d='M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z'
                                                />
                                            </svg>

                                            <span className='ml-4 text-sm font-medium duration-200 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100'>
                                                Classes
                                            </span>
                                        </div>
                                        {/* Badge */}
                                        {/* <div className='flex flex-shrink-0 ml-2'>
                                            <span className='inline-flex items-center justify-center h-5 px-2 text-xs font-medium text-white rounded bg-violet-400'>
                                                4
                                            </span>
                                        </div> */}
                                    </div>
                                </NavLink>
                            </li>
                            {/* END Classes  */}

                            {/* Teachers  */}
                            <li
                                className={`pl-4 pr-3 py-2 rounded-lg mb-0.5 last:mb-0 bg-[linear-gradient(135deg,var(--tw-gradient-stops))] ${
                                    pathname.includes('messages') &&
                                    'from-violet-500/[0.12] dark:from-violet-500/[0.24] to-violet-500/[0.04]'
                                }`}
                            >
                                <NavLink
                                    end
                                    to='/teacher'
                                    className={`block text-gray-800 dark:text-gray-100 truncate transition duration-150 ${
                                        pathname.includes('messages')
                                            ? ''
                                            : 'hover:bg-gray-300 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-gray-100'
                                    }  p-2 rounded-md`}
                                >
                                    <div className='flex items-center justify-between'>
                                        <div className='flex items-center grow'>
                                            <svg
                                                xmlns='http://www.w3.org/2000/svg'
                                                fill='none'
                                                viewBox='0 0 24 24'
                                                stroke-width='1.5'
                                                stroke='currentColor'
                                                class='size-6'
                                            >
                                                <path
                                                    stroke-linecap='round'
                                                    stroke-linejoin='round'
                                                    d='M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z'
                                                />
                                            </svg>

                                            <span className='ml-4 text-sm font-medium duration-200 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100'>
                                                Teachers
                                            </span>
                                        </div>
                                        {/* Badge */}
                                        {/* <div className='flex flex-shrink-0 ml-2'>
                                            <span className='inline-flex items-center justify-center h-5 px-2 text-xs font-medium text-white rounded bg-violet-400'>
                                                4
                                            </span>
                                        </div> */}
                                    </div>
                                </NavLink>
                            </li>
                            {/* END Teachers  */}

                            {/* Students  */}
                            <li
                                className={`pl-4 pr-3 py-2 rounded-lg mb-0.5 last:mb-0 bg-[linear-gradient(135deg,var(--tw-gradient-stops))] ${
                                    pathname.includes('messages') &&
                                    'from-violet-500/[0.12] dark:from-violet-500/[0.24] to-violet-500/[0.04]'
                                }`}
                            >
                                <NavLink
                                    end
                                    to='/student'
                                    className={`block text-gray-800 dark:text-gray-100 truncate transition duration-150 ${
                                        pathname.includes('messages')
                                            ? ''
                                            : 'hover:bg-gray-300 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-gray-100'
                                    }  p-2 rounded-md`}
                                >
                                    <div className='flex items-center justify-between'>
                                        <div className='flex items-center grow'>
                                            <svg
                                                xmlns='http://www.w3.org/2000/svg'
                                                fill='none'
                                                viewBox='0 0 24 24'
                                                stroke-width='1.5'
                                                stroke='currentColor'
                                                class='size-6'
                                            >
                                                <path
                                                    stroke-linecap='round'
                                                    stroke-linejoin='round'
                                                    d='M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z'
                                                />
                                            </svg>

                                            <span className='ml-4 text-sm font-medium duration-200 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100'>
                                                Students
                                            </span>
                                        </div>
                                        {/* Badge */}
                                        {/* <div className='flex flex-shrink-0 ml-2'>
                                            <span className='inline-flex items-center justify-center h-5 px-2 text-xs font-medium text-white rounded bg-violet-400'>
                                                4
                                            </span>
                                        </div> */}
                                    </div>
                                </NavLink>
                            </li>
                            {/* END Students  */}
                        </ul>
                    </div>
                    {/* More group */}
                    <div>
                        <h3 className='pl-3 text-xs font-semibold text-gray-400 uppercase dark:text-gray-500'>
                            <span
                                className='hidden w-6 text-center lg:block lg:sidebar-expanded:hidden 2xl:hidden'
                                aria-hidden='true'
                            >
                                •••
                            </span>
                            <span className='lg:hidden lg:sidebar-expanded:block 2xl:block'>
                                Settings
                            </span>
                        </h3>
                        <ul className='mt-3'>
                            {/* Messages */}
                            <li
                                className={`pl-4 pr-3 py-2 rounded-lg mb-0.5 last:mb-0 bg-[linear-gradient(135deg,var(--tw-gradient-stops))] ${
                                    pathname.includes('messages') &&
                                    'from-violet-500/[0.12] dark:from-violet-500/[0.24] to-violet-500/[0.04]'
                                }`}
                            >
                                <NavLink
                                    end
                                    to='/setting'
                                    className={`block text-gray-800 dark:text-gray-100 truncate transition duration-150 ${
                                        pathname.includes('messages')
                                            ? ''
                                            : 'hover:bg-gray-300 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-gray-100'
                                    }  p-2 rounded-md`}
                                >
                                    <div className='flex items-center justify-between'>
                                        <div className='flex items-center grow'>
                                            <svg
                                                xmlns='http://www.w3.org/2000/svg'
                                                fill='none'
                                                viewBox='0 0 24 24'
                                                stroke-width='1.5'
                                                stroke='currentColor'
                                                class='size-6'
                                            >
                                                <path
                                                    stroke-linecap='round'
                                                    stroke-linejoin='round'
                                                    d='M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z'
                                                />
                                                <path
                                                    stroke-linecap='round'
                                                    stroke-linejoin='round'
                                                    d='M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z'
                                                />
                                            </svg>

                                            <span className='ml-4 text-sm font-medium duration-200 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100'>
                                                Settings
                                            </span>
                                        </div>
                                        {/* Badge */}
                                        {/* <div className='flex flex-shrink-0 ml-2'>
                                            <span className='inline-flex items-center justify-center h-5 px-2 text-xs font-medium text-white rounded bg-violet-400'>
                                                4
                                            </span>
                                        </div> */}
                                    </div>
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Expand / collapse button */}
                <div className='justify-end hidden pt-3 mt-auto lg:inline-flex 2xl:hidden'>
                    <div className='w-12 py-2 pl-4 pr-3'>
                        <button
                            className='text-gray-400 hover:text-gray-500 dark:text-gray-500 dark:hover:text-gray-400'
                            onClick={() => setSidebarExpanded(!sidebarExpanded)}
                        >
                            <span className='sr-only'>
                                Expand / collapse sidebar
                            </span>
                            <svg
                                className='text-gray-400 fill-current shrink-0 dark:text-gray-500 sidebar-expanded:rotate-180'
                                xmlns='http://www.w3.org/2000/svg'
                                width='16'
                                height='16'
                                viewBox='0 0 16 16'
                            >
                                <path d='M15 16a1 1 0 0 1-1-1V1a1 1 0 1 1 2 0v14a1 1 0 0 1-1 1ZM8.586 7H1a1 1 0 1 0 0 2h7.586l-2.793 2.793a1 1 0 1 0 1.414 1.414l4.5-4.5A.997.997 0 0 0 12 8.01M11.924 7.617a.997.997 0 0 0-.217-.324l-4.5-4.5a1 1 0 0 0-1.414 1.414L8.586 7M12 7.99a.996.996 0 0 0-.076-.373Z' />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
