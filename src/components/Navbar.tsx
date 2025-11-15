'use client'

import Link from 'next/link'
import { useState } from 'react'
import WalletConnectPanel from './WalletConnectPanel'

const navigationLinks = [
  { href: '/', label: 'Home' },
  { href: '/studio', label: 'Studio' },
  { href: '/mint', label: 'Mint' },
  { href: '/wardrobe', label: 'Wardrobe' },
  { href: '/leaderboard', label: 'Leaderboard' },
  { href: '/token-utilities', label: 'Tokens' },
  { href: '/connect', label: 'Connect' },
]

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 page-header">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 md:px-6 py-3 md:py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 md:gap-3 hover:opacity-90 transition-opacity group">
          <div className="h-10 w-10 md:h-12 md:w-12 rounded-full bg-gradient-to-br from-[#FFD700] to-[#FFC700] flex items-center justify-center font-bold text-[#4169E1] text-lg md:text-xl transform group-hover:scale-110 transition-transform">
            💎
          </div>
          <div className="hidden sm:block">
            <div className="text-xs md:text-sm font-bold uppercase tracking-wider text-[#FFD700] font-serif">
              FX1 Digital Hubs
            </div>
            <div className="text-[10px] md:text-xs text-[#FFD700]/70 font-medium">On Base • Zora • Farcaster</div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-2">
          {navigationLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="nav-link px-4 py-2 text-xs uppercase tracking-wider"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Wallet Connect Panel */}
        <div className="hidden lg:block">
          <WalletConnectPanel />
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden p-2 text-[#FFD700] hover:bg-[#FFD700]/10 rounded-lg transition-colors"
        >
          <span className="text-2xl">☰</span>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden border-t border-[#FFD700]/10 p-4 bg-gradient-to-b from-[#4169E1]/20 to-[#2E4C8F]/20">
          <nav className="flex flex-col gap-2 mb-4">
            {navigationLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="nav-link px-4 py-2 text-sm font-medium text-[#FFD700]"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="border-t border-[#FFD700]/10 pt-4">
            <WalletConnectPanel />
          </div>
        </div>
      )}
    </header>
  )
}
