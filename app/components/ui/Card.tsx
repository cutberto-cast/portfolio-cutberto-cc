import { cn } from '@/app/lib/utils/cn';
import React from 'react';

interface CardProps {
    children: React.ReactNode;
    className?: string;
    glass?: 'transparent' | 'frosted' | 'pure';
    hoverLift?: boolean;
}

export const Card: React.FC<CardProps> = ({
    children,
    className,
    glass = 'frosted',
    hoverLift = false,
}) => {
    const glassStyles = {
        transparent: 'bg-transparent border-white/5',
        frosted: 'bg-slate-900/40 border-white/10',
        pure: 'bg-slate-900/50 border-white/10',
    };

    return (
        <div
            className={cn(
                'rounded-3xl border relative overflow-hidden transition-[transform,box-shadow,border-color] duration-300 ease-out',
                glassStyles[glass],
                hoverLift && '[@media(hover:hover)_and_(pointer:fine)]:hover:-translate-y-1 [@media(hover:hover)_and_(pointer:fine)]:hover:border-white/20 [@media(hover:hover)_and_(pointer:fine)]:hover:shadow-[0_24px_48px_-24px_rgba(0,0,0,0.55)]',
                className
            )}
        >
            <div className="relative z-10 w-full h-full">
                {children}
            </div>
        </div>
    );
};
