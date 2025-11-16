'use client'

import { useParams } from 'next/navigation'
import Button from '@/components/Button'
import Card from '@/components/Card'

interface NFT {
  id: string
  name: string
  image: string
  price: string
  likes: number
}

const sampleNFTs: NFT[] = [
  { id: '1', name: 'Digital Fashion #1', image: '👗', price: '2.5 ETH', likes: 234 },
  { id: '2', name: 'Avatar Genesis', image: '👤', price: '1.8 ETH', likes: 567 },
  { id: '3', name: 'Metaverse Wearable', image: '🌐', price: '1.2 ETH', likes: 345 },
  { id: '4', name: 'Runway Showcase', image: '✨', price: '3.0 ETH', likes: 891 },
]

export default function ProfilePage() {
  const params = useParams()
  const username = params?.username as string || 'creator'
  const isOwnProfile = username === 'your-username'

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="mb-12">
          <div className="h-48 rounded-2xl border border-white/10 bg-gradient-to-br from-sky-400/20 to-purple-500/20" />

          <div className="flex flex-col md:flex-row gap-8 -mt-16 px-6 relative z-10">
            <div className="text-6xl flex-shrink-0">👨‍🎨</div>

            <div className="flex-1">
              <h1 className="text-3xl md:text-4xl font-bold uppercase tracking-widest mb-2">
                @{username}
              </h1>
              <p className="text-white/70 mb-4">Digital Artist & NFT Creator</p>

              <div className="flex flex-wrap gap-4">
                <div>
                  <p className="text-white/60 text-sm uppercase tracking-wider">Followers</p>
                  <p className="text-2xl font-bold">2,847</p>
                </div>
                <div>
                  <p className="text-white/60 text-sm uppercase tracking-wider">NFTs Created</p>
                  <p className="text-2xl font-bold">42</p>
                </div>
                <div>
                  <p className="text-white/60 text-sm uppercase tracking-wider">Total Sales</p>
                  <p className="text-2xl font-bold">145.5 ETH</p>
                </div>
              </div>
            </div>

            <div className="flex gap-3 md:items-start">
              {isOwnProfile ? (
                <>
                  <Button>✏️ Edit Profile</Button>
                  <Button variant="secondary">⚙️ Settings</Button>
                </>
              ) : (
                <>
                  <Button>👥 Follow</Button>
                  <Button variant="secondary">💬 Message</Button>
                  <Button variant="ghost">💰 Tip with $FDH</Button>
                </>
              )}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2">
            <Card>
              <h2 className="text-2xl font-bold uppercase tracking-widest mb-6">Bio</h2>
              <p className="text-white/80 leading-relaxed mb-4">
                Digital artist exploring the intersection of fashion, technology, and Web3. Passionate
                about creating wearable NFTs that empower creators and collectors.
              </p>
              <p className="text-white/80 leading-relaxed">
                Currently building with FX1 Digital Hubs to revolutionize onchain fashion and creativity.
              </p>
            </Card>

            <Card className="mt-8">
              <h2 className="text-2xl font-bold uppercase tracking-widest mb-6">NFT Collection</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {sampleNFTs.map((nft) => (
                  <div
                    key={nft.id}
                    className="rounded-2xl border border-white/10 bg-white/5 overflow-hidden hover:border-white/30 transition-all group cursor-pointer"
                  >
                    <div className="text-6xl h-40 flex items-center justify-center bg-gradient-to-br from-sky-400/10 to-purple-500/10 group-hover:from-sky-400/20 group-hover:to-purple-500/20 transition-all">
                      {nft.image}
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-white mb-2">{nft.name}</h3>
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-white/70">{nft.price}</span>
                        <span className="text-white/70">❤️ {nft.likes}</span>
                      </div>
                      <Button size="sm" className="w-full mt-3">
                        View Collection
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          <div className="space-y-8">
            <Card>
              <h2 className="text-lg font-bold uppercase tracking-widest mb-4">Stats</h2>
              <div className="space-y-4">
                {[
                  { label: 'Floor Price', value: '1.2 ETH' },
                  { label: 'Volume (7d)', value: '12.5 ETH' },
                  { label: 'Avg Price', value: '2.1 ETH' },
                  { label: 'Unique Collectors', value: '342' },
                ].map((stat, i) => (
                  <div key={i} className="flex justify-between p-3 rounded-lg bg-white/5 border border-white/10">
                    <span className="text-white/70">{stat.label}</span>
                    <span className="font-semibold">{stat.value}</span>
                  </div>
                ))}
              </div>
            </Card>

            <Card>
              <h2 className="text-lg font-bold uppercase tracking-widest mb-4">Social Links</h2>
              <div className="space-y-2">
                <a href="#" className="flex items-center gap-2 p-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                  <span>𝕏</span>
                  <span className="text-sm text-white/70">Twitter</span>
                </a>
                <a href="#" className="flex items-center gap-2 p-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                  <span>🟣</span>
                  <span className="text-sm text-white/70">Lens Protocol</span>
                </a>
                <a href="#" className="flex items-center gap-2 p-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                  <span>👾</span>
                  <span className="text-sm text-white/70">Farcaster</span>
                </a>
              </div>
            </Card>

            <Card>
              <h2 className="text-lg font-bold uppercase tracking-widest mb-4">Creator Tier</h2>
              <div className="p-4 rounded-lg bg-gradient-to-br from-sky-400/20 to-purple-500/20 border border-sky-400/30 mb-4">
                <p className="text-sm text-white/70 mb-1">Current Tier</p>
                <p className="text-2xl font-bold">⭐ Founder</p>
              </div>
              <Button variant="outline" className="w-full" size="sm">
                Learn More About Tiers
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
