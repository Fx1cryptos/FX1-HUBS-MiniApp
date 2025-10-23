"use client"

import Link from 'next/link'
import { useState } from 'react'

const navigationLinks = [
  { href: '/', label: 'Home' },
  { href: '/studio', label: 'Studio' },
  { href: '/mint', label: 'Mint' },
  { href: '/feed', label: 'Feed' },
  { href: '/dashboard', label: 'Dashboard' },
  { href: '/token', label: '$FDH' },
  { href: '/ecosystem', label: 'Ecosystem' },
]

export default function Navbar() {
  const [isWalletOpen, setIsWalletOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2">
          <div className="h-10 w-10 rounded-lg font-bold flex items-center justify-center uppercase tracking-widest" style={{background: 'linear-gradient(135deg, #2563eb 0%, #22d3ee 45%, #8b5cf6 100%)'}}>
            FX1
          </div>
          <div>
            <div className="text-sm font-semibold uppercase tracking-wider">FX1 Hubs</div>
            <div className="text-xs text-white/50">Digital Fashion</div>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {navigationLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="px-3 py-2 text-xs uppercase tracking-[0.3em] text-white/70 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="relative">
          <button
            onClick={() => setIsWalletOpen(!isWalletOpen)}
            className="px-6 py-2 text-sm uppercase tracking-widest font-semibold rounded-full bg-gradient-to-r from-sky-400 to-purple-500 text-black hover:brightness-110 transition-all"
          >
            Connect Wallet
          </button>

          {isWalletOpen && (
            <div className="absolute right-0 mt-2 w-56 rounded-2xl border border-white/10 bg-black/90 backdrop-blur p-4 shadow-xl">
              <p className="text-xs uppercase tracking-widest text-white/60 mb-4">Select Wallet</p>
              <div className="space-y-2">
                <button className="w-full px-4 py-2 text-sm uppercase tracking-widest rounded-lg bg-white/10 hover:bg-white/20 transition-colors text-white">
                  MetaMask
                </button>
                <button className="w-full px-4 py-2 text-sm uppercase tracking-widest rounded-lg bg-white/10 hover:bg-white/20 transition-colors text-white">
                  Phantom
                </button>
                <button className="w-full px-4 py-2 text-sm uppercase tracking-widest rounded-lg bg-white/10 hover:bg-white/20 transition-colors text-white">
                  Nightly
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
