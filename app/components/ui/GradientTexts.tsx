import React from 'react';

interface GradientTextProps {
    children: React.ReactNode;
    className?: string;
}

export const GradientText: React.FC<GradientTextProps> = ({ children, className = '' }) => (
    <span className={`text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-300 ${className}`}>
        {children}
    </span>
);
