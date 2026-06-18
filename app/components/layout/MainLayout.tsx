'use client';

import React from 'react';
import { MotionConfig } from 'framer-motion';
import Sidebar from './Sidebar';

interface MainLayoutProps {
    children: React.ReactNode;
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
    return (
        <MotionConfig reducedMotion="user">
            {/* Goo filter for .blob-btn — defined once, referenced by url(#goo-blob-btn). */}
            <svg xmlns="http://www.w3.org/2000/svg" style={{ display: 'none' }}>
                <defs>
                    <filter id="goo-blob-btn">
                        <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="10" />
                        <feColorMatrix
                            in="blur"
                            mode="matrix"
                            values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 21 -7"
                            result="goo"
                        />
                        <feBlend in2="goo" in="SourceGraphic" result="mix" />
                    </filter>
                </defs>
            </svg>

            <Sidebar />
            <main className="w-full min-h-screen lg:pl-28 pb-32 lg:pb-10 px-4 md:px-10">
                {children}
            </main>
        </MotionConfig>
    );
};

export default MainLayout;
