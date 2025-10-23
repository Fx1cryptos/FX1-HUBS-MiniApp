'use client'

import Button from '@/components/Button'
import Card from '@/components/Card'
import Badge from '@/components/Badge'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold uppercase tracking-widest mb-4">
            About FX1 Digital Hubs
          </h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Powering the future of Web3 creation, fashion, and digital culture
          </p>
        </div>

        <Card className="mb-12 border-sky-400/50 bg-gradient-to-br from-sky-400/20 to-purple-500/20">
          <h2 className="text-3xl font-bold uppercase tracking-widest mb-6">Our Mission</h2>
          <p className="text-lg text-white/90 leading-relaxed mb-4">
            FX1 Digital Hubs is building the all-in-one platform for digital creators, artists, and
            Web3 enthusiasts. We're merging fashion, NFTs, AI, and social experiences into one
            ecosystem where creators can build, earn, and connect across multiple blockchains and
            platforms.
          </p>
          <p className="text-lg text-white/90 leading-relaxed">
            Our vision is to empower digital expression and ownership while making Web3 accessible
            and rewarding for creators of all levels.
          </p>
        </Card>

        <div className="mb-16">
          <h2 className="text-3xl font-bold uppercase tracking-widest mb-8">Why FX1?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                icon: '🎨',
                title: 'AI-Powered Creativity',
                desc: 'Generate stunning NFT art instantly with FX1 FLUX AI, combining AI with your creative vision',
              },
              {
                icon: '🪙',
                title: 'Creator Economy',
                desc: 'Earn $FDH tokens from your creations, tips, and community engagement',
              },
              {
                icon: '🔗',
                title: 'Multi-Chain',
                desc: 'Mint and trade on Base, Zora, and other leading blockchains from one platform',
              },
              {
                icon: '👥',
                title: 'Community First',
                desc: 'Connect with other creators, collaborate, and grow your audience across Web3',
              },
              {
                icon: '⚡',
                title: 'Fast & Affordable',
                desc: 'Low gas fees on Base chain mean more rewards for creators, not transaction costs',
              },
              {
                icon: '🌟',
                title: 'Web3 Native',
                desc: 'Built for the decentralized web with wallet authentication and onchain data',
              },
            ].map((feature, i) => (
              <Card key={i}>
                <div className="text-4xl mb-3">{feature.icon}</div>
                <h3 className="text-lg font-bold uppercase tracking-wider mb-2">{feature.title}</h3>
                <p className="text-white/70 text-sm leading-relaxed">{feature.desc}</p>
              </Card>
            ))}
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold uppercase tracking-widest mb-8">The Team</h2>
          <Card>
            <p className="text-white/80 mb-4 leading-relaxed">
              FX1 Digital Hubs was founded by a team of passionate builders, designers, and Web3
              enthusiasts committed to revolutionizing how creators interact with NFTs and blockchain
              technology.
            </p>
            <p className="text-white/80 leading-relaxed">
              Our team combines expertise in blockchain development, AI/ML, digital fashion, and
              community building. We're backed by investors and advisors who believe in the power of
              decentralized creativity.
            </p>
          </Card>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold uppercase tracking-widest mb-8">Technology Stack</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'Frontend',
                items: ['Next.js 14', 'React 18', 'TailwindCSS', 'Framer Motion'],
              },
              {
                title: 'Web3',
                items: ['Wagmi', 'Viem', 'ethers.js', 'RainbowKit'],
              },
              {
                title: 'Infrastructure',
                items: ['Vercel', 'Pinata IPFS', 'Supabase', 'Base & Zora'],
              },
            ].map((stack, i) => (
              <Card key={i}>
                <h3 className="text-lg font-bold uppercase tracking-wider mb-4">{stack.title}</h3>
                <ul className="space-y-2">
                  {stack.items.map((item, j) => (
                    <li key={j} className="flex items-center gap-2 text-white/80">
                      <span className="text-sky-300">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold uppercase tracking-widest mb-8">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              {
                title: 'Decentralization',
                desc: 'We believe in community ownership and transparent governance',
              },
              {
                title: 'Creativity',
                desc: 'Empowering artists and creators to express themselves without limits',
              },
              {
                title: 'Accessibility',
                desc: 'Making Web3 easy and rewarding for creators of all levels',
              },
              {
                title: 'Innovation',
                desc: 'Constantly pushing boundaries with AI, NFTs, and emerging technologies',
              },
            ].map((value, i) => (
              <Card key={i} className="border-sky-400/30">
                <h3 className="text-lg font-bold uppercase tracking-wider mb-2">{value.title}</h3>
                <p className="text-white/70 text-sm">{value.desc}</p>
              </Card>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card className="text-center">
            <div className="text-5xl mb-4">🚀</div>
            <h3 className="text-xl font-bold uppercase tracking-wider mb-2">Get Started</h3>
            <p className="text-white/70 text-sm mb-6">Launch the app and start creating today</p>
            <Button className="w-full">Launch App</Button>
          </Card>

          <Card className="text-center">
            <div className="text-5xl mb-4">💬</div>
            <h3 className="text-xl font-bold uppercase tracking-wider mb-2">Join Community</h3>
            <p className="text-white/70 text-sm mb-6">Connect with creators and builders</p>
            <Button variant="secondary" className="w-full">
              Discord
            </Button>
          </Card>

          <Card className="text-center">
            <div className="text-5xl mb-4">📬</div>
            <h3 className="text-xl font-bold uppercase tracking-wider mb-2">Stay Updated</h3>
            <p className="text-white/70 text-sm mb-6">Get the latest news and updates</p>
            <Button variant="outline" className="w-full">
              Newsletter
            </Button>
          </Card>
        </div>

        <Card className="border-purple-400/50 bg-gradient-to-br from-purple-400/20 to-pink-500/20">
          <h2 className="text-2xl font-bold uppercase tracking-widest mb-4">Join the Movement</h2>
          <p className="text-white/80 mb-6 leading-relaxed">
            FX1 Digital Hubs is more than just a platform — it's a movement of creators,
            collectors, and innovators building the future of Web3. Whether you're an artist,
            fashion designer, technologist, or Web3 enthusiast, there's a place for you here.
          </p>
          <div className="flex gap-4 flex-wrap">
            <Button>Get Started Now</Button>
            <Button variant="outline">Read the Docs</Button>
          </div>
        </Card>
      </div>
    </div>
  )
}
