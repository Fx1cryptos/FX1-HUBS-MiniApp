'use client'

import Link from 'next/link'
import Button from '@/components/Button'
import Card from '@/components/Card'

export default function TokenUtilities() {
  return (
    <div className="min-h-screen bg-black text-white py-12">
      <main className="mx-auto max-w-6xl px-6">
        {/* Hero Section */}
        <section className="mb-16 text-center">
          <h1 className="text-5xl md:text-7xl font-bold uppercase tracking-widest mb-6">
            <span className="bg-gradient-to-r from-[#4169E1] via-[#FFD700] to-[#4169E1] bg-clip-text text-transparent">
              Token Utilities
            </span>
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Discover how $fx1_hubs and $FDH tokens power the FX1 Digital Hubs ecosystem
          </p>
        </section>

        {/* Primary Token */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold uppercase tracking-widest mb-8 text-[#4169E1]">
            🎁 $fx1_hubs Creator Coin
          </h2>
          <p className="text-lg text-white/80 mb-8">
            The Zora Creator Coin powering creator rewards and ecosystem engagement
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <Card className="border-[#4169E1]/50 bg-gradient-to-br from-[#4169E1]/15 to-transparent">
              <h3 className="text-2xl font-bold text-[#FFD700] mb-4">💎 Premium Wardrobe Access</h3>
              <p className="text-white/80 mb-4">
                Unlock exclusive digital wearables and limited-edition fashion collections available only to $fx1_hubs holders.
              </p>
              <ul className="space-y-2 text-white/70">
                <li>✓ Access to founder's collection</li>
                <li>✓ Early drops before public release</li>
                <li>✓ Premium tier wearables</li>
              </ul>
            </Card>

            <Card className="border-[#4169E1]/50 bg-gradient-to-br from-[#4169E1]/15 to-transparent">
              <h3 className="text-2xl font-bold text-[#FFD700] mb-4">⭐ Boosted Rankings</h3>
              <p className="text-white/80 mb-4">
                Hold $fx1_hubs coins to boost your position on the leaderboard and increase visibility in the creator community.
              </p>
              <ul className="space-y-2 text-white/70">
                <li>✓ Higher leaderboard positions</li>
                <li>✓ Featured creator status</li>
                <li>✓ Enhanced community recognition</li>
              </ul>
            </Card>

            <Card className="border-[#4169E1]/50 bg-gradient-to-br from-[#4169E1]/15 to-transparent">
              <h3 className="text-2xl font-bold text-[#FFD700] mb-4">✨ Special Edition Mints</h3>
              <p className="text-white/80 mb-4">
                Participate in exclusive minting events and create special edition fashion NFTs with unique properties and rarity.
              </p>
              <ul className="space-y-2 text-white/70">
                <li>✓ Exclusive minting events</li>
                <li>✓ Rare edition privileges</li>
                <li>��� Special drop access</li>
              </ul>
            </Card>

            <Card className="border-[#4169E1]/50 bg-gradient-to-br from-[#4169E1]/15 to-transparent">
              <h3 className="text-2xl font-bold text-[#FFD700] mb-4">💰 Creator Monetization</h3>
              <p className="text-white/80 mb-4">
                Monetize your creativity directly through the $fx1_hubs creator economy with transparent, fair rewards.
              </p>
              <ul className="space-y-2 text-white/70">
                <li>✓ Direct creator payouts</li>
                <li>✓ Community tips & rewards</li>
                <li>✓ Revenue sharing opportunities</li>
              </ul>
            </Card>
          </div>
        </section>

        {/* Secondary Token */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold uppercase tracking-widest mb-8 text-[#FFD700]">
            💎 $FDH Base Token
          </h2>
          <p className="text-lg text-white/80 mb-8">
            The utility token that fuels all in-app transactions and platform interactions
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <Card className="border-[#FFD700]/50 bg-gradient-to-br from-[#FFD700]/15 to-transparent">
              <h3 className="text-2xl font-bold text-[#4169E1] mb-4">👗 Minting & Upgrading</h3>
              <p className="text-white/80 mb-4">
                Use $FDH to mint new digital wearables and upgrade existing ones with enhanced attributes and rarity levels.
              </p>
              <ul className="space-y-2 text-white/70">
                <li>✓ Mint digital fashion NFTs</li>
                <li>✓ Upgrade rarity levels</li>
                <li>✓ Add special attributes</li>
              </ul>
            </Card>

            <Card className="border-[#FFD700]/50 bg-gradient-to-br from-[#FFD700]/15 to-transparent">
              <h3 className="text-2xl font-bold text-[#4169E1] mb-4">🚀 Early Access Drops</h3>
              <p className="text-white/80 mb-4">
                Spend $FDH to unlock early access to upcoming collections and limited-time fashion drops before general release.
              </p>
              <ul className="space-y-2 text-white/70">
                <li>✓ Early drop access</li>
                <li>✓ First-mover advantages</li>
                <li>✓ Limited edition windows</li>
              </ul>
            </Card>

            <Card className="border-[#FFD700]/50 bg-gradient-to-br from-[#FFD700]/15 to-transparent">
              <h3 className="text-2xl font-bold text-[#4169E1] mb-4">🛒 In-App Purchases</h3>
              <p className="text-white/80 mb-4">
                Spend $FDH for marketplace purchases, premium features, and exclusive items within the FX1 Digital Hubs ecosystem.
              </p>
              <ul className="space-y-2 text-white/70">
                <li>✓ Marketplace transactions</li>
                <li>✓ Premium features</li>
                <li>✓ Exclusive item access</li>
              </ul>
            </Card>

            <Card className="border-[#FFD700]/50 bg-gradient-to-br from-[#FFD700]/15 to-transparent">
              <h3 className="text-2xl font-bold text-[#4169E1] mb-4">🎁 Seasonal Rewards</h3>
              <p className="text-white/80 mb-4">
                Earn $FDH through seasonal campaigns, community challenges, and engagement milestones throughout the year.
              </p>
              <ul className="space-y-2 text-white/70">
                <li>✓ Seasonal campaigns</li>
                <li>✓ Community challenges</li>
                <li>✓ Engagement rewards</li>
              </ul>
            </Card>
          </div>
        </section>

        {/* Token Comparison */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold uppercase tracking-widest mb-8 text-center text-[#FFD700]">
            Token Comparison
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-[#4169E1]/30">
                  <th className="text-left p-4 text-[#FFD700] font-bold uppercase">Feature</th>
                  <th className="text-center p-4 text-[#4169E1] font-bold uppercase">$fx1_hubs</th>
                  <th className="text-center p-4 text-[#FFD700] font-bold uppercase">$FDH</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/10 hover:bg-white/5 transition-colors">
                  <td className="p-4 text-white/80">Blockchain</td>
                  <td className="text-center p-4 text-white/70">Zora Network</td>
                  <td className="text-center p-4 text-white/70">Base</td>
                </tr>
                <tr className="border-b border-white/10 hover:bg-white/5 transition-colors">
                  <td className="p-4 text-white/80">Type</td>
                  <td className="text-center p-4 text-white/70">Creator Coin</td>
                  <td className="text-center p-4 text-white/70">ERC20 Token</td>
                </tr>
                <tr className="border-b border-white/10 hover:bg-white/5 transition-colors">
                  <td className="p-4 text-white/80">Minting Power</td>
                  <td className="text-center p-4 text-white/70">❌</td>
                  <td className="text-center p-4 text-white/70">✅</td>
                </tr>
                <tr className="border-b border-white/10 hover:bg-white/5 transition-colors">
                  <td className="p-4 text-white/80">Creator Rewards</td>
                  <td className="text-center p-4 text-white/70">✅</td>
                  <td className="text-center p-4 text-white/70">⭐</td>
                </tr>
                <tr className="border-b border-white/10 hover:bg-white/5 transition-colors">
                  <td className="p-4 text-white/80">Early Access</td>
                  <td className="text-center p-4 text-white/70">✅</td>
                  <td className="text-center p-4 text-white/70">✅</td>
                </tr>
                <tr className="border-b border-white/10 hover:bg-white/5 transition-colors">
                  <td className="p-4 text-white/80">Governance</td>
                  <td className="text-center p-4 text-white/70">✅</td>
                  <td className="text-center p-4 text-white/70">Planned</td>
                </tr>
                <tr className="border-b border-white/10 hover:bg-white/5 transition-colors">
                  <td className="p-4 text-white/80">Staking</td>
                  <td className="text-center p-4 text-white/70">✅</td>
                  <td className="text-center p-4 text-white/70">✅</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Getting Started */}
        <section className="mb-16 p-8 rounded-3xl border border-[#4169E1]/50 bg-gradient-to-r from-[#4169E1]/15 to-[#FFD700]/10 backdrop-blur">
          <h2 className="text-3xl font-bold uppercase tracking-widest mb-6 text-[#FFD700]">
            Getting Started
          </h2>
          <ol className="space-y-4 mb-8 text-white/80 text-lg">
            <li className="flex gap-4">
              <span className="text-[#FFD700] font-bold text-2xl">1.</span>
              <span>Connect your wallet (MetaMask, WalletConnect, etc.)</span>
            </li>
            <li className="flex gap-4">
              <span className="text-[#FFD700] font-bold text-2xl">2.</span>
              <span>Purchase or earn $FDH tokens on Base network</span>
            </li>
            <li className="flex gap-4">
              <span className="text-[#FFD700] font-bold text-2xl">3.</span>
              <span>Accumulate $fx1_hubs coins through creator engagement</span>
            </li>
            <li className="flex gap-4">
              <span className="text-[#FFD700] font-bold text-2xl">4.</span>
              <span>Start minting, upgrading, and accessing exclusive drops</span>
            </li>
          </ol>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link href="/studio" className="w-full">
              <Button size="lg" className="w-full bg-gradient-to-r from-[#4169E1] to-[#FFD700] hover:from-[#4169E1]/90 hover:to-[#FFD700]/90">
                🎨 Create Wearables
              </Button>
            </Link>
            <Link href="/mint" className="w-full">
              <Button size="lg" className="w-full bg-gradient-to-r from-[#FFD700] to-[#4169E1] hover:from-[#FFD700]/90 hover:to-[#4169E1]/90">
                👗 Mint Fashion
              </Button>
            </Link>
            <Link href="/dashboard" className="w-full">
              <Button size="lg" variant="outline" className="w-full border-[#4169E1] text-[#4169E1] hover:bg-[#4169E1]/10">
                📊 View Dashboard
              </Button>
            </Link>
          </div>
        </section>

        {/* Footer */}
        <section className="border-t border-white/10 pt-12 text-center">
          <p className="text-white/60 mb-2">
            © {new Date().getFullYear()} FX1 DIGITAL HUBS — Token Utilities
          </p>
          <p className="text-sm text-white/50">
            Powered by $fx1_hubs and $FDH
          </p>
        </section>
      </main>
    </div>
  )
}
