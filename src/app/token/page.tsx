'use client'

import { useState } from 'react'
import Button from '@/components/Button'
import Card from '@/components/Card'

interface TokenMetrics {
  price: number
  marketCap: string
  volume24h: string
  change24h: number
  holders: number
  totalSupply: string
  contractAddress: string
}

interface RewardTier {
  name: string
  requirement: string
  benefits: string[]
  apy: string
}

const tokenMetrics: TokenMetrics = {
  price: 0.125,
  marketCap: '$12.5M',
  volume24h: '$2.3M',
  change24h: 12.5,
  holders: 5847,
  totalSupply: '100M',
  contractAddress: '0x1234...5678',
}

const rewardTiers: RewardTier[] = [
  {
    name: 'Creator',
    requirement: '1000+ $FDH',
    benefits: ['10% APY', 'Creator Badge', 'Priority Listing'],
    apy: '10%',
  },
  {
    name: 'Artist',
    requirement: '10,000+ $FDH',
    benefits: ['15% APY', 'Artist Badge', 'Custom Profile'],
    apy: '15%',
  },
  {
    name: 'Founder',
    requirement: '100,000+ $FDH',
    benefits: ['20% APY', 'Founder Badge', 'Governance Vote'],
    apy: '20%',
  },
]

export default function TokenPage() {
  const [selectedTier, setSelectedTier] = useState<number | null>(null)
  const [buyAmount, setBuyAmount] = useState('100')
  const [isBuying, setIsBuying] = useState(false)

  const handleBuy = async () => {
    setIsBuying(true)
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000))
      alert(`Purchased ${buyAmount} $FDH!`)
    } finally {
      setIsBuying(false)
    }
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold uppercase tracking-widest mb-4">
            $FDH Token
          </h1>
          <p className="text-lg text-white/70">
            The native token powering the FX1 Digital Hubs ecosystem
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-12">
          <Card>
            <div className="text-3xl mb-2">💵</div>
            <p className="text-white/70 text-sm uppercase tracking-wider">Price</p>
            <p className="text-3xl font-bold">${tokenMetrics.price.toFixed(3)}</p>
            <p className="text-sm text-green-400 mt-2">+{tokenMetrics.change24h}% (24h)</p>
          </Card>

          <Card>
            <div className="text-3xl mb-2">📊</div>
            <p className="text-white/70 text-sm uppercase tracking-wider">Market Cap</p>
            <p className="text-3xl font-bold">{tokenMetrics.marketCap}</p>
          </Card>

          <Card>
            <div className="text-3xl mb-2">📈</div>
            <p className="text-white/70 text-sm uppercase tracking-wider">Volume (24h)</p>
            <p className="text-3xl font-bold">{tokenMetrics.volume24h}</p>
          </Card>

          <Card>
            <div className="text-3xl mb-2">👥</div>
            <p className="text-white/70 text-sm uppercase tracking-wider">Holders</p>
            <p className="text-3xl font-bold">{tokenMetrics.holders.toLocaleString()}</p>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2">
            <Card>
              <h2 className="text-2xl font-bold uppercase tracking-widest mb-6">Reward Tiers</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {rewardTiers.map((tier, i) => (
                  <div
                    key={i}
                    onClick={() => setSelectedTier(selectedTier === i ? null : i)}
                    className={`p-6 rounded-2xl border-2 cursor-pointer transition-all ${
                      selectedTier === i
                        ? 'border-sky-400 bg-sky-400/20'
                        : 'border-white/10 bg-white/5 hover:border-white/20'
                    }`}
                  >
                    <h3 className="text-xl font-bold uppercase tracking-wider mb-2">{tier.name}</h3>
                    <p className="text-sm text-white/70 mb-4">{tier.requirement}</p>
                    <div className="space-y-2 mb-4">
                      {tier.benefits.map((benefit, j) => (
                        <p key={j} className="text-sm text-white/80">
                          ✓ {benefit}
                        </p>
                      ))}
                    </div>
                    <p className="text-2xl font-bold text-sky-300">{tier.apy} APY</p>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="mt-8">
              <h2 className="text-2xl font-bold uppercase tracking-widest mb-6">Tokenomics</h2>
              <div className="space-y-4">
                {[
                  { label: 'Total Supply', value: tokenMetrics.totalSupply },
                  { label: 'Circulating Supply', value: '45M' },
                  { label: 'Staking Pool', value: '25M' },
                  { label: 'Team & Dev', value: '15M' },
                  { label: 'Marketing', value: '10M' },
                  { label: 'Reserve', value: '5M' },
                ].map((item, i) => (
                  <div key={i} className="flex justify-between p-3 rounded-lg bg-white/5 border border-white/10">
                    <span className="text-white/70">{item.label}</span>
                    <span className="font-semibold">{item.value}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          <div className="space-y-8">
            <Card>
              <h2 className="text-xl font-bold uppercase tracking-widest mb-4">Buy $FDH</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold uppercase tracking-wider mb-2">
                    Amount
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="number"
                      value={buyAmount}
                      onChange={(e) => setBuyAmount(e.target.value)}
                      placeholder="0"
                      className="flex-1 px-3 py-2 rounded-lg border border-white/20 bg-black/50 text-white focus:border-sky-400 focus:outline-none"
                    />
                    <span className="px-3 py-2 rounded-lg bg-white/10 text-white/70 text-sm">
                      $FDH
                    </span>
                  </div>
                </div>

                <div className="p-3 rounded-lg bg-white/5 border border-white/10">
                  <p className="text-xs text-white/60 mb-1">Total Price (≈)</p>
                  <p className="text-2xl font-bold text-sky-300">
                    ${(parseFloat(buyAmount) * tokenMetrics.price).toFixed(2)}
                  </p>
                </div>

                <Button onClick={handleBuy} isLoading={isBuying} className="w-full">
                  Buy on Uniswap
                </Button>
              </div>
            </Card>

            <Card>
              <h2 className="text-xl font-bold uppercase tracking-widest mb-4">Contract Info</h2>
              <div className="space-y-3 text-sm">
                <div>
                  <p className="text-white/60 mb-1">Chain</p>
                  <p className="text-white">Base Mainnet</p>
                </div>
                <div>
                  <p className="text-white/60 mb-1">Contract Address</p>
                  <p className="text-xs font-mono text-sky-300 break-all">
                    {tokenMetrics.contractAddress}
                  </p>
                </div>
                <Button variant="outline" size="sm" className="w-full mt-2">
                  View on Explorer
                </Button>
              </div>
            </Card>

            <Card>
              <h2 className="text-xl font-bold uppercase tracking-widest mb-4">Quick Links</h2>
              <div className="space-y-2">
                <Button variant="secondary" size="sm" className="w-full text-left">
                  📋 Whitepaper
                </Button>
                <Button variant="secondary" size="sm" className="w-full text-left">
                  📊 Analytics
                </Button>
                <Button variant="secondary" size="sm" className="w-full text-left">
                  🤝 Partnerships
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
