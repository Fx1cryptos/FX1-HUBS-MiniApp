'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import Button from '@/components/Button'
import Card from '@/components/Card'
import MiniAppPanel from '@/components/MiniAppPanel'
import WeeklyNFTRewards from '@/components/WeeklyNFTRewards'

interface Feature {
  icon: string
  title: string
  description: string
  link: string
  label: string
}

const features: Feature[] = [
  {
    icon: '🎨',
    title: 'AI Studio',
    description: 'Generate stunning NFT art with AI in any style',
    link: '/studio',
    label: 'Create Art',
  },
  {
    icon: '🪙',
    title: 'Mint NFTs',
    description: 'Launch your creations on Base and Zora chains',
    link: '/mint',
    label: 'Start Minting',
  },
  {
    icon: '📱',
    title: 'Social Feed',
    description: 'Share, engage, and earn $FDH tips',
    link: '/feed',
    label: 'Join Feed',
  },
  {
    icon: '📊',
    title: 'Dashboard',
    description: 'Track your NFTs, earnings, and analytics',
    link: '/dashboard',
    label: 'My Dashboard',
  },
  {
    icon: '💰',
    title: '$FDH Token',
    description: 'Earn rewards through staking and tips',
    link: '/token',
    label: 'Explore Token',
  },
  {
    icon: '👥',
    title: 'Creator Profile',
    description: 'Build your onchain portfolio',
    link: '/profile/your-username',
    label: 'Create Profile',
  },
]

const stats = [
  { value: '5,847', label: 'Creators' },
  { value: '42,000+', label: 'NFTs Minted' },
  { value: '$12.5M', label: 'Market Cap' },
  { value: '100M', label: '$FDH Total' },
]

const wardrobeItems = [
  { name: 'Hoodies', emoji: '👕', description: 'Premium digital hoodies' },
  { name: 'Sneakers', emoji: '👟', description: 'Rare 3D sneakers' },
  { name: 'Jackets', emoji: '🧥', description: 'Limited edition jackets' },
  { name: 'Digital Fits', emoji: '✨', description: 'Complete outfit sets' },
  { name: '3D Wearables', emoji: '🎯', description: 'Metaverse avatars' },
  { name: 'Accessories', emoji: '🪙', description: 'Premium accessories' },
]

const tokenUtilities = [
  {
    symbol: '$fx1_hubs',
    name: 'Zora Creator Coin',
    features: ['Premium wardrobe access', 'Boosted rankings', 'Special edition fashion mints', 'Creator monetization'],
  },
  {
    symbol: '$FDH',
    name: 'Base Token',
    features: ['Minting & upgrading wearables', 'Early access drops', 'In-app purchase power', 'Seasonal rewards'],
  },
]

export default function Home() {
  useEffect(() => {
    // Initialize Farcaster MiniApp SDK
    const initializeSdk = async () => {
      try {
        const { sdk } = await import('@farcaster/miniapp-sdk')
        await sdk.actions.ready()
        console.log('Farcaster MiniApp SDK initialized successfully')
      } catch (error) {
        console.log('Running outside Farcaster environment or SDK not available')
      }
    }
    initializeSdk()
  }, [])

  return (
    <div className="min-h-screen bg-black text-white">
      <main className="mx-auto max-w-7xl px-6 py-12">
        {/* Hero Section */}
        <section className="mb-20 text-center py-12">
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold uppercase tracking-widest mb-6">
              <span className="bg-gradient-to-r from-[#4169E1] via-[#FFD700] to-[#4169E1] bg-clip-text text-transparent">
                FX1 Digital Hubs
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-4">
              Your Web3 Digital Wardrobe & Creator Hub on Base
            </p>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              Create onchain fashion, mint NFT wearables, and connect with the creator community using $fx1_hubs and $FDH tokens
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link href="/studio">
              <Button size="lg" className="bg-gradient-to-r from-[#4169E1] to-[#FFD700] hover:from-[#4169E1]/90 hover:to-[#FFD700]/90">
                🚀 Launch Mini App
              </Button>
            </Link>
            <Link href="/mint">
              <Button size="lg" className="bg-gradient-to-r from-[#FFD700] to-[#4169E1] hover:from-[#FFD700]/90 hover:to-[#4169E1]/90">
                👗 Mint Onchain Fashion
              </Button>
            </Link>
            <Link href="/token">
              <Button variant="outline" size="lg">
                💰 Buy $fx1_hubs Coin
              </Button>
            </Link>
            <Link href="/studio">
              <Button variant="outline" size="lg">
                👔 Explore Wardrobe
              </Button>
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {stats.map((stat, i) => (
              <div key={i} className="p-4 rounded-2xl border border-[#4169E1]/30 bg-[#4169E1]/5 backdrop-blur">
                <p className="text-2xl md:text-3xl font-bold text-[#FFD700]">{stat.value}</p>
                <p className="text-xs md:text-sm text-white/60 uppercase tracking-wider">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* About Section */}
        <section className="mb-20 p-8 rounded-3xl border border-[#4169E1]/30 bg-gradient-to-r from-[#4169E1]/10 to-[#FFD700]/5 backdrop-blur">
          <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-widest mb-4 text-[#FFD700]">
            About FX1 Digital Hubs
          </h2>
          <p className="text-lg text-white/80 max-w-3xl">
            FX1 Digital Hubs is a Web3 Digital Wardrobe, NFT Fashion Lab, and Creator Hub built on Base. Powered by <span className="text-[#FFD700] font-bold">$FDH token</span> and the <span className="text-[#4169E1] font-bold">Zora creator coin $fx1_hubs</span>, we empower creators to design, mint, and monetize digital wearables while building a vibrant onchain fashion community.
          </p>
        </section>

        {/* Token Utilities Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-widest mb-4 text-[#FFD700]">
              Token Utilities
            </h2>
            <p className="text-white/70">Two powerful tokens driving the FX1 ecosystem</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {tokenUtilities.map((token, i) => (
              <Card key={i} className="border-[#4169E1]/50 bg-gradient-to-br from-[#4169E1]/15 to-[#FFD700]/5">
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-4xl">
                    {token.symbol === '$fx1_hubs' ? '🎁' : '💎'}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#FFD700]">{token.symbol}</h3>
                    <p className="text-sm text-white/70">{token.name}</p>
                  </div>
                </div>
                <ul className="space-y-2">
                  {token.features.map((feature, j) => (
                    <li key={j} className="flex items-center gap-2 text-white/80">
                      <span className="text-[#FFD700]">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link href="/token-utilities" className="mt-6 block">
                  <Button variant="outline" size="sm" className="w-full border-[#FFD700] hover:bg-[#FFD700]/10">
                    Learn More
                  </Button>
                </Link>
              </Card>
            ))}
          </div>
        </section>

        {/* Digital Wardrobe Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-widest mb-4 text-[#FFD700]">
              FX1 Digital Wardrobe
            </h2>
            <p className="text-white/70">Onchain clothes, minted and monetized</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-8">
            {wardrobeItems.map((item, i) => (
              <Card key={i} className="border-[#4169E1]/30 bg-black/60 hover:border-[#FFD700] transition-all duration-300">
                <div className="text-5xl mb-4 text-center">{item.emoji}</div>
                <h3 className="text-lg font-bold text-[#FFD700] mb-2 text-center">{item.name}</h3>
                <p className="text-sm text-white/70 text-center">{item.description}</p>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link href="/mint" className="w-full">
              <Button size="lg" className="w-full bg-gradient-to-r from-[#4169E1] to-[#FFD700] hover:from-[#4169E1]/90 hover:to-[#FFD700]/90">
                👗 Mint Wearables
              </Button>
            </Link>
            <Link href="/wardrobe" className="w-full">
              <Button size="lg" variant="outline" className="w-full border-[#FFD700] text-[#FFD700] hover:bg-[#FFD700]/10">
                👔 View Collection
              </Button>
            </Link>
            <Link href="/mint" className="w-full">
              <Button size="lg" variant="outline" className="w-full border-[#4169E1] text-[#4169E1] hover:bg-[#4169E1]/10">
                🎁 Claim Free Fit
              </Button>
            </Link>
          </div>
        </section>

        {/* Creator Zone Section */}
        <section className="mb-20 p-8 rounded-3xl border border-[#FFD700]/30 bg-gradient-to-r from-[#FFD700]/10 to-[#4169E1]/5 backdrop-blur">
          <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-widest mb-4 text-[#FFD700]">
            Creator Zone
          </h2>
          <p className="text-lg text-white/80 mb-6">
            Creators can redeem <span className="text-[#FFD700] font-bold">$fx1_hubs coins</span> for boosts, minting power, or exposure inside the mini app. Earn rewards through community engagement and exclusive drops.
          </p>
          <Link href="/ecosystem">
            <Button size="lg" className="bg-gradient-to-r from-[#FFD700] to-[#4169E1] hover:from-[#FFD700]/90 hover:to-[#4169E1]/90">
              🚀 Become a Creator
            </Button>
          </Link>
        </section>

        {/* Features Grid */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-widest mb-4 text-[#FFD700]">
              Core Features
            </h2>
            <p className="text-white/70">Everything you need to create, mint, and connect in Web3</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, i) => (
              <Link key={i} href={feature.link}>
                <Card className="group hover:border-[#FFD700]/50 h-full cursor-pointer transition-all duration-300 border-[#4169E1]/30">
                  <div className="flex flex-col h-full">
                    <div className="text-5xl mb-4">{feature.icon}</div>
                    <h3 className="text-xl font-bold uppercase tracking-wider mb-3 text-[#FFD700]">{feature.title}</h3>
                    <p className="text-white/70 flex-grow mb-6">{feature.description}</p>
                    <Button variant="outline" size="sm" className="w-full border-[#4169E1] text-[#4169E1] hover:bg-[#4169E1]/10">
                      {feature.label}
                    </Button>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </section>

        {/* Leaderboard Preview */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-widest mb-4 text-[#FFD700]">
              Leaderboard
            </h2>
            <p className="text-white/70">Top creators by $fx1_hubs Coin Points</p>
          </div>

          <Card className="border-[#4169E1]/50 bg-black/70">
            <div className="space-y-4">
              {[
                { rank: 1, name: '@designer_dx', points: '12,847', emoji: '🥇' },
                { rank: 2, name: '@artist_web3', points: '9,542', emoji: '🥈' },
                { rank: 3, name: '@creator_labs', points: '7,321', emoji: '🥉' },
                { rank: 4, name: '@fashion_mint', points: '6,145', emoji: '⭐' },
                { rank: 5, name: '@nft_visionary', points: '5,032', emoji: '⭐' },
              ].map((user, i) => (
                <div key={i} className="flex items-center justify-between p-4 rounded-lg border border-[#4169E1]/20 bg-[#4169E1]/5 hover:bg-[#4169E1]/10 transition-all duration-300">
                  <div className="flex items-center gap-4 flex-grow">
                    <span className="text-2xl">{user.emoji}</span>
                    <div>
                      <p className="font-bold text-[#FFD700]">#{user.rank}</p>
                      <p className="text-white/80">{user.name}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-xl font-bold text-[#FFD700]">{user.points}</p>
                    <p className="text-xs text-white/60">$fx1_hubs Points</p>
                  </div>
                </div>
              ))}
            </div>
            <Link href="/leaderboard" className="mt-6 block">
              <Button variant="outline" size="lg" className="w-full border-[#FFD700] text-[#FFD700] hover:bg-[#FFD700]/10">
                View Full Leaderboard
              </Button>
            </Link>
          </Card>
        </section>

        {/* Mini App Verification */}
        <section className="mb-20 p-8 rounded-3xl border border-[#4169E1]/50 bg-gradient-to-r from-[#4169E1]/20 to-[#FFD700]/10 backdrop-blur text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="text-3xl">✅</span>
            <h2 className="text-2xl md:text-3xl font-bold text-[#FFD700]">Verified Base Mini App</h2>
          </div>
          <p className="text-white/80 text-lg">
            Owned by <span className="font-bold text-[#FFD700]">FX1 Digital Hubs</span>
          </p>
          <p className="text-sm text-white/60 mt-2">
            Base Builder: <code className="bg-black/40 px-3 py-1 rounded text-[#4169E1]">0x5f188E67C374feF892Cc3BaC4aE0689166C6a620</code>
          </p>
        </section>

        {/* How It Works */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-widest mb-4 text-[#FFD700]">
              How It Works
            </h2>
            <p className="text-white/70">From idea to onchain creation in 4 simple steps</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: '1',
                title: 'Create with AI',
                description: 'Use FX1 AI Studio to generate unique digital wearables from prompts',
              },
              {
                step: '2',
                title: 'Mint on Chain',
                description: 'Launch your creation as an NFT on Base or Zora',
              },
              {
                step: '3',
                title: 'Earn $fx1_hubs',
                description: 'Receive creator coins through community interaction',
              },
              {
                step: '4',
                title: 'Redeem Rewards',
                description: 'Use tokens for boosts, minting power, or exclusive drops',
              },
            ].map((item, i) => (
              <Card key={i} className="border-[#4169E1]/30 bg-gradient-to-br from-[#4169E1]/10 to-transparent">
                <div className="flex items-start gap-4 mb-4">
                  <div className="h-10 w-10 rounded-full bg-[#4169E1] flex items-center justify-center font-bold text-white text-lg">
                    {item.step}
                  </div>
                </div>
                <h3 className="text-lg font-bold uppercase tracking-wider mb-2 text-[#FFD700]">{item.title}</h3>
                <p className="text-white/70">{item.description}</p>
              </Card>
            ))}
          </div>
        </section>

        {/* Social Links CTA */}
        <section className="mb-20 p-8 rounded-3xl border border-[#FFD700]/30 bg-gradient-to-r from-[#FFD700]/10 to-[#4169E1]/10 backdrop-blur text-center">
          <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-widest mb-6 text-[#FFD700]">
            Connect with FX1 Digital Hubs
          </h2>
          <p className="text-white/80 mb-8">Join our community across multiple platforms</p>
          <Link href="/connect">
            <Button size="lg" className="bg-gradient-to-r from-[#4169E1] to-[#FFD700] hover:from-[#4169E1]/90 hover:to-[#FFD700]/90">
              🌐 Explore All Links
            </Button>
          </Link>
        </section>

        {/* Footer Links */}
        <section className="border-t border-white/10 pt-12 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div>
              <h3 className="font-bold uppercase tracking-wider mb-3 text-[#FFD700]">Product</h3>
              <ul className="space-y-2 text-sm text-white/70">
                <li>
                  <Link href="/studio" className="hover:text-[#FFD700] transition">
                    Studio
                  </Link>
                </li>
                <li>
                  <Link href="/mint" className="hover:text-[#FFD700] transition">
                    Mint
                  </Link>
                </li>
                <li>
                  <Link href="/feed" className="hover:text-[#FFD700] transition">
                    Feed
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold uppercase tracking-wider mb-3 text-[#FFD700]">Community</h3>
              <ul className="space-y-2 text-sm text-white/70">
                <li>
                  <Link href="/ecosystem" className="hover:text-[#FFD700] transition">
                    Ecosystem
                  </Link>
                </li>
                <li>
                  <a href="#" className="hover:text-[#FFD700] transition">
                    Discord
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/fx1_hubs" className="hover:text-[#FFD700] transition">
                    Twitter
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold uppercase tracking-wider mb-3 text-[#FFD700]">Learn</h3>
              <ul className="space-y-2 text-sm text-white/70">
                <li>
                  <Link href="/token-utilities" className="hover:text-[#FFD700] transition">
                    Token Utilities
                  </Link>
                </li>
                <li>
                  <a href="#" className="hover:text-[#FFD700] transition">
                    Docs
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#FFD700] transition">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold uppercase tracking-wider mb-3 text-[#FFD700]">Chains</h3>
              <ul className="space-y-2 text-sm text-white/70">
                <li>
                  <a href="https://base.org" className="hover:text-[#FFD700] transition">
                    Base
                  </a>
                </li>
                <li>
                  <a href="https://zora.co" className="hover:text-[#FFD700] transition">
                    Zora
                  </a>
                </li>
                <li>
                  <a href="https://farcaster.xyz" className="hover:text-[#FFD700] transition">
                    Farcaster
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 pb-8">
            <p className="text-white/60">
              © {new Date().getFullYear()} FX1 DIGITAL HUBS — Powering the Future of Web3 Creation
            </p>
            <p className="text-sm text-white/50 mt-2">
              Digital Fashion • NFT Wearables • Creator Economy
            </p>
          </div>
        </section>
      </main>
    </div>
  )
}
