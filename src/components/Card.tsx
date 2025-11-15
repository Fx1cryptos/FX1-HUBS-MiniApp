import React from 'react'

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  gradient?: boolean
  luxury?: boolean
}

export default function Card({ children, gradient = false, luxury = false, className = '', ...props }: CardProps) {
  const luxuryClasses = luxury
    ? 'card-3d'
    : 'rounded-2xl border border-white/10 bg-black/70 p-6 backdrop-blur transition-all duration-300 hover:border-white/20'

  return (
    <div
      className={`${luxuryClasses} p-6 ${gradient ? 'bg-gradient-to-br from-white/5 to-black/70' : ''} ${className}`}
      {...props}
    >
      {children}
    </div>
  )
}
