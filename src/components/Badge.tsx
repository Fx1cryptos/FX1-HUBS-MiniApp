import React from 'react'

type BadgeVariant = 'primary' | 'secondary' | 'success' | 'warning' | 'error'

interface BadgeProps {
  children: React.ReactNode
  variant?: BadgeVariant
  className?: string
}

const variantClasses: Record<BadgeVariant, string> = {
  primary: 'bg-sky-400/20 text-sky-300 border-sky-400/30',
  secondary: 'bg-white/10 text-white/80 border-white/20',
  success: 'bg-green-400/20 text-green-300 border-green-400/30',
  warning: 'bg-yellow-400/20 text-yellow-300 border-yellow-400/30',
  error: 'bg-red-400/20 text-red-300 border-red-400/30',
}

export default function Badge({ children, variant = 'primary', className = '' }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-widest ${variantClasses[variant]} ${className}`}
    >
      {children}
    </span>
  )
}
