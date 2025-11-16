'use client'

import { useState, useEffect } from 'react'
import Card from './Card'

interface MiniAppActivity {
  type: 'mint' | 'wallet' | 'transaction' | 'reward'
  user: string
  action: string
  timestamp: string
  icon: string
}

export default function MiniAppPanel() {
  const [activities, setActivities] = useState<MiniAppActivity[]>([
    {
      type: 'wallet',
      user: '@designer_dx',
      action: 'Connected wallet to Base',
      timestamp: '2 minutes ago',
      icon: '🔗',
    },
    {
      type: 'mint',
      user: '@artist_web3',
      action: 'Minted "Digital Hoodie" NFT',
      timestamp: '5 minutes ago',
      icon: '🎨',
    },
    {
      type: 'transaction',
      user: '@creator_labs',
      action: 'Staked 1000 $FDH tokens',
      timestamp: '12 minutes ago',
      icon: '💰',
    },
    {
      type: 'reward',
      user: '@fashion_mint',
      action: 'Earned 500 $fx1_hubs points',
      timestamp: '28 minutes ago',
      icon: '🏆',
    },
    {
      type: 'mint',
      user: '@nft_visionary',
      action: 'Minted "Pixelated Drips" NFT',
      timestamp: '1 hour ago',
      icon: '👕',
    },
  ])

  const [isLive, setIsLive] = useState(true)

  // Simulate live activity stream
  useEffect(() => {
    if (!isLive) return

    const interval = setInterval(() => {
      const newActivities = [
        ...activities.slice(0, 4),
        {
          type: 'mint' as const,
          user: `@user_${Math.random().toString(36).substr(2, 5)}`,
          action: 'Created new NFT on Zora',
          timestamp: 'Just now',
          icon: '✨',
        },
      ]
      setActivities(newActivities)
    }, 15000)

    return () => clearInterval(interval)
  }, [isLive, activities])

  const getMiniAppStats = () => {
    return {
      totalUsers: '5,847',
      nftsMinted: '42,000+',
      totalVolume: '$12.5M',
      activeNow: '234',
    }
  }

  const stats = getMiniAppStats()

  return (
    <section className="py-16 px-6">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block px-6 py-2 rounded-full bg-gradient-to-r from-blue-100 to-cyan-100 border border-blue-300 mb-4">
            <p className="text-sm font-bold text-blue-900">🏗️ Building on Base</p>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Live MiniApp Activity
          </h2>
          <p className="text-lg text-gray-600">
            Real-time view of FX1 Digital Hubs ecosystem on Base network
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="card-3d text-center">
            <p className="text-4xl font-bold text-blue-600 mb-2">{stats.totalUsers}</p>
            <p className="text-sm font-semibold text-gray-600">Total Creators</p>
          </Card>

          <Card className="card-3d text-center">
            <p className="text-4xl font-bold text-purple-600 mb-2">{stats.nftsMinted}</p>
            <p className="text-sm font-semibold text-gray-600">NFTs Minted</p>
          </Card>

          <Card className="card-3d text-center">
            <p className="text-4xl font-bold text-yellow-600 mb-2">{stats.totalVolume}</p>
            <p className="text-sm font-semibold text-gray-600">Total Volume</p>
          </Card>

          <Card className="card-3d text-center">
            <p className="text-4xl font-bold text-green-600 mb-2">{stats.activeNow}</p>
            <p className="text-sm font-semibold text-gray-600">Active Now</p>
          </Card>
        </div>

        {/* Live Activity Stream */}
        <Card className="card-3d">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-bold text-gray-900">Activity Stream</h3>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2">
                <span className={`inline-block w-3 h-3 rounded-full ${isLive ? 'bg-green-500 animate-pulse' : 'bg-gray-300'}`}></span>
                <span className="text-sm font-semibold text-gray-600">
                  {isLive ? 'LIVE' : 'offline'}
                </span>
              </div>
              <button
                onClick={() => setIsLive(!isLive)}
                className="px-3 py-1 rounded-lg text-xs font-bold bg-gray-100 hover:bg-gray-200 text-gray-800 transition-colors"
              >
                {isLive ? 'Pause' : 'Resume'}
              </button>
            </div>
          </div>

          {/* Activity List */}
          <div className="space-y-3 max-h-96 overflow-y-auto">
            {activities.map((activity, index) => (
              <div
                key={index}
                className="p-4 rounded-lg bg-gradient-to-r from-gray-50 to-gray-100 border border-gray-200 hover:border-blue-300 transition-colors"
              >
                <div className="flex items-start gap-4">
                  {/* Icon */}
                  <span className="text-2xl mt-1">{activity.icon}</span>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <p className="font-bold text-gray-900">{activity.user}</p>
                      <span className="text-xs text-gray-500">{activity.timestamp}</span>
                    </div>
                    <p className="text-sm text-gray-700 mt-1">{activity.action}</p>

                    {/* Type Badge */}
                    <div className="flex gap-2 mt-2">
                      <span className="inline-block px-2 py-1 rounded-full text-xs font-semibold bg-blue-100 text-blue-900 border border-blue-200">
                        {activity.type.charAt(0).toUpperCase() + activity.type.slice(1)}
                      </span>
                      {activity.type === 'mint' && (
                        <span className="inline-block px-2 py-1 rounded-full text-xs font-semibold bg-purple-100 text-purple-900 border border-purple-200">
                          Zora + Base
                        </span>
                      )}
                      {activity.type === 'wallet' && (
                        <span className="inline-block px-2 py-1 rounded-full text-xs font-semibold bg-cyan-100 text-cyan-900 border border-cyan-200">
                          Base Network
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 p-4 rounded-lg bg-blue-50 border border-blue-200">
            <p className="text-sm text-gray-700">
              <strong>🔐 On-Chain:</strong> All mints, transactions, and rewards are recorded on Base mainnet
              and Zora network.
            </p>
          </div>
        </Card>

        {/* Network Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <Card className="card-3d border-cyan-200">
            <div className="flex items-start gap-4">
              <span className="text-4xl">⚪</span>
              <div>
                <h4 className="font-bold text-gray-900 mb-2">Base Network</h4>
                <p className="text-sm text-gray-700 mb-3">
                  $FDH tokens and NFT transactions run on Base mainnet for fast, low-cost operations.
                </p>
                <a
                  href="https://base.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-bold text-blue-600 hover:text-blue-800 transition-colors"
                >
                  Learn more about Base →
                </a>
              </div>
            </div>
          </Card>

          <Card className="card-3d border-purple-200">
            <div className="flex items-start gap-4">
              <span className="text-4xl">🎨</span>
              <div>
                <h4 className="font-bold text-gray-900 mb-2">Zora Network</h4>
                <p className="text-sm text-gray-700 mb-3">
                  Creator coins ($fx1_hubs) and premium NFT drops are powered by Zora's creator economy.
                </p>
                <a
                  href="https://zora.co"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-bold text-blue-600 hover:text-blue-800 transition-colors"
                >
                  Explore Zora →
                </a>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
