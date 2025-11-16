import { NextRequest, NextResponse } from 'next/server'

interface UserProfile {
  address: string
  username: string
  avatar?: string
  bio: string
  followers: number
  following: number
  nftCount: number
  fdhBalance: string
  totalEarnings: string
  joinedAt: string
}

export async function GET(
  request: NextRequest,
  { params }: { params: { address: string } }
) {
  try {
    const address = params.address

    if (!address) {
      return NextResponse.json(
        { error: 'Address is required' },
        { status: 400 }
      )
    }

    const profile: UserProfile = {
      address: address,
      username: `@creator_${address.slice(0, 6)}`,
      bio: 'Digital creator and Web3 enthusiast',
      followers: Math.floor(Math.random() * 10000),
      following: Math.floor(Math.random() * 1000),
      nftCount: Math.floor(Math.random() * 100),
      fdhBalance: (Math.random() * 100000).toFixed(0),
      totalEarnings: (Math.random() * 100).toFixed(2),
      joinedAt: new Date(Date.now() - Math.random() * 31536000000).toISOString(),
    }

    return NextResponse.json(profile, { status: 200 })
  } catch (error) {
    console.error('Profile retrieval error:', error)
    return NextResponse.json(
      { error: 'Failed to retrieve profile' },
      { status: 500 }
    )
  }
}

interface UpdateProfileRequest {
  username?: string
  bio?: string
  avatar?: string
}

export async function PATCH(
  request: NextRequest,
  { params }: { params: { address: string } }
) {
  try {
    const address = params.address
    const body: UpdateProfileRequest = await request.json()

    const updatedProfile: UserProfile = {
      address: address,
      username: body.username || `@creator_${address.slice(0, 6)}`,
      bio: body.bio || 'Digital creator and Web3 enthusiast',
      avatar: body.avatar,
      followers: Math.floor(Math.random() * 10000),
      following: Math.floor(Math.random() * 1000),
      nftCount: Math.floor(Math.random() * 100),
      fdhBalance: (Math.random() * 100000).toFixed(0),
      totalEarnings: (Math.random() * 100).toFixed(2),
      joinedAt: new Date().toISOString(),
    }

    return NextResponse.json(updatedProfile, { status: 200 })
  } catch (error) {
    console.error('Profile update error:', error)
    return NextResponse.json(
      { error: 'Failed to update profile' },
      { status: 500 }
    )
  }
}
