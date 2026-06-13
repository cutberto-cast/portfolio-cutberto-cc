import React from 'react';
import Sidebar from './Sidebar';

interface MainLayoutProps {
    children: React.ReactNode;
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
    return (
        <>
            <Sidebar />
            <main className="w-full min-h-screen lg:pl-28 pb-32 lg:pb-10 px-4 md:px-10">
                {children}
            </main>
        </>
    );
};

export default MainLayout;
