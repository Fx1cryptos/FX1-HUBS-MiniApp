import React from 'react'

type BadgeVariant = 'primary' | 'success' | 'warning' | 'error' | 'info'
type BadgeSize = 'sm' | 'md' | 'lg'

interface BadgeProps {
  variant?: BadgeVariant
  size?: BadgeSize
  children: React.ReactNode
  className?: string
}

const variantClasses: Record<BadgeVariant, string> = {
  primary: 'bg-sky-400/20 text-sky-300 border border-sky-400/30',
  success: 'bg-green-400/20 text-green-300 border border-green-400/30',
  warning: 'bg-yellow-400/20 text-yellow-300 border border-yellow-400/30',
  error: 'bg-red-400/20 text-red-300 border border-red-400/30',
  info: 'bg-blue-400/20 text-blue-300 border border-blue-400/30',
}

const sizeClasses: Record<BadgeSize, string> = {
  sm: 'px-2 py-1 text-xs',
  md: 'px-3 py-1.5 text-sm',
  lg: 'px-4 py-2 text-base',
}

export default function Badge({
  variant = 'primary',
  size = 'md',
  children,
  className = '',
}: BadgeProps) {
  return (
    <span
      className={`inline-block rounded-full font-semibold uppercase tracking-wider ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
    >
      {children}
    </span>
  )
}
