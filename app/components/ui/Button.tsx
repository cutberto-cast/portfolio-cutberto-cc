import { cn } from '@/app/lib/utils/cn'
import { ButtonHTMLAttributes, forwardRef } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'glass' | 'outline' | 'ghost'
    size?: 'sm' | 'md' | 'lg'
    isLoading?: boolean
    leftIcon?: React.ReactNode
    rightIcon?: React.ReactNode
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({
        className,
        variant = 'primary',
        size = 'md',
        isLoading,
        leftIcon,
        rightIcon,
        children,
        ...props
    }, ref) => {
        return (
            <button
                className={cn(
                    'inline-flex items-center justify-center rounded-xl font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 disabled:pointer-events-none disabled:opacity-50',
                    {
                        'bg-gradient-to-r from-red-600 to-red-700 text-white shadow-lg':
                            variant === 'primary',

                        'bg-slate-700 text-white border border-slate-600':
                            variant === 'secondary',

                        'glass-button-dark text-white':
                            variant === 'glass',

                        'border border-red-600 text-red-600':
                            variant === 'outline',

                        'text-gray-300':
                            variant === 'ghost',
                    },
                    {
                        'h-9 px-4 text-sm gap-2': size === 'sm',
                        'h-11 px-6 text-base gap-2': size === 'md',
                        'h-13 px-8 text-lg gap-2': size === 'lg',
                    },
                    className
                )}
                ref={ref}
                disabled={isLoading}
                {...props}
            >
                {isLoading && (
                    <div className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                )}
                {!isLoading && leftIcon}
                {children}
                {rightIcon}
            </button>
        )
    }
)

Button.displayName = 'Button'

export { Button }