'use client'

import Card from '@/components/Card'

export default function Connect() {
  const socialLinks = [
    {
      name: 'Zora',
      url: 'https://zora.co/@fx1_hubs',
      emoji: '🎨',
      description: 'Creator coins and onchain platform',
      color: 'from-[#4169E1]/20 to-[#4169E1]/10',
      borderColor: 'border-[#4169E1]/50',
    },
    {
      name: 'Base Profile',
      url: 'https://base.app/profile/olamsfx1',
      emoji: '⚪',
      description: 'Base network community profile',
      color: 'from-[#FFD700]/20 to-[#FFD700]/10',
      borderColor: 'border-[#FFD700]/50',
    },
    {
      name: 'Discord',
      url: 'https://discord.gg/MxpKzSqa',
      emoji: '💬',
      description: 'Join our community server',
      color: 'from-purple-600/20 to-purple-600/10',
      borderColor: 'border-purple-600/50',
    },
    {
      name: 'Telegram',
      url: 'https://t.me/fx1digitalhubs',
      emoji: '✈️',
      description: 'Real-time updates and announcements',
      color: 'from-sky-500/20 to-sky-500/10',
      borderColor: 'border-sky-500/50',
    },
    {
      name: 'YouTube',
      url: 'https://www.youtube.com/@FX1_Hubs',
      emoji: '📹',
      description: 'Tutorials and behind-the-scenes',
      color: 'from-red-600/20 to-red-600/10',
      borderColor: 'border-red-600/50',
    },
    {
      name: 'TikTok',
      url: 'https://www.tiktok.com/@fx1_hubs',
      emoji: '📱',
      description: 'Latest trends and creator content',
      color: 'from-black/30 to-black/20',
      borderColor: 'border-white/30',
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white py-12">
      <main className="mx-auto max-w-6xl px-6">
        {/* Hero Section */}
        <section className="mb-16 text-center">
          <h1 className="text-5xl md:text-7xl font-bold uppercase tracking-widest mb-6">
            <span className="bg-gradient-to-r from-[#4169E1] via-[#FFD700] to-[#4169E1] bg-clip-text text-transparent">
              Connect with Us
            </span>
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Join the FX1 Digital Hubs community across all platforms
          </p>
        </section>

        {/* Social Links Grid */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {socialLinks.map((link, i) => (
              <a
                key={i}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <Card className={`h-full cursor-pointer transition-all duration-300 hover:shadow-lg hover:scale-105 border-2 ${link.borderColor} bg-gradient-to-br ${link.color}`}>
                  <div className="flex flex-col items-center justify-center text-center h-full gap-4">
                    <div className="text-6xl group-hover:scale-110 transition-transform duration-300">
                      {link.emoji}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-[#FFD700] mb-2 group-hover:text-white transition-colors">
                        {link.name}
                      </h3>
                      <p className="text-white/70 text-sm">
                        {link.description}
                      </p>
                    </div>
                    <div className="pt-4 border-t border-white/10 w-full">
                      <p className="text-xs text-white/60 group-hover:text-[#4169E1] transition-colors">
                        Click to visit →
                      </p>
                    </div>
                  </div>
                </Card>
              </a>
            ))}
          </div>
        </section>

        {/* Community Stats */}
        <section className="mb-16 p-8 rounded-3xl border border-[#4169E1]/50 bg-gradient-to-r from-[#4169E1]/15 to-[#FFD700]/10 backdrop-blur">
          <h2 className="text-3xl font-bold uppercase tracking-widest mb-8 text-center text-[#FFD700]">
            Community Stats
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <p className="text-3xl font-bold text-[#FFD700] mb-2">5,847+</p>
              <p className="text-white/70">Creators</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-[#FFD700] mb-2">42,000+</p>
              <p className="text-white/70">NFTs Minted</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-[#FFD700] mb-2">$12.5M</p>
              <p className="text-white/70">Market Cap</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-[#FFD700] mb-2">100M</p>
              <p className="text-white/70">$FDH Total</p>
            </div>
          </div>
        </section>

        {/* Why Connect */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold uppercase tracking-widest mb-8 text-center text-[#FFD700]">
            Why Join Our Community
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: '🎓 Learn & Grow',
                description: 'Access tutorials, guides, and educational content from experienced creators',
              },
              {
                title: '🤝 Network',
                description: 'Connect with other creators and collaborate on exciting projects',
              },
              {
                title: '🎁 Exclusive Drops',
                description: 'Get early access to limited-edition NFT collections and special events',
              },
              {
                title: '💰 Earn Rewards',
                description: 'Participate in challenges and campaigns to earn $FDH and $fx1_hubs coins',
              },
              {
                title: '🎯 Creator Support',
                description: 'Get direct feedback and support from the FX1 team and community',
              },
              {
                title: '🌍 Global Reach',
                description: 'Connect with a global community of Web3 enthusiasts and creators',
              },
            ].map((item, i) => (
              <Card key={i} className="border-[#4169E1]/30 bg-[#4169E1]/5 hover:bg-[#4169E1]/10 transition-all duration-300">
                <h3 className="text-xl font-bold text-[#FFD700] mb-3">{item.title}</h3>
                <p className="text-white/80">{item.description}</p>
              </Card>
            ))}
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="mb-16 p-8 rounded-3xl border border-[#FFD700]/50 bg-gradient-to-r from-[#FFD700]/15 to-[#4169E1]/10 backdrop-blur text-center">
          <h2 className="text-3xl font-bold uppercase tracking-widest mb-4 text-[#FFD700]">
            Stay Updated
          </h2>
          <p className="text-white/80 mb-6 text-lg">
            Never miss the latest announcements, drops, and opportunities
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-grow px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:border-[#FFD700] focus:outline-none transition-colors"
            />
            <button className="px-6 py-3 rounded-lg bg-gradient-to-r from-[#4169E1] to-[#FFD700] hover:from-[#4169E1]/90 hover:to-[#FFD700]/90 font-bold text-black uppercase tracking-wider transition-all duration-300">
              Subscribe
            </button>
          </div>
        </section>

        {/* Quick Links */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold uppercase tracking-widest mb-8 text-center text-[#FFD700]">
            Quick Links
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <a href="/" className="p-4 rounded-lg border border-[#4169E1]/30 bg-[#4169E1]/5 hover:bg-[#4169E1]/10 text-center transition-all duration-300">
              <p className="font-bold text-[#FFD700] mb-2">🏠 Home</p>
              <p className="text-sm text-white/70">Back to homepage</p>
            </a>
            <a href="/token-utilities" className="p-4 rounded-lg border border-[#4169E1]/30 bg-[#4169E1]/5 hover:bg-[#4169E1]/10 text-center transition-all duration-300">
              <p className="font-bold text-[#FFD700] mb-2">💎 Token Utilities</p>
              <p className="text-sm text-white/70">Learn about our tokens</p>
            </a>
            <a href="/studio" className="p-4 rounded-lg border border-[#4169E1]/30 bg-[#4169E1]/5 hover:bg-[#4169E1]/10 text-center transition-all duration-300">
              <p className="font-bold text-[#FFD700] mb-2">🎨 Studio</p>
              <p className="text-sm text-white/70">Start creating today</p>
            </a>
          </div>
        </section>

        {/* Footer */}
        <section className="border-t border-white/10 pt-12 text-center">
          <p className="text-white/60 mb-2">
            © {new Date().getFullYear()} FX1 DIGITAL HUBS
          </p>
          <p className="text-sm text-white/50">
            Community • Creators • Web3
          </p>
        </section>
      </main>
    </div>
  )
}
