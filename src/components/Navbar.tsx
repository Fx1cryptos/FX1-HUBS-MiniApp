'use client'

import Link from 'next/link'
import { useState } from 'react'
import WalletConnectPanel from './WalletConnectPanel'

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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 card-3d mx-2 mt-2 rounded-2xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity group">
          <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center font-bold text-white text-lg transform group-hover:scale-110 transition-transform">
            🎨
          </div>
          <div>
            <div className="text-sm font-bold uppercase tracking-wider text-gray-900 text-3d">
              FX1 Digital Hubs
            </div>
            <div className="text-xs text-blue-600 font-semibold">On Base • Zora • Farcaster</div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1">
          {navigationLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="px-3 py-2 text-xs uppercase tracking-[0.3em] font-semibold text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors duration-300"
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
          className="lg:hidden p-2 hover:bg-blue-50 rounded-lg transition-colors"
        >
          <span className="text-2xl">☰</span>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden border-t border-blue-100 p-4 bg-white/50">
          <nav className="flex flex-col gap-2 mb-4">
            {navigationLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-3 py-2 text-sm font-semibold text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <WalletConnectPanel />
        </div>
      )}
    </header>
  )
}
