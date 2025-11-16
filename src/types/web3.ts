export interface UserWallet {
  address: string
  chain: string
  balance: string
  ensName?: string
}

export interface NFTMetadata {
  name: string
  description: string
  image: string
  prompt: string
  style: 'Fashion' | 'Metaverse' | 'Meme' | 'DeFi' | 'Avatar' | 'NFT Card' | 'Runway'
  createdAt: string
  creator: string
}

export interface CreateNFTPayload {
  metadata: NFTMetadata
  chain: 'base' | 'zora'
  contract?: string
}

export interface FeedPost {
  id: string
  author: string
  authorAddress: string
  content: string
  image?: string
  video?: string
  hashtags: string[]
  likes: number
  comments: number
  tips: string
  createdAt: string
  tippedBy?: string[]
}

export interface UserProfile {
  username: string
  address: string
  avatar?: string
  banner?: string
  bio: string
  followers: number
  following: number
  nftCount: number
  fdhBalance: string
  isFollowing?: boolean
}

export interface TokenMetrics {
  name: string
  symbol: string
  price: number
  marketCap: string
  volume24h: string
  change24h: number
  holders: number
  totalSupply: string
  contractAddress: string
}
