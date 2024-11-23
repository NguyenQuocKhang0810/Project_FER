import React, { useState } from 'react';
import Sidebar from '../../partials/Sidebar';
import Header from '../../partials/Header';

import { Outlet } from 'react-router-dom';

function Layout() {
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
                    <Outlet></Outlet>
                </main>
            </div>
        </div>
    );
}

export default Layout;
