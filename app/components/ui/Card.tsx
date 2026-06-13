import { cn } from '@/app/lib/utils/cn';
import React from 'react';

interface CardProps {
    children: React.ReactNode;
    className?: string;
    glass?: 'transparent' | 'frosted' | 'pure';
}

export const Card: React.FC<CardProps> = ({
    children,
    className,
    glass = 'frosted',
}) => {
    const glassStyles = {
        transparent: 'bg-transparent border-white/5',
        frosted: 'bg-slate-900/40 border-white/10',
        pure: 'bg-slate-900/50 border-white/10',
    };

    return (
        <div
            className={cn(
                'rounded-3xl border relative overflow-hidden',
                glassStyles[glass],
                className
            )}
        >
            <div className="relative z-10 w-full h-full">
                {children}
            </div>
        </div>
    );
};
