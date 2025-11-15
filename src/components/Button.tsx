import React from 'react'

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'luxury'
type ButtonSize = 'sm' | 'md' | 'lg'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  size?: ButtonSize
  isLoading?: boolean
  children: React.ReactNode
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    'bg-gradient-to-r from-[#4169E1] to-[#2E4C8F] text-[#FFD700] border border-[#FFD700] hover:from-[#FFD700] hover:to-[#FFC700] hover:text-[#4169E1] disabled:opacity-60',
  secondary:
    'bg-white/10 text-white border border-white/30 hover:bg-white/20 disabled:opacity-70',
  outline: 'border border-[#FFD700] text-[#FFD700] hover:bg-[#FFD700]/10 disabled:opacity-70',
  ghost: 'text-white hover:bg-white/5 disabled:opacity-70',
  luxury: 'btn-3d-primary',
}

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'px-4 py-2 text-xs uppercase tracking-widest rounded-full',
  md: 'px-6 py-3 text-sm uppercase tracking-widest rounded-full',
  lg: 'px-8 py-4 text-base uppercase tracking-widest rounded-full',
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
      className={`font-semibold transition-all duration-300 ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      {...props}
    >
      {isLoading ? '...' : children}
    </button>
  )
}
