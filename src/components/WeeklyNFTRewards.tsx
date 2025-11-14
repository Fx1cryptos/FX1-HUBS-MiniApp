'use client'

import { useState, useEffect } from 'react'
import Card from './Card'
import Button from './Button'

interface WeeklyNFTReward {
  rank: number
  username: string
  nftName: string
  nftImage: string
  claimed: boolean
  claimedDate?: string
}

export default function WeeklyNFTRewards() {
  const [rewards, setRewards] = useState<WeeklyNFTReward[]>([
    {
      rank: 1,
      username: '@designer_dx',
      nftName: 'Golden Crown Hoodie #001',
      nftImage: 'https://cdn.builder.io/api/v1/image/assets%2Fb2c384075df940e6b7b3fab0ca81a270%2Fc61a95a9cee541f9b9e7d056a6bef2bc?format=webp&width=400',
      claimed: false,
    },
    {
      rank: 2,
      username: '@artist_web3',
      nftName: 'Silver Edition Jacket #042',
      nftImage: 'https://cdn.builder.io/api/v1/image/assets%2Fb2c384075df940e6b7b3fab0ca81a270%2Fb743697cc62d4340a133e80ffb3b2d9d?format=webp&width=400',
      claimed: false,
    },
    {
      rank: 3,
      username: '@creator_labs',
      nftName: 'Bronze Sneakers #128',
      nftImage: 'https://cdn.builder.io/api/v1/image/assets%2Fb2c384075df940e6b7b3fab0ca81a270%2F123ad070823a4c3fb2ed6364610b8b7b?format=webp&width=400',
      claimed: false,
    },
  ])

  const [claimingIndex, setClaimingIndex] = useState<number | null>(null)

  const handleClaimNFT = async (index: number) => {
    setClaimingIndex(index)
    try {
      // Simulate API call to mint NFT
      await new Promise((resolve) => setTimeout(resolve, 2000))

      const newRewards = [...rewards]
      newRewards[index] = {
        ...newRewards[index],
        claimed: true,
        claimedDate: new Date().toLocaleDateString(),
      }
      setRewards(newRewards)

      // Show success message
      alert(
        `🎉 ${rewards[index].nftName} claimed successfully! Check your wallet.`
      )
    } catch (error) {
      alert('Error claiming NFT. Please try again.')
    } finally {
      setClaimingIndex(null)
    }
  }

  return (
    <section className="py-16 px-6">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            🏆 Weekly NFT Rewards
          </h2>
          <p className="text-lg text-gray-600">
            Top 3 creators earn exclusive weekly NFTs every Sunday
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Next rewards: Sunday at 12:00 UTC
          </p>
        </div>

        {/* Rewards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {rewards.map((reward, index) => (
            <Card key={index} className="card-3d">
              <div className="text-center">
                {/* Medal */}
                <div className="text-6xl mb-4">
                  {reward.rank === 1 ? '🥇' : reward.rank === 2 ? '🥈' : '🥉'}
                </div>

                {/* Rank Badge */}
                <div className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 border border-blue-300 mb-4">
                  <p className="text-sm font-bold text-blue-900">
                    #{reward.rank} - {reward.username}
                  </p>
                </div>

                {/* NFT Image */}
                <div className="mb-4 rounded-lg overflow-hidden h-48 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                  <img
                    src={reward.nftImage}
                    alt={reward.nftName}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>

                {/* NFT Name */}
                <h3 className="text-lg font-bold text-gray-900 mb-4">{reward.nftName}</h3>

                {/* Status */}
                {reward.claimed ? (
                  <div className="p-3 rounded-lg bg-green-100 border border-green-300 mb-4">
                    <p className="text-sm font-semibold text-green-900">✓ Claimed</p>
                    <p className="text-xs text-green-800">{reward.claimedDate}</p>
                  </div>
                ) : (
                  <div className="p-3 rounded-lg bg-yellow-100 border border-yellow-300 mb-4">
                    <p className="text-sm font-semibold text-yellow-900">Pending Claim</p>
                  </div>
                )}

                {/* Claim Button */}
                {!reward.claimed && (
                  <Button
                    onClick={() => handleClaimNFT(index)}
                    disabled={claimingIndex === index}
                    className="btn-3d-primary w-full"
                  >
                    {claimingIndex === index ? 'Claiming...' : `Claim ${reward.nftName.split('#')[0]}`}
                  </Button>
                )}

                {reward.claimed && (
                  <Button variant="outline" disabled className="w-full opacity-50">
                    Already Claimed
                  </Button>
                )}

                {/* View on Zora */}
                <a
                  href="https://zora.co"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-block text-sm font-semibold text-blue-600 hover:text-blue-800 transition-colors"
                >
                  View on Zora →
                </a>
              </div>
            </Card>
          ))}
        </div>

        {/* How It Works */}
        <Card className="card-3d bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">How Weekly Rewards Work</h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <div className="text-3xl mb-3">📊</div>
              <h4 className="font-bold text-gray-900 mb-2">Leaderboard Points</h4>
              <p className="text-sm text-gray-700">
                Earn $fx1_hubs points through creating, minting, and community engagement.
              </p>
            </div>

            <div>
              <div className="text-3xl mb-3">🏆</div>
              <h4 className="font-bold text-gray-900 mb-2">Top 3 Each Week</h4>
              <p className="text-sm text-gray-700">
                The 3 creators with the highest points at end of week are selected.
              </p>
            </div>

            <div>
              <div className="text-3xl mb-3">🎁</div>
              <h4 className="font-bold text-gray-900 mb-2">Exclusive NFTs</h4>
              <p className="text-sm text-gray-700">
                Claim your unique limited-edition NFT reward instantly every Sunday.
              </p>
            </div>
          </div>

          <div className="mt-6 p-4 rounded-lg bg-white border border-gray-200">
            <p className="text-sm text-gray-600">
              <strong>💡 Pro Tip:</strong> NFTs are minted on Zora and automatically added to your wallet. Unclaimed NFTs expire after 7 days.
            </p>
          </div>
        </Card>

        {/* Leaderboard Link */}
        <div className="text-center mt-12">
          <a href="/leaderboard" className="btn-3d-primary px-8 py-3 inline-block">
            View Full Leaderboard →
          </a>
        </div>
      </div>
    </section>
  )
}
