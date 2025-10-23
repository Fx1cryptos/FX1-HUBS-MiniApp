'use client'

import Link from 'next/link'
import Button from '@/components/Button'
import Card from '@/components/Card'

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

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <main className="mx-auto max-w-7xl px-6 py-12">
        {/* Hero Section */}
        <section className="mb-20 text-center py-12">
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold uppercase tracking-widest mb-6">
              <span className="bg-gradient-to-r from-sky-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                FX1 Digital Hubs
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto mb-4">
              The all-in-one platform for Web3 creators, artists, and digital innovators
            </p>
            <p className="text-lg text-white/60 max-w-2xl mx-auto">
              Create AI-generated NFT art, mint on Base and Zora, engage with the community, and earn $FDH rewards
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link href="/studio">
              <Button size="lg">
                ✨ Launch App
              </Button>
            </Link>
            <Link href="/ecosystem">
              <Button variant="outline" size="lg">
                📖 Learn More
              </Button>
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
            {stats.map((stat, i) => (
              <div key={i} className="p-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur">
                <p className="text-2xl md:text-3xl font-bold text-sky-300">{stat.value}</p>
                <p className="text-xs md:text-sm text-white/60 uppercase tracking-wider">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Features Grid */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-widest mb-4">
              Core Features
            </h2>
            <p className="text-white/70">Everything you need to create, mint, and connect in Web3</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, i) => (
              <Link key={i} href={feature.link}>
                <Card className="group hover:border-sky-400/50 h-full cursor-pointer transition-all duration-300">
                  <div className="flex flex-col h-full">
                    <div className="text-5xl mb-4">{feature.icon}</div>
                    <h3 className="text-xl font-bold uppercase tracking-wider mb-3">{feature.title}</h3>
                    <p className="text-white/70 flex-grow mb-6">{feature.description}</p>
                    <Button variant="outline" size="sm" className="w-full">
                      {feature.label}
                    </Button>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </section>

        {/* How It Works */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-widest mb-4">
              How It Works
            </h2>
            <p className="text-white/70">From idea to onchain creation in 4 simple steps</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: '1',
                title: 'Create with AI',
                description: 'Use FX1 FLUX AI to generate unique NFT art from prompts',
              },
              {
                step: '2',
                title: 'Mint on Chain',
                description: 'Launch your creation as an NFT on Base or Zora',
              },
              {
                step: '3',
                title: 'Share & Engage',
                description: 'Post to the social feed and engage with the community',
              },
              {
                step: '4',
                title: 'Earn Rewards',
                description: 'Collect $FDH tips and stake for passive income',
              },
            ].map((item, i) => (
              <Card key={i} className="border-sky-400/30 bg-gradient-to-br from-sky-400/10 to-transparent">
                <div className="flex items-start gap-4 mb-4">
                  <div className="h-10 w-10 rounded-full bg-sky-400/30 flex items-center justify-center font-bold text-sky-300 text-lg">
                    {item.step}
                  </div>
                </div>
                <h3 className="text-lg font-bold uppercase tracking-wider mb-2">{item.title}</h3>
                <p className="text-white/70">{item.description}</p>
              </Card>
            ))}
          </div>
        </section>

        {/* Featured Collections */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-widest mb-4">
              Featured Collections
            </h2>
            <p className="text-white/70">Trending creations from the FX1 community</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: 'Digital Fashion Series 1', creator: '@designer_001', items: 42, volume: '145.5 ETH' },
              { name: 'Metaverse Avatars Gen 2', creator: '@artist_labs', items: 28, volume: '89.2 ETH' },
              { name: 'Web3 Fashion Week', creator: '@fx1_collective', items: 156, volume: '340.8 ETH' },
            ].map((collection, i) => (
              <Card key={i}>
                <div className="h-40 rounded-lg bg-gradient-to-br from-sky-400/20 to-purple-500/20 flex items-center justify-center mb-4">
                  <span className="text-5xl">
                    {i === 0 ? '👗' : i === 1 ? '👤' : '🌐'}
                  </span>
                </div>
                <h3 className="text-lg font-bold mb-2">{collection.name}</h3>
                <p className="text-sm text-white/60 mb-4">{collection.creator}</p>
                <div className="flex justify-between text-sm mb-4">
                  <span className="text-white/70">{collection.items} items</span>
                  <span className="text-sky-300 font-semibold">{collection.volume}</span>
                </div>
                <Button variant="outline" size="sm" className="w-full">
                  View Collection
                </Button>
              </Card>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="mb-20">
          <Card className="border-sky-400/50 bg-gradient-to-r from-sky-400/20 via-purple-500/20 to-pink-500/20 p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-widest mb-6">
              Ready to Create?
            </h2>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Join thousands of creators building the future of digital fashion and Web3 culture
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/studio">
                <Button size="lg">Start Creating Now</Button>
              </Link>
              <Link href="/ecosystem">
                <Button variant="outline" size="lg">
                  Explore Ecosystem
                </Button>
              </Link>
            </div>
          </Card>
        </section>

        {/* Testimonials / Community */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-widest mb-4">
              Trusted by Creators
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: '@designer_dx', feedback: 'FX1 made it so easy to create and mint my first NFT collection!' },
              { name: '@artist_web3', feedback: 'The AI assistance and community tips have transformed my income.' },
              { name: '@creator_labs', feedback: 'Best all-in-one platform for Web3 creators. Highly recommend!' },
            ].map((testimonial, i) => (
              <Card key={i} className="border-white/10">
                <div className="flex gap-2 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <span key={j} className="text-yellow-400">
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-white/80 mb-4 italic">"{testimonial.feedback}"</p>
                <p className="text-sm font-semibold text-sky-300">{testimonial.name}</p>
              </Card>
            ))}
          </div>
        </section>

        {/* Footer Links */}
        <section className="border-t border-white/10 pt-12 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div>
              <h3 className="font-bold uppercase tracking-wider mb-3">Product</h3>
              <ul className="space-y-2 text-sm text-white/70">
                <li>
                  <Link href="/studio" className="hover:text-white transition">
                    Studio
                  </Link>
                </li>
                <li>
                  <Link href="/mint" className="hover:text-white transition">
                    Mint
                  </Link>
                </li>
                <li>
                  <Link href="/feed" className="hover:text-white transition">
                    Feed
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold uppercase tracking-wider mb-3">Community</h3>
              <ul className="space-y-2 text-sm text-white/70">
                <li>
                  <Link href="/ecosystem" className="hover:text-white transition">
                    Ecosystem
                  </Link>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Discord
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/fx1_hubs" className="hover:text-white transition">
                    Twitter
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold uppercase tracking-wider mb-3">Learn</h3>
              <ul className="space-y-2 text-sm text-white/70">
                <li>
                  <Link href="/token" className="hover:text-white transition">
                    $FDH Token
                  </Link>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Docs
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold uppercase tracking-wider mb-3">Chains</h3>
              <ul className="space-y-2 text-sm text-white/70">
                <li>
                  <a href="https://base.org" className="hover:text-white transition">
                    Base
                  </a>
                </li>
                <li>
                  <a href="https://zora.co" className="hover:text-white transition">
                    Zora
                  </a>
                </li>
                <li>
                  <a href="https://farcaster.xyz" className="hover:text-white transition">
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
              Create • Mint • Connect. All in One Decentralized Hub.
            </p>
          </div>
        </section>
      </main>
    </div>
  )
}
