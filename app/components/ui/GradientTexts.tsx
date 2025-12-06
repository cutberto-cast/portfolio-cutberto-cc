'use client';

import React from 'react';

interface GradientTextProps {
    children: React.ReactNode;
    className?: string;
    variant?: 'default' | 'fast' | 'slow';
}

export const GradientText: React.FC<GradientTextProps> = ({
    children,
    className = '',
    variant = 'default'
}) => {
    const animationSpeed = {
        default: 'animate-[text-gradient-shift_8s_ease_infinite]',
        fast: 'animate-[text-gradient-shift_5s_ease_infinite]',
        slow: 'animate-[text-gradient-shift_12s_ease_infinite]'
    };

    return (
        <span className={`gradient-text ${animationSpeed[variant]} ${className}`}>
            {children}
        </span>
    );
};