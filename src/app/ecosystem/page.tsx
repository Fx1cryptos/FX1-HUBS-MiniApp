'use client'

import Button from '@/components/Button'
import Card from '@/components/Card'

interface Project {
  name: string
  description: string
  icon: string
  status: string
  link: string
}

const projects: Project[] = [
  {
    name: 'FX1 FLUX AI',
    description: 'AI-powered creative assistant for generating and refining NFT art and content',
    icon: '🤖',
    status: 'Live',
    link: '#',
  },
  {
    name: 'Digital Wardrobe',
    description: 'Wearable NFTs and virtual fashion items for metaverse avatars',
    icon: '👗',
    status: 'Coming Soon',
    link: '#',
  },
  {
    name: 'SolHubs',
    description: 'Expansion of FX1 ecosystem to Solana blockchain',
    icon: '⛓️',
    status: 'In Development',
    link: '#',
  },
  {
    name: 'Creator Academy',
    description: 'Educational platform teaching Web3 creators how to mint and monetize',
    icon: '📚',
    status: 'Coming Soon',
    link: '#',
  },
]

const partners = [
  { name: 'Zora', icon: '🎨' },
  { name: 'Base', icon: '🔷' },
  { name: 'Farcaster', icon: '👾' },
  { name: 'Lens', icon: '🟣' },
]

export default function EcosystemPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold uppercase tracking-widest mb-4">
            FX1 Ecosystem
          </h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Powering the future of Web3 creation, fashion, and digital culture
          </p>
        </div>

        <Card className="mb-16 border-sky-400/50 bg-gradient-to-br from-sky-400/20 to-purple-500/20">
          <h2 className="text-2xl font-bold uppercase tracking-widest mb-4">Our Vision</h2>
          <p className="text-lg text-white/90 mb-4 leading-relaxed">
            FX1 Digital Hubs is building the all-in-one platform for digital creators, artists, and Web3
            enthusiasts. We're merging fashion, NFTs, AI, and social experiences into one ecosystem where
            creators can build, earn, and connect across multiple blockchains and platforms.
          </p>
          <p className="text-white/80 leading-relaxed">
            Our mission is to empower digital expression and ownership while making Web3 accessible and
            rewarding for creators of all levels.
          </p>
        </Card>

        <div className="mb-16">
          <h2 className="text-3xl font-bold uppercase tracking-widest mb-8 text-center">
            Core Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: '🎨', title: 'AI Art Studio', desc: 'Generate NFT art with AI' },
              { icon: '🪙', title: '$FDH Token', desc: 'Creator rewards & ecosystem' },
              { icon: '🔗', title: 'Multi-Chain', desc: 'Base, Zora, & more' },
              { icon: '👥', title: 'Social Hub', desc: 'Connect & collaborate' },
            ].map((feature, i) => (
              <Card key={i}>
                <div className="text-4xl mb-3">{feature.icon}</div>
                <h3 className="font-bold uppercase tracking-wider mb-2">{feature.title}</h3>
                <p className="text-sm text-white/70">{feature.desc}</p>
              </Card>
            ))}
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold uppercase tracking-widest mb-8 text-center">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, i) => (
              <Card key={i}>
                <div className="flex items-start gap-4 mb-4">
                  <div className="text-4xl flex-shrink-0">{project.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold uppercase tracking-wider mb-1">{project.name}</h3>
                    <span
                      className={`text-xs font-semibold uppercase tracking-wider px-2 py-1 rounded-full ${
                        project.status === 'Live'
                          ? 'bg-green-400/20 text-green-300'
                          : project.status === 'Coming Soon'
                            ? 'bg-blue-400/20 text-blue-300'
                            : 'bg-yellow-400/20 text-yellow-300'
                      }`}
                    >
                      {project.status}
                    </span>
                  </div>
                </div>
                <p className="text-white/80 mb-4">{project.description}</p>
                <Button variant="outline" size="sm" className="w-full">
                  Learn More
                </Button>
              </Card>
            ))}
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold uppercase tracking-widest mb-8 text-center">
            Our Partners
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {partners.map((partner, i) => (
              <Card key={i} className="text-center p-8">
                <div className="text-5xl mb-4">{partner.icon}</div>
                <p className="font-semibold uppercase tracking-wider">{partner.name}</p>
              </Card>
            ))}
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold uppercase tracking-widest mb-8 text-center">
            Technology Stack
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <h3 className="text-lg font-bold uppercase tracking-wider mb-4">Frontend</h3>
              <ul className="space-y-2 text-white/80 text-sm">
                <li>✓ Next.js 14</li>
                <li>✓ React 18</li>
                <li>✓ TailwindCSS</li>
                <li>✓ Framer Motion</li>
              </ul>
            </Card>

            <Card>
              <h3 className="text-lg font-bold uppercase tracking-wider mb-4">Web3</h3>
              <ul className="space-y-2 text-white/80 text-sm">
                <li>✓ Wagmi + Viem</li>
                <li>✓ RainbowKit</li>
                <li>✓ ethers.js</li>
                <li>✓ Zora + Base APIs</li>
              </ul>
            </Card>

            <Card>
              <h3 className="text-lg font-bold uppercase tracking-wider mb-4">Services</h3>
              <ul className="space-y-2 text-white/80 text-sm">
                <li>✓ OpenAI API</li>
                <li>✓ Pinata IPFS</li>
                <li>✓ Supabase</li>
                <li>✓ Vercel Hosting</li>
              </ul>
            </Card>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold uppercase tracking-widest mb-8 text-center">
            Tokenomics
          </h2>
          <Card className="border-sky-400/50 bg-gradient-to-br from-sky-400/20 to-purple-500/20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <p className="text-white/70 text-sm uppercase tracking-wider mb-2">Token Name</p>
                <p className="text-3xl font-bold">$FDH</p>
              </div>
              <div>
                <p className="text-white/70 text-sm uppercase tracking-wider mb-2">Total Supply</p>
                <p className="text-3xl font-bold">100M</p>
              </div>
              <div>
                <p className="text-white/70 text-sm uppercase tracking-wider mb-2">Chain</p>
                <p className="text-3xl font-bold">Base</p>
              </div>
            </div>
          </Card>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="text-center">
            <h3 className="text-lg font-bold uppercase tracking-wider mb-4">Get Started</h3>
            <p className="text-white/70 text-sm mb-6">Launch the app and start creating</p>
            <Button className="w-full">Launch App</Button>
          </Card>

          <Card className="text-center">
            <h3 className="text-lg font-bold uppercase tracking-wider mb-4">Community</h3>
            <p className="text-white/70 text-sm mb-6">Join our Discord and forums</p>
            <Button variant="secondary" className="w-full">
              Join Discord
            </Button>
          </Card>

          <Card className="text-center">
            <h3 className="text-lg font-bold uppercase tracking-wider mb-4">Documentation</h3>
            <p className="text-white/70 text-sm mb-6">Read the full technical docs</p>
            <Button variant="outline" className="w-full">
              Read Docs
            </Button>
          </Card>
        </div>
      </div>
    </div>
  )
}
