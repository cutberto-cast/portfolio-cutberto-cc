'use client';

import { cn } from '@/app/lib/utils/cn';
import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string;
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
}

export const Input: React.FC<InputProps> = ({
    label,
    error,
    leftIcon,
    rightIcon,
    className,
    ...props
}) => {
    return (
        <div className="w-full">
            {label && (
                <label className="block text-sm font-medium text-gray-300 mb-2">
                    {label}
                </label>
            )}

            <div className="relative">
                {leftIcon && (
                    <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                        {leftIcon}
                    </div>
                )}

                <input
                    className={cn('w-full px-4 py-2.5 rounded-xl bg-slate-800/40 backdrop-blur-xl', 'border border-white/10 text-white placeholder:text-gray-500', 'focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent', 'focus:bg-slate-800/60 transition-all duration-300',
                        leftIcon && 'pl-10',
                        rightIcon && 'pr-10',
                        error && 'border-red-500 focus:ring-red-500',
                        className
                    )}
                    {...props}
                />

                {rightIcon && (
                    <div className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
                        {rightIcon}
                    </div>
                )}
            </div>

            {error && (
                <p className="mt-1 text-sm text-red-400">{error}</p>
            )}
        </div>
    );
};

export default Input;