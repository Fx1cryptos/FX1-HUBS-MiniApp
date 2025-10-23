import React from 'react'

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  gradient?: boolean
}

export default function Card({ children, gradient = false, className = '', ...props }: CardProps) {
  return (
    <div
      className={`rounded-2xl border border-white/10 bg-black/70 p-6 backdrop-blur transition-all duration-300 hover:border-white/20 ${gradient ? 'bg-gradient-to-br from-white/5 to-black/70' : ''} ${className}`}
      {...props}
    >
      {children}
    </div>
  )
}
