'use client'

import Link from 'next/link'
import Button from '@/components/Button'
import Card from '@/components/Card'
import { useState } from 'react'

export default function Wardrobe() {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const categories = [
    { id: 'all', name: 'All Items', emoji: '👕' },
    { id: 'hoodies', name: 'Hoodies', emoji: '👕' },
    { id: 'sneakers', name: 'Sneakers', emoji: '👟' },
    { id: 'jackets', name: 'Jackets', emoji: '🧥' },
    { id: 'fits', name: 'Digital Fits', emoji: '✨' },
    { id: '3d', name: '3D Wearables', emoji: '🎯' },
  ]

  const wardrobeItems = [
    {
      id: 1,
      name: 'Cyberpunk Hoodie',
      category: 'hoodies',
      emoji: '👕',
      price: '2.5 ETH',
      rarity: 'Rare',
      creators: 5,
      minted: 128,
    },
    {
      id: 2,
      name: 'Aurora Sneakers',
      category: 'sneakers',
      emoji: '👟',
      price: '1.8 ETH',
      rarity: 'Uncommon',
      creators: 3,
      minted: 245,
    },
    {
      id: 3,
      name: 'Neon Jacket',
      category: 'jackets',
      emoji: '🧥',
      price: '3.2 ETH',
      rarity: 'Epic',
      creators: 7,
      minted: 92,
    },
    {
      id: 4,
      name: 'Metaverse Avatar Fit',
      category: 'fits',
      emoji: '✨',
      price: '4.5 ETH',
      rarity: 'Legendary',
      creators: 1,
      minted: 48,
    },
    {
      id: 5,
      name: 'Crystal Jacket Pro',
      category: 'jackets',
      emoji: '🧥',
      price: '2.9 ETH',
      rarity: 'Rare',
      creators: 4,
      minted: 156,
    },
    {
      id: 6,
      name: 'Future Tech Sneakers',
      category: 'sneakers',
      emoji: '👟',
      price: '2.1 ETH',
      rarity: 'Rare',
      creators: 6,
      minted: 189,
    },
    {
      id: 7,
      name: '3D Avatar Wearable Pro',
      category: '3d',
      emoji: '🎯',
      price: '5.8 ETH',
      rarity: 'Legendary',
      creators: 2,
      minted: 32,
    },
    {
      id: 8,
      name: 'Digital Fashion Hoodie v2',
      category: 'hoodies',
      emoji: '👕',
      price: '1.9 ETH',
      rarity: 'Common',
      creators: 8,
      minted: 542,
    },
    {
      id: 9,
      name: 'Web3 Creator Set',
      category: 'fits',
      emoji: '✨',
      price: '3.5 ETH',
      rarity: 'Epic',
      creators: 5,
      minted: 128,
    },
  ]

  const filteredItems =
    selectedCategory === 'all'
      ? wardrobeItems
      : wardrobeItems.filter((item) => item.category === selectedCategory)

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case 'Common':
        return 'text-white/70'
      case 'Uncommon':
        return 'text-green-400'
      case 'Rare':
        return 'text-[#4169E1]'
      case 'Epic':
        return 'text-purple-400'
      case 'Legendary':
        return 'text-[#FFD700]'
      default:
        return 'text-white'
    }
  }

  const getRarityBg = (rarity: string) => {
    switch (rarity) {
      case 'Common':
        return 'bg-white/10'
      case 'Uncommon':
        return 'bg-green-400/10'
      case 'Rare':
        return 'bg-[#4169E1]/10'
      case 'Epic':
        return 'bg-purple-400/10'
      case 'Legendary':
        return 'bg-[#FFD700]/10'
      default:
        return 'bg-white/5'
    }
  }

  return (
    <div className="min-h-screen bg-black text-white py-12">
      <main className="mx-auto max-w-7xl px-6">
        {/* Hero Section */}
        <section className="mb-16 text-center">
          <h1 className="text-5xl md:text-7xl font-bold uppercase tracking-widest mb-6">
            <span className="bg-gradient-to-r from-[#4169E1] via-[#FFD700] to-[#4169E1] bg-clip-text text-transparent">
              FX1 Digital Wardrobe
            </span>
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Explore onchain fashion, mint NFT wearables, and build your digital wardrobe
          </p>
        </section>

        {/* Category Filter */}
        <section className="mb-12">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-6 py-3 rounded-full font-bold uppercase tracking-wider transition-all duration-300 ${
                  selectedCategory === cat.id
                    ? 'bg-gradient-to-r from-[#4169E1] to-[#FFD700] text-black shadow-lg'
                    : 'border-2 border-[#4169E1]/50 text-white/80 hover:border-[#FFD700]/50 hover:text-[#FFD700]'
                }`}
              >
                {cat.emoji} {cat.name}
              </button>
            ))}
          </div>
        </section>

        {/* Items Grid */}
        <section className="mb-16">
          <p className="text-center text-white/70 mb-8">
            Showing {filteredItems.length} item{filteredItems.length !== 1 ? 's' : ''}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
              <Card
                key={item.id}
                className="border-[#4169E1]/30 bg-black/70 hover:border-[#FFD700] transition-all duration-300 overflow-hidden group"
              >
                <div className="relative overflow-hidden h-48 mb-4 rounded-lg bg-gradient-to-br from-[#4169E1]/30 to-[#FFD700]/20 flex items-center justify-center">
                  <div className="text-8xl group-hover:scale-110 transition-transform duration-300">
                    {item.emoji}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-[#FFD700] mb-2 group-hover:text-white transition-colors">
                  {item.name}
                </h3>

                <div className="space-y-3 mb-4">
                  <div className="flex items-center justify-between">
                    <span className="text-white/70 text-sm">Price</span>
                    <span className="font-bold text-[#FFD700]">{item.price}</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-white/70 text-sm">Rarity</span>
                    <span className={`px-3 py-1 rounded-full text-sm font-bold ${getRarityBg(item.rarity)} ${getRarityColor(item.rarity)}`}>
                      {item.rarity}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-2 pt-2 border-t border-white/10">
                    <div className="text-center">
                      <p className="text-[#FFD700] font-bold">{item.creators}</p>
                      <p className="text-xs text-white/60">Creators</p>
                    </div>
                    <div className="text-center">
                      <p className="text-[#FFD700] font-bold">{item.minted}</p>
                      <p className="text-xs text-white/60">Minted</p>
                    </div>
                  </div>
                </div>

                <Link href="/mint">
                  <Button variant="outline" size="sm" className="w-full border-[#FFD700] text-[#FFD700] hover:bg-[#FFD700]/10">
                    Mint This Fit
                  </Button>
                </Link>
              </Card>
            ))}
          </div>
        </section>

        {/* Stats Section */}
        <section className="mb-16 p-8 rounded-3xl border border-[#4169E1]/50 bg-gradient-to-r from-[#4169E1]/15 to-[#FFD700]/10 backdrop-blur">
          <h2 className="text-3xl font-bold uppercase tracking-widest mb-8 text-center text-[#FFD700]">
            Wardrobe Stats
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <p className="text-4xl font-bold text-[#FFD700] mb-2">
                {wardrobeItems.length}+
              </p>
              <p className="text-white/70">Total Items</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-[#FFD700] mb-2">
                {wardrobeItems.length}
              </p>
              <p className="text-white/70">Categories</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-[#FFD700] mb-2">42K+</p>
              <p className="text-white/70">Total Minted</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-[#FFD700] mb-2">$12.5M</p>
              <p className="text-white/70">Market Volume</p>
            </div>
          </div>
        </section>

        {/* How to Get */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold uppercase tracking-widest mb-8 text-center text-[#FFD700]">
            How to Get Your Wearables
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="border-[#4169E1]/30 bg-gradient-to-br from-[#4169E1]/15 to-transparent">
              <div className="text-5xl mb-4">🎨</div>
              <h3 className="text-2xl font-bold text-[#FFD700] mb-3">Step 1: Create</h3>
              <p className="text-white/80 mb-6">
                Design your unique digital wearable in our AI Studio or upload your design
              </p>
              <Link href="/studio">
                <Button variant="outline" size="sm" className="w-full border-[#4169E1] text-[#4169E1] hover:bg-[#4169E1]/10">
                  Go to Studio
                </Button>
              </Link>
            </Card>

            <Card className="border-[#4169E1]/30 bg-gradient-to-br from-[#4169E1]/15 to-transparent">
              <div className="text-5xl mb-4">🪙</div>
              <h3 className="text-2xl font-bold text-[#FFD700] mb-3">Step 2: Mint</h3>
              <p className="text-white/80 mb-6">
                Use $FDH tokens to mint your wearable as an NFT on Base blockchain
              </p>
              <Link href="/mint">
                <Button variant="outline" size="sm" className="w-full border-[#4169E1] text-[#4169E1] hover:bg-[#4169E1]/10">
                  Start Minting
                </Button>
              </Link>
            </Card>

            <Card className="border-[#4169E1]/30 bg-gradient-to-br from-[#4169E1]/15 to-transparent">
              <div className="text-5xl mb-4">🌟</div>
              <h3 className="text-2xl font-bold text-[#FFD700] mb-3">Step 3: Share</h3>
              <p className="text-white/80 mb-6">
                Share your creation on social feed and earn $fx1_hubs and $FDH rewards
              </p>
              <Link href="/feed">
                <Button variant="outline" size="sm" className="w-full border-[#4169E1] text-[#4169E1] hover:bg-[#4169E1]/10">
                  View Feed
                </Button>
              </Link>
            </Card>
          </div>
        </section>

        {/* CTA Section */}
        <section className="mb-16 p-8 rounded-3xl border border-[#FFD700]/50 bg-gradient-to-r from-[#FFD700]/15 to-[#4169E1]/10 backdrop-blur text-center">
          <h2 className="text-3xl font-bold uppercase tracking-widest mb-6 text-[#FFD700]">
            Ready to Build Your Wardrobe?
          </h2>
          <p className="text-white/80 mb-8 text-lg">
            Start creating and minting digital wearables today
          </p>
          <Link href="/mint">
            <Button size="lg" className="bg-gradient-to-r from-[#4169E1] to-[#FFD700] hover:from-[#4169E1]/90 hover:to-[#FFD700]/90">
              👗 Mint Your First Wearable
            </Button>
          </Link>
        </section>

        {/* Footer */}
        <section className="border-t border-white/10 pt-12 text-center">
          <p className="text-white/60 mb-2">
            © {new Date().getFullYear()} FX1 DIGITAL HUBS — Digital Wardrobe
          </p>
          <p className="text-sm text-white/50">
            Onchain Fashion • NFT Wearables • Creator Economy
          </p>
        </section>
      </main>
    </div>
  )
}
