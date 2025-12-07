'use client';

import React from 'react';
import Sidebar from './Sidebar';

interface MainLayoutProps {
    children: React.ReactNode;
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
    return (
        <div className="flex h-full w-full relative overflow-hidden">
            <Sidebar />
            <main id="main-scroll-container" className="flex-1 h-full overflow-y-auto scrollbar-thin scroll-smooth relative" >
                <div className="w-full min-h-full lg:pl-28 pb-32 lg:pb-10 px-4 md:px-10">
                    {children}
                </div>
            </main>
        </div>
    );
};

export default MainLayout;