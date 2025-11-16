'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import StakeAndEarn from '@/components/StakeAndEarn'

const LuxuryLandingPage = () => {
  useEffect(() => {
    // Initialize Farcaster MiniApp SDK
    const initializeSdk = async () => {
      try {
        const { sdk } = await import('@farcaster/miniapp-sdk')
        await sdk.actions.ready()
        console.log('Farcaster MiniApp SDK initialized')
      } catch (error) {
        console.log('Running outside Farcaster environment')
      }
    }
    initializeSdk()
  }, [])

  return (
    <div className="page-root min-h-screen overflow-hidden">
      {/* Hero Section */}
      <section className="hero-3d relative">
        {/* Floating accent shapes */}
        <div className="glow-accent absolute top-20 left-10 w-96 h-96"></div>
        <div className="glow-accent absolute bottom-20 right-10 w-80 h-80 animation-delay-2000"></div>

        <div className="hero-3d-content text-center px-4 md:px-6 max-w-5xl mx-auto z-10">
          {/* Logo */}
          <div className="mb-8 inline-block animate-fade-in">
            <div className="w-28 h-28 md:w-40 md:h-40 mx-auto mb-6 rounded-full shadow-2xl overflow-hidden">
              <Image
                src="https://cdn.builder.io/api/v1/image/assets%2Fb2c384075df940e6b7b3fab0ca81a270%2Fb2e8c1d7a7fa45fda204a2f41c3adae6?format=webp&width=800"
                alt="FX1 Digital Hubs Logo"
                width={200}
                height={200}
                priority
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Main Headline */}
          <h1 className="hero-title-luxury mb-6">
            FX1 Digital Hubs
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-white/90 mb-6 font-light leading-relaxed">
            Your Web3 Digital Wardrobe & Creator Hub on Base
          </p>

          {/* Description */}
          <p className="text-lg md:text-xl text-white/70 mb-10 max-w-2xl mx-auto">
            Create on-chain fashion, mint NFT wearables, and connect with creators using $FX1_HUBS & $FDH tokens. Powered by Zora, Farcaster, and Base.
          </p>

          {/* Tagline */}
          <div className="flex items-center justify-center gap-4 mb-12 text-[#FFD700] font-semibold text-sm md:text-base tracking-widest">
            <span>⚡ On Base</span>
            <span className="text-white/30">•</span>
            <span>🎨 Zora</span>
            <span className="text-white/30">•</span>
            <span>📱 Farcaster</span>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col md:flex-row gap-4 justify-center mb-12">
            <Link href="/studio">
              <button className="btn-3d-primary px-8 py-4 text-lg md:text-xl whitespace-nowrap">
                ���� Launch Mini App
              </button>
            </Link>
            <Link href="/mint">
              <button className="btn-3d px-8 py-4 text-lg md:text-xl whitespace-nowrap">
                👗 Mint On-Chain Fashion
              </button>
            </Link>
            <Link href="/token">
              <button className="btn-3d-secondary px-8 py-4 text-lg md:text-xl whitespace-nowrap">
                💰 Buy $FX1_HUBS Coin
              </button>
            </Link>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            <div className="card-3d p-4">
              <p className="text-2xl md:text-3xl font-bold text-[#FFD700]">5,847</p>
              <p className="text-xs md:text-sm text-white/60 uppercase tracking-wider">Creators</p>
            </div>
            <div className="card-3d p-4">
              <p className="text-2xl md:text-3xl font-bold text-[#FFD700]">42,000+</p>
              <p className="text-xs md:text-sm text-white/60 uppercase tracking-wider">NFTs Minted</p>
            </div>
            <div className="card-3d p-4">
              <p className="text-2xl md:text-3xl font-bold text-[#FFD700]">$12.5M</p>
              <p className="text-xs md:text-sm text-white/60 uppercase tracking-wider">Market Cap</p>
            </div>
            <div className="card-3d p-4">
              <p className="text-2xl md:text-3xl font-bold text-[#FFD700]">100M</p>
              <p className="text-xs md:text-sm text-white/60 uppercase tracking-wider">$FDH Total</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 md:py-32 px-4 md:px-6 relative">
        <div className="max-w-7xl mx-auto">
          <h2 className="section-title-luxury mb-4">Core Features</h2>
          <p className="text-center text-white/70 mb-16 text-lg">Everything you need to create, mint, and connect in Web3</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1: NFT Fashion Minting */}
            <div className="feature-card-luxury group">
              <div className="relative w-full h-40 mb-6 rounded-lg overflow-hidden">
                <Image
                  src="https://cdn.builder.io/api/v1/image/assets%2Fb2c384075df940e6b7b3fab0ca81a270%2F39c81602bd434a9e905c1fec8ad81cfd?format=webp&width=800"
                  alt="Pixelated Fashion NFTs"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold text-[#FFD700] mb-4 font-serif">NFT Fashion Minting</h3>
              <p className="text-white/80 mb-6 leading-relaxed">
                Mint exclusive FID NFT Fashion Art wearables with ETH on Base. Personalize with your Farcaster profile picture.
              </p>
              <button className="btn-3d-primary w-full py-3">
                Start Minting →
              </button>
            </div>

            {/* Feature 2: Creator Community Hub */}
            <div className="feature-card-luxury group">
              <div className="relative w-full h-40 mb-6 rounded-lg overflow-hidden">
                <Image
                  src="https://cdn.builder.io/api/v1/image/assets%2Fb2c384075df940e6b7b3fab0ca81a270%2Fdc3a31423d97457793ab59cfb9f6474e?format=webp&width=800"
                  alt="Creator Community Hub - FX1 Digital Hubs"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold text-[#FFD700] mb-4 font-serif">Creator Community Hub</h3>
              <p className="text-white/80 mb-6 leading-relaxed">
                Build and connect using $FX1_HUBS utility token for governance, staking, and exclusive drops.
              </p>
              <button className="btn-3d-primary w-full py-3">
                Join Hub →
              </button>
            </div>

            {/* Feature 3: Social Tasks & Rewards */}
            <div className="feature-card-luxury group">
              <div className="relative w-full h-40 mb-6 rounded-lg overflow-hidden">
                <Image
                  src="https://cdn.builder.io/api/v1/image/assets%2Fb2c384075df940e6b7b3fab0ca81a270%2F5b38c030bd7a4edda873f477af182f3f?format=webp&width=800"
                  alt="Wear to Earn"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold text-[#FFD700] mb-4 font-serif">Social Tasks & Rewards</h3>
              <p className="text-white/80 mb-6 leading-relaxed">
                Earn $FX1_HUBS by completing tasks: Share on Farcaster, refer friends, or curate fashion drops.
              </p>
              <button className="btn-3d-primary w-full py-3">
                View Tasks →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stake & Earn Section */}
      <StakeAndEarn />

      {/* Farcaster Integration Section */}
      <section className="py-20 md:py-32 px-4 md:px-6 relative">
        <div className="max-w-5xl mx-auto">
          <div className="card-3d p-8 md:p-12 text-center">
            <h2 className="section-title-luxury mb-6">Seamless Farcaster Experience</h2>
            <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
              Auto-detect your connected Farcaster wallet, display your profile picture, and mint personalized fashion NFTs using AI assistance.
            </p>

            <div className="bg-gradient-to-br from-[#4169E1]/20 to-[#FFD700]/10 rounded-2xl p-8 md:p-12 border border-[#FFD700]/20 mb-8">
              <p className="text-white/70 mb-6">Connect your Farcaster wallet to get started</p>
              <button className="btn-3d-primary px-8 py-4 text-lg">
                🔗 Connect Farcaster Wallet
              </button>
            </div>

            <div className="text-sm text-white/60">
              Featured Creators • Live Mints • Trending Fashion
            </div>
          </div>
        </div>
      </section>

      {/* Utility Token Section */}
      <section className="py-20 md:py-32 px-4 md:px-6 relative">
        <div className="max-w-5xl mx-auto">
          <div className="card-3d p-8 md:p-12">
            <h2 className="section-title-luxury mb-8">$FX1_HUBS: Power Your Digital Wardrobe</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="bg-white/5 rounded-xl p-6 border border-[#FFD700]/10">
                <p className="text-white/60 text-sm mb-2">Total Supply</p>
                <p className="text-3xl font-bold text-[#FFD700]">1B</p>
              </div>
              <div className="bg-white/5 rounded-xl p-6 border border-[#FFD700]/10">
                <p className="text-white/60 text-sm mb-2">Market Cap</p>
                <p className="text-3xl font-bold text-[#FFD700]">Live on DEX</p>
              </div>
              <div className="bg-white/5 rounded-xl p-6 border border-[#FFD700]/10">
                <p className="text-white/60 text-sm mb-2">Holders</p>
                <p className="text-3xl font-bold text-[#FFD700]">12K+</p>
              </div>
            </div>

            <button className="btn-3d-primary px-8 py-4 text-lg mx-auto block">
              💳 Buy Now on Base DEX
            </button>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 md:py-32 px-4 md:px-6 relative">
        <div className="max-w-7xl mx-auto">
          <h2 className="section-title-luxury mb-4">How It Works</h2>
          <p className="text-center text-white/70 mb-16 text-lg">From idea to on-chain creation in 4 simple steps</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: '1',
                title: 'Create with AI',
                description: 'Generate unique digital wearables from prompts using our AI Studio',
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
              <div key={i} className="feature-card-luxury text-center">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#FFD700] to-[#FFC700] flex items-center justify-center font-bold text-[#4169E1] text-xl mb-6 mx-auto">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-[#FFD700] mb-4 font-serif">{item.title}</h3>
                <p className="text-white/70 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 px-4 md:px-6 relative">
        <div className="max-w-4xl mx-auto text-center">
          <div className="card-3d p-8 md:p-12">
            <h2 className="section-title-luxury mb-6">Ready to Join the Revolution?</h2>
            <p className="text-white/80 text-lg mb-10">
              Connect your wallet, mint your first NFT, and become part of the FX1 Digital Hubs community.
            </p>

            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <button className="btn-3d-primary px-8 py-4 text-lg">
                🚀 Launch Now
              </button>
              <button className="btn-3d px-8 py-4 text-lg">
                📚 Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#FFD700]/10 py-12 px-4 md:px-6 mt-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <div>
              <h3 className="font-bold text-[#FFD700] uppercase tracking-wider mb-4 font-serif">Product</h3>
              <ul className="space-y-2">
                <li><a href="/studio" className="text-white/70 hover:text-[#FFD700] transition">Studio</a></li>
                <li><a href="/mint" className="text-white/70 hover:text-[#FFD700] transition">Mint</a></li>
                <li><a href="/wardrobe" className="text-white/70 hover:text-[#FFD700] transition">Wardrobe</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-[#FFD700] uppercase tracking-wider mb-4 font-serif">Community</h3>
              <ul className="space-y-2">
                <li><a href="/ecosystem" className="text-white/70 hover:text-[#FFD700] transition">Ecosystem</a></li>
                <li><a href="#" className="text-white/70 hover:text-[#FFD700] transition">Discord</a></li>
                <li><a href="https://twitter.com/fx1_hubs" className="text-white/70 hover:text-[#FFD700] transition">Twitter</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-[#FFD700] uppercase tracking-wider mb-4 font-serif">Learn</h3>
              <ul className="space-y-2">
                <li><a href="/token-utilities" className="text-white/70 hover:text-[#FFD700] transition">Token Utilities</a></li>
                <li><a href="#" className="text-white/70 hover:text-[#FFD700] transition">Docs</a></li>
                <li><a href="#" className="text-white/70 hover:text-[#FFD700] transition">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-[#FFD700] uppercase tracking-wider mb-4 font-serif">Chains</h3>
              <ul className="space-y-2">
                <li><a href="https://base.org" className="text-white/70 hover:text-[#FFD700] transition">Base</a></li>
                <li><a href="https://zora.co" className="text-white/70 hover:text-[#FFD700] transition">Zora</a></li>
                <li><a href="https://farcaster.xyz" className="text-white/70 hover:text-[#FFD700] transition">Farcaster</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-[#FFD700]/10 pt-8 text-center">
            <p className="text-white/60 mb-2">
              © {new Date().getFullYear()} FX1 DIGITAL HUBS — Powering the Future of Web3 Creation
            </p>
            <p className="text-sm text-white/50 mb-4">
              Digital Fashion • NFT Wearables • Creator Economy
            </p>
            <p className="text-xs text-white/40 mb-4">
              Built on Base • Zora • Farcaster • <a href="https://flaunch.gg/base/group/0x50ec14dc217daae2f7f3fc4c86836e0f3a52dde4" className="text-[#FFD700] hover:text-white transition">Stake & Earn on Flaunch</a>
            </p>
            <p className="text-xs text-white/40">
              Powered by Base & Zora
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default LuxuryLandingPage
