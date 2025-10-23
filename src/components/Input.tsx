import React from 'react'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
}

export default function Input({ label, error, className = '', ...props }: InputProps) {
  return (
    <div className="flex flex-col gap-2">
      {label && (
        <label className="text-sm font-semibold uppercase tracking-wider text-white/80">
          {label}
        </label>
      )}
      <input
        className={`px-4 py-2 rounded-lg border border-white/20 bg-black/50 text-white placeholder:text-white/40 focus:border-sky-400 focus:outline-none transition-colors ${className}`}
        {...props}
      />
      {error && <p className="text-sm text-red-400">{error}</p>}
    </div>
  )
}
