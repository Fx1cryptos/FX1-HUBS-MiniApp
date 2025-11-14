"use client"

import Link from 'next/link'
import { useState } from 'react'

const navigationLinks = [
  { href: '/', label: 'Home' },
  { href: '/studio', label: 'Studio' },
  { href: '/mint', label: 'Mint' },
  { href: '/feed', label: 'Feed' },
  { href: '/dashboard', label: 'Dashboard' },
  { href: '/wardrobe', label: 'Wardrobe' },
  { href: '/token-utilities', label: 'Tokens' },
  { href: '/connect', label: 'Connect' },
]

export default function Navbar() {
  const [isWalletOpen, setIsWalletOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
          <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-[#4169E1] to-[#FFD700] flex items-center justify-center font-bold text-white text-lg">
            FX1
          </div>
          <div>
            <div className="text-sm font-bold uppercase tracking-wider bg-gradient-to-r from-[#4169E1] to-[#FFD700] bg-clip-text text-transparent">FX1 Digital Hubs</div>
            <div className="text-xs text-[#FFD700]">Fashion • AI • Web3</div>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {navigationLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="px-3 py-2 text-xs uppercase tracking-[0.3em] text-white/70 hover:text-[#FFD700] hover:bg-[#4169E1]/10 rounded-lg transition-colors duration-300"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="relative">
          <button
            onClick={() => setIsWalletOpen(!isWalletOpen)}
            className="px-6 py-2 text-sm uppercase tracking-widest font-semibold rounded-full bg-gradient-to-r from-[#4169E1] to-[#FFD700] text-black hover:brightness-110 transition-all shadow-lg"
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
