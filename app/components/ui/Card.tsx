import { cn } from '@/app/lib/utils/cn';
import React from 'react';

interface CardProps {
    children: React.ReactNode;
    className?: string;
    padding?: 'none' | 'sm' | 'md' | 'lg';
    hover?: boolean;
    glass?: 'light' | 'medium' | 'strong';
}

export const Card: React.FC<CardProps> = ({
    children,
    className,
    padding = 'md',
    hover = false,
    glass = 'medium',
}) => {
    const paddings = {
        none: '',
        sm: 'p-4',
        md: 'p-6',
        lg: 'p-8',
    };

    const glassStyles = {
        light: 'bg-slate-800/30 backdrop-blur-xl border-white/5',
        medium: 'bg-slate-800/40 backdrop-blur-xl border-white/10',
        strong: 'bg-slate-800/60 backdrop-blur-2xl border-white/20',
    };

    return (
        <div
            className={cn(
                'rounded-2xl border shadow-dark-glass relative',
                'transition-all duration-300',
                glassStyles[glass],
                hover && 'hover:shadow-glass-lg hover:scale-[1.02] hover:bg-slate-800/50 cursor-pointer',
                paddings[padding],
                className
            )}
        >
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/5 to-transparent pointer-events-none"></div>

            <div className="relative z-10">
                {children}
            </div>
        </div>
    );
};