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
        transparent: 'bg-transparent border-white/5 backdrop-blur-sm',
        frosted: 'bg-slate-900/20 backdrop-blur-md border-white/10 shadow-lg',
        pure: 'bg-white/5 backdrop-blur-xl border-white/20 shadow-xl',
    };

    return (
        <div
            className={cn(
                'rounded-3xl border relative overflow-hidden transition-all duration-500',
                glassStyles[glass],
                'hover:border-white/30 hover:shadow-[0_0_30px_rgba(255,255,255,0.05)]',
                className
            )}
        >
            <div className="relative z-10 w-full h-full">
                {children}
            </div>
        </div>
    );
};