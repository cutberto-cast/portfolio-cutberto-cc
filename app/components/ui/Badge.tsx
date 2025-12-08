import { cn } from '@/app/lib/utils/cn'
import { ReactNode } from 'react'

interface BadgeProps {
    children: ReactNode
    variant?: 'default' | 'blue' | 'green' | 'purple' | 'red' | 'glass' | 'orange'
    size?: 'sm' | 'md' | 'lg'
    className?: string
}

export function Badge({ children, variant = 'default', size = 'md', className }: BadgeProps) {
    return (
        <span
            className={cn(
                'inline-flex items-center rounded-full font-medium transition-colors',
                {
                    'bg-red-100 text-red-800 border border-red-200': variant === 'default',
                    'bg-blue-100 text-blue-800 border border-blue-200': variant === 'blue',
                    'bg-green-100 text-green-800 border border-green-200': variant === 'green',
                    'bg-purple-100 text-purple-800 border border-purple-200': variant === 'purple',
                    'bg-orange-100 text-orange-800 border border-orange-200': variant === 'orange',
                    'glass-button-dark text-white border-white/20 backdrop-blur-sm': variant === 'glass',
                },
                {
                    'px-2 py-0.5 text-xs': size === 'sm',
                    'px-3 py-1 text-sm': size === 'md',
                    'px-4 py-1.5 text-base': size === 'lg',
                },
                className
            )}
        >
            {children}
        </span>
    )
}