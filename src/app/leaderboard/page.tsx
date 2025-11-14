'use client'

import Link from 'next/link'
import Button from '@/components/Button'
import Card from '@/components/Card'
import { useState } from 'react'

export default function Leaderboard() {
  const [timeFrame, setTimeFrame] = useState('all-time')

  const leaderboardData = [
    { rank: 1, name: '@designer_dx', points: 12847, earnings: '42.5 ETH', nfts: 45, emoji: '🥇' },
    { rank: 2, name: '@artist_web3', points: 9542, earnings: '31.2 ETH', nfts: 38, emoji: '🥈' },
    { rank: 3, name: '@creator_labs', points: 7321, earnings: '24.8 ETH', nfts: 32, emoji: '🥉' },
    { rank: 4, name: '@fashion_mint', points: 6145, earnings: '18.5 ETH', nfts: 28, emoji: '⭐' },
    { rank: 5, name: '@nft_visionary', points: 5032, earnings: '15.3 ETH', nfts: 22, emoji: '⭐' },
    { rank: 6, name: '@creative_soul', points: 4521, earnings: '13.7 ETH', nfts: 19, emoji: '⭐' },
    { rank: 7, name: '@digital_artist', points: 3856, earnings: '11.2 ETH', nfts: 16, emoji: '⭐' },
    { rank: 8, name: '@web3_pioneer', points: 3245, earnings: '9.8 ETH', nfts: 14, emoji: '⭐' },
    { rank: 9, name: '@fashion_guru', points: 2847, earnings: '8.5 ETH', nfts: 12, emoji: '⭐' },
    { rank: 10, name: '@nft_wizard', points: 2156, earnings: '6.4 ETH', nfts: 9, emoji: '⭐' },
  ]

  return (
    <div className="min-h-screen bg-black text-white py-12">
      <main className="mx-auto max-w-6xl px-6">
        {/* Hero Section */}
        <section className="mb-16 text-center">
          <h1 className="text-5xl md:text-7xl font-bold uppercase tracking-widest mb-6">
            <span className="bg-gradient-to-r from-[#4169E1] via-[#FFD700] to-[#4169E1] bg-clip-text text-transparent">
              Leaderboard
            </span>
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto mb-8">
            Top creators by $fx1_hubs Coin Points
          </p>

          {/* Time Frame Selector */}
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { value: 'week', label: '📅 This Week' },
              { value: 'month', label: '📆 This Month' },
              { value: 'all-time', label: '🏆 All Time' },
            ].map((option) => (
              <button
                key={option.value}
                onClick={() => setTimeFrame(option.value)}
                className={`px-6 py-3 rounded-full font-bold uppercase tracking-wider transition-all duration-300 ${
                  timeFrame === option.value
                    ? 'bg-gradient-to-r from-[#4169E1] to-[#FFD700] text-black shadow-lg'
                    : 'border-2 border-[#4169E1]/50 text-white/80 hover:border-[#FFD700]/50'
                }`}
              >
                {option.label}
              </button>
            ))}
          </div>
        </section>

        {/* Leaderboard Table */}
        <section className="mb-16">
          <Card className="border-[#4169E1]/50 bg-black/70 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-[#4169E1]/30 bg-[#4169E1]/10">
                    <th className="px-6 py-4 text-left text-sm font-bold uppercase tracking-wider text-[#FFD700]">
                      Rank
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-bold uppercase tracking-wider text-[#FFD700]">
                      Creator
                    </th>
                    <th className="px-6 py-4 text-center text-sm font-bold uppercase tracking-wider text-[#FFD700]">
                      $fx1_hubs Points
                    </th>
                    <th className="px-6 py-4 text-center text-sm font-bold uppercase tracking-wider text-[#FFD700]">
                      Earnings
                    </th>
                    <th className="px-6 py-4 text-center text-sm font-bold uppercase tracking-wider text-[#FFD700]">
                      NFTs
                    </th>
                    <th className="px-6 py-4 text-right text-sm font-bold uppercase tracking-wider text-[#FFD700]">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {leaderboardData.map((user, i) => (
                    <tr
                      key={i}
                      className="border-b border-white/10 hover:bg-[#4169E1]/10 transition-colors duration-300"
                    >
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <span className="text-2xl">{user.emoji}</span>
                          <span className="font-bold text-[#FFD700] text-lg">#{user.rank}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div>
                          <p className="font-bold text-white">{user.name}</p>
                          <p className="text-xs text-white/50">Creator Account</p>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <p className="font-bold text-[#FFD700] text-lg">{user.points.toLocaleString()}</p>
                        <p className="text-xs text-white/50">Points</p>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <p className="font-bold text-white">{user.earnings}</p>
                        <p className="text-xs text-white/50">Total</p>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <p className="font-bold text-[#4169E1]">{user.nfts}</p>
                        <p className="text-xs text-white/50">Created</p>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <Link href={`/profile/${user.name}`}>
                          <button className="px-4 py-2 rounded-lg bg-[#4169E1]/20 hover:bg-[#4169E1]/30 text-[#4169E1] font-bold uppercase text-xs tracking-wider transition-colors duration-300">
                            View
                          </button>
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </section>

        {/* Stats Section */}
        <section className="mb-16 p-8 rounded-3xl border border-[#4169E1]/50 bg-gradient-to-r from-[#4169E1]/15 to-[#FFD700]/10 backdrop-blur">
          <h2 className="text-3xl font-bold uppercase tracking-widest mb-8 text-center text-[#FFD700]">
            Leaderboard Stats
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <p className="text-4xl font-bold text-[#FFD700] mb-2">5,847+</p>
              <p className="text-white/70">Active Creators</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-[#FFD700] mb-2">42,000+</p>
              <p className="text-white/70">NFTs Created</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-[#FFD700] mb-2">$250M+</p>
              <p className="text-white/70">Total Volume</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-[#FFD700] mb-2">100M</p>
              <p className="text-white/70">$FDH Distributed</p>
            </div>
          </div>
        </section>

        {/* How to Climb */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold uppercase tracking-widest mb-8 text-center text-[#FFD700]">
            How to Climb the Leaderboard
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border-[#4169E1]/30 bg-gradient-to-br from-[#4169E1]/15 to-transparent text-center">
              <div className="text-5xl mb-4">🎨</div>
              <h3 className="text-lg font-bold text-[#FFD700] mb-3">Create NFTs</h3>
              <p className="text-white/80 text-sm mb-4">
                Earn points by creating and minting unique digital wearables
              </p>
              <p className="text-[#4169E1] font-bold text-sm">+50 points per mint</p>
            </Card>

            <Card className="border-[#4169E1]/30 bg-gradient-to-br from-[#4169E1]/15 to-transparent text-center">
              <div className="text-5xl mb-4">💬</div>
              <h3 className="text-lg font-bold text-[#FFD700] mb-3">Engage</h3>
              <p className="text-white/80 text-sm mb-4">
                Earn points by posting, commenting, and liking community content
              </p>
              <p className="text-[#4169E1] font-bold text-sm">+10 points per action</p>
            </Card>

            <Card className="border-[#4169E1]/30 bg-gradient-to-br from-[#4169E1]/15 to-transparent text-center">
              <div className="text-5xl mb-4">🤝</div>
              <h3 className="text-lg font-bold text-[#FFD700] mb-3">Collaborate</h3>
              <p className="text-white/80 text-sm mb-4">
                Earn points through successful collaborations with other creators
              </p>
              <p className="text-[#4169E1] font-bold text-sm">+100 points per collab</p>
            </Card>

            <Card className="border-[#4169E1]/30 bg-gradient-to-br from-[#4169E1]/15 to-transparent text-center">
              <div className="text-5xl mb-4">💰</div>
              <h3 className="text-lg font-bold text-[#FFD700] mb-3">Earn Tips</h3>
              <p className="text-white/80 text-sm mb-4">
                Receive $FDH tips from the community for your awesome creations
              </p>
              <p className="text-[#4169E1] font-bold text-sm">Earn rewards</p>
            </Card>
          </div>
        </section>

        {/* Rewards Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold uppercase tracking-widest mb-8 text-center text-[#FFD700]">
            Monthly Rewards
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="border-[#FFD700]/50 bg-gradient-to-br from-[#FFD700]/20 to-[#4169E1]/10">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold text-[#FFD700]">🥇 1st Place</h3>
                <span className="text-3xl">👑</span>
              </div>
              <p className="text-4xl font-bold text-white mb-4">10,000 $FDH</p>
              <p className="text-white/80 mb-4">
                + Featured on homepage
                <br />+ Creator spotlight badge
                <br />+ 30 day verified status
              </p>
              <div className="text-sm text-[#FFD700] font-bold">Total Value: ~$5,000</div>
            </Card>

            <Card className="border-[#4169E1]/50 bg-gradient-to-br from-[#4169E1]/20 to-[#FFD700]/10">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold text-[#4169E1]">🥈 2nd Place</h3>
                <span className="text-3xl">🎖️</span>
              </div>
              <p className="text-4xl font-bold text-white mb-4">5,000 $FDH</p>
              <p className="text-white/80 mb-4">
                + Featured in newsletter
                <br />+ Boosted visibility
                <br />+ 14 day verified status
              </p>
              <div className="text-sm text-[#4169E1] font-bold">Total Value: ~$2,500</div>
            </Card>

            <Card className="border-[#FFD700]/50 bg-gradient-to-br from-[#FFD700]/10 to-[#4169E1]/10">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold text-[#FFD700]">🥉 3rd Place</h3>
                <span className="text-3xl">🏅</span>
              </div>
              <p className="text-4xl font-bold text-white mb-4">2,500 $FDH</p>
              <p className="text-white/80 mb-4">
                + Community recognition
                <br />+ Increased exposure
                <br />+ 7 day verified status
              </p>
              <div className="text-sm text-[#FFD700] font-bold">Total Value: ~$1,250</div>
            </Card>
          </div>
        </section>

        {/* CTA Section */}
        <section className="mb-16 p-8 rounded-3xl border border-[#FFD700]/50 bg-gradient-to-r from-[#FFD700]/15 to-[#4169E1]/10 backdrop-blur text-center">
          <h2 className="text-3xl font-bold uppercase tracking-widest mb-6 text-[#FFD700]">
            Ready to Climb?
          </h2>
          <p className="text-white/80 mb-8 text-lg">
            Start creating and building your reputation in the FX1 community
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/studio">
              <Button size="lg" className="bg-gradient-to-r from-[#4169E1] to-[#FFD700] hover:from-[#4169E1]/90 hover:to-[#FFD700]/90">
                🎨 Start Creating
              </Button>
            </Link>
            <Link href="/">
              <Button size="lg" variant="outline" className="border-[#FFD700] text-[#FFD700] hover:bg-[#FFD700]/10">
                ← Back Home
              </Button>
            </Link>
          </div>
        </section>

        {/* Footer */}
        <section className="border-t border-white/10 pt-12 text-center">
          <p className="text-white/60 mb-2">
            © {new Date().getFullYear()} FX1 DIGITAL HUBS — Leaderboard
          </p>
          <p className="text-sm text-white/50">
            Compete • Create • Earn
          </p>
        </section>
      </main>
    </div>
  )
}
