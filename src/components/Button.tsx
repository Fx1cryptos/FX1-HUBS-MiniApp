import React from 'react'

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost'
type ButtonSize = 'sm' | 'md' | 'lg'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  size?: ButtonSize
  isLoading?: boolean
  children: React.ReactNode
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    'bg-gradient-to-r from-sky-400 to-purple-500 text-black hover:brightness-110 disabled:brightness-85',
  secondary:
    'bg-white/10 text-white border border-white/30 hover:bg-white/20 disabled:opacity-70',
  outline: 'border border-white/40 text-white hover:bg-white/5 disabled:opacity-70',
  ghost: 'text-white hover:bg-white/5 disabled:opacity-70',
}

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'px-4 py-2 text-xs uppercase tracking-widest',
  md: 'px-6 py-3 text-sm uppercase tracking-widest',
  lg: 'px-8 py-4 text-base uppercase tracking-widest',
}

export default function Button({
  variant = 'primary',
  size = 'md',
  isLoading = false,
  disabled = false,
  className = '',
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      disabled={disabled || isLoading}
      className={`rounded-full font-semibold transition-all duration-200 ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      {...props}
    >
      {isLoading ? '...' : children}
    </button>
  )
}
