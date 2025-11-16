'use client'

import { useState } from 'react'
import Button from '@/components/Button'
import Card from '@/components/Card'

interface NFTCollection {
  id: string
  name: string
  image: string
  floorPrice: string
  listed: number
  total: number
}

const sampleCollections: NFTCollection[] = [
  {
    id: '1',
    name: 'FX1 Fashion Series 1',
    image: '👗',
    floorPrice: '2.5 ETH',
    listed: 3,
    total: 10,
  },
  {
    id: '2',
    name: 'Digital Avatars Gen 2',
    image: '👤',
    floorPrice: '1.2 ETH',
    listed: 5,
    total: 8,
  },
  {
    id: '3',
    name: 'Metaverse Wearables',
    image: '🌐',
    floorPrice: '0.8 ETH',
    listed: 2,
    total: 12,
  },
]

export default function DashboardPage() {
  const [collections] = useState<NFTCollection[]>(sampleCollections)
  const [stakingAmount, setStakingAmount] = useState('0')
  const [isStaking, setIsStaking] = useState(false)

  const handleStake = async () => {
    setIsStaking(true)
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000))
      alert(`Staked ${stakingAmount} $FDH!`)
      setStakingAmount('0')
    } finally {
      setIsStaking(false)
    }
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold uppercase tracking-widest mb-4">
            Your Dashboard
          </h1>
          <p className="text-lg text-white/70">Track your NFTs, earnings, and engagement metrics</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-12">
          <Card>
            <div className="text-3xl mb-2">🎨</div>
            <p className="text-white/70 text-sm uppercase tracking-wider">Total NFTs</p>
            <p className="text-3xl font-bold">30</p>
          </Card>

          <Card>
            <div className="text-3xl mb-2">💰</div>
            <p className="text-white/70 text-sm uppercase tracking-wider">$FDH Balance</p>
            <p className="text-3xl font-bold">15,420</p>
          </Card>

          <Card>
            <div className="text-3xl mb-2">📈</div>
            <p className="text-white/70 text-sm uppercase tracking-wider">Total Earnings</p>
            <p className="text-3xl font-bold">42.5 ETH</p>
          </Card>

          <Card>
            <div className="text-3xl mb-2">👥</div>
            <p className="text-white/70 text-sm uppercase tracking-wider">Followers</p>
            <p className="text-3xl font-bold">2,847</p>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2">
            <Card>
              <h2 className="text-xl font-bold uppercase tracking-widest mb-6">Your Collections</h2>
              <div className="space-y-4">
                {collections.map((collection) => (
                  <div
                    key={collection.id}
                    className="flex items-center gap-4 p-4 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 transition-all"
                  >
                    <div className="text-4xl">{collection.image}</div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-white">{collection.name}</h3>
                      <p className="text-sm text-white/60">
                        {collection.listed} listed • {collection.total} total
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-white/60">Floor</p>
                      <p className="font-bold text-sky-300">{collection.floorPrice}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="mt-8">
              <h2 className="text-xl font-bold uppercase tracking-widest mb-6">Activity</h2>
              <div className="space-y-4">
                {['Sold 1 Digital Avatar for 1.5 ETH', 'Listed 3 Fashion Series NFTs', 'Received 150 $FDH tips', 'Gained 42 new followers'].map((activity, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 rounded-lg bg-white/5">
                    <span className="text-xl">✓</span>
                    <span className="text-white/80 text-sm">{activity}</span>
                    <span className="ml-auto text-xs text-white/50">2h ago</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          <div className="space-y-8">
            <Card>
              <h2 className="text-lg font-bold uppercase tracking-widest mb-4">$FDH Staking</h2>
              <div className="space-y-4">
                <div>
                  <p className="text-white/60 text-sm mb-2">Amount to Stake</p>
                  <input
                    type="number"
                    value={stakingAmount}
                    onChange={(e) => setStakingAmount(e.target.value)}
                    placeholder="0"
                    className="w-full px-3 py-2 rounded-lg border border-white/20 bg-black/50 text-white focus:border-sky-400 focus:outline-none"
                  />
                </div>
                <Button size="md" onClick={handleStake} isLoading={isStaking} className="w-full">
                  Stake $FDH
                </Button>
              </div>
              <div className="mt-4 p-3 rounded-lg bg-sky-400/10 border border-sky-400/30">
                <p className="text-xs text-white/70 mb-1">Annual APY</p>
                <p className="text-lg font-bold text-sky-300">12.5%</p>
              </div>
            </Card>

            <Card>
              <h2 className="text-lg font-bold uppercase tracking-widest mb-4">Quick Links</h2>
              <div className="space-y-2">
                <Button variant="secondary" size="sm" className="w-full text-left">
                  📊 View Analytics
                </Button>
                <Button variant="secondary" size="sm" className="w-full text-left">
                  💾 Backup Wallet
                </Button>
                <Button variant="secondary" size="sm" className="w-full text-left">
                  ⚙️ Settings
                </Button>
              </div>
            </Card>

            <Card>
              <h2 className="text-lg font-bold uppercase tracking-widest mb-4">My Wallet</h2>
              <div className="space-y-3 text-sm">
                <div>
                  <p className="text-white/60 mb-1">Address</p>
                  <p className="text-xs font-mono text-sky-300 break-all">0x1234...5678</p>
                </div>
                <div>
                  <p className="text-white/60 mb-1">Network</p>
                  <p className="text-white">Base Mainnet</p>
                </div>
                <Button variant="outline" size="sm" className="w-full mt-2">
                  Disconnect
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
